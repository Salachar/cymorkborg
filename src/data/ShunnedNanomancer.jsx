import {
  WEAPONS_TABLE,
  ARMOR_TABLE,
} from "./tables";

import class_image from "../images/classes/nanomancer.png";

import BaseClass from "./base";
export default class ShunnedNanomancer extends BaseClass {
  constructor (data = {}) {
    super(data);
  }

  static id = "nanomancer";
  static color = "#8B4789"; // Purple/bio-mutant color
  static class = "Shunned Nanomancer";
  static artwork = class_image;

  static health_die = "d4";

  static die = {
    health: "d4",
    glitches: "d2",
    debt: "3d6x1000",
    stats: {
      STR: { mod: 0 },
      AGI: { mod: 0 },
      PRE: { mod: 2 },
      TOU: { mod: -2 },
      KNO: { mod: 0 },
    }
  }

  static description = [
    <>
      It's inside you. Infesting your brain, warping your flesh. People are afraid of you now. They're afraid of the power that poisons you. You're scared too.
    </>,
    <>
      You got infected through one of many ways - cultist rituals, fallen stars, strange drugs, horrible experiments, a G0 rat bite, or you were simply born this way. Now nanobacteria courses through your veins, giving you terrible powers at a terrible cost.
    </>,
  ];

  static class_uniques = [
    {
      id: "ability_weird",
      label: "WEIRD",
      description: "Roll 3d6+2 for Presence.",
      applied: true,
    },
    {
      id: "ability_ill",
      label: "ILL",
      description: "Roll 3d6-2 for Toughness.",
      applied: true,
    },
  ];

  static components = [
    {
      type: "rollable",
      name: "weapon",
      label: "Weapon",
      select_mode: "single",
      entries: WEAPONS_TABLE.slice(0, 6),
      before: <div className="divider" />,
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
      note: (
        <div className="bg-gray-900/50 border border-gray-800 p-3 mb-6">
          <p className="text-sm text-gray-300">
            Cost only applies to armor not rolled for initial character creation
          </p>
        </div>
      ),
      before: <div className="divider" />,
    },
    {
      type: "rollable",
      name: "physical_mutation",
      label: "Your Physical Mutation...",
      select_mode: "single",
      entries: [
        {
          id: "leaf_knife",
          label: "Strange Leaf-Looking Knife",
          die: "d4",
          description: <>Victims must test Toughness or bleed 1 HP for d6 rounds.</>,
        },
        {
          id: "milkwhite_eyes",
          label: "Milkwhite Eyes That See Through Lies",
          description: <>Once per day, when you believe you've been lied to, test Presence DR8. On a success, you can tell whenever the target lies for the rest of the day.</>,
        },
        {
          id: "stone_skin",
          label: "Burnt Orange, Stone-Like Skin",
          description: <>-d4 Damage taken, not subject to being reduced on a defense fumble. Instead, you take an additional d8 damage as part of your skin is ripped off.</>,
        },
        {
          id: "navel_mouth",
          label: "A Second Mouth Where Your Navel Used to Be",
          description: <>Any food or drugs consumed with your navel-mouth are twice as effective.</>,
        },
        {
          id: "translucent_skull",
          label: "Elongated, Pointed and Semi-Translucent Skull",
          description: <>Your brain shines underneath, emitting light like that of a candle.</>,
        },
        {
          id: "scales",
          label: "Scales Cover Most of Your Body",
          description: <>Any roll to resist cold, heat or radiation is -4DR (easier).</>,
        },
      ],
      before: <div className="divider" />,
    },
    {
      type: "rollable",
      name: "infection_origin",
      label: "How You Got Infected...",
      select_mode: "single",
      entries: [
        {
          id: "cultists",
          label: "Neo-Pagan Cultists",
          description: <>You spent a wild night with a group of neo-pagan cultists, performing profane rites to some snake god.</>,
        },
        {
          id: "fallen_star",
          label: "Fallen Star",
          description: <>A star fell close to your building, and you were a curious child.</>,
        },
        {
          id: "not_drugs",
          label: "Not Drugs",
          description: <>You found drugs. Free drugs. They were neither drugs nor entirely free.</>,
        },
        {
          id: "experiments",
          label: "Horrible Experiments",
          description: <>You were kidnapped and subjected to horrible experiments.</>,
        },
        {
          id: "rat_bite",
          label: "G0 Rat Bite",
          description: <>A G0 rat bit you.</>,
        },
        {
          id: "born",
          label: "Born This Way",
          description: <>You were born.</>,
        },
      ],
      before: <div className="divider" />,
    },
  ];
}
