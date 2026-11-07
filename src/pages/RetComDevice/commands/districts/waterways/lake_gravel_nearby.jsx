import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  KeyValue,
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
                  "Licence: City Medical, general practice. Lapsed pre-Incident, not renewed",
                  "Practice: Pump House Clinic, Gravel Lake south shore. Sole operator, 15+ yrs",
                  "Staff: none. Referrals: none. Affiliations: none",
                  "Billing: cash or barter. No records kept outside this file",
                  "Own note: Watched them put the wall up around the old military site. Nobody used it for years before that. Squatters, now and then.",
                  "Own note: Four walk-ins from the Foundation this year. Two couldn't say how long they'd been inside. One kept asking if I could hear it too.",
                  "Own note: Don't send anyone back there. I don't care how long the queue is. It isn't a charity. More like a church, or something worse.",
                  "Own note: Notice is up on the Barge board. I need the old survey records. There's a level under that building nobody admits to.",
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
// BAIT & TACKLE (next to the Platform)
// ============================================================================

export const BAIT_TACKLE_COMMANDS = {
  "Bait & Tackle Shack": {
    favicon: <Icons.Water />,
    preview: (
      <NodePreview>
        <Line span smoke> · Bait, hooks, line. Catch and release. Do not eat what you catch.</Line>
      </NodePreview>
    ),
    content: (
      <Node
        title="BAIT & TACKLE"
        subtitle="North shore — next to the Platform"
        notes={[
          "Worms 2¤ · Hooks 1¤ · Line 3¤",
          "CATCH AND RELEASE ONLY",
          "Do not eat what you catch. We're serious.",
        ]}
      />
    ),
    related_commands: {
      "Bait Cooler": {
        favicon: <Icons.Inventory />,
        content: (
          <Nodes.RCDAlert
            message="No signals inside. Just ice melt and a smell."
          />
        ),
      },
    },
  },
};

// ============================================================================
// FLARES & FUEL — Secret #1: fire prevents their regeneration
// ============================================================================

export const HOT_STUFF_COMMANDS = {
  "Hot Stuff — Flares & Fuel": {
    favicon: <Icons.Fuel />,
    preview: (
      <NodePreview>
        <Line span smoke> · Flares, lamp oil, torch rental. For the shore path after dark.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="HOT STUFF — FLARES & FUEL"
        tagline="Light it up or don't go."
        network="HOTSTUFF_POS"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Gravel Lake east shore — the shed with the orange door",
          "Road flares, marine flares, lamp oil, cooking fuel",
          "Torch rental for the Old Cy shore path (deposit required)",
          "No open flames inside the shed. Obviously.",
        ]}
        theme="casual"
      >
        <InsetBox title="PRICES:">
          <KeyValue label="Road flare" value="6¤" />
          <KeyValue label="Marine flare (2 min)" value="15¤" />
          <KeyValue label="Lamp oil (1L)" value="8¤" />
          <KeyValue label="Torch rental (night)" value="10¤ + 40¤ deposit" />
        </InsetBox>
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "orange door",
          hint: "How the customers find the shed",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="HOT STUFF — POS & LEDGER"
            notes={[
              "Owner-operated: Bex Talo",
              "Cash only. Deliveries by hand cart, shore side only",
            ]}
          />
        ),
        related_commands: {
          "Delivery Ledger": {
            favicon: <Icons.Files />,
            content: (
              <Nodes.EncryptedMessage
                messages={[
                  "GLCF — standing order: lamp oil x20, cooking fuel x10. CANCELLED by them, week 3.",
                  "GLCF — re-ordered: cooking fuel only. Note on the order: \"No flares, no open flame products, do not bring them onto the grounds.\"",
                  "Driver refused the run after that. Says the gate staff backed away from the cart.",
                ]}
              />
            ),
          },
          "Personnel File": {
            favicon: <Icons.Person />,
            content: (
              <Nodes.PersonnelFile
                employeeId="OWNER-001"
                name="Bex Talo"
                position="Owner"
                district="Gravel Lake east shore"
                notes={[
                  "Business licence: shore trading, renewed annually (late, every year)",
                  "Staff: none. Cousin helps on weekends, off the books",
                  "Own note: Charity folk won't come within ten metres of the stock. Not a joke. They walk around the shed.",
                  "Own note: Saw one of them slice his palm on the jetty railing. Closed up before he got to the end of the jetty.",
                  "Own note: Same week, another one caught his sleeve on a lamp outside the Barge. Still had the burn three days later. Still had it when I stopped looking.",
                ]}
                status="ACTIVE"
              />
            ),
          },
          "Back Shelf": {
            favicon: <Icons.Inventory />,
            content: (
              <Nodes.RCDAlert
                id="hot-stuff-back-shelf"
                message="Unlogged stock behind the oil drums. Off the books."
                details={["Bex's cousin's side business, by the look of it."]}
                physical={[
                  { id: "hot_stuff_marine_flares", label: "Marine flares", description: "Two minutes of burn each. Hard to put out.", quantity: 3 },
                  { id: "hot_stuff_lamp_oil", label: "Lamp oil (1L)", description: "Sloshes. Smells like a bad decision." },
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
// CYNERGY SENSOR NODE — Secret #3: something beneath; a thousand voices
// ============================================================================

export const GROUND_STABILITY_NODE_COMMANDS = {
  "Ground Stability Node GL-7": {
    favicon: <Icons.Science />,
    preview: (
      <NodePreview>
        <Line span smoke> · Cynergy subsidence sensor. Unstaffed. Ticket backlog: 41.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="CYNERGY WATER & POWER — GROUND STABILITY NODE GL-7"
        tagline="Monitoring so you don't have to."
        network="CYN_UTIL_GL7"
        signalStrength="medium"
        status="NOMINAL"
        statusColor="neon"
        notes={[
          "Automated subsidence and seismic monitoring, Gravel Lake shore",
          "Unstaffed. Report damage via your Cynergy account.",
          "Tampering with utility equipment is a corporate offence",
        ]}
        theme="industrial"
      />
    ),
    related_commands: {
      "Maintenance Access": {
        favicon: <Icons.Maintenance />,
        password: {
          pw: "subsidence",
          hint: "What the node watches for",
          showFirst: true,
          lockType: 'terminal',
        },
        content: (
          <Node
            title="GL-7 — MAINTENANCE CONSOLE"
            notes={[
              "Firmware: 2.1 (update available since forever)",
              "Last technician visit: 14 months ago",
            ]}
            alerts={[
              "41 open anomaly tickets. All auto-closed: \"Within tolerance.\"",
            ]}
          />
        ),
        related_commands: {
          "Sensor Log": {
            favicon: <Icons.Files />,
            content: (
              <Nodes.EncryptedMessage
                messages={[
                  "ANOMALY: Hollow resonance, sector 4 (GLCF compound). Void volume estimate exceeds city records for the site.",
                  "ANOMALY: Rhythmic low-frequency signal, sector 4. Period ~6s. Biological? Classifier: UNKNOWN.",
                  "ANOMALY: Ground displacement, sector 4, +2mm. Reversed within the hour.",
                  "TICKET AUTO-CLOSED: Within tolerance.",
                ]}
              />
            ),
          },
          "Audio Capture": {
            favicon: <Icons.Radio />,
            content: (
              <Node
                title="AUDIO CAPTURE — 03:12, SECTOR 4"
                subtitle="Flagged: ANOMALOUS — MULTIPLE SOURCES"
                notes={[
                  "Duration: 00:04:51",
                  "Classifier: speech-like, overlapping. Source count estimate: >200. Estimate unstable.",
                  "Technician comment field: [empty]",
                ]}
              />
            ),
          },
          "Service Account": {
            favicon: <Icons.Wallet />,
            content: (
              <Nodes.DigitalWallet
                id="cynergy-gl7-service-account"
                label="Technician per-diem, never claimed"
                accountHolder="CYN FIELD SVC"
                credits={60}
              />
            ),
          },
        },
      },
    },
  },
};

// ============================================================================
// INCIDENT MEMORIAL
// ============================================================================

export const INCIDENT_MEMORIAL_COMMANDS = {
  "Incident Memorial": {
    favicon: <Icons.Church />,
    preview: (
      <NodePreview>
        <Line span smoke> · Names of the lost. Candles, flowers, offerings.</Line>
      </NodePreview>
    ),
    content: (
      <Node
        title="GRAVEL LAKE INCIDENT MEMORIAL"
        subtitle="Public monument — maintained by volunteers"
        notes={[
          "Four panels of names. The fourth is still being added to.",
          "Candles, plastic flowers, a child's shoe",
          "Volunteers clean it on the first of every month",
        ]}
      />
    ),
    related_commands: {
      "Offering Plate": {
        favicon: <Icons.Pin />,
        content: (
          <Nodes.RCDAlert
            id="gravel-lake-memorial-offering-plate"
            message="Sealed med-pouch under the plate. Left on purpose."
            details={['Scratched into the stone beside it: "For whoever needs it more. — M"']}
            physical={[{ id: "red_juice_rec" }]}
          />
        ),
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
  ...BAIT_TACKLE_COMMANDS,
  ...HOT_STUFF_COMMANDS,
  ...GROUND_STABILITY_NODE_COMMANDS,
  ...INCIDENT_MEMORIAL_COMMANDS,
};

export default LAKE_GRAVEL_NEARBY_COMMANDS;
