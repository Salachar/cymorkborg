import {
  WEAPONS_TABLE,
  ARMOR_TABLE,
} from "./tables";

import class_image from "../images/classes/chemist.png";

import BaseClass from "./base";
export default class RevolutionistChemist extends BaseClass {
  constructor(data = {}) {
    super(data);
  }

  static id = "chemist";
  static color = "#AADD00"; // Acid yellow-green
  static class = "Revolutionist Chemist";
  static artwork = class_image;

  static die = {
    health: "d6",
    glitches: "d6",
    debt: "3d6x1000",
    stats: {
      STR: { mod: 0 },
      AGI: { mod: 0 },
      PRE: { mod: 0 },
      TOU: { mod: -2 },
      KNO: { mod: 2 },
    }
  }

  static description = [
    <>
      By day, you mix and cook in the corps' polluted factories; the ¤¤¤ are much needed. Reaction kinetics are on your mind. By night, you burn the palaces.
    </>,
    <>
      You poison the organism that feeds you. Your concoctions are august.
    </>,
  ];

  static class_uniques = [
    {
      id: "ability_stipendiary",
      label: "STIPENDIARY",
      description: "Roll 3d6+2 for Knowledge.",
      applied: true,
    },
    {
      id: "ability_befouled",
      label: "BEFOULED",
      description: "Roll 3d6-2 for Toughness.",
      applied: true,
    },
    {
      id: "ability_cook",
      label: "COOK",
      description: "Start with some merchandise. Roll d4 times on the Drugs table.",
    },
    {
      id: "ability_addiction",
      label: "ADDICTION",
      description: "You crave the sweet embrace of one substance or another. If you haven't indulged yourself for over 1 day, all tests are +3DR until you get a dose. Detox takes 3d4 days or costs 500¤.",
    },
  ];

  static components = [
    {
      type: "rollable",
      name: "weapon",
      label: "Weapon",
      select_mode: "single",
      entries: WEAPONS_TABLE.slice(0, 6),
      before: <div className="divider small" />,
      note: (
        <div className="bg-gray-900/50 border border-gray-800 p-3 mb-6">
          <p className="text-sm text-gray-300">
            You get d4 <strong className="text-cy-yellow">Basic Mags</strong> for free (in Market below) if applicable to the weapon
          </p>
        </div>
      ),
    },
    {
      type: "rollable",
      name: "armor",
      label: "Armor",
      select_mode: "single",
      entries: ARMOR_TABLE.slice(0, 2),
      before: <div className="divider small" />,
      note: (
        <div className="bg-gray-900/50 border border-gray-800 p-3 mb-6">
          <p className="text-sm text-gray-300">
            Cost only applies to armor not rolled for initial character creation
          </p>
        </div>
      ),
    },
    {
      type: "definitions",
      h3: "The Old RV — Cook Once Per Day",
      before: <div className="divider small" />,
      entries: [
        {
          id: "rv_firebombs",
          label: "d6 Firebombs",
          description: "Deal d4 damage to up to d4 targets and set the ground on fire for 1 minute.",
        },
        {
          id: "rv_nrg",
          label: "d4 NRG Drinks (1 hour)",
          description: "Knowledge tests are -1DR. Additional -2DR to use Apps. DR13 Toughness or Addiction.",
        },
        {
          id: "rv_drugs",
          label: "d2 Drugs",
          description: "DR12 Knowledge to create a drug from the CY_BORG Drugs table. DR8 Toughness or Addiction.",
        },
        {
          id: "rv_glue",
          label: "2d6 Super Glue or Super Lube",
          description: "Industrial adhesive or high-viscosity lubricant. Use your imagination.",
        },
        {
          id: "rv_acid",
          label: "d6 Acid (pulverized)",
          description: "Corrosive powder. Devastating on contact with organic or metal surfaces.",
        },
        {
          id: "rv_explosive",
          label: "d2 Scvm Explosive",
          description: "Crude but effective. You made it yourself — try not to think about that.",
        },
        {
          id: "rv_overdrive",
          label: "d3 Cy-Overdrive (1 min)",
          description: "Double movement speed. Advantage on Defense tests (roll 2d20, drop the lowest). DR16 Toughness or Addiction.",
        },
        {
          id: "rv_knockout",
          label: "d2 Knockout Gas",
          description: "All creatures in an enclosed space test DR14 Toughness or fall unconscious. They awake after 1 hour.",
        },
        {
          id: "rv_nano_poppers",
          label: "d2 Nano Poppers",
          description: "Gives you a random Nano Power (+ Infestation) for 1 hour. DR18 Toughness or Addiction.",
        },
      ],
    },
  ];
}
