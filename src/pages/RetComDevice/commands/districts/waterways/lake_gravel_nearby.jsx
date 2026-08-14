import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  Node,
  Nodes,
} from "@retcom";

// ============================================================================
// LAKESIDE RIPPER DOC
// ============================================================================

export const PUMP_HOUSE_CLINIC_COMMANDS = {
  "Pump House Clinic": {
    favicon: <Icons.RipperDoc />,
    preview: (
      <NodePreview>
        <Line span smoke> · Ripper doc. Converted pump house, Gravel Lake shore. Cash only.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="PUMP HOUSE CLINIC"
        tagline="Discreet. Capable. No records."
        network="PHC_OPEN"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Gravel Lake south shore — converted water authority pump house",
          "Medical treatment, cyberware installation and removal",
          "No records kept — no city registration",
          "Cash only — bring exact change",
        ]}
        theme="casual"
      >
        <InsetBox title="SERVICES:">
          <Line neon bullet>Emergency trauma — 80¤</Line>
          <Line neon bullet>Cyberware installation — price on consultation</Line>
          <Line neon bullet>Cyberware removal — 60¤ flat, no questions</Line>
          <Line neon bullet>Nano infestation assessment — 30¤</Line>
          <Line yellow bullet>After-hours emergencies accepted — knock hard</Line>
        </InsetBox>
        <Nodes.HoursBanner
          hours="10:00 — 22:00"
          days="Daily"
          location="Gravel Lake south shore — look for the pump house, blue door"
          note="No appointment needed. No names required."
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "blue door",
          hint: "How you find the place",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="PUMP HOUSE CLINIC — INTERNAL"
            notes={[
              "Operator: Doss — sole practitioner",
              "No staff, no records, no affiliations",
              "Predates Foundation compound on the shore by at least a decade",
            ]}
          />
        ),
        related_commands: {
          "Personnel File": {
            favicon: <Icons.Person />,
            content: (
              <Nodes.PersonnelFile
                employeeId="OWNER-001"
                name="Doss"
                position="Practitioner"
                district="Gravel Lake south shore"
                notes={[
                  "Former city medical — left before the Incident, reasons undisclosed",
                  "Has operated the clinic on this shore for over fifteen years",
                  "Watched the Foundation compound go up — remembers what was there before",
                  "Before the cult: derelict military installation, abandoned for years, occasionally squatted",
                  "Has treated several Foundation neophytes who found their way out — won't say how many",
                  "Has also treated individuals brought out of the compound who could not say where they had been",
                  "Does not advertise this. Will discuss it if asked directly.",
                  "Posted a wanted notice on the Barge board — looking for old military survey records of the site",
                ]}
                status="ACTIVE"
              />
            ),
          },
          "Clinic Safe": {
            favicon: <Icons.Lock />,
            password: {
              pw: "saline",
              hint: "What keeps things clean",
              lockType: 'safe',
            },
            content: (
              <Nodes.Safe
                id="pump-house-clinic-safe"
                model="DS-100"
                location="Back room — behind the instrument cabinet"
                security="Key lock"
                physical={[
                  {
                    id: "doss_cash",
                    label: "Cash",
                    description: "340¤ — week's take",
                    value: 340,
                    isCredits: true,
                  },
                  {
                    id: "doss_folder",
                    label: "Folder — unmarked",
                    description: "Handwritten notes. Symptom records from patients who came from the compound. Dates, descriptions, physical state. Goes back two years.",
                  },
                  {
                    id: "doss_old_badge",
                    label: "City medical ID",
                    description: "Expired by decades. Doss — full name redacted with marker. Still carries it.",
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
// FISHING PLATFORM
// ============================================================================

export const FISHING_PLATFORM_COMMANDS = {
  "The Platform": {
    favicon: <Icons.Water />,
    preview: (
      <NodePreview>
        <Line span smoke> · Squatter fishing platform. Gravel Lake north shore. Old Cy side.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="THE PLATFORM"
        tagline="You can fish here. Nobody will stop you."
        network="PLATFORM_OPEN"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Gravel Lake north shore — Old Cy side",
          "Unregistered squatter structure — repurposed water authority jetty",
          "Fishing, camping, loose community of Old Cy residents",
          "No commerce — bring your own supplies",
          "About a dozen regulars. More at weekends.",
        ]}
        theme="casual"
      />
    ),
    related_commands: {
      "Community Board": {
        favicon: <Icons.Bulletin />,
        content: (
          <Nodes.CommunityBoard
            name="THE PLATFORM — BOARD"
            location="Nailed to the main post"
            posts={[
              { text: "Charity vans leave the compound every Tuesday and Thursday after midnight. Always the same direction — south. Always dark. Never marked.", color: "yellow" },
              { text: "My brother went in three weeks ago. Haven't heard since. They said he was staying. He wouldn't stay.", color: "red" },
              { text: "Fish count is down again near the east shore. Something in the water near the wall.", color: "smoke" },
              { text: "Anyone else hear the sound at night? Low. Like something breathing under the ground.", color: "smoke" },
              { text: "GOOD FISHING: West jetty, early morning, before the boat traffic starts.", color: "neon" },
            ]}
            vibe="Quiet. Watchful. People who've been here long enough to notice things."
          />
        ),
      },
      "Radio": {
        content: <Nodes.Radio />,
      },
    },
  },
};

// ============================================================================
// COMBINED EXPORT
// ============================================================================

export const LAKE_GRAVEL_NEARBY_COMMANDS = {
  ...PUMP_HOUSE_CLINIC_COMMANDS,
  ...FISHING_PLATFORM_COMMANDS,
};

export default LAKE_GRAVEL_NEARBY_COMMANDS;
