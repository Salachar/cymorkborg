import { useState } from 'react';
import CasinoIcon from '@mui/icons-material/Casino';

import Modal from '@components/Modal/Modal';
import { Button, SegmentedControl } from '@components/Layout/Layout';
import { formatModifier } from '@utils/character';
import { rollDie } from '@utils/dice';

import AmountInput from './AmountInput';
import {
  ButtonRow,
  AdvanceButton,
  Count,
  Intro,
  Step,
  StepTitle,
  StepRule,
  Line,
  LineLabel,
  AbilityRow,
  Result,
  Outcome,
  Summary,
  Actions,
} from './Advancement.styles';

const ABILITIES = [
  ['STR', 'Strength'],
  ['AGI', 'Agility'],
  ['PRE', 'Presence'],
  ['TOU', 'Toughness'],
  ['KNO', 'Knowledge'],
];

const D6_FACES = [1, 2, 3, 4, 5, 6].map((n) => ({ value: n }));

const MIN_ABILITY = -3;
const MAX_ABILITY = 6;

const rollMany = (count, sides) =>
  Array.from({ length: count }, () => rollDie(sides)).reduce((a, b) => a + b, 0);

/**
 * Leveling up, per the rules: roll d6 against an ability.
 *   −3 to +1   always up by 1, unless the roll is a 1 (then down by 1)
 *   +2 and up  a roll >= the ability raises it, below lowers it
 * Clamped to −3 .. +6.
 */
export function advanceAbility(current, roll) {
  if (roll == null) return current;
  let next;
  if (current <= 1) next = roll === 1 ? current - 1 : current + 1;
  else next = roll >= current ? current + 1 : current - 1;
  return Math.max(MIN_ABILITY, Math.min(MAX_ABILITY, next));
}

const JACKET = {
  1: 'Nothing.',
  2: 'Nothing.',
  3: 'Nothing.',
  4: 'An untraceable credchip: 3d6 × 10¤.',
  5: 'A forgotten mag and a random booster mod. Add them to your inventory.',
  6: 'A faintly glowing pebble: 20% chance it infects you with a Nano power.',
};

/**
 * The Name card's Advance button and count, plus the dialog. Every roll
 * can be entered (physical dice) or rolled in-app; nothing is gated.
 * Apply commits whatever is filled in and counts one advancement.
 */
export default function Advancement({ character, onUpdate = () => {} }) {
  const [open, setOpen] = useState(false);
  const count = character.advancements || 0;

  return (
    <ButtonRow>
      <AdvanceButton type="button" onClick={() => setOpen(true)}>
        ▲ Advance
      </AdvanceButton>
      {count > 0 && <Count>Advancements: {count}</Count>}

      {open && (
        <AdvanceDialog character={character} onUpdate={onUpdate} onClose={() => setOpen(false)} />
      )}
    </ButtonRow>
  );
}

function RollButton({ onClick, label }) {
  return (
    <Button type="button" onClick={onClick} aria-label={label} title={label}>
      <CasinoIcon style={{ fontSize: 15 }} />
      Roll
    </Button>
  );
}

function AdvanceDialog({ character, onUpdate, onClose }) {
  const [hpRoll, setHpRoll] = useState(null);   // 6d10 total
  const [hpGain, setHpGain] = useState(null);   // d6
  const [abilityRolls, setAbilityRolls] = useState({}); // { STR: 1-6, ... }
  const [jacket, setJacket] = useState(null);   // d6
  const [credchip, setCredchip] = useState(null); // 3d6 × 10
  const [pebble, setPebble] = useState(null);   // d100

  const max = character.max_health;
  const hpImproves = hpRoll != null && hpRoll >= max;
  const newMax = hpImproves && hpGain ? max + hpGain : max;

  const setAbilityRoll = (key, value) => setAbilityRolls((prev) => ({ ...prev, [key]: value }));

  const abilityChanges = ABILITIES.map(([key, name]) => {
    const current = character.stats?.[key] ?? 0;
    const roll = abilityRolls[key] ?? null;
    return { key, name, current, roll, next: advanceAbility(current, roll) };
  });

  const credits = jacket === 4 && credchip > 0 ? credchip : 0;

  // What Apply will do, in words.
  const summary = [];
  if (newMax !== max) summary.push(`Max HP ${max} → ${newMax}`);
  abilityChanges
    .filter((a) => a.roll != null && a.next !== a.current)
    .forEach((a) => summary.push(`${a.key} ${formatModifier(a.current)} → ${formatModifier(a.next)}`));
  if (credits) summary.push(`+${credits.toLocaleString()}¤`);

  const apply = () => {
    // The setter takes the BASE max; max (read above) includes cybertech
    // bonuses, so add the gain to the base rather than setting newMax.
    if (newMax !== max) character.max_health = character.base_max_health + (newMax - max);
    abilityChanges.forEach((a) => {
      if (a.roll != null && a.next !== a.current) character[a.key.toLowerCase()] = a.next;
    });
    if (credits) character.credits = character.credits + credits;
    character.advancements = (character.advancements || 0) + 1;
    onUpdate();
    onClose();
  };

  return (
    <Modal open onClose={onClose} title="Advance" maxWidth="40rem">
      <Intro>
        Roll on-screen or enter your own dice. Apply commits whatever is filled in and counts one
        advancement; anything left blank stays as it is.
      </Intro>

      {/* ---- 1. More HP ---- */}
      <Step>
        <div>
          <StepTitle>More HP</StepTitle>
          <StepRule>Roll 6d10. If it's {max} or more (your max HP), max HP goes up by d6.</StepRule>
        </div>

        <Line>
          <LineLabel>6d10</LineLabel>
          <AmountInput allowEmpty label="6d10 total" value={hpRoll} onChange={setHpRoll} width="6rem" />
          <RollButton label="Roll 6d10" onClick={() => setHpRoll(rollMany(6, 10))} />
          {hpRoll != null && (
            <Result data-tone={hpImproves ? 'up' : undefined}>
              <strong>{hpImproves ? 'Improves' : 'No change'}</strong>
            </Result>
          )}
        </Line>

        {hpImproves && (
          <Line>
            <LineLabel>Increase (d6)</LineLabel>
            <SegmentedControl options={D6_FACES} value={hpGain} onChange={setHpGain} />
            <RollButton label="Roll d6" onClick={() => setHpGain(rollDie(6))} />
            {hpGain && (
              <Result data-tone="up">
                Max HP {max} → <strong>{newMax}</strong>
              </Result>
            )}
          </Line>
        )}
      </Step>

      {/* ---- 2. Abilities ---- */}
      <Step>
        <div>
          <StepTitle>Ability changes</StepTitle>
          <StepRule>
            Roll d6 for each. −3 to +1: up by 1 unless you roll a 1 (then down by 1). +2 and up:
            roll the ability or higher to raise it, lower to drop it. Range −3 to +6.
          </StepRule>
        </div>

        {abilityChanges.map((a) => (
          <AbilityRow key={a.key}>
            <LineLabel>
              {a.name} {formatModifier(a.current)}
            </LineLabel>
            <Line>
              <SegmentedControl
                options={D6_FACES}
                value={a.roll}
                onChange={(v) => setAbilityRoll(a.key, v)}
              />
              <RollButton label={`Roll d6 for ${a.name}`} onClick={() => setAbilityRoll(a.key, rollDie(6))} />
            </Line>
            {a.roll != null ? (
              <Result data-tone={a.next > a.current ? 'up' : undefined}>
                {formatModifier(a.current)} → <strong>{formatModifier(a.next)}</strong>
              </Result>
            ) : (
              <Result />
            )}
          </AbilityRow>
        ))}
      </Step>

      {/* ---- 3. Jacket ---- */}
      <Step>
        <StepTitle>In the lining of your jacket</StepTitle>

        <Line>
          <LineLabel>d6</LineLabel>
          <SegmentedControl options={D6_FACES} value={jacket} onChange={setJacket} />
          <RollButton label="Roll d6" onClick={() => setJacket(rollDie(6))} />
        </Line>

        {jacket && <Outcome>{JACKET[jacket]}</Outcome>}

        {jacket === 4 && (
          <Line>
            <LineLabel>3d6 × 10</LineLabel>
            <AmountInput allowEmpty label="Credchip amount" value={credchip} onChange={setCredchip} width="6rem" />
            <RollButton label="Roll 3d6 × 10" onClick={() => setCredchip(rollMany(3, 6) * 10)} />
            {credchip > 0 && (
              <Result data-tone="up">
                <strong>+{credchip.toLocaleString()}¤</strong> to credits
              </Result>
            )}
          </Line>
        )}

        {jacket === 6 && (
          <>
            <Line>
              <LineLabel>d100</LineLabel>
              <AmountInput allowEmpty label="d100" value={pebble} onChange={setPebble} width="6rem" />
              <RollButton label="Roll d100" onClick={() => setPebble(rollDie(100))} />
            </Line>
            {pebble != null && (
              <Outcome>
                {pebble <= 20 ? (
                  <>
                    <strong>Infected.</strong> Add a Nano power in Nano Powers (it comes with an infestation).
                  </>
                ) : (
                  <>
                    <strong>Not infected.</strong> Just a pretty rock.
                  </>
                )}
              </Outcome>
            )}
          </>
        )}
      </Step>

      <Summary>
        {summary.length ? `Apply will: ${summary.join(' · ')}.` : 'Nothing changes yet. Apply still counts the advancement.'}
      </Summary>

      <Actions>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="button" data-variant="primary" onClick={apply}>
          Apply
        </Button>
      </Actions>
    </Modal>
  );
}
