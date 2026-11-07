import { useEffect, useState } from 'react';

import Modal from '@components/Modal/Modal';
import ConfirmationModal from '@components/ConfirmationModal/ConfirmationModal';
import { Button, Roll, Tag } from '@components/Layout/Layout';
import { useCharacterContext } from '@context/CharacterContext';

import { formatCredits } from '@utils/general';
import { getWallet, saveWallet } from '@utils/localStorage';
import { searchAllItems } from '@data/tables';
import BuilderManager from '@data/builder';

import {
  Balance,
  BalanceLabel,
  BalanceValue,
  GroupTitle,
  Rows,
  Row,
  RowMain,
  ItemTitle,
  ItemName,
  Meta,
  Description,
  Worth,
  CharClass,
  CharName,
  Muted,
  ClearRow,
} from './WalletDialog.styles';

const hydrateWalletItems = (items = []) =>
  items.map((item) => {
    const found = searchAllItems(item.id);
    if (!found) return item;
    return { ...found.entry, ...item, value: item.value ?? found.entry.value ?? null };
  });

const loadWallet = () => {
  const saved = getWallet();
  return { ...saved, items: hydrateWalletItems(saved.items) };
};

/**
 * The Terminal Wallet as an app dialog: credits and items extracted from
 * RetCom devices, until they're sold or transferred to a character.
 * Same behavior as the RetCom Wallet component, in the app's styling.
 */
export default function WalletDialog({ open, onClose }) {
  const [wallet, setWallet] = useState(loadWallet);
  // { type: 'sell' | 'transfer' | 'clear', index?, value?, character? } | null
  const [pendingAction, setPendingAction] = useState(null);
  const { touch } = useCharacterContext();

  // Reload when opened and whenever something is extracted.
  useEffect(() => {
    if (open) setWallet(loadWallet());
  }, [open]);

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
      setWallet({ ...updated, items: hydrateWalletItems(updated.items) });
    }

    if (pendingAction.type === 'transfer') {
      const { character } = pendingAction;
      wallet.items.forEach((item) => character.addItemToGear(item));
      character.credits += wallet.credits;
      BuilderManager.save();
      saveWallet({ credits: 0, items: [] });
      setWallet({ credits: 0, items: [] });
      touch?.(); // refresh the ChromeBar's character row and the sheet
    }

    if (pendingAction.type === 'clear') {
      saveWallet({ credits: 0, items: [] });
      setWallet({ credits: 0, items: [] });
    }

    setPendingAction(null);
  };

  const modalProps = (() => {
    if (!pendingAction) return null;
    if (pendingAction.type === 'sell') {
      return {
        title: 'Sell Item',
        message: `Sell this item for ${formatCredits(pendingAction.value)}? It will be removed from the wallet.`,
        confirmLabel: 'Sell',
      };
    }
    if (pendingAction.type === 'transfer') {
      return {
        title: 'Transfer to Character',
        message: `Transfer all wallet contents to ${pendingAction.character?.name || 'this character'}?`,
        confirmLabel: 'Transfer',
      };
    }
    return {
      title: 'Clear Wallet',
      message: 'Wipe the wallet without transferring? Extracted items remain extracted.',
      confirmLabel: 'Clear',
    };
  })();

  const totalItems = wallet.items.length;
  const isEmpty = wallet.credits === 0 && totalItems === 0;

  // Last-selected character first.
  const lastId = BuilderManager.lastSelectedId;
  const allChars = Object.values(BuilderManager.characters);
  const sortedChars = [
    ...allChars.filter((c) => c.id === lastId),
    ...allChars.filter((c) => c.id !== lastId),
  ];

  return (
    <Modal open={open} onClose={onClose} title="Terminal Wallet" subtitle="Extracted assets" maxWidth="38rem">
      <Balance>
        <BalanceLabel>Total credits</BalanceLabel>
        <BalanceValue>{formatCredits(wallet.credits)}</BalanceValue>
      </Balance>

      {isEmpty ? (
        <Muted>
          Nothing extracted yet. Credits and items pulled from safes, wallets and other devices land here.
        </Muted>
      ) : (
        <>
          {totalItems > 0 && (
            <>
              <GroupTitle>Items extracted ({totalItems})</GroupTitle>
              <Rows>
                {wallet.items.map((item, i) => {
                  const found = searchAllItems(item.id);
                  const display = found ? { ...found.entry, quantity: item.quantity || 1 } : item;

                  return (
                    <Row key={i}>
                      <RowMain>
                        <ItemTitle>
                          <ItemName>{display.label}</ItemName>
                          {display.quantity > 1 && <Meta>×{display.quantity}</Meta>}
                          {display.die && <Roll>{display.die}</Roll>}
                          {display.cost && <Meta>{display.cost}</Meta>}
                        </ItemTitle>
                        {display.description && <Description>{display.description}</Description>}
                        {item.value && <Worth>Worth ~{formatCredits(item.value)}</Worth>}
                      </RowMain>

                      {item.value && (
                        <Button
                          type="button"
                          onClick={() => setPendingAction({ type: 'sell', index: i, value: item.value })}
                        >
                          Sell {formatCredits(item.value)}
                        </Button>
                      )}
                    </Row>
                  );
                })}
              </Rows>
            </>
          )}

          <GroupTitle>Transfer to character</GroupTitle>
          {sortedChars.length === 0 ? (
            <Muted>No characters yet. Create one on the Punks tab.</Muted>
          ) : (
            <Rows>
              {sortedChars.map((character) => {
                const isLast = character.id === lastId;
                return (
                  <Row key={character.id} data-active={isLast || undefined}>
                    <RowMain>
                      <CharClass>
                        {character.class}
                        {isLast && <Tag>Active</Tag>}
                      </CharClass>
                      <CharName>{character.name || 'No Name'}</CharName>
                    </RowMain>
                    <Button
                      type="button"
                      data-variant="primary"
                      onClick={() => setPendingAction({ type: 'transfer', character })}
                    >
                      Transfer
                    </Button>
                  </Row>
                );
              })}
            </Rows>
          )}

          <ClearRow>
            <Muted>Clearing wipes the wallet without transferring. Extracted items remain extracted.</Muted>
            <Button type="button" data-variant="danger" onClick={() => setPendingAction({ type: 'clear' })}>
              Clear
            </Button>
          </ClearRow>
        </>
      )}

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
    </Modal>
  );
}
