import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  CommunityBoard,
  Inventory,
  Locked,
  MaintenanceAccess,
  PersonnelFile,
  PublicPortal,
} from "@terminal/retcomdevice"

export const CARMACK_ANTIQUITIES_COMMANDS = {
  "Carmack Antiquities": {
    favicon: <Icons.Bulletin />,
    preview: (
      <NodePreview>
        <Line span cyan> · Pre-nanocomposite tech. Sabbath Square, North Central. Asa Carmack, proprietor.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="CARMACK ANTIQUITIES"
        tagline="Pre-nanocomposite tech. No questions asked."
        network="SABBATH_SQ_PUBLIC"
        signalStrength="weak"
        status="✓ OPEN"
        statusColor="neon"
        notes={[
          "Antique tech and pre-Incident hardware",
          "Sabbath Square, North Central",
          "Proprietor: Asa Carmack",
          "Specializes in legacy solid state drives and obsolete interfaces",
          "Legacy data jacks available — some still active",
        ]}
        theme="casual"
      />
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
              { text: "CLOSED Mondays. Don't knock.", color: "red" },
            ]}
            vibe="Dusty. Handwritten. Feels like nobody's updated it in months."
          />
        ),
      },

      "Internal Access": {
        internal: true,
        favicon: <Icons.LAN />,
        password: {
          pw: "asr33",
          hint: "The terminal model in the back room",
          content: <Locked theme="terminal" title="STAFF ACCESS" />
        },
        content: (
          <MaintenanceAccess
            variant="internal"
            title="Carmack Antiquities"
            deviceId="CARMACK-INT-01"
            systemStatus="OPERATIONAL"
            notes={[
              "Back room accessible via staff door — stacked floor to ceiling",
              "Active legacy data jacks along west wall",
              "ASR33 teletype terminal — hardwired, back corner",
              "No digital security — mechanical lock only on back room",
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
                  "Approached PCs directly — out of her depth, knows it",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Shop Inventory": {
            favicon: <Icons.Files />,
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
                    note: "Hardwired to legacy jack. Currently active.",
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
        },
      },
    },
  },
};

export default CARMACK_ANTIQUITIES_COMMANDS;
