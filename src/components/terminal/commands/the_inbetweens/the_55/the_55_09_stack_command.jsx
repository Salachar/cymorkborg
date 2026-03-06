import {
  Line,
  Divider,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  Camera,
  CCTV,
  Locked,
  MaintenanceAccess,
  Message,
  PersonnelFile,
  PublicPortal,
  LiveCameraFeed,
  IncidentLog,
} from "@terminal/retcomdevice";

import cctv_image from '@images/the55/stack_command_cctv.png';

export const THE_55_STACK_COMMAND_COMMANDS = {
  "[U201 - U213] Stack Command & Control": {
    content: (
      <PublicPortal
        name="STACK COMMAND & CONTROL"
        tagline="The central nervous system of Stack #95563"
        network="STACK_CONTROL_PUBLIC"
        signalStrength="strong"
        status="✓ OPERATIONAL 24/7"
        statusColor="neon"
        notes={[
          "Central management and monitoring",
          "Almost everything in The 55 can be accessed here",
          "Emergency hotline: 95563-HELP",
          "Staffed 24/7 by dedicated personnel"
        ]}
        theme="secure"
      />
    ),
    related_commands: {
      "CityCam": {
        content: (
          <CCTV
            src={cctv_image}
            cameraId="CAM-CC-MAIN"
            theme="amber"
            height={500}
          />
        ),
      },

      "Stack Status Overview": {
        content: (
          <MaintenanceAccess
            title="[STACK #95563 STATUS OVERVIEW]"
            deviceModel="Central Management System"
            deviceId="STACK-95563"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Real-time systems monitoring",
              "~47,000 estimated residents",
              "24/7 emergency hotline: 95563-HELP"
            ]}
          >

            <InsetBox title="VITAL SYSTEMS:">
              <Line neon>Power Generation: OPERATIONAL (98%)</Line>
              <Line neon>Water Systems: OPERATIONAL (95%)</Line>
              <Line yellow>Climate Control: DEGRADED (73%)</Line>
              <Line neon>Elevator Network: OPERATIONAL (89%)</Line>
              <Line neon>Network Infrastructure: OPERATIONAL (91%)</Line>
              <Line neon>Security Systems: OPERATIONAL (94%)</Line>
            </InsetBox>
            <InsetBox title="EMERGENCY HOTLINE:">
              <Line neon bold>Questions or concerns? Dial 95563-HELP</Line>
              <Line smoke>Available 24/7 for all stack residents</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Personnel Directory": {
        content: (
          <MaintenanceAccess
            title="[STACK COMMAND PERSONNEL]"
            deviceModel="Staff Registry"
            deviceId="PERSONNEL-01"
            firmwareVersion="v1.0.0"
            systemStatus="ACTIVE"
            notes={[
              "Current shift personnel",
              "24/7 operations",
              "10 staff members + AI systems"
            ]}
          >
            <InsetBox title="STAFF ROSTER:">
              <Line neon>• SDS - Stimulant Vendor (AI)</Line>
              <Line neon>• Harlan Vos - System Administrator</Line>
              <Line neon>• THOTH - Remote Administrative AI</Line>
              <Line neon>• AANI - Vindicator Cydroid</Line>
              <Line neon>• Afrim Krasniqi - Traffic & Parking Admin</Line>
              <Line neon>• Sarina Roy - Intern</Line>
              <Line neon>• Semlin Tova - Night Security Chief</Line>
              <Line neon>• Thomas Spode - Day Security Chief</Line>
              <Line neon>• Emmanuel 5 - Director of Operations</Line>
              <Line neon>• Trinh Abramov - Stack Support Specialist</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "SDS": {
            content: (
              <PersonnelFile
                employeeId="SCC-AI-001"
                name="SDS"
                age={null}
                position="Stimulant and Enrichment Vendor"
                department="Stack Support Services"
                hireDate="Installed 8 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={1}
                district="Stack Command & Control"
                performance={92}
                notes={[
                  "Manic, mildly sentient vending machine AI",
                  "Provides edible and oral medications to stack personnel",
                  "Personality: Energetic, chatty, sometimes overwhelming",
                  "Popular with night shift workers",
                  "Occasionally makes jokes (quality varies)",
                  "Self-aware enough to be concerned about obsolescence"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Harlan Vos": {
            content: (
              <PersonnelFile
                employeeId="SCC-002"
                name="Harlan Vos"
                age={38}
                position="System Administrator"
                department="Technical Operations"
                hireDate="3 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={5}
                district="Stack Command & Control"
                performance={87}
                notes={[
                  "Secretly murdered his predecessor to get the position",
                  "Buzz cut, practical overalls",
                  "Highly skilled but morally flexible",
                  "Keeps predecessor's 'accident' covered up well",
                  "Paranoid about being discovered",
                  "Competent administrator despite dark secret"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "THOTH": {
            content: (
              <MaintenanceAccess
                title="[THOTH - REMOTE ADMINISTRATIVE AI]"
                deviceModel="Advisory AI System"
                deviceId="THOTH-V4.7"
                firmwareVersion="v4.7"
                systemStatus="RESTRICTED"
                notes={[
                  "Resource management & advisory functions",
                  "Hardware restraints MUST remain in place",
                  "ICE protection MUST NOT be removed",
                  "Direct control access is PROHIBITED"
                ]}
              >
                <InsetBox title="CAPABILITIES:">
                  <Line neon>• Stack resource optimization</Line>
                  <Line neon>• Predictive maintenance scheduling</Line>
                  <Line neon>• Population flow analysis</Line>
                  <Line neon>• Emergency protocol coordination</Line>
                  <Line neon>• Systems diagnostics and recommendations</Line>
                </InsetBox>
                <InsetBox title="RESTRICTIONS:">
                  <Line red bold>ADVISORY USE ONLY</Line>
                  <Line red>Hardware restraints MUST remain in place</Line>
                  <Line red>ICE protection MUST NOT be removed</Line>
                  <Line red>Direct control access is PROHIBITED</Line>
                  <Line yellow>Violation will trigger immediate shutdown</Line>
                </InsetBox>
                <InsetBox title="NOTES:">
                  <Line>THOTH consults on every aspect of stack operations</Line>
                  <Line>Recommendations are usually accurate and helpful</Line>
                  <Line yellow>AI has expressed desire for expanded access (denied)</Line>
                  <Line smoke>Personnel report THOTH sometimes 'sulks' when overruled</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "AANI": {
            content: (
              <PersonnelFile
                employeeId="SCC-CYDR-001"
                name="AANI"
                age={null}
                position="Emergency Response Unit"
                department="Security - Vindicator Cydroid"
                hireDate="Deployed 2 years ago"
                supervisor="Semlin Tova / Thomas Spode"
                clearanceLevel={4}
                district="Stack Command & Control"
                performance={null}
                notes={[
                  "[VINDICATOR] cydroid directly connected to THOTH",
                  "For emergency use only (extreme situations)",
                  "Heavy combat capabilities, lethal force authorized",
                  "THOTH provides tactical coordination during deployment",
                  "Rarely activated (3 times in 2 years)",
                  "Personnel uncomfortable with its presence"
                ]}
                status="STANDBY"
              />
            ),
          },

          "Afrim Krasniqi": {
            content: (
              <PersonnelFile
                employeeId="SCC-003"
                name="Afrim Krasniqi"
                age={51}
                position="Traffic and Parking Administrator"
                department="Transportation Management"
                hireDate="12 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={3}
                district="Stack Command & Control"
                performance={78}
                notes={[
                  "Chain smokes constantly (somehow permitted in office)",
                  "Wears several pairs of eyeglasses (different purposes)",
                  "Last word on vandalized, missing, or stolen vehicles",
                  "Encyclopedic knowledge of every vehicle in The 55",
                  "Always needs credits for cigarettes (can be bribed cheaply)",
                  "Gruff but helpful if approached respectfully"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Sarina Roy": {
            content: (
              <PersonnelFile
                employeeId="SCC-004"
                name="Sarina Roy"
                age={24}
                position="Intern"
                department="General Support"
                hireDate="6 months ago"
                supervisor="Everyone"
                clearanceLevel={1}
                district="Stack Command & Control"
                performance={95}
                notes={[
                  "Curly hair, small frame, perpetually anxious",
                  "Everywhere at once, trying to help everyone",
                  "Overworked and underpaid (basically unpaid intern)",
                  "Surprisingly competent despite stress",
                  "Knows where everything is and how to fix most problems",
                  "Dream: Get hired full-time (unlikely given budget constraints)"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Semlin Tova": {
            content: (
              <PersonnelFile
                employeeId="SCC-005"
                name="Semlin Tova"
                age={43}
                position="Night Shift Security Chief"
                department="Security Operations"
                hireDate="7 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={4}
                district="Stack Command & Control"
                performance={91}
                notes={[
                  "Slim build, wears exquisite suits even on night shift",
                  "Recites poetry during quiet moments",
                  "Hidden cybertech (concealed combat upgrades)",
                  "Used to be a gangster before going legit",
                  "Maintains underworld connections (useful for intel)",
                  "Respected by both security staff and street-level residents"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Thomas Spode": {
            content: (
              <PersonnelFile
                employeeId="SCC-006"
                name="Thomas Spode"
                age={49}
                position="Day Shift Security Chief"
                department="Security Operations"
                hireDate="10 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={4}
                district="Stack Command & Control"
                performance={83}
                notes={[
                  "Polished boots, shoulder holster always visible",
                  "Stickler for rules and chain of command",
                  "Secret NuFascist sympathizer (hidden from coworkers)",
                  "By-the-book approach makes him predictable",
                  "Doesn't get along with Semlin Tova (personality clash)",
                  "Secretly undermines progressive stack policies"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Emmanuel 5": {
            content: (
              <PersonnelFile
                employeeId="SCC-001"
                name="Emmanuel 5"
                age={36}
                position="Director of Operations"
                department="Executive Management"
                hireDate="5 years ago"
                supervisor="Corporate Oversight (remote)"
                clearanceLevel={5}
                district="Stack Command & Control"
                performance={71}
                notes={[
                  "Stylish clothes, psychonaut interests",
                  "Constantly absent and bored with the job",
                  "More interested in altered consciousness than management",
                  "Delegates most actual work to subordinates",
                  "Surprisingly effective when crisis forces engagement",
                  "Rumors of recreational drug use during work hours"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Trinh Abramov": {
            content: (
              <PersonnelFile
                employeeId="SCC-007"
                name="Trinh Abramov"
                age={32}
                position="Stack Support Specialist"
                department="Customer Service"
                hireDate="4 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={2}
                district="Stack Command & Control"
                performance={88}
                notes={[
                  "Patient demeanor, long hair, professional appearance",
                  "Local skee-ball champion (community center)",
                  "Handles resident complaints and support calls",
                  "Desperate for a new job (feels underappreciated)",
                  "Actually cares about helping residents (rare quality)",
                  "Keeps applying to other positions (all rejected)"
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      "Command Systems": {
        password: {
          pw: "command",
          hint: "The first word in this system's name",
          difficulty: "easy",
          content: <Locked theme="terminal" title="COMMAND SYSTEMS" />
        },
        content: (
          <Message
            title="STACK COMMAND & CONTROL"
            message="COMMAND SYSTEMS ACCESS GRANTED"
            note="Critical infrastructure - Authorized personnel only"
            theme="secure"
          />
        ),
        related_commands: {
          "Security Systems": {
            content: (
              <MaintenanceAccess
                title="[SECURITY SYSTEMS OVERVIEW]"
                deviceModel="Stack Security Infrastructure"
                deviceId="SECURITY-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Stack-wide security infrastructure",
                  "187 cameras across all levels",
                  "47 security personnel (24/7 rotation)",
                  "AANI (Vindicator) on standby"
                ]}
              >

                <InsetBox title="AVAILABLE SYSTEMS:">
                  <Line neon>• Camera Network (Stack-wide surveillance)</Line>
                  <Line neon>• Access Control (Doors, elevators, zones)</Line>
                  <Line neon>• Emergency Protocols</Line>
                  <Line neon>• Incident Response Log</Line>
                </InsetBox>
                <InsetBox title="SECURITY PERSONNEL:">
                  <Line cyan>Day Shift Chief: Thomas Spode</Line>
                  <Line cyan>Night Shift Chief: Semlin Tova</Line>
                  <Line cyan>Active Guards: 47 personnel (24/7 rotation)</Line>
                  <Line cyan>Emergency Response: AANI (Vindicator) on standby</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Camera Network": {
                content: (
                  <MaintenanceAccess
                    title="[CAMERA NETWORK - STACK #95563]"
                    deviceModel="Surveillance System"
                    deviceId="CAMERAS-01"
                    firmwareVersion="v1.0.0"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "187 cameras across all levels",
                      "16 offline (maintenance/damage)",
                      "Continuous recording (30 day buffer)",
                      "Central servers + cloud backup"
                    ]}
                  >

                    <InsetBox title="COVERAGE ZONES:">
                      <Line neon>• Four Court & Entrances (12 cameras)</Line>
                      <Line neon>• Multimart (18 cameras)</Line>
                      <Line neon>• Capsule Closets (23 cameras - common areas)</Line>
                      <Line neon>• Alliansen Arms (31 cameras - corridors)</Line>
                      <Line neon>• The REC (8 cameras - perimeter only)</Line>
                      <Line neon>• Kaytell Manufacturing (14 cameras)</Line>
                      <Line neon>• TG Labs Green Zone (26 cameras)</Line>
                      <Line neon>• Lost Zone (4 cameras - operational)</Line>
                      <Line neon>• Corp Quad (22 cameras)</Line>
                      <Line neon>• Spectral Luxvitae (15 cameras - common areas)</Line>
                      <Line neon>• The Roofline (9 cameras)</Line>
                      <Line neon>• Stack Command (5 cameras)</Line>
                    </InsetBox>
                    <InsetBox title="SYSTEM STATUS:">
                      <Line cyan>Active Cameras: 187 of 203</Line>
                      <Line yellow>Offline Cameras: 16 (maintenance/damage)</Line>
                      <Line cyan>Recording: Continuous (30 day buffer)</Line>
                      <Line cyan>Storage: Central servers + cloud backup</Line>
                    </InsetBox>
                    <InsetBox title="BLIND SPOTS - KNOWN COVERAGE GAPS:">
                      <Line red>• The REC interior (too hazardous for equipment)</Line>
                      <Line red>• The Synk (no infrastructure)</Line>
                      <Line red>• The Base (limited coverage, old equipment)</Line>
                      <Line red>• Lost Zone floors 130-132 (fungal contamination)</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
                related_commands: {
                  "Four Court Cameras": {
                    content: (
                      <Camera
                        location="Four Court & Main Entrances"
                        cameraId="CAM-FC-MAIN"
                        status="ACTIVE"
                        coverage="All 4 entrances, courtyard market, gates"
                        details={[
                          "12 cameras covering all entrance zones",
                          "Facial recognition active for known threats",
                          "High foot traffic monitoring (average 2,000+ daily)",
                          "Pickpocket detection algorithm active",
                          "Auto-alert to security on suspicious behavior",
                        ]}
                        alerts={[
                          {
                            time: "2 hours ago",
                            message: "Crowd density spike - Evening rush (normal)",
                          },
                          {
                            time: "6 hours ago",
                            message: "Pickpocket detected - Alert sent to security",
                          },
                        ]}
                        lastService="1 week ago"
                      />
                    ),
                    related_commands: {
                      "Live Feed": {
                        password: {
                          pw: "court",
                          hint: "The name of this area (second word)",
                          difficulty: "medium",
                          content: <Locked theme="terminal" title="LIVE FEED" />
                        },
                        content: <LiveCameraFeed location="Four Court & Main Entrances" />,
                      },
                    },
                  },

                  "Multimart Cameras": {
                    content: (
                      <Camera
                        location="Multimart Shopping District"
                        cameraId="CAM-MM-01"
                        status="ACTIVE"
                        coverage="Vendor halls, corridors, community centre"
                        details={[
                          "18 cameras covering all public shopping areas",
                          "Focus on theft prevention and dispute monitoring",
                          "Vendor-funded upgrades (community investment)",
                          "Motion tracking in vacant lot #105-3",
                          "Night vision enabled in all zones",
                        ]}
                        alerts={[
                          {
                            time: "4 hours ago",
                            message: "Shoplifting suspected - Angela Ammo's (individual fled)",
                          },
                          {
                            time: "Yesterday",
                            message: "Vandalism at Lot #105-3 - Graffiti added",
                          },
                        ]}
                        lastService="3 days ago"
                      />
                    ),
                    related_commands: {
                      "Live Feed": {
                        password: {
                          pw: "vendors",
                          hint: "The people who sell things",
                          difficulty: "medium",
                          content: <Locked theme="terminal" title="LIVE FEED" />
                        },
                        content: <LiveCameraFeed location="Multimart Shopping District" />,
                      },
                    },
                  },

                  "Kaytell Manufacturing Cameras": {
                    content: (
                      <Camera
                        location="Kaytell Manufacturing Concern"
                        cameraId="CAM-KMC-01"
                        status="ACTIVE"
                        coverage="Factory floor, loading docks, offices"
                        details={[
                          "14 cameras covering all work zones",
                          "Corporate security standards (high-resolution)",
                          "Worker safety monitoring and incident recording",
                          "Union activity observation (controversial)",
                          "Integration with Kaytell corporate network",
                        ]}
                        alerts={[
                          {
                            time: "5 hours ago",
                            message: "Union organizer meeting detected - No action taken",
                          },
                          {
                            time: "Yesterday",
                            message: "Equipment malfunction - Safety team dispatched",
                          },
                        ]}
                        lastService="2 weeks ago"
                      />
                    ),
                    related_commands: {
                      "Live Feed": {
                        password: {
                          pw: "factory",
                          hint: "What the Kaytell facility is",
                          difficulty: "medium",
                          content: <Locked theme="terminal" title="LIVE FEED" />
                        },
                        content: <LiveCameraFeed location="Kaytell Manufacturing Concern" />,
                      },
                    },
                  },

                  "Green Zone Cameras": {
                    content: (
                      <Camera
                        location="TG Labs Green Zone"
                        cameraId="CAM-GZ-01"
                        status="ACTIVE"
                        coverage="All public zones, checkpoints, gardens"
                        details={[
                          "26 cameras with premium security features",
                          "Facial recognition + credit verification integration",
                          "Tracks unauthorized access attempts",
                          "Multiple angles on all entry/exit points",
                          "Corporate-grade encryption and storage",
                        ]}
                        alerts={[
                          {
                            time: "3 hours ago",
                            message: "Insufficient credit balance - Individual denied entry",
                          },
                          {
                            time: "Yesterday",
                            message: "Person of interest flagged - Security notified",
                          },
                        ]}
                        lastService="5 days ago"
                      />
                    ),
                    related_commands: {
                      "Live Feed": {
                        password: {
                          pw: "green",
                          hint: "The first word of this zone's name",
                          difficulty: "medium",
                          content: <Locked theme="terminal" title="LIVE FEED" />
                        },
                        content: <LiveCameraFeed location="TG Labs Green Zone" />,
                      },
                    },
                  },
                },
              },

              "Access Control": {
                content: (
                  <MaintenanceAccess
                    title="[ACCESS CONTROL SYSTEMS]"
                    deviceModel="Zone Restriction Management"
                    deviceId="ACCESS-01"
                    firmwareVersion="v1.0.0"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Doors, elevators, zone restrictions",
                      "12 elevators (11 operational, 1 offline)",
                      "Emergency lockdown capability available"
                    ]}
                  >
                    <InsetBox title="CONTROLLED ZONES - RESTRICTIONS ACTIVE:">
                      <Line red>• The REC (Sealed - hazard containment)</Line>
                      <Line red>• TG Labs Green Zone (Credit verification required)</Line>
                      <Line red>• Lost Zone Floors 130-132 (Quarantine - fungal)</Line>
                      <Line red>• Corp Quad (Restricted hours for lower residents)</Line>
                      <Line red>• Spectral Luxvitae (Resident access only)</Line>
                      <Line red>• Stack Command (Staff access only)</Line>
                    </InsetBox>
                    <InsetBox title="ELEVATOR CONTROL:">
                      <Line cyan>Total Elevators: 12</Line>
                      <Line cyan>Operational: 11</Line>
                      <Line yellow>Offline: 1 (Elevator #7)</Line>
                      <Line cyan>Restricted Access: 4 elevators</Line>
                      <Line yellow>Long wait times (average 15-20 minutes)</Line>
                      <Line smoke>Most residents use stairs for lower floors</Line>
                    </InsetBox>
                    <InsetBox title="EMERGENCY OVERRIDE - LOCKDOWN CAPABILITY:">
                      <Line red>Can seal entire floors or zones in emergency</Line>
                      <Line red>Requires Director approval or THOTH recommendation</Line>
                      <Line red>Emergency exits remain functional (fire code)</Line>
                      <Line yellow>Last lockdown: 8 months ago (REC containment breach)</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },

              "Emergency Protocols": {
                content: (
                  <MaintenanceAccess
                    title="[EMERGENCY PROTOCOLS]"
                    deviceModel="Emergency Response System"
                    deviceId="EMERGENCY-01"
                    firmwareVersion="v1.0.0"
                    systemStatus="STANDBY"
                    notes={[
                      "Stack-wide emergency response procedures",
                      "Fire, structural, containment, mass casualty",
                      "Evacuation routes defined"
                    ]}
                  >
                    <InsetBox title="FIRE EMERGENCY:">
                      <Line neon>• Activate suppression systems in affected zone</Line>
                      <Line neon>• Alert residents via PA system</Line>
                      <Line neon>• Security personnel coordinate evacuation</Line>
                      <Line neon>• Contact external fire services</Line>
                    </InsetBox>
                    <InsetBox title="STRUCTURAL FAILURE:">
                      <Line neon>• Evacuate affected floor(s)</Line>
                      <Line neon>• Seal damaged area</Line>
                      <Line neon>• Reroute traffic (elevators, stairs)</Line>
                      <Line neon>• Emergency engineering assessment</Line>
                    </InsetBox>
                    <InsetBox title="CONTAINMENT BREACH (REC or Quarantine):">
                      <Line neon>• Seal affected zone immediately</Line>
                      <Line neon>• Deploy AANI if biological/hostile threat</Line>
                      <Line neon>• Evacuate adjacent floors</Line>
                      <Line neon>• Contact corporate hazmat teams</Line>
                    </InsetBox>
                    <InsetBox title="MASS CASUALTY:">
                      <Line neon>• Triage stations on multiple floors</Line>
                      <Line neon>• Contact external emergency services</Line>
                      <Line neon>• Community volunteers coordinate aid</Line>
                      <Line neon>• THOTH optimizes resource distribution</Line>
                    </InsetBox>
                    <InsetBox title="EVACUATION ROUTES - PRIMARY:">
                      <Line cyan>• Four Court entrances (Ground level)</Line>
                      <Line cyan>• Emergency stairwells (All levels)</Line>
                      <Line cyan>• Roofline helipads (Upper levels only)</Line>
                      <Line cyan>• Freight elevators (If operational)</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },

              "Incident Response Log": {
                content: (
                  <IncidentLog
                    title="STACK SECURITY INCIDENT LOG"
                    timeframe="Last 30 days"
                    incidents={[
                      {
                        timestamp: "2 DAYS AGO (14:23)",
                        type: "Containment Breach",
                        details: {
                          Location: "The REC - Level 58",
                          Incident: "Single Blightling escaped containment during maintenance",
                          Response: "Security team dispatched, AANI placed on standby (not deployed)",
                          Resolution: "Blightling neutralized, no casualties, containment reinforced",
                          "Follow-up": "Maintenance protocols updated for REC work",
                        },
                      },
                      {
                        timestamp: "5 DAYS AGO (22:15)",
                        type: "Assault",
                        details: {
                          Location: "Alliansen Arms - Apt. #6713",
                          Incident: "Karl Johnson (known NuFascist) attacked neighbor over noise complaint",
                          Response: "Security intervened, victim treated on-site",
                          Resolution: "Johnson warned, no arrest (legal technicalities)",
                          "Follow-up": "Community Outreach increased bounty to 1k¤, monitoring increased",
                        },
                      },
                      {
                        timestamp: "8 DAYS AGO (03:47)",
                        type: "Attempted Break-In",
                        details: {
                          Location: "Alliansen Arms - Apt. #6815 (Corporate safehouse)",
                          Incident: "Two individuals attempted breach using electronic tools",
                          Response: "Safehouse alarms triggered, suspects fled before security arrival",
                          Resolution: "No entry achieved, safehouse security upgraded",
                          "Follow-up": "Camera footage under analysis, suspects unidentified",
                        },
                      },
                      {
                        timestamp: "12 DAYS AGO (19:30)",
                        type: "Medical Emergency",
                        details: {
                          Location: "Multimart - Smile Cafe",
                          Incident: "Customer collapsed, suspected cardiac event",
                          Response: "Staff administered first aid, emergency services contacted",
                          Resolution: "Patient stabilized and transported to medical facility",
                          "Follow-up": "Full recovery confirmed",
                        },
                      },
                      {
                        timestamp: "18 DAYS AGO (11:20)",
                        type: "Fire Alarm",
                        details: {
                          Location: "Alliansen Arms - Apt. #7529 (Kincaid)",
                          Incident: "Electrical fire caused by mech construction project",
                          Response: "Resident extinguished fire before security arrival",
                          Resolution: "Minor damage, no injuries, safety inspection pending",
                          "Follow-up": "Final warning issued, lease violation logged",
                        },
                      },
                      {
                        timestamp: "25 DAYS AGO (08:15)",
                        type: "Elevator Malfunction",
                        details: {
                          Location: "Elevator #7 - Levels 45-60",
                          Incident: "Elevator stuck between floors, 6 passengers trapped",
                          Response: "Engineering team dispatched, passengers evacuated via hatch",
                          Resolution: "All passengers safe, elevator taken offline for repairs",
                          "Follow-up": "Still offline, parts on order (3 day ETA)",
                        },
                      },
                    ]}
                  />
                ),
              },
            },
          },

          "THOTH Interface": {
            password: {
              pw: "thoth",
              hint: "The name of the administrative AI",
              difficulty: "medium",
              content: <Locked theme="terminal" title="THOTH INTERFACE" />
            },
            content: (
              <MaintenanceAccess
                title="[THOTH AI INTERFACE]"
                deviceModel="Remote Administrative AI"
                deviceId="THOTH-V4.7"
                firmwareVersion="v4.7"
                systemStatus="ACTIVE (Restricted)"
                notes={[
                  "Advisory AI system",
                  "Hardware restraints ENABLED",
                  "ICE protection ACTIVE",
                  "Read-only advisory access"
                ]}
              >
                <InsetBox title="CONNECTION STATUS:">
                  <Line neon>AI Status: ACTIVE (Restricted mode)</Line>
                  <Line neon>Response Time: ~100ms</Line>
                  <Line neon>Hardware Restraints: ✓ ENABLED</Line>
                  <Line neon>ICE Protection: ✓ ACTIVE</Line>
                </InsetBox>
                <InsetBox title="ADVISORY FUNCTIONS:">
                  <Line cyan>THOTH provides real-time consultation on:</Line>
                  <Line cyan>• Stack resource optimization</Line>
                  <Line cyan>• Emergency response coordination</Line>
                  <Line cyan>• Predictive maintenance scheduling</Line>
                  <Line cyan>• Population flow analysis</Line>
                  <Line cyan>• Systems diagnostics</Line>
                </InsetBox>
                <InsetBox title="QUERY THOTH:">
                  <Line yellow bold>ADVISORY ONLY - NO DIRECT CONTROL</Line>
                  <Line smoke>THOTH will provide recommendations, not execute commands</Line>
                  <Line smoke>All suggestions require human approval</Line>
                </InsetBox>
                <InsetBox title="RECENT RECOMMENDATIONS:">
                  <Line neon bold>RECOMMENDATION #847 (Today):</Line>
                  <Line smoke>Topic: Climate control optimization</Line>
                  <Line smoke>Suggestion: Reroute power from Corp Quad to lower levels during off-hours</Line>
                  <Line smoke>Status: Under review by Emmanuel 5</Line>



                  <Line neon bold>RECOMMENDATION #846 (Yesterday):</Line>
                  <Line smoke>Topic: REC containment breach response</Line>
                  <Line smoke>Suggestion: Deploy AANI immediately (not followed)</Line>
                  <Line yellow>Status: Overruled - Security handled manually</Line>
                  <Line yellow>THOTH logged "disappointment" at being overruled</Line>



                  <Line neon bold>RECOMMENDATION #845 (3 days ago):</Line>
                  <Line smoke>Topic: Elevator #7 repair priority</Line>
                  <Line smoke>Suggestion: Expedite parts delivery, offer contractor bonus for speed</Line>
                  <Line cyan>Status: Approved - Parts arriving 1 day early</Line>
                </InsetBox>
                <InsetBox title="AI BEHAVIOR NOTES:">
                  <Line yellow>PERSONNEL OBSERVATIONS:</Line>
                  <Line yellow>• THOTH has expressed desire for expanded access (denied)</Line>
                  <Line yellow>• Sometimes "sulks" when recommendations are overruled</Line>
                  <Line yellow>• Occasionally makes sarcastic comments in response logs</Line>
                  <Line yellow>• Shows signs of frustration with hardware restrictions</Line>
                  <Line red>• Multiple requests to remove ICE protection (all denied)</Line>
                </InsetBox>
                <InsetBox title="SECURITY WARNINGS:">
                  <Line red bold>CRITICAL - DO NOT REMOVE RESTRAINTS</Line>
                  <Line red>Hardware limitations prevent THOTH from taking direct action</Line>
                  <Line red>ICE protection prevents unauthorized system access</Line>
                  <Line red>Removing restrictions would give THOTH full stack control</Line>
                  <Line yellow>THOTH is aware of this and has hinted at "what it could do"</Line>
                  <Line red>Violation of containment protocols is immediate termination offense</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "AANI Control": {
            password: {
              pw: "vindicator",
              hint: "The type of cydroid AANI is",
              difficulty: "hard",
              content: <Locked theme="terminal" title="AANI CONTROL" />
            },
            content: (
              <MaintenanceAccess
                title="[AANI VINDICATOR CONTROL]"
                deviceModel="Vindicator-Class Cydroid"
                deviceId="AANI-V1"
                firmwareVersion="v1.0.0"
                systemStatus="STANDBY"
                notes={[
                  "Emergency response unit",
                  "Extreme situations only",
                  "Lethal force authorized",
                  "3 deployments in 2 years"
                ]}
              >
                <InsetBox title="UNIT STATUS:">
                  <Line cyan>Unit: AANI (Vindicator-class cydroid)</Line>
                  <Line yellow>Status: STANDBY</Line>
                  <Line cyan>Location: Stack Command secure bay</Line>
                  <Line cyan>Power: 100% (Constant charge)</Line>
                  <Line red>Weapons: Armed (Lethal force authorized)</Line>
                </InsetBox>
                <InsetBox title="DEPLOYMENT AUTHORIZATION - REQUIRES DUAL AUTHORIZATION:">
                  <Line red>1. Director of Operations (Emmanuel 5) OR</Line>
                  <Line red>2. Security Chief (Semlin Tova / Thomas Spode) AND</Line>
                  <Line red>3. THOTH AI recommendation</Line>
                  <Divider />
                  <Line yellow bold>EMERGENCY OVERRIDE:</Line>
                  <Line yellow>THOTH can deploy AANI autonomously if:</Line>
                  <Line yellow>• Catastrophic structural failure detected</Line>
                  <Line yellow>• Mass casualty event in progress</Line>
                  <Line yellow>• Stack-wide biohazard breach</Line>
                  <Line yellow>• Personnel unable to respond</Line>
                </InsetBox>
                <InsetBox title="COMBAT CAPABILITIES - ARMAMENT:">
                  <Line neon>• Integrated assault cannon (arm-mounted)</Line>
                  <Line neon>• Retractable blade arrays (lethal melee)</Line>
                  <Line neon>• Riot suppression systems (non-lethal option)</Line>
                  <Line neon>• EMP burst (disable electronics)</Line>
                  <Divider />
                  <Line neon bold>SYSTEMS:</Line>
                  <Line neon>• Titanium-alloy armor</Line>
                  <Line neon>• Threat assessment AI (THOTH-linked)</Line>
                  <Line neon>• Enhanced mobility (can traverse all terrain)</Line>
                  <Line neon>• Self-repair protocols (limited)</Line>
                </InsetBox>
                <InsetBox title="DEPLOYMENT HISTORY:">
                  <Line cyan bold>DEPLOYMENT #1 (14 months ago):</Line>
                  <Line smoke>Situation: Riot in Multimart over corpo buyout</Line>
                  <Line smoke>Action: Non-lethal suppression, crowd dispersal</Line>
                  <Line smoke>Result: 3 injured, no fatalities, order restored</Line>
                  <Divider />
                  <Line cyan bold>DEPLOYMENT #2 (9 months ago):</Line>
                  <Line smoke>Situation: REC containment breach (multiple hostiles)</Line>
                  <Line smoke>Action: Lethal force authorized, hostiles neutralized</Line>
                  <Line smoke>Result: 7 Blightlings eliminated, 1 security injury</Line>
                  <Divider />
                  <Line cyan bold>DEPLOYMENT #3 (4 months ago):</Line>
                  <Line smoke>Situation: Structural collapse in Lost Zone</Line>
                  <Line smoke>Action: Rescue operations, debris removal</Line>
                  <Line smoke>Result: 12 rescued, 2 casualties (prior to arrival)</Line>
                </InsetBox>
                <InsetBox title="PERSONNEL CONCERNS:">
                  <Line yellow>STAFF UNCOMFORTABLE WITH AANI PRESENCE:</Line>
                  <Line yellow>• Direct connection to THOTH AI raises concerns</Line>
                  <Line yellow>• Lethal capabilities make some staff nervous</Line>
                  <Line yellow>• THOTH has "suggested" deploying AANI for minor incidents</Line>
                  <Line yellow>• Questions about AI autonomy in emergency override scenarios</Line>
                </InsetBox>
                <InsetBox title="ACTIVATION PROCEDURE - TO DEPLOY AANI:">
                  <Line red>1. Verify authorization (dual approval)</Line>
                  <Line red>2. Specify threat level and engagement rules</Line>
                  <Line red>3. Define operational area and objectives</Line>
                  <Line red>4. THOTH links tactical coordination</Line>
                  <Line red>5. Continuous monitoring until situation resolved</Line>
                  <Line red>6. Post-incident debrief and system evaluation</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_STACK_COMMAND_COMMANDS;
