import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import SegmentedDice from '@components/SegmentedDice';
import SheetSection from '@components/SheetSection/SheetSection';
import TablePicker, { entryId } from '@components/TablePicker/TablePicker';
import { Button, IconButton } from '@components/Layout/Layout';

import {
  Cards,
  Card,
  CardTitle,
  CardName,
  Description,
  Roller,
  Muted,
  Footnote,
  EditList,
  EditItem,
  EditHead,
  EditName,
} from './Collection.styles';

/**
 * A set of things a character has, picked or rolled from a table
 * (Infestations, Apps, Cybertech). Stored as { id: true } on
 * character[storageKey].
 *
 *   play   a card per item: name (+ tags), description, roller if it has a die
 *   edit   each item with remove; Add opens a TablePicker (choose or roll)
 *
 * Props:
 *   id, title          SheetSection jump id and title
 *   entries            the table
 *   storageKey         e.g. "_apps"
 *   isAvailable        (entry, character) => bool, extra filter for Add
 *   renderTags         (entry, character) => node, beside the name
 *   onRemoved          (id, character) => void, after removal (cleanup)
 *   rowActions         (id, entry, update) => node, extra buttons beside an
 *                      item's remove in the edit dialog; call update(fn)
 *                      to change the character and refresh
 *   emptyText          shown with nothing owned
 *   footnote           play note under the cards
 *   itemNoun           "app", "infestation", ... for labels
 */
export default function CollectionSection({
  character = null,
  onUpdate = () => {},
  id,
  title,
  entries = [],
  storageKey,
  isAvailable = () => true,
  renderTags = null,
  onRemoved = null,
  rowActions = null,
  emptyText = '',
  footnote = null,
  itemNoun = 'item',
}) {
  if (!character) return null;

  const owned = ownedEntries(character, storageKey, entries);

  return (
    <SheetSection
      id={id}
      title={title}
      editWidth="34rem"
      edit={
        <CollectionEditor
          character={character}
          onUpdate={onUpdate}
          title={title}
          entries={entries}
          storageKey={storageKey}
          isAvailable={isAvailable}
          onRemoved={onRemoved}
          rowActions={rowActions}
          itemNoun={itemNoun}
        />
      }
    >
      {owned.length === 0 ? (
        <Muted>{emptyText}</Muted>
      ) : (
        <Cards>
          {owned.map(({ id: itemId, entry }) => (
            <Card key={itemId}>
              <CardTitle>
                <CardName>{entry.label}</CardName>
                {renderTags?.(entry, character)}
              </CardTitle>
              {entry.description && <Description>{entry.description}</Description>}
              {entry.die && (
                <Roller>
                  <SegmentedDice dice={entry.die} character_id={character.id} />
                </Roller>
              )}
            </Card>
          ))}
        </Cards>
      )}

      {owned.length > 0 && footnote && <Footnote>{footnote}</Footnote>}
    </SheetSection>
  );
}

// Owned ids in saved order, resolved against the table. Ids missing from
// the table still show, by id, so nothing silently disappears.
function ownedEntries(character, storageKey, entries) {
  const store = character[storageKey] || {};
  return Object.keys(store)
    .filter((key) => store[key])
    .map((key) => ({
      id: key,
      entry: entries.find((e) => entryId(e) === key) || { label: key },
    }));
}

function CollectionEditor({
  character,
  onUpdate,
  title,
  entries,
  storageKey,
  isAvailable,
  onRemoved,
  rowActions,
  itemNoun,
}) {
  const [adding, setAdding] = useState(false);

  const owned = ownedEntries(character, storageKey, entries);
  const ownedIds = owned.map((o) => o.id);
  const available = entries.filter(
    (e) => !ownedIds.includes(entryId(e)) && isAvailable(e, character)
  );

  const add = (entry) => {
    if (!character[storageKey]) character[storageKey] = {};
    character[storageKey][entryId(entry)] = true;
    onUpdate();
  };

  const remove = (itemId) => {
    delete character[storageKey]?.[itemId];
    onRemoved?.(itemId, character);
    onUpdate();
  };

  return (
    <>
      {owned.length > 0 && (
        <EditList>
          {owned.map(({ id: itemId, entry }) => (
            <EditItem key={itemId}>
              <EditHead>
                <EditName>{entry.label}</EditName>
                {rowActions?.(itemId, entry, (fn) => {
                  fn(character);
                  onUpdate();
                })}
                <IconButton
                  type="button"
                  data-variant="danger"
                  onClick={() => remove(itemId)}
                  aria-label={`Remove ${entry.label}`}
                  title={`Remove ${itemNoun}`}
                >
                  <DeleteIcon style={{ fontSize: 16 }} />
                </IconButton>
              </EditHead>
            </EditItem>
          ))}
        </EditList>
      )}

      <div>
        <Button
          type="button"
          data-variant="primary"
          disabled={available.length === 0}
          onClick={() => setAdding(true)}
        >
          <AddIcon style={{ fontSize: 16 }} />
          Add {itemNoun}
        </Button>
      </div>

      {adding && (
        <TablePicker
          open
          title={`Add ${itemNoun}`}
          entries={available}
          closeOnRoll
          onSelect={add}
          onClose={() => setAdding(false)}
        />
      )}
    </>
  );
}
