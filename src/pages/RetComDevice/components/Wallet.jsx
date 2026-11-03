import { useState, useEffect } from 'react';

import { Divider, InsetBox, Line, Section, Spacer } from '@retcom/RetComComponents';
import ConfirmationModal from '@components/ConfirmationModal/ConfirmationModal';

import { formatCredits } from '@utils/general';
import { getWallet, saveWallet } from '@utils/localStorage';
import { searchAllItems } from '@data/tables';
import BuilderManager from '@data/builder';

import {
  Panel,
  Header,
  CreditsBox,
  CreditsLabel,
  CreditsValue,
  Body,
  Empty,
  Rows,
  ItemRow,
  Arrow,
  Grow,
  Quantity,
  Die,
  Cost,
  SellButton,
  CharRow,
  CharClass,
  ActiveMark,
  CharName,
  TransferSlot,
  TransferButton,
  ClearRow,
  ClearButton,
} from './Wallet.styles';

// ─── TerminalWallet ───────────────────────────────────────────────────────────

const hydrateWalletItems = (items) =>
  items.map((item) => {
    const found = searchAllItems(item.id);
    if (!found) return item;
    return {
      ...found.entry,
      ...item,
      value: item.value ?? found.entry.value ?? null,
    };
  });

const loadWallet = () => {
  const saved = getWallet();
  return { ...saved, items: hydrateWalletItems(saved.items) };
};

export default function Wallet() {
  const [wallet, setWallet] = useState(loadWallet);

  // Modal state: { type: 'sell'|'transfer'|'clear', index?, value?, character? } | null
  const [pendingAction, setPendingAction] = useState(null);

  useEffect(() => {
    const reload = () => setWallet(loadWallet());
    window.addEventListener('walletUpdated', reload);
    return () => window.removeEventListener('walletUpdated', reload);
  }, []);

  const handleConfirm = () => {
    if (!pendingAction) return;

    if (pendingAction.type === 'sell') {
      const current = getWallet();
      const item = current.items[pendingAction.index];
      if (!item?.value) return;
      const updated = {
        credits: current.credits + item.value,
        items: current.items.filter((_, idx) => idx !== pendingAction.index),
      };
      saveWallet(updated);
      setWallet(updated);
    }

    if (pendingAction.type === 'transfer') {
      const { character } = pendingAction;
      wallet.items.forEach((item) => character.addItemToGear(item));
      character.credits += wallet.credits;
      BuilderManager.save();
      saveWallet({ credits: 0, items: [] });
      setWallet({ credits: 0, items: [] });
    }

    if (pendingAction.type === 'clear') {
      saveWallet({ credits: 0, items: [] });
      setWallet({ credits: 0, items: [] });
    }

    setPendingAction(null);
  };

  const modalProps = (() => {
    if (!pendingAction) return null;
    if (pendingAction.type === 'sell') return {
      title: 'Sell Item',
      message: `Sell this item for ${formatCredits(pendingAction.value)}? It will be removed from the wallet.`,
      confirmLabel: 'Sell',
    };
    if (pendingAction.type === 'transfer') return {
      title: 'Transfer to Character',
      message: `Transfer all wallet contents to ${pendingAction.character?.name || 'this character'}?`,
      confirmLabel: 'Transfer',
    };
    if (pendingAction.type === 'clear') return {
      title: 'Clear Wallet',
      message: 'Wipe the wallet without transferring? Extracted items remain extracted.',
      confirmLabel: 'Clear',
    };
    return null;
  })();

  const totalItems = wallet.items.length;
  const isEmpty = wallet.credits === 0 && totalItems === 0;

  const lastId = BuilderManager.lastSelectedId;
  const allChars = Object.values(BuilderManager.characters);
  const sortedChars = [
    ...allChars.filter((c) => c.id === lastId),
    ...allChars.filter((c) => c.id !== lastId),
  ];

  return (
    <Panel>
      {/* Header */}
      <Header>
        <div>
          <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>TERMINAL WALLET</Line>
          <Line yellow large bold style={{ margin: 0 }}>EXTRACTED ASSETS</Line>
        </div>
        <CreditsBox>
          <CreditsLabel>TOTAL CREDITS</CreditsLabel>
          <CreditsValue>{formatCredits(wallet.credits)}</CreditsValue>
        </CreditsBox>
      </Header>

      <Body>
        {isEmpty ? (
          <Empty>
            <Line smoke style={{ margin: 0, fontSize: '1rem', opacity: 0.5 }}>No extracted items or credits</Line>
            <Line smoke style={{ margin: 0, fontSize: '0.875rem', opacity: 0.4, marginTop: '0.5rem' }}>
              Extract items from safes, wallets, and other devices
            </Line>
          </Empty>
        ) : (
          <>
            <Section title={`ITEMS EXTRACTED: (${totalItems})`} color="cyan">
              <Rows>
                {wallet.items.map((item, i) => {
                  const found = searchAllItems(item.id);
                  const display = found ? { ...found.entry, quantity: item.quantity || 1 } : item;
                  return (
                    <ItemRow key={i}>
                      <Arrow>→</Arrow>
                      <Grow>
                        <Line cyan bold style={{ margin: 0, fontSize: '0.875rem' }}>
                          {display.label}
                          {display.quantity > 1 && <Quantity>×{display.quantity}</Quantity>}
                          {display.die && <Die>{display.die}</Die>}
                          {display.cost && <Cost>{display.cost}</Cost>}
                        </Line>
                        {display.description && (
                          <Line smoke style={{ margin: 0, fontSize: '0.8rem', marginTop: '0.15rem' }}>{display.description}</Line>
                        )}
                        {item.value && (
                          <Line style={{ margin: 0, fontSize: '0.75rem', marginTop: '0.15rem', color: 'rgb(34, 197, 94)' }}>
                            ~{formatCredits(item.value)}
                          </Line>
                        )}
                      </Grow>

                      {item.value && (
                        <SellButton
                          type="button"
                          onClick={() => setPendingAction({ type: 'sell', index: i, value: item.value })}
                        >
                          SELL ({formatCredits(item.value)})
                        </SellButton>
                      )}
                    </ItemRow>
                  );
                })}
              </Rows>
            </Section>

            <Spacer />

            <Section title="TRANSFER TO CHARACTER:" color="green">
              {sortedChars.length === 0 ? (
                <Line smoke style={{ margin: 0, fontSize: '0.8rem', opacity: 0.5 }}>No characters found</Line>
              ) : (
                <Rows $tight>
                  {sortedChars.map((character) => {
                    const isLast = character.id === lastId;
                    return (
                      <CharRow key={character.id} data-active={isLast || undefined}>
                        <Grow>
                          <CharClass>
                            {character.class}
                            {isLast && <ActiveMark>● ACTIVE</ActiveMark>}
                          </CharClass>
                          <CharName>{character.name || 'No Name'}</CharName>
                        </Grow>
                        <TransferSlot>
                          <TransferButton
                            type="button"
                            onClick={() => setPendingAction({ type: 'transfer', character })}
                          >
                            TRANSFER
                          </TransferButton>
                        </TransferSlot>
                      </CharRow>
                    );
                  })}
                </Rows>
              )}
            </Section>

            <Spacer />
            <Divider />
            <InsetBox color="yellow" title="Clearing the Wallet">
              <Line style={{ fontSize: '0.65rem' }}>Clearing will wipe the wallet without transferring to a character. Extracted items remain extracted.</Line>
            </InsetBox>
            <ClearRow>
              <ClearButton type="button" onClick={() => setPendingAction({ type: 'clear' })}>
                CLEAR
              </ClearButton>
            </ClearRow>
          </>
        )}
      </Body>

      {modalProps && (
        <ConfirmationModal
          open={Boolean(pendingAction)}
          title={modalProps.title}
          message={modalProps.message}
          confirmLabel={modalProps.confirmLabel}
          onConfirm={handleConfirm}
          onCancel={() => setPendingAction(null)}
        />
      )}
    </Panel>
  );
}
