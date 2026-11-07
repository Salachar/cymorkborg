// Drugs: d12 table (full strength), plus weaker recreational doses as
// separate entries.
//
//   DRUGS                12 full-strength drugs. The d12 table: keep it at 12
//                        so anything rolling on it stays a d12.
//   DRUGS_RECREATIONAL   the cheaper recreational doses, one per drug that
//                        has one. The rules only give their price, not their
//                        effect, so the description leaves it to the GM.
//   DRUGS_MARKET         both, with each recreational dose right after its
//                        full version. Use this for the Market section.
//
// Each entry has one price, so the Market's cost parsing (which reads the
// leading number) charges the right amount.

export const DRUGS = [
  {
    id: "red_juice",
    label: "Red-Juice",
    cost: "40¤",
    description: <>Heals d10 HP once per day.</>,
  },
  {
    id: "adrenachrome",
    label: "aDrEnAChrOMe_hst",
    cost: "60¤",
    description: <>Heal d6 HP, +1 on all abilities for d6 rounds, then −1 until rest.</>,
  },
  {
    id: "sunset_chalk",
    label: "Sunset Chalk",
    cost: "30¤",
    description: <>Test Toughness DR14 or be unable to use violence other than in self-defense for d10 minutes.</>,
  },
  {
    id: "miura",
    label: "MIURA",
    cost: "80¤",
    description: <>Test Toughness DR12 or frenzy for d6 rounds, striking at random targets in range with the most effective weapon available. Attacks are DR10 and defense is DR14.</>,
  },
  {
    id: "rattle",
    label: "Rattle",
    cost: "30¤",
    description: <>Test Toughness DR12 or be unable to stop talking for d6×10 minutes. Users often open up about things they wish to keep to themselves.</>,
  },
  {
    id: "bullseye",
    label: "BULLSEYE",
    cost: "70¤",
    description: <>All tests relying on concentration, such as sniping or using Apps, are −2DR for d10 minutes.</>,
  },
  {
    id: "cvortex",
    label: "C/VORTEX",
    cost: "70¤",
    description: <>All tests where creativity is important, such as using Nano, are −2DR for d10 minutes.</>,
  },
  {
    id: "blackout",
    label: "Blackout",
    cost: "40¤",
    description: <>Toughness DR14 or d6 damage + blinded for one hour.</>,
  },
  {
    id: "red_pain",
    label: "RED PAIN",
    cost: "40¤",
    description: <>Toughness DR12 or d10 damage.</>,
  },
  {
    id: "osleep",
    label: "Øsleep",
    cost: "30¤",
    description: <>Removes the need to sleep and rest and the negative effects of not doing so. After two days of using Osleep, test Toughness DR8 or fall unconscious. Test again each following day with +2DR.</>,
  },
  {
    id: "pink_ooze",
    label: "Pink Ooze",
    cost: "25¤",
    description: <>Stimulates all pain and pleasure receptors. Toughness DR14 or all hits received during the following 5 minutes deal an additional d4 damage.</>,
  },
  {
    id: "vurt",
    label: "Vurt",
    cost: "350¤",
    description: <>d6 hours of powerful hallucinations shared with other users. (No weaker dose available.)</>,
  },
];

// Recreational prices by drug id. Vurt has none.
const RECREATIONAL_COST = {
  red_juice: "10¤",
  adrenachrome: "15¤",
  // The source lists 30¤ / 6¤ for Sunset Chalk but also says "No weaker dose
  // available" (likely copied from Vurt). Delete this line to drop it.
  sunset_chalk: "6¤",
  miura: "20¤",
  rattle: "8¤",
  bullseye: "15¤",
  cvortex: "15¤",
  blackout: "10¤",
  red_pain: "10¤",
  osleep: "5¤",
  pink_ooze: "5¤",
};

export const DRUGS_RECREATIONAL = DRUGS
  .filter((drug) => RECREATIONAL_COST[drug.id])
  .map((drug) => ({
    id: `${drug.id}_rec`,
    label: `${drug.label} (recreational)`,
    cost: RECREATIONAL_COST[drug.id],
    dose: "recreational",
    base: drug.id, // the full-strength version
    description: (
      <>
        A weaker, recreational dose. Milder than the full effect; the GM decides how much.
        Full dose: {drug.description}
      </>
    ),
  }));

// Full dose, then its recreational dose, for each drug.
export const DRUGS_MARKET = DRUGS.flatMap((drug) => {
  const recreational = DRUGS_RECREATIONAL.find((r) => r.base === drug.id);
  return recreational ? [drug, recreational] : [drug];
});

// // Drugs - d12 table with recreational/full strength costs

// export const DRUGS = [
//   {
//     id: "red_juice",
//     label: "Red-Juice",
//     cost: "40¤ / 10¤",
//     description: <>Heals d10 HP once per day.</>,
//   },
//   {
//     id: "adrenachrome",
//     label: "aDrEnAChrOMe_hst",
//     cost: "60¤ / 15¤",
//     description: <>Heal d6 HP, +1 on all abilities for d6 rounds, then −1 until rest.</>,
//   },
//   {
//     id: "sunset_chalk",
//     label: "Sunset Chalk",
//     cost: "30¤ / 6¤",
//     description: <>Test Toughness DR14 or be unable to use violence other than in self-defense for d10 minutes.</>,
//   },
//   {
//     id: "miura",
//     label: "MIURA",
//     cost: "80¤ / 20¤",
//     description: <>Test Toughness DR12 or frenzy for d6 rounds, striking at random targets in range with the most effective weapon available. Attacks are DR10 and defense is DR14.</>,
//   },
//   {
//     id: "rattle",
//     label: "Rattle",
//     cost: "30¤ / 8¤",
//     description: <>Test Toughness DR12 or be unable to stop talking for d6×10 minutes. Users often open up about things they wish to keep to themselves.</>,
//   },
//   {
//     id: "bullseye",
//     label: "BULLSEYE",
//     cost: "70¤ / 15¤",
//     description: <>All tests relying on concentration, such as sniping or using Apps, are −2DR for d10 minutes.</>,
//   },
//   {
//     id: "cvortex",
//     label: "C/VORTEX",
//     cost: "70¤ / 15¤",
//     description: <>All tests where creativity is important, such as using Nano, are −2DR for d10 minutes.</>,
//   },
//   {
//     id: "blackout",
//     label: "Blackout",
//     cost: "40¤ / 10¤",
//     description: <>Toughness DR14 or d6 damage + blinded for one hour.</>,
//   },
//   {
//     id: "red_pain",
//     label: "RED PAIN",
//     cost: "40¤ / 10¤",
//     description: <>Toughness DR12 or d10 damage.</>,
//   },
//   {
//     id: "osleep",
//     label: "Øsleep",
//     cost: "30¤ / 5¤",
//     description: <>Removes the need to sleep and rest and the negative effects of not doing so. After two days of using Osleep, test Toughness DR8 or fall unconscious. Test again each following day with +2DR.</>,
//   },
//   {
//     id: "pink_ooze",
//     label: "Pink Ooze",
//     cost: "25¤ / 5¤",
//     description: <>Stimulates all pain and pleasure receptors. Toughness DR14 or all hits received during the following 5 minutes deal an additional d4 damage.</>,
//   },
//   {
//     id: "vurt",
//     label: "Vurt",
//     cost: "350¤",
//     description: <>d6 hours of powerful hallucinations shared with other users. (No weaker dose available.)</>,
//   },
// ];
