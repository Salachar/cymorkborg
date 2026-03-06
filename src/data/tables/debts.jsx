// Debt - Character owes money (page 61)

// Debt amount formula: 3d6×1,000¤
// How badly do they want it back? Roll d6: 1-6 = Very

export const DEBT_TO_WHOM = [
  {
    id: "crime_syndicate",
    label: "A Crime Syndicate",
    description: <>Organized crime wants their money back.</>,
  },
  {
    id: "hacker_collective",
    label: "An Anonymous Hacker Collective",
    description: <>Digital vigilantes tracking you.</>,
  },
  {
    id: "distant_relative",
    label: "Your Distant Relative, a Corrupt Politician's Assistant",
    description: <>Family connections with political leverage.</>,
  },
  {
    id: "childhood_bully",
    label: "A Gang Run by Your Childhood Bully",
    description: <>They remember you and have a score to settle.</>,
  },
  {
    id: "unknown_benefactor",
    label: "An Unknown Benefactor Signing Their Messages with YN",
    description: <>Mysterious patron with unclear motives.</>,
  },
  {
    id: "death_cult",
    label: "A Death Cult Run by a Board Member from a Powerful Corp",
    description: <>Corporate power mixed with fanaticism.</>,
  },
  {
    id: "roadrunner_clan",
    label: "A Roadrunner Clan Who May Request Services and Housing",
    description: <>They may demand favors as long as debt is unpaid.</>,
  },
  {
    id: "seedy_club",
    label: "The Owner of a Seedy Club or Dive Bar",
    description: <>Local establishment with dangerous connections.</>,
  },
  {
    id: "fixer",
    label: "A Fixer with Cops on Their Payroll",
    description: <>Connected to law enforcement.</>,
  },
  {
    id: "hospitalized_trust",
    label: "Someone You Trust, Hospitalized with Increasing Medical Bills",
    description: <>Personal connection with mounting expenses.</>,
  },
  {
    id: "ai_cluster",
    label: "A Semi-Sentient AI Cluster Slowly Building Up Its Influence",
    description: <>Digital entity with growing power.</>,
  },
  {
    id: "seccorp",
    label: "A Small but Extremely Violent SecCorp",
    description: <>Private security with no restraint.</>,
  },
];

export const DEBT_URGENCY = [
  {
    id: "not_urgent",
    label: "Not Urgent",
    description: <>They'll get around to collecting... eventually. You've got time.</>,
  },
  {
    id: "somewhat_urgent",
    label: "Somewhat Urgent",
    description: <>They're starting to ask questions. Better pay soon.</>,
  },
  {
    id: "moderately_urgent",
    label: "Moderately Urgent",
    description: <>They're getting impatient. Expect a visit if you don't pay up. </>,
  },
  {
    id: "urgent",
    label: "Urgent",
    description: <>They're done waiting. Time to pay or face consequences.</>,
  },
  {
    id: "quite_urgent",
    label: "Quite Urgent",
    description: <>Collectors are already looking for you. Pay NOW.</>,
  },
  {
    id: "very_urgent",
    label: "Very Urgent",
    description: <>They want their money back NOW. Violence is imminent.</>,
  },
];
