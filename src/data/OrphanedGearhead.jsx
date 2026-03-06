import {
  WEAPONS_TABLE,
  ARMOR_TABLE,
} from "./tables";

import class_image from "../images/classes/gearhead.png";

import BaseClass from "./base";
export default class OrphanedGearhead extends BaseClass {
  constructor (data = {}) {
    super(data);
  }

  static id = "gearhead";
  static color = "#FFA500"; // Orange for gearhead/engineer
  static class = "Orphaned Gearhead";
  static artwork = class_image;

  static die = {
    health: "d8",
    glitches: "d4",
    debt: "3d6x1000",
    stats: {
      STR: { mod: 0 },
      AGI: { mod: 0 },
      PRE: { mod: -2 },
      TOU: { mod: 0 },
      KNO: { mod: 2 },
    }
  }

  static description = [
    <>
      People are unreliable. Socially. Physically. Emotionally. Weak bodies and weaker wills. They are worn down, unfixable.
    </>,
    <>
      Instead, you have mastered emotionless steel and loyal code. You can fix, drive and pilot any machine. Machines, you can trust.
    </>,
  ];

  static class_uniques = [
    {
      id: "ability_engineer",
      label: "ENGINEER",
      description: "Roll 3d6+2 for Knowledge.",
      applied: true,
    },
    {
      id: "ability_prefers_machines",
      label: "PREFERS MACHINES",
      description: "Roll 3d6-2 for Presence.",
      applied: true,
    },
    {
      id: "ability_repair",
      label: "MASTER FIXER",
      description: "You test Knowledge DR10 when you try to repair a piece of tech or to pilot a vehicle, drone or other machine.",
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
      name: "you_pilot",
      label: "You Pilot...",
      select_mode: "single",
      entries: [
        {
          id: "quad_bot",
          label: "A Semi-Autonomous Quad-Bot",
          die: "d4 bite",
          description: <>Tools including a health scanner and torch. Loyal but with an attitude. Bites for d4 damage, Knowledge+d8 HP and -d2 Armor.</>,
        },
        {
          id: "flying_drone",
          label: "A Flying Drone",
          die: "d8a rifle",
          description: <>Follows basic commands. Knowledge+d12 HP, -d6 Armor, and an assault rifle (d8a).</>,
        },
        {
          id: "surveillance_drones",
          label: "Three Fly-Sized Surveillance Drones",
          description: <>Equipped with a camera, 3D scanner and heat sensor respectively. Incredibly fragile. An expected corporate espionage tool.</>,
        },
        {
          id: "crawler_drone",
          label: "A Prototype Crawler Drone",
          die: "d12a turret",
          description: <>With a laser turret (d12a). Knowledge+d10 HP, -d6 Armor. Can follow advanced commands. Needs a hard reboot after dealing max damage.</>,
        },
        {
          id: "armored_van",
          label: "An Armored Van",
          description: <>Five seats and lined with junk. Has a smuggler's hatch underneath it all. Once a day, test Knowledge DR8 to find the spare part you need to fix any broken tech.</>,
        },
        {
          id: "weapons_platform",
          label: "A Walking Weapons Platform",
          die: "2d10 battery",
          description: <>Nigh-indestructible, large enough to ride and janky as hell. Anti-materiel battery (2d10) destroys most walls, doors and vehicles with a shot. Has a 2-in-6 chance of breaking down after firing. Takes d4 hours to repair.</>,
        },
      ],
      before: <div className="divider small" />,
    },
    {
      type: "rollable",
      name: "trusted_partner",
      label: "You Trusted Them, and Then They...",
      select_mode: "single",
      entries: [
        {
          id: "disappeared_g0",
          label: "Disappeared in G0",
          description: <>Looking for an advanced lab rumored to have survived the Incident.</>,
        },
        {
          id: "proclaimed_dead",
          label: "Were Proclaimed Dead",
          description: <>But you know their soul lives on inside something else.</>,
        },
        {
          id: "corp_blacksite",
          label: "Were Dragged Off to a Corp Blacksite",
          description: <>By an anonymous killteam.</>,
        },
        {
          id: "roadrunners",
          label: "Left You to Join Up with a Roadrunner Outfit",
          description: <>They scavenge scrap on the rivers up north.</>,
        },
        {
          id: "rival_droners",
          label: "Bugged Out, Pursued by Rival Droners and Bots",
          description: <>Waiting out the heat.</>,
        },
        {
          id: "comatose",
          label: "Got Laid Up, Comatose in a Central Cy Hospital",
          description: <>Allegedly a workshop accident. They're fine as long as there's ¤ on their account.</>,
        },
      ],
      before: <div className="divider small" />,
    },
  ];
}
