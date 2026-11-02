import { useMemo, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

import ConfirmationModal from '@components/ConfirmationModal';
import { Page, PageHeader, Button, TextArea } from '@components/Layout/Layout';

import NoteCard from './components/NoteCard';
import SharedNoteCard from './components/SharedNoteCard';
import ChromeBar from '@components/Chrome/ChromeBar';

import { useCyborgSocket } from '@hooks/useCyborgSocket';
import { useGameMessages } from '@context/GameMessagesContext';
import { getNotes, saveNotes } from '@utils/localStorage';

import { Composer, SendButton, Feed, Empty } from './NetLog.styles';

// A normal page in the app's scroll container: composer on top, notes
// below, newest first. A new note lands right under the input.
export default function NetLog() {
  const [notes, setNotes] = useState(() => getNotes());
  const [draft, setDraft] = useState('');
  const [confirmClear, setConfirmClear] = useState(false);

  const { status } = useCyborgSocket();
  const { shareNote, sharedFeedList, deleteSharedNote } = useGameMessages();
  const isConnected = status === 'connected';

  const persist = (next) => {
    setNotes(next);
    saveNotes(next);
  };

  const handleAdd = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    const now = Date.now();
    persist([
      ...notes,
      {
        id: `${now}-${Math.random().toString(36).slice(2, 8)}`,
        text: trimmed,
        createdAt: now,
        updatedAt: now,
      },
    ]);
    setDraft('');
  };

  // Enter makes a newline (tablet keyboards); Cmd/Ctrl+Enter adds the note
  // for anyone on a laptop.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleSaveEdit = (id, newText) => {
    persist(notes.map((n) => (n.id === id ? { ...n, text: newText, updatedAt: Date.now() } : n)));
  };

  const handleDelete = (id) => {
    persist(notes.filter((n) => n.id !== id));
  };

  const feed = useMemo(
    () =>
      [
        ...notes.map((n) => ({ ...n, _type: 'personal' })),
        ...sharedFeedList.map((n) => ({ ...n, _type: 'shared' })),
      ].sort((a, b) => b.createdAt - a.createdAt),
    [notes, sharedFeedList]
  );

  return (
    <>
      <ChromeBar />
      <Page compact>
        <PageHeader
          compact
          title="Net Log"
          actions={
            <Button
              type="button"
              data-variant="danger"
              disabled={notes.length === 0}
              onClick={() => setConfirmClear(true)}
            >
              <DeleteSweepIcon style={{ fontSize: 16 }} />
              Clear all
            </Button>
          }
        />

        <Composer>
          <TextArea
            placeholder="Write a note…"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            aria-label="New note"
          />
          <SendButton
            type="button"
            data-variant="primary"
            onClick={handleAdd}
            disabled={!draft.trim()}
            aria-label="Add note"
            title="Add note"
          >
            <SendIcon style={{ fontSize: 18 }} />
          </SendButton>
        </Composer>

        {feed.length === 0 ? (
          <Empty>No notes yet. Write one above.</Empty>
        ) : (
          <Feed>
            {feed.map((item) =>
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
            )}
          </Feed>
        )}

        <ConfirmationModal
          open={confirmClear}
          title="Clear All Notes"
          message="Delete all personal notes? Shared notes stay. This cannot be undone."
          confirmLabel="Clear All"
          onConfirm={() => {
            persist([]);
            setConfirmClear(false);
          }}
          onCancel={() => setConfirmClear(false)}
        />
      </Page>
    </>
  );
}
