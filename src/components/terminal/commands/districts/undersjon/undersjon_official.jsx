import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  Node,
  Nodes,
} from "@terminal/retcomdevice";

// ============================================================================
// ONGO GABLOGIAN'S
// ============================================================================

export const ONGO_GABLOGIAN_COMMANDS = {
  "Ongo Gablogian's": {
    favicon: <Icons.Stars />,
    preview: (
      <NodePreview>
        <Line span smoke> · High fashion. Unit 3, Undersjon. By appointment or by luck.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="ONGO GABLOGIAN'S"
        tagline="Wearable art. Unwearable prices."
        network="ONGO_GUEST"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Unit 3, Undersjon — north corridor",
          "Bespoke and ready-to-wear fashion — proprietor: Ongo Gablogian",
          "Alterations and commissions accepted",
          "No returns — all sales are final and frankly a privilege",
        ]}
        theme="fancy"
      >
        <InsetBox title="CURRENT COLLECTIONS:">
          <Line neon bullet>The Reclamation Line — industrial salvage meets haute couture</Line>
          <Line neon bullet>Submerged — lake-inspired, moisture resistant, aspirational</Line>
          <Line yellow bullet>The Momentum Collection — one rack, back left, marked down 90%</Line>
          <Line smoke small>The Momentum Collection was designed by our in-house designer and has not moved in fourteen months.</Line>
        </InsetBox>
        <Nodes.HoursBanner
          hours="11:00 — 19:00"
          days="Tue-Sat"
          location="Unit 3 — north corridor, Undersjon"
          note="Closed Monday and Sunday. Ongo does not explain this."
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Current Stock": {
        favicon: <Icons.Inventory />,
        content: (
          <Nodes.Inventory
            title="Ongo Gablogian's — Floor Stock"
            subtitle="Current season — subject to Ongo's discretion"
            items={[
              {
                label: "The Reclamation Line — jacket (x4)",
                condition: "New",
                value: "380¤",
                description: "Structural salvage panelling over synth-silk base. Very heavy. Ongo calls this intentional.",
              },
              {
                label: "Submerged — full suit (x2)",
                condition: "New",
                value: "520¤",
                description: "Lake-water teal. Moisture-wicking. Looks expensive. Is expensive.",
              },
              {
                label: "The Momentum Collection — assorted (x11)",
                condition: "New",
                value: "40¤ ea (was 400¤)",
                description: "Designed by D. Reynolds, in-house. Structural issues. Seams separate under moderate stress. One caught fire during a fitting — cause undetermined. Still technically wearable.",
              },
              {
                label: "Bespoke commission — deposit required",
                condition: "N/A",
                value: "800¤+",
                description: "Consultation with Ongo required. He will tell you what you want.",
              },
            ]}
            footer="All sales final. Ongo does not do returns. Ongo does not do apologies."
          />
        ),
      },

      "Community Board": {
        favicon: <Icons.Bulletin />,
        content: (
          <Nodes.CommunityBoard
            name="ONGO GABLOGIAN'S — NOTICE"
            location="Near the entrance, mounted crookedly"
            posts={[
              { text: "The Momentum Collection is still available. It is still art. The price reflects this.", color: "yellow" },
              { text: "Alterations by appointment only. D. Reynolds is no longer handling alterations. Or anything else.", color: "smoke" },
              { text: "Unit 3 expansion is under review. Neighbouring units have been informed. This is not a negotiation.", color: "red" },
              { text: "Ongo Gablogian is not responsible for structural opinions expressed by neighbouring tenants.", color: "smoke" },
            ]}
            vibe="Aggressively self-assured. Nobody is winning an argument with this board."
          />
        ),
      },

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "momentum",
          hint: "The collection that will not sell",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="ONGO GABLOGIAN'S — INTERNAL"
            notes={[
              "Owner-operated — Ongo Gablogian, sole proprietor",
              "Former in-house designer: D. Reynolds — contract terminated",
              "Unit 3 — current footprint at structural maximum per Undersjon tenancy agreement",
              "Expansion application submitted — disputed by Units 2 and 4",
            ]}
          />
        ),
        related_commands: {
          "Personnel Files": {
            favicon: <Icons.Person />,
            content: (
              <Node
                title="ONGO GABLOGIAN'S — PERSONNEL"
                notes={["2 records on file — 1 active"]}
              />
            ),
            related_commands: {
              "Ongo Gablogian": {
                favicon: <Icons.Person />,
                content: (
                  <Nodes.PersonnelFile
                    employeeId="OWNER-001"
                    name="Ongo Gablogian"
                    position="Proprietor / Lead Designer"
                    district="Undersjon — Unit 3"
                    notes={[
                      "Self-described as the most important artist working in wearable media today",
                      "Has not left Undersjon in four years — claims the pressure suits him",
                      "Expansion dispute with Units 2 and 4 ongoing — described by Ongo as 'a creative difference'",
                      "The Momentum Collection was not his design and he will make this clear",
                      "Believes D. Reynolds sabotaged the collection deliberately",
                      "No evidence of this. Some evidence that the collection was simply bad.",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
              "D. Reynolds": {
                favicon: <Icons.Person />,
                content: (
                  <Nodes.PersonnelFile
                    employeeId="STAFF-001"
                    name="D. Reynolds"
                    position="In-House Designer (TERMINATED)"
                    district="Unknown — no forwarding address"
                    notes={[
                      "Contract terminated following the Momentum Collection launch",
                      "Designer of the Momentum Collection — 11 units remaining unsold after 14 months",
                      "One garment caught fire during a client fitting — cause listed as 'design flaw' on the incident report",
                      "Reynolds disputed this characterisation loudly and at length",
                      "Whereabouts currently unknown",
                      "Ongo has requested removal from the personnel system three times — request denied pending termination paperwork",
                    ]}
                    status="INACTIVE"
                  />
                ),
              },
            },
          },

          "Office Safe": {
            favicon: <Icons.Lock />,
            password: {
              pw: "reclamation",
              hint: "His best collection and he knows it",
              lockType: 'safe',
            },
            content: (
              <Nodes.Safe
                id="ongo-office-safe"
                model="DS-200"
                location="Back office — behind the mood board"
                security="PIN"
                physical={[
                  {
                    id: "ongo_cash",
                    label: "Cash float",
                    description: "290¤ — mostly large bills",
                    value: 290,
                    isCredits: true,
                  },
                  {
                    id: "ongo_expansion_plans",
                    label: "Expansion plans",
                    description: "Hand-drawn. Unit 3 extending into Units 2 and 4. Structural assessment: none. Notes in margin: 'they won't say no twice.'",
                  },
                  {
                    id: "ongo_credchip",
                    label: "Credchip",
                    description: "150¤",
                    value: 150,
                    isCredits: true,
                  },
                ]}
              />
            ),
          },

          "Scrap Bin": {
            content: (
              <Nodes.SmartBin
                id="ongo-scrap-bin"
                location="Back office"
                status="NOMINAL"
                items={[
                  'duct_tape',
                  'cable_ties',
                ]}
              />
            ),
          },
        },
      },
    },
  },
};

// ============================================================================
// RETCOM ELECTRONICS
// ============================================================================

export const RETCOM_ELECTRONICS_COMMANDS = {
  "RetCom Electronics": {
    favicon: <Icons.Computer />,
    preview: (
      <NodePreview>
        <Line span smoke> · Electronics, components, and things you probably don't need. Unit 7.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="RETCOM ELECTRONICS"
        tagline="We have it. Probably."
        network="RETCOM_ELEC_GUEST"
        signalStrength="medium"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Unit 7, Undersjon — east corridor",
          "Consumer electronics, components, repair services",
          "Staff will find it. Give them a minute.",
          "Layby available — ask at counter",
        ]}
        theme="casual"
      >
        <InsetBox title="DEPARTMENTS:">
          <Line neon bullet>Consumer electronics — RCDs, tablets, comms</Line>
          <Line neon bullet>Components — cable, connectors, solder, tools</Line>
          <Line neon bullet>Repair counter — bring it in, we'll look at it</Line>
          <Line neon bullet>Clearance wall — everything 50% off, all sales final</Line>
          <Line yellow bullet>Special orders — 2 week lead time, deposit required</Line>
        </InsetBox>
        <Nodes.HoursBanner
          hours="09:00 — 20:00"
          days="Mon-Sat · Sun 10:00-17:00"
          location="Unit 7 — east corridor, Undersjon"
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Shop Inventory": {
        favicon: <Icons.Inventory />,
        content: (
          <Nodes.Inventory
            title="RetCom Electronics — Floor Stock"
            subtitle="Selected items — full catalogue at counter"
            items={[
              {
                label: "RCD-6 (refurbished)",
                condition: "Good",
                value: "120¤",
                description: "Previous gen. Fully functional. Cosmetic wear only.",
              },
              {
                label: "Comms unit — short range",
                condition: "New",
                value: "60¤",
                description: "2km range. Encrypted channel capable.",
              },
              {
                label: "Component grab bags (x20)",
                condition: "Mixed",
                value: "8¤ ea",
                description: "Assorted cable, connectors, fuses. Clearance wall.",
              },
              {
                label: "Soldering kit",
                condition: "New",
                value: "35¤",
                description: "Basic. Does the job.",
              },
              {
                label: "Portable signal booster",
                condition: "Worn",
                value: "45¤",
                description: "Extends RCD signal in low-coverage areas. Undersjon tested.",
              },
            ]}
            footer="Repair counter: bring it in. Turnaround 2-5 days. No guarantee on pre-Incident hardware."
          />
        ),
      },

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "aisle four",
          hint: "Where the good stuff actually is",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="RETCOM ELECTRONICS — INTERNAL"
            notes={[
              "Owner-operated — 2 staff including owner",
              "Repair backlog: 11 items, estimated 3 week clearance",
              "Clearance wall restocked weekly",
              "Special order account: active with 3 suppliers",
            ]}
          />
        ),
        related_commands: {
          "Personnel Files": {
            favicon: <Icons.Person />,
            content: (
              <Node
                title="RETCOM ELECTRONICS — PERSONNEL"
                notes={["2 staff on register"]}
              />
            ),
            related_commands: {
              "Owner": {
                favicon: <Icons.Person />,
                content: (
                  <Nodes.PersonnelFile
                    employeeId="OWNER-001"
                    name="Tal Brix"
                    position="Owner"
                    district="Undersjon — Unit 7"
                    notes={[
                      "Opened RetCom Electronics in Year 8 of construction — one of the earlier tenants",
                      "Seniority in the east corridor gives him informal dispute authority",
                      "Has mediated three expansion disputes in the past two years",
                      "Quiet about how those disputes resolved",
                      "Repair counter is his domain — will not let staff touch it",
                      "Has a particular interest in pre-Incident military comms equipment",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
            },
          },

          "Repair Log": {
            favicon: <Icons.Files />,
            content: (
              <Node
                title="REPAIR COUNTER — CURRENT LOG"
                notes={[
                  "Item 1: RCD-5, cracked casing, water damage — owner: Unit 12 tenant — Est. ready: 3 days",
                  "Item 2: Comms unit, no power — owner: unknown, left at counter — Est. ready: pending owner contact",
                  "Item 3: Tablet, smashed screen — owner: Floppy (Unit B2) — Est. ready: tomorrow",
                  "Item 4-11: Component repairs, various — Est. ready: 1-3 weeks",
                ]}
              />
            ),
          },

          "Office Bin": {
            content: (
              <Nodes.SmartBin
                id="retcom-elec-bin"
                location="Repair counter — under desk"
                status="NOMINAL"
                items={[
                  'multi_tool',
                  'cable_ties',
                  'earplugs',
                ]}
              />
            ),
          },
        },
      },
    },
  },
};

// ============================================================================
// FOOD COURT
// ============================================================================

export const FOOD_COURT_COMMANDS = {
  "Food Court": {
    favicon: <Icons.Food />,
    preview: (
      <NodePreview>
        <Line span smoke> · Central atrium. Eight stalls. ATM. Vending. The smell of synth-grease and ambition.</Line>
      </NodePreview>
    ),
    content: (
      <Node
        title="UNDERSJON FOOD COURT"
        subtitle="Central Atrium — Ground Level"
        notes={[
          "Eight stall positions — six currently occupied",
          "Seating for approximately 120 — usually about 40",
          "ATM and vending machine near the east entrance",
          "Lake water leak above stall 4 — management aware, bucket provided",
          "The smell is permanent. You stop noticing it.",
        ]}
      />
    ),
    related_commands: {

      "Stall 1 — Luk's Noodles": {
        favicon: <Icons.Noodles />,
        content: (
          <Nodes.PublicPortal
            name="LUK'S NOODLES"
            tagline="Hot. Fast. No substitutions."
            network="LUKS_OPEN"
            signalStrength="weak"
            status="OPEN"
            statusColor="neon"
            notes={[
              "Stall 1 — Food Court, Undersjon",
              "Busiest stall in the court — queue forms before opening",
              "One item. One size. One price.",
            ]}
            theme="casual"
          >
            <InsetBox title="THE MENU:">
              <Line neon bullet>Noodle bowl — 10¤</Line>
              <Line smoke small>Synth pork broth, hand-pulled noodles, soft egg, chili oil. That's it.</Line>
            </InsetBox>
            <Nodes.HoursBanner
              hours="10:00 — Sold out (usually 14:00)"
              days="Daily"
              location="Stall 1 — Food Court"
              note="Gets there early or doesn't get one."
            />
          </Nodes.PublicPortal>
        ),
        related_commands: {
          "Stall Radio": {
            content: <Nodes.Radio />,
          },
          "Counter Bin": {
            content: (
              <Nodes.SmartBin
                id="luks-noodles-bin"
                location="Behind counter"
                status="NOMINAL"
                items={[
                  'painkillers',
                  'thermos',
                ]}
              />
            ),
          },
        },
      },

      "Stall 2 — Kessler's Grill": {
        favicon: <Icons.Food />,
        content: (
          <Nodes.PublicPortal
            name="KESSLER'S GRILL"
            tagline="Real meat. Probably."
            network="KESSLERS_OPEN"
            signalStrength="weak"
            status="OPEN"
            statusColor="neon"
            notes={[
              "Stall 2 — Food Court, Undersjon",
              "Grilled meat, flatbreads, rotating specials",
              "Loud. Smoky. The extractor fan has not worked in eight months.",
            ]}
            theme="casual"
          >
            <Nodes.Menu
              title="KESSLER'S GRILL"
              subtitle="Today's menu"
              signType="chalkboard"
              categories={[
                {
                  name: "MAINS:",
                  items: [
                    { name: "Grilled meat plate", price: "14¤" },
                    { name: "Flatbread wrap", price: "10¤" },
                    { name: "Double plate", price: "22¤" },
                  ],
                },
                {
                  name: "SIDES:",
                  items: [
                    { name: "Fried rice", price: "5¤" },
                    { name: "Pickled veg", price: "3¤" },
                  ],
                },
              ]}
              footer="No substitutions on the double plate. Kessler's rule."
            />
          </Nodes.PublicPortal>
        ),
      },

      "Stall 3 — The Bitter End": {
        favicon: <Icons.CoffeeMachine />,
        content: (
          <Nodes.PublicPortal
            name="THE BITTER END"
            tagline="Coffee. Tea. Something stronger if you ask nicely."
            network="BITTER_OPEN"
            signalStrength="weak"
            status="OPEN"
            statusColor="neon"
            notes={[
              "Stall 3 — Food Court, Undersjon",
              "Coffee, tea, pastries, light bites",
              "Only stall in the court with actual seating attached",
              "Regulars treat it as an office. The owner has stopped fighting this.",
            ]}
            theme="casual"
          >
            <Nodes.HoursBanner
              hours="07:00 — 21:00"
              days="Daily"
              location="Stall 3 — Food Court"
              note="Opens earliest. Closes latest. The owner lives here effectively."
            />
          </Nodes.PublicPortal>
        ),
        related_commands: {
          "Coffee Machine": {
            favicon: <Icons.CoffeeMachine />,
            content: (
              <Nodes.CoffeeMachine>
                <Nodes.DigitalWallet
                  id="bitter-end-coffee-wallet"
                  label="Please top up — we keep running out. — M"
                  credits={12}
                />
              </Nodes.CoffeeMachine>
            ),
          },
          "Counter Bin": {
            content: (
              <Nodes.SmartBin
                id="bitter-end-bin"
                location="Behind counter"
                status="NOMINAL"
                items={[
                  'bandages',
                  'hand_sanitizer',
                  'painkillers',
                ]}
              />
            ),
          },
        },
      },

      "Stall 4 — [VACANT]": {
        favicon: <Icons.Room />,
        content: (
          <Node
            title="STALL 4 — VACANT"
            subtitle="Food Court, Undersjon"
            notes={[
              "Previous tenant: departed 6 weeks ago — circumstances unlisted",
              "Unit available — contact Undersjon tenancy management",
              "Active water leak from ceiling — bucket in place",
              "Stall 5 has submitted an expansion application for this unit",
              "Application under review",
            ]}
            alerts={[
              "Structural assessment of ceiling leak: pending 4 months",
            ]}
          />
        ),
        related_commands: {
          "Vacant Bin": {
            content: (
              <Nodes.SmartBin
                id="stall4-vacant-bin"
                location="Behind former counter"
                status="OFFLINE"
                items={[
                  'duct_tape',
                  'flashlight',
                  'credchip',
                ]}
              />
            ),
          },
        },
      },

      "Stall 5 — Priya's": {
        favicon: <Icons.Food />,
        content: (
          <Nodes.PublicPortal
            name="PRIYA'S"
            tagline="Home cooking. Whatever that means down here."
            network="PRIYAS_OPEN"
            signalStrength="weak"
            status="OPEN — LIMITED HOURS"
            statusColor="yellow"
            notes={[
              "Stall 5 — Food Court, Undersjon",
              "Home-style cooking — menu changes daily",
              "Smaller operation — runs out early most days",
              "Expansion application submitted for Stall 4 — pending",
            ]}
            theme="casual"
          >
            <Nodes.HoursBanner
              hours="11:00 — Until sold out (varies)"
              days="Wed-Sun only"
              location="Stall 5 — Food Court"
              note="Closed Mon-Tue. Priya doesn't explain this either."
            />
          </Nodes.PublicPortal>
        ),
      },

      "Stall 6 — Vending Bay": {
        favicon: <Icons.Vending />,
        content: (
          <Node
            title="VENDING BAY"
            subtitle="Food Court — East Side"
            notes={[
              "Two vending machines and an ATM",
              "Maintained by court management — such as it is",
            ]}
          />
        ),
        related_commands: {
          "Vending Machine": {
            content: <Nodes.VendingMachine />,
            related_commands: {
              "Maintenance Access": {
                favicon: <Icons.Maintenance />,
                password: {
                  pw: "refresh",
                  hint: "What you do to restock",
                },
                content: <Node />,
                related_commands: {
                  "VendWallet": {
                    favicon: <Icons.Wallet />,
                    content: (
                      <Nodes.DigitalWallet
                        id="undersjon-vending-wallet"
                        accountHolder="Beverage Corp (vending division)"
                        credits={20}
                      />
                    ),
                  },
                },
              },
            },
          },
          "Food Court ATM": {
            favicon: <Icons.ATM />,
            content: (
              <Nodes.ATM
                id="undersjon-food-court-atm"
                location="Food Court — vending bay, east side"
                credits={60}
                lastService="Two weeks ago"
                transactions={[
                  "This morning — Withdrawal: 40¤",
                  "This morning — Balance inquiry",
                  "Yesterday — Withdrawal: 120¤",
                  "Yesterday — Withdrawal: 20¤ (x3)",
                  "Two days ago — Withdrawal: 200¤ — Ongo Gablogian",
                  "Two days ago — Failed transaction, insufficient funds",
                  "Three days ago — Withdrawal: 60¤",
                ]}
              />
            ),
          },
        },
      },

      "Food Court Board": {
        favicon: <Icons.Bulletin />,
        content: (
          <Nodes.CommunityBoard
            name="FOOD COURT NOTICE BOARD"
            location="Central atrium, near the seating"
            posts={[
              { text: "Stall 4 vacancy — applications open. Contact tenancy management. Do not contact Stall 5.", color: "neon" },
              { text: "Stall 5 expansion application is under review. Other tenants are reminded that the review process exists for a reason.", color: "yellow" },
              { text: "The extractor fan above Stall 2 will be repaired. Eventually. Please stop asking.", color: "smoke" },
              { text: "Unit 14 is reminded that load-bearing walls are load-bearing for a reason. This is the second notice.", color: "red" },
              { text: "Luk's is sold out by 14:00. Stop asking at 15:00.", color: "smoke" },
              { text: "Lost: one boot. Left foot. Size 11. No questions.", color: "pink" },
            ]}
            vibe="Functional tension. Everyone is polite. Nobody is relaxed."
          />
        ),
      },
    },
  },
};

// ============================================================================
// COMBINED EXPORT
// ============================================================================

export const UNDERSJON_OFFICAL_COMMANDS = {
  ...ONGO_GABLOGIAN_COMMANDS,
  ...RETCOM_ELECTRONICS_COMMANDS,
  ...FOOD_COURT_COMMANDS,
};

export default UNDERSJON_OFFICAL_COMMANDS;
