import { CYBERTECH } from '@data/tables';

import CollectionSection from './CollectionSection';

/** Installed cybertech. (Bought cybertech sits in Inventory until installed.) */
export default function Cyberware({ character = null, onUpdate = () => {} }) {
  return (
    <CollectionSection
      character={character}
      onUpdate={onUpdate}
      id="sheet-cybertech"
      title="Cybertech"
      entries={CYBERTECH}
      storageKey="_cyberware"
      itemNoun="cybertech"
      emptyText="No cybertech installed. You don't start with any unless your class says so."
      footnote="Each piece installed adds +1DR to your Cy-Rage test (Battered table, 3–4)."
    />
  );
}
