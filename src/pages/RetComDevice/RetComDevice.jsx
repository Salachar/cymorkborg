import { useEffect, useMemo, useState } from 'react';

import Header from './components/Header/Header';
import List from './components/List';
import ConfirmationModal from '@components/ConfirmationModal/ConfirmationModal';
import { Page } from '@components/Layout/Layout';
import ChromeBar from '@components/Chrome/ChromeBar';

import {
  RETCOM_PASSWORD_KEY,
  RETCOM_NODES_EXPANDED_KEY,
  RETCOM_NODES_INDENT_KEY,
  RETCOM_BOOKMARKS_KEY,
  getDiscoveredPasswords,
  saveDiscoveredPasswords,
} from '@utils/localStorage';

import {
  collapseSubtree,
  buildSearchIndex,
  getAncestorPaths,
} from '@utils/commands';

import { useGameMessages } from '@context/GameMessagesContext';
import { useCyborgSocket } from '@hooks/useCyborgSocket';

import CY_CITY_COMMANDS from './commands/cy_city';

import { Tree } from './RetComDevice.styles';

// Saved state loads before the first render (not in an effect), so the
// tree is already at full height when the app restores this page's
// scroll position.
const loadJSON = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (e) {
    console.error(`Failed to load ${key}:`, e);
    return fallback;
  }
};

export default function RetComDevice() {
  const [discoveredPasswords, setDiscoveredPasswords] = useState(() => getDiscoveredPasswords());
  const [expandedRows, setExpandedRows] = useState(() => loadJSON(RETCOM_NODES_EXPANDED_KEY, {}));
  const [bookmarks, setBookmarks] = useState(() => loadJSON(RETCOM_BOOKMARKS_KEY, {}));

  const { shareUnlock } = useGameMessages();
  const { status } = useCyborgSocket();
  const isConnected = status === 'connected';
  const [pendingShareUnlock, setPendingShareUnlock] = useState(null);

  const [indent, setIndent] = useState(() => {
    try {
      const saved = localStorage.getItem(RETCOM_NODES_INDENT_KEY);
      return saved !== null ? parseFloat(saved) : 1;
    } catch { return 1; }
  });

  // Listen for unlocks pushed by GameMessagesProvider
  useEffect(() => {
    const handler = (e) => {
      const { path, value } = e.detail;
      setDiscoveredPasswords(prev => {
        const next = { ...prev, [path]: value ?? 'UNLOCKED' };
        try { localStorage.setItem(RETCOM_PASSWORD_KEY, JSON.stringify(next)); } catch {}
        return next;
      });
      setExpandedRows(prev => {
        const next = { ...prev, [path]: true };
        try { localStorage.setItem(RETCOM_NODES_EXPANDED_KEY, JSON.stringify(next)); } catch {}
        return next;
      });
    };
    window.addEventListener('passwordReceived', handler);
    return () => window.removeEventListener('passwordReceived', handler);
  }, []);

  useEffect(() => {
    if (Object.keys(discoveredPasswords).length > 0) {
      saveDiscoveredPasswords(discoveredPasswords);
    }
  }, [discoveredPasswords]);

  const searchIndex = useMemo(
    () => buildSearchIndex(CY_CITY_COMMANDS, discoveredPasswords),
    [discoveredPasswords]
  );

  const handleToggle = (path) => {
    setExpandedRows(prev => {
      const next = { ...prev, [path]: !prev[path] };
      try { localStorage.setItem(RETCOM_NODES_EXPANDED_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const handleUnlock = (path, value = 'UNLOCKED') => {
    setDiscoveredPasswords(prev => {
      const next = { ...prev, [path]: value };
      try { localStorage.setItem(RETCOM_PASSWORD_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
    setExpandedRows(prev => {
      const next = { ...prev, [path]: true };
      try { localStorage.setItem(RETCOM_NODES_EXPANDED_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const handleEvent = (event) => {
    switch (event.type) {
      case 'collapse_subtree':
        setExpandedRows(prev => {
          const next = collapseSubtree(prev, event.path);
          try { localStorage.setItem(RETCOM_NODES_EXPANDED_KEY, JSON.stringify(next)); } catch {}
          return next;
        });
        break;

      case 'reset_tree':
        localStorage.removeItem(RETCOM_NODES_EXPANDED_KEY);
        setExpandedRows({});
        break;

      case 'indent_change':
        setIndent(event.value);
        try { localStorage.setItem(RETCOM_NODES_INDENT_KEY, String(event.value)); } catch {}
        break;

      case 'toggle_bookmark':
        setBookmarks(prev => {
          const next = { ...prev };
          if (next[event.path]) delete next[event.path];
          else next[event.path] = true;
          try { localStorage.setItem(RETCOM_BOOKMARKS_KEY, JSON.stringify(next)); } catch {}
          return next;
        });
        break;

      case 'navigate_to': {
        const ancestors = getAncestorPaths(event.path);
        setExpandedRows(prev => {
          const next = { ...prev };
          ancestors.forEach(p => { next[p] = true; });
          try { localStorage.setItem(RETCOM_NODES_EXPANDED_KEY, JSON.stringify(next)); } catch {}
          return next;
        });
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            try {
              const el = document.querySelector(`[data-path="${event.path.replace(/"/g, '\\"')}"]`);
              el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } catch (e) { console.error('Failed to scroll to node:', e); }
          });
        });
        break;
      }

      case 'share_unlock':
        setPendingShareUnlock({ path: event.path, value: event.value });
        break;

      default:
        console.warn('Unhandled RetCom event:', event);
    }
  };

  // A normal page in the app's scroll container: the header sticks to
  // the top, the tree scrolls beneath it.
  return (
    <>
      <ChromeBar>
        <Header
          indent={indent}
          searchIndex={searchIndex}
          bookmarks={bookmarks}
          onEvent={handleEvent}
        />
      </ChromeBar>

      <Page wide>

        <Tree>
          <List
            campaignCommandList={CY_CITY_COMMANDS}
            discoveredPasswords={discoveredPasswords}
            expandedRows={expandedRows}
            bookmarks={bookmarks}
            indent={indent}
            onToggle={handleToggle}
            onUnlock={handleUnlock}
            onEvent={handleEvent}
            isConnected={isConnected}
          />
        </Tree>

        <ConfirmationModal
          open={Boolean(pendingShareUnlock)}
          title="Share Unlock"
          message={pendingShareUnlock
            ? `Share unlock for "${pendingShareUnlock.path.split('/').pop()}" with all connected players?${pendingShareUnlock.value && pendingShareUnlock.value !== 'UNLOCKED' ? `\n\nPassword: ${pendingShareUnlock.value}` : ''}`
            : ''}
          confirmLabel="Share"
          onConfirm={() => {
            shareUnlock(pendingShareUnlock.path, pendingShareUnlock.value);
            setPendingShareUnlock(null);
          }}
          onCancel={() => setPendingShareUnlock(null)}
        />
      </Page>
    </>
  );
}
