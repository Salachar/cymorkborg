// Nano Powers - d12 table
// Each power is linked to a random infestation (roll d20)

export const NANO_POWERS = [
  {
    id: "benevolent_suturedroids",
    label: "Benevolent Suturedroids",
    description: (
      <>
        d2 people regain d10 HP each. A roll of 6 or greater comes with a free migraine.
      </>
    ),
  },
  {
    id: "pineal_gland",
    label: "Pineal Gland Stimulation",
    description: (
      <>
        For d4 rounds, you can feel nearby data flows. You can hear a short conversation or message, sense the direction of a large data source or see the last few seconds of the most recently recorded information on a device.
      </>
    ),
  },
  {
    id: "cosmic_dust",
    label: "Cosmic Dust Bots",
    description: (
      <>
        An area of up to 20m in diameter is covered in dust and darkness for the duration of a fight or for 10 rounds. It tastes like stained, rusted metal.
      </>
    ),
  },
  {
    id: "psychic_scalpels",
    label: "Psychic Scalpels",
    die: "d10",
    description: (
      <>
        A living target of your choice tests Presence DR14 or loses d10 HP. Their eyes bleed, and their ears ring.
      </>
    ),
  },
  {
    id: "bent_prism",
    label: "Bent Prism",
    description: (
      <>
        A person becomes invisible and attacks and defends at DR6. The effect lasts for d6 rounds or until you are hurt.
      </>
    ),
  },
  {
    id: "crawling_carapace",
    label: "Crawling Carapace",
    die: "d6",
    description: (
      <>
        d4 targets gain −d6 armor for 4 rounds. Sometimes it feels as if this thing has a will of its own, but that's probably just your imagination.
      </>
    ),
  },
  {
    id: "chill_void",
    label: "Chill of the Void",
    description: (
      <>
        Up to d4 targets test Toughness DR14 or take d4 damage. The next round, the test is DR16 and the damage taken is d8. In the third and fourth rounds, the test is DR16 and the damage is 2d10. Frost covers the area, and snowflakes float in the air.
      </>
    ),
  },
  {
    id: "to_dust",
    label: "To Dust",
    description: (
      <>
        Half a cubic meter of inorganic matter turns to dust. If the target is attached to or in the hands of a conscious creature, the test to activate the power is DR14.
      </>
    ),
  },
  {
    id: "dead_cell_spirits",
    label: "Dead Cell Spirits",
    die: "d6",
    description: (
      <>
        By consuming a handful of something dead, you can relive their last moments as if through a hazy and distorted lens. Test Presence DR14 to avoid taking d6 damage from ego death.
      </>
    ),
  },
  {
    id: "lifetap",
    label: "Lifetap",
    die: "d6",
    description: (
      <>
        Choose two targets, one to heal and one to hurt. The healing target tests Presence DR10 to heal d6 damage, while the second target is dealt d6 damage. Failure deals both targets d3 damage. A translucent, oozing bridge of blood and energy flows between the creatures, like oil in water.
      </>
    ),
  },
  {
    id: "remote_control",
    label: "Remote Control",
    description: (
      <>
        A target within spitting range must obey a single command. You will forever hear their wordless voice faintly echo in your mind.
      </>
    ),
  },
  {
    id: "swarm_trip",
    label: "Swarm Trip",
    description: (
      <>
        Your mind is transferred to a flying swarm of bacteria for 10 minutes. You can move through any crack or hole, and you can see whatever the swarm sees but not hear or interact with anything. If your body is killed or if you are not back at your body when the 10 minutes are up, you are stuck in the swarm forever.
      </>
    ),
  },
];
