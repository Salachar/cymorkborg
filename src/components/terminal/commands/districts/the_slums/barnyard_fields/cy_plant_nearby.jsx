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
  RCDAlert,
} from "@terminal/retcomdevice";

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
              <Camera />
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
                  <PersonnelFile
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
              <Inventory
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
        },
      },
    },
  },
};

export const BARNYARD_FUEL_STATION_COMMANDS = {
  "Depot 9": {
    favicon: <Icons.Fuel />,
    preview: (
      <NodePreview>
        <Line span smoke> · Independent fuel depot. Barnyard Fields.</Line>
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
        <HoursBanner
          hours="24/7"
          days="Every Day"
          location="Barnyard Fields — main road in from the Ports border"
          note="Attendant hours: 06:00-22:00. Automated overnight."
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
                  <PersonnelFile
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
        },
      },
    },
  },
};

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
          "Barnyard Fields — fixed location, decades of operation",
          "One item. No substitutions.",
        ]}
      >
        <InsetBox color="smoke" title="NOODLE BOWL — 12¤:">
          <Line smoke bullet>Synth pork broth</Line>
          <Line smoke bullet>Hand-pulled noodles</Line>
          <Line smoke bullet>Soft egg, scallions, chili oil</Line>
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
                  <PersonnelFile
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
        },
      },
    },
  },
};

export const BARNYARD_FIELDS_AREA_COMMANDS = {
  ...BARNYARD_SCRAPYARD_COMMANDS,
  ...BARNYARD_FUEL_STATION_COMMANDS,
  ...BARNYARD_NOODLE_STAND_COMMANDS,
};

export default BARNYARD_FIELDS_AREA_COMMANDS;
