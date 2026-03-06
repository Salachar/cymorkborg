// Shared weapon and armor tables for CY_BORG
// These are referenced by all classes

export const WEAPONS_TABLE = [
  {
    id: "broken_bottle",
    label: "Broken Bottle",
    die: "d3",
    description: <>Optionally: shiv, brick, sharpened femur bone...</>,
  },
  {
    id: "machete",
    label: "Machete",
    die: "d6",
    description: <>A street classic</>,
  },
  {
    id: "throwing_knives",
    label: "Too Many Throwing Knives",
    die: "d4",
    description: <>Two attacks/round</>,
  },
  {
    id: "ancient_revolver",
    label: "Ancient Revolver",
    die: "d8",
    description: <>An old police standard</>,
  },
  {
    id: "smartgun",
    label: "SmartGun™",
    die: "d6a",
    description: <>d10a damage with SmartJack. a = capable of autofire</>,
  },
  {
    id: "small_smgs",
    label: "Two Small SMGs",
    die: "d6a",
    description: <>Only autofire. a = capable of autofire</>,
  },
  {
    id: "shotgun",
    label: "Shotgun",
    die: "d8",
    description: <>When doesn't a shotgun work?</>,
  },
  {
    id: "monosword",
    label: "Monosword",
    die: "d8",
    description: <>One sword</>,
  },
  {
    id: "assault_rifle",
    label: "Assault Rifle",
    die: "d8a",
    description: <>a = capable of autofire</>,
  },
  {
    id: "grenade_launcher",
    label: "...With a Grenade Launcher",
    die: "d6",
    description: <>Up to d3 targets. Mounts on assault rifle</>,
  },
  {
    id: "pulse_rifle",
    label: "Pulse Rifle",
    die: "d10a",
    description: <>a = capable of autofire</>,
  },
  {
    id: "sniper_rifle",
    label: "Sniper Rifle",
    die: "2d10",
    description: <>×3 crit damage. When aiming for 2 rounds: -4DR and +2 damage</>,
  },
];

export const ARMOR_TABLE = [
  {
    id: "no_armor",
    label: "No Armor",
    tier: "TIER 0",
    die: "0",
    description: <>Just your regular daily outfit</>,
  },
  {
    id: "styleguard",
    label: "StyleGuard",
    tier: "TIER I",
    die: "d2",
    cost: "100¤",
    description: <>Looks just like clothes! A lightweight kevlar weave great at mitigating small blades.</>,
  },
  {
    id: "rough",
    label: "Rough",
    tier: "TIER II",
    die: "d4",
    cost: "250¤",
    description: <>A heavy-duty jacket or full kevlar.</>,
  },
  {
    id: "smartwear",
    label: "SmartWear",
    tier: "TIER II",
    die: "d4",
    cost: "1500¤",
    description: <>Equipped with Adrenachrome_HST auto-injector that fires if the wearer is Battered.</>,
  },
  {
    id: "combat_armor",
    label: "Combat Armor",
    tier: "TIER III",
    die: "d6",
    cost: "10k¤+",
    description: <>With A_HST auto-injector as above. +2DR on Agility tests including Defense.</>,
  },
  {
    id: "exosuit",
    label: "EndGame-Class ExoSuit",
    tier: "TIER IV",
    die: "d8",
    description: <>Equipped with multiple customizable injectors, jump jets, motorized joints and more. Not for sale. +4DR on Agility tests. Defense is +2DR, Toughness and Strength are −2DR. Can jump 4× regular height and length.</>,
  },
];
