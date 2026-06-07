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
      <Nodes.PublicPortal
        name="HUSK & PARTS"
        tagline="Salvage. Parts. No questions."
        network="HUSK_GUEST"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Barnyard Fields — eastern edge, near Ports border",
          "Salvage, parts, and industrial components",
          "Cash only",
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
        <Nodes.HoursBanner
          hours="08:00 — 20:00"
          days="Daily"
          location="Barnyard Fields — eastern edge, near Ports border"
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Lot Radio": {
        content: <Nodes.Radio />,
      },

      "Scrap Bin": {
        content: (
          <Nodes.SmartBin
            id="husk_parts_lot_bin"
            location="Main lot"
            status="NOMINAL"
            items={[
              'flashlight',
              'cable_ties',
              'multi_tool',
              'duct_tape',
            ]}
          />
        ),
      },

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
              "Owner-operated — sole proprietor",
              "Stock records maintained manually",
              "No formal employee register",
            ]}
          />
        ),
        related_commands: {
          "Lot Camera": {
            favicon: <Icons.Camera />,
            content: (
              <Nodes.Camera
                id="husk-lot-cam"
                location="Husk & Parts — lot entrance"
                status="ACTIVE"
                coverage="Main gate and front lot"
                timeline={[
                  "This morning — owner arrived, opened gate",
                  "Yesterday afternoon — Heirs member on foot, short visit, departed",
                  "Two days ago — city vehicle slowed at gate, did not stop, continued east",
                  "Two days ago — regular customer, vehicle parts pickup",
                  "Three days ago — unknown individual, browsed lot, left without purchase",
                ]}
              />
            ),
          },

          "Personnel Files": {
            favicon: <Icons.Person />,
            content: (
              <Node
                title="HUSK & PARTS — PERSONNEL"
                notes={["Owner-operated — 1 record on file"]}
              />
            ),
            related_commands: {
              "Husk": {
                favicon: <Icons.Person />,
                content: (
                  <Nodes.PersonnelFile
                    employeeId="OWNER-001"
                    name="Husk"
                    position="Owner"
                    district="Barnyard Fields"
                    status="ACTIVE"
                  />
                ),
              },
            },
          },

          "Back Lot Inventory": {
            favicon: <Icons.Inventory />,
            content: (
              <Nodes.Inventory
                title="Husk & Parts — Back Lot"
                subtitle="Unlisted stock"
                items={[
                  {
                    label: "Hazard suit components (partial)",
                    condition: "Damaged",
                    note: "Salvaged. Patchable with basic tools.",
                  },
                  {
                    label: "Industrial cutting equipment",
                    condition: "Worn",
                    note: "Plasma cutter and torch. Heavy use wear.",
                  },
                  {
                    label: "Portable generator (small)",
                    condition: "Good",
                    note: "Clean running. Approx 8 hour runtime.",
                  },
                  {
                    label: "Rope and rigging (assorted)",
                    condition: "Worn",
                    note: "Various lengths and gauges.",
                  },
                  {
                    label: "CY_Sanitation uniform (x3)",
                    condition: "Damaged",
                    note: "Old stock. Origin unlisted.",
                  },
                ]}
                note="Back lot items not listed in public inventory."
              />
            ),
          },

          "Office Workstation": {
            content: (
              <Nodes.Workstation>
                <Nodes.EncryptedMessage
                  messages={[
                    "Monthly arrangement confirmed. Same amount. Same day. Don't be late this time.",
                  ]}
                />
              </Nodes.Workstation>
            ),
          },

          "Office Safe": {
            favicon: <Icons.Lock />,
            password: {
              pw: "rust",
              hint: "What everything here eventually becomes",
              lockType: 'safe',
            },
            content: (
              <Nodes.Safe
                id="husk-parts-office-safe"
                model="DS-100"
                location="Back office"
                security="PIN"
                physical={[
                  {
                    id: "husk_cash",
                    label: "Cash float",
                    description: "65¤ — mixed bills, end of week take",
                    value: 65,
                    isCredits: true,
                  },
                  {
                    id: "husk_credchip",
                    label: "Credchip",
                    description: "30¤ — emergency backup",
                    value: 30,
                    isCredits: true,
                  },
                  {
                    id: "husk_photo",
                    label: "Photograph",
                    description: "Two people, somewhere green. Not the Fields.",
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
        <Line span smoke> · Independent fuel depot. Barnyard Fields.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="DEPOT 9"
        tagline="Fuel. Power. No loyalty required."
        network="DEPOT9_PUBLIC"
        signalStrength="medium"
        status="OPEN 24/7"
        statusColor="neon"
        notes={[
          "Vehicle fuel, power cell charging, RCD top-up",
        ]}
        theme="casual"
      >
        <InsetBox title="SERVICES:">
          <Line neon bullet>Vehicle fuel — standard and synth blend</Line>
          <Line neon bullet>Power cell charging — all formats</Line>
          <Line neon bullet>RCD charging — 1¤ flat</Line>
          <Line neon bullet>Basic vehicle supplies — oil, tape, cable ties</Line>
        </InsetBox>
        <Nodes.HoursBanner
          hours="24/7"
          days="Every Day"
          location="Barnyard Fields — main road in from the Ports border"
          note="Attendant hours: 06:00-22:00. Automated overnight."
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Depot ATM": {
        favicon: <Icons.ATM />,
        content: (
          <Nodes.ATM
            id="depot9-atm"
            location="Depot 9 — front office"
            credits={40}
            lastService="Last week"
            transactions={[
              "This morning — Withdrawal: 20¤",
              "Yesterday — Withdrawal: 60¤",
              "Yesterday — Balance inquiry",
              "Two days ago — Withdrawal: 100¤",
              "Three days ago — city quarantine vehicle — Withdrawal: 40¤",
              "Three days ago — Heirs convoy — Withdrawal: 80¤ (x3)",
            ]}
          />
        ),
      },

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
              "City-registered independent operation",
              "Fuel transaction logs maintained 90 days",
            ]}
          />
        ),
        related_commands: {
          "Personnel Files": {
            favicon: <Icons.Person />,
            content: (
              <Node
                title="DEPOT 9 — PERSONNEL"
                notes={["1 registered staff member"]}
              />
            ),
            related_commands: {
              "Attendant": {
                favicon: <Icons.Person />,
                content: (
                  <Nodes.PersonnelFile
                    employeeId="STAFF-001"
                    name="[Unknown — ask around]"
                    position="Depot Attendant"
                    department="Independent"
                    district="Barnyard Fields"
                    notes={[
                      "Sole registered employee",
                      "Operating continuously — long tenure",
                      "City fuel depot certification current",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
            },
          },

          "Attendant's Terminal": {
            content: (
              <Nodes.Workstation>
                <Nodes.EncryptedMessage
                  messages={[
                    "Anonymous — no sender ID",
                    "Plate: CY-447-VRK. Came through Tuesday night, no markings, no stop. Just slow. Write it down.",
                  ]}
                />
              </Nodes.Workstation>
            ),
          },

          "Attendant's Safe": {
            favicon: <Icons.Lock />,
            password: {
              pw: "pump",
              hint: "What you do to get fuel out",
              lockType: 'safe',
            },
            content: (
              <Nodes.Safe
                id="depot9-attendant-safe"
                model="DS-100"
                location="Front office — under desk"
                security="PIN"
                physical={[
                  {
                    id: "depot9_cash",
                    label: "End of shift cash",
                    description: "80¤ — daily float",
                    value: 80,
                    isCredits: true,
                  },
                  {
                    id: "depot9_notebook",
                    label: "Notebook",
                    description: "Handwritten. Plate numbers, times, descriptions. Weeks of entries.",
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
      <Nodes.PublicPortal
        name="THE STAND"
        tagline="Noodles. Hot. Now."
        network="THESTAND_OPEN"
        status="OPEN"
        statusColor="neon"
        theme="casual"
        notes={[
          "Barnyard Fields — fixed location, decades of operation",
          "One item. No substitutions.",
        ]}
      >
        <InsetBox color="smoke" title="NOODLE BOWL — 12¤:">
          <Line smoke bullet>Synth pork broth</Line>
          <Line smoke bullet>Hand-pulled noodles</Line>
          <Line smoke bullet>Soft egg, scallions, chili oil</Line>
        </InsetBox>
        <Nodes.HoursBanner
          hours="10:00 — Supplies run out"
          days="Every Day (weather permitting)"
          location="Barnyard Fields"
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Stand Radio": {
        content: <Nodes.Radio />,
      },

      "Internal Access": {
        password: {
          pw: "oodles of noodles",
          hint: "So many noodles",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="THE STAND — INTERNAL"
            notes={[
              "Sole proprietor — owner operated",
              "No formal staff register",
              "Cash only — no transaction records",
            ]}
          />
        ),
        related_commands: {
          "Personnel Files": {
            related_commands: {
              "The Owner": {
                favicon: <Icons.Person />,
                content: (
                  <Nodes.PersonnelFile
                    employeeId="OWNER-001"
                    position="Owner"
                    district="Barnyard Fields"
                    notes={[
                      "No violations or citations on record",
                      "Business predates current district zoning records",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
            },
          },

          "Counter Safe": {
            favicon: <Icons.Lock />,
            password: {
              pw: "noodle",
              hint: "What he serves",
              lockType: 'safe',
            },
            content: (
              <Nodes.Safe
                id="the-stand-counter-safe"
                model="DS-100"
                location="Under the counter"
                security="PIN"
                physical={[
                  {
                    id: "stand_cash",
                    label: "Daily take",
                    description: "55¤ — coins and small bills",
                    value: 55,
                    isCredits: true,
                  },
                  {
                    id: "quarantine_keycard",
                    label: "Old keycard",
                    description: "City quarantine authority. Decades old. Wrapped in cloth. No label.",
                  },
                  {
                    id: "stand_lighter",
                    label: "Lighter",
                    description: "Worn smooth. Military markings, mostly rubbed off.",
                  },
                ]}
              />
            ),
          },

          "Counter Bin": {
            content: (
              <Nodes.SmartBin
                id="the_stand_counter_bin"
                location="Behind counter"
                status="NOMINAL"
                items={[
                  'thermos',
                  'painkillers',
                  'bandages',
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
// COMBINED EXPORT
// ============================================================================

export const BARNYARD_FIELDS_AREA_COMMANDS = {
  ...BARNYARD_SCRAPYARD_COMMANDS,
  ...BARNYARD_FUEL_STATION_COMMANDS,
  ...BARNYARD_NOODLE_STAND_COMMANDS,
};

export default BARNYARD_FIELDS_AREA_COMMANDS;
