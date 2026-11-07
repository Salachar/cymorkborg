import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

import {
  CYBORG_WS_HOST_KEY,
  CYBORG_WS_NAME_KEY,
} from '@utils/localStorage';

const DEFAULT_HOST = 'wss://ws.cymorkborg.com';

// Reconnect backoff after an unexpected drop: 3s, 6s, 12s ... up to 30s.
const RECONNECT_BASE = 3000;
const RECONNECT_MAX = 30000;

// After waking, an app-level ping must answer within this, or we reconnect.
const PING_TIMEOUT = 4000;

// Catch-up position for the server's session log, and shares waiting to send.
const SESSION_KEY = 'cyborg_ws_session'; // { sessionId, lastSeq }
const OUTBOX_KEY = 'cyborg_ws_outbox';   // [message, ...]

function getStoredHost() {
  try {
    const saved = localStorage.getItem(CYBORG_WS_HOST_KEY);
    return saved !== null ? saved : DEFAULT_HOST;
  } catch { return DEFAULT_HOST; }
}

function saveStoredHost(h) {
  try { localStorage.setItem(CYBORG_WS_HOST_KEY, h); } catch {}
}
function getStoredName() {
  try { return localStorage.getItem(CYBORG_WS_NAME_KEY) ?? ''; } catch { return ''; }
}
function saveStoredName(n) {
  try { localStorage.setItem(CYBORG_WS_NAME_KEY, n); } catch {}
}

function clearStoredConnection() {
  try {
    localStorage.removeItem(CYBORG_WS_HOST_KEY);
    localStorage.removeItem(CYBORG_WS_NAME_KEY);
  } catch {}
}

function readJSON(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch { return fallback; }
}

function writeJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

// Strip all handlers from a socket so it can no longer affect app state,
// no matter what it does on the wire after this point (finishes closing,
// gets a stray message in flight, errors out, etc).
function detachSocket(ws) {
  if (!ws) return;
  ws.onopen = null;
  ws.onmessage = null;
  ws.onclose = null;
  ws.onerror = null;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const CyborgSocketContext = createContext(null);

export function useCyborgSocket() {
  const ctx = useContext(CyborgSocketContext);
  if (!ctx) throw new Error('useCyborgSocket must be used inside CyborgSocketProvider');
  return ctx;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function CyborgSocketProvider({ children }) {
  const [host, setHostState] = useState(getStoredHost);
  const [playerName, setPlayerNameState] = useState(getStoredName);
  const [status, setStatus] = useState('disconnected');
  const [connectedClients, setConnectedClients] = useState([]);
  const [gmStatus, setGmStatus] = useState({ time: null, note: null, activity: null });
  const [outboxCount, setOutboxCount] = useState(() => readJSON(OUTBOX_KEY, []).length);

  const wsRef = useRef(null);
  const reconnectTimer = useRef(null);
  const reconnectAttempts = useRef(0);
  const pingTimer = useRef(null);
  const hostRef = useRef(host);
  const nameRef = useRef(playerName);
  // Map of message type -> Set of handlers
  const handlersRef = useRef(new Map());

  hostRef.current = host;
  nameRef.current = playerName;

  // ── Subscription ────────────────────────────────────────────────────────────

  const subscribe = useCallback((type, handler) => {
    if (!handlersRef.current.has(type)) {
      handlersRef.current.set(type, new Set());
    }
    handlersRef.current.get(type).add(handler);
    return () => {
      handlersRef.current.get(type)?.delete(handler);
    };
  }, []);

  const dispatch = useCallback((data) => {
    const handlers = handlersRef.current.get(data.type);
    if (handlers) {
      handlers.forEach(fn => fn(data));
    }
  }, []);

  // ── Send ────────────────────────────────────────────────────────────────────

  const isOpen = () => wsRef.current && wsRef.current.readyState === WebSocket.OPEN;

  // Send now, or fail (returns false). For things that only make sense
  // live, like device transfers.
  const send = useCallback((message) => {
    if (!isOpen()) return false;
    wsRef.current.send(JSON.stringify(message));
    return true;
  }, []);

  // Send now, or queue it to go out on the next connection. Returns
  // 'sent' or 'queued'. For shares, which should never be lost.
  const sendOrQueue = useCallback((message) => {
    if (isOpen()) {
      wsRef.current.send(JSON.stringify(message));
      return 'sent';
    }
    const outbox = [...readJSON(OUTBOX_KEY, []), message];
    writeJSON(OUTBOX_KEY, outbox);
    setOutboxCount(outbox.length);
    return 'queued';
  }, []);

  const flushOutbox = useCallback(() => {
    const outbox = readJSON(OUTBOX_KEY, []);
    if (!outbox.length || !isOpen()) return;
    outbox.forEach((message) => wsRef.current.send(JSON.stringify(message)));
    writeJSON(OUTBOX_KEY, []);
    setOutboxCount(0);
    // Lets the app mark queued shares as sent.
    window.dispatchEvent(new CustomEvent('outboxFlushed', { detail: { messages: outbox } }));
  }, []);

  // ── Connect ─────────────────────────────────────────────────────────────────

  const scheduleReconnect = useCallback(() => {
    clearTimeout(reconnectTimer.current);
    if (!hostRef.current.trim() || !nameRef.current.trim()) return;
    const delay = Math.min(RECONNECT_MAX, RECONNECT_BASE * 2 ** reconnectAttempts.current);
    reconnectAttempts.current += 1;
    // connectRef breaks the circular dependency with connect().
    reconnectTimer.current = setTimeout(() => connectRef.current?.(), delay);
  }, []);

  const connectRef = useRef(null);

  const connect = useCallback((targetHost, targetName) => {
    const h = (targetHost ?? hostRef.current).trim();
    const n = (targetName ?? nameRef.current).trim();
    if (!h || !n) return;

    // Fully neutralize whatever socket we had before starting a new one —
    // it can still be mid-close on the wire, but it can no longer touch
    // app state or schedule a reconnect once we've detached it here.
    if (wsRef.current) {
      const prev = wsRef.current;
      detachSocket(prev);
      prev.close();
      wsRef.current = null;
    }
    clearTimeout(reconnectTimer.current);
    clearTimeout(pingTimer.current);

    const url = h.startsWith('ws://') || h.startsWith('wss://')
      ? h
      : `ws://${h}:3002`;

    setStatus('connecting');

    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      if (wsRef.current !== ws) return; // stale — a newer connect() has since taken over
      setStatus('connected');
      reconnectAttempts.current = 0;
      const session = readJSON(SESSION_KEY, {});
      ws.send(JSON.stringify({
        type: 'register',
        name: n,
        sessionId: session.sessionId ?? null,
        lastSeq: session.lastSeq ?? 0,
      }));
    };

    ws.onmessage = (event) => {
      if (wsRef.current !== ws) return;
      let data;
      try { data = JSON.parse(event.data); } catch { return; }

      // Track how far through the server's session log we are.
      if (typeof data.seq === 'number' && data.type !== 'welcome') {
        const session = readJSON(SESSION_KEY, {});
        if (data.seq > (session.lastSeq ?? 0)) {
          writeJSON(SESSION_KEY, { ...session, lastSeq: data.seq });
        }
      }

      switch (data.type) {
        case 'welcome': {
          // A different session means the server restarted (or this is a
          // new device): start counting from zero; the server replays all.
          const session = readJSON(SESSION_KEY, {});
          if (session.sessionId !== data.sessionId) {
            writeJSON(SESSION_KEY, { sessionId: data.sessionId, lastSeq: 0 });
          }
          flushOutbox();
          dispatch(data);
          return;
        }
        case 'pong':
          clearTimeout(pingTimer.current);
          return;
        case 'client_list':
          setConnectedClients(data.clients ?? []);
          return;
        case 'gm_status':
          setGmStatus({ time: data.time ?? null, note: data.note ?? null, activity: data.activity ?? null });
          return;
        default:
          dispatch(data);
      }
    };

    ws.onclose = () => {
      // If this isn't the socket we currently care about, it's a stale
      // handler that slipped through — ignore it entirely.
      if (wsRef.current !== ws) return;
      setStatus('disconnected');
      setConnectedClients([]);
      wsRef.current = null;
      clearTimeout(pingTimer.current);
      // Unexpected drop (manual disconnect detaches first, so never lands
      // here): try again with backoff.
      // scheduleReconnect();
    };

    ws.onerror = () => {
      if (wsRef.current !== ws) return;
      setStatus('error');
    };
  }, [dispatch, flushOutbox]);

  connectRef.current = connect;

  // ── Wake / network checks ───────────────────────────────────────────────────
  // A sleeping tablet loses its socket, and after waking the socket can still
  // look open while dead. On wake: reconnect if closed, otherwise ping and
  // reconnect if no pong arrives in time.

  const checkConnection = useCallback(() => {
    if (!hostRef.current.trim() || !nameRef.current.trim()) return;

    if (!isOpen()) {
      reconnectAttempts.current = 0;
      connectRef.current?.();
      return;
    }

    clearTimeout(pingTimer.current);
    pingTimer.current = setTimeout(() => {
      reconnectAttempts.current = 0;
      connectRef.current?.();
    }, PING_TIMEOUT);
    wsRef.current.send(JSON.stringify({ type: 'ping', t: Date.now() }));
  }, []);

  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === 'visible') checkConnection();
    };
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('online', checkConnection);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('online', checkConnection);
    };
  }, [checkConnection]);

  // ── Disconnect ──────────────────────────────────────────────────────────────

  const disconnect = useCallback(() => {
    clearTimeout(reconnectTimer.current);
    clearTimeout(pingTimer.current);
    reconnectAttempts.current = 0;
    if (wsRef.current) {
      const ws = wsRef.current;
      detachSocket(ws);
      ws.close();
      wsRef.current = null;
    }
    clearStoredConnection();
    writeJSON(OUTBOX_KEY, []);
    setOutboxCount(0);
    setHostState(DEFAULT_HOST);
    setPlayerNameState('');
    setStatus('disconnected');
    setConnectedClients([]);
  }, []);

  // ── Setters ─────────────────────────────────────────────────────────────────

  const setHost = (h) => { setHostState(h); saveStoredHost(h); };
  const setPlayerName = (n) => { setPlayerNameState(n); saveStoredName(n); };

  // ── Initial connect / cleanup ───────────────────────────────────────────────

  useEffect(() => {
    const h = getStoredHost().trim();
    const n = getStoredName().trim();
    if (h && n) connect(h, n);

    return () => {
      clearTimeout(reconnectTimer.current);
      clearTimeout(pingTimer.current);
      if (wsRef.current) {
        detachSocket(wsRef.current);
        wsRef.current.close();
      }
    };
  }, []);

  const value = {
    host, setHost,
    playerName, setPlayerName,
    status,
    connectedClients,
    gmStatus,
    connect,
    disconnect,
    send,
    sendOrQueue,
    outboxCount,
    subscribe,
  };

  return (
    <CyborgSocketContext.Provider value={value}>
      {children}
    </CyborgSocketContext.Provider>
  );
}
