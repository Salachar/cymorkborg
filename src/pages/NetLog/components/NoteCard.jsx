import { useState, useEffect, useRef } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/IosShare';

import ConfirmationModal from '@components/ConfirmationModal/ConfirmationModal';
import { IconButton, TextArea } from '@components/Layout/Layout';
import { formatTimestamp } from '@utils/time';

import { Card, Meta, MetaText, Edited, Controls, Body, SharedTag } from './NoteCard.styles';

const ICON = { fontSize: 16 };

// Share is available offline too: it queues and sends on reconnect.
export default function NoteCard({ note, onSave, onDelete, onShare }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(note.text);
  const [justShared, setJustShared] = useState(null); // 'sent' | 'queued' | null
  const [confirmDelete, setConfirmDelete] = useState(false);
  const sharedTimer = useRef(null);

  useEffect(() => () => clearTimeout(sharedTimer.current), []);

  const startEdit = () => {
    setDraft(note.text);
    setEditing(true);
  };

  const cancelEdit = () => {
    setDraft(note.text);
    setEditing(false);
  };

  const saveEdit = () => {
    const trimmed = draft.trim();
    if (!trimmed) {
      cancelEdit();
      return;
    }
    onSave?.(note.id, trimmed);
    setEditing(false);
  };

  // onShare returns 'sent' or 'queued' (queued shares go out on reconnect).
  const handleShare = () => {
    const result = onShare?.(note);
    if (!result) return;
    setJustShared(result);
    clearTimeout(sharedTimer.current);
    sharedTimer.current = setTimeout(() => setJustShared(null), 2000);
  };

  // Enter saves, Shift+Enter is a newline, Escape cancels.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      saveEdit();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  const wasEdited = note.updatedAt && note.updatedAt !== note.createdAt;

  return (
    <Card>
      <Meta>
        <MetaText>
          <span>{formatTimestamp(note.createdAt)}</span>
          {wasEdited && <Edited>(edited)</Edited>}
          {note.sharedAt && (
            <SharedTag data-queued={note.shareQueued || undefined}>
              {note.shareQueued ? 'Queued' : 'Shared'}
            </SharedTag>
          )}
        </MetaText>

        <Controls>
          {editing ? (
            <>
              <IconButton type="button" data-variant="primary" onClick={saveEdit} aria-label="Save" title="Save">
                <CheckIcon style={ICON} />
              </IconButton>
              <IconButton type="button" onClick={cancelEdit} aria-label="Cancel" title="Cancel">
                <CloseIcon style={ICON} />
              </IconButton>
            </>
          ) : (
            <>
              {onShare && (
                <IconButton
                  type="button"
                  data-state={justShared ? 'done' : undefined}
                  onClick={handleShare}
                  aria-label={justShared ? (justShared === 'queued' ? 'Queued' : 'Shared') : 'Share to network'}
                  title={justShared ? (justShared === 'queued' ? 'Queued: sends when you reconnect' : 'Shared') : 'Share to network'}
                >
                  {justShared ? <CheckIcon style={ICON} /> : <ShareIcon style={ICON} />}
                </IconButton>
              )}
              <IconButton type="button" onClick={startEdit} aria-label="Edit" title="Edit">
                <EditIcon style={ICON} />
              </IconButton>
              <IconButton
                type="button"
                data-variant="danger"
                onClick={() => setConfirmDelete(true)}
                aria-label="Delete"
                title="Delete"
              >
                <DeleteIcon style={ICON} />
              </IconButton>
            </>
          )}
        </Controls>
      </Meta>

      {editing ? (
        <TextArea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <Body>{note.text}</Body>
      )}

      <ConfirmationModal
        open={confirmDelete}
        title="Delete Note"
        message="Delete this note? This cannot be undone."
        confirmLabel="Delete"
        onConfirm={() => {
          setConfirmDelete(false);
          onDelete?.(note.id);
        }}
        onCancel={() => setConfirmDelete(false)}
      />
    </Card>
  );
}
