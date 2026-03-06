// Ammo & Single-Use Booster Mods - d10 table

export const AMMO_BOOSTERS = [
  {
    id: "basic_mags",
    label: "Basic Mags",
    cost: "10¤",
    description: <>Standard ammo. (Take these when rolling d4 for mags)</>,
  },
  {
    id: "inferno",
    label: "Inferno",
    cost: "80¤",
    description: <>Deals d3 extra damage (d8 extra damage on crit).</>,
  },
  {
    id: "ill",
    label: "ILL",
    cost: "50¤",
    description: <>Test Toughness DR14 or be unable to recover any hit points until treated by pros or with Red-juice.</>,
  },
  {
    id: "armor_piercing",
    label: "Armor-Piercing",
    cost: "80¤",
    description: <>Ignores d6 armor.</>,
  },
  {
    id: "taginjector",
    label: "TagInjector",
    cost: "60¤",
    description: <>No damage but plants either a tracker or a dose of any drug/poison.</>,
  },
  {
    id: "knocker",
    label: "Knocker",
    cost: "30¤",
    description: <>Deals d2 damage, test Toughness DR12 or be knocked out for d3 rounds.</>,
  },
  {
    id: "epulse",
    label: "E/Pulse",
    cost: "100¤",
    description: <>Deals d6 extra damage against tech targets or people with 2+ cybertech.</>,
  },
  {
    id: "nanotrig",
    label: "Nanotrig",
    cost: "100¤",
    description: <>Test Presence DR14 or temporarily trigger a random Nano infestation.</>,
  },
  {
    id: "frag",
    label: "Frag",
    cost: "60¤",
    description: <>Deals d4 damage to up to d3 targets within close proximity.</>,
  },
  {
    id: "ricochet",
    label: "Ricochet",
    cost: "50¤",
    description: <>Bounces around corners and cover, hits for d6 damage with a DR16 test.</>,
  },
  {
    id: "heatseekers",
    label: "Heatseekers",
    cost: "120¤",
    description: <>−2DR when firing against targets giving off body heat.</>,
  },
];

// Note about regular ammo from page 65:
// After combat, roll d8 for each weapon you have fired or d6 if
// you've used autofire. A 1-3 result means you are out of ammo
// and have to reload. Regular ammo costs 10% of a new weapon's
// price. For weapons without a listed price, assume the ammo is
// harder to get and prices vary between 60-120¤.
