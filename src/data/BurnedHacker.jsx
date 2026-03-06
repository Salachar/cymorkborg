import {
  WEAPONS_TABLE,
  ARMOR_TABLE,
} from "./tables";

import class_image from "../images/classes/burned_hacker.png";

import BaseClass from "./base";
export default class BurnedHacker extends BaseClass {
  constructor (data = {}) {
    super(data);
  }

  static id = "hacker";
  static color = "#00FFFF"; // Cyan/electric blue for hacker
  static class = "Burned Hacker";
  static artwork = class_image;

  static die = {
    health: "d6",
    glitches: "d2",
    debt: "6d10x1000",
    stats: {
      STR: { mod: -1 },
      AGI: { mod: 0 },
      PRE: { mod: 0 },
      TOU: { mod: -1 },
      KNO: { mod: 2 },
    }
  }

  static description = [
    <>
      You were one of the sharpest deckers in Cy. No one could use tech or warp the world with an App like you could.
    </>,
    <>
      You don't know what went wrong. You messed up. Maybe you were tricked; maybe you got sloppy. You glimpsed a terrible truth, and now you're burnt. No collective, no fallback, nothing.
    </>,
  ];

  static class_uniques = [
    {
      id: "debt",
      label: "Starting Debt",
      die: "6d10×1k¤",
      description: "You owe someone a lot of money.",
    },
    {
      id: "ability_cutting_edge",
      label: "CUTTING EDGE",
      description: "Roll 3d6+2 for Knowledge.",
      applied: true,
    },
    {
      id: "ability_unhealthy_living",
      label: "UNHEALTHY LIVING",
      description: "Roll 3d6-1 for Strength and Toughness.",
      applied: true,
    },
    {
      id: "starting_gear",
      label: "Starting Gear",
      description: "Start with a cyberdeck with Knowledge+4 slots and a random App. Any rolled Nano or cybertech is replaced with a new random App.",
    },
  ]

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
      name: "built_app",
      label: "You Built an App...",
      select_mode: "single",
      entries: [
        {
          id: "borgtrigga",
          label: "Borgtrigga-0.5",
          description: <>Provoke a Cy-rage test for one nearby target.</>,
        },
        {
          id: "law1",
          label: "Law1",
          description: <>Parallaxes imagery around you, making you invisible to all tech (except true AI) for 10 minutes.</>,
        },
        {
          id: "boomboom",
          label: "Boomboom",
          description: <>d4 nearby simple devices (lamps, monitors, cameras, etc.) explode. d6 damage to up to d4 targets.</>,
        },
        {
          id: "copyswappy",
          label: "CopySwappy",
          description: <>For d10 rounds, all tech will mistake you for another person within 30m and vice versa.</>,
        },
        {
          id: "terror",
          label: "tError",
          description: <>Target's RCD renders subliminal, personalized nightmare imagery that distorts reality. Test Presence DR14 or unable to act for d4 rounds.</>,
        },
        {
          id: "dvg_sling",
          label: "DvG-sling",
          description: <>Deal damage to a cybered target or drone/vehicle/mech based on their size. Dog-sized targets take d6 damage, human d10, car 2d8, and larger targets take 2d12.</>,
        },
      ],
      before: <div className="divider small" />,
    },
    {
      type: "rollable",
      name: "terrible_truth",
      label: "On a Deep Dive of the Cyber Cosmos, You Found a Terrible Truth...",
      select_mode: "single",
      entries: [
        {
          id: "ucs_board",
          label: "The Public Faces of the UCS Board Are Fabricated",
          description: <>They don't exist. Who's running UCS?</>,
        },
        {
          id: "stealth_drones",
          label: "Stealth Carrier Drones",
          description: <>Are offloading large amounts of something in G0 on rainy nights.</>,
        },
        {
          id: "rogue_ai",
          label: "Rogue AI Are Flocking to Cy",
          description: <>More so than anywhere else in the world.</>,
        },
        {
          id: "nanobacteria_net",
          label: "Nanobacteria Is Seeping Into the Net",
          description: <>What does that even mean? Who's covering it up?</>,
        },
        {
          id: "merged_ai",
          label: "Two AIs Have Merged Into a Two-Headed Sentience",
          description: <>Its intelligence is beyond our comprehension.</>,
        },
        {
          id: "backdoors",
          label: "An Unknown Collective Has Opened Backdoors",
          description: <>In Cy's major data nodes. No hackers have claimed credit.</>,
        },
      ],
      before: <div className="divider small" />,
    },
  ];
}
