import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import SegmentedDice from '@components/SegmentedDice';
import SheetSection from '@components/SheetSection/SheetSection';
import TablePicker, { entryId } from '@components/TablePicker/TablePicker';
import ConfirmationModal from '@components/ConfirmationModal/ConfirmationModal';
import { Button, IconButton, NumberStepper, TextInput, TextArea } from '@components/Layout/Layout';
import {
  STARTING_ITEMS_1,
  STARTING_ITEMS_2,
  STARTING_ITEMS_3,
  searchAllItems,
} from '@data/tables';

import PickerButton from './PickerButton';
import { FieldLabel, Divider } from './Editor.styles';
import {
  Group,
  GroupHeading,
  Items,
  Item,
  ItemTop,
  ItemMain,
  ItemTitle,
  ItemName,
  ItemValue,
  ItemDescription,
  ItemSide,
  ItemRoller,
  Empty,
  GroupTitle,
  Pickers,
  AddForm,
} from './Inventory.styles';

// Starting equipment: three tables, kept separate from gear.
const STARTING_TABLES = [
  { name: 'd8', label: 'Starting d8', entries: STARTING_ITEMS_1 },
  { name: 'd12_1', label: 'Starting d12 #1', entries: STARTING_ITEMS_2 },
  { name: 'd12_2', label: 'Starting d12 #2', entries: STARTING_ITEMS_3 },
];

// Display groups, in order. Unknown sections fall under "Other".
const CATEGORIES = [
  ['weapons', 'Weapons'],
  ['ammo', 'Ammo'],
  ['armor', 'Armor'],
  ['equipment', 'Equipment'],
  ['cybertech', 'Cybertech'],
  ['drugs', 'Drugs'],
  ['extracted', 'Extracted'],
  ['custom', 'Misc'],
];

/* ---- Data helpers -------------------------------------------------------- */

function parseCost(costStr = '0¤') {
  const match = String(costStr).match(/^(\d+(?:\.\d+)?[kM]?)¤/);
  if (!match) return 0;
  const raw = match[1];
  if (raw.includes('k')) return parseFloat(raw) * 1000;
  if (raw.includes('M')) return parseFloat(raw) * 1000000;
  return parseFloat(raw);
}

function formatCost(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M¤`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}k¤`;
  return `${value}¤`;
}

function startingSelections(character) {
  return STARTING_TABLES.map((table) => {
    const selections = character.getStartingItemsSelections(table.name);
    const id = Object.keys(selections).find((key) => selections[key]) || null;
    const entry = id ? table.entries.find((e) => entryId(e) === id) : null;
    return { table, id, entry };
  });
}

// Every gear and custom item, with where it's stored (for edits) kept
// separate from where it's shown (category).
function collectItems(character) {
  const items = [];

  Object.keys(character.gear).forEach((storageSection) => {
    Object.keys(character.gear[storageSection]).forEach((itemId) => {
      const gearItem = character.gear[storageSection][itemId];
      const found = searchAllItems(itemId);
      const entry = found?.entry ?? {
        label: gearItem.label || itemId,
        description: gearItem.description,
        die: gearItem.die,
        cost: gearItem.cost,
      };
      items.push({
        key: `gear:${storageSection}:${itemId}`,
        category: found?.section ?? storageSection,
        entry,
        quantity: gearItem.quantity ?? 0,
        setQuantity: (q) => {
          gearItem.quantity = Math.max(0, q);
        },
        remove: () => {
          delete character.gear[storageSection][itemId];
          if (Object.keys(character.gear[storageSection]).length === 0) {
            delete character.gear[storageSection];
          }
        },
      });
    });
  });

  (character._custom_items || []).forEach((customItem, index) => {
    items.push({
      key: `custom:${index}:${customItem.label}`,
      category: 'custom',
      entry: { label: customItem.label, description: customItem.description },
      quantity: customItem.quantity ?? 0,
      setQuantity: (q) => {
        customItem.quantity = Math.max(0, q);
      },
      remove: () => {
        character._custom_items.splice(index, 1);
      },
    });
  });

  return items;
}

function groupByCategory(items) {
  const groups = CATEGORIES.map(([key, label]) => ({ key, label, items: [] }));
  const other = { key: 'other', label: 'Other', items: [] };
  items.forEach((item) => {
    const group = groups.find((g) => g.key === item.category) || other;
    group.items.push(item);
  });
  return [...groups, other].filter((g) => g.items.length > 0);
}

/* ---- Section ------------------------------------------------------------- */

/**
 * Inventory, as a SheetSection. Starting equipment is its own group and
 * stays separate from gear (no quantity, no selling).
 *   play   starting equipment, then items by category; each item has a
 *          quantity stepper (stops at 0, item stays listed), a delete
 *          (confirmed), and a roller if it has a die
 *   edit   choose/roll starting equipment, add custom items
 */
export default function Inventory({ character = null, onUpdate = () => {} }) {
  // Item waiting on delete confirmation.
  const [pendingDelete, setPendingDelete] = useState(null);

  if (!character) return null;

  const starting = startingSelections(character).filter((s) => s.entry);
  const groups = groupByCategory(collectItems(character));

  return (
    <SheetSection
      id="sheet-inventory"
      title="Inventory"
      editWidth="44rem"
      edit={<InventoryEditor character={character} onUpdate={onUpdate} />}
    >
      <Group>
        <GroupHeading>Starting equipment</GroupHeading>
        {starting.length === 0 ? (
          <Empty>No starting equipment chosen.</Empty>
        ) : (
          <Items>
            {starting.map(({ table, entry }) => (
              <ItemRow key={table.name} character={character} entry={entry} />
            ))}
          </Items>
        )}
      </Group>

      {groups.length === 0 ? (
        <Group>
          <GroupHeading>Items</GroupHeading>
          <Empty>Nothing else yet.</Empty>
        </Group>
      ) : (
        groups.map((group) => (
          <Group key={group.key}>
            <GroupHeading>{group.label}</GroupHeading>
            <Items>
              {group.items.map((item) => (
                <ItemRow
                  key={item.key}
                  character={character}
                  entry={item.entry}
                  quantity={item.quantity}
                  onQuantity={(q) => {
                    item.setQuantity(q);
                    onUpdate();
                  }}
                  onDelete={() => setPendingDelete(item)}
                />
              ))}
            </Items>
          </Group>
        ))
      )}

      <ConfirmationModal
        open={Boolean(pendingDelete)}
        title="Delete Item"
        message={`Delete ${pendingDelete?.entry.label || 'this item'} from your inventory? This cannot be undone.`}
        confirmLabel="Delete"
        onConfirm={() => {
          pendingDelete?.remove();
          setPendingDelete(null);
          onUpdate();
        }}
        onCancel={() => setPendingDelete(null)}
      />
    </SheetSection>
  );
}

// One item. Starting equipment passes no quantity (no stepper, value, or
// delete).
function ItemRow({ character, entry, quantity, onQuantity, onDelete }) {
  const counted = typeof quantity === 'number';
  const unitCost = parseCost(entry.cost);
  const totalValue = counted ? unitCost * quantity : 0;

  return (
    <Item data-out={counted && quantity === 0 ? 'true' : undefined}>
      <ItemTop>
        <ItemMain>
          <ItemTitle>
            <ItemName>{entry.label}</ItemName>
            {totalValue > 0 && <ItemValue>{formatCost(totalValue)}</ItemValue>}
          </ItemTitle>
          {entry.description && <ItemDescription>{entry.description}</ItemDescription>}
        </ItemMain>

        {counted && (
          <ItemSide>
            <NumberStepper
              value={quantity}
              min={0}
              size="sm"
              label={entry.label}
              onChange={onQuantity}
            />
            <IconButton
              type="button"
              data-variant="danger"
              onClick={onDelete}
              aria-label={`Delete ${entry.label}`}
              title="Delete"
            >
              <DeleteIcon style={{ fontSize: 16 }} />
            </IconButton>
          </ItemSide>
        )}
      </ItemTop>

      {entry.die && (
        <ItemRoller>
          <SegmentedDice dice={entry.die} character_id={character.id} />
        </ItemRoller>
      )}
    </Item>
  );
}

/* ---- Edit dialog --------------------------------------------------------- */

function InventoryEditor({ character, onUpdate }) {
  const [picker, setPicker] = useState(null); // starting table name
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const starting = startingSelections(character);
  const activeTable = STARTING_TABLES.find((t) => t.name === picker);
  const activeSelection = starting.find((s) => s.table.name === picker);

  const addCustomItem = () => {
    const label = newName.trim();
    if (!label) return;
    if (!character._custom_items) character._custom_items = [];
    character._custom_items.push({ label, description: newDescription.trim(), quantity: 1 });
    setNewName('');
    setNewDescription('');
    onUpdate();
  };

  return (
    <>
      <GroupTitle>Starting equipment</GroupTitle>
      <Pickers>
        {starting.map(({ table, entry }) => (
          <PickerButton
            key={table.name}
            wide
            label={table.label}
            value={entry?.label}
            onClick={() => setPicker(table.name)}
          />
        ))}
      </Pickers>

      <Divider />

      <GroupTitle>Add custom item</GroupTitle>
      <AddForm>
        <FieldLabel>Name</FieldLabel>
        <TextInput
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="e.g. Mysterious USB stick"
        />
        <FieldLabel>Description (optional)</FieldLabel>
        <TextArea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="e.g. Found in the Lucky Flight basement. Has 'ZOLA' scratched on it."
          rows={3}
        />
        <div>
          <Button type="button" data-variant="primary" disabled={!newName.trim()} onClick={addCustomItem}>
            Add to inventory
          </Button>
        </div>
      </AddForm>

      {activeTable && (
        <TablePicker
          open
          title={activeTable.label}
          entries={activeTable.entries}
          selectedId={activeSelection?.id ?? null}
          onSelect={(entry) => {
            character.setStartingItem(activeTable.name, entry);
            onUpdate();
          }}
          onClear={() => {
            character.clearStartingItem(activeTable.name);
            onUpdate();
          }}
          onClose={() => setPicker(null)}
        />
      )}
    </>
  );
}
