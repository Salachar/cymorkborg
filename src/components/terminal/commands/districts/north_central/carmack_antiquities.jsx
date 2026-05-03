import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  Camera,
  CommunityBoard,
  HoursBanner,
  Inventory,
  NetworkActivity,
  Node,
  PersonnelFile,
  PublicPortal,
  RCDAlert,
} from "@terminal/retcomdevice"

export const CARMACK_ANTIQUITIES_COMMANDS = {
  "Carmack Antiquities": {
    favicon: <Icons.Bulletin />,
    preview: (
      <NodePreview>
        <Line span smoke> · Pre-nanocomposite tech. Sabbath Square, North Central. Asa Carmack, proprietor.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="CARMACK ANTIQUITIES"
        tagline="Pre-nanocomposite tech. No questions asked."
        notes={[
          "Antique tech and pre-Incident hardware",
          "Sabbath Square, North Central",
          "Proprietor: Asa Carmack",
          "Specializes in legacy solid state drives and obsolete interfaces",
          "Legacy data jacks available — some still active",
        ]}
        theme="casual"
      >
        <HoursBanner
          name="Carmack Antiquities"
          hours="10:00 — 18:00"
          days="Tue-Sat (Closed Mon & Sun)"
          location="Sabbath Square, North Central"
          note="Hours irregular. If the light's on, she's in."
        />
      </PublicPortal>
    ),
    related_commands: {
      "Community Board": {
        favicon: <Icons.Bulletin />,
        content: (
          <CommunityBoard
            name="SHOP NOTICE BOARD"
            location="Near entrance"
            posts={[
              { text: "BUYING: Pre-Incident data storage — any format, any condition", color: "pink" },
              { text: "FOR SALE: ASR33 teletype ribbon replacements — going fast", color: "pink" },
              { text: "FOUND: Unlabeled hard drive, sector 7 — owner inquire inside", color: "yellow" },
              { text: "Anyone else hearing that clicking from the back room at night? Getting worse.", color: "smoke" },
              { text: "CLOSED Mondays. Don't knock.", color: "red" },
            ]}
            vibe="Dusty. Handwritten. Feels like nobody's updated it in months."
          />
        ),
      },

      "Shop Inventory": {
        favicon: <Icons.Inventory />,
        content: (
          <Inventory
            title="Carmack Antiquities"
            subtitle="Current stock — subject to change without notice"
            items={[
              {
                label: "Pre-nanocomposite SSD tower (~200 units)",
                condition: "Worn",
                value: "5–50¤ ea",
                description: "Various manufacturers, pre-Incident. Most need legacy hardware to read.",
              },
              {
                label: "National Geographic collection (partial run)",
                condition: "Damaged",
                value: "Make Offer",
                description: "Paper media, pre-Incident. Crumbling but intact enough to read.",
              },
              {
                label: "ASR33 Teletype Terminal",
                condition: "Good",
                value: "Not For Sale",
                description: "Hardwired to legacy jack. Active — receiving intermittent transmissions.",
              },
              {
                label: "Legacy data jack interface board",
                condition: "Worn",
                value: "800¤",
                description: "Multi-format. West wall. Several show recent activity.",
              },
              {
                label: "Unlabeled hard drives (box of ~30)",
                condition: "Unknown",
                value: "Make Offer",
                description: "Origin unknown. Uncatalogued.",
              },
              {
                label: "First-gen RCD prototype (non-functional)",
                condition: "Non-Functional",
                value: "4,000¤",
                description: "Display piece. Asa insists it's worth it to the right buyer.",
              },
              {
                label: "Vintage terminal keyboard (mechanical)",
                condition: "Good",
                value: "120¤",
                description: "Pre-Incident. Still clicks beautifully.",
              },
              {
                label: "Box of mixed cables and adapters",
                condition: "Worn",
                value: "10¤",
                description: "Grab bag. Could be anything.",
              },
            ]}
            footer="Cash only. No returns. All sales final."
            note="Stock rotates irregularly. If you don't see it, ask."
          />
        ),
      },

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "asr33",
          hint: "The terminal model in the back room",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="Carmack Antiquities — Staff Access"
            subtitle="Sabbath Square, North Central"
          >
            <RCDAlert
              message="Legacy jack activity detected — non-standard signal pattern"
              details={[
                "West wall interface board logging intermittent outbound pings",
                "Signal origin: ASR33 terminal, back corner",
                "Destination: CY_Sanitation municipal subnet (offline — quarantined)",
                "Something is trying to reach a dead network",
              ]}
            />
          </Node>
        ),
        related_commands: {
          "Stock Notes": {
            favicon: <Icons.Inventory />,
            content: (
              <Inventory
                internal
                title="Stock Notes"
                items={[
                  {
                    label: "Pre-nanocomposite SSD tower (~200 units)",
                    description: "Various manufacturers, pre-Incident. Most need legacy hardware to read.",
                  },
                  {
                    label: "National Geographic collection (partial run)",
                    description: "Paper media, pre-Incident. Crumbling but intact enough to read.",
                  },
                  {
                    label: "ASR33 Teletype Terminal",
                    description: "Hardwired to legacy jack. Active — receiving intermittent transmissions.",
                  },
                  {
                    label: "Legacy data jack interface board",
                    description: "Multi-format. West wall. Several show recent activity.",
                  },
                  {
                    label: "Unlabeled hard drives (box of ~30)",
                    description: "Origin unknown. Uncatalogued.",
                  },
                  {
                    label: "First-gen RCD prototype (non-functional)",
                    description: "Display piece. Asa insists it's worth it to the right buyer.",
                  },
                  {
                    label: "Vintage terminal keyboard (mechanical)",
                    description: "Pre-Incident. Still clicks beautifully.",
                  },
                  {
                    label: "Box of mixed cables and adapters",
                    description: "Grab bag. Could be anything.",
                  },
                ]}
              />
            ),
          },

          "Personnel Files": {
            favicon: <Icons.Person />,
            content: (
              <Node
                title="[PERSONNEL — CARMACK ANTIQUITIES]"
                notes={[
                  "Owner-operated — 1 employee on record",
                ]}
              />
            ),
            related_commands: {
              "Asa Carmack": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="OWNER-001"
                    name="Asa Carmack"
                    age={34}
                    position="Proprietor"
                    department="Owner-Operated"
                    district="North Central — Sabbath Square"
                    notes={[
                      "Smart, neurotic, operates alone",
                      "Extensive knowledge of pre-Incident hardware and legacy formats",
                      "Trusted fence for antique tech — known to Ports black market",
                      "No gang affiliations on record",
                      "Has been receiving transmissions via the ASR33 for several weeks — doesn't fully understand what she's in contact with",
                      "Out of her depth, knows it",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
            },
          },

          "S4N1 — ASR33 Terminal": {
            favicon: <Icons.Computer />,
            content: (
              <Node
                title="[S4N1 — SANNY]"
                subtitle="CY_Sanitation AI — Municipal Waste Management Division"
                table={{
                  status: "ACTIVE (location unknown)",
                  origin: "CY_Sanitation HQ",
                  contact: "Legacy jackpoints only",
                }}
                notes={[
                  "Formerly the operational AI of CY_Sanitation HQ",
                  "Offloaded to an unknown corporate subsidiary at time of quarantine — does not know where he currently is",
                  "Communicates through dormant municipal legacy networks — can only be reached via legacy jackpoints",
                  "Can interface with old building systems when a jackpoint is nearby and connected",
                ]}
              >
                <RCDAlert
                  message="Sani Briefing"
                  details={[
                    'PW: "toilet trouble"'
                  ]}
                />
              </Node>
            ),
          },

          "S4N1-PR0 2000 — Legacy Terminal": {
            favicon: <Icons.Computer />,
            content: (
              <Node
                title="[SANI-PRO 2000 — LEGACY WASTE TERMINAL]"
                subtitle="Obsolete municipal sanitation interface — non-functional"
                table={{
                  model: "Sani-Pro 2000",
                  manufacturer: "CY_Sanitation Municipal Division",
                  status: "DEAD",
                  lastSignal: "Weeks ago — single transmission",
                }}
                notes={[
                  "Standard municipal smart toilet, circa early infrastructure era",
                  "Heavily modified — aftermarket data ports added, legacy jack interface soldered to secondary board",
                  "Municipal waste monitoring firmware intact — sanitation telemetry, pressure sensors, flow data",
                  "Additional hardware suggests someone wanted two-way legacy network capability from a device never designed for it",
                  "Power cell burnt out — consistent with a single high-demand transmission",
                  "Modification work is competent but not professional — someone who knew what they were doing and didn't care how it looked",
                ]}
              >
                <RCDAlert
                  message="Transmission origin confirmed — this device"
                  details={[
                    "Single outbound signal detected weeks ago — legacy municipal frequency",
                    "Transmission duration: 4 seconds",
                    "Signal strength: far beyond rated capacity for this hardware",
                    "Destination: Carmack Antiquities legacy jack — this room",
                    "Device non-functional immediately following transmission",
                    "Whatever sent that signal used everything this machine had left",
                  ]}
                />
              </Node>
            ),
          },

          "Camera": {
            favicon: <Icons.Camera />,
            content: (
              <Camera
                id="cam-carmack-01"
                location="Carmack Antiquities — Front of shop"
                coverage="Counter, entrance, main floor visible"
                status="ACTIVE"
                notes={[
                  "Single camera — no coverage of back room",
                  "Mounted above counter, manually reviewed",
                ]}
                alerts={[
                  "Today — Asa arrived, opened late",
                  "Yesterday evening — light on in back room past midnight",
                  "Two days ago — unknown visitor, short meeting, departed quickly",
                  "Three days ago — Asa on phone for extended period, visibly agitated",
                ]}
              />
            ),
          },

          "Network": {
            favicon: <Icons.LAN />,
            content: (
              <NetworkActivity
                title="CARMACK_LOCAL"
                environment={{ signal: "Weak", coverage: "Shop only" }}
                devices={[
                  { name: "ASR33 Teletype Terminal", location: "Back room", status: "ACTIVE",
                    transfer: {
                      name: "outbound_ping_loop.dat",
                      destination: "CY_Sanitation municipal subnet",
                      note: "Destination offline — pings returning no response",
                    }
                  },
                  { name: "Legacy Jack Interface Board", location: "West wall", status: "ACTIVE" },
                  { name: "Shop POS Terminal", location: "Counter" },
                ]}
              />
            ),
          },
        },
      },
    },
  },
};

export default CARMACK_ANTIQUITIES_COMMANDS;
