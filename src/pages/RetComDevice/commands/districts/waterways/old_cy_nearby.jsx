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
                  "Registered as: Rubble & Sons (no sons on record)",
                  "Owner: 'Rubble.' Legal name not on file",
                  "Trading at this site 25+ yrs. Zoning grandfathered, pre-Old Cy designation",
                  "Staff: none registered",
                  "Ledger: First order from the Foundation when they moved in. Industrial epoxy sealant, a lot of it. Paid cash, asked no questions. Neither did I.",
                  "Ledger: Standing buy order on anything from the old installation. Plans, access records, survey data, hardware. Top price.",
                  "Ledger: Bought the salvage lot with the keycard in it. That's when I started paying attention.",
                  "Own note: That ground was wrong before the wall went up. Whatever they're doing in there, they're keeping it in.",
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
// MISSING PERSONS WALL — Secret #2: Armitage is Corto with another face
// ============================================================================

export const LAST_SEEN_WALL_COMMANDS = {
  "Last Seen Wall": {
    favicon: <Icons.Bulletin />,
    preview: (
      <NodePreview>
        <Line span smoke> · Missing persons board. Names, photos, last known places.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.CommunityBoard
        name="LAST SEEN — MISSING PERSONS"
        location="Old Cy shore path, painted wall by the bus shelter"
        posts={[
          { text: "TEODOR MARR, 24. Last seen in the Foundation queue. Tall, scar across the back of his left hand. — Ilse", color: "yellow" },
          { text: "Anyone who came out of the charity: did you see a woman with a red coat? Please.", color: "smoke" },
          { text: "Found my uncle. He's fine. He's staying there. He says. Taking his photo down.", color: "smoke" },
          { text: "Board is run by Ilse. Ask at the bus shelter evenings if you have anything.", color: "neon" },
        ]}
        vibe="Faded photos. Fresh tape. Someone keeps it tidy."
      />
    ),
    related_commands: {
      "Ilse's Drive": {
        favicon: <Icons.Files />,
        password: {
          pw: "teodor",
          hint: "Who she's looking for",
          showCount: true,
        },
        content: (
          <Node
            title="SHARED DRIVE — I. MARR"
            subtitle="Personal. Not for the board."
          />
        ),
        related_commands: {
          "Notes": {
            favicon: <Icons.Files />,
            content: (
              <Nodes.EncryptedMessage
                messages={[
                  "Went to the evening meeting to ask about Teo. The man who runs it now is called Armitage. Friendly. Too friendly.",
                  "Teo's in there. I saw him through the gate, carrying crates. It's his hand, his scar. It isn't his face.",
                  "Old flight crew photo from the salvage lot, the one with the helicopter. Pilot's name on the back: Corto. Look at his hands. Look at the way he stands. Then go to a meeting and watch Armitage.",
                  "Nobody believes me. Faces don't just change.",
                ]}
              />
            ),
          },
          "Photos": {
            favicon: <Icons.Camera />,
            content: (
              <Node
                title="PHOTOS — 3 FILES"
                notes={[
                  "teo_birthday.img — Teodor, before. Grinning, scar visible on the left hand.",
                  "gate_zoom.img — Blurry. A man carrying crates. Same scar. Different face.",
                  "crew_photo_back.img — Two pilots by a rotor craft. Ink on the back: \"Corto & Riviera.\"",
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
// VANISHED MILCORP — Secret #5: someone calculated the mass to cover CY
// ============================================================================

export const HALVARD_FIELD_OFFICE_COMMANDS = {
  "Halvard Systems — Field Office": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · Vacant. Service temporarily unavailable. For two years.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="HALVARD SYSTEMS"
        tagline="Service temporarily unavailable."
        network="HALVARD_FIELD"
        signalStrength="weak"
        status="OFFLINE"
        statusColor="yellow"
        notes={[
          "Defence technology. Advanced APP research.",
          "This office is closed. Please contact your account manager.",
          "Account managers: [NONE ASSIGNED]",
        ]}
        theme="corporate"
      />
    ),
    related_commands: {
      "Cached Intranet": {
        favicon: <Icons.Computer />,
        password: {
          pw: "coverage",
          hint: "What the last project was measuring",
          showFirst: true,
          showCount: true,
          lockType: 'terminal',
        },
        content: (
          <Node
            title="HALVARD — CACHED INTRANET (READ ONLY)"
            notes={[
              "Cache date: two years ago. Nothing newer.",
              "Most directories empty. A few survived.",
            ]}
          />
        ),
        related_commands: {
          "Project Memos": {
            favicon: <Icons.Files />,
            content: (
              <Nodes.EncryptedMessage
                messages={[
                  "PROJECT BLOOM — Phase 2 approved. Field test with two volunteers from flight ops.",
                  "Phase 2 note: subjects report \"hearing it.\" Continue.",
                  "COVERAGE ESTIMATE (rough): raw material required to cover CY municipal area at 2cm depth — see attached. Who asked for this?",
                  "Attachment: coverage_estimate.calc — [FILE INTACT]",
                  "Final entry: all staff to report to the shore site. Bring nothing.",
                ]}
              />
            ),
          },
          "coverage_estimate.calc": {
            favicon: <Icons.Science />,
            content: (
              <Node
                title="COVERAGE_ESTIMATE.CALC"
                notes={[
                  "Area: CY municipal boundary",
                  "Depth: 2cm (minimum viable)",
                  "Required mass: 1.9 × 10^9 kg",
                  "Current mass: [FIELD UPDATED REMOTELY — LAST VALUE 3.1 × 10^6 kg]",
                  "Rate: [FIELD UPDATED REMOTELY]",
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
// CRASH SALVAGE CLAIM — Secret #6: the crash was intentional
// ============================================================================

export const SALVAGE_CLAIM_COMMANDS = {
  "Salvage Claim #4471": {
    favicon: <Icons.Shipping />,
    preview: (
      <NodePreview>
        <Line span smoke> · Rotor craft wreck, Old Cy outskirts. Claim pending.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="CY SALVAGE REGISTRY — CLAIM #4471"
        tagline="Finders, filers."
        network="CY_SALVAGE"
        signalStrength="medium"
        status="ACTIVE"
        statusColor="yellow"
        notes={[
          "Item: rotor craft, military pattern, heavily damaged",
          "Location: Old Cy outskirts, north of the shore path",
          "Status: CLAIM PENDING — owner of record has not responded",
          "Claimant: J. Okonjo",
        ]}
        theme="industrial"
      />
    ),
    related_commands: {
      "Claimant Log": {
        favicon: <Icons.Files />,
        password: {
          pw: "no distress call",
          hint: "What was missing from the crash report",
        },
        content: (
          <Nodes.EncryptedMessage
            messages={[
              "Day 1: Found it. Halvard markings. Filed the claim. Military always comes for their wrecks.",
              "Day 9: Nobody came. Nobody's coming. Flight recorder bay was already open when I got there. Clean cut.",
              "Day 10: Harnesses cut from the inside. Both seats. No blood.",
              "Day 12: Pulled the nav unit. Flight plan was filed with this field as the destination. They meant to put it down here. Or meant to crash it here.",
              "Day 30: Charity people walk past the wreck at night. They don't look at it. They look at me.",
            ]}
          />
        ),
        related_commands: {
          "Cockpit Photo": {
            favicon: <Icons.Camera />,
            content: (
              <Node
                title="COCKPIT_01.IMG"
                notes={[
                  "Both seats empty. Harness straps cut neatly at the buckle.",
                  "Flight recorder bay open. Housing intact. Contents gone.",
                  "Something dried and dark on the instrument panel. Not blood. Doesn't look like anything.",
                ]}
              />
            ),
          },
          "Wreck": {
            favicon: <Icons.Inventory />,
            content: (
              <Nodes.RCDAlert
                id="salvage-4471-wreck"
                message="Recoverable component under the pilot seat. Okonjo missed it."
                physical={[
                  { id: "salvage_4471_nav_card", label: "Nav memory card", description: "Halvard issue. Holds the filed flight plan.", value: 120 },
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
// LAUNDROMAT
// ============================================================================

export const SUDS_SPIN_COMMANDS = {
  "Suds & Spin Laundromat": {
    favicon: <Icons.Services />,
    preview: (
      <NodePreview>
        <Line span smoke> · Coin laundry. Half the machines work. Rooms for rent on the board.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="SUDS & SPIN"
        tagline="Clean enough."
        network="SUDS_POS"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Wash 4¤ · Dry 3¤ · Detergent 1¤",
          "Machines 2, 5 and 6 out of order",
          "Not responsible for lost items. Especially socks.",
        ]}
        theme="casual"
      >
        <Nodes.HoursBanner hours="06:00 — 23:00" days="Daily" location="Old Cy, under the overpass" />
      </Nodes.PublicPortal>
    ),
    related_commands: {
      "Notice Board": {
        favicon: <Icons.Bulletin />,
        content: (
          <Nodes.CommunityBoard
            name="SUDS & SPIN — BOARD"
            location="By the change machine"
            posts={[
              { text: "ROOM FOR RENT: dry, mostly. 200¤/month. Ask for Hedda.", color: "neon" },
              { text: "Whoever keeps taking the good basket: I know who you are.", color: "smoke" },
              { text: "Free kittens. Probably kittens.", color: "smoke" },
            ]}
            vibe="Warm, damp, humming."
          />
        ),
      },
      "Dryer #3": {
        favicon: <Icons.Maintenance />,
        content: (
          <Nodes.RCDAlert
            id="suds-spin-dryer-3"
            message="Unregistered credchip signal behind the lint filter."
            details={["Out-of-order sticker on the door. Nobody's opened it in weeks."]}
            cash={35}
          />
        ),
      },
      "Washer #5": {
        favicon: <Icons.Maintenance />,
        content: (
          <Node
            title="WASHER #5"
            notes={["OUT OF ORDER. Taped shut. Smells like it should stay that way."]}
          />
        ),
      },
    },
  },
};

// ============================================================================
// PIRATE RADIO
// ============================================================================

export const PIRATE_RADIO_COMMANDS = {
  "Pirate Radio Repeater": {
    favicon: <Icons.Radio />,
    preview: (
      <NodePreview>
        <Line span smoke> · Unlicensed relay. Plays whatever it wants.</Line>
      </NodePreview>
    ),
    content: <Nodes.Radio />,
    related_commands: {
      "Late Night Call-In": {
        favicon: <Icons.Radio />,
        content: (
          <Nodes.EncryptedMessage
            messages={[
              "[03:40] CALLER: Is this the show? Is anyone listening?",
              "[03:40] CALLER: I just want to say the lake is louder tonight. That's all. Louder.",
              "[03:41] [CALL DROPPED]",
            ]}
          />
        ),
      },
    },
  },
};

// ============================================================================
// CHARGING KIOSK
// ============================================================================

export const CHARGING_KIOSK_COMMANDS = {
  "Charging Kiosk": {
    favicon: <Icons.Tech />,
    preview: (
      <NodePreview>
        <Line span smoke> · Free RCD charging. Sponsored. Read the terms. Or don't.</Line>
      </NodePreview>
    ),
    content: (
      <Node
        title="FREE CHARGE — SPONSORED BY ALLIANSEN INC."
        subtitle="Plug in. Power up. Opt in."
        notes={[
          "By connecting you agree to the Terms of Service",
          "Terms of Service: 214 pages. Section 31 grants behavioural data rights in perpetuity.",
          "Charging speed: slow, then slower",
        ]}
      />
    ),
    related_commands: {
      "Billing Panel": {
        favicon: <Icons.ATM />,
        content: (
          <Nodes.RCDAlert
            id="old-cy-charging-kiosk-billing"
            message="Rounding bug in the billing panel. Spare change pools in a dead sub-account."
            credits={22}
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
  ...LAST_SEEN_WALL_COMMANDS,
  ...HALVARD_FIELD_OFFICE_COMMANDS,
  ...SALVAGE_CLAIM_COMMANDS,
  ...SUDS_SPIN_COMMANDS,
  ...PIRATE_RADIO_COMMANDS,
  ...CHARGING_KIOSK_COMMANDS,
};

export default OLD_CY_NEARBY_COMMANDS;
