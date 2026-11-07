import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import { Stack, Card, Body, Label, Message, Hint, Dismiss, Countdown } from './Toast.styles';

/**
 * Follows a message link: { to, focusPath? }. focusPath travels as router
 * state; RetCom reads it and jumps to that node. Shared by the toasts, the
 * ChromeBar's latest message, and the Net Log.
 */
export function useFollowLink() {
  const navigate = useNavigate();
  return (link) => {
    if (!link?.to) return;
    navigate(link.to, link.focusPath ? { state: { focusPath: link.focusPath } } : undefined);
  };
}

function ToastItem({ toast, onDismiss }) {
  const { id, type = 'info', label, message, link, duration = 5000 } = toast;
  const timerRef = useRef(null);
  const follow = useFollowLink();

  useEffect(() => {
    timerRef.current = setTimeout(() => onDismiss(id), duration);
    return () => clearTimeout(timerRef.current);
  }, [id, duration, onDismiss]);

  return (
    <Card data-type={type} role="status">
      <Body
        type="button"
        onClick={() => {
          follow(link);
          onDismiss(id);
        }}
      >
        {label && <Label>{label}</Label>}
        <Message>{message}</Message>
        {link && <Hint>Tap to open</Hint>}
      </Body>

      <Dismiss type="button" onClick={() => onDismiss(id)} aria-label="Dismiss" title="Dismiss">
        <CloseIcon style={{ fontSize: 16 }} />
      </Dismiss>

      <Countdown style={{ animationDuration: `${duration}ms` }} />
    </Card>
  );
}

export default function ToastDisplay({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <Stack aria-live="polite">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </Stack>
  );
}
