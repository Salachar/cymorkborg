// Central export for all CY_BORG data tables

import { WEAPONS_FOR_SALE } from './weapons';
import { EQUIPMENT } from './equipment';
import { DRUGS } from './drugs';
import { AMMO_BOOSTERS } from './ammo';
import { CYBERTECH } from './cybertech';

export { NANO_POWERS } from './nanoPowers';
export { NANO_INFESTATIONS } from './nanoInfestations';
export { APPS } from './apps';
export { APP_FUMBLES } from './app_fumbles';
export { GLITCHES } from './glitches';
export { WEAPONS_TABLE, ARMOR_TABLE } from './sharedTables';

export {
  WEAPONS_FOR_SALE,
  EQUIPMENT,
  DRUGS,
  AMMO_BOOSTERS,
  CYBERTECH,
};

// Flavor/Character tables
export { STYLES } from './styles';
export { FEATURES } from './features';
export { WANTS } from './wants';
export { QUIRKS } from './quirks';
export { CURRENT_OBSESSIONS } from './obsessions';

export { DEBT_TO_WHOM, DEBT_URGENCY } from './debts';

export { STARTING_ITEMS_1 } from './startingItems1';
export { STARTING_ITEMS_2 } from './startingItems2';
export { STARTING_ITEMS_3 } from './startingItems3';

export const GEAR_SECTIONS = [
  {
    name: "weapons",
    label: "Weapons",
    note: (
      <span>You get d4 Basic Mags for free (in shop) if applicable to the weapon.</span>
    ),
    entries: WEAPONS_FOR_SALE,
  },
  {
    name: "ammo",
    label: "Ammo & Boosters",
    entries: AMMO_BOOSTERS,
  },
  {
    name: "equipment",
    label: "Equipment",
    note: (
      <span>Illegal items require a Security Operative License. Without it, SecOps are authorized to shoot to kill.</span>
    ),
    entries: EQUIPMENT,
  },
  {
    name: "cybertech",
    label: "Cybertech",
    entries: CYBERTECH,
  },
  {
    name: "drugs",
    label: "Drugs",
    note: (
      <span>Cost after the / is for weaker, recreational doses</span>
    ),
    entries: DRUGS,
  },
]

export function searchAllItems(id) {
  for (const { name, entries } of GEAR_SECTIONS) {
    const entry = entries.find(e => (e.id || e.label) === id);
    if (entry) return { entry, section: name };
  }
  return null;
}
