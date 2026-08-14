import { useEffect, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

import ConfirmationModal from '@components/ConfirmationModal';
import NoteCard from './components/NoteCard';
import SharedNoteCard from './components/SharedNoteCard';

import { useCyborgSocket } from '@hooks/useCyborgSocket';
import { useGameMessages } from '@context/GameMessagesContext';
import { getNotes, saveNotes } from '@utils/localStorage';

import '@styles/notes.css';

export default function NetLog() {
  const [notes, setNotes] = useState([]);
  const [draft, setDraft] = useState('');
  const [confirmClear, setConfirmClear] = useState(false);
  const listRef = useRef(null);

  const { status } = useCyborgSocket();
  const { shareNote, sharedFeedList, deleteSharedNote } = useGameMessages();

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [notes.length, sharedFeedList.length]);

  const persist = (next) => {
    setNotes(next);
    saveNotes(next);
  };

  const handleAdd = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    const now = Date.now();
    persist([...notes, {
      id: `${now}-${Math.random().toString(36).slice(2, 8)}`,
      text: trimmed,
      createdAt: now,
      updatedAt: now,
    }]);
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

  const isConnected = status === 'connected';

  const allItems = [
    ...notes.map(n => ({ ...n, _type: 'personal' })),
    ...sharedFeedList.map(n => ({ ...n, _type: 'shared' })),
  ].sort((a, b) => a.createdAt - b.createdAt);

  return (
    <div className="notes-page">
      <div className="notes-header">
        <div>
          <div className="notes-header-title">PERSONAL LOG</div>
          <div className="notes-header-subtitle">NOTES</div>
        </div>

        <div className="notes-header-right">
          <button
            className="notes-clear-btn"
            onClick={() => notes.length > 0 && setConfirmClear(true)}
          >
            <DeleteSweepIcon style={{ fontSize: 14 }} />
            Clear All
          </button>
        </div>
      </div>

      <div className="notes-list" ref={listRef}>
        {allItems.length === 0 ? (
          <div className="notes-empty">No notes yet. Jot something down below.</div>
        ) : (
          allItems.map(item =>
            item._type === 'personal' ? (
              <NoteCard
                key={item.id}
                note={item}
                onSave={handleSaveEdit}
                onDelete={handleDelete}
                onShare={shareNote}
                isConnected={isConnected}
              />
            ) : (
              <SharedNoteCard
                key={`shared-${item.id}`}
                note={item}
                onDelete={deleteSharedNote}
              />
            )
          )
        )}
      </div>

      <div className="notes-input-bar">
        <textarea
          className="notes-input"
          placeholder="Write a note..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
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

      <ConfirmationModal
        open={confirmClear}
        title="Clear All Notes"
        message="Delete all personal notes? This cannot be undone."
        confirmLabel="Clear All"
        onConfirm={() => { persist([]); setConfirmClear(false); }}
        onCancel={() => setConfirmClear(false)}
      />

    </div>
  );
}
