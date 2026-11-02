import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import SegmentedDice from '@components/SegmentedDice';
import SheetSection from '@components/SheetSection/SheetSection';
import TablePicker, { entryId } from '@components/TablePicker/TablePicker';
import { Button, IconButton } from '@components/Layout/Layout';
import { NANO_POWERS, NANO_INFESTATIONS } from '@data/tables';

import PickerButton from './PickerButton';
import { Note } from './Editor.styles';
import {
  Cards,
  Card,
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
import { Linked, LinkedLabel, LinkedName } from './NanoPowers.styles';

/* ---- Data helpers -------------------------------------------------------- */

const findById = (list, id) => (id ? list.find((e) => entryId(e) === id) : null);

// { power_id: { infestation: infestation_id } }
const powersOf = (character) => character._nano_powers || {};

function ownedPowers(character) {
  const powers = powersOf(character);
  return Object.keys(powers)
    .map((powerId) => ({
      powerId,
      power: findById(NANO_POWERS, powerId),
      infestation: findById(NANO_INFESTATIONS, powers[powerId]?.infestation),
    }))
    .filter((p) => p.power);
}

// Infestations already taken, by a power or as a standalone infestation.
function usedInfestationIds(character) {
  return [
    ...Object.values(powersOf(character)).map((p) => p.infestation).filter(Boolean),
    ...Object.keys(character._infestations || {}),
  ];
}

/* ---- Section ------------------------------------------------------------- */

/**
 * Nano Powers, as a SheetSection. Each power is linked to an infestation.
 *   play   one card per power: description, roller (if it has a die), and
 *          its linked infestation
 *   edit   add a power (choose or roll; it comes with a rolled infestation),
 *          change a power's infestation, remove a power
 */
export default function NanoPowers({ character = null, onUpdate = () => {} }) {
  if (!character) return null;

  const owned = ownedPowers(character);

  return (
    <SheetSection
      id="sheet-nano"
      title="Nano Powers"
      editWidth="36rem"
      edit={<NanoEditor character={character} onUpdate={onUpdate} />}
    >
      {owned.length === 0 ? (
        <Muted>No Nano powers. You don't start with them unless your class says so.</Muted>
      ) : (
        <>
          <Cards>
            {owned.map(({ powerId, power, infestation }) => (
              <Card key={powerId}>
                <CardName>{power.label}</CardName>
                {power.description && <Description>{power.description}</Description>}
                {power.die && (
                  <Roller>
                    <SegmentedDice dice={power.die} character_id={character.id} />
                  </Roller>
                )}

                <Linked>
                  <LinkedLabel>Linked infestation</LinkedLabel>
                  {infestation ? (
                    <>
                      <LinkedName>{infestation.label}</LinkedName>
                      {infestation.description && <Description>{infestation.description}</Description>}
                    </>
                  ) : (
                    <Description>None linked.</Description>
                  )}
                </Linked>
              </Card>
            ))}
          </Cards>
          <Footnote>A power's linked infestation triggers when you fumble using that power.</Footnote>
        </>
      )}
    </SheetSection>
  );
}

/* ---- Edit dialog --------------------------------------------------------- */

function NanoEditor({ character, onUpdate }) {
  // 'add' | { infestationFor: powerId } | null
  const [picker, setPicker] = useState(null);

  const owned = ownedPowers(character);
  const used = usedInfestationIds(character);
  const ownedIds = Object.keys(powersOf(character));
  const availablePowers = NANO_POWERS.filter((p) => !ownedIds.includes(entryId(p)));

  // Infestations not taken elsewhere (a power keeps access to its own).
  const availableInfestationsFor = (currentId) =>
    NANO_INFESTATIONS.filter((inf) => {
      const id = entryId(inf);
      return id === currentId || !used.includes(id);
    });

  const addPower = (power) => {
    if (!character._nano_powers) character._nano_powers = {};
    const options = availableInfestationsFor(null);
    const rolled = options.length ? options[Math.floor(Math.random() * options.length)] : null;
    character._nano_powers[entryId(power)] = { infestation: rolled ? entryId(rolled) : null };
    onUpdate();
  };

  const setInfestation = (powerId, infestation) => {
    if (!character._nano_powers?.[powerId]) return;
    character._nano_powers[powerId].infestation = infestation ? entryId(infestation) : null;
    onUpdate();
  };

  const removePower = (powerId) => {
    delete character._nano_powers?.[powerId];
    onUpdate();
  };

  const infestationTarget = picker?.infestationFor;
  const targetCurrentId = infestationTarget ? powersOf(character)[infestationTarget]?.infestation ?? null : null;

  return (
    <>
      {owned.length > 0 && (
        <EditList>
          {owned.map(({ powerId, power, infestation }) => (
            <EditItem key={powerId}>
              <EditHead>
                <EditName>{power.label}</EditName>
                <IconButton
                  type="button"
                  data-variant="danger"
                  onClick={() => removePower(powerId)}
                  aria-label={`Remove ${power.label}`}
                  title="Remove power"
                >
                  <DeleteIcon style={{ fontSize: 16 }} />
                </IconButton>
              </EditHead>
              <PickerButton
                wide
                label="Linked infestation"
                value={infestation?.label}
                onClick={() => setPicker({ infestationFor: powerId })}
              />
            </EditItem>
          ))}
        </EditList>
      )}

      <div>
        <Button
          type="button"
          data-variant="primary"
          disabled={availablePowers.length === 0}
          onClick={() => setPicker('add')}
        >
          <AddIcon style={{ fontSize: 16 }} />
          Add power
        </Button>
      </div>
      <Note>A new power comes with a randomly rolled infestation. You can change it above.</Note>

      {picker === 'add' && (
        <TablePicker
          open
          title="Add Nano power"
          entries={availablePowers}
          closeOnRoll
          onSelect={addPower}
          onClose={() => setPicker(null)}
        />
      )}

      {infestationTarget && (
        <TablePicker
          open
          title="Linked infestation"
          entries={availableInfestationsFor(targetCurrentId)}
          selectedId={targetCurrentId}
          onSelect={(inf) => setInfestation(infestationTarget, inf)}
          onClear={() => setInfestation(infestationTarget, null)}
          onClose={() => setPicker(null)}
        />
      )}
    </>
  );
}
