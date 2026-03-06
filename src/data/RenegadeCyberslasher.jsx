import {
  WEAPONS_TABLE,
  ARMOR_TABLE,
} from "./tables";

import class_image from "../images/classes/cyberslasher.png";

import BaseClass from "./base";
export default class RenegadeCyberslasher extends BaseClass {
  constructor (data = {}) {
    super(data);
  }

  static id = "cyberslasher";
  static color = "#FF00FF"; // Magenta/hot pink for cyberslasher
  static class = "Renegade Cyberslasher";
  static artwork = class_image;

  static die = {
    health: "d10",
    glitches: "d3",
    debt: "3d6x1000",
    stats: {
      STR: { mod: 1 },
      AGI: { mod: 0 },
      PRE: { mod: 1 },
      TOU: { mod: 0 },
      KNO: { mod: -2 },
    }
  }

  static description = [
    <>
      You are DEATH incarnate—a frenzied flurry of chrome, murder and blood-stained steel. But yours is no mindless rage.
    </>,
    <>
      You match your trained and cybernetically enhanced body with an equally disciplined mind. You used to kill for a cause, for an ideal. Now? You kill for money.
    </>,
  ];

  static class_uniques = [
    {
      id: "ability_body_and_soul",
      label: "BODY AND SOUL",
      description: "Roll 3d6+1 for Strength and Presence.",
      applied: true,
    },
    {
      id: "ability_not_a_reader",
      label: "NOT A READER",
      description: "Roll 3d6-2 for Knowledge.",
      applied: true,
    },
    {
      id: "starting_cybertech",
      label: "Starting Cybertech",
      description: "Start with one d12 roll for a random Cybertech. Replace any App or Nano with another d12 cybertech roll.",
    },
  ];

  static components = [
    {
      type: "rollable",
      name: "weapon",
      label: "Weapon",
      select_mode: "single",
      entries: WEAPONS_TABLE.slice(0, 8),
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
      name: "signature_weapon",
      label: "Your Trenchcoat Hides Most of Your...",
      select_mode: "single",
      entries: [
        {
          id: "ancient_blade",
          label: "Ancient Blade",
          die: "d8",
          description: <>That has claimed 1,000 souls. Or so you say. If you are the first to strike in combat, you deal double damage.</>,
        },
        {
          id: "steelcutter_chainsaw",
          label: "Steelcutter Chainsaw",
          die: "d8",
          description: <>Absolutely not made for combat. When hitting for maximum damage, it gets stuck for d3 rounds, dealing damage automatically as long as it remains there.</>,
        },
        {
          id: "filament_zweihander",
          label: "Filament Zweihänder",
          die: "d10",
          description: <>That makes everyone around you nervous. Crits hit with such a force that your target is thrown up in the air, making them an easy target (-2DR) for anyone else.</>,
        },
        {
          id: "wire_bat",
          label: "Wire-Wrapped Baseball Bat",
          die: "d8",
          description: <>Hooked up to a battery. You can supercharge it, dealing +d4 damage to your target and to yourself.</>,
        },
        {
          id: "dual_logans",
          label: "Dual Logans",
          die: "d8",
          description: <>That make that sound when you pop 'em out. Once per fight, you can surprise a victim by popping out feet claws as well, attacking at DR8.</>,
        },
        {
          id: "goddamn_flail",
          label: "GodDAMN Flail",
          die: "d8",
          description: <>Spiked. Absolutely medieval. Crumples and shreds enemy armor a tier when you hit for 6+ damage.</>,
        },
      ],
      before: <div className="divider small" />,
    },
    {
      type: "rollable",
      name: "daily_ritual",
      label: "You Try to Start Each Day With...",
      select_mode: "single",
      entries: [
        {
          id: "yoga",
          label: "Doing Yoga and Meditating",
          description: <>Centering yourself for the violence ahead.</>,
        },
        {
          id: "stimulants",
          label: "Chugging a Mix of Carefully Selected and Measured Stimulants",
          description: <>Chemical enhancement through precision.</>,
        },
        {
          id: "plants",
          label: "Assiduously Minding Your Three Favorite Plants",
          description: <>Life in balance with death.</>,
        },
        {
          id: "cleaning_gear",
          label: "Obsessively Laying Out Your Clothes and Cleaning Your Gear",
          description: <>Ritual and order before chaos.</>,
        },
        {
          id: "blood_transfusion",
          label: "Doing a Recreational Blood Transfusion",
          description: <>Fresh blood for fresh kills.</>,
        },
        {
          id: "chaos_magick",
          label: "Strengthening Your Inner Daemon Through a Chaos Magick Ritual",
          description: <>Embracing the darkness within.</>,
        },
      ],
      before: <div className="divider small" />,
    },
  ];
}
