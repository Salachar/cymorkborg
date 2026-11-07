import SegmentedDice from '@components/SegmentedDice';
import SheetSection from '@components/SheetSection/SheetSection';
import { Button, NumberStepper } from '@components/Layout/Layout';
import { formatModifier, healthLevel } from '@utils/character';
import { cyberEffects } from '@utils/cybertech';

import ResourceBar from './ResourceBar';

import { Down, Armor, ArmorText } from './HealthBar.styles';
import { Field, FieldLabel, Note, Divider } from './Editor.styles';

/**
 * Health, as a SheetSection. Always the same layout (no lock):
 *   play   the bar: − current / max +, tinted by HP level
 *   edit   max HP stepper, the creation roll (die + Toughness), heal to full
 *
 * Current HP is capped at max and may go below 0 (Battered / Dead*).
 *
 * Cybertech: max HP includes Skeleplating (+10; BaseClass adds it), and
 * Skinhard shows a natural-armor line with its roller.
 */
export default function HealthBar({ character = null, onUpdate = () => {} }) {
  if (!character) return null;

  const max = character.max_health; // includes cybertech bonus
  // Shown capped at max (e.g. right after Skeleplating comes out); the
  // stored value clamps the next time HP changes.
  const current = Math.min(character.current_health, max);
  const level = healthLevel(current, max);
  // const { armorDie } = cyberEffects(character);

  const setCurrent = (value) => {
    character.current_health = value;
    onUpdate();
  };

  return (
    <SheetSection
      id="sheet-health"
      title="Health"
      edit={<HealthEditor character={character} onUpdate={onUpdate} />}
    >
      <ResourceBar current={current} max={max} level={level} unit="HP" onChange={setCurrent} />
{/*
      {armorDie && (
        <Armor>
          <ArmorText>
            Natural armor · <strong>Skinhard −{armorDie}</strong>
          </ArmorText>
          <SegmentedDice character_id={character.id} dice={`1${armorDie}`} />
        </Armor>
      )} */}

      {current <= 0 && (
        <Down>
          <strong>{current < 0 ? 'Below 0 HP.' : 'At 0 HP.'}</strong> Roll on the Battered table (Combat, step 6).
        </Down>
      )}
    </SheetSection>
  );
}

function HealthEditor({ character, onUpdate }) {
  const die = character.constructor.die?.health || 'd8';
  const toughness = character.stats?.TOU || 0;
  const max = character.max_health;        // with cybertech bonus
  const base = character.base_max_health;  // what the stepper edits
  const { maxHpBonus } = cyberEffects(character);

  const setMax = (value) => {
    character.max_health = value;
    onUpdate();
  };

  // Creation roll: die + Toughness (the roller adds Toughness as its
  // modifier, so the total is already the max). Minimum 1, starts full.
  const handleRoll = (total) => {
    character.max_health = Math.max(1, total);
    character.current_health = character.max_health;
    onUpdate();
  };

  return (
    <>
      <Field>
        <FieldLabel>
          {maxHpBonus ? `Base max HP (+${maxHpBonus} Skeleplating = ${max})` : 'Max HP'}
        </FieldLabel>
        <NumberStepper value={base} min={1} label="max HP" size="lg" onChange={setMax} />
      </Field>
      <Note>
        Lowering max HP brings current HP down with it. Raising it leaves current HP alone.
        {maxHpBonus ? ' Installed cybertech is added on top automatically.' : ''}
      </Note>

      <Divider />

      <div>
        <FieldLabel>
          Roll {die} + Toughness ({formatModifier(toughness)})
        </FieldLabel>
        <div style={{ marginTop: '0.4rem' }}>
          <SegmentedDice
            character_id={character.id}
            dice={`1${die}`}
            mod={toughness}
            onRollComplete={handleRoll}
          />
        </div>
        <Note style={{ marginTop: '0.4rem' }}>
          Rolling sets {maxHpBonus ? 'base ' : ''}max HP (minimum 1) and heals to full.
        </Note>
      </div>

      <Divider />

      <Field>
        <FieldLabel>Current HP {character.current_health} / {max}</FieldLabel>
        <Button
          type="button"
          onClick={() => {
            character.current_health = character.max_health;
            onUpdate();
          }}
          disabled={character.current_health >= max}
        >
          Heal to full
        </Button>
      </Field>
    </>
  );
}
