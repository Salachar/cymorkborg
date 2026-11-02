import { useState } from 'react';

import TablePicker, { entryId } from '@components/TablePicker/TablePicker';
import { STYLES, FEATURES, WANTS, QUIRKS, CURRENT_OBSESSIONS } from '@data/tables';

import PickerButton from './PickerButton';
import {
  Card,
  Corner,
  NameInput,
  PreviewTitle,
  ClassLine,
  ClassName,
  FlavorRow,
} from './Name.styles';

const CORNERS = ['tl', 'tr', 'bl', 'br'];

// Flavor categories: `name` is the key in character.style.
const FLAVOR_SECTIONS = [
  { name: 'style', label: 'Style', entries: STYLES },
  { name: 'feature', label: 'Feature', entries: FEATURES },
  { name: 'wants', label: 'Wants', entries: WANTS },
  { name: 'quirk', label: 'Quirk', entries: QUIRKS },
  { name: 'obsession', label: 'Obsession', entries: CURRENT_OBSESSIONS },
];

/**
 * Name card. One layout, no lock:
 *   name     headline-styled input, edit any time
 *   class    "The <Class>"
 *   flavor   one button per category; opens a TablePicker to choose or
 *            roll. Shows the selection, or "Choose…" when empty.
 *
 * In class preview (builder = false) only the class headline shows.
 */
export default function Name({
  character = null,
  builder = false,
  onUpdate = () => {},
}) {
  const [openSection, setOpenSection] = useState(null);

  if (!character) return null;

  if (!builder) {
    return (
      <Card>
        {CORNERS.map((c) => <Corner key={c} data-corner={c} />)}
        <PreviewTitle>{character.class}</PreviewTitle>
      </Card>
    );
  }

  const selectedIdFor = (sectionName) =>
    Object.keys(character.getStyleSelections(sectionName)).find(
      (key) => character.getStyleSelections(sectionName)[key]
    ) || null;

  const active = FLAVOR_SECTIONS.find((s) => s.name === openSection);

  return (
    <Card>
      {CORNERS.map((c) => <Corner key={c} data-corner={c} />)}

      <NameInput
        type="text"
        placeholder="Enter name"
        aria-label="Character name"
        value={character.name || ''}
        onChange={(e) => {
          character.name = e.target.value;
          onUpdate();
        }}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="characters"
        spellCheck="false"
      />

      <ClassLine>
        <span>
          The <ClassName>{character.class}</ClassName>
        </span>
      </ClassLine>

      <FlavorRow>
          {FLAVOR_SECTIONS.map((section) => {
            const id = selectedIdFor(section.name);
            const entry = id ? section.entries.find((e) => entryId(e) === id) : null;
            const value = entry?.label ?? id;

            return (
              <PickerButton
                key={section.name}
                label={section.label}
                value={value}
                onClick={() => setOpenSection(section.name)}
              />
            );
          })}
        </FlavorRow>

      {active && (
        <TablePicker
          open
          title={active.label}
          entries={active.entries}
          selectedId={selectedIdFor(active.name)}
          onSelect={(entry) => {
            character.setStyle(active.name, entry);
            onUpdate();
          }}
          onClear={() => {
            character.clearStyle(active.name);
            onUpdate();
          }}
          onClose={() => setOpenSection(null)}
        />
      )}
    </Card>
  );
}
