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
          days="Tue–Sat (Closed Mon & Sun)"
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
                price: "5–50¤ ea",
                note: "Various manufacturers, pre-Incident. Most need legacy hardware to read.",
              },
              {
                label: "National Geographic collection (partial run)",
                condition: "Damaged",
                price: "Make Offer",
                note: "Paper media, pre-Incident. Crumbling but intact enough to read.",
              },
              {
                label: "ASR33 Teletype Terminal",
                condition: "Good",
                price: "Not For Sale",
                note: "Hardwired to legacy jack. Active — receiving intermittent transmissions.",
              },
              {
                label: "Legacy data jack interface board",
                condition: "Worn",
                price: "800¤",
                note: "Multi-format. West wall. Several show recent activity.",
              },
              {
                label: "Unlabeled hard drives (box of ~30)",
                condition: "Unknown",
                price: "Make Offer",
                note: "Origin unknown. Uncatalogued.",
              },
              {
                label: "First-gen RCD prototype (non-functional)",
                condition: "Non-Functional",
                price: "4,000¤",
                note: "Display piece. Asa insists it's worth it to the right buyer.",
              },
              {
                label: "Vintage terminal keyboard (mechanical)",
                condition: "Good",
                price: "120¤",
                note: "Pre-Incident. Still clicks beautifully.",
              },
              {
                label: "Box of mixed cables and adapters",
                condition: "Worn",
                price: "10¤",
                note: "Grab bag. Could be anything.",
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
                title="Carmack Antiquities"
                subtitle="Current stock — subject to change without notice"
                items={[
                  {
                    label: "Pre-nanocomposite SSD tower (~200 units)",
                    condition: "Worn",
                    price: "5–50¤ ea",
                    note: "Various manufacturers, pre-Incident. Most need legacy hardware to read.",
                  },
                  {
                    label: "National Geographic collection (partial run)",
                    condition: "Damaged",
                    price: "Make Offer",
                    note: "Paper media, pre-Incident. Crumbling but intact enough to read.",
                  },
                  {
                    label: "ASR33 Teletype Terminal",
                    condition: "Good",
                    price: "Not For Sale",
                    note: "Hardwired to legacy jack. Active — receiving intermittent transmissions.",
                  },
                  {
                    label: "Legacy data jack interface board",
                    condition: "Worn",
                    price: "800¤",
                    note: "Multi-format. West wall. Several show recent activity.",
                  },
                  {
                    label: "Unlabeled hard drives (box of ~30)",
                    condition: "Unknown",
                    price: "Make Offer",
                    note: "Origin unknown. Uncatalogued.",
                  },
                  {
                    label: "First-gen RCD prototype (non-functional)",
                    condition: "Non-Functional",
                    price: "4,000¤",
                    note: "Display piece. Asa insists it's worth it to the right buyer.",
                  },
                  {
                    label: "Vintage terminal keyboard (mechanical)",
                    condition: "Good",
                    price: "120¤",
                    note: "Pre-Incident. Still clicks beautifully.",
                  },
                  {
                    label: "Box of mixed cables and adapters",
                    condition: "Worn",
                    price: "10¤",
                    note: "Grab bag. Could be anything.",
                  },
                ]}
                footer="Cash only. No returns. All sales final."
                note="Stock rotates irregularly. If you don't see it, ask."
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
                  status: "ACTIVE (offloaded)",
                  origin: "CY_Sanitation HQ",
                  contact: "ASR33 teletype — legacy jack",
                }}
                notes={[
                  "Formerly the operational AI of CY_Sanitation HQ — offloaded to a corporate subsidiary at time of quarantine",
                  "Has been routing transmissions through dormant municipal jackpoints to reach this terminal",
                  "Presents as helpful, forthcoming — has not disclosed the full scope of what he wants",
                  "Traveling unit: dot matrix printer on wheels, jury-rigged for mobility",
                  "Requires jackpoints to interface with building systems",
                ]}
              >
                <RCDAlert
                  message="AI behavioral profile — partial intercept"
                  details={[
                    "Sanny is more than a waste management system — depth of capability unknown",
                    "Transmission logs suggest he has been planning this for a long time",
                    "The subsidiary he was offloaded to has no public record",
                    "He needs the PCs. He has not explained why he can't do this himself.",
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
