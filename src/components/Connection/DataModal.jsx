import { useRef, useState } from 'react';
import Modal from '@components/Modal/Modal';
import ConfirmationModal from '@components/ConfirmationModal/ConfirmationModal';
import ConnectionModal from '@components/Connection/ConnectionModal';
import { Button } from '@components/Layout/Layout';
import { useCyborgSocket } from '@hooks/useCyborgSocket';

import {
  ActionStack,
  FullButton,
  StatusPanel,
  RecipientList,
  RecipientButton,
  Actions,
  Muted,
} from './Connection.styles';

export default function DataModal({ open, onClose }) {
  const fileInputRef = useRef(null);
  const [importStatus, setImportStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [pendingImport, setPendingImport] = useState(null);
  const [connectionOpen, setConnectionOpen] = useState(false);
  const [transferOpen, setTransferOpen] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState(null);

  const { status, connectedClients, send } = useCyborgSocket();
  const isConnected = status === 'connected';
  const otherClients = connectedClients;

  // ── Export ──────────────────────────────────────────────────────────────────

  const handleExport = () => {
    try {
      const appData = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        appData[key] = localStorage.getItem(key);
      }
      const exportData = {
        appData,
        _meta: {
          exportDate: new Date().toISOString(),
          appVersion: '1.0.0',
          type: 'cy_borg_full_backup',
        },
      };
      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `cyborg_backup_${Date.now()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export error:', error);
      setImportStatus('error');
      setErrorMessage('Failed to export app data.');
    }
  };

  // ── Import ──────────────────────────────────────────────────────────────────

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setImportStatus(null);
    setErrorMessage('');

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (!imported._meta || imported._meta.type !== 'cy_borg_full_backup') {
          setImportStatus('error');
          setErrorMessage('Invalid backup file format.');
          return;
        }
        if (!imported.appData) {
          setImportStatus('error');
          setErrorMessage('No app data found in backup file.');
          return;
        }
        setPendingImport({ data: imported.appData, exportDate: imported._meta.exportDate });
      } catch (error) {
        console.error('Import parse error:', error);
        setImportStatus('error');
        setErrorMessage('Failed to read file. Invalid or corrupted backup.');
      }
    };
    reader.onerror = () => {
      setImportStatus('error');
      setErrorMessage('Failed to read file.');
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const handleConfirmImport = () => {
    if (!pendingImport) return;
    try {
      localStorage.clear();
      Object.keys(pendingImport.data).forEach(key => {
        localStorage.setItem(key, pendingImport.data[key]);
      });
      setPendingImport(null);
      setImportStatus('success');
      setTimeout(() => window.location.reload(), 800);
    } catch (error) {
      console.error('Import error:', error);
      setPendingImport(null);
      setImportStatus('error');
      setErrorMessage('Failed to apply backup data.');
    }
  };

  // ── Send to Device ──────────────────────────────────────────────────────────

  const handleSendToDevice = () => {
    if (!isConnected) {
      setConnectionOpen(true);
      return;
    }
    setSelectedRecipient(null);
    setTransferOpen(true);
  };

  const handleConfirmTransfer = () => {
    if (!selectedRecipient) return;
    const appData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      appData[key] = localStorage.getItem(key);
    }
    send({
      type: 'transfer',
      to: selectedRecipient,
      data: {
        appData,
        _meta: {
          exportDate: new Date().toISOString(),
          appVersion: '1.0.0',
          type: 'cy_borg_full_backup',
        },
      },
    });
    setTransferOpen(false);
    setSelectedRecipient(null);
  };

  // ── Helpers ─────────────────────────────────────────────────────────────────

  const formatExportDate = (iso) => {
    try {
      return new Date(iso).toLocaleString(undefined, {
        month: 'short', day: 'numeric', year: 'numeric',
        hour: 'numeric', minute: '2-digit',
      });
    } catch { return iso; }
  };

  return (
    <>
      <Modal open={open} onClose={onClose} title="App Data" subtitle="Export, import, or transfer your data">
        <ActionStack>
          <FullButton
            type="button"
            onClick={handleExport}
            title="Export all app data including characters, settings, and preferences"
          >
            Export
          </FullButton>

          {/* A label so the whole button opens the file picker. */}
          <FullButton as="label" title="Import app data backup (will replace all current data)">
            Import
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
          </FullButton>

          <FullButton
            type="button"
            onClick={handleSendToDevice}
            title="Send all data to another connected device"
          >
            Send to Device
          </FullButton>
        </ActionStack>

        {importStatus === 'success' && (
          <StatusPanel data-tone="success">
            <strong>Data imported.</strong>
            Reloading to apply it…
          </StatusPanel>
        )}

        {importStatus === 'error' && (
          <StatusPanel data-tone="error">
            <strong>Import failed</strong>
            {errorMessage}
          </StatusPanel>
        )}
      </Modal>

      {/* Import confirm */}
      <ConfirmationModal
        open={Boolean(pendingImport)}
        title="Restore Backup"
        message={pendingImport
          ? `Restore backup from ${formatExportDate(pendingImport.exportDate)}?\n\nThis will replace all current app data including characters, notes, bookmarks, and RetCom state. This cannot be undone.`
          : ''}
        confirmLabel="Restore"
        cancelLabel="Cancel"
        onConfirm={handleConfirmImport}
        onCancel={() => setPendingImport(null)}
      />

      {/* Transfer recipient picker */}
      <Modal
        open={transferOpen}
        onClose={() => { setTransferOpen(false); setSelectedRecipient(null); }}
        title="Send to Device"
        message="Select the device to send all data to. Their current data will be replaced."
      >
        {otherClients.length === 0 ? (
          <Muted>No other clients connected.</Muted>
        ) : (
          <RecipientList>
            {otherClients.map((name) => (
              <RecipientButton
                key={name}
                type="button"
                aria-pressed={selectedRecipient === name}
                onClick={() => setSelectedRecipient(name)}
              >
                {name}
              </RecipientButton>
            ))}
          </RecipientList>
        )}

        <Actions>
          <Button
            type="button"
            data-variant="primary"
            onClick={handleConfirmTransfer}
            disabled={!selectedRecipient}
          >
            Send
          </Button>
          <Button
            type="button"
            onClick={() => { setTransferOpen(false); setSelectedRecipient(null); }}
          >
            Cancel
          </Button>
        </Actions>
      </Modal>

      {/* Connection modal — shown when Send to Device is clicked while offline */}
      <ConnectionModal open={connectionOpen} onClose={() => setConnectionOpen(false)}>
        <span>Connect to the network first, then try Send to Device again.</span>
      </ConnectionModal>
    </>
  );
}
