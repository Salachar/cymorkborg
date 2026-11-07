import { Button } from '@components/Layout/Layout';
import { CYBERTECH } from '@data/tables';
import { uninstallCybertech } from '@utils/cybertech';

import CollectionSection from './CollectionSection';

/**
 * Installed cybertech: what's in your body. Only this counts for effects
 * (Skinhard, SmartJack, Skinslot, Skeleplating) and for Cy-Rage.
 * Inventory's Cybertech category is carried until installed from there.
 *
 * Edit dialog: Uninstall moves a piece back to Inventory (to sell or swap);
 * the delete removes it for good (destroyed, ripped out).
 */
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
      rowActions={(itemId, entry, update) => (
        <Button
          type="button"
          onClick={() => update((c) => uninstallCybertech(c, itemId))}
          title="Move back to Inventory"
        >
          Uninstall
        </Button>
      )}
      emptyText="Nothing installed. Buy cybertech in the Market, then install it from your Inventory."
      footnote="Installed cybertech only. Each piece adds +1DR to your Cy-Rage test (Battered table, 3–4)."
    />
  );
}
