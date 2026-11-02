import { entryId } from '@components/TablePicker/TablePicker';
import { NANO_INFESTATIONS } from '@data/tables';

import CollectionSection from './CollectionSection';

// Infestations already linked to a Nano power can't also be standalone.
const notLinkedToAPower = (entry, character) =>
  !Object.values(character._nano_powers || {}).some((p) => p.infestation === entryId(entry));

/** Standalone infestations (not linked to a Nano power). */
export default function Infestations({ character = null, onUpdate = () => {} }) {
  return (
    <CollectionSection
      character={character}
      onUpdate={onUpdate}
      id="sheet-infestations"
      title="Infestations"
      entries={NANO_INFESTATIONS}
      storageKey="_infestations"
      isAvailable={notLinkedToAPower}
      itemNoun="infestation"
      emptyText="No infestations. You don't start with them; they come from App fumbles, Glitch overflow, or other events in play."
      footnote="These aren't linked to a Nano power. Each triggers when you take 5+ damage from a single attack and fail a Presence DR10 test."
    />
  );
}
