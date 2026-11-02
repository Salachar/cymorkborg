import SegmentedDice from '@components/SegmentedDice';
import SheetSection from '@components/SheetSection/SheetSection';
import { NumberStepper, Scale } from '@components/Layout/Layout';
import { formatModifier } from '@utils/character';

import {
  List,
  Card,
  Header,
  HeaderText,
  StatName,
  Abbr,
  Description,
  ClassBonus,
  Body,
  Value,
  Roller,
  DialogLabel,
  EditRows,
  EditRow,
  EditName,
  EditBonus,
  Note,
} from './Stats.styles';

const STAT_INFO = {
  STR: { name: 'Strength', description: 'Strike, grapple, lift, throw' },
  AGI: { name: 'Agility', description: 'Sneak, dodge, drive, autofire' },
  PRE: { name: 'Presence', description: 'Snipe/shoot, use Nano, charm' },
  TOU: { name: 'Toughness', description: 'Survive falling, poison, and elements' },
  KNO: { name: 'Knowledge', description: 'Science, use tech or App' },
};

const MIN = -3;
const MAX = 3;

// Creation roll: 3d6 (+ class bonus) mapped to a modifier.
const ROLL_TABLE = [
  { value: '−3', label: '1–4' },
  { value: '−2', label: '5–6' },
  { value: '−1', label: '7–8' },
  { value: '0', label: '9–12' },
  { value: '+1', label: '13–14' },
  { value: '+2', label: '15–16' },
  { value: '+3', label: '17–20' },
];

function modifierFromRoll(total) {
  if (total <= 4) return -3;
  if (total <= 6) return -2;
  if (total <= 8) return -1;
  if (total <= 12) return 0;
  if (total <= 14) return 1;
  if (total <= 16) return 2;
  return 3;
}

const classBonusFor = (character, statKey) =>
  character.constructor.die?.stats?.[statKey]?.mod || 0;

/**
 * Abilities, as a SheetSection. Always the same layout (no lock):
 *   cards    name, abbreviation, description, class bonus; the modifier
 *            and a d20 + modifier roller for play
 *   edit     one "Edit Abilities" dialog: the 3d6 table, then a row per
 *            stat with a −/+ stepper and the 3d6 creation roller
 */
export default function Stats({ character = null, onUpdate = () => {} }) {
  if (!character) return null;

  const setStat = (statKey, value) => {
    character[statKey.toLowerCase()] = Math.max(MIN, Math.min(MAX, value));
    onUpdate();
  };

  return (
    <SheetSection
      id="sheet-stats"
      title="Abilities"
      editWidth="48rem"
      edit={<StatsEditor character={character} onSet={setStat} />}
    >
      <List>
        {Object.entries(STAT_INFO).map(([statKey, info]) => {
          const value = character.stats[statKey] ?? 0;
          const bonus = classBonusFor(character, statKey);

          return (
            <Card key={statKey}>
              <Header>
                <HeaderText>
                  <StatName>
                    {info.name}
                    <Abbr>{statKey}</Abbr>
                  </StatName>
                  <Description>{info.description}</Description>
                  {bonus !== 0 && <ClassBonus>Class bonus: {formatModifier(bonus)}</ClassBonus>}
                </HeaderText>
              </Header>

              <Body>
                <Value aria-label={`${info.name} ${formatModifier(value)}`}>
                  {formatModifier(value)}
                </Value>
                <Roller>
                  <SegmentedDice character_id={character.id} dice="1d20" mod={value} />
                </Roller>
              </Body>
            </Card>
          );
        })}
      </List>
    </SheetSection>
  );
}

function StatsEditor({ character, onSet }) {
  return (
    <>
      <div>
        <DialogLabel>3d6 result → modifier</DialogLabel>
        <Scale steps={ROLL_TABLE} />
      </div>

      <Note>Rolling sets the stat from the table. The class bonus is added to the roll.</Note>

      <EditRows>
        {Object.entries(STAT_INFO).map(([statKey, info]) => {
          const value = character.stats[statKey] ?? 0;
          const bonus = classBonusFor(character, statKey);

          return (
            <EditRow key={statKey}>
              <EditName>
                {info.name}
                {bonus !== 0 && <EditBonus>{formatModifier(bonus)} class bonus</EditBonus>}
              </EditName>

              <NumberStepper
                value={value}
                min={MIN}
                max={MAX}
                label={info.name}
                format={formatModifier}
                onChange={(v) => onSet(statKey, v)}
              />

              <SegmentedDice
                character_id={character.id}
                dice="3d6"
                mod={bonus}
                onRollComplete={(total) => onSet(statKey, modifierFromRoll(total))}
              />
            </EditRow>
          );
        })}
      </EditRows>
    </>
  );
}
