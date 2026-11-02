import { useState, useEffect, useRef } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/IosShare';

import ConfirmationModal from '@components/ConfirmationModal/ConfirmationModal';
import { IconButton, TextArea } from '@components/Layout/Layout';
import { formatTimestamp } from '@utils/time';

import { Card, Meta, MetaText, Edited, Controls, Body } from './NoteCard.styles';

const ICON = { fontSize: 16 };

export default function NoteCard({ note, onSave, onDelete, onShare, isConnected = false }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(note.text);
  const [justShared, setJustShared] = useState(false);
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

  const handleShare = () => {
    const ok = onShare?.(note);
    if (!ok) return;
    setJustShared(true);
    clearTimeout(sharedTimer.current);
    sharedTimer.current = setTimeout(() => setJustShared(false), 2000);
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
              {isConnected && (
                <IconButton
                  type="button"
                  data-state={justShared ? 'done' : undefined}
                  onClick={handleShare}
                  aria-label={justShared ? 'Shared' : 'Share to network'}
                  title={justShared ? 'Shared' : 'Share to network'}
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
