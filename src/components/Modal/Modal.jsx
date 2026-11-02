import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';

import { IconButton } from '@components/Layout/Layout';

import {
  Overlay,
  Dialog,
  DialogHeader,
  HeaderText,
  DialogTitle,
  DialogSubtitle,
  DialogBody,
  DialogMessage,
} from './Modal.styles';

// Open dialogs, oldest first. Escape closes only the top one, so a picker
// opened from an edit dialog doesn't take the dialog down with it.
const openStack = [];

// Same props as before, plus height. className / bodyClassName still pass
// through for any caller that relies on them.
//
// Rendered into document.body so scrolling inside a dialog never scrolls
// the page behind it, and so it can't be trapped under a sticky header.
export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  message,
  children,
  maxWidth,
  height,
  className = '',
  bodyClassName = '',
}) {
  const token = useRef({});
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    const me = token.current;
    openStack.push(me);

    const onKey = (e) => {
      if (e.key !== 'Escape' || openStack[openStack.length - 1] !== me) return;
      onCloseRef.current?.();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      const i = openStack.indexOf(me);
      if (i !== -1) openStack.splice(i, 1);
    };
  }, [open]);

  if (!open) return null;

  const hasHeader = Boolean(title || subtitle || onClose);
  const sizing = maxWidth || height ? { maxWidth, height } : undefined;

  return createPortal(
    <Overlay onClick={onClose}>
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : undefined}
        className={className || undefined}
        style={sizing}
        onClick={(e) => e.stopPropagation()}
      >
        {hasHeader && (
          <DialogHeader>
            <HeaderText>
              {title && <DialogTitle>{title}</DialogTitle>}
              {subtitle && <DialogSubtitle>{subtitle}</DialogSubtitle>}
            </HeaderText>
            {onClose && (
              <IconButton type="button" onClick={onClose} aria-label="Close" title="Close">
                <CloseIcon style={{ fontSize: 18 }} />
              </IconButton>
            )}
          </DialogHeader>
        )}

        {(message || children) && (
          <DialogBody className={bodyClassName || undefined}>
            {message && <DialogMessage>{message}</DialogMessage>}
            {children}
          </DialogBody>
        )}
      </Dialog>
    </Overlay>,
    document.body
  );
}
