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
// CANAL TAXI
// ============================================================================

export const GRAVEL_LAKE_TAXI_COMMANDS = {
  "Maret's Water Taxi": {
    favicon: <Icons.Taxi />,
    preview: (
      <NodePreview>
        <Line span smoke> · Canal taxi. Gravel Lake outlet. Runs day and night.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="MARET'S WATER TAXI"
        tagline="Anywhere the canal reaches. No questions."
        network="MARET_TAXI"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Single vessel — moored at Gravel Lake south outlet",
          "Canal routes: Lake Gravel, North Central waterfront, Ports connections",
          "Flat rate: 15¤ per trip, cash only",
          "Night rate: 25¤ — runs until 03:00",
        ]}
        theme="casual"
      >
        <InsetBox title="ROUTES:">
          <Line neon bullet>Gravel Lake outlet — North Central waterfront: 15¤</Line>
          <Line neon bullet>Gravel Lake outlet — Old Cy shore: 10¤</Line>
          <Line neon bullet>Gravel Lake outlet — Ports canal junction: 20¤</Line>
          <Line yellow bullet>Custom routes available — ask Maret directly</Line>
        </InsetBox>
        <Nodes.HoursBanner
          hours="06:00 — 03:00"
          days="Daily"
          location="Gravel Lake — south outlet, look for the yellow lamp"
          note="Night runs available. Extra charge applies after 20:00."
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "southside",
          hint: "Which outlet she moors at",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="MARET'S WATER TAXI — INTERNAL"
            notes={[
              "Sole operator — Maret, owner and pilot",
              "No staff register",
              "Cash only — no transaction records",
              "Vessel registration current — Gravel Lake Water Authority",
            ]}
          />
        ),
        related_commands: {
          "Personnel File": {
            favicon: <Icons.Person />,
            content: (
              <Nodes.PersonnelFile
                employeeId="OWNER-001"
                name="Maret"
                position="Owner / Pilot"
                district="Gravel Lake — lives aboard"
                notes={[
                  "Has operated this route for eleven years",
                  "Knows every vessel that uses the lake — notices anything new",
                  "Has observed the Foundation compound from the water regularly",
                  "Noted: Foundation runs an unmarked supply boat after midnight, two or three times a week",
                  "Does not ask questions. Will answer them, for the right price.",
                  "Loyal to nobody — cash is the only allegiance",
                ]}
                status="ACTIVE"
              />
            ),
          },
          "Vessel Log": {
            favicon: <Icons.Files />,
            content: (
              <Node
                title="VESSEL LOG — RECENT ENTRIES"
                subtitle="Maret's Water Taxi — Gravel Lake"
                notes={[
                  "This morning — two passengers, Old Cy shore drop, paid cash, no conversation",
                  "Yesterday night — solo passenger, North Central waterfront, paid double, asked to not be logged",
                  "Two nights ago — Foundation supply boat passed at 01:30, running dark, no lights",
                  "Three days ago — Foundation supply boat, same time, same direction, same lights-off approach",
                  "Four days ago — unknown vessel anchored mid-lake for approx two hours, departed without docking",
                ]}
              />
            ),
          },
          "Boat Safe": {
            favicon: <Icons.Lock />,
            password: {
              pw: "yellowlamp",
              hint: "How you find her in the dark",
              lockType: 'safe',
            },
            content: (
              <Nodes.Safe
                id="maret-taxi-safe"
                model="DS-100"
                location="Below deck — stern compartment"
                security="Key lock"
                physical={[
                  {
                    id: "maret_cash",
                    label: "Weekly take",
                    description: "210¤ — mixed bills, rolled tight",
                    value: 210,
                    isCredits: true,
                  },
                  {
                    id: "maret_notebook",
                    label: "Notebook",
                    description: "Handwritten. Vessel sightings, times, descriptions. Years of entries. Foundation supply boat flagged with a red mark starting eight months ago.",
                  },
                  {
                    id: "maret_flare",
                    label: "Flare gun",
                    description: "Single shot. Loaded.",
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
// FLOATING MARKET BARGE
// ============================================================================

export const FLOATING_MARKET_COMMANDS = {
  "The Barge": {
    favicon: <Icons.Warehouse />,
    preview: (
      <NodePreview>
        <Line span smoke> · Floating market. Gravel Lake. Moves berth weekly.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="THE BARGE"
        tagline="What you need. Where you need it."
        network="BARGE_OPEN"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Floating market — Gravel Lake, berth rotates weekly",
          "General goods, salvage, food, and sundries",
          "Cash only — no credchip readers",
          "Six to eight traders on board at any time — stock varies",
        ]}
        theme="casual"
      >
        <InsetBox title="CURRENT TRADERS:">
          <Line neon bullet>Canal Provisions — dried food, water filters, basic supplies</Line>
          <Line neon bullet>Scrap & Surplus — salvage, cable, tools</Line>
          <Line neon bullet>The Medicine Box — basic meds, bandages, no prescriptions</Line>
          <Line yellow bullet>Rotating traders — check board on arrival</Line>
        </InsetBox>
        <Nodes.HoursBanner
          hours="09:00 — 18:00"
          days="Daily (weather permitting)"
          location="Gravel Lake — current berth on community board"
          note="Berth moves weekly. Follow the board or ask Maret."
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Community Board": {
        favicon: <Icons.Bulletin />,
        content: (
          <Nodes.CommunityBoard
            name="THE BARGE — NOTICE BOARD"
            location="Main deck, near gangway"
            posts={[
              { text: "Current berth: Gravel Lake east shore, two hundred metres north of the pump house", color: "neon" },
              { text: "WANTED: Anyone with experience in pre-Incident building plans or military survey records — ask for Doss", color: "yellow" },
              { text: "Foundation charity taking people in again. Queue was sixty deep yesterday. Getting longer every week.", color: "smoke" },
              { text: "Do NOT take the Old Cy shore path after dark. Something is wrong near the compound wall. Third time this month.", color: "red" },
              { text: "FOUND: Keycard, military style, old. No markings. Ask at provisions stall.", color: "yellow" },
            ]}
            vibe="Transient. Nobody stays long. People watching their backs."
          />
        ),
      },
      "Scrap Bin": {
        content: (
          <Nodes.SmartBin
            id="barge-scrap-bin"
            location="Main deck — aft"
            status="NOMINAL"
            items={[
              'cable_ties',
              'duct_tape',
              'multi_tool',
              'bandages',
            ]}
          />
        ),
      },
    },
  },
};

// ============================================================================
// COMBINED EXPORT
// ============================================================================

export const WATERWAYS_NEARBY_COMMANDS = {
  ...GRAVEL_LAKE_TAXI_COMMANDS,
  ...FLOATING_MARKET_COMMANDS,
};

export default WATERWAYS_NEARBY_COMMANDS;
