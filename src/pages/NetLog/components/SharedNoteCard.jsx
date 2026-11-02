import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import ConfirmationModal from '@components/ConfirmationModal/ConfirmationModal';
import { IconButton } from '@components/Layout/Layout';
import { formatTimestamp } from '@utils/time';

import { Card, Meta, MetaText, From, Edited, Controls, Body } from './NoteCard.styles';

export default function SharedNoteCard({ note, onDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const wasEdited = note.updatedAt && note.updatedAt !== note.createdAt;

  return (
    <Card data-kind="shared">
      <Meta>
        <MetaText>
          {note.from ? <From>{note.from}</From> : <From data-anon="true">anonymous</From>}
          <span>{formatTimestamp(note.updatedAt ?? note.createdAt)}</span>
          {wasEdited && <Edited>(edited)</Edited>}
        </MetaText>

        {onDelete && (
          <Controls>
            <IconButton
              type="button"
              data-variant="danger"
              onClick={() => setConfirmDelete(true)}
              aria-label="Remove from your feed"
              title="Remove from your feed"
            >
              <DeleteIcon style={{ fontSize: 16 }} />
            </IconButton>
          </Controls>
        )}
      </Meta>

      <Body>{note.text}</Body>

      <ConfirmationModal
        open={confirmDelete}
        title="Remove Shared Note"
        message="Remove this note from your shared feed? This only affects your view."
        confirmLabel="Remove"
        onConfirm={() => {
          setConfirmDelete(false);
          onDelete?.(note.id);
        }}
        onCancel={() => setConfirmDelete(false)}
      />
    </Card>
  );
}
