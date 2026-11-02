import { useGameMessages } from '@context/GameMessagesContext';
import Modal from '@components/Modal/Modal';
import { Button } from '@components/Layout/Layout';

import {
  Actions,
  Muted,
  HistoryRow,
  HistoryLabel,
  HistoryMessage,
  HistoryTime,
} from './Connection.styles';

function formatTime(ts) {
  try {
    return new Date(ts).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
  } catch {
    return '';
  }
}

export default function MessageHistoryModal({ open, onClose }) {
  const { messageHistory, clearHistory } = useGameMessages();

  return (
    <Modal open={open} onClose={onClose} title="Notification History" maxWidth="30rem">
      {messageHistory.length > 0 && (
        <Actions>
          <Button type="button" onClick={clearHistory}>Clear</Button>
        </Actions>
      )}

      {messageHistory.length === 0 ? (
        <Muted>No notifications yet this session.</Muted>
      ) : (
        <div>
          {messageHistory.map((msg) => (
            <HistoryRow key={msg.id}>
              <HistoryLabel>{msg.label ?? msg.type.toUpperCase()}</HistoryLabel>
              <HistoryMessage>{msg.message}</HistoryMessage>
              <HistoryTime>{formatTime(msg.timestamp)}</HistoryTime>
            </HistoryRow>
          ))}
        </div>
      )}
    </Modal>
  );
}
