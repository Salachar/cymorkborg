import { useState } from 'react';

import SegmentedDice from '@components/SegmentedDice';
import SheetSection from '@components/SheetSection/SheetSection';
import TablePicker, { entryId } from '@components/TablePicker/TablePicker';
import { RollTable } from '@components/Layout/Layout';

import ClassDefinitions from './ClassDefinitions';
import PickerButton from './PickerButton';
import { Note } from './Editor.styles';
import {
  Blocks,
  BlockLabel,
  Choice,
  ChoiceName,
  ChoiceDescription,
  ChoiceRoller,
  NothingChosen,
  EditBlocks,
  EditBlock,
} from './ClassSection.styles';

const SUPPORTED = new Set(['rollable', 'definitions']);

// The class's components that apply in this mode. `preview: false`
// components only show on a real character.
function classComponents(character, builder) {
  return (character.constructor.components || []).filter(
    (c) => SUPPORTED.has(c.type) && (builder || c.preview !== false)
  );
}

function chosenFor(character, component) {
  const selections = character.getTableSelections(component.name);
  const id = Object.keys(selections).find((key) => selections[key]) || null;
  const entry = id ? component.entries.find((e) => entryId(e) === id) : null;
  return { id, entry };
}

/**
 * The class's own components ("rollable" and "definitions"), as one
 * SheetSection titled with the class name. In class order.
 *   play     rollable: the chosen entry (+ roller if it has a die), or
 *            "Nothing chosen yet"; definitions: a term list
 *   preview  rollables as read-only numbered roll tables (what you could get)
 *   edit     a picker per rollable (choose or roll), with its note
 */
export default function ClassSection({ character = null, builder = false, onUpdate = () => {} }) {
  if (!character) return null;

  const components = classComponents(character, builder);
  if (!components.length) return null;

  const hasRollables = components.some((c) => c.type === 'rollable');

  return (
    <SheetSection
      id="sheet-class"
      title={character.class}
      edit={builder && hasRollables ? (
        <ClassEditor character={character} components={components} onUpdate={onUpdate} />
      ) : null}
    >
      <Blocks>
        {components.map((component, index) => {
          const key = `${component.type}_${component.name || component.h3}_${index}`;

          if (component.type === 'definitions') {
            return (
              <div key={key}>
                {component.h3 && <BlockLabel>{component.h3}</BlockLabel>}
                <ClassDefinitions entries={component.entries} />
              </div>
            );
          }

          return (
            <div key={key}>
              <BlockLabel>{component.label}</BlockLabel>
              {builder ? (
                <ChosenEntry character={character} component={component} />
              ) : (
                <RollTable
                  rows={component.entries.map((entry, i) => ({
                    roll: String(i + 1),
                    result: entry.label,
                    detail: entry.description,
                  }))}
                />
              )}
            </div>
          );
        })}
      </Blocks>
    </SheetSection>
  );
}

function ChosenEntry({ character, component }) {
  const { entry } = chosenFor(character, component);
  if (!entry) return <NothingChosen>Nothing chosen yet.</NothingChosen>;

  return (
    <Choice>
      <ChoiceName>{entry.label}</ChoiceName>
      {entry.description && <ChoiceDescription>{entry.description}</ChoiceDescription>}
      {entry.die && (
        <ChoiceRoller>
          <SegmentedDice dice={entry.die} character_id={character.id} />
        </ChoiceRoller>
      )}
    </Choice>
  );
}

function ClassEditor({ character, components, onUpdate }) {
  const [openName, setOpenName] = useState(null);

  const rollables = components.filter((c) => c.type === 'rollable');
  const active = rollables.find((c) => c.name === openName);

  return (
    <>
      <EditBlocks>
        {rollables.map((component) => {
          const { entry } = chosenFor(character, component);
          return (
            <EditBlock key={component.name}>
              <PickerButton
                wide
                label={component.label}
                value={entry?.label}
                onClick={() => setOpenName(component.name)}
              />
              {component.note && <Note>{component.note}</Note>}
            </EditBlock>
          );
        })}
      </EditBlocks>

      {active && (
        <TablePicker
          open
          title={active.label}
          entries={active.entries}
          selectedId={chosenFor(character, active).id}
          onSelect={(entry) => {
            character.setTableChoice(active.name, entry);
            onUpdate();
          }}
          onClear={() => {
            character.clearTableChoice(active.name);
            onUpdate();
          }}
          onClose={() => setOpenName(null)}
        />
      )}
    </>
  );
}
