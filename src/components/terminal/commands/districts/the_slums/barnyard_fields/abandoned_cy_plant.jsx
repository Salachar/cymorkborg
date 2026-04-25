import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  BuildingAccess,
  Camera,
  FacilityPortal,
  NetworkActivity,
  Node,
  RCDAlert,
  Workstation,
} from "@terminal/retcomdevice";

export const CY_SANITATION_HQ_COMMANDS = {
  "Abandoned CY_Sanitation HQ": {
    password: {
      pw: 'cynitationhq'
    },
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
        favicon: <Icons.Files />,
        content: (
          <Node
            title="CY_SANITATION HQ — FACILITY DIRECTORY"
            subtitle="Last updated: prior to quarantine"
            notes={[
              "Three-floor facility — basement, lower offices, management offices",
              "Total staff at time of quarantine: 34",
              "Building systems: centralized power, HVAC, sewage regulation",
              "Emergency protocols: see Safety & Compliance binder, Floor 1 reception",
            ]}
          />
        ),
        related_commands: {

          "Basement": {
            favicon: <Icons.Maintenance />,
            content: (
              <Node
                title="CY_SANITATION HQ — BASEMENT"
                subtitle="Mechanical & Infrastructure Level"
                notes={[
                  "Access: Stairwell from lower offices lobby",
                  "Primary function: Power generation, sewage regulation, building services",
                  "Authorized personnel: Maintenance division only",
                ]}
              />
            ),
            related_commands: {
              "Power Room": {
                favicon: <Icons.Maintenance />,
                content: (
                  <Node
                    title="POWER ROOM — B6"
                    subtitle="Primary Power Generation"
                    notes={[
                      "Main building generator — diesel backup system",
                      "Rated capacity: 72 hours continuous operation",
                      "Last serviced: see maintenance log on panel",
                      "Emergency restart procedure posted on east wall",
                    ]}
                  />
                ),
              },

              "Conduit Room": {
                favicon: <Icons.Maintenance />,
                content: (
                  <Node
                    title="CONDUIT ROOM — B7"
                    subtitle="Pipe Infrastructure & Water Systems"
                    notes={[
                      "Primary water intake and distribution manifold",
                      "Houses main building water tanks — capacity 4,000L each",
                      "Ventilation note: insect ingress reported, screening repair pending",
                    ]}
                  />
                ),
              },

              "Security Office": {
                favicon: <Icons.Security />,
                content: (
                  <Node
                    title="SECURITY OFFICE — B8"
                    subtitle="Basement Security Control"
                    notes={[
                      "Central monitoring station — 6 camera feeds",
                      "Access control panel for basement level",
                      "Emergency lockdown controls",
                      "Staff: 1 security officer per shift",
                    ]}
                  />
                ),
              },

              "Sewer Regulators": {
                favicon: <Icons.Maintenance />,
                content: (
                  <Node
                    title="SEWER REGULATORS — B9–B12"
                    subtitle="Municipal Sewage Regulation Units"
                    notes={[
                      "Four regulation units — independent operation",
                      "Monitors and controls sewage flow for Ports/Barnyard Fields sector",
                      "Units rated for 40-year service life — last replaced: see installation log",
                      "Maintenance schedule: quarterly inspection required",
                      "Fault reporting: direct line to CY_Sanitation municipal operations",
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
                title="CY_SANITATION HQ — LOWER OFFICES"
                subtitle="Ground Floor Operations"
                notes={[
                  "Primary staff operations floor — 5 rooms",
                  "Capacity: 18 workstations",
                  "Public-facing reception on this floor",
                  "Break facilities: see The Pit, east end",
                ]}
              />
            ),
            related_commands: {
              "Lobby": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="LOBBY — ROOM 1"
                    subtitle="Main Entrance & Public Access"
                    notes={[
                      "Public entrance — visitor check-in required",
                      "Building directory posted on north wall",
                      "Emergency evacuation map: see south wall",
                    ]}
                  />
                ),
              },

              "Reception": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="RECEPTION — ROOM 2"
                    subtitle="Main Reception & Administration"
                    notes={[
                      "Staff: 2 reception officers per shift",
                      "Visitor log maintained at front desk",
                      "Mail and package intake processed here",
                      "Building-wide intercom access at reception terminal",
                    ]}
                  />
                ),
              },

              "Ancillary Office A": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="ANCILLARY OFFICE A — ROOM 3"
                    subtitle="Administrative Operations"
                    notes={[
                      "8 workstations — accounts and billing division",
                      "Restricted access — keycard required",
                      "Filing cabinets: invoices, contracts, correspondence (archived quarterly)",
                    ]}
                  />
                ),
              },

              "Ancillary Office B": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="ANCILLARY OFFICE B — ROOM 4"
                    subtitle="Operations Division"
                    notes={[
                      "6 workstations — field operations coordination",
                      "Dispatch terminal for sanitation vehicle fleet",
                      "Daily incident reports filed from this room",
                    ]}
                  />
                ),
              },

              "The Pit": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="THE PIT — ROOM 5"
                    subtitle="General Staff Floor"
                    notes={[
                      "Open plan — 12 workstations, general operations",
                      "Break area: east corner, microwave and coffee facilities",
                      "Staff notice board near east exit",
                      "Known issue: fluorescent light #3 flickering — repair request submitted",
                    ]}
                  />
                ),
              },
            },
          },

          "Management Offices": {
            favicon: <Icons.Files />,
            content: (
              <Node
                title="CY_SANITATION HQ — MANAGEMENT OFFICES"
                subtitle="Second Floor Management Level"
                notes={[
                  "Management and executive operations — 7 rooms",
                  "Restricted floor — management keycard required",
                  "Senior staff offices and meeting facilities",
                ]}
              />
            ),
            related_commands: {
              "Upper Reception": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="UPPER RECEPTION — ROOM 13"
                    subtitle="Management Floor Reception"
                    notes={[
                      "Appointment-only access to management floor",
                      "Reception terminal — visitor log and scheduling",
                      "Waiting area: 6 seats",
                    ]}
                  />
                ),
              },

              "Middle Management Floor": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="MIDDLE MANAGEMENT — ROOM 14"
                    subtitle="Departmental Management"
                    notes={[
                      "8 workstations — department heads and senior supervisors",
                      "Weekly performance review meetings held here",
                      "Projector and presentation screen installed east wall",
                    ]}
                  />
                ),
              },

              "Leisure Room": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="LEISURE ROOM — ROOM 15"
                    subtitle="Management Recreation Facility"
                    notes={[
                      "Pool table, pinball machines, dartboard",
                      "Restricted to management staff and guests",
                      "Booking required for after-hours use — see reception terminal",
                    ]}
                  />
                ),
              },

              "Bathrooms": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="BATHROOMS — ROOMS 16 & 17"
                    subtitle="Staff Facilities"
                    notes={[
                      "Room 16: South side — 4 stalls, 2 sinks",
                      "Room 17: North side — 4 stalls, 2 sinks",
                      "Cleaning schedule: twice daily",
                      "Known issue: Room 17 toilet #2 running — maintenance request submitted",
                    ]}
                  />
                ),
              },

              "Corner Office — Senior": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="SENIOR CORNER OFFICE — ROOM 18"
                    subtitle="Director of Operations"
                    notes={[
                      "Restricted — director access only",
                      "Private meeting space for 4",
                      "Direct line to municipal oversight board",
                      "Filing system: confidential contracts and compliance records",
                    ]}
                  />
                ),
              },

              "Corner Office — Junior": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="JUNIOR CORNER OFFICE — ROOM 19"
                    subtitle="Deputy Operations Manager"
                    notes={[
                      "4 workstations — deputy management team",
                      "Interdepartmental coordination handled here",
                      "View: city street, east-facing",
                    ]}
                  />
                ),
              },
            },
          },
        },
      },

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: 'abandon hope',
        },
        content: (
          <Node
            title="CY_SANITATION HQ — INTERNAL SYSTEMS"
            subtitle="Staff access only — all actions logged"
          >
            <RCDAlert
              message="Network offline since quarantine. Historical records accessible. No live systems."
              details={[
                "All active systems went offline at time of quarantine — logs terminate abruptly",
                "Jackpoints present throughout building — non-functional without power",
                "Security footage corrupted — final hours of operation partially recoverable",
                "AI system offload logged in corporate records — destination subsidiary redacted",
              ]}
            />
          </Node>
        ),
        related_commands: {
          "Building Access": {
            favicon: <Icons.Lock />,
            content: (
              <BuildingAccess
                title="CY_SANITATION HQ — ACCESS CONTROL"
                points={[
                  {
                    location: "Perimeter Wall",
                    access: ["Twenty-foot reinforced cement — no active gates"],
                    notes: ["Quarantine monitoring active — breach logged to city systems"],
                  },
                  {
                    location: "Main Entrance",
                    access: ["Sealed — industrial plastic sheathing applied at quarantine"],
                    notes: ["Plastic sheathing is airtight — breach compromises Nano containment"],
                  },
                  {
                    location: "Interior Doors",
                    access: ["Mechanical locks — electronic override offline"],
                    notes: ["Electronic access restoration requires main power online"],
                  },
                  {
                    location: "Restricted Areas",
                    access: ["Rooms 3, 15, 18 — management keycard required"],
                    notes: ["Remote unlock available via reception jackpoints when power restored"],
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
                environment={{ power: "OFFLINE", uptime: "0 days", status: "QUARANTINE" }}
                devices={[
                  { name: "Power Generator", location: "Basement B6", status: "OFFLINE" },
                  { name: "Sewer Regulator 1", location: "Basement B9", status: "OFFLINE" },
                  { name: "Sewer Regulator 2", location: "Basement B10", status: "OFFLINE" },
                  { name: "Sewer Regulator 3", location: "Basement B11", status: "OFFLINE" },
                  { name: "Sewer Regulator 4", location: "Basement B12", status: "OFFLINE" },
                  { name: "Security Console", location: "Basement B8", status: "OFFLINE" },
                  { name: "Reception Terminal", location: "Lower Offices Room 2", status: "OFFLINE" },
                  { name: "Upper Reception Terminal", location: "Management Room 13", status: "OFFLINE" },
                  { name: "Workstations x22", location: "Various", status: "OFFLINE" },
                  { name: "Jackpoints x7", location: "Various", status: "OFFLINE — require power" },
                ]}
              />
            ),
          },

          "Final Security Log": {
            favicon: <Icons.Files />,
            content: (
              <Node
                title="SECURITY LOG — FINAL ENTRIES"
                subtitle="Recovered from corrupted backup — partial data only"
                notes={[
                  "Entry 0847: Nano infestation confirmed in basement conduit room — containment protocols initiated",
                  "Entry 0851: Containment failed — infestation spreading to lower offices",
                  "Entry 0853: Evacuation order issued — staff ordered to shelter in place pending municipal response",
                  "Entry 0854: Municipal response: quarantine approved — no evacuation",
                  "Entry 0855: External communications severed",
                  "Entry 0901: [CORRUPTED]",
                  "Entry 0902: [CORRUPTED]",
                  "Entry 0903: [LOG ENDS]",
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
