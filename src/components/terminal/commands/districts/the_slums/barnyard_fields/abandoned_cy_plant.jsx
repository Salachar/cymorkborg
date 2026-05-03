import Icons from '@utils/icons';

import {
  Divider,
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  ATM,
  BuildingAccess,
  Camera,
  DigitalWallet,
  Extractable,
  FacilityPortal,
  LocalAd,
  NetworkActivity,
  Node,
  RetComImage,
  RCDAlert,
  Workstation,
  Devices,
  Safe,
  EncryptedMessage,
  ShiftSchedule,
} from "@terminal/retcomdevice";

import basement_bp from '@images/blueprints/corporate-office-2/corporate-office-2-basement-blueprint.jpg';
import floor1_bp from '@images/blueprints/corporate-office-2/corporate-office-2-floor-1-blueprint.jpg';
import floor2_bp from '@images/blueprints/corporate-office-2/corporate-office-2-floor-2-blueprint.jpg';
import roof_bp from '@images/blueprints/corporate-office-2/corporate-office-2-roof-blueprint.jpg';

export const CY_SANITATION_HQ_COMMANDS = {
  "Abandoned CY_Sanitation HQ": {
    password: {
      pw: 'cynitationhq'
    },
    favicon: <Icons.Warning />,
    preview: (
      <NodePreview>
        <Line span red> · Quarantined. Stay clear.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        theme="secure"
        companyName="CY_SANITATION HEADQUARTERS"
        tagline="Municipal waste management — operations transferred to subsidiary."
        location="Ports/Barnyard Fields border"
        owner="CY_Sanitation (DEFUNCT)"
        warnings={[
          "QUARANTINE ZONE — Nano infestation confirmed",
          "No authorized entry — no inspection on record since quarantine",
        ]}
      >
        <InsetBox color="yellow" title="Quarantine Measures:">
          <Line yellow bullet bold>Twenty-foot cement perimeter wall</Line>
          <Line yellow bullet bold>Building sheathed in industrial plastic — sealed</Line>
          <Line yellow bullet bold>Containment airlock — operational</Line>
        </InsetBox>
        <RCDAlert
          message="CY_Sanitation records found"
          details={[
            "Staff were not evacuated at time of quarantine",
            "City Inspections have detected signs of life as recent as two weeks ago",
          ]}
        />
      </FacilityPortal>
    ),
    related_commands: {
      "Concierge": {
        favicon: <Icons.Room />,
        content: (
          <Node
            title="Concierge"
            subtitle="Main Entrance & Public Access"
            notes={[
              "Public entrance — visitor check-in required",
              "Emergency evacuation map: see south wall",
            ]}
          >
            <LocalAd
              name="Employee Spotlight!"
              subtitle="10 Year Anniversary!"
              products={[
                "Congratulations to Director Venn on ten years with CY_Sanitation.",
                "A decade of dedicated service to the city's waste management infrastructure.",
                "Join us Friday for cake in the second floor reception. All staff welcome.",
              ]}
            />
          </Node>
        ),
        related_commands: {
          "ATM": {
            favicon: <Icons.ATM />,
            content: (
              <ATM
                id="cy_sanitation_hq_atm"
                location="CY_Sanitation HQ - Lobby"
                credits={50}
              />
            ),
          },

          "Vending Machine": {
            content: (
              <Devices.VendingMachine />
            )
          },

          "Coffee Machine": {
            content: (
              <Devices.CoffeeMachine>
                <DigitalWallet
                  id="cysan_con_coffee_machine_wallet"
                  label="Please buy more coffee, light roast is available"
                  credits={50}
                />
              </Devices.CoffeeMachine>
            )
          },
        },
      },

      "Corporate Portal": {
        password: {
          pw: 'connoissewer',
          hint: 'What do you call a sewer expert?',
          showFirst: true,
          showCount: true,
        },
        favicon: <Icons.Files />,
        content: (
          <Node
            title="CY_SANITATION HQ — CORPORATE PORTAL"
            subtitle="Employee Intranet — Internal Use Only"
            notes={[
              "Welcome, valued employee",
              "Reminder: Q3 performance reviews are due Friday",
              "The Pit kitchen microwave is out of service — maintenance request submitted",
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
                    ]}
                  />
                ),
                related_commands: {
                  "Power Generator": {
                    password: {
                      pw: 'megawatts',
                      hint: 'Some big energy',
                      showFirst: true,
                    },
                    content: (
                      <Node
                        title="POWER GENERATOR — PG234"
                        subtitle="CY_Sanition HQ Power Generator"
                        notes={[
                          "Core functionality offline",
                          "Basic diagnostic connection established",
                        ]}
                      >
                        <InsetBox color="yellow" title="Features:">
                          <Line yellow bold>+2 on Knowledge check to start/keep running</Line>
                        </InsetBox>
                      </Node>
                    )
                  }
                }
              },

              "Security Office": {
                password: {
                  pw: 'bar stool',
                  hint: 'Sit on it or flush one down at the pub',
                },
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
                  >
                    <RCDAlert
                      title="Jackpoint detected"
                    />
                  </Node>
                ),
                related_commands: {
                  "Sig's Terminal": {
                    content: (
                      <Devices.Workstation />
                    )
                  },
                },
              },

              "Sewer Regulators": {
                favicon: <Icons.Maintenance />,
                content: (
                  <Node
                    title="SEWER REGULATORS — B9-B12"
                    subtitle="Municipal Sewage Regulation Units"
                    notes={[
                      "Four offline regulator units",
                      "Monitors and controls sewage flow for Ports/Barnyard Fields sector",
                      "Units rated for 40-year service life — last replaced: see installation log",
                      "Maintenance schedule: quarterly inspection required",
                      "Fault reporting: direct line to CY_Sanitation municipal operations",
                    ]}
                  />
                ),
                related_commands: {
                  "Regulator Unit 1": {
                    content: (
                      <Node
                        title="SEWER REGULATOR — UNIT 1"
                        subtitle="Municipal Sewage Regulation Unit"
                        notes={[
                          "Offline. Basic maintenance connection established",
                        ]}
                      >
                        <InsetBox color="yellow" title="Features:">
                          <Line yellow bold>+2 on Knowledge check to sabotage</Line>
                        </InsetBox>
                      </Node>
                    )
                  },
                  "Regulator Unit 2": {
                    password: {
                      pw: 'royalflush',
                      hint: 'When a king sends one home',
                      showCount: true,
                    },
                    content: (
                      <Node
                        title="SEWER REGULATOR — UNIT 2"
                        subtitle="Municipal Sewage Regulation Unit"
                        notes={[
                          "Offline. Basic maintenance connection established",
                        ]}
                      >
                        <InsetBox color="yellow" title="Features:">
                          <Line yellow bold>+2 on Knowledge check to sabotage</Line>
                        </InsetBox>
                      </Node>
                    )
                  },
                  "Regulator Unit 3": {
                    password: {
                      pw: 'nsink',
                      hint: 'Where I was my hands, This I Promise You',
                      showCount: true,
                    },
                    content: (
                      <Node
                        title="SEWER REGULATOR — UNIT 3"
                        subtitle="Municipal Sewage Regulation Unit"
                        notes={[
                          "Offline. Basic maintenance connection established",
                        ]}
                      >
                        <InsetBox color="yellow" title="Features:">
                          <Line yellow bold>+2 on Knowledge check to sabotage</Line>
                        </InsetBox>
                      </Node>
                    )
                  },
                  "Regulator Unit 4": {
                    password: {
                      pw: 'upperdecker',
                      hint: 'Leaving one in the tank...',
                    },
                    content: (
                      <Node
                        title="SEWER REGULATOR — UNIT 4"
                        subtitle="Municipal Sewage Regulation Unit"
                        notes={[
                          "Offline. Basic maintenance connection established",
                        ]}
                      >
                        <InsetBox color="yellow" title="Features:">
                          <Line yellow bold>+2 on Knowledge check to sabotage</Line>
                        </InsetBox>
                      </Node>
                    )
                  }
                }
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
              "Reception": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="RECEPTION"
                    subtitle="Main Reception & Administration"
                    notes={[
                      "Staff: 2 reception officers per shift",
                      "Visitor log maintained at front desk",
                      "Mail and package intake processed here",
                      "Building-wide intercom access at reception terminal",
                    ]}
                  >
                    <RCDAlert
                      title="Jackpoint detected"
                    />
                  </Node>
                ),
                related_commands: {
                  "Petra's Terminal": {
                    content: <Devices.Workstation />,
                  },
                },
              },

              "Accounts & Billing": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="ACCOUNTS & BILLING"
                    subtitle="Administrative Operations"
                    notes={[
                      "8 workstations — accounts and billing division",
                      "Restricted access — keycard required",
                      "Filing cabinets: invoices, contracts, correspondence (archived quarterly)",
                    ]}
                  />
                ),
                related_commands: {
                  "Marta's Workstation": {
                    content: (
                      <Devices.Workstation />
                    ),
                  },
                  "Unoccupied Workstation": {
                    password: {
                      pw: "mr clean",
                      hint: "Aggressively white and bald cleaning mascot",
                    },
                    content: (
                      <Devices.Workstation>
                        <EncryptedMessage
                          messages={[
                            "CLUE: Marta — if you get this, east loading dock, 06:00. Service van coming — white, logo looks like a spider or a wheel or something. Don't ask questions just get in. — D",
                          ]}
                        />
                      </Devices.Workstation>
                    ),
                  },
                },
              },

              "Operations Dispatch": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="OPERATIONS DISPATCH"
                    subtitle="Field Operations Coordination"
                    notes={[
                      "6 workstations — field operations coordination",
                      "Dispatch terminal for sanitation vehicle fleet",
                      "Daily incident reports filed from this room",
                    ]}
                  />
                ),
                related_commands: {
                  "Ray's Workstation": {
                    content: <Devices.Workstation />,
                  },
                },
              },

              "The Pit": {
                password: {
                  pw: 'loo diamond philips',
                  hint: 'bathroom gemstone screwdriver',
                  showCount: true,
                },
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="THE PIT"
                    subtitle="General Staff Floor"
                    table={{
                      capacity: "12 workstations",
                      division: "General Operations",
                      floor: "Lower Offices",
                    }}
                    notes={[
                      "Break area: east corner — microwave, coffee facilities",
                      "Staff notice board near east exit",
                    ]}
                    alerts={[
                      "Fluorescent light #3 flickering — repair request submitted (ref: MNT-2291)",
                      "Microwave out of service — do not use until further notice",
                      "Reminder: label your food in the fridge. This is the third notice.",
                    ]}
                  />
                ),
                related_commands: {
                  "Pit Radio": {
                    content: (
                      <Devices.Radio />
                    )
                  },
                  "Smart Fridge": {
                    content: (
                      <Devices.SmartFridge />
                    )
                  },
                  "Smart Bin": {
                    content: (
                      <Devices.SmartBin
                        id="cy_plant_pitt_bin"
                        items={[
                          'duct_tape',
                          'thermos',
                        ]}
                      />
                    )
                  },
                  "Dave's Workstation": {
                    content: (
                      <Devices.Workstation
                        lastActivity="Items entered into desk safe"
                      />
                    ),
                    related_commands: {
                      "Desk Safe": {
                        password: {
                          pw: "osei",
                          hint: "Password recently reset to employee's last name",
                        },
                        content: (
                          <Safe
                            id="cysan_dave_desk_safe"
                            title="Desk Safe"
                            items={[
                              "red_juice",
                              "adrenachrome",
                              "earplugs",
                            ]}
                          />
                        ),
                      },
                    }
                  },
                  "Workstation 2": {
                    content: (
                      <Devices.Workstation />
                    )
                  },
                  "Workstation 3": {
                    content: (
                      <Devices.Workstation />
                    ),
                    related_commands: {
                      "PulsePlay": {
                        content: (
                          <Devices.GameConsole>
                            <DigitalWallet
                              id="cysan_work_console_wallet"
                              label="Gotta save up for a new game to get through work"
                              credits={50}
                            />
                          </Devices.GameConsole>
                        )
                      },
                    }
                  },
                  "Workstation 4": {
                    content: (
                      <Devices.Workstation />
                    )
                  },
                }
              },
            },
          },

          "Management Offices": {
            password: {
              pw: "A WELL ACTUALLY",
              hint: "Where does a know-it-all get there water from?",
            },
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
              "Management Reception": {
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
                  >
                    <RCDAlert
                      title="Jackpoint detected"
                    />
                  </Node>
                ),
                related_commands: {
                  "Coffee Machine": {
                    content: (
                      <Devices.CoffeeMachine />
                    )
                  }
                }
              },

              "Department Floor": {
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
                related_commands: {
                  "Smart Bin": {
                    content: (
                      <Devices.SmartBin
                        id="cy_plant_mm_floor_bin"
                        items={[
                          'duct_tape',
                        ]}
                      />
                    )
                  },
                  "Workstation 1": {
                    content: (
                      <Devices.Workstation />
                    )
                  },
                  "Workstation 2": {
                    content: (
                      <Devices.Workstation />
                    )
                  },
                  "Workstation 3": {
                    content: (
                      <Devices.Workstation />
                    )
                  },
                  "Workstation 4": {
                    content: (
                      <Devices.Workstation />
                    )
                  },
                }
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
                password: {
                  pw: "6745",
                  hint: "Bathroom passcode is 6745",
                },
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

              "Director's Office": {
                password: {
                  pw: "trash panda",
                  hint: "Everyones favorite dumpster diving animal?",
                },
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="DIRECTOR'S OFFICE"
                    subtitle="Director Aldous Venn — Operations"
                    notes={[
                      "Restricted — director access only",
                      "Private meeting space for 4",
                      "Direct line to municipal oversight board",
                      "Filing system: confidential contracts and compliance records",
                    ]}
                  >
                    <RCDAlert
                      message="Jackpoint detected"
                    />
                  </Node>
                ),
                related_commands: {
                  "Smart Fridge": {
                    content: (
                      <Devices.SmartFridge />
                    )
                  },
                  "Smart Bin": {
                    content: (
                      <Devices.SmartBin
                        id="cy_plant_senior_office_bin"
                        items={[
                          'duct_tape',
                        ]}
                      />
                    )
                  },
                  "Venn's Workstation": {
                    content: (
                      <Devices.Workstation>
                        <EncryptedMessage
                          messages={[
                            "Draft — unsent",
                            "To: Municipal Oversight, Re: Quarantine Authorization 7-NANO-44",
                            "I want to formally register my objection to the no-evacuation clause. These are city employees. They have families. The containment assessment has not been independently verified and I do not believe we have exhausted alternatives.",
                            "I am asking for 24 hours before this order is finalized.",
                            "— A. Venn",
                            "",
                            "[DRAFT UNSENT — 08:54]",
                          ]}
                        />
                      </Devices.Workstation>
                    ),
                  },
                }
              },

              "Deputy Manager's Office": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="DEPUTY MANAGER'S OFFICE"
                    subtitle="Deputy Operations Manager"
                    notes={[
                      "4 workstations — deputy management team",
                      "Interdepartmental coordination handled here",
                      "View: city street, east-facing",
                    ]}
                  >
                    <RCDAlert
                      message="Jackpoint detected"
                    />
                  </Node>
                ),
              },
            },
          },
        },
      },

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: 'thomas crapper',
          hint: "Didn't actually invent the toilet",
          showFirst: true,
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
          "Shift Schedule": {
            favicon: <Icons.Files />,
            content: (
              <ShiftSchedule
                location="CY_Sanitation HQ"
                shift="Morning Shift"
                shiftTime="08:00 — 16:00"
                nextShift="16:00 (afternoon shift)"
                personnel={[
                  { name: "Aldous Venn", role: "Director of Operations", location: "Director's Office", status: "IDLE" },
                  { name: "Petra Vance", role: "Reception Officer", location: "Reception", status: "IDLE" },
                  { name: "Dave Osei", role: "General Operations", location: "The Pit", status: "IDLE" },
                  { name: "Marta Sells", role: "Accounts & Billing", location: "Accounts & Billing", status: "IDLE" },
                  { name: "Ray Cutler", role: "Operations Dispatch", location: "Operations Dispatch", status: "IDLE" },
                  { name: "Sig", role: "Security Officer", location: "Security Office — Basement", status: "IDLE" },
                ]}
              />
            ),
          },

          "Building Access": {
            favicon: <Icons.Lock />,
            content: (
              <BuildingAccess
                title="CY_SANITATION HQ — ACCESS CONTROL"
                points={[
                  {
                    location: "Perimeter Wall",
                    access: ["Perimeter Wall Main Gate"],
                    notes: ["Twenty-foot-high cement wall"],
                  },
                  {
                    location: "Perimeter Wall — Main Gate",
                    access: ["Quarantine Keycard — Single vehicle gate"],
                    notes: [
                      "Last authorized entry: quarantine team, decades ago",
                    ],
                  },
                  {
                    location: "Quarantine Airlock — Perimeter Wall",
                    access: ["Quarantine Keycard — Personnel airlock adjacent to main gate"],
                    notes: [
                      "Two-stage decontamination chamber",
                      "Positive pressure maintained — breach compromises Nano containment",
                    ],
                  },
                  {
                    location: "Building Exterior — Plastic Sheathing",
                    access: ["No entry points — continuous industrial plastic seal applied at quarantine"],
                    notes: [
                      "Airlock connects directly to building lobby via sealed corridor",
                      "Any breach outside airlock corridor risks external Nano spread"
                    ],
                  },
                  {
                    location: "Interior Doors",
                    access: ["Mechanical Locks — Electronic override offline"],
                    notes: ["Electronic access restoration requires main power online"],
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
                environment={{
                  power: "MINIMAL — Emergency connection",
                  status: "QUARANTINE",
                  source: "City quarantine grid — diagnostic only",
                }}
                devices={[
                  { name: "Power Generator", location: "Basement", status: "OFFLINE" },
                  { name: "Sewer Regulator 1", location: "Basement", status: "OFFLINE" },
                  { name: "Sewer Regulator 2", location: "Basement", status: "OFFLINE" },
                  { name: "Sewer Regulator 3", location: "Basement", status: "OFFLINE" },
                  { name: "Sewer Regulator 4", location: "Basement", status: "OFFLINE" },
                  { name: "Security Console", location: "Basement", status: "OFFLINE" },
                  { name: "Reception Terminal", location: "Lower Offices", status: "OFFLINE" },
                  { name: "Upper Reception Terminal", location: "Management Floor", status: "OFFLINE" },
                  { name: "Workstations", location: "Various", status: "OFFLINE" },
                ]}
              >
                <RCDAlert
                  title="Jackpoints detected through facility"
                />
              </NetworkActivity>
            ),
          },

          "Facility Blueprints": {
            favicon: <Icons.Files />,
            password: {
              pw: "doubleflusher",
              hint: "Sometimes one isn't enough",
            },
            content: (
              <Node
                title="[CY_SANITATION — FACILITY BLUEPRINTS]"
                notes={[
                  "[REDACTED]",
                ]}
              />
            ),
            related_commands: {
              "Blueprint: Basement": {
                favicon: <Icons.Files />,
                content: (
                  <Node
                    title="CY_SANITATION - BASEMENT BLUEPRINT"
                  >
                    <RetComImage
                      src={basement_bp}
                      alt="CY_SANITATION Basement"
                      style={{ margin: "1rem", width: "100%" }}
                    />
                    <InsetBox color="yellow" title="Specifications">
                      <Line red bold>REDACTED</Line>
                      <Line red bold>REDACTED</Line>
                      <Line red bold>REDACTED</Line>
                    </InsetBox>
                  </Node>
                ),
              },

              "Blueprint: Floor 1": {
                favicon: <Icons.Files />,
                content: (
                  <Node
                    title="CY_SANITATION - FLOOR 1 BLUEPRINT"
                  >
                    <RetComImage
                      src={floor1_bp}
                      alt="CY_SANITATION Floor 1"
                      style={{ margin: "1rem", width: "100%" }}
                    />
                    <InsetBox color="yellow" title="Specifications">
                      <Line red bold>REDACTED</Line>
                      <Line red bold>REDACTED</Line>
                      <Line red bold>REDACTED</Line>
                    </InsetBox>
                  </Node>
                ),
              },

              "Blueprint: Floor 2": {
                favicon: <Icons.Files />,
                content: (
                  <Node
                    title="CY_SANITATION - FLOOR 2 BLUEPRINT"
                  >
                    <RetComImage
                      src={floor2_bp}
                      alt="Lucky Flight Casino Floor 2"
                      style={{ margin: "1rem", width: "100%" }}
                    />
                    <InsetBox color="yellow" title="Specifications">
                      <Line red bold>REDACTED</Line>
                      <Line red bold>REDACTED</Line>
                      <Line red bold>REDACTED</Line>
                    </InsetBox>
                  </Node>
                ),
              },

              "Blueprint: Roof": {
                favicon: <Icons.Files />,
                content: (
                  <Node
                    title="CY_SANITATION - ROOF BLUEPRINT"
                  >
                    <RetComImage
                      src={roof_bp}
                      alt="CY_SANITATION Roof"
                      style={{ margin: "1rem", width: "100%" }}
                    />
                    <InsetBox color="yellow" title="Specifications">
                      <Line red bold>REDACTED</Line>
                      <Line red bold>REDACTED</Line>
                      <Line red bold>REDACTED</Line>
                    </InsetBox>
                  </Node>
                ),
              },
            },
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
