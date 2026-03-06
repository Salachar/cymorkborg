import BountyCard from './BountyCard';

export default {
  title: 'Terminal/BountyCard',
  component: BountyCard,
};

// Steel Jackhammer from Reaper Repo
export const BlankProps = () => (
  <BountyCard />
);

// Steel Jackhammer from Reaper Repo
export const SteelJackhammer = () => (
  <BountyCard
    id="BOUNTY-2068-0147"
    name="Steel Jackhammer"
    alias="The Hammer"
    credits={5000}
    sponsor="Doc Joy (SvÀrta Reaperdoc)"
    deadline="36 hours"
    status="ACTIVE"
    image={1}

    hp={12}
    armor="None"
    weapons={["Jackhammer Punch D6"]}
    specialAbilities={["On 5+ damage, attack again"]}

    lastSeen="South Central Penthouse"
    knownAssociates={["Alliansen Inc.", "Killmatch Prime League"]}
    notes="Target is the chrome legs, not elimination. Legs recently installed by Alliansen Inc. sponsor. Any damage to legs results in pay deduction."
  />
);

// Low threat target
export const SmallTimeDealerBounty = () => (
  <BountyCard
    id="BOUNTY-2068-0089"
    name="Marcus\Slip\Chen"
    alias="Slip"
    credits={1200}
    sponsor="Virid Vipers"
    deadline="7 days"
    status="ACTIVE"

    hp={4}
    armor="StyleGuard -D2"
    weapons={["9mm pistol D6a"]}
    specialAbilities={[]}

    lastSeen="Ports District - Near abandoned docks"
    knownAssociates={["Various street dealers", "Anonymous buyers"]}
    notes="Skimmed product from Virid Vipers shipment. Known to run at first sign of trouble. Prefers crowded areas."
  />
);

// High threat - Thugger from adventure
export const ThuggerBounty = () => (
  <BountyCard
    id="BOUNTY-2068-0201"
    name="Thugger"
    credits={12000}
    sponsor="TG Labs (Anonymous)"
    deadline="48 hours"
    status="ACTIVE"

    hp={9}
    armor="Skinhard -D2"
    weapons={["Mollys D6"]}
    specialAbilities={[
      "Electro-taurs: Charge attack D10 + knockdown",
      "Cyberspine: Attacks twice per round"
    ]}

    lastSeen="Killmatch training facility - Central District"
    knownAssociates={["Killmatch Prime League", "Various athletes"]}
    notes="11-month win streak. Cocky, arrogant. Never backs down. Extremely fast reaction time due to cyberspine modifications. Approach with caution."
  />
);

// Critical threat - Goliathess
export const GoliathessBounty = () => (
  <BountyCard
    id="BOUNTY-2068-0233"
    name="Goliathess"
    credits={18000}
    sponsor="Classified"
    status="ACTIVE"

    hp={18}
    armor="StoneSkin™ -D4"
    weapons={["Stone fist D8"]}
    specialAbilities={[
      "Berserker: At 9 HP, attacks twice per round",
      "Second berserk attack deals D10 damage"
    ]}

    lastSeen="Cave Club - Main Floor"
    knownAssociates={["Killmatch circuit", "Drama-focused media outlets"]}
    notes="Up-and-coming killmatch star. Extremely durable. Do NOT engage when injured - berserker mode makes her exponentially more dangerous. Bring heavy firepower and backup."
  />
);

// Claimed bounty
export const ClaimedBounty = () => (
  <BountyCard
    id="BOUNTY-2067-1156"
    name="Razor\Rodriguez"
    credits={3500}
    sponsor="SecCorp Delta"
    status="CLAIMED"

    hp={8}
    armor="Rough -D4"
    weapons={["Filament knife D6", "Ancient revolver D8"]}
    specialAbilities={[]}

    lastSeen="Mosscroft - Warehouse District"
    knownAssociates={["Local gang", "Black market dealers"]}
    notes="Data theft from SecCorp facility. Bounty claimed 2068-01-15."
  />
);

// Hacker target - low HP but dangerous tech
export const HackerBounty = () => (
  <BountyCard
    id="BOUNTY-2068-0178"
    name="Raze"
    alias="RazeCD"
    credits={8500}
    sponsor="Alliansen Inc. Security"
    deadline="72 hours"
    status="ACTIVE"

    hp={4}
    armor="Tech overall -D2"
    weapons={["Smartgun D10"]}
    specialAbilities={[
      "Tech overall: Auto-injects Red-juice (+D10 HP) at ≤1 HP",
      "RazeCD App: Floods D3 targets with holovids, +2DR attacks (+4DR vs Raze)"
    ]}

    lastSeen="Data center - Location unknown"
    knownAssociates={["Anonymous hacker collective", "Killmatch betting rings"]}
    notes="Greedy hacker with gambling problem. Physically weak but tech makes her dangerous. Disable her apps first. Known to have corporate data on multiple entities."
  />
);

// Nano-user threat
export const NanoUserBounty = () => (
  <BountyCard
    id="BOUNTY-2068-0194"
    name="Master Crimson"
    credits={15000}
    sponsor="Corporate Council"
    status="ACTIVE"

    hp={12}
    armor="None"
    weapons={["Injectors D2 + Red Pain (DR12 or D10 damage)"]}
    specialAbilities={[
      "Rust dust: Spits rust-red cloud, +2DR to attacks/defense for D4 rounds"
    ]}

    lastSeen="Various killmatch venues"
    knownAssociates={["Arvtagarna (Nano supremacist group)", "Killmatch C-list veterans"]}
    notes="Member of Arvtagarna, breakout group from Heirs of Kergoz. Seeks Nano dominance, not eradication. Bored of killmatch circus. Extremely unpredictable. Nano abilities make standard tactics ineffective."
  />
);
