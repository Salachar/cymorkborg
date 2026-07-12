import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  KeyValue,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  Node,
  Nodes,
} from "@terminal/retcomdevice";

// ============================================================================
// ERKEL'S CHOP SHOP
// ============================================================================

export const ERKELS_CHOP_SHOP_COMMANDS = {
  "Erkel's": {
    favicon: <Icons.RipperDoc />,
    preview: (
      <NodePreview>
        <Line span smoke> · Ripper doc. Unit B4, lower level. Walk-ins only.</Line>
      </NodePreview>
    ),
    content: (
      <Node
        title="ERKEL'S"
        subtitle="Unit B4 — Lower Level, Undersjon"
        notes={[
          "Walk-ins only — no appointments, no records",
          "Cyberware installation, removal, and repair",
          "Emergency trauma accepted — cash up front",
          "Enter via the service corridor — yellow stripe on the floor",
          "Do not knock. The door is always open.",
        ]}
      >
        <InsetBox title="SERVICES & RATES:">
          <KeyValue label="Emergency trauma" value="90¤" />
          <KeyValue label="Cyberware installation" value="Price on inspection" />
          <KeyValue label="Cyberware removal" value="50¤ flat" />
          <KeyValue label="Cyberware repair" value="30¤ base" />
          <KeyValue label="Nano infestation — assessment only" value="25¤" />
        </InsetBox>
        <Line smoke small>Cash only. Dr. Erkel does not negotiate. Nurse Chainsaw negotiates even less.</Line>
      </Node>
    ),
    related_commands: {
      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "yellow stripe",
          hint: "How you find the place",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="ERKEL'S — INTERNAL"
            notes={[
              "Operated by Dr. Erkel and Nurse Chainsaw",
              "No city registration — no records kept",
              "Unit B4 is not listed in Undersjon tenancy records",
              "Has operated here for six years without incident",
              "Tenancy dispute: none — nobody has tried",
            ]}
          />
        ),
        related_commands: {
          "Personnel Files": {
            favicon: <Icons.Person />,
            content: (
              <Node
                title="ERKEL'S — PERSONNEL"
                notes={["2 practitioners"]}
              />
            ),
            related_commands: {
              "Dr. Erkel": {
                favicon: <Icons.Person />,
                content: (
                  <Nodes.PersonnelFile
                    employeeId="OWNER-001"
                    name="Dr. Erkel"
                    position="Surgeon / Proprietor"
                    district="Undersjon — Unit B4"
                    notes={[
                      "Formerly city-registered surgical practitioner — registration lapsed, circumstances unlisted",
                      "Exceptional technical skill — works fast, works clean",
                      "Has a policy: no questions about origin of cyberware brought in for installation",
                      "Has a second policy: no questions about what he removes",
                      "Has treated most of the unofficial tenants at some point",
                      "Quiet. Professional. Does not make small talk during procedures.",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
              "Nurse Chainsaw": {
                favicon: <Icons.Person />,
                content: (
                  <Nodes.PersonnelFile
                    employeeId="STAFF-001"
                    name="Nurse Chainsaw"
                    position="Surgical Assistant"
                    district="Undersjon — Unit B4"
                    notes={[
                      "Name is professional, not descriptive. Mostly.",
                      "Handles intake, anaesthesia, post-op, and anyone who causes trouble",
                      "The last category is rare. The reputation helps.",
                      "More talkative than Dr. Erkel — this is not saying much",
                      "Has a memory for faces — will remember you next time",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
            },
          },

          "Supply Cabinet": {
            favicon: <Icons.Inventory />,
            content: (
              <Nodes.Inventory
                internal
                title="Erkel's — Supply Stock"
                items={[
                  {
                    label: "Surgical consumables — bandages, suture, clamps",
                    description: "Adequate stock. Resupply monthly.",
                  },
                  {
                    label: "Anaesthetic — general and local",
                    description: "Low. Flagged for reorder.",
                  },
                  {
                    label: "Cyberware components — assorted",
                    description: "Various condition. Origin unlogged.",
                  },
                  {
                    label: "Nano infestation containment kit",
                    description: "Single use. Sealed. Emergency only.",
                  },
                ]}
              />
            ),
          },

          "Clinic Bin": {
            content: (
              <Nodes.SmartBin
                id="erkels-clinic-bin"
                location="Post-op area"
                status="NOMINAL"
                items={[
                  'bandages',
                  'painkillers',
                  'adrenachrome',
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
// BIO COMPUTING CENTER
// ============================================================================

export const BCC_COMMANDS = {
  "BCC": {
    favicon: <Icons.Science />,
    preview: (
      <NodePreview>
        <Line span smoke> · Bio Computing Center. Unit B7. Wetcalc. Don't ask what it runs on.</Line>
      </NodePreview>
    ),
    content: (
      <Node
        title="BIO COMPUTING CENTER"
        subtitle="Unit B7 — Lower Level, Undersjon"
        notes={[
          "Computational services — wetcalc architecture",
          "Processing, data runs, cracking — price on consultation",
          "No city registration",
          "Enter via the north service corridor — unmarked door, blue light above",
          "Appointment preferred. Walk-ins assessed.",
        ]}
      >
        <InsetBox title="SERVICES:">
          <Line neon bullet>Data processing — high volume, fast turnaround</Line>
          <Line neon bullet>Encrypted data runs — price on scope</Line>
          <Line neon bullet>System access — consult first</Line>
          <Line yellow bullet>Wetcalc substrate available for purchase — ask at counter</Line>
          <Line smoke small>BCC does not ask what you need processed. BCC does not want to know.</Line>
        </InsetBox>
      </Node>
    ),
    related_commands: {
      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "blue light",
          hint: "Above the door",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="BCC — INTERNAL"
            notes={[
              "Operator: Mesh — sole proprietor",
              "Unit B7 not listed in Undersjon tenancy records",
              "Wetcalc substrate: maintained on-site — do not enter the back room without Mesh present",
              "Power draw flagged by building management twice — both times resolved quietly",
            ]}
          />
        ),
        related_commands: {
          "Personnel File": {
            favicon: <Icons.Person />,
            content: (
              <Nodes.PersonnelFile
                employeeId="OWNER-001"
                name="Mesh"
                position="Operator / Proprietor"
                district="Undersjon — Unit B7"
                notes={[
                  "Background in city infrastructure computing — left under unclear circumstances",
                  "Established BCC six years ago — same time as Erkel's, different reason",
                  "Wetcalc architecture is Mesh's own design — nobody else fully understands it",
                  "Does not discuss the substrate. Does not allow anyone near the back room.",
                  "Has a list of clients and a policy of forgetting all of them immediately",
                  "Knows more about Undersjon's structural vulnerabilities than anyone — the power draws told him",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Current Job Queue": {
            favicon: <Icons.Files />,
            content: (
              <Node
                title="BCC — JOB QUEUE"
                subtitle="Active and pending — all client references anonymised"
                notes={[
                  "Job 1: Data processing — 40TB unstructured — client ref. AMBER — in progress",
                  "Job 2: Encrypted run — destination unknown to BCC — client ref. WIRE — queued",
                  "Job 3: System access consultation — client ref. SOUTH — pending callback",
                  "Job 4: Substrate purchase — 200g — client ref. FLOPPY — ready for collection",
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
// FLOPPY'S GARAGE
// ============================================================================

export const FLOPPYS_GARAGE_COMMANDS = {
  "Floppy's": {
    favicon: <Icons.CarRepair />,
    preview: (
      <NodePreview>
        <Line span smoke> · Vehicle repair. Lower parking level. Floppy has multitools for arms. Just so you know.</Line>
      </NodePreview>
    ),
    content: (
      <Node
        title="FLOPPY'S"
        subtitle="Lower Parking Level — Undersjon"
        notes={[
          "Vehicle repair, respray, and parts",
          "No questions about vehicle history",
          "Cash or trade",
          "Floppy is usually under something — shout when you arrive",
        ]}
      >
        <InsetBox title="SERVICES:">
          <KeyValue label="Full mechanical repair" value="Price on inspection" />
          <KeyValue label="Respray — standard" value="120¤" />
          <KeyValue label="Respray — full ID change" value="300¤" />
          <KeyValue label="Parts sourcing" value="Ask Floppy" />
          <KeyValue label="Vehicle storage — per week" value="40¤" />
        </InsetBox>
        <Line smoke small>Floppy does not ask where the vehicle has been. Floppy does not ask why the colour needs changing.</Line>
      </Node>
    ),
    related_commands: {
      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "multitool",
          hint: "What Floppy has instead of hands",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="FLOPPY'S — INTERNAL"
            notes={[
              "Owner-operated — Floppy, sole proprietor",
              "Lower parking level not listed as commercial space in Undersjon plans",
              "Floppy has occupied this space for eight years — longest unofficial tenant",
              "Has an informal arrangement with building management — details unspecified",
              "Tablet in for repair at RetCom Electronics — awaiting collection",
            ]}
          />
        ),
        related_commands: {
          "Personnel File": {
            favicon: <Icons.Person />,
            content: (
              <Nodes.PersonnelFile
                employeeId="OWNER-001"
                name="Floppy"
                position="Mechanic / Proprietor"
                district="Undersjon — lower parking level"
                notes={[
                  "Cyberware: both arms replaced with multitool assemblies — self-installed, self-maintained",
                  "Has been here longer than most official tenants — this gives him a certain standing",
                  "Knows every vehicle that has ever been through Undersjon's access tunnels",
                  "Keeps a log. Doesn't share it. Has shared it twice, for the right price.",
                  "Has a working relationship with BCC — substrate for data runs on vehicle IDs",
                  "Friendly. Loud. Will talk for as long as you let him.",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Parts Inventory": {
            favicon: <Icons.Inventory />,
            content: (
              <Nodes.Inventory
                internal
                title="Floppy's — Parts Stock"
                items={[
                  {
                    label: "Engine components — assorted",
                    description: "Various makes. Most sourced, some salvaged.",
                  },
                  {
                    label: "Respray stock — 14 colours",
                    description: "Standard range. Custom mix available on request.",
                  },
                  {
                    label: "Vehicle ID plates — blank (x6)",
                    description: "Origin unlisted.",
                  },
                  {
                    label: "Tyres — various grades (x20+)",
                    description: "Standard and armoured.",
                  },
                ]}
              />
            ),
          },

          "Garage Bin": {
            content: (
              <Nodes.SmartBin
                id="floppys-garage-bin"
                location="Main floor — near the lift"
                status="NOMINAL"
                items={[
                  'multi_tool',
                  'cable_ties',
                  'duct_tape',
                  'flashlight',
                ]}
              />
            ),
          },

          "Office Safe": {
            favicon: <Icons.Lock />,
            password: {
              pw: "eight years",
              hint: "How long Floppy has been here",
              lockType: 'safe',
            },
            content: (
              <Nodes.Safe
                id="floppys-office-safe"
                model="DS-200"
                location="Office — behind the parts shelf"
                security="Combination"
                physical={[
                  {
                    id: "floppy_cash",
                    label: "Cash",
                    description: "560¤ — end of week",
                    value: 560,
                    isCredits: true,
                  },
                  {
                    id: "floppy_log",
                    label: "Vehicle log",
                    description: "Every vehicle through the access tunnels. Eight years of entries. Dates, plates, descriptions, modifications. Two entries marked with a red cross — no explanation given.",
                  },
                  {
                    id: "floppy_credchip",
                    label: "Credchip",
                    description: "80¤",
                    value: 80,
                    isCredits: true,
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
// COMBINED EXPORT
// ============================================================================

export const UNDERSJON_UNOFFICIAL_COMMANDS = {
  ...ERKELS_CHOP_SHOP_COMMANDS,
  ...BCC_COMMANDS,
  ...FLOPPYS_GARAGE_COMMANDS,
};

export default UNDERSJON_UNOFFICIAL_COMMANDS;
