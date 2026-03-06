import {
  WEAPONS_TABLE,
  ARMOR_TABLE,
} from "./tables";

import class_image from "../images/classes/corp_killer.png";

import BaseClass from "./base";
export default class DischargedCorpKiller extends BaseClass {
  constructor (data = {}) {
    super(data);
  }

  static id = "corp_killer";
  static color = "#FF0080"; // Hot pink/magenta for discharged killer
  static class = "Discharged Corp Killer";
  static artwork = class_image;

  static die = {
    health: "d8",
    glitches: "d2",
    debt: "3d6x1000",
    stats: {
      STR: { mod: 0 },
      AGI: { mod: 0 },
      PRE: { mod: -1 },
      TOU: { mod: 2 },
      KNO: { mod: -1 },
    }
  }

  static description = [
    <>
      A good soldier in bad company, always fighting someone else's war in the name of greed.
    </>,
    <>
      Capitalism crushed your enthusiasm quickly enough, and you were discharged without severance. The Corp wants you dead.
    </>,
  ];

  static class_uniques = [
    {
      id: "ability_scarred_jarhead",
      label: "EMOTIONALLY SCARRED JARHEAD",
      description: "Roll 3d6-1 for Knowledge and Presence.",
      applied: true,
    },
    {
      id: "ability_tough_as_nails",
      label: "TOUGH AS NAILS",
      description: "Roll 3d6+2 for Toughness.",
      applied: true,
    },
    {
      id: "armor_bonus",
      label: "Armor Roll",
      die: "d4+1",
      description: "You roll d4+1 for armor instead of normal armor roll",
      applied: true,
    },
    {
      id: "autofire_bonus",
      label: "Autofire Specialist",
      description: "Your autofire tests are always -1DR (easier)",
    },
    {
      id: "enemy",
      label: "Enemy",
      description: "The Corp wants you dead",
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
      entries: ARMOR_TABLE.slice(0, 5),
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
      name: "stolen_gear",
      label: "You Took Something From Your Employer When You Left the Force...",
      select_mode: "single",
      entries: [
        {
          id: "heavy_mg",
          label: "Old-School Heavy Machine Gun",
          die: "d12a",
          description: <>Damage, but breaks down after a damage roll of 1. You can fix it if you get 10 minutes of quiet time.</>,
        },
        {
          id: "smart_rifle",
          label: "Prototype Smart™ Assault Rifle",
          die: "d10a",
          description: <>Around-the-corner shooting, camera sight, grenade launcher, the works.</>,
        },
        {
          id: "grenades",
          label: "Toughness+5 Hand Grenades and 5 Flashbangs",
          description: <>You throw grenades with -2DR.</>,
        },
        {
          id: "laser_cannon",
          label: "Heavy Laser Cannon",
          die: "d12",
          description: <>Damage, Presence DR14 against people, bots and animals. 3d12 damage, Presence DR10 against vehicles, turrets or similar targets.</>,
        },
        {
          id: "air_cannon",
          label: "Crowd-Control Air Cannon",
          die: "d6",
          description: <>Damage, can hit up to d3 targets close to each other.</>,
        },
        {
          id: "incendiary_shotgun",
          label: "Incendiary Shotgun",
          die: "d10",
          description: <>Damage and test Agility DR12 or flammable materials are ignited for +d6 damage the following round.</>,
        },
      ],
      before: <div className="divider small" />,
    },
    {
      type: "rollable",
      name: "deployment",
      label: "Your Deployment...",
      select_mode: "single",
      entries: [
        {
          id: "urban_infiltration",
          label: "Urban Infiltration in Cy Central",
          description: <>You know the area well.</>,
        },
        {
          id: "orbital_grunt",
          label: "Orbital Station Grunt",
          description: <>Zero-G wall breaches and airlock executions were your idea of fun.</>,
        },
        {
          id: "maritime_raider",
          label: "Maritime Raider",
          description: <>Blowing up drilling rigs, underwater labs and the occasional ship.</>,
        },
        {
          id: "wasteland_rig",
          label: "Mobile Wasteland Rig Corps",
          description: <>Mowing down roadrunners, sabotaging rival infrastructure, burning what little nature was left.</>,
        },
        {
          id: "periglacial",
          label: "Periglacial SecCorp",
          description: <>Plundering released gas and bioweapons for your employer.</>,
        },
        {
          id: "washed_out",
          label: "Didn't Get That Far. Washed Out.",
          description: <>Capitalism crushed your enthusiasm quickly enough.</>,
        },
      ],
      before: <div className="divider small" />,
    },
  ];
}
