import {
  WEAPONS_TABLE,
  ARMOR_TABLE,
} from "./tables";

import class_image from "../images/classes/nanomancer.png";

import BaseClass from "./base";
export default class StrungOutApothecary extends BaseClass {
  constructor(data = {}) {
    super(data);
  }

  static id = "apothecary";
  static color = "#00CC88";
  static class = "Strung Out Apothecary";
  // static artwork = class_image;

  static die = {
    health: "d6",
    glitches: "d3",
    debt: "3d6x1000",
    stats: {
      STR: { mod: 0 },
      AGI: { mod: 0 },
      PRE: { mod: 2 },
      TOU: { mod: -2 },
      KNO: { mod: 2 },
    }
  }

  static description = [
    <>
      You know drugs the way a priest knows scripture. You've tried all of them. Most of them twice, some of them three times, but most of them at least five times. You keep a mental library of every substance, every dose, every interaction, catalogued behind glassy eyes and a chem-induced smile.
    </>,
    <>
      You keep people alive. Keep them sharp, and keep them moving... well, at least kinda. The crew relies on you and your bag of tricks. You rely on your bag of tricks too, maybe more than you'd like to admit.
    </>,
  ];

  static class_uniques = [
    {
      id: "ability_chemist",
      label: "CHEMIST",
      description: "Roll 3d6+2 for Knowledge.",
      applied: true,
    },
    {
      id: "ability_smooth",
      label: "SMOOTH",
      description: "Roll 3d6+2 for Presence.",
      applied: true,
    },
    {
      id: "ability_hollow",
      label: "HOLLOW",
      description: "Roll 3d6-2 for Toughness.",
      applied: true,
    },
    // {
    //   id: "ability_own_best_customer",
    //   label: "THEIR OWN BEST CUSTOMER",
    //   description: "Drug effects on you are always halved — good and bad. Your body barely feels anything anymore.",
    // },
    {
      id: "starting_gear",
      label: "Medical Bag",
      description: "Start with d4 random drugs from the market. If you roll a duplcate, take it and roll again, you gotta stock up.",
    },
    {
      id: "ability_field_medic",
      label: "Field Medic",
      description: "Once per session, stabilize a Battered ally with no roll required. They return to 1 HP.",
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
      type: "rollable",
      name: "self_medicate",
      label: "You Self-Medicate With...",
      select_mode: "single",
      entries: [
        {
          id: "sunset_chalk",
          label: "Sunset Chalk",
          description: <>Your Sunset Chalk addiction has made you rather passive, except to those seeking violence against you. DR10 (instead of DR12) to hit enemies, but you can only attack enemies that have attacked you.</>,
        },
        {
          id: "osleep",
          label: "Øsleep",
          description: <>You never need rest. Negative effects from lack of sleep never apply to you.</>,
        },
        {
          id: "bullseye",
          label: "BULLSEYE",
          description: <>Your KNO tests are always -2DR (easier). You have a permanent twitch that makes people uneasy.</>,
        },
        {
          id: "rattle",
          label: "Rattle",
          description: <>You always act first in initiative. No roll needed.</>,
        },
        {
          id: "cvortex",
          label: "C/VORTEX",
          description: <>Once per session, reroll any single failed test and take the better result.</>,
        },
        {
          id: "red_juice",
          label: "Red-Juice",
          description: <>Once per day, heal d6 HP. You're visibly dependent — anyone who knows drugs can clock it immediately.</>,
        },
      ],
      before: <div className="divider small" />,
    },
    {
      type: "rollable",
      name: "knowledge_of_veins",
      label: "Your Knowledge of Veins...",
      select_mode: "single",
      entries: [
        {
          id: "keeps_them_standing",
          label: "Keeps Them on Their Feet",
          description: <>Once per session, bring a Battered ally back to 1 HP with a quick injection. No roll required.</>,
        },
        {
          id: "reads_the_body",
          label: "Reads the Body",
          description: <>Test KNO DR10 to identify exactly what's wrong with an ally mechanically and tell them how to fix it.</>,
        },
        {
          id: "the_right_dose",
          label: "The Right Dose",
          description: <>Give one ally +1 to any single stat for one scene. They feel rough until next rest.</>,
        },
        {
          id: "knows_the_antidote",
          label: "Knows the Antidote",
          description: <>Once per day, automatically negate any drug or poison effect on an ally. No roll needed.</>,
        },
        {
          id: "stretches_the_supply",
          label: "Stretches the Supply",
          description: <>Any drug used by an ally in your presence lasts twice as long.</>,
        },
        {
          id: "sharpens_the_edge",
          label: "Sharpens the Edge",
          description: <>Before a fight starts, give one ally -2DR on all attack tests for the first round.</>,
        },
      ],
      before: <div className="divider small" />,
    },
  ];
}
