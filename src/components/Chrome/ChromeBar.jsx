import { useState } from 'react';

import { useGameMessages } from '@context/GameMessagesContext';
import { useCyborgSocket } from '@hooks/useCyborgSocket';
import { useCharacterContext } from '@context/CharacterContext';

import ConnectionModal from '@components/Connection/ConnectionModal';
import MessageHistoryModal from '@components/Connection/MessageHistoryModal';
import DataModal from '@components/Connection/DataModal';

import NetworkButton from './NetworkButton';
import DataButton from './DataButton';
import CharacterRow from './CharacterRow';

import {
  Bar,
  StripRow,
  StripButton,
  LastMessage,
  MessageLabel,
  MessageText,
  MessageEmpty,
  ClientsRow,
  Client,
  ClientDot,
  Extension,
  JumpRow,
  JumpList,
  JumpButton,
  JumpNumber,
} from './ChromeBar.styles';

export { ChromeToolbar } from './ChromeBar.styles';

/**
 * ChromeBar — the bar under the nav. Each page renders it above its Page:
 *
 *   <>
 *     <ChromeBar character jumps={JUMPS}>
 *       <ChromeToolbar>...page controls...</ChromeToolbar>
 *     </ChromeBar>
 *     <Page compact>...</Page>
 *   </>
 *
 * Rows, top to bottom (the bar decides the order, the page decides what's
 * in it):
 *   main strip          always: message log, last message, network, data
 *   connected players   when connected and others are online
 *   character           character prop, and a character is selected
 *   extension           children, if any (RetCom header, Market search)
 *   jumps               jumps prop: [{ id, label, number? }]
 */
export default function ChromeBar({
  character = false,
  jumps = null,
  showLock = false,
  children,
}) {
  const { lastMessage, messageHistory } = useGameMessages();
  const { status, connectedClients } = useCyborgSocket();
  const { selectedCharacter, touch } = useCharacterContext();

  const [connectionOpen, setConnectionOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [dataOpen, setDataOpen] = useState(false);

  const isConnected = status === 'connected';
  const showCharacter = character && Boolean(selectedCharacter);
  const showJumps = Array.isArray(jumps) && jumps.length > 0;

  return (
    <>
      <Bar>
        <StripRow>
          <StripButton type="button" onClick={() => setHistoryOpen(true)}>
            {messageHistory.length > 0 ? `Log (${messageHistory.length})` : 'Log'}
          </StripButton>

          <LastMessage>
            {lastMessage ? (
              <>
                <MessageLabel>{lastMessage.label ?? lastMessage.type.toUpperCase()}</MessageLabel>
                <MessageText>{lastMessage.message}</MessageText>
              </>
            ) : (
              <MessageEmpty>No messages this session</MessageEmpty>
            )}
          </LastMessage>

          <NetworkButton onClick={() => setConnectionOpen(true)} />
          <DataButton onClick={() => setDataOpen(true)} />
        </StripRow>

        {isConnected && connectedClients.length > 0 && (
          <ClientsRow>
            {connectedClients.map((name) => (
              <Client key={name}>
                <ClientDot />
                {name}
              </Client>
            ))}
          </ClientsRow>
        )}

        {showCharacter && (
          <CharacterRow
            character={selectedCharacter}
            showLock={showLock}
            onUpdate={touch}
          />
        )}

        {showJumps && <Jumps items={jumps} />}

        {children && <Extension>{children}</Extension>}
      </Bar>

      <ConnectionModal open={connectionOpen} onClose={() => setConnectionOpen(false)} />
      <MessageHistoryModal open={historyOpen} onClose={() => setHistoryOpen(false)} />
      <DataModal open={dataOpen} onClose={() => setDataOpen(false)} />
    </>
  );
}

// Scrolls the page to the element with that id. Targets set their own
// small scroll-margin-top.
function Jumps({ items }) {
  const jump = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <JumpRow aria-label="Jump to section">
      <JumpList>
        {items.map((item) => (
          <JumpButton key={item.id} type="button" onClick={() => jump(item.id)}>
            {item.number && <JumpNumber>{item.number}</JumpNumber>}
            {item.label}
          </JumpButton>
        ))}
      </JumpList>
    </JumpRow>
  );
}
