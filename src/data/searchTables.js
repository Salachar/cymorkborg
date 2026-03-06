// data/tables.js (or create a new searchTables.js utility)

import {
  NANO_POWERS,
  NANO_INFESTATIONS,
  CYBERTECH,
  APPS,
  GLITCHES,
  WEAPONS_TABLE,
  ARMOR_TABLE,
  WEAPONS_FOR_SALE,
  EQUIPMENT,
  DRUGS,
  AMMO_BOOSTERS,
  STYLES,
  FEATURES,
  WANTS,
  QUIRKS,
  CURRENT_OBSESSIONS,
  DEBT_TO_WHOM,
  DEBT_URGENCY,
  STARTING_ITEMS_1,
  STARTING_ITEMS_2,
  STARTING_ITEMS_3,
} from './tables';

// All tables to search through
const ALL_TABLES = [
  NANO_POWERS,
  NANO_INFESTATIONS,
  CYBERTECH,
  APPS,
  GLITCHES,
  WEAPONS_TABLE,
  ARMOR_TABLE,
  WEAPONS_FOR_SALE,
  EQUIPMENT,
  DRUGS,
  AMMO_BOOSTERS,
  STYLES,
  FEATURES,
  WANTS,
  QUIRKS,
  CURRENT_OBSESSIONS,
  DEBT_TO_WHOM,
  DEBT_URGENCY,
  STARTING_ITEMS_1,
  STARTING_ITEMS_2,
  STARTING_ITEMS_3,
];

/**
 * Search all tables for an entry by ID or label
 * @param {string} searchValue - The ID or label to search for
 * @returns {object|null} The found entry or null
 */
export function findEntryById(searchValue) {
  if (!searchValue) return null;

  for (const table of ALL_TABLES) {
    if (!table || !Array.isArray(table)) continue;

    const found = table.find(entry =>
      entry.id === searchValue || entry.label === searchValue
    );

    if (found) return found;
  }

  return null;
}

/**
 * Search multiple IDs at once
 * @param {string[]} ids - Array of IDs to search for
 * @returns {object[]} Array of found entries (nulls filtered out)
 */
export function findEntriesByIds(ids) {
  if (!ids || !Array.isArray(ids)) return [];

  return ids
    .map(id => findEntryById(id))
    .filter(entry => entry !== null);
}
