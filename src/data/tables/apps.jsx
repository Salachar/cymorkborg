// Apps - d12 table
// Hacker cartridges for cyberdecks

export const APPS = [
  {
    id: "weian_hammer",
    label: "WEIAN-Hammer",
    description: (
      <>
        Nearby devices are triggered to perform their function, i.e. open/close unlocked doors, trigger sprinklers, start a camera recording, adjust the AC. You can trigger 5 devices as you choose over the next 5 rounds.
      </>
    ),
  },
  {
    id: "rcd_overchargr",
    label: "RCDOvrChargr",
    description: (
      <>
        One target gets +d6 on all Agility and Strength tests for Knowledge+3 rounds.
      </>
    ),
  },
  {
    id: "nok_nok",
    label: "Nok_Nok",
    description: (
      <>
        Open a nearby locked door. Failure may trigger an alarm.
      </>
    ),
  },
  {
    id: "false_flagger",
    label: "False Flagger",
    description: (
      <>
        Fake an alarm or the location of a triggered alarm. Any response to a real alarm is delayed by 2d6 minutes.
      </>
    ),
  },
  {
    id: "sigiltag",
    label: "SigilTag",
    description: (
      <>
        This location and nearby systems are tagged with your invisible sigil, enabling you to remotely activate Apps as if you were present. Only two locations can be tagged at the same time.
      </>
    ),
  },
  {
    id: "erase",
    label: ">eRase",
    description: (
      <>
        Cut or copy the latest 10 minutes of stored information from any type of recording/surveillance device.
      </>
    ),
  },
  {
    id: "defencder",
    label: "De-fenc/der",
    description: (
      <>
        Take control of a nearby turret, drone or similar defense system for d6 rounds.
      </>
    ),
  },
  {
    id: "blood_snoot",
    label: "Blood Snoot",
    die: "d4",
    description: (
      <>
        Tracks down an enemy hacker and deals d4 damage each round until they pass a DR12 Knowledge test or die.
      </>
    ),
  },
  {
    id: "pathmapper",
    label: "PathMapper",
    description: (
      <>
        Uses nearby sensors, cameras and public information to create a detailed 3D map of the surrounding ~100m.
      </>
    ),
  },
  {
    id: "ctech_attak",
    label: "CTechAttak",
    die: "4d10",
    description: (
      <>
        d3 nearby cybered targets lose a total of 4d10 HP.
      </>
    ),
  },
  {
    id: "beaconworm",
    label: "beaconworm",
    description: (
      <>
        Place a tracker into a device or cybertech, enabling you to track its movements in realtime for the coming d4 weeks.
      </>
    ),
  },
  {
    id: "trolley_skipper",
    label: "TrolleySkipper",
    description: (
      <>
        Automated defenses have trouble tracking a person of your choice and prioritize other available targets.
      </>
    ),
  },
];
