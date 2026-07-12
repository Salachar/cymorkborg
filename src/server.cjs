// server.cjs
// Run with: node server.cjs
// Requires: npm install ws

const { WebSocketServer } = require('ws');
const os = require('os');
const readline = require('readline');

const PORT = 3002;
const wss = new WebSocketServer({ port: PORT });

// Map of ws -> { name, isAlive }
const clients = new Map();

const gmStatus = {
  time: null,
  note: null,
  activity: null,
};

function getClientList() {
  return Array.from(clients.values()).map(c => c.name).filter(Boolean);
}

function broadcastClientList() {
  broadcast({ type: 'client_list', clients: getClientList() });
}

function broadcastGmStatus() {
  broadcast({ type: 'gm_status', ...gmStatus });
}

function broadcast(data, exclude = null) {
  const msg = JSON.stringify(data);
  for (const [ws] of clients) {
    if (ws !== exclude && ws.readyState === 1) {
      ws.send(msg);
    }
  }
}

function sendTo(name, data) {
  const msg = JSON.stringify(data);
  for (const [ws, meta] of clients) {
    if (meta.name === name && ws.readyState === 1) {
      ws.send(msg);
      return true;
    }
  }
  return false;
}

// Remove any existing connection(s) already registered under this name —
// treats a new registration as that player reclaiming their identity,
// so a reconnect replaces the old entry instead of stacking a second one.
function evictExistingByName(name, exceptWs) {
  for (const [ws, meta] of clients) {
    if (ws !== exceptWs && meta.name === name) {
      try { ws.terminate(); } catch {}
      clients.delete(ws);
      console.log(`Evicted stale connection for "${name}" (reconnect detected)`);
    }
  }
}

wss.on('connection', (ws) => {
  clients.set(ws, { name: null, isAlive: true });
  console.log(`Client connected. Total: ${clients.size}`);

  ws.on('pong', () => {
    const meta = clients.get(ws);
    if (meta) meta.isAlive = true;
  });

  ws.send(JSON.stringify({ type: 'connected' }));

  ws.on('message', (raw) => {
    let data;
    try { data = JSON.parse(raw); } catch (e) {
      console.warn('Bad message:', raw);
      return;
    }

    switch (data.type) {
      case 'register': {
        evictExistingByName(data.name, ws);

        const meta = clients.get(ws);
        if (meta) {
          meta.name = data.name;
          clients.set(ws, meta);
        }
        broadcastClientList();
        ws.send(JSON.stringify({ type: 'client_list', clients: getClientList() }));
        ws.send(JSON.stringify({ type: 'gm_status', ...gmStatus }));
        console.log(`Client registered as: ${data.name} (sent current gm_status: ${JSON.stringify(gmStatus)})`);
        break;
      }

      case 'transfer': {
        if (data.to) {
          const delivered = sendTo(data.to, data);
          if (!delivered) {
            ws.send(JSON.stringify({ type: 'transfer_error', reason: `Client "${data.to}" not found` }));
          }
        }
        break;
      }

      default:
        broadcast(data, ws);
        break;
    }
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log(`Client disconnected. Total: ${clients.size}`);
    broadcastClientList();
  });

  ws.on('error', (err) => {
    console.error('Socket error:', err.message);
    clients.delete(ws);
  });
});

// ─── Stale connection reaper ───────────────────────────────────────────────────
// Catches the case a name-based evict can't: a dead socket that was never
// replaced (player closed the app / lost network and never came back).
// 45s interval keeps this cheap — this runs on the GM's machine, not the
// players' phones, so the battery conversation from earlier doesn't apply here.

const HEARTBEAT_INTERVAL = 45000;

setInterval(() => {
  for (const [ws, meta] of clients) {
    if (meta.isAlive === false) {
      console.log(`Terminating unresponsive client: ${meta.name ?? '(unregistered)'}`);
      clients.delete(ws);
      ws.terminate();
      continue;
    }
    meta.isAlive = false;
    ws.ping();
  }
  broadcastClientList();
}, HEARTBEAT_INTERVAL);

// ─── GM console commands ──────────────────────────────────────────────────────

const GM_COMMAND = /^(time|note|activity)\s+(.+)$/i;

const rl = readline.createInterface({ input: process.stdin });
rl.on('line', (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  const match = trimmed.match(GM_COMMAND);
  if (!match) {
    console.log(`Unrecognized command: "${trimmed}" (expected: time / note / activity <value>)`);
    return;
  }

  const field = match[1].toLowerCase();
  const value = match[2].trim();

  gmStatus[field] = value.toLowerCase() === 'clear' ? null : value;
  broadcastGmStatus();

  console.log(
    gmStatus[field] === null
      ? `Cleared ${field.toUpperCase()}`
      : `Set ${field.toUpperCase()}: ${gmStatus[field]}`
  );
});

// Print local IPs on startup
const nets = os.networkInterfaces();
const localIPs = [];
for (const iface of Object.values(nets)) {
  for (const config of iface) {
    if (config.family === 'IPv4' && !config.internal) {
      localIPs.push(config.address);
    }
  }
}

console.log(`RetCom Note Server running on port ${PORT}`);
if (localIPs.length > 0) {
  console.log(`\nShare one of these with your players:`);
  localIPs.forEach(ip => console.log(`  ws://${ip}:${PORT}`));
} else {
  console.log(`Could not detect local IP — find it manually and share ws://<your-ip>:${PORT}`);
}
console.log(`\nGM commands: type "time ...", "note ...", or "activity ..." and press Enter.`);
