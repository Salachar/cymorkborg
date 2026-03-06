// Nano Infestations - d20 table
// Triggered on fumbles or when taking 5+ damage from a single attack and failing Presence DR10

export const NANO_INFESTATIONS = [
  {
    id: "alien_crabs",
    label: "Alien Crabs",
    description: (
      <>
        <strong>Bugs crawl beneath your skin.</strong> They burrow deeper, sending you to the ground, shaking with pain for d6 rounds.
      </>
    ),
  },
  {
    id: "rot",
    label: "Rot",
    description: (
      <>
        <strong>Skin and flesh slowly rot.</strong> Large chunks of skin fall off. You take d6 damage and for the rest of the day, take an extra +2 damage from physical sources.
      </>
    ),
  },
  {
    id: "flora",
    label: "Flora",
    description: (
      <>
        <strong>Your skin is tinted green or purple. Plant matter grows over your wounds.</strong> Flowers bloom from your mouth and scream violently for 10 minutes, after which they wither and die. During this time, you cannot speak and add +2DR to all your actions.
      </>
    ),
  },
  {
    id: "third_eye",
    label: "Third Eye",
    description: (
      <>
        <strong>It does not look human, that eye in the middle of your forehead.</strong> Your sight shifts to the alien eye, revealing endless spectra of colors incomprehensible to the human mind. For d6 rounds, you have −4DR on all Presence and Knowledge tests but +4DR on everything else.
      </>
    ),
  },
  {
    id: "gills",
    label: "Gills",
    description: (
      <>
        <strong>You can breathe under water.</strong> For d6 rounds, you cannot breathe air–test Toughness DR12 each round or suffer d4 damage.
      </>
    ),
  },
  {
    id: "tubes",
    label: "Tubes",
    description: (
      <>
        <strong>Thick, rubber-like hair that moves against the wind.</strong> It starts to twist and turn around your face and arms, constraining you and d3 other nearby targets. +4DR to any attack or defense tests until either they break free by testing Strength DR12 or someone helps them struggle loose.
      </>
    ),
  },
  {
    id: "brittle_bones",
    label: "Brittle Bones",
    description: (
      <>
        <strong>Your Strength counts as one less for calculating carrying capacity.</strong> A sudden vibration. The sound of shattering glass. Extreme pain. You take 1 point of damage for each item you are carrying.
      </>
    ),
  },
  {
    id: "bloodthirst",
    label: "Bloodthirst",
    description: (
      <>
        <strong>You have to eat raw meat every 2-3 hours to survive.</strong> You can't control it anymore. It. Must. FEED. For d3 rounds, you can do nothing but attempt to bite or claw your way into the nearest person's main artery.
      </>
    ),
  },
  {
    id: "barbed_skeleton",
    label: "Barbed Skeleton",
    die: "d4",
    description: (
      <>
        <strong>Sharp pieces of bone pierce the skin around your joints. You need to grind them down every two weeks, or they hinder your movements.</strong> A growth spurt occurs, causing d4 damage, bleeding wounds and for the next hour, you have +2DR on all actions that require moving your limbs.
      </>
    ),
  },
  {
    id: "radiance",
    label: "Radiance",
    die: "d6",
    description: (
      <>
        <strong>A faint, eerie glow surrounds you. Geiger counters malfunction in your presence.</strong> You flash brightly and deal d6 damage to yourself and up to d6 others in your close proximity.
      </>
    ),
  },
  {
    id: "fading",
    label: "Fading",
    description: (
      <>
        <strong>You seem to fade in and out of existence.</strong> You disappear from sight and all sensors, but you are stuck in complete darkness for d4 rounds, after which you appear in a random location up to 50m from where you were.
      </>
    ),
  },
  {
    id: "seed_pods",
    label: "Seed Pods",
    description: (
      <>
        <strong>Pea-sized seed pockets cover most of your body.</strong> Seeds shoot out of your body, weakening you for the next hour as the seeds rapidly grow back. All physical tests are +4DR for this hour.
      </>
    ),
  },
  {
    id: "crystalline",
    label: "Crystalline",
    description: (
      <>
        <strong>Small buds of crystal cover your body.</strong> They expand, immobilizing you as the crystal covers your entire body. You are unable to move for d3 rounds, and any damage taken during this time is tripled.
      </>
    ),
  },
  {
    id: "nanite_echo",
    label: "Nanite Echo",
    die: "d6",
    description: (
      <>
        <strong>Your eyes are yellow and red.</strong> A semi-physical copy of yourself appears behind you and attempts to kill you or a nearby ally, whoever is weakest. The echo has d12 HP and deals d6 damage with its ghastly grasp.
      </>
    ),
  },
  {
    id: "elongated_fingers",
    label: "Elongated Fingers",
    description: (
      <>
        <strong>Twice the length they used to be.</strong> They painfully twist and bend. You are unable to use weapons or other items requiring a firm grip for the next d10×10 minutes.
      </>
    ),
  },
  {
    id: "cold",
    label: "Cold",
    description: (
      <>
        <strong>Humidity turns to frost on your cold skin.</strong> Your body temperature drops, and the air around you seems to freeze. You and everyone close to you act with +2DR for the next minute.
      </>
    ),
  },
  {
    id: "rage",
    label: "Rage",
    description: (
      <>
        <strong>Skin pulled tight, your blood is boiling.</strong> You lose control of your senses and attack anyone near you for d4 rounds. Whatever controls you prefers to use offensive Nano powers first and your fists second.
      </>
    ),
  },
  {
    id: "bloated",
    label: "Bloated and Moist",
    description: (
      <>
        You swell up even more, and a greyish liquid seeps from your orifices. +4DR on every test for 10 minutes.
      </>
    ),
  },
  {
    id: "bestial_maw",
    label: "Bestial, Enlarged Maw",
    die: "d6",
    description: (
      <>
        It splits in two and grows even larger when triggered. You take d8 damage but can bite for d6 damage for the next hour.
      </>
    ),
  },
  {
    id: "magnetic",
    label: "Magnetic",
    description: (
      <>
        <strong>You attract metal objects. Usually only noticeable at a few centimeters' distance from your skin.</strong> Small metal objects come flying towards you. Defend against metal melee weapons or bullets at +4DR for the next d6 rounds.
      </>
    ),
  },
];
