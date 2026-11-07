import SegmentedDice from '@components/SegmentedDice';
import { NumberStepper, Roll, Tag } from '@components/Layout/Layout';
import { cyberEffects } from '@utils/cybertech';
import { dieInfo } from '@utils/gear';

import { classComponents, chosenFor } from './ClassSection';
import { collectItems } from './Inventory';
import { List, Row, Main, Name, Source, Description, Controls, Empty } from './GearList.styles';

const EMPTY_TEXT = {
  weapon: 'No weapons on this punk.',
  armor: 'No armor on this punk.',
};

/**
 * The punk's weapons or armor as a compact list for the Combat tab, so
 * nothing needs a trip to the Punks tab mid-fight. Same gear as the sheet's
 * Weapons / Armor sections:
 *   class gear     the class's chosen weapon/armor (and signature gear)
 *   natural armor  installed Skinhard (armor only)
 *   carried        Inventory items with that category; quantity stays
 *                  adjustable (a thrown grenade, a used-up item)
 * Rolling only; choosing class gear stays on the sheet.
 *
 * Props: character, onUpdate, kind ('weapon' | 'armor')
 */
export default function GearList({ character = null, onUpdate = () => {}, kind = 'weapon' }) {
  if (!character) return null;

  const { smartjack, armorDie } = cyberEffects(character);

  const classGear = classComponents(character, true, kind)
    .filter((c) => c.type === 'rollable')
    .map((c) => chosenFor(character, c).entry)
    .filter(Boolean);

  const carried = collectItems(character).filter((item) => item.entry.category === kind);
  const natural = kind === 'armor' && armorDie;

  if (!classGear.length && !carried.length && !natural) {
    return <Empty>{EMPTY_TEXT[kind]}</Empty>;
  }

  return (
    <List>
      {classGear.map((entry) => (
        <GearRow key={`class_${entry.id}`} character={character} entry={entry} source="Class" smartjack={smartjack} />
      ))}

      {natural && (
        <GearRow
          character={character}
          entry={{ id: 'skinhard_natural', label: 'Skinhard', die: armorDie, description: 'Natural armor (installed cybertech).' }}
          source="Cybertech"
          smartjack={smartjack}
        />
      )}

      {carried.map((item) => (
        <GearRow
          key={item.key}
          character={character}
          entry={item.entry}
          source="Carried"
          smartjack={smartjack}
          quantity={item.quantity}
          onQuantity={(q) => {
            item.setQuantity(q);
            onUpdate();
          }}
        />
      ))}
    </List>
  );
}

function GearRow({ character, entry, source, smartjack, quantity, onQuantity }) {
  const die = dieInfo(entry.die);
  const counted = typeof quantity === 'number' && onQuantity;
  const spent = counted && quantity <= 0;

  return (
    <Row style={spent ? { opacity: 0.55 } : undefined}>
      <Main>
        <Name>
          {entry.label}
          {entry.die && entry.die !== '0' && <Roll>{entry.die}</Roll>}
          {entry.tier && <Tag>{entry.tier}</Tag>}
          {die?.autofire && <Tag title="Capable of autofire">Autofire</Tag>}
          {entry.smartjack && (
            <Tag data-tone={smartjack ? 'highlight' : undefined}>{smartjack ? 'Smart · linked' : 'Smart'}</Tag>
          )}
          <Source>{source}</Source>
        </Name>
        {entry.description && <Description>{entry.description}</Description>}
      </Main>

      <Controls>
        {counted && (
          <NumberStepper value={quantity} min={0} size="sm" label={`${entry.label} quantity`} onChange={onQuantity} />
        )}
        {die && !spent && <SegmentedDice character_id={character.id} dice={die.dice} />}
      </Controls>
    </Row>
  );
}
