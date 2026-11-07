import { useState } from 'react';

import { useGameMessages } from '@context/GameMessagesContext';
import { useCyborgSocket } from '@hooks/useCyborgSocket';
import { useCharacterContext } from '@context/CharacterContext';

import ConnectionModal from '@components/Connection/ConnectionModal';
import DataModal from '@components/Connection/DataModal';

import NetworkButton from './NetworkButton';
import DataButton from './DataButton';
import CharacterRow from './CharacterRow';
import { useFollowLink } from '@components/Toast/Toast';

import {
  Bar,
  StripRow,
  LastMessage,
  MessageLink,
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
 *   main strip          always: latest message (tappable if it links
 *                       somewhere), network, data
 *   connected players   when connected and others are online
 *   character           character prop, and a character is selected
 *   extension           children, if any (RetCom header, Market search)
 *   jumps               jumps prop: [{ id, label, number? }]
 */
export default function ChromeBar({ character = false, jumps = null, children }) {
  const { lastMessage } = useGameMessages();
  const follow = useFollowLink();
  const { status, connectedClients } = useCyborgSocket();
  const { selectedCharacter, touch } = useCharacterContext();

  const [connectionOpen, setConnectionOpen] = useState(false);
  const [dataOpen, setDataOpen] = useState(false);

  const isConnected = status === 'connected';
  const showCharacter = character && Boolean(selectedCharacter);
  const showJumps = Array.isArray(jumps) && jumps.length > 0;

  return (
    <>
      <Bar>
        <StripRow>
          <LastMessage>
            {lastMessage ? (
              lastMessage.link ? (
                <MessageLink type="button" onClick={() => follow(lastMessage.link)}>
                  <MessageLabel>{lastMessage.label ?? lastMessage.type.toUpperCase()}</MessageLabel>
                  <MessageText>{lastMessage.message}</MessageText>
                </MessageLink>
              ) : (
                <>
                  <MessageLabel>{lastMessage.label ?? lastMessage.type.toUpperCase()}</MessageLabel>
                  <MessageText>{lastMessage.message}</MessageText>
                </>
              )
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

        {showCharacter && <CharacterRow character={selectedCharacter} onUpdate={touch} />}

        {showJumps && <Jumps items={jumps} />}

        {children && <Extension>{children}</Extension>}
      </Bar>

      <ConnectionModal open={connectionOpen} onClose={() => setConnectionOpen(false)} />
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
