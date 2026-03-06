import {
  WEAPONS_TABLE,
  ARMOR_TABLE,
} from "./tables";

import class_image from "../images/classes/ganggoon.png";

import BaseClass from "./base";
export default class ForsakenGangGoon extends BaseClass {
  constructor(data = {}) {
    super(data);
  }

  static id = "gang_goon";
  static color = "#FF0000"; // Red for gang violence
  static class = "Forsaken Gang-Goon";
  static artwork = class_image;

  static die = {
    health: "d6",
    glitches: "d3",
    debt: "3d6x1000",
    stats: {
      STR: { mod: -2 },
      AGI: { mod: 0 },
      PRE: { mod: 0 },
      TOU: { mod: 0 },
      KNO: { mod: 0 },
    }
  }

  static description = [
    <>
      You ran with the only gang to have your back and treat you like more than slum trash. They were your family, and you bled, stole, fought and killed for them.
    </>,
    <>
      They're gone now, so you have to keep your edge.
    </>,
  ];

  static class_uniques = [
    {
      id: "ability_small",
      label: "SMALL",
      description: "Roll 3d6-2 for Strength.",
      applied: true,
    },
    {
      id: "ability_stealthy",
      label: "STEALTHY",
      description: "All Presence and Agility tests are -2DR.",
    }
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
      type: "rollable",
      name: "specialty",
      label: "Your Specialty Was",
      select_mode: "single",
      entries: [
        {
          id: "hits",
          label: "HITS",
          description: (
            <>
              When attacking from surprise, test Agility DR10. On a success, you hit once with a melee weapon, dealing normal damage +3.
            </>
          ),
        },
        {
          id: "brawls",
          label: "BRAWLS",
          description: (
            <>
              Test Agility DR14 to sucker punch an opponent in melee. Deal normal damage and give all allies -2DR on their next attack against the same enemy.
            </>
          ),
        },
        {
          id: "bne",
          label: "BnE",
          description: (
            <>
              You have a talent for opening doors and getting inside buildings. Test Agility DR10 to pick any mechanical lock or Knowledge DR10 for any electronic lock. You begin with toolsets for both mechanical and electronic lockpicking.
            </>
          ),
        },
        {
          id: "fencing",
          label: "FENCING",
          description: (
            <>
              You know potential buyers for almost anything. Once per day, you can test Presence DR12 to remember the name of a person in Cy who might be willing and able to buy whatever illicit goods have fallen into your hands.
            </>
          ),
        },
        {
          id: "cleanup",
          label: "CLEANUP",
          description: (
            <>
              You know how to clean up evidence from a crime scene. Start with two DNA bombs and a large bottle of acid.
            </>
          ),
        },
        {
          id: "assaults",
          label: "ASSAULTS",
          description: (
            <>
              You always liked it old school: both hands raised, running straight at the enemy. Whatever weapon you begin with, you start with one for each hand. You can use it to make a second attack each round at DR14.
            </>
          ),
        },
      ],
      before: <div className="divider small" />,
    },
    {
      type: "rollable",
      name: "gang_fate",
      label: "Your Gang",
      select_mode: "single",
      entries: [
        {
          id: "rival_gang",
          label: "Taken Out by Rivals",
          description: (
            <>
              Was taken out by a rival gang. They think you are dead too.
            </>
          ),
        },
        {
          id: "cops",
          label: "Hauled Off",
          description: (
            <>
              Got hauled off. Cops thought you were just a punk kid. Nobody ratted you out.
            </>
          ),
        },
        {
          id: "betrayed",
          label: "Betrayed",
          description: (
            <>
              Betrayed you. Left you for dead in the gutter. They don't know you survived.
            </>
          ),
        },
        {
          id: "religious",
          label: "Religious Fervor",
          description: (
            <>
              Wandered off into G0 with a newfound religious fervor. They left you and a few other skeptics behind.
            </>
          ),
        },
        {
          id: "crossed_line",
          label: "Broke the Code",
          description: (
            <>
              Broke the only rules that separate a criminal from a monster. You left on bad terms.
            </>
          ),
        },
        {
          id: "thrown_out",
          label: "Thrown Out",
          description: (
            <>
              Threw you out for breaking the code. They'll kill you if they see you again.
            </>
          ),
        },
      ],
      before: <div className="divider small" />,
    },
  ];
}
