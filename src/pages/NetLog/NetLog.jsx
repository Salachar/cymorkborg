import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/IosShare';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

import ConfirmationModal from '@components/ConfirmationModal';
import { Page, Button } from '@components/Layout/Layout';
import ChromeBar, { ChromeToolbar } from '@components/Chrome/ChromeBar';

import NoteCard from './components/NoteCard';
import SharedNoteCard from './components/SharedNoteCard';
import NodeShareCard from './components/NodeShareCard';

import { useGameMessages } from '@context/GameMessagesContext';
import { getNotes, saveNotes } from '@utils/localStorage';

import {
  Composer,
  ComposerField,
  ComposerButtons,
  SendButton,
  ShareSendButton,
  Feed,
  Empty,
  ClearRow,
} from './NetLog.styles';

// The session's shared record: your notes (shared or not), notes shared
// to you, and RetCom nodes shared either way, newest first. No page title;
// the composer lives in the ChromeBar so it stays put while you scroll.
export default function NetLog() {
  const [notes, setNotes] = useState(() => getNotes());
  const [draft, setDraft] = useState('');
  const fieldRef = useRef(null);

  // Grow the composer with its text (CSS min/max keep it between three
  // rows and most of the screen); back to three rows when cleared.
  useLayoutEffect(() => {
    const el = fieldRef.current;
    if (!el) return;
    el.style.height = 'auto';
    const border = el.offsetHeight - el.clientHeight; // scrollHeight excludes it
    el.style.height = `${el.scrollHeight + border}px`;
  }, [draft]);
  const [confirmClear, setConfirmClear] = useState(false);

  const { shareNote, sharedFeedList, deleteSharedEntry } = useGameMessages();

  // Reload when notes change elsewhere (e.g. a queued share just sent).
  useEffect(() => {
    const reload = () => setNotes(getNotes());
    window.addEventListener('notesUpdated', reload);
    return () => window.removeEventListener('notesUpdated', reload);
  }, []);

  const persist = (next) => {
    setNotes(next);
    saveNotes(next);
  };

  // Add the note; with share, also send it to everyone right away (queued
  // if offline), same as tapping share on the new card.
  const handleAdd = (share = false) => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    const now = Date.now();
    const note = {
      id: `${now}-${Math.random().toString(36).slice(2, 8)}`,
      text: trimmed,
      createdAt: now,
      updatedAt: now,
    };
    if (share) {
      const result = shareNote(note);
      note.sharedAt = now;
      note.shareQueued = result === 'queued';
    }
    persist([...notes, note]);
    setDraft('');
  };

  const handleSaveEdit = (id, newText) => {
    persist(notes.map((n) => (n.id === id ? { ...n, text: newText, updatedAt: Date.now() } : n)));
  };

  const handleDelete = (id) => {
    persist(notes.filter((n) => n.id !== id));
  };

  // Share, and record it on the note (shareQueued until it actually sends).
  const handleShare = (note) => {
    const result = shareNote(note);
    persist(
      notes.map((n) =>
        n.id === note.id ? { ...n, sharedAt: Date.now(), shareQueued: result === 'queued' } : n
      )
    );
    return result;
  };

  const feed = useMemo(
    () =>
      [
        ...notes.map((n) => ({ ...n, _type: 'personal' })),
        ...sharedFeedList.map((n) => ({ ...n, _type: n.kind === 'node' ? 'node' : 'shared' })),
      ].sort((a, b) => b.createdAt - a.createdAt),
    [notes, sharedFeedList]
  );

  return (
    <>
      <ChromeBar character>
        <ChromeToolbar>
          <Composer>
            <ComposerField
              ref={fieldRef}
              placeholder="Write a note…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={3}
              aria-label="New note"
            />
            <ComposerButtons>
              <ShareSendButton
                type="button"
                onClick={() => handleAdd(true)}
                disabled={!draft.trim()}
                aria-label="Add and share note"
                title="Add and share with everyone"
              >
                <ShareIcon style={{ fontSize: 17 }} />
              </ShareSendButton>
              <SendButton
                type="button"
                data-variant="primary"
                onClick={() => handleAdd(false)}
                disabled={!draft.trim()}
                aria-label="Add note"
                title="Add note"
              >
                <SendIcon style={{ fontSize: 18 }} />
              </SendButton>
            </ComposerButtons>
          </Composer>
        </ChromeToolbar>
      </ChromeBar>

      <Page compact>
        {feed.length === 0 ? (
          <Empty>Nothing here yet. Write a note above; anything shared this session shows up here too.</Empty>
        ) : (
          <Feed>
            {feed.map((item) => {
              if (item._type === 'personal') {
                return (
                  <NoteCard
                    key={item.id}
                    note={item}
                    onSave={handleSaveEdit}
                    onDelete={handleDelete}
                    onShare={handleShare}
                  />
                );
              }
              if (item._type === 'node') {
                return <NodeShareCard key={item.id} entry={item} onDelete={deleteSharedEntry} />;
              }
              return (
                <SharedNoteCard
                  key={`shared-${item.id}`}
                  note={item}
                  onDelete={deleteSharedEntry}
                />
              );
            })}
          </Feed>
        )}

        {notes.length > 0 && (
          <ClearRow>
            <Button type="button" data-variant="danger" onClick={() => setConfirmClear(true)}>
              <DeleteSweepIcon style={{ fontSize: 16 }} />
              Clear all my notes
            </Button>
          </ClearRow>
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
