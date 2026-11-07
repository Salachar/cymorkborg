import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useCyborgSocket } from '@hooks/useCyborgSocket';
import ToastDisplay from '@components/Toast/Toast';
import { resolveShare } from '@utils/commands';

// The RetCom command tree, so shares can be resolved on any tab. Adjust
// the path if your commands live elsewhere.
import CY_CITY_COMMANDS from '../pages/RetComDevice/commands/cy_city';

import {
  CYBORG_SHARED_FEED_KEY,
  RETCOM_PASSWORD_KEY,
  getNotes,
  saveNotes,
} from '@utils/localStorage';

/**
 * The shared feed (persisted): everything shared this session, both ways.
 *   note   { kind: 'note', id, text, from, createdAt, updatedAt }
 *   node   { kind: 'node', id: 'node:<path>', path, unlocked, from, mine, createdAt }
 * Keyed by id, so re-shares and catch-up replays update instead of
 * duplicating. Older entries have no `kind` and are read as notes.
 */

function getStoredSharedFeed() {
  try {
    const saved = localStorage.getItem(CYBORG_SHARED_FEED_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch { return {}; }
}

function saveSharedFeed(feed) {
  try { localStorage.setItem(CYBORG_SHARED_FEED_KEY, JSON.stringify(feed)); } catch {}
}

function getStoredPasswords() {
  try {
    const saved = localStorage.getItem(RETCOM_PASSWORD_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch { return {}; }
}

function savePasswords(passwords) {
  try { localStorage.setItem(RETCOM_PASSWORD_KEY, JSON.stringify(passwords)); } catch {}
}

export const nodeEntryId = (path) => `node:${path}`;
export const nodeName = (path) => String(path).split('/').pop();

const retcomLink = (path) => ({ to: '/retcom', focusPath: path });

// ─── Context ──────────────────────────────────────────────────────────────────

const GameMessagesContext = createContext(null);

export function useGameMessages() {
  const ctx = useContext(GameMessagesContext);
  if (!ctx) throw new Error('useGameMessages must be used inside GameMessagesProvider');
  return ctx;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function GameMessagesProvider({ children }) {
  const { subscribe, sendOrQueue, playerName } = useCyborgSocket();

  const [sharedFeed, setSharedFeed] = useState(getStoredSharedFeed);
  const [toasts, setToasts] = useState([]);
  const [lastMessage, setLastMessage] = useState(null);

  // What a catch-up replay brought in, for the one summary toast.
  const replayCounts = useRef({ notes: 0, nodes: 0 });

  // ── Feed helpers ───────────────────────────────────────────────────────────

  const updateFeed = useCallback((fn) => {
    const next = fn(getStoredSharedFeed());
    saveSharedFeed(next);
    setSharedFeed(next);
  }, []);

  // Same node shared again: one card, newest time, unlocked if either was.
  const upsertNode = useCallback((path, unlocked, from, mine) => {
    updateFeed((feed) => {
      const id = nodeEntryId(path);
      const existing = feed[id];
      return {
        ...feed,
        [id]: {
          kind: 'node',
          id,
          path,
          unlocked: Boolean(unlocked || existing?.unlocked),
          from: from || null,
          mine: Boolean(mine),
          createdAt: Date.now(),
        },
      };
    });
  }, [updateFeed]);

  // ── Toast helpers ──────────────────────────────────────────────────────────

  // link: { to, focusPath? }. Linked toasts stay up a little longer.
  const addToast = useCallback(({ type = 'info', label, message, link = null, duration }) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const entry = {
      id,
      type,
      label,
      message,
      link,
      duration: duration ?? (link ? 8000 : 5000),
      timestamp: Date.now(),
    };
    setToasts((prev) => [...prev, entry]);
    setLastMessage(entry);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // ── Incoming: share_note ───────────────────────────────────────────────────

  useEffect(() => {
    return subscribe('share_note', (data) => {
      if (!data.note?.id) return;

      updateFeed((feed) => ({
        ...feed,
        [data.note.id]: { ...data.note, kind: 'note' },
      }));

      if (data.replayed) {
        replayCounts.current.notes += 1;
        return;
      }

      const from = data.note.from ? `${data.note.from}: ` : '';
      const preview = data.note.text.length > 60
        ? data.note.text.slice(0, 60) + '…'
        : data.note.text;
      addToast({ type: 'note', label: 'NOTE', message: `${from}${preview}`, link: { to: '/netlog' } });
    });
  }, [subscribe, addToast, updateFeed]);

  // ── Incoming: share_node ───────────────────────────────────────────────────

  useEffect(() => {
    return subscribe('share_node', (data) => {
      if (!data.path) return;

      // Unlock the node's ancestors (and the node, if the sender had it),
      // using passwords from our own tree.
      const unlocks = resolveShare(CY_CITY_COMMANDS, data.path, data.unlocked);
      if (Object.keys(unlocks).length) {
        savePasswords({ ...getStoredPasswords(), ...unlocks });
        window.dispatchEvent(new CustomEvent('passwordReceived', { detail: { unlocks } }));
      }

      upsertNode(data.path, data.unlocked, data.from, false);

      if (data.replayed) {
        replayCounts.current.nodes += 1;
        return;
      }

      const from = data.from ? `${data.from}: ` : '';
      addToast({
        type: 'share',
        label: data.unlocked ? 'UNLOCKED' : 'SHARED',
        message: `${from}${nodeName(data.path)}${data.unlocked ? '' : ' (locked)'}`,
        link: retcomLink(data.path),
      });
    });
  }, [subscribe, addToast, upsertNode]);

  // ── Catch-up summary ───────────────────────────────────────────────────────

  useEffect(() => {
    return subscribe('replay_done', () => {
      const { notes, nodes } = replayCounts.current;
      replayCounts.current = { notes: 0, nodes: 0 };
      if (!notes && !nodes) return;

      const parts = [];
      if (notes) parts.push(`${notes} note${notes === 1 ? '' : 's'}`);
      if (nodes) parts.push(`${nodes} node${nodes === 1 ? '' : 's'}`);
      addToast({
        type: 'summary',
        label: 'CAUGHT UP',
        message: `While you were away: ${parts.join(', ')}.`,
        link: { to: '/netlog' },
      });
    });
  }, [subscribe, addToast]);

  // ── Queued shares went out ─────────────────────────────────────────────────
  // Notes shared while offline are marked shareQueued; clear that once the
  // outbox sends, then tell the Net Log to reload if it's open.

  useEffect(() => {
    const onFlushed = (e) => {
      const ids = (e.detail?.messages || [])
        .filter((m) => m.type === 'share_note' && m.note?.id)
        .map((m) => m.note.id);
      if (!ids.length) return;

      const notes = getNotes();
      let changed = false;
      const next = notes.map((n) => {
        if (n.shareQueued && ids.includes(n.id)) {
          changed = true;
          return { ...n, shareQueued: false };
        }
        return n;
      });
      if (!changed) return;
      saveNotes(next);
      window.dispatchEvent(new CustomEvent('notesUpdated'));
    };
    window.addEventListener('outboxFlushed', onFlushed);
    return () => window.removeEventListener('outboxFlushed', onFlushed);
  }, []);

  // ── Outgoing ───────────────────────────────────────────────────────────────

  // Returns 'sent' or 'queued' (sent on the next connection).
  const shareNote = useCallback((note) => {
    return sendOrQueue({
      type: 'share_note',
      note: {
        id: note.id,
        text: note.text,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
        from: playerName || null,
      },
    });
  }, [sendOrQueue, playerName]);

  // Share any RetCom node. `unlocked`: whether the sender has it open.
  // Recorded in our own feed too ("You shared ..."). Returns 'sent' or 'queued'.
  const shareNode = useCallback((path, unlocked) => {
    const result = sendOrQueue({
      type: 'share_node',
      path,
      unlocked: Boolean(unlocked),
      from: playerName || null,
    });
    upsertNode(path, unlocked, playerName, true);
    return result;
  }, [sendOrQueue, playerName, upsertNode]);

  // ── Local ──────────────────────────────────────────────────────────────────

  // Remove any feed entry (shared note or node) from this device's feed.
  const deleteSharedEntry = useCallback((id) => {
    updateFeed((feed) => {
      const next = { ...feed };
      delete next[id];
      return next;
    });
  }, [updateFeed]);

  const sharedFeedList = Object.values(sharedFeed)
    .map((entry) => (entry.kind ? entry : { ...entry, kind: 'note' }))
    .sort((a, b) => a.createdAt - b.createdAt);

  const value = {
    // Feed
    sharedFeed,
    sharedFeedList,
    shareNote,
    shareNode,
    deleteSharedEntry,
    deleteSharedNote: deleteSharedEntry, // old name, still used by callers
    // Toasts
    addToast,
    lastMessage,
  };

  return (
    <GameMessagesContext.Provider value={value}>
      {children}
      <ToastDisplay toasts={toasts} onDismiss={dismissToast} />
    </GameMessagesContext.Provider>
  );
}
