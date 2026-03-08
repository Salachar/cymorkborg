import { useEffect, useState } from 'react';

import CY_CITY_COMMANDS from '@terminal/commands/cy_city';

import {
  PASSWORD_STORAGE_KEY,
  TREE_STORAGE_KEY,
  getDiscoveredPasswords,
  saveDiscoveredPasswords,
} from '@utils/localStorage';

import TerminalHeader from '@terminal/retcomdevice/Basic/TerminalHeader/TerminalHeader';
import List from '@terminal/retcomdevice/Basic/List/List';

const CAMPAIGN_COMMANDS = {
  ...CY_CITY_COMMANDS,
};

const CAMPAIGN_COMMANDS_LIST = Object.entries(CAMPAIGN_COMMANDS).map(([id, def]) => ({
  id,
  ...def,
}));

export default function RetComDevice() {
  const [discoveredPasswords, setDiscoveredPasswords] = useState({});
  const [expandedRows, setExpandedRows] = useState({});

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

  const handleReset = () => {
    localStorage.removeItem(TREE_STORAGE_KEY);
    setExpandedRows({});
  };

  return (
    <div
      className="flex-1 flex flex-col overflow-hidden font-mono"
      style={{ backgroundColor: 'rgb(19, 23, 34)' }}
    >
      <TerminalHeader onClear={handleReset} />
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
            padding: '0.75rem',
            minHeight: 0,
          }}
        >
          <List
            campaignCommandList={CAMPAIGN_COMMANDS_LIST}
            discoveredPasswords={discoveredPasswords}
            expandedRows={expandedRows}
            onToggle={handleToggle}
            onUnlock={handleUnlock}
          />
        </div>
      </div>
    </div>
  );
}
