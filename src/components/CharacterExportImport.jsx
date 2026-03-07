import { useRef, useState } from 'react';

export default function AppDataExportImport({
  character,
  onUpdate = () => {},
}) {
  const fileInputRef = useRef(null);
  const [importStatus, setImportStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  // Export entire app state to JSON file
  const handleExport = () => {
    try {
      // Get all localStorage data
      const appData = {};

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        appData[key] = value;
      }

      const exportData = {
        appData,
        _meta: {
          exportDate: new Date().toISOString(),
          appVersion: '1.0.0',
          type: 'cy_borg_full_backup'
        }
      };

      const dataStr = JSON.stringify(exportData, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      // const link = document.createElement('a');
      // link.href = url;
      // const fileName = `cyborg_backup_${Date.now()}.json`;
      // link.download = fileName;
      // link.click();

      const fileName = `cyborg_backup_${Date.now()}.json`;
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      console.log('App data exported successfully');
    } catch (error) {
      console.error('Export error:', error);
      setImportStatus('error');
      setErrorMessage('Failed to export app data.');
    }
  };

  // Import entire app state from JSON file
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImportStatus(null);
    setErrorMessage('');

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);

        // Validate it's a valid backup file
        if (!importedData._meta || importedData._meta.type !== 'cy_borg_full_backup') {
          setImportStatus('error');
          setErrorMessage('Invalid backup file format.');
          return;
        }

        if (!importedData.appData) {
          setImportStatus('error');
          setErrorMessage('No app data found in backup file.');
          return;
        }

        // Clear existing localStorage
        localStorage.clear();

        // Restore all data
        Object.keys(importedData.appData).forEach(key => {
          localStorage.setItem(key, importedData.appData[key]);
        });

        setImportStatus('success');
        setTimeout(() => window.location.reload(), 800);
      } catch (error) {
        console.error('Import error:', error);
        setImportStatus('error');
        setErrorMessage('Failed to import app data. Invalid or corrupted file.');
      }
    };

    reader.onerror = () => {
      setImportStatus('error');
      setErrorMessage('Failed to read file.');
    };

    reader.readAsText(file);

    // Reset input so same file can be imported again
    event.target.value = '';
  };

  const buttonClass = "px-4 py-2 bg-gray-800 border-2 border-cy-cyan-subtle text-white font-bold uppercase text-xs transition-all shadow-lg shadow-cy-cyan/30";
  const buttonStyles = {
    color: "white",
    cursor: "pointer",
    opacity: "0.6",
  };

  return (
    <div>
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={handleExport}
          className={buttonClass}
          style={buttonStyles}
          title="Export all app data including characters, settings, and preferences"
        >
          Export
        </button>

        <label
          className={buttonClass}
          style={buttonStyles}
          title="Import app data backup (will replace all current data)"
        >
          Import
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImport}
            className="hidden"
          />
        </label>

        <button
          onClick={() => {
            character.toggleLock();
            onUpdate();
          }}
          className={buttonClass}
          style={buttonStyles}
        >
          {character.locked ? "Locked" : "Unlocked"}
        </button>
      </div>

      {/* Success Message */}
      {importStatus === 'success' && (
        <div className="bg-cy-cyan/20 border border-cy-cyan p-4 mb-4 animate-pulse">
          <p className="text-cy-cyan font-bold text-sm">
            Data imported successfully!
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Please refresh the page to load the imported data.
          </p>
        </div>
      )}

      {/* Error Message */}
      {importStatus === 'error' && (
        <div className="bg-red-900/20 border border-red-500 p-4 mb-4">
          <p className="text-red-400 font-bold text-sm">
            Import Failed
          </p>
          <p className="text-gray-300 text-sm mt-2">
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}
