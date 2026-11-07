import { useState } from 'react';
import EjectIcon from '@mui/icons-material/Eject';
import CasinoIcon from '@mui/icons-material/Casino';

import SegmentedDice from '@components/SegmentedDice';
import SheetSection from '@components/SheetSection/SheetSection';
import TablePicker, { entryId } from '@components/TablePicker/TablePicker';
import { Button, IconButton, NumberStepper, RollTable, Directory } from '@components/Layout/Layout';
import useTableRoll from '@hooks/useTableRoll';
import { formatModifier } from '@utils/character';
import { APPS, APP_FUMBLES } from '@data/tables';
import { cyberEffects } from '@utils/cybertech';

import { Field, FieldLabel, Note, Divider } from './Editor.styles';
import {
  JackedTag,
  Device,
  Corner,
  DeviceRow,
  Status,
  Light,
  StatusText,
  StatusNote,
  JackSwitch,
  Readout,
  ReadoutLabel,
  ReadoutValue,
  ReadoutHint,
  Rack,
  Bay,
  BayNumber,
  BayBody,
  BayHead,
  CartName,
  CartDescription,
  RollerLabel,
  Rollers,
  EmptyBay,
  Panel,
  PanelHead,
  PanelTitle,
  PanelActions,
  Result,
  ResultLabel,
  Hint,
  RulesBlock,
  Muted,
} from './Cyberdeck.styles';

const CORNERS = ['tl', 'tr', 'bl', 'br'];
const MIN_SLOTS = 1;
const MAX_SLOTS = 20;

const RULES = [
  {
    label: 'Apps',
    description: 'Custom-made cartridges and cassettes that hack tech and physically affect your surroundings when slotted into a cyberdeck.',
  },
  {
    label: 'Using Apps',
    description: 'You must be jacked in with the App loaded. Test Knowledge DR12 to activate. While jacked in, all non-App actions are +2DR.',
  },
  {
    label: 'Fumbles',
    description: 'A fumble burns the App for the day and triggers a Backlash. Each App use adds +1 to fumble risk until the next day.',
  },
  {
    label: 'Hacking without Apps',
    description: "A time-consuming downtime activity. Test Knowledge to break into data nodes. Failing means you're discovered and the data owners respond. A fumble triggers a Backlash.",
  },
];

// The saved deck, with defaults for anything missing (older saves have no
// fumble_risk).
function deckOf(character) {
  const deck = character._cyberdeck || {};
  return {
    unlocked: Boolean(deck.unlocked),
    jacked_in: Boolean(deck.jacked_in),
    slots: deck.slots || 4,
    loaded_apps: deck.loaded_apps || [],
    fumble_risk: deck.fumble_risk || 0,
  };
}

function ensureDeck(character) {
  if (!character._cyberdeck) {
    character._cyberdeck = { unlocked: false, jacked_in: false, slots: 4, loaded_apps: [], fumble_risk: 0 };
  }
  return character._cyberdeck;
}

const findApp = (id) => APPS.find((a) => entryId(a) === id) || null;

/**
 * Cyberdeck, as a SheetSection: the character's deck as a device.
 *   play   status light + Jack In/Out, fumble risk (auto +1 per Use roll,
 *          −/+ and New day), slot rack (Load / Eject, Use roller and the
 *          app's own die), Backlash roller with its table, rules
 *   edit   slot count, get or remove the deck
 * Saved as character._cyberdeck: { unlocked, jacked_in, slots, loaded_apps,
 * fumble_risk }.
 */
export default function Cyberdeck({ character = null, onUpdate = () => {} }) {
  if (!character) return null;

  const deck = deckOf(character);

  return (
    <SheetSection
      id="sheet-cyberdeck"
      title="Cyberdeck"
      actions={deck.unlocked && deck.jacked_in ? <JackedTag>⚡ Jacked in</JackedTag> : null}
      edit={<DeckEditor character={character} onUpdate={onUpdate} />}
    >
      {deck.unlocked ? (
        <DeckView character={character} onUpdate={onUpdate} />
      ) : (
        <>
          <Muted>
            No cyberdeck. You need one to use Apps or hack. Buy one in the Market or find one in play,
            then turn it on here.
          </Muted>
          <div style={{ marginTop: '0.75rem' }}>
            <Button
              type="button"
              data-variant="primary"
              onClick={() => {
                ensureDeck(character).unlocked = true;
                onUpdate();
              }}
            >
              Get a deck
            </Button>
          </div>
        </>
      )}
    </SheetSection>
  );
}

/* ---- Play view ----------------------------------------------------------- */

function DeckView({ character, onUpdate }) {
  const [loading, setLoading] = useState(false);

  const deck = deckOf(character);
  const live = deck.jacked_in;
  const knowledge = character.stats?.KNO || 0;
  const fumbleTop = 1 + deck.fumble_risk;

  const update = (fn) => {
    fn(ensureDeck(character));
    onUpdate();
  };

  const ownedIds = Object.keys(character._apps || {}).filter((id) => character._apps[id]);
  const loaded = deck.loaded_apps.map(findApp).filter(Boolean);
  const loadable = ownedIds
    .filter((id) => !deck.loaded_apps.includes(id))
    .map(findApp)
    .filter(Boolean);
  // An installed Skinslot adds a bay beyond the deck's own slots.
  const { extraAppSlots } = cyberEffects(character);
  const totalSlots = deck.slots + extraAppSlots;
  const bays = Array.from({ length: totalSlots }, (_, i) => loaded[i] || null);
  // Apps in bays that no longer exist (e.g. the Skinslot was uninstalled):
  // shown as unseated with Eject, never silently dropped.
  const unseated = loaded.slice(totalSlots);
  const eject = (appId) =>
    update((d) => (d.loaded_apps = d.loaded_apps.filter((id) => id !== appId)));

  return (
    <>
      <Device data-live={live}>
        {CORNERS.map((c) => <Corner key={c} data-corner={c} />)}

        <DeviceRow>
          <Status>
            <Light />
            <div>
              <StatusText>{live ? 'Jacked in' : 'Offline'}</StatusText>
              {live && <StatusNote>All non-App actions are +2DR.</StatusNote>}
            </div>
          </Status>
          <JackSwitch
            type="button"
            data-live={live}
            onClick={() => update((d) => (d.jacked_in = !d.jacked_in))}
          >
            {live ? 'Jack out' : 'Jack in'}
          </JackSwitch>
        </DeviceRow>

        <DeviceRow>
          <Readout>
            <ReadoutLabel>Fumble risk</ReadoutLabel>
            <ReadoutValue>+{deck.fumble_risk}</ReadoutValue>
            <ReadoutHint>
              Fumbles on {fumbleTop === 1 ? 'a 1' : `1–${fumbleTop}`}. Each Use roll adds 1.
            </ReadoutHint>
          </Readout>
          <NumberStepper
            value={deck.fumble_risk}
            min={0}
            max={19}
            size="sm"
            label="fumble risk"
            onChange={(v) => update((d) => (d.fumble_risk = v))}
          />
          <Button
            type="button"
            disabled={deck.fumble_risk === 0}
            onClick={() => update((d) => (d.fumble_risk = 0))}
          >
            New day
          </Button>
        </DeviceRow>

        <DeviceRow>
          <Readout>
            <ReadoutLabel>Slots</ReadoutLabel>
            <ReadoutValue>
              {Math.min(loaded.length, totalSlots)} / {deck.slots}
              {extraAppSlots ? ` + ${extraAppSlots}` : ''}
            </ReadoutValue>
            <ReadoutHint>in use{extraAppSlots ? ' (Skinslot)' : ''}</ReadoutHint>
          </Readout>
        </DeviceRow>
      </Device>

      <Rack>
        {bays.map((app, index) => {
          // Bays past the deck's own slots are the Skinslot's.
          const number = index >= deck.slots ? 'SKIN' : String(index + 1).padStart(2, '0');

          if (!app) {
            return (
              <Bay key={`empty_${index}`} data-empty="true">
                <BayNumber>{number}</BayNumber>
                <BayBody>
                  <EmptyBay>
                    <span>Empty bay</span>
                    <Button type="button" disabled={loadable.length === 0} onClick={() => setLoading(true)}>
                      Load
                    </Button>
                  </EmptyBay>
                </BayBody>
              </Bay>
            );
          }

          const appId = entryId(app);
          return (
            <Bay key={appId} data-empty="false">
              <BayNumber>{number}</BayNumber>
              <BayBody>
                <BayHead>
                  <div>
                    <CartName>{app.label}</CartName>
                    {app.description && <CartDescription>{app.description}</CartDescription>}
                  </div>
                  <IconButton
                    type="button"
                    onClick={() => eject(appId)}
                    aria-label={`Eject ${app.label}`}
                    title="Eject"
                  >
                    <EjectIcon style={{ fontSize: 18 }} />
                  </IconButton>
                </BayHead>

                <Rollers>
                  <div>
                    <RollerLabel>Use · Knowledge DR12 ({formatModifier(knowledge)})</RollerLabel>
                    <SegmentedDice
                      character_id={character.id}
                      dice="1d20"
                      mod={knowledge}
                      dr={12}
                      showCombatOutcome
                      fumbleOn={fumbleTop}
                      outcomeLabels={{ hit: 'SUCCESS', miss: 'FAIL' }}
                      onRollComplete={() => update((d) => (d.fumble_risk = (d.fumble_risk || 0) + 1))}
                    />
                  </div>
                  {app.die && (
                    <div>
                      <RollerLabel>{app.die}</RollerLabel>
                      <SegmentedDice character_id={character.id} dice={app.die} />
                    </div>
                  )}
                </Rollers>
              </BayBody>
            </Bay>
          );
        })}
      </Rack>

      {unseated.length > 0 && (
        <Rack>
          {unseated.map((app) => (
            <Bay key={`unseated_${entryId(app)}`} data-empty="false">
              <BayNumber>!!</BayNumber>
              <BayBody>
                <BayHead>
                  <div>
                    <CartName>{app.label}</CartName>
                    <CartDescription>Unseated: its bay is gone. Eject it, or free a slot.</CartDescription>
                  </div>
                  <IconButton
                    type="button"
                    onClick={() => eject(entryId(app))}
                    aria-label={`Eject ${app.label}`}
                    title="Eject"
                  >
                    <EjectIcon style={{ fontSize: 18 }} />
                  </IconButton>
                </BayHead>
              </BayBody>
            </Bay>
          ))}
        </Rack>
      )}

      <Backlash />

      <RulesBlock>
        <Directory items={RULES} labelWidth="11rem" />
      </RulesBlock>

      {loading && (
        <TablePicker
          open
          title="Load App"
          entries={loadable}
          allowRoll={false}
          onSelect={(app) => {
            update((d) => {
              if (d.loaded_apps.length < totalSlots && !d.loaded_apps.includes(entryId(app))) {
                d.loaded_apps = [...d.loaded_apps, entryId(app)];
              }
            });
          }}
          onClose={() => setLoading(false)}
        />
      )}
    </>
  );
}

// Roll on the App fumble table. The result is for this session only.
function Backlash() {
  const [result, setResult] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const { roll, rolling, highlight } = useTableRoll(APP_FUMBLES.length, (index) => {
    setResult(APP_FUMBLES[index]);
  });

  const shown = rolling && highlight != null ? APP_FUMBLES[highlight] : result;

  return (
    <Panel>
      <PanelHead>
        <PanelTitle>App Backlash</PanelTitle>
        <PanelActions>
          <Button type="button" data-variant="primary" onClick={roll} disabled={rolling}>
            <CasinoIcon style={{ fontSize: 16 }} />
            {rolling ? 'Rolling…' : `Roll d${APP_FUMBLES.length}`}
          </Button>
          <Button type="button" onClick={() => setShowTable((v) => !v)}>
            {showTable ? 'Hide table' : 'Show table'}
          </Button>
        </PanelActions>
      </PanelHead>

      {shown ? (
        <Result>
          <ResultLabel>{shown.label}</ResultLabel>
          {shown.description && <CartDescription>{shown.description}</CartDescription>}
        </Result>
      ) : (
        <Hint>Roll when you fumble while using an App.</Hint>
      )}

      {showTable && (
        <RollTable
          rows={APP_FUMBLES.map((entry, i) => ({
            roll: String(i + 1),
            result: entry.label,
            detail: entry.description,
          }))}
        />
      )}
    </Panel>
  );
}

/* ---- Edit dialog --------------------------------------------------------- */

function DeckEditor({ character, onUpdate }) {
  const deck = deckOf(character);

  const update = (fn) => {
    fn(ensureDeck(character));
    onUpdate();
  };

  const { extraAppSlots } = cyberEffects(character);

  return (
    <>
      <Field>
        <FieldLabel>Slots{extraAppSlots ? ` (+${extraAppSlots} Skinslot)` : ''}</FieldLabel>
        <NumberStepper
          value={deck.slots}
          min={MIN_SLOTS}
          max={MAX_SLOTS}
          size="lg"
          label="deck slots"
          onChange={(v) =>
            update((d) => {
              d.slots = v;
              const total = v + extraAppSlots;
              if ((d.loaded_apps || []).length > total) d.loaded_apps = d.loaded_apps.slice(0, total);
            })
          }
        />
      </Field>
      <Note>Lowering the slot count ejects apps from the highest bays.</Note>

      <Divider />

      {deck.unlocked ? (
        <Field>
          <Note>Lost or destroyed? Removing the deck keeps your loaded apps, so getting it back restores them.</Note>
          <Button
            type="button"
            onClick={() =>
              update((d) => {
                d.unlocked = false;
                d.jacked_in = false;
              })
            }
          >
            Remove deck
          </Button>
        </Field>
      ) : (
        <Field>
          <Note>No deck right now.</Note>
          <Button type="button" data-variant="primary" onClick={() => update((d) => (d.unlocked = true))}>
            Get a deck
          </Button>
        </Field>
      )}
    </>
  );
}
