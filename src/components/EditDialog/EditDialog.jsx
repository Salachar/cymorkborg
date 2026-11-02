import EditIcon from '@mui/icons-material/Edit';

import Modal from '@components/Modal/Modal';
import { Button, IconButton } from '@components/Layout/Layout';

import { Footer } from './EditDialog.styles';

/**
 * The app's edit pattern:
 *   - a pencil EditButton in a header opens an EditDialog
 *   - the dialog's controls change values immediately (no Save/Cancel)
 *   - a roll inside the dialog *sets* the value, never toggles it
 *   - Done (or Escape, the ×, or the backdrop) closes it
 */
export default function EditDialog({ open, title, onClose, maxWidth = '28rem', children }) {
  return (
    <Modal open={open} onClose={onClose} title={title} maxWidth={maxWidth}>
      {children}
      <Footer>
        <Button type="button" data-variant="primary" onClick={onClose}>
          Done
        </Button>
      </Footer>
    </Modal>
  );
}

// Pencil button for section and card headers. label names what it edits.
export function EditButton({ label, onClick }) {
  return (
    <IconButton type="button" onClick={onClick} aria-label={`Edit ${label}`} title={`Edit ${label}`}>
      <EditIcon style={{ fontSize: 16 }} />
    </IconButton>
  );
}
