import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  Camera,
  FacilityPortal,
  Node,
  NetworkActivity,
  RCDAlert,
  BuildingAccess,
} from "@terminal/retcomdevice";

export const CY_SANITATION_HQ_COMMANDS = {
  "Abandoned CY_Sanitation HQ": {
    favicon: <Icons.Warning />,
    preview: (
      <NodePreview>
        <Line span red> · Quarantined. Abandoned. Nano-infested. Nobody has checked on it in decades.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="CY_SANITATION HEADQUARTERS"
        tagline="Municipal waste management — operations transferred to subsidiary."
        location="Ports/Barnyard Fields border"
        owner="CY_Sanitation (DEFUNCT — operations transferred to corporate subsidiary)"
        warnings={[
          "QUARANTINE ZONE — Nano infestation confirmed",
          "Twenty-foot cement perimeter wall — building sheathed in industrial plastic",
          "No authorized entry — no inspection on record since quarantine",
          "Staff were not evacuated at time of quarantine",
        ]}
        theme="secure"
      >
        <RCDAlert
          message="CY_Sanitation's AI was offloaded to a corporate subsidiary after quarantine. The building has never been inspected. Staff remain inside."
          details={[
            "Three floors: basement (power generator, sewer regulators), lower offices, management offices",
            "Power offline since quarantine — mechanical locks only until generator is restored",
            "Paper records inside document the AI transfer — trail goes cold after subsidiary handoff",
          ]}
        />
      </FacilityPortal>
    ),
    related_commands: {
      "Facility Directory": {
        favicon: <Icons.Maintenance />,
        content: (
          <Node
            title="[CY_SANITATION HQ — BASEMENT]"
            notes={[
              "Power offline — all electronic locks non-functional",
              "Generator restoration required before any digital systems are accessible",
              "Jackpoints present but inactive",
            ]}
          >
            <RCDAlert
              message="Six rooms on record. Generator and all four sewer regulators located here."
              details={[
                "Room 6: Power generator — restart required first",
                "Room 7: Conduit room — industrial pipes, water tanks",
                "Room 8: Security office — monitors smashed, jackpoint on central console",
                "Rooms 9–12: Four sewer regulators — each has a jackpoint for direct interface",
              ]}
            />
          </Node>
        ),
        related_commands: {
          "Basement": {
            favicon: <Icons.Maintenance />,
            password: {
              pw: 'basement',
            },
            content: (
              <Node
                title="[CY_SANITATION HQ — BASEMENT]"
                notes={[
                  "Power offline — all electronic locks non-functional",
                  "Generator restoration required before any digital systems are accessible",
                  "Jackpoints present but inactive",
                ]}
              >
                <RCDAlert
                  message="Six rooms on record. Generator and all four sewer regulators located here."
                  details={[
                    "Room 6: Power generator — restart required first",
                    "Room 7: Conduit room — industrial pipes, water tanks",
                    "Room 8: Security office — monitors smashed, jackpoint on central console",
                    "Rooms 9–12: Four sewer regulators — each has a jackpoint for direct interface",
                  ]}
                />
              </Node>
            ),
            related_commands: {
              "Power Room": {
                favicon: <Icons.Maintenance />,
                content: (
                  <Node
                    title="[POWER ROOM — ROOM 6]"
                    notes={[
                      "Industrial generator — dormant since quarantine",
                      "Restart procedure available on panel",
                      "Generator runtime: limited — requires maintenance to extend",
                      "Restoring power enables all electronic locks and jackpoints in the building",
                    ]}
                  />
                ),
              },

              "Conduit Room": {
                favicon: <Icons.Maintenance />,
                content: (
                  <Node
                    title="[CONDUIT ROOM — ROOM 7]"
                    notes={[
                      "Industrial pipe network — several large dormant water tanks",
                      "Heavy insect activity — audible buzzing",
                    ]}
                  />
                ),
              },

              "Security Office": {
                favicon: <Icons.Security />,
                content: (
                  <Node
                    title="[SECURITY OFFICE — ROOM 8]"
                    notes={[
                      "Last line of defense — shattered barricade, scattered shell casings",
                      "Monitors smashed — no camera feeds available",
                      "Jackpoint on central console — requires power",
                    ]}
                  />
                ),
              },

              "Sewer Regulators": {
                favicon: <Icons.Maintenance />,
                content: (
                  <Node
                    title="[SEWER REGULATORS — ROOMS 9–12]"
                    notes={[
                      "Four regulators — basement level, separate rooms",
                      "Each has a dedicated jackpoint — requires power to access",
                      "Too old to hack conventionally — direct interface required",
                      "Custom APP required per regulator",
                    ]}
                  />
                ),
              },
            },
          },

          "Lower Offices": {
            favicon: <Icons.Files />,
            content: (
              <Node
                title="[CY_SANITATION HQ — LOWER OFFICES]"
                notes={[
                  "Five rooms — primary search area for paper trail",
                  "Jackpoints in reception and ancillary offices — require power",
                  "Evidence of violent quarantine event throughout",
                ]}
              >
                <RCDAlert
                  message="Paper trail clues concentrated here. Most cubicle computers destroyed — some intact."
                  details={[
                    "Room 1: Lobby — no computers, evidence of mass casualty event",
                    "Room 2: Reception — jackpoint on desk, computers destroyed",
                    "Room 3: Ancillary Office A — locked, cubicles with computers, hidden jackpoint",
                    "Room 4: Ancillary Office B — cubicles with computers destroyed, hidden jackpoint",
                    "Room 5: The Pit — cubicles with computers intact",
                  ]}
                />
              </Node>
            ),
            related_commands: {
              "Lobby": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="[LOBBY — ROOM 1]"
                    notes={[
                      "Bloodsoaked linoleum — piles of decomposed remains",
                      "Shell casings scattered across the floor",
                      "Graffiti: \"Smile, it's CLEAN!\"",
                      "No computers — no paper trail here",
                    ]}
                  />
                ),
              },

              "Reception": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="[RECEPTION — ROOM 2]"
                    notes={[
                      "Cold, dated design",
                      "Cubicles — computers destroyed",
                      "Jackpoint on reception desk — requires power",
                    ]}
                  />
                ),
              },

              "Ancillary Office A": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="[ANCILLARY OFFICE A — ROOM 3]"
                    notes={[
                      "Locked",
                      "Cubicles with computers — intact",
                      "Faint smell of lavender and chamomile — personal effects still here",
                      "Hidden jackpoint beneath a desk — requires power",
                    ]}
                  />
                ),
              },

              "Ancillary Office B": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="[ANCILLARY OFFICE B — ROOM 4]"
                    notes={[
                      "Office-turned-battleground — improvised weapons, bloodstains",
                      "Cubicles — computers destroyed",
                      "Hidden jackpoint beneath a desk — requires power",
                    ]}
                  />
                ),
              },

              "The Pit": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="[THE PIT — ROOM 5]"
                    notes={[
                      "Open plan cubicle floor — computers intact",
                      "Personal effects everywhere — photos, motivational posters",
                      "Feels like everyone left mid-shift",
                    ]}
                  />
                ),
              },
            },
          },

          "Management Offices": {
            favicon: <Icons.Files />,
            password: {
              pw: 'management',
            },
            content: (
              <Node
                title="[CY_SANITATION HQ — MANAGEMENT OFFICES]"
                notes={[
                  "Seven rooms — paper trail converges here",
                  "Most locked rooms require power to hack open",
                  "Jackpoints in upper reception and corner offices — require power",
                ]}
              >
                <RCDAlert
                  message="Higher concentration of clues. Some rooms locked — power required."
                  details={[
                    "Room 13: Upper reception — jackpoint on desk, can unlock rooms 15 and 17",
                    "Room 14: Middle management floor — cubicles with computers",
                    "Room 15: Leisure room — locked, hidden jackpoint behind pinball machines",
                    "Room 16: Bathroom A — no computers",
                    "Room 17: Bathroom B — no computers",
                    "Room 18: Very prestigious corner office — locked, cubicles with computers, hidden jackpoint",
                    "Room 19: Less prestigious corner office — cubicles with computers destroyed, hidden jackpoint",
                  ]}
                />
              </Node>
            ),
            related_commands: {
              "Upper Reception": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="[UPPER RECEPTION — ROOM 13]"
                    notes={[
                      "Like reception downstairs — purposefully uncomfortable",
                      "Burnt furniture — someone tried to start a fire",
                      "Cubicles — computers destroyed",
                      "Jackpoint on desk — requires power, can unlock rooms 15 and 17",
                    ]}
                  />
                ),
              },

              "Middle Management Floor": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="[MIDDLE MANAGEMENT — ROOM 14]"
                    notes={[
                      "Cubicles with computers — intact",
                      "Charts, figures, efficiency metrics everywhere — all worthless",
                      "Smells like sweat — single broken window",
                    ]}
                  />
                ),
              },

              "Leisure Room": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="[LEISURE ROOM — ROOM 15]"
                    notes={[
                      "Locked — requires power to hack open, or upper reception jackpoint",
                      "Pool cues missing — taken as weapons",
                      "Pinball machines along the wall",
                      "Hidden maintenance jackpoint behind one of the pinball machines — requires power",
                    ]}
                  />
                ),
              },

              "Bathrooms": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="[BATHROOMS — ROOMS 16 & 17]"
                    notes={[
                      "Room 16: Mirrors smashed — dried blood on broken edges",
                      "Room 16: Each stall appears to have served as a confession booth",
                      "Room 17: Floor covered in thin layer of bloody water — toilets still leaking",
                      "No computers in either — no paper trail",
                    ]}
                  />
                ),
              },

              "Very Prestigious Corner Office": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="[VERY PRESTIGIOUS CORNER OFFICE — ROOM 18]"
                    notes={[
                      "Locked — requires power to hack open, or upper reception jackpoint",
                      "Smug, tacky decor — portrait of former occupant, defaced",
                      "Cubicles with computers — intact",
                      "Hidden jackpoint beneath the desk — requires power",
                    ]}
                  />
                ),
              },

              "Less Prestigious Corner Office": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="[LESS PRESTIGIOUS CORNER OFFICE — ROOM 19]"
                    notes={[
                      "Dismal view of the city street through industrial plastic",
                      "Everything of value stripped in post-quarantine looting",
                      "Cubicles — computers destroyed",
                      "Hidden jackpoint beneath the desk — requires power",
                    ]}
                  />
                ),
              },
            },
          },
        },
      },

      "Internal Access": {
        favicon: <Icons.Maintenance />,
        password: {
          pw: 'abandon hope',
        },
        content: (
          <Node
            title="[CY_SANITATION HQ — BASEMENT]"
            notes={[
              "Power offline — all electronic locks non-functional",
              "Generator restoration required before any digital systems are accessible",
              "Jackpoints present but inactive",
            ]}
          >
            <RCDAlert
              message="Six rooms on record. Generator and all four sewer regulators located here."
              details={[
                "Room 6: Power generator — restart required first",
                "Room 7: Conduit room — industrial pipes, water tanks",
                "Room 8: Security office — monitors smashed, jackpoint on central console",
                "Rooms 9–12: Four sewer regulators — each has a jackpoint for direct interface",
              ]}
            />
          </Node>
        ),
        related_commands: {
          "Building Access": {
            favicon: <Icons.Lock />,
            content: (
              <BuildingAccess
                title="CY_SANITATION HQ — ACCESS"
                points={[
                  {
                    location: "Main Entrance",
                    access: ["Sealed — industrial plastic sheathing over all exterior openings"],
                    notes: ["Plastic must be cut or torn to enter — breaching it risks spreading Nano infestation"],
                  },
                  {
                    location: "Perimeter Wall",
                    access: ["Twenty-foot cement — no gates on record"],
                    notes: ["Ladder or grapple required", "Wall monitored by automated city quarantine systems — breach logged"],
                  },
                  {
                    location: "Interior Doors",
                    access: ["Mechanical locks only — no power"],
                    notes: ["Can be forced or picked", "Hackable only after generator is restored"],
                  },
                ]}
              />
            ),
          },

          "Facility Network": {
            favicon: <Icons.LAN />,
            content: (
              <NetworkActivity
                title="CY_SANITATION_LOCAL"
                environment={{ power: "OFFLINE", status: "QUARANTINE" }}
                devices={[
                  { name: "Power Generator", location: "Basement — Room 6", status: "OFFLINE" },
                  { name: "Sewer Regulator 1", location: "Basement — Room 9", status: "OFFLINE" },
                  { name: "Sewer Regulator 2", location: "Basement — Room 10", status: "OFFLINE" },
                  { name: "Sewer Regulator 3", location: "Basement — Room 11", status: "OFFLINE" },
                  { name: "Sewer Regulator 4", location: "Basement — Room 12", status: "OFFLINE" },
                  { name: "Security Console", location: "Basement — Security Office", status: "OFFLINE" },
                  { name: "Reception Terminal", location: "Lower Offices — Reception", status: "OFFLINE" },
                  { name: "Upper Reception Terminal", location: "Management Offices", status: "OFFLINE" },
                  { name: "Jackpoints (scattered)", location: "Various — offices and basement", status: "OFFLINE — require power" },
                ]}
              />
            ),
          },
        },
      },
    },
  },
};

export default CY_SANITATION_HQ_COMMANDS;
