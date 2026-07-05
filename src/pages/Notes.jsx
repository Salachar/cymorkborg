import { useEffect, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

import NoteCard from './NoteCard';
import { NOTES_STORAGE_KEY, getNotes, saveNotes } from '@utils/localStorage';

import './notes.css';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [draft, setDraft] = useState('');
  const [confirmingClear, setConfirmingClear] = useState(false);
  const listRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  // Auto-scroll to bottom on mount and whenever a note is added.
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [notes.length]);

  const persist = (next) => {
    setNotes(next);
    saveNotes(next);
  };

  const handleAdd = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;

    const now = Date.now();
    const note = {
      id: `${now}-${Math.random().toString(36).slice(2, 8)}`,
      text: trimmed,
      createdAt: now,
      updatedAt: now,
    };

    persist([...notes, note]);
    setDraft('');
  };

  const handleSaveEdit = (id, newText) => {
    persist(notes.map(n => n.id === id
      ? { ...n, text: newText, updatedAt: Date.now() }
      : n
    ));
  };

  const handleDelete = (id) => {
    persist(notes.filter(n => n.id !== id));
  };

  const handleClearAll = () => {
    if (notes.length === 0) return;
    setConfirmingClear(true);
  };

  const handleConfirmClear = () => {
    persist([]);
    setConfirmingClear(false);
  };

  const handleCancelClear = () => {
    setConfirmingClear(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="notes-page">
      <div className="notes-header">
        <div>
          <div className="notes-header-title">PERSONAL LOG</div>
          <div className="notes-header-subtitle">NOTES</div>
        </div>

        {confirmingClear ? (
          <div className="notes-confirm-group">
            <span className="notes-confirm-label">Clear all notes?</span>
            <button className="notes-confirm-btn notes-confirm-yes" onClick={handleConfirmClear}>
              Yes
            </button>
            <button className="notes-confirm-btn notes-confirm-no" onClick={handleCancelClear}>
              No
            </button>
          </div>
        ) : (
          <button className="notes-clear-btn" onClick={handleClearAll}>
            <DeleteSweepIcon style={{ fontSize: 14 }} />
            Clear All
          </button>
        )}
      </div>

      <div className="notes-list" ref={listRef}>
        {notes.length === 0 ? (
          <div className="notes-empty">No notes yet. Jot something down below.</div>
        ) : (
          notes.map(note => (
            <NoteCard
              key={note.id}
              note={note}
              onSave={handleSaveEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      <div className="notes-input-bar">
        <textarea
          className="notes-input"
          placeholder="Write a note..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={3}
        />
        <button
          className="notes-send-btn"
          onClick={handleAdd}
          disabled={!draft.trim()}
          title="Add note"
        >
          <SendIcon style={{ fontSize: 18 }} />
        </button>
      </div>
    </div>
  );
}
