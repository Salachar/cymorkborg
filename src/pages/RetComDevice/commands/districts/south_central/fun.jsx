import Icons from '@utils/icons';

import {
  Line,
  Divider,
  InsetBox,
} from '@retcom/RetComComponents';

import {
  Safe,
  Jukebox,
  Node,
  PublicPortal,
  FacilityPortal,
  HoursBanner,
  Menu,
  PersonnelFile,
} from "@retcom"

export const SOUTH_CENTRAL_FUN_COMMANDS = {
  "The Golden Ratio": {
    favicon: <Icons.Fitness />,
    content: (
      <PublicPortal
        name="THE GOLDEN RATIO"
        tagline="Where Excellence Sculpts Excellence"
        notes={[
          "Membership: 50,000¤/year (waiting list: 2+ years)",
          "Personal trainers are former olympians",
          "Equipment more expensive than most apartments",
          "Valet parking, spa services, nutrition consultations included"
        ]}
        theme="fancy"
      >
        <HoursBanner
          name="Club Hours"
          hours="05:00 - 23:00"
          days="Every Day"
        />
        <InsetBox title="MEMBERSHIP TIERS:">
          <Line yellow bold>PLATINUM: 50,000¤/year</Line>
          <Line yellow>• Full club access, personal trainer (3x/week)</Line>
          <Line yellow>• Spa services, nutrition consultation</Line>
          <Line yellow>• Private locker, complimentary towel service</Line>
          <Divider />
          <Line neon bold>DIAMOND: 100,000¤/year</Line>
          <Line neon>• All Platinum benefits</Line>
          <Line neon>• Private training suite, cryotherapy chamber access</Line>
          <Line neon>• Weekly massage, personalized meal prep service</Line>
          <Divider />
          <Line cyan bold>OLYMPUS: 250,000¤/year (Limited to 50 members)</Line>
          <Line cyan>• All Diamond benefits</Line>
          <Line cyan>• Exclusive rooftop gym with city views</Line>
          <Line cyan>• Personal physician on call, experimental chrome consultations</Line>
          <Line cyan>• Access to private lounge with full bar</Line>
        </InsetBox>
        <Line smoke small>
          Your body is your temple. Make sure it's expensive enough to keep the poor people out.
        </Line>
      </PublicPortal>
    ),
    related_commands: {
      "Member Directory": {
        favicon: <Icons.Group />,
        password: {
          pw: "olympus",
          hint: "The highest membership tier",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="[MEMBER DIRECTORY]"
            notes={[
              "Total members: 487 (Platinum: 412, Diamond: 65, Olympus: 10)",
              "Waiting list: 1,847 applications",
              "Average net worth: 15M¤+",
              "Celebrity members: 23 confirmed"
            ]}
          >
            <InsetBox title="NOTABLE MEMBERS:">
              <Line neon>• 12 corporate CEOs</Line>
              <Line neon>• 8 killmatch athletes (including Steel Jackhammer - Platinum)</Line>
              <Line neon>• 5 entertainment celebrities</Line>
              <Line neon>• 3 politicians</Line>
              <Line neon>• Numerous lawyers, doctors, executives</Line>
            </InsetBox>
            <InsetBox title="OLYMPUS TIER (50 Member Cap):">
              <Line cyan>Current: 10 members (40 slots available)</Line>
              <Line yellow>Application fee: 10,000¤ (non-refundable)</Line>
              <Line yellow>Annual dues: 250,000¤</Line>
              <Line smoke small>Names withheld for privacy (ultra-wealthy demand discretion)</Line>
            </InsetBox>
          </Node>
        ),
      },

      "Locker Room Safe": {
        favicon: <Icons.Lock />,
        password: {
          pw: "platinum",
          hint: "The most common membership tier",
          lockType: 'safe',
        },
        content: (
          <Safe
            id="goldenratio-locker-447"
            model="SecureFit Locker"
            location="Platinum locker room - Locker #447"
            owner="Anonymous Member #447"
            security="Biometric (fingerprint)"
            lastAccess="This morning (workout session)"
            physical={[
              {
                id: "locker_workout_gear",
                label: "Workout clothes",
                description: "Designer athletic wear (unwashed, expensive)"
              },
              {
                id: "locker_towel",
                label: "Personal towel",
                description: "Monogrammed (initials: M.G.)"
              },
              {
                id: "locker_supplement",
                label: "Supplements",
                description: "Bottle of expensive pre-workout (probably legal)"
              },
            ]}
            digital={[
              {
                id: "locker_credchip",
                label: "Credchip",
                description: "80¤ (for smoothie bar purchases)",
                value: 80,
                isCredits: true
              },
            ]}
            notes="Standard member locker - nothing interesting"
          />
        ),
      },
    },
  },

  "Shaft & Piston": {
    favicon: <Icons.Bar />,
    content: (
      <PublicPortal
        name="SHAFT & PISTON"
        tagline="Where the people who make South Central run come to drink"
        nowPlaying="Industrial rock - The Maintenance Crew"
        notes={[
          "Cheap drinks, cheaper conversation",
          "Service workers, maintenance crews, delivery drivers",
          "No corporate executives allowed (enforced by regulars)",
          "Cash only, no credchips"
        ]}
        theme="casual"
      >
        <HoursBanner
          name="Schedule"
          hours="16:00 - 04:00"
          days="Every Day (After the day shift ends)"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Bar Menu": {
        favicon: <Icons.BarMenu />,
        content: (
          <Menu
            title="SHAFT & PISTON"
            subtitle="Service Workers' Watering Hole Since 2063"
            signType="coffee"
            categories={[
              {
                name: "DRINKS",
                items: [
                  { name: "Beer (synth, local)", price: "5¤" },
                  { name: "Whiskey (bottom shelf)", price: "8¤" },
                  { name: "Vodka (you don't want to know)", price: "7¤" },
                  { name: "Well drinks", price: "6¤" },
                  { name: "Water (from tap, free)", price: "0¤" },
                ],
              },
              {
                name: "FOOD",
                items: [
                  { name: "Pretzels (stale)", price: "Free with drink" },
                  { name: "Synth-meat sandwich", price: "8¤" },
                  { name: "Fried protein cubes", price: "10¤" },
                  { name: "Mystery stew", price: "12¤ (ask what's in it)" },
                ],
              },
            ]}
            footer="No corpo trash allowed. We check your hands for calluses."
          />
        ),
      },

      "Personnel File - Owner": {
        favicon: <Icons.Person />,
        content: (
          <PersonnelFile
            employeeId="BAR-SHAFT-001"
            name="Hank 'Wrench' Morrison"
            age={52}
            position="Owner / Bartender"
            department="Independent Hospitality"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="South Central (lives in Inbetweens)"
            emergencyContact="Maintenance Union Local 447"
            performance={82}
            notes={[
              "Former maintenance worker (30 years in the trade)",
              "Opened bar after injury forced early retirement",
              "Known for: Enforcing 'no corpos' rule with baseball bat",
              "Reputation: Fair, honest, protective of workers",
              "Bar is unofficial union meeting spot",
              "Has dirt on every building manager in South Central",
              "Motto: 'We fix their toilets. Least they can do is let us drink.'"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "Jukebox": {
        favicon: <Icons.Radio />,
        content: (
          <Jukebox />
        ),
      },

      "Bar Safe": {
        favicon: <Icons.Lock />,
        password: {
          pw: "union",
          hint: "What the workers at this bar believe in",
          lockType: 'safe',
        },
        content: (
          <Safe
            id="shaft-piston-safe"
            model="DS-200"
            location="Behind bar, floor-mounted"
            owner="Hank 'Wrench' Morrison"
            security="Combination lock (mechanical)"
            lastAccess="Last night (closing)"
            physical={[
              {
                id: "bar_cash",
                label: "Cash",
                description: "280¤ (daily receipts)",
                value: 280,
                isCredits: true
              },
              {
                id: "bar_bat",
                label: "Baseball bat",
                description: "For 'enforcing house rules' (bloodstains)"
              },
              {
                id: "bar_union_card",
                label: "Union membership card",
                description: "Maintenance Union Local 447 (expired but kept)"
              },
            ]}
            digital={[
              {
                id: "bar_credchip",
                label: "Credchip",
                description: "45¤ (emergency fund)",
                value: 45,
                isCredits: true
              },
            ]}
            notes="Wrench keeps the bat handy for when corpo types ignore the 'no executives' sign"
          />
        ),
      },
    },
  },

  "UCS SecCorps Station #7": {
    favicon: <Icons.Security />,
    content: (
      <FacilityPortal
        companyName="UNITED CITADEL SECURITY"
        tagline="Protect. Serve. Profit."
        location="South Central - Street Level Station"
        owner="UCS (United Citadel Security)"
        warnings={[
          "Armed security personnel on-site 24/7",
          "Jurisdiction: South Central District only",
          "Response time: ~2 minutes to premium clients",
          "Deadly force authorized for contract violations"
        ]}
        theme="secure"
      >
        <InsetBox title="STATION OVERVIEW:">
          <Line neon bold>One of 12 competing SecCorps in Central District</Line>
          <Line cyan>• Jurisdiction: South Central (street level to mid-rise)</Line>
          <Line cyan>• Personnel: 47 officers (3 shifts, 15-16 per shift)</Line>
          <Line cyan>• Equipment: Lethal weapons, armored vehicles, drones</Line>
          <Line cyan>• Funding: Corporate contracts + protection fees</Line>
        </InsetBox>
        <InsetBox title="SERVICE TIERS:">
          <Line yellow bold>PLATINUM CONTRACT: 10,000¤/month</Line>
          <Line yellow>• Response time: ~2 minutes</Line>
          <Line yellow>• Armed response team (4 officers minimum)</Line>
          <Line yellow>• Property protection, personal security details available</Line>
          <Divider />
          <Line neon bold>GOLD CONTRACT: 5,000¤/month</Line>
          <Line neon>• Response time: ~5 minutes</Line>
          <Line neon>• Standard patrol response (2 officers)</Line>
          <Divider />
          <Line cyan bold>SILVER CONTRACT: 2,000¤/month</Line>
          <Line cyan>• Response time: ~15 minutes (if available)</Line>
          <Line cyan>• Single officer response</Line>
          <Divider />
          <Line red bold>NO CONTRACT: Not our problem</Line>
          <Line red>• Response time: Never</Line>
          <Line red>• SecCorps will NOT respond to calls from non-clients</Line>
        </InsetBox>
        <InsetBox title="COMPETING JURISDICTIONS:">
          <Line red>UCS vs. 11 other SecCorps in Central District</Line>
          <Line red>Turf wars common - jurisdictional disputes turn violent</Line>
          <Line red>Contracts signed in blood (metaphorically, usually)</Line>
        </InsetBox>
        <Line smoke small>
          Your safety is our business. Literally. No contract? No protection.
          Welcome to private law enforcement.
        </Line>
      </FacilityPortal>
    ),
    related_commands: {
      "Duty Roster": {
        favicon: <Icons.Schedule />,
        password: {
          pw: "fragmentation",
          hint: "What happens to the grenade. And you.",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="[DUTY ROSTER - CURRENT SHIFT]"
            notes={[
              "Current shift: Day (06:00 - 18:00)",
              "Personnel on duty: 16 officers",
              "Patrol units: 4 active, 2 standby",
              "Dispatcher: 2 on duty"
            ]}
          >
            <InsetBox title="PATROL UNITS (ACTIVE):">
              <Line neon>UNIT 1: Officers Chen & Rodriguez (Sector A patrol)</Line>
              <Line neon>UNIT 2: Officers Kim & Foster (Sector B patrol)</Line>
              <Line neon>UNIT 3: Officers Patel & Volkov (Sector C patrol)</Line>
              <Line neon>UNIT 4: Officers Morrison & Silva (Sector D patrol)</Line>
            </InsetBox>
            <InsetBox title="STANDBY UNITS:">
              <Line yellow>UNIT 5: Officers Johnson & Martinez (Station, rapid response)</Line>
              <Line yellow>UNIT 6: Officers Wright & Anderson (Station, backup)</Line>
            </InsetBox>
            <InsetBox title="RECENT CALLS:">
              <Line cyan>08:30 - Platinum contract alarm (Peach Trees) - False alarm</Line>
              <Line cyan>10:15 - Gold contract disturbance - Resolved, no arrests</Line>
              <Line cyan>12:45 - Platinum contract medical emergency - Responded, EMS called</Line>
              <Line red>14:20 - Non-contract assault call - IGNORED (not our jurisdiction)</Line>
            </InsetBox>
          </Node>
        ),
      },

      "Evidence Locker": {
        favicon: <Icons.Room />,
        password: {
          pw: "ballistic",
          hint: "Going this is another way of losing your mind",
          lockType: 'vault',
        },
        content: (
          <Node
            title="[EVIDENCE LOCKER]"
            notes={[
              "Biometric access required",
              "All access logged",
              "Chain of custody maintained (theoretically)",
              "Items mysteriously disappear sometimes"
            ]}
          >
            <InsetBox title="CURRENT INVENTORY:">
              <Line neon>Case #2847: Stolen credchip (12,000¤ value) - Awaiting trial</Line>
              <Line neon>Case #2848: Illegal firearm (9mm pistol, serial filed) - Pending</Line>
              <Line neon>Case #2849: Narcotics (50 doses stim) - Confiscated, to be destroyed</Line>
              <Line yellow>Case #2850: Corporate espionage data chip - SEALED (high-profile)</Line>
            </InsetBox>
            <InsetBox title="MISSING EVIDENCE (UNSOLVED):">
              <Line red>Case #2843: 5,000¤ credchip - Disappeared from locker (no explanation)</Line>
              <Line red>Case #2844: Chrome cyberware - Missing (officer under investigation)</Line>
            </InsetBox>
            <Line smoke small>Corruption? In MY SecCorps? More likely than you'd think.</Line>
          </Node>
        ),
      },
    },
  },
};

export default SOUTH_CENTRAL_FUN_COMMANDS;
