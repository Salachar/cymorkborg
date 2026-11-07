import SegmentedDice from '@components/SegmentedDice';
import { cyberEffects } from '@utils/cybertech';

import ClassSection from './ClassSection';
import { GearKindItems, hasGearKind } from './Inventory';
import { SubLabel, Natural, NaturalText } from './Gear.styles';

/**
 * Weapons and Armor: the class's gear first (permanent: its weapon/armor
 * rollables, and any other class component with that `category`, like a
 * signature weapon), then Inventory items with that `category`, using
 * Inventory's rows (quantity, delete, roller). No "equipped" state: roll
 * whatever applies.
 *
 * Class gear is chosen/rolled in the section's edit dialog, like the class
 * section. In class preview, the class tables show as roll tables.
 */

export function Weapons({ character = null, builder = false, onUpdate = () => {} }) {
  if (!character) return null;

  return (
    <ClassSection
      character={character}
      builder={builder}
      onUpdate={onUpdate}
      category="weapon"
      id="sheet-weapons"
      title="Weapons"
    >
      {builder && <Carried character={character} onUpdate={onUpdate} kind="weapon" />}
    </ClassSection>
  );
}

export function Armor({ character = null, builder = false, onUpdate = () => {} }) {
  if (!character) return null;

  const { armorDie } = cyberEffects(character);

  return (
    <ClassSection
      character={character}
      builder={builder}
      onUpdate={onUpdate}
      category="armor"
      id="sheet-armor"
      title="Armor"
    >
      {builder && armorDie && (
        <div>
          <SubLabel>Natural armor</SubLabel>
          <Natural style={{ marginTop: '0.4rem' }}>
            <NaturalText>
              <strong>Skinhard</strong> (installed cybertech) · −{armorDie}
            </NaturalText>
            <SegmentedDice character_id={character.id} dice={`1${armorDie}`} />
          </Natural>
        </div>
      )}
      {builder && <Carried character={character} onUpdate={onUpdate} kind="armor" />}
    </ClassSection>
  );
}

// Inventory items of this kind, under a label; nothing if there are none.
function Carried({ character, onUpdate, kind }) {
  if (!hasGearKind(character, kind)) return null;
  return (
    <div>
      <SubLabel>Also carried</SubLabel>
      <div style={{ marginTop: '0.4rem' }}>
        <GearKindItems character={character} onUpdate={onUpdate} kind={kind} />
      </div>
    </div>
  );
}
