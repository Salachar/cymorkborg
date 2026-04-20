import { useEffect, useState } from 'react';

import TerminalHeader from '@terminal/retcomdevice/Basic/TerminalHeader/TerminalHeader';
import List from '@terminal/retcomdevice/Basic/List/List';

import {
  PASSWORD_STORAGE_KEY,
  TREE_STORAGE_KEY,
  LIST_INDENT_KEY,
  getDiscoveredPasswords,
  saveDiscoveredPasswords,
} from '@utils/localStorage';

import {
  filterCommands,
  deriveExpandedFromFilter,
  collapseSubtree,
} from '@utils/commands';

import CY_CITY_COMMANDS from '@terminal/commands/cy_city';

export default function RetComDevice() {
  const [discoveredPasswords, setDiscoveredPasswords] = useState({});
  const [expandedRows, setExpandedRows] = useState({});

  const [indent, setIndent] = useState(() => {
    try {
      const saved = localStorage.getItem(LIST_INDENT_KEY);
      return saved !== null ? parseFloat(saved) : 1;
    } catch {
      return 1;
    }
  });

  useEffect(() => {
    setDiscoveredPasswords(getDiscoveredPasswords());
    try {
      const saved = localStorage.getItem(TREE_STORAGE_KEY);
      if (saved) setExpandedRows(JSON.parse(saved));
    } catch (e) {
      console.error('Failed to load tree state:', e);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(discoveredPasswords).length > 0) {
      saveDiscoveredPasswords(discoveredPasswords);
    }
  }, [discoveredPasswords]);

  const handleToggle = (path) => {
    setExpandedRows(prev => {
      const next = { ...prev, [path]: !prev[path] };
      try { localStorage.setItem(TREE_STORAGE_KEY, JSON.stringify(next)); } catch (e) {}
      return next;
    });
  };

  const handleUnlock = (path, value = 'UNLOCKED') => {
    setDiscoveredPasswords(prev => {
      const next = { ...prev, [path]: value };
      try { localStorage.setItem(PASSWORD_STORAGE_KEY, JSON.stringify(next)); } catch (e) {}
      return next;
    });
    setExpandedRows(prev => {
      const next = { ...prev, [path]: true };
      try { localStorage.setItem(TREE_STORAGE_KEY, JSON.stringify(next)); } catch (e) {}
      return next;
    });
  };

  // const handleReset = () => {
  //   localStorage.removeItem(TREE_STORAGE_KEY);
  //   setExpandedRows({});
  // };

  // const handleSetIndent = (val) => {
  //   setIndent(val);
  //   try {
  //     localStorage.setItem(LIST_INDENT_KEY, String(val));
  //   } catch (e) {
  //     console.error('Failed to save indent:', e);
  //   }
  // };

  const handleEvent = (event) => {
    switch (event.type) {
      // case 'toggle':
      //   setExpandedRows(prev => {
      //     const next = { ...prev, [event.path]: !prev[event.path] };
      //     try { localStorage.setItem(TREE_STORAGE_KEY, JSON.stringify(next)); } catch (e) {}
      //     return next;
      //   });
      //   break;

      // case 'unlock':
      //   setDiscoveredPasswords(prev => {
      //     const next = { ...prev, [event.path]: event.value ?? 'UNLOCKED' };
      //     try { localStorage.setItem(PASSWORD_STORAGE_KEY, JSON.stringify(next)); } catch (e) {}
      //     return next;
      //   });
      //   setExpandedRows(prev => {
      //     const next = { ...prev, [event.path]: true };
      //     try { localStorage.setItem(TREE_STORAGE_KEY, JSON.stringify(next)); } catch (e) {}
      //     return next;
      //   });
      //   break;

      case 'collapse_subtree':
        setExpandedRows(prev => {
          const next = collapseSubtree(prev, event.path);
          try { localStorage.setItem(TREE_STORAGE_KEY, JSON.stringify(next)); } catch (e) {}
          return next;
        });
        break;

      case 'reset_tree':
        localStorage.removeItem(TREE_STORAGE_KEY);
        setExpandedRows({});
        break;

      case 'indent_change':
        setIndent(event.value);
        try { localStorage.setItem(LIST_INDENT_KEY, String(event.value)); } catch (e) {}
        break;

      default:
        console.warn('Unhandled RetCom event:', event);
    }
  };

  return (
    <div
      className={`flex-1 flex flex-col overflow-hidden font-mono`}
      style={{ backgroundColor: 'rgb(19, 23, 34)' }}
    >
      <TerminalHeader
        indent={indent}
        onEvent={handleEvent}
      />
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: 'calc(max(1.5rem, env(safe-area-inset-bottom)) + 0.75rem)',
        }}
      >
        <div
          className="flex-1 overflow-y-auto"
          style={{
            backgroundColor: 'rgba(29, 35, 50, 0.7)',
            padding: '0.75rem 48px',
            minHeight: 0,
          }}
        >
          <List
            campaignCommandList={CY_CITY_COMMANDS}
            discoveredPasswords={discoveredPasswords}
            expandedRows={expandedRows}
            indent={indent}
            onToggle={handleToggle}
            onUnlock={handleUnlock}
            onEvent={handleEvent}
          />
        </div>
      </div>
    </div>
  );
}
