import SheetSection from '@components/SheetSection/SheetSection';

import ClassDefinitions from './ClassDefinitions';

// The class's built-in traits. Read-only, so no pencil.
export default function ClassUniques({ character = null }) {
  if (!character?.class_uniques?.length) return null;

  return (
    <SheetSection id="sheet-uniques" title="Class Uniques">
      <ClassDefinitions entries={character.class_uniques} />
    </SheetSection>
  );
}
