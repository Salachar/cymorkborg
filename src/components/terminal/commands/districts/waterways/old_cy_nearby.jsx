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
// SALVAGE DEALER
// ============================================================================

export const RUBBLE_SALVAGE_COMMANDS = {
  "Rubble & Sons": {
    favicon: <Icons.Wrench />,
    preview: (
      <NodePreview>
        <Line span smoke> · Salvage and surplus. Old Cy. Been here longer than most things standing.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="RUBBLE & SONS"
        tagline="Salvage. Surplus. Pre-Incident stock."
        network="RUBBLE_OPEN"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Old Cy — eastern edge, near the canal",
          "General salvage, military surplus, pre-Incident hardware",
          "Cash only — no credchip, no questions",
          "Stock varies — ask if you don't see it",
        ]}
        theme="casual"
      >
        <InsetBox title="REGULAR STOCK:">
          <Line neon bullet>Military surplus — clothing, equipment, field gear</Line>
          <Line neon bullet>Pre-Incident hardware — tools, fittings, cable</Line>
          <Line neon bullet>Structural salvage — pipe, plate, concrete anchors</Line>
          <Line yellow bullet>Specialist items on request — ask Rubble</Line>
        </InsetBox>
        <Nodes.HoursBanner
          hours="08:00 — 17:00"
          days="Mon-Sat"
          location="Old Cy eastern edge — follow the canal north, look for the yellow crane"
          note="Closed Sundays. Closed when Rubble isn't here, which is sometimes."
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Shop Inventory": {
        favicon: <Icons.Inventory />,
        content: (
          <Nodes.Inventory
            title="Rubble & Sons — Current Stock"
            subtitle="Partial listing — ask for unlisted items"
            items={[
              {
                label: "Military field kit — partial (x3)",
                condition: "Worn",
                value: "40¤ ea",
                description: "Ration pouches, compass, basic tools. Pre-Incident issue.",
              },
              {
                label: "Structural cable — heavy gauge (per metre)",
                condition: "Good",
                value: "3¤/m",
                description: "Salvaged from Old Cy demolition sites.",
              },
              {
                label: "Generator components — assorted",
                condition: "Worn",
                value: "Make offer",
                description: "Diesel-compatible. Mixed lot.",
              },
              {
                label: "Pre-Incident survey equipment",
                condition: "Non-functional",
                value: "60¤",
                description: "Theodolite, ground scanner, range finder. Display condition.",
              },
              {
                label: "Military-spec epoxy sealant — partial drums (x4)",
                condition: "Good",
                value: "25¤ ea",
                description: "Explosive-resistant grade. Same spec as the compound wall coating. Rubble doesn't know where it came from — bought as part of a lot.",
              },
            ]}
            footer="All sales final. No returns. Rubble's word is the only guarantee you get."
          />
        ),
      },

      "Community Board": {
        favicon: <Icons.Bulletin />,
        content: (
          <Nodes.CommunityBoard
            name="RUBBLE & SONS — BOARD"
            location="Outside the front door"
            posts={[
              { text: "BUYING: Pre-Incident military survey records, blueprints, site plans for Old Cy area. Cash. Ask Rubble.", color: "yellow" },
              { text: "Roadrunner clan warning: eastern approach to the compound is patrolled heavier than usual this week. Go around.", color: "red" },
              { text: "FOUND: Military keycard, old spec. No markings, no chip ID. Counter inside.", color: "yellow" },
              { text: "For the record: this shop was here before that charity compound and it'll be here after.", color: "smoke" },
            ]}
            vibe="Territorial. Old Cy lifers. Not welcoming to strangers but not hostile either."
          />
        ),
      },

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "yellow crane",
          hint: "How you find the place",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="RUBBLE & SONS — INTERNAL"
            notes={[
              "Owner-operated — Rubble, sole proprietor",
              "No staff register",
              "Business predates current Old Cy zoning — grandfathered registration",
              "Has operated on this site for over twenty-five years",
            ]}
          />
        ),
        related_commands: {
          "Personnel File": {
            favicon: <Icons.Person />,
            content: (
              <Nodes.PersonnelFile
                employeeId="OWNER-001"
                name="Rubble"
                position="Owner"
                district="Old Cy — eastern edge"
                notes={[
                  "Real name unknown — has been Rubble for as long as anyone can remember",
                  "Has operated on this site for over twenty-five years",
                  "Was here when the compound was a derelict military installation",
                  "Was here when the Foundation moved in and started renovating",
                  "Sold them their first load of epoxy sealant — didn't know what it was for",
                  "Has been buying anything related to the old installation ever since — blueprints, access records, survey data",
                  "Will not say why. Will pay well.",
                  "Privately believes something went wrong inside the compound a long time ago and has been wrong ever since",
                ]}
                status="ACTIVE"
              />
            ),
          },
          "Back Room Safe": {
            favicon: <Icons.Lock />,
            password: {
              pw: "lot forty",
              hint: "The job that started all of this",
              lockType: 'safe',
            },
            content: (
              <Nodes.Safe
                id="rubble-sons-safe"
                model="DS-200"
                location="Back room — behind the filing cabinet"
                security="Combination"
                physical={[
                  {
                    id: "rubble_cash",
                    label: "Cash",
                    description: "480¤ — mixed, end of week",
                    value: 480,
                    isCredits: true,
                  },
                  {
                    id: "rubble_site_plan",
                    label: "Site plan — partial",
                    description: "Original military installation. Pre-Foundation. Hand-drawn copy — the original was sold years ago. Shows a subterranean level not in any city record.",
                  },
                  {
                    id: "rubble_keycard",
                    label: "Keycard — military spec",
                    description: "Old installation. Pre-Foundation. Found in a salvage lot eighteen months ago. Access level unknown — no reader to test it on.",
                  },
                  {
                    id: "rubble_photo",
                    label: "Photograph",
                    description: "The compound before the Foundation. No wall yet. The main building visible. Something on the roof that isn't there now.",
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
// ROADRUNNER WAYPOINT
// ============================================================================

export const ROADRUNNER_WAYPOINT_COMMANDS = {
  "Clan Waypoint — Old Cy": {
    favicon: <Icons.Traffic />,
    preview: (
      <NodePreview>
        <Line span smoke> · Roadrunner clan waypoint. Old Cy. Fuel, repairs, information.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="ROADRUNNER WAYPOINT — OLD CY"
        tagline="Fuel. Repairs. Move on."
        network="RR_OLDCY"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Old Cy — northern ruins, near the perimeter wall",
          "Roadrunner clan territory — visitors tolerated, not welcomed",
          "Fuel, basic vehicle repair, tyre and track work",
          "Cash or trade — no credchip",
          "Don't ask about the clan. Don't ask about the compound.",
        ]}
        theme="casual"
      >
        <InsetBox title="SERVICES:">
          <Line neon bullet>Fuel — standard and synth blend, 8¤/litre</Line>
          <Line neon bullet>Basic vehicle repair — clan mechanic, price on inspection</Line>
          <Line neon bullet>Tyre and track work — 20¤ flat</Line>
          <Line yellow bullet>Courier relay — clan network only, ask at counter</Line>
        </InsetBox>
        <Nodes.HoursBanner
          hours="Always"
          days="Always"
          location="Old Cy northern ruins — follow the tyre tracks"
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Community Board": {
        favicon: <Icons.Bulletin />,
        content: (
          <Nodes.CommunityBoard
            name="WAYPOINT BOARD"
            location="Pinned to the fuel pump housing"
            posts={[
              { text: "CLAN NOTICE: Northeast approach to compound wall is a hard boundary. Do not cross. Do not stop. Move through fast.", color: "red" },
              { text: "Patrol pattern on the outer road has changed. They're running two vehicles now, staggered. Used to be one.", color: "yellow" },
              { text: "Courier job: Old Cy to Ports, package, no inspection. Ask Sett.", color: "neon" },
              { text: "The gate crowd is getting bigger. Saw a family with kids yesterday. Kids.", color: "smoke" },
            ]}
            vibe="Clipped. Functional. Nobody lingers."
          />
        ),
      },
      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "keep moving",
          hint: "The clan's only rule for outsiders",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="ROADRUNNER WAYPOINT — INTERNAL"
            notes={[
              "Clan-operated — no registered owner",
              "Waypoint coordinator: Sett",
              "Clan territory covers Old Cy eastern and northern approaches",
              "Compound perimeter designated hard boundary — enforced",
            ]}
          />
        ),
        related_commands: {
          "Personnel File": {
            favicon: <Icons.Person />,
            content: (
              <Nodes.PersonnelFile
                employeeId="COORD-001"
                name="Sett"
                position="Waypoint Coordinator"
                district="Old Cy — northern ruins"
                notes={[
                  "Roadrunner clan — waypoint coordinator, Old Cy sector",
                  "Has run this post for seven years",
                  "Knows every approach route to the compound — has mapped them all",
                  "Enforces the clan's hard boundary around the northeast wall",
                  "Three clan members went too close to the compound six months ago — two came back",
                  "Will not discuss what happened to the third",
                  "Will discuss patrol patterns, guard rotations, and delivery schedules for the right price",
                  "Doesn't like the Foundation. Doesn't trust the Foundation. Has never said this out loud.",
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },
    },
  },
};

// ============================================================================
// EX-NEOPHYTE SQUAT
// ============================================================================

export const EX_NEOPHYTE_SQUAT_COMMANDS = {
  "Squat — Old Cy Ruins": {
    favicon: <Icons.House />,
    preview: (
      <NodePreview>
        <Line span smoke> · Abandoned building, Old Cy. Someone living rough inside.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="SQUAT — OLD CY RUINS"
        tagline=""
        network="NONE"
        signalStrength="none"
        status="OCCUPIED"
        statusColor="smoke"
        notes={[
          "Pre-Incident structure — partial collapse, southeast corner",
          "Single occupant — not registered, not affiliated",
          "No network signal — no RetCom access beyond this node",
          "Approach carefully",
        ]}
        theme="casual"
      />
    ),
    related_commands: {
      "Occupant File": {
        favicon: <Icons.Person />,
        content: (
          <Nodes.PersonnelFile
            employeeId="UNKNOWN-001"
            name="Pell"
            position="Unaffiliated"
            district="Old Cy — ruins, southeast"
            notes={[
              "Former Foundation neophyte — left approximately four months ago",
              "Attended community meetings for six weeks before departure",
              "Will not say what made them leave. Body language says enough.",
              "Knows the compound layout from the visitor side — Neophyte Quarters, front gate, the yard",
              "Never saw the Cathedral up close — was never selected",
              "Knows Flower Child by name and by sight — describes her as kind, which makes it worse",
              "Describes a weekly selection process — Armitage at the gate, choosing people from the queue",
              "People selected for what Armitage called 'extended care' were not seen again in the Neophyte Quarters",
              "Pell was nearly selected once. Stepped back. Left the next morning.",
              "Currently: foraging, fishing the lake, surviving",
              "Has nightmares. Won't say about what.",
            ]}
            status="ACTIVE"
          />
        ),
      },
      "Squat Bin": {
        content: (
          <Nodes.SmartBin
            id="old-cy-squat-bin"
            location="Near the entrance"
            status="OFFLINE"
            items={[
              'bandages',
              'painkillers',
              'ration_bar',
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

export const OLD_CY_NEARBY_COMMANDS = {
  ...RUBBLE_SALVAGE_COMMANDS,
  ...ROADRUNNER_WAYPOINT_COMMANDS,
  ...EX_NEOPHYTE_SQUAT_COMMANDS,
};

export default OLD_CY_NEARBY_COMMANDS;
