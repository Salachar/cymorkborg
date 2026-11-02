import { Tag } from '@components/Layout/Layout';
import { APPS } from '@data/tables';

import CollectionSection from './CollectionSection';

const loadedApps = (character) => character._cyberdeck?.loaded_apps || [];

/**
 * Owned Apps. Two light ties to the Cyberdeck, nothing more:
 *   - a read-only "Loaded" tag on apps currently loaded in the deck
 *   - removing an app also unloads it, so the deck never holds an app
 *     you don't own
 */
export default function Apps({ character = null, onUpdate = () => {} }) {
  return (
    <CollectionSection
      character={character}
      onUpdate={onUpdate}
      id="sheet-apps"
      title="Apps"
      entries={APPS}
      storageKey="_apps"
      itemNoun="app"
      renderTags={(entry, c) =>
        loadedApps(c).includes(entry.id || entry.label) ? <Tag>Loaded</Tag> : null
      }
      onRemoved={(appId, c) => {
        if (c._cyberdeck?.loaded_apps) {
          c._cyberdeck.loaded_apps = c._cyberdeck.loaded_apps.filter((id) => id !== appId);
        }
      }}
      emptyText="No Apps. You don't start with them unless your class says so; some are sold in the Market."
      footnote="To use an App you must be jacked into your deck with the App loaded. Test Knowledge DR12. Each use adds +1 to fumble risk until the next day."
    />
  );
}
