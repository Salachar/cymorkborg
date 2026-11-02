import { useState } from 'react';
import WifiIcon from '@mui/icons-material/Wifi';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import SignalWifi1BarIcon from '@mui/icons-material/SignalWifi1Bar';

import Modal from '@components/Modal/Modal';
import { Button, TextInput } from '@components/Layout/Layout';
import { useCyborgSocket } from '@hooks/useCyborgSocket';

import {
  StatusPill,
  FieldRow,
  FieldLabel,
  QuickFillRow,
  QuickFillList,
  QuickFillButton,
  Hint,
  Actions,
  ClientsBlock,
  BlockLabel,
  ClientRow,
  ClientDot,
  Muted,
} from './Connection.styles';

const STATUS_LABEL = {
  connected: 'Connected',
  connecting: 'Connecting…',
  disconnected: 'Offline',
  error: 'Error',
};

const QUICK_FILLS = ['wss://ws.cymorkborg.com', 'wss://localhost:3002'];

export default function ConnectionModal({ open, onClose, children }) {
  const {
    host,
    setHost,
    playerName,
    setPlayerName,
    status,
    connectedClients,
    connect,
    disconnect,
  } = useCyborgSocket();

  const [hostInput, setHostInput] = useState(host);
  const [nameInput, setNameInput] = useState(playerName);

  if (!open) return null;

  const isConnected = status === 'connected';
  const canConnect = Boolean(hostInput.trim() && nameInput.trim());

  const handleConnect = () => {
    const h = hostInput.trim();
    const n = nameInput.trim();
    if (!h || !n) return;
    setHost(h);
    setPlayerName(n);
    connect(h, n);
  };

  const statusIcon =
    status === 'connected' ? (
      <WifiIcon style={{ fontSize: 13 }} />
    ) : status === 'connecting' ? (
      <SignalWifi1BarIcon style={{ fontSize: 13 }} />
    ) : (
      <WifiOffIcon style={{ fontSize: 13 }} />
    );

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Network Connection"
      subtitle={
        <StatusPill data-status={status}>
          {statusIcon}
          {STATUS_LABEL[status]}
        </StatusPill>
      }
    >
      <FieldRow>
        <FieldLabel>Name *</FieldLabel>
        <TextInput
          placeholder="Required"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          disabled={isConnected}
        />
      </FieldRow>

      <FieldRow>
        <FieldLabel>Host</FieldLabel>
        <TextInput
          placeholder="ws://192.168.x.x:3002"
          value={hostInput}
          onChange={(e) => setHostInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !isConnected && canConnect && handleConnect()}
          disabled={isConnected}
        />
      </FieldRow>

      {!isConnected && (
        <QuickFillRow>
          <FieldLabel>Quick fill</FieldLabel>
          <QuickFillList>
            {QUICK_FILLS.map((addr) => (
              <QuickFillButton key={addr} type="button" onClick={() => setHostInput(addr)}>
                {addr}
              </QuickFillButton>
            ))}
          </QuickFillList>
        </QuickFillRow>
      )}

      {children && <Hint>{children}</Hint>}

      <Actions>
        {isConnected ? (
          <Button type="button" onClick={disconnect}>
            Disconnect
          </Button>
        ) : (
          <Button type="button" data-variant="primary" onClick={handleConnect} disabled={!canConnect}>
            Connect
          </Button>
        )}
        <Button type="button" onClick={onClose}>
          Close
        </Button>
      </Actions>

      {isConnected && (
        <ClientsBlock>
          <BlockLabel>
            Connected — {connectedClients.length} {connectedClients.length === 1 ? 'client' : 'clients'}
          </BlockLabel>
          {connectedClients.length === 0 ? (
            <Muted>No other clients connected</Muted>
          ) : (
            connectedClients.map((name) => (
              <ClientRow key={name}>
                <ClientDot />
                {name}
              </ClientRow>
            ))
          )}
        </ClientsBlock>
      )}
    </Modal>
  );
}
