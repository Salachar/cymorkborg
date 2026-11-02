import { useEffect, useRef } from 'react';
import CasinoIcon from '@mui/icons-material/Casino';

import Modal from '@components/Modal/Modal';
import { Button } from '@components/Layout/Layout';
import useTableRoll from '@hooks/useTableRoll';

import {
  Layout,
  Actions,
  ListArea,
  List,
  Option,
  DieFace,
  Text,
  Label,
  Description,
} from './TablePicker.styles';

export const entryId = (entry) => entry?.id || entry?.label || entry?.name;

/**
 * Pick from a table, or roll for it.
 *
 *   tap an entry   selects it and closes
 *   Roll dN        tumbles, selects the result, stays open (re-roll freely);
 *                  with closeOnRoll it closes instead (for adding to a
 *                  collection, where a second roll would add a second item)
 *   Clear          empties the selection (only shown if onClear is given)
 *
 * allowRoll={false} hides the Roll button, for picks that aren't random
 * (e.g. which cartridge to load).
 *
 * onSelect must *set* the selection (never toggle), or a roll landing on
 * the current pick would clear it. Single-select for now; the API leaves
 * room for multi-select later.
 */
export default function TablePicker({
  open,
  title,
  entries = [],
  selectedId = null,
  onSelect,
  onClear,
  onClose,
  closeOnRoll = false,
  allowRoll = true,
}) {
  const listRef = useRef(null);

  const { roll, rolling, highlight } = useTableRoll(entries.length, (index) => {
    onSelect?.(entries[index]);
    if (closeOnRoll) onClose?.();
  });

  // Keep the selection (and the rolling highlight) in view.
  const focusIndex = rolling
    ? highlight
    : entries.findIndex((e) => entryId(e) === selectedId);

  useEffect(() => {
    if (!open || focusIndex == null || focusIndex < 0) return;
    const el = listRef.current?.querySelector(`[data-index="${focusIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [open, focusIndex]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      maxWidth="32rem"
      height="min(80dvh, 40rem)"
    >
      <Layout>
        <Actions>
          {allowRoll && (
            <Button type="button" data-variant="primary" onClick={roll} disabled={rolling || !entries.length}>
              <CasinoIcon style={{ fontSize: 16 }} />
              {rolling ? 'Rolling…' : `Roll d${entries.length}`}
            </Button>
          )}
          {selectedId && onClear && (
            <Button type="button" onClick={onClear} disabled={rolling}>
              Clear
            </Button>
          )}
        </Actions>

        <ListArea ref={listRef}>
          <List>
            {entries.map((entry, index) => {
              const id = entryId(entry);
              return (
                <li key={id ?? index}>
                  <Option
                    type="button"
                    data-index={index}
                    data-highlight={rolling && highlight === index ? 'true' : undefined}
                    aria-pressed={!rolling && id === selectedId}
                    disabled={rolling}
                    onClick={() => {
                      onSelect?.(entry);
                      onClose?.();
                    }}
                  >
                    <DieFace>{index + 1}</DieFace>
                    <Text>
                      <Label>{entry.label}</Label>
                      {entry.description && <Description>{entry.description}</Description>}
                    </Text>
                  </Option>
                </li>
              );
            })}
          </List>
        </ListArea>
      </Layout>
    </Modal>
  );
}
