import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  Camera,
  CommunityBoard,
  HoursBanner,
  Inventory,
  Node,
  PersonnelFile,
  PublicPortal,
} from "@terminal/retcomdevice";

// ============================================================================
// SCRAPYARD
// ============================================================================

export const BARNYARD_SCRAPYARD_COMMANDS = {
  "Husk & Parts": {
    favicon: <Icons.Wrench />,
    preview: (
      <NodePreview>
        <Line span smoke> · Scrap and salvage. Barnyard Fields. Cash only, no questions.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="HUSK & PARTS"
        tagline="Salvage. Parts. No questions."
        network="HUSK_GUEST"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Cash only — no credchip trail",
          "Owner on site most hours",
        ]}
        theme="casual"
      >
        <InsetBox title="STOCK (ROTATING):">
          <Line neon bullet>Vehicle frames and parts — various condition</Line>
          <Line neon bullet>Industrial pipe and fittings</Line>
          <Line neon bullet>Electrical components — unsorted</Line>
          <Line neon bullet>Salvaged cyberware components — condition unknown</Line>
          <Line yellow bullet>Specialist parts available on request</Line>
        </InsetBox>
        <HoursBanner
          hours="08:00 — 20:00"
          days="Daily"
          location="Barnyard Fields — eastern edge, near Ports border"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "scrapheap",
          hint: "What this place is",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="HUSK & PARTS — INTERNAL"
            notes={[
              "Family operation — owner runs it alone with rotating casual labor",
              "Actively looking for reliable non-Heirs connections",
            ]}
          />
        ),
        related_commands: {
          "Lot Camera": {
            favicon: <Icons.Camera />,
            content: (
              <Camera />
            )
          },

          "Personnel Files": {
            favicon: <Icons.Person />,
            content: (
              <Node
                title="HUSK & PARTS - PERSONNEL RECORDS"
                subtitle="EMPLOYEE ACCESS GRANTED"
                notes={[
                  "SETUP PROCESS INCOMPLETE - DATA MISSING"
                ]}
              />
            ),
            related_commands: {
              "Owner": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="OWNER-001"
                    name="[Unknown — ask around]"
                    position="Owner / Operator"
                    department="Independent Salvage"
                    district="Barnyard Fields"
                    notes={[
                      "Pragmatic survivor — no ideology, just business",
                      "Pays Heirs tribute to keep operating, resents it quietly",
                      "Knows everyone moving through the Fields — good source of local intel",
                      "Will work with anyone who pays and doesn't bring trouble",
                      "Has a soft spot for people the Heirs are making life hard for",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
            },
          },

          "Back Lot Inventory": {
            favicon: <Icons.Inventory />,
            content: (
              <Inventory
                internal
                title="Stock Notes"
                items={[
                  {
                    label: "Hazard suit components (partial)",
                    condition: "Damaged",
                    description: "Salvaged from quarantine perimeter. Patchable.",
                  },
                  {
                    label: "Industrial cutting equipment",
                    condition: "Worn",
                    description: "Plasma cutter, plasma torch. Would cut through plastic sheathing.",
                  },
                  {
                    label: "Portable generator (small)",
                    condition: "Good",
                    description: "Runs clean. Good for 8 hours.",
                  },
                  {
                    label: "Rope and rigging (assorted)",
                    condition: "Worn",
                    description: "Various lengths. Would get someone over a wall.",
                  },
                  {
                    label: "Old CY_Sanitation uniform (x3)",
                    condition: "Damaged",
                    description: "Decades old. Someone's been trading these out of the quarantine zone.",
                  },
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
// FUEL STATION
// ============================================================================

export const BARNYARD_FUEL_STATION_COMMANDS = {
  "Depot 9": {
    favicon: <Icons.Fuel />,
    preview: (
      <NodePreview>
        <Line span smoke> · Independent fuel depot. Barnyard Fields. Everyone stops here eventually.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="DEPOT 9"
        tagline="Fuel. Power. No loyalty required."
        network="DEPOT9_PUBLIC"
        signalStrength="medium"
        status="OPEN 24/7"
        statusColor="neon"
        notes={[
          "Barnyard Fields — main road in from the Ports border",
          "Vehicle fuel, power cell charging, RCD top-up",
          "Used by city workers, SecCorps, Heirs, and everyone between",
          "Neutral by necessity — nobody burns down the fuel depot",
        ]}
        theme="casual"
      >
        <InsetBox title="SERVICES:">
          <Line neon>▸ Vehicle fuel — standard and synth blend</Line>
          <Line neon>▸ Power cell charging — all formats</Line>
          <Line neon>▸ RCD charging — 5¤ flat</Line>
          <Line neon>▸ Basic vehicle supplies — oil, tape, cable ties</Line>
          <Line yellow>▸ Attendant on site 06:00–22:00, automated overnight</Line>
        </InsetBox>
        <HoursBanner
          hours="24/7 (automated overnight)"
          days="Every Day"
          location="Barnyard Fields"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "ninetyoctane",
          hint: "Fuel grade",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="DEPOT 9 — INTERNAL"
            notes={[
              "City-registered independent — technically legitimate",
              "Attendant takes informal payments for information, blind eyes, early warnings",
              "Knows every vehicle and regular that moves through Barnyard Fields",
              "Has been approached by Heirs, SecCorps, and others — plays all sides carefully",
              "One rule: never give up a customer mid-transaction",
            ]}
          />
        ),
        related_commands: {
          "Personnel Files": {
            favicon: <Icons.Person />,
            content: (
              <Node
                title="DEPOT 9 - PERSONNEL RECORDS"
                subtitle="EMPLOYEE ACCESS GRANTED"
                notes={[
                  "SETUP PROCESS INCOMPLETE - DATA MISSING"
                ]}
              />
            ),
            related_commands: {

              "Attendant": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="STAFF-001"
                    name="[Unknown — ask around]"
                    position="Depot Attendant / De Facto Owner"
                    department="Independent"
                    district="Barnyard Fields"
                    notes={[
                      "Runs the depot like a city worker — calm, professional, unbothered",
                      "Accepts bribes as a matter of course, never solicits them",
                      "Will not sell out a customer while they're still at the pump",
                      "Has seen everything pass through this area for years — encyclopedic local knowledge",
                      "Quietly despises the Heirs but shows nothing",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

            },
          },
        },
      },
    },
  },
};

// ============================================================================
// NOODLE STAND
// ============================================================================

export const BARNYARD_NOODLE_STAND_COMMANDS = {
  "The Stand": {
    favicon: <Icons.Noodles />,
    preview: (
      <NodePreview>
        <Line span smoke> · Been here since before the outbreak.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="THE STAND"
        tagline="Noodles. Hot. Now."
        network="THESTAND_OPEN"
        status="OPEN"
        statusColor="neon"
        theme="casual"
        notes={[
          "No menu, noodle bowl is the only, no substitutions"
        ]}
      >
        <InsetBox color="smoke" title="NOODLE BOWL:">
          <Line smoke bullet>Synth pork broth — rich, clean</Line>
          <Line smoke bullet>Hand-pulled noodles</Line>
          <Line smoke bullet>Soft egg, scallions, chili oil</Line>
          <Line yellow bullet bold>12¤</Line>
        </InsetBox>
        <HoursBanner
          hours="10:00 — Supplies run out"
          days="Every Day (weather permitting)"
          location="Barnyard Fields"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "oodles of noodles",
          hint: "So many noodles",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="DEPOT 9 — INTERNAL"
            notes={[
              "City-registered independent — technically legitimate",
              "Attendant takes informal payments for information, blind eyes, early warnings",
              "Knows every vehicle and regular that moves through Barnyard Fields",
              "Has been approached by Heirs, SecCorps, and others — plays all sides carefully",
              "One rule: never give up a customer mid-transaction",
            ]}
          />
        ),
        related_commands: {
          "Personnel Files": {
            favicon: <Icons.Person />,
            content: (
              <Node
                title="THE STAND - PERSONNEL RECORDS"
                subtitle="EMPLOYEE ACCESS GRANTED"
                notes={[
                  "SETUP PROCESS INCOMPLETE - DATA MISSING"
                ]}
              />
            ),
            related_commands: {

              "The Owner": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="OWNER-001"
                    name="[Known only as the Cook]"
                    position="Owner / Cook"
                    department="Independent"
                    district="Barnyard Fields — permanent fixture"
                    notes={[
                      "Has operated this stand since before the CY_Sanitation quarantine",
                      "Heavily chromed — military-grade augments, clearly veteran hardware",
                      "Will discuss the outbreak if asked — was present during the initial response",
                      "Fought the infected in the early hours — describes them as corp workers, not city staff",
                      "Never understood why city workers weren't among the infected — always bothered him",
                      "The city's official story doesn't add up to him — too clean, too convenient",
                      "Respected by everyone in the Fields including the Heirs — nobody touches the stand",
                      "Doesn't ask where you've been or where you're going",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

            },
          },
        },
      },
    },
  },
};

// ============================================================================
// COMBINED EXPORT
// ============================================================================

export const BARNYARD_FIELDS_AREA_COMMANDS = {
  ...BARNYARD_SCRAPYARD_COMMANDS,
  ...BARNYARD_FUEL_STATION_COMMANDS,
  ...BARNYARD_NOODLE_STAND_COMMANDS,
};

export default BARNYARD_FIELDS_AREA_COMMANDS;
