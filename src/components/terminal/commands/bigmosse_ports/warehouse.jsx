import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
} from '@terminal/TerminalComponents';

import {
  Camera,
  Safe,
  PersonnelFile,
  ShiftSchedule,
  Workstation,
  VendingMachine,
  FacilityPortal,
  HoursBanner,
  Message,
  IncidentLog,
  RCDAlert,
  NetworkDevices,
  CommunityBoard,
  MaintenanceAccess,
  Locked,
  NetworkTrafficMonitor,
} from "@terminal/retcomdevice"

export const ALLIANSEN_WAREHOUSE_COMMANDS = {
  "Alliansen Inc. Warehouse": {
    favicon: <Icons.Warehouse />,
    content: (
      <FacilityPortal
        companyName="Alliansen Inc."
        facilityId="Facility #47"
        tagline="Ports Industrial District - Storage & Distribution Hub"
        location="Ports industrial district"
        owner="Alliansen Inc."
        function="Storage & distribution hub"
        personnel="Night crew (6 personnel)"
        networkStatus="Corporate WAN (limited external access)"
        securityLevel="HIGH"
        theme="industrial"
      >
        <RCDAlert
          message="Signal jamming device detected at facility perimeter"
          details={[
            "External RCD communication range limited to ~50m from building",
            "ICE Breakers not available inside facility",
          ]}
        />
      </FacilityPortal>
    ),
    related_commands: {
      "Operating Hours": {
        favicon: <Icons.Hours />,
        content: (
          <HoursBanner
            name="Alliansen Warehouse #47"
            hours="24/7 Operations"
            days="Day Shift: 06:00-22:00 | Night Shift: 22:00-06:00"
            status="NIGHT SHIFT ACTIVE"
            statusColor="open"
            location="Ports Industrial District"
            note="Reduced staffing during night shift (6 personnel vs 8 day shift)"
          >
            <InsetBox title="CURRENT SHIFT:">
              <Line cyan>Night Shift (22:00 - 06:00)</Line>
              <Line cyan>Staff: 1 Supervisor + 5 Security Guards</Line>
              <Line yellow>Deliveries accepted 24/7 at loading dock</Line>
            </InsetBox>
          </HoursBanner>
        ),
      },

      "Shipping Manifests": {
        favicon: <Icons.Files />,
        content: (
          <MaintenanceAccess
            title="[SHIPPING DATABASE]"
            deviceModel="Logistics Management System"
            deviceId="SHIP-DB-47"
            firmwareVersion="v6.2.1"
            systemStatus="OPERATIONAL"
            uptime="89 days, 14 hours"
            notes={[
              "Public shipping records available (last 30 days)",
              "Classified shipments require SecOps authorization",
              "Tonight's classified cargo: Military-grade (01:00 arrival)",
              "Current location: Secure Cargo area - Container 7B"
            ]}
          >
            <InsetBox title="RECENT INCOMING SHIPMENTS:">
              <Line neon>Jan 15 → Electronics components (TechCore Industries)</Line>
              <Line neon>Jan 14 → Industrial machinery parts (MetalWorks Co.)</Line>
              <Line neon>Jan 12 → Office supplies (standard)</Line>
              <Line yellow>Jan 11 → [REDACTED] - SecOps authorization required</Line>
              <Line neon>Jan 10 → Synthetic food products (NutriCorp)</Line>
              <Line neon>Jan 8 → Building materials (ConStruct Ltd.)</Line>
            </InsetBox>
            <InsetBox title="TONIGHT'S EXPECTED ARRIVALS:">
              <Line cyan>22:30 → Routine supply delivery (already received)</Line>
              <Line red>01:00 → [CLASSIFIED] - Military-grade cargo</Line>
              <Line yellow>↑ Requires Level 3 clearance to view details</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Employee Roster": {
        favicon: <Icons.Person />,
        content: (
          <MaintenanceAccess
            title="[PERSONNEL DATABASE]"
            deviceModel="HR Management System"
            deviceId="HR-WH47"
            firmwareVersion="v4.1.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Current shift: Night crew (22:00 - 06:00)",
              "On duty tonight: 6 personnel total",
              "1 Supervisor: Marcus Webb",
              "5 Security Guards",
            ]}
          />
        ),
      },

      "Floor Plan (Public)": {
        favicon: <Icons.Files />,
        content: (
          <MaintenanceAccess
            title="[FACILITY LAYOUT]"
            deviceModel="Facility Management System"
            deviceId="FAC-MAP-47"
            firmwareVersion="v2.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Basic floor plan (fire safety documentation)",
              "Main areas: Administrative offices, warehouse floor, loading dock",
              "Secure Cargo area: RESTRICTED ACCESS (Level 2+)",
              "Detailed security layout requires elevated clearance"
            ]}
          >
            <InsetBox title="MAIN AREAS:">
              <Line neon>→ Administrative offices (northwest)</Line>
              <Line neon>→ Main warehouse floor (center/east)</Line>
              <Line neon>→ Loading dock (north entrance)</Line>
              <Line neon>→ Employee facilities (bathrooms, rec room, rest area)</Line>
              <Line red>→ Secure Cargo area (southwest - RESTRICTED)</Line>
            </InsetBox>
            <InsetBox title="EMERGENCY EXITS:">
              <Line yellow>→ Front entrance (main)</Line>
              <Line yellow>→ Loading dock (north)</Line>
              <Line yellow>→ Side exit (east warehouse)</Line>
              <Line yellow>→ Emergency exit (south, alarm)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Internal Network": {
        favicon: <Icons.LAN />,
        password: {
          pw: "administraitor",
          hint: "What you get when an admin turns on you",
          content: <Locked theme="terminal" title="EMPLOYEE NETWORK" />
        },
        content: (
          <MaintenanceAccess
            title="[ALLIANSEN WAREHOUSE NETWORK]"
            deviceModel="Corporate Network Gateway"
            deviceId="NET-WH47-MAIN"
            firmwareVersion="v7.3.2"
            systemStatus="OPERATIONAL"
            uptime="156 days, 8 hours"
            notes={[
              "All access logged to corporate security",
              "Connection: RCD-#8834",
              "Access Level: Employee (standard systems)",
              "Supervisor terminal and secure cargo require elevated credentials",
              "Security cameras, shift schedules, and facility data available"
            ]}
          />
        ),
        related_commands: {
          "Facility Operations": {
            favicon: <Icons.Query />,
            content: (
              <MaintenanceAccess
                title="[WAREHOUSE OPERATIONS]"
                deviceModel="Facility Management System"
                deviceId="OPS-WH47"
                firmwareVersion="v5.1.0"
                systemStatus="OPERATIONAL"
                uptime="234 days, 11 hours"
                notes={[
                  "Current shift: Night (6 personnel)",
                  "Climate control: Active (temperature-sensitive cargo)",
                  "Forklift status: 2 operational, 1 in maintenance",
                  "Next inventory audit: End of week",
                  "Loading dock: Available for deliveries 24/7",
                  "Power consumption: Normal (no anomalies)"
                ]}
              >
                <InsetBox title="FACILITY STATUS:">
                  <Line cyan>Main warehouse: Operational</Line>
                  <Line cyan>Secure cargo: Locked, climate controlled</Line>
                  <Line cyan>Loading dock: Available</Line>
                  <Line yellow>Forklift #3: Scheduled maintenance tomorrow</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Current Shift Schedule": {
            favicon: <Icons.Schedule />,
            content: (
              <ShiftSchedule
                location="Alliansen Warehouse"
                shift="Night Shift"
                shiftTime="22:00 - 06:00"
                personnel={[
                  { name: 'Marcus Webb', role: 'Night Supervisor', location: 'Main Office' },
                  { name: 'David Chen', role: 'Security Guard', location: 'Main Security Room (Monitoring)' },
                  { name: 'Sofia Martinez', role: 'Security Guard', location: 'Main Warehouse (Patrol)' },
                  { name: 'James Park', role: 'Security Guard', location: 'Break Rotation / Relief' },
                  { name: 'Andre Foster', role: 'Security Guard', location: 'Secure Cargo Checkpoint' },
                  { name: 'Nina Volkov', role: 'Security Guard', location: 'Secure Cargo Interior' },
                ]}
                nextShift="06:00 (Day Shift - 8 personnel)"
              >
                <Line yellow>Break Policy: 30-minute rotations, staggered throughout shift</Line>
                <Line smoke>Supervisor notes: Park frequently exceeds allotted break time</Line>
              </ShiftSchedule>
            ),
          },

          "Employee Notice Board": {
            favicon: <Icons.Bulletin />,
            content: (
              <CommunityBoard
                name="EMPLOYEE NOTICES"
                location="Break room - Wall near coffee station"
                posts={[
                  { text: "Reminder: Lock all doors when leaving secure areas", color: "yellow" },
                  { text: "Pizza party Friday for meeting safety goals!", color: "cyan" },
                  { text: "Anyone want to trade Saturday shift? Contact James", color: "pink" },
                  { text: "Lost jacket in rec room - contact Supervisor if found", color: "smoke" },
                  { text: "Forklift #3 out of service tomorrow - use #1 or #2", color: "yellow" },
                  { text: "Exterminator coming Monday - warehouse will smell", color: "smoke" },
                ]}
                services={[
                  "Union rep available Tuesdays 14:00-16:00",
                  "Free coffee in break room (bring your own mug)",
                  "Break room vending machine accepts credits only",
                ]}
                vibe="Standard warehouse - boring but steady work"
              />
            ),
          },

          "Supervisor's Terminal": {
            favicon: <Icons.Computer />,
            password: {
              pw: "werehouse",
              hint: "What do you get when a wolf bits a house?",
              content: <Locked theme="terminal" title="SUPERVISOR WORKSTATION" />
            },
            content: (
              <Workstation
                owner="Marcus Webb"
                role="Night Supervisor"
                status="IDLE"
                lastActivity="8 minutes ago"
                openTabs={[
                  { title: 'Alliansen HR Portal', type: 'work' },
                  { title: 'Inventory Management System', type: 'work' },
                  { title: 'SecOps Coordination Memo', type: 'work' },
                  { title: 'Fishing Forecast - Weekend', type: 'personal' },
                  { title: 'Motorcycle Parts Catalog', type: 'personal' },
                ]}
                recentFiles={[
                  { name: 'Night_Shift_Report_Jan21.xlsx', timestamp: '23:05' },
                  { name: 'Classified_Manifest_SEC-2082.pdf', timestamp: '22:47' },
                  { name: 'Employee_Schedules_Feb.xlsx', timestamp: '22:30' },
                  { name: 'Security_Protocol_Update.pdf', timestamp: '22:15' },
                ]}
                emails={12}
                productivity={73}
              />
            ),
            related_commands: {
              "Personnel Records": {
                favicon: <Icons.Person />,
                content: (
                  <MaintenanceAccess
                    title="[PERSONNEL FILES]"
                    deviceModel="HR Database"
                    deviceId="HR-STAFF-47"
                    firmwareVersion="v4.1.0"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Night shift employees - Detailed records",
                      "6 personnel on duty tonight",
                      "Performance reviews current as of last month",
                      "Emergency contact info verified quarterly"
                    ]}
                  />
                ),
                related_commands: {
                  "Marcus Webb": {
                    favicon: <Icons.Person />,
                    content: (
                      <PersonnelFile
                        employeeId="ALI-NS-4721"
                        name="Marcus Webb"
                        age={41}
                        dob="08/23/2041"
                        position="Night Shift Supervisor"
                        department="Warehouse Operations"
                        supervisor="Regional Manager - Linda Torres"
                        clearanceLevel={3}
                        district="Bigmosse (commutes to Ports)"
                        emergencyContact="Sarah Webb (spouse) - 555-0147"
                        performance={87}
                        notes={[
                          "Reliable employee, zero disciplinary actions",
                          "Eligible for early retirement package in 2 years",
                          "Personal interest: Fishing (keeps lucky lure in office safe)",
                          "Prefers night shift to avoid traffic",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },

                  "David Chen": {
                    favicon: <Icons.Person />,
                    content: (
                      <PersonnelFile
                        employeeId="ALI-SEC-6892"
                        name="David Chen"
                        age={28}
                        dob="03/15/2054"
                        position="Security Officer"
                        department="Security Division"
                        clearanceLevel={2}
                        district="Lilypond"
                        emergencyContact="Ming Chen (brother) - 555-0892"
                        performance={62}
                        notes={[
                          "WARNING: Twice reprimanded for distraction on duty",
                          "Frequently watches entertainment media during shifts",
                          "Adequate performance but minimal engagement",
                          "Reliable for showing up on time",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },

                  "Sofia Martinez": {
                    favicon: <Icons.Person />,
                    content: (
                      <PersonnelFile
                        employeeId="ALI-SEC-5438"
                        name="Sofia Martinez"
                        age={32}
                        dob="11/07/2050"
                        position="Security Officer (Patrol)"
                        department="Security Division"
                        clearanceLevel={2}
                        district="Ports (local resident)"
                        emergencyContact="Carlos Martinez (father) - 555-0438"
                        performance={94}
                        notes={[
                          "Former SecOps officer - excellent credentials",
                          "Most competent guard on night shift",
                          "Actually conducts thorough patrols",
                          "Recommended for promotion consideration",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },

                  "James Park": {
                    favicon: <Icons.Person />,
                    content: (
                      <PersonnelFile
                        employeeId="ALI-SEC-7821"
                        name="James Park"
                        age={26}
                        dob="06/12/2056"
                        position="Security Officer"
                        department="Security Division"
                        clearanceLevel={1}
                        district="Ports"
                        emergencyContact="Jennifer Park (mother) - 555-0821"
                        performance={43}
                        notes={[
                          "WARNING: Multiple disciplinary warnings for phone use",
                          "Frequently on break - exceeds allotted time",
                          "Supervisor considering termination if no improvement",
                          "Low engagement with security duties",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },

                  "Andre Foster": {
                    favicon: <Icons.Person />,
                    content: (
                      <PersonnelFile
                        employeeId="ALI-SEC-5603"
                        name="Andre Foster"
                        age={35}
                        dob="02/19/2047"
                        position="Security Officer (Checkpoint)"
                        department="Security Division - Secure Cargo"
                        clearanceLevel={3}
                        district="Ports"
                        emergencyContact="Lisa Foster (sister) - 555-0603"
                        performance={91}
                        notes={[
                          "Former military - exemplary record",
                          "Trusted with high-value cargo assignments",
                          "Follows protocols strictly",
                          "Recommended for advanced security positions",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },

                  "Nina Volkov": {
                    favicon: <Icons.Person />,
                    content: (
                      <PersonnelFile
                        employeeId="ALI-SEC-6234"
                        name="Nina Volkov"
                        age={29}
                        dob="09/03/2053"
                        position="Security Officer (Secure Cargo)"
                        department="Security Division - Secure Cargo"
                        clearanceLevel={3}
                        district="Ports"
                        emergencyContact="Kaz Volkov (brother) - 555-0234"
                        performance={88}
                        notes={[
                          "Excellent attention to detail",
                          "Works well with Foster on secure assignments",
                          "Strong memory for faces and patterns",
                          "Reliable and professional",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },
                },
              },

              "Classified Shipment Manifest": {
                favicon: <Icons.Files />,
                content: (
                  <Message
                    title="SECURE CARGO"
                    subtitle="SEC-2082-0147"
                    message="SecOps Authorization Required — Level 3"
                    note="Pickup window: 08:00 tomorrow — Supervisor Webb or SecOps direct override only"
                    theme="secure"
                  >
                    <InsetBox title="SHIPMENT DETAILS:">
                      <Line cyan>Origin: TechCore Industries (Military Division)</Line>
                      <Line cyan>Destination: SecOps Equipment Division</Line>
                      <Line cyan>Arrived: 01:00 (confirmed received)</Line>
                      <Line cyan>Current location: Secure Cargo — Container 7B</Line>
                    </InsetBox>
                    <InsetBox title="CONTENTS:">
                      <Line cyan>12x MilSpec Neural Interface Modules</Line>
                      <Line cyan>Classification: Military-grade cyberware</Line>
                      <Line cyan>Estimated value: 5,000¤</Line>
                      <Line cyan>End user: SecOps tactical enhancement program</Line>
                    </InsetBox>
                    <InsetBox title="HANDLING PROTOCOL:">
                      <Line yellow>A. Foster — Checkpoint (ID verification required)</Line>
                      <Line yellow>N. Volkov — Interior (container monitoring)</Line>
                      <Line yellow>Alarm: ARMED — 30-second egress delay active (fire code)</Line>
                      <Line yellow>All entry/exit logged to corporate security database</Line>
                    </InsetBox>
                    <InsetBox title="THREAT ASSESSMENT:">
                      <Line red>Ports sector advisory: Elevated (gang activity)</Line>
                      <Line red>High-value cargo may be targeted — maintain heightened vigilance</Line>
                      <Line red>Unauthorized access: Immediate SecOps notification required</Line>
                    </InsetBox>
                  </Message>
                ),
              },

              "Supervisor's Office Safe": {
                favicon: <Icons.Lock />,
                password: {
                  pw: "phishing",
                  hint: "Hackers favorite hobby",
                  content: <Locked theme="safe" title="SUPERVISOR SAFE" />
                },
                content: (
                  <Safe
                    id="alliansen-warehouse-supervisor"
                    model="DS-400"
                    location="Main Office - Wall safe behind framed Alliansen certificate"
                    owner="Marcus Webb (Night Supervisor)"
                    security="4-digit PIN"
                    lastAccess="Tonight (shift start)"
                    physical={[
                      {
                        id: "webb_keycard",
                        label: "Master keycard",
                        description: "All-access (offices, secure cargo, alarm overrides)"
                      },
                      {
                        id: "webb_petty_cash",
                        label: "Petty cash",
                        description: "180¤ (small bills for misc expenses)",
                        value: 180,
                        isCredits: true
                      },
                      {
                        id: "webb_documents",
                        label: "Documents",
                        description: "Employee files, shift reports, inventory logs"
                      },
                      {
                        id: "webb_personal",
                        label: "Personal items",
                        description: "Fishing lure (lucky charm), family photo"
                      },
                    ]}
                    digital={[
                      {
                        id: "webb_credchip",
                        label: "Credchip",
                        description: "120¤ (personal emergency fund)",
                        value: 120,
                        isCredits: true
                      },
                      {
                        id: "webb_backup_codes",
                        label: "Backup access codes",
                        description: "Security panel passwords, alarm overrides"
                      },
                    ]}
                  />
                ),
              },
            },
          },

          "Main Security Workstation": {
            favicon: <Icons.Computer />,
            content: (
              <Workstation
                owner="David Chen"
                role="Security Officer"
                status="IDLE"
                lastActivity="3 minutes ago (watching holovid)"
                openTabs={[
                  { title: 'CyStream - Action Movie Marathon', type: 'personal' },
                  { title: 'Alliansen Security Portal', type: 'work' },
                  { title: 'Camera Feed Monitor', type: 'work' },
                  { title: 'Energy Drink Deals', type: 'personal' },
                ]}
                recentFiles={[
                  { name: 'Camera_Check_Log.txt', timestamp: '22:00' },
                  { name: 'Incident_Report_Template.docx', timestamp: '3 days ago' },
                ]}
                emails={7}
                productivity={31}
              />
            ),
            related_commands: {
              "Network Traffic Monitor": {
                favicon: <Icons.LAN />,
                content: (
                  <NetworkTrafficMonitor
                    systemName="WAREHOUSE NETWORK MONITOR"
                    location="Alliansen Warehouse #47"
                    bandwidth="124 MB/s (Normal)"
                    activeConnections={18}
                    transfers={[
                      {
                        timestamp: "22:47",
                        filename: "Classified_Manifest_SEC-2082.pdf",
                        size: "1.2 MB",
                        source: "10.47.1.105 (Supervisor Terminal)",
                        destination: "SecOps Equipment Division",
                        protocol: "ENCRYPTED",
                        status: "COMPLETE"
                      },
                      {
                        timestamp: "23:15",
                        filename: "night_shift_logs.txt",
                        size: "45 KB",
                        destination: "Corporate servers",
                        protocol: "HTTPS",
                        status: "COMPLETE"
                      },
                    ]}
                  />
                )
              },

              "Security Incident Log": {
                favicon: <Icons.Files />,
                content: (
                  <IncidentLog
                    title="SECURITY INCIDENTS"
                    timeframe="Last 30 days"
                    incidents={[
                      {
                        timestamp: "Jan 18 (02:15)",
                        type: "False Alarm",
                        details: {
                          Event: "Motion sensor triggered in main warehouse",
                          Resolution: "Rat infestation - exterminator scheduled",
                          Status: "Closed - no security threat"
                        }
                      },
                      {
                        timestamp: "Jan 12 (23:40)",
                        type: "Delivery Delay",
                        details: {
                          Event: "Late shipment arrival (authorized)",
                          Resolution: "Logged, no security issues",
                          Status: "Closed"
                        }
                      },
                      {
                        timestamp: "Jan 7 (01:20)",
                        type: "Equipment Malfunction",
                        details: {
                          Event: "Camera #3 offline for 15 minutes",
                          Resolution: "Auto-reboot successful",
                          Status: "Closed"
                        }
                      },
                      {
                        timestamp: "Jan 3 (03:45)",
                        type: "Patrol Report",
                        details: {
                          Event: "Suspicious vehicle near perimeter",
                          Resolution: "Driver lost, provided directions",
                          Status: "Closed - no threat"
                        }
                      },
                    ]}
                  >
                    <Line smoke>Last serious incident: 8 months ago (attempted theft)</Line>
                  </IncidentLog>
                ),
              },

              "Camera Network Overview": {
                favicon: <Icons.Camera />,
                content: (
                  <NetworkDevices
                    networkName="SURVEILLANCE_SYSTEM"
                    devices={[
                      { name: "Front Entrance", ip: "10.47.1.101", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
                      { name: "Main Warehouse", ip: "10.47.1.102", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
                      { name: "Loading Dock", ip: "10.47.1.103", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
                      { name: "Rec Room", ip: "10.47.1.104", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
                      { name: "Secure Cargo Gate", ip: "10.47.2.201", type: "Security Camera (Isolated)", status: "ONLINE", lastSeen: "Just now" },
                      { name: "Secure Cargo Interior", ip: "10.47.2.202", type: "Security Camera (Isolated)", status: "ONLINE", lastSeen: "Just now" },
                    ]}
                  />
                ),
                related_commands: {
                  "External Camera": {
                    favicon: <Icons.Camera />,
                    content: (
                      <Camera
                        id="alliansen-warehouse-external"
                        location="Alliansen Warehouse - Front entrance (exterior)"
                        coverage="Main gate, parking area, front entrance"
                        status="ACTIVE"
                        recording={true}
                        storage="Alliansen corporate cloud"
                        timeline={[
                          "18:00 → Day shift departs (8 personnel)",
                          "19:30 → Delivery truck arrives, unloads routine supplies",
                          "20:45 → Delivery truck departs",
                          "22:00 → Night shift arrives (6 personnel)",
                          "22:30 → Supervisor's vehicle arrives (late)",
                          "23:00-Present → No activity",
                        ]}
                      />
                    ),
                  },

                  "Main Floor Camera": {
                    favicon: <Icons.Camera />,
                    content: (
                      <Camera
                        id="alliansen-warehouse-main"
                        location="Alliansen Warehouse - Main warehouse floor"
                        coverage="Warehouse floor, aisles, loading dock interior"
                        status="ACTIVE"
                        recording={true}
                        storage="Local server + cloud backup"
                        timeline={[
                          "22:00 → Night shift begins, guards take positions",
                          "22:15 → Supervisor enters Main Office",
                          "22:30 → Guard 2 begins patrol route",
                          "23:00 → Guard 3 takes break in rec room",
                          "23:15 → Forklift moved to loading dock (routine)",
                          "23:30-Present → Minimal activity",
                        ]}
                      />
                    ),
                  },

                  "Secure Cargo Camera": {
                    favicon: <Icons.Camera />,
                    content: (
                      <Camera
                        id="alliansen-warehouse-securecargo"
                        location="Alliansen Warehouse - Secure Cargo area (interior)"
                        coverage="High-value storage, electronics lab, security checkpoint"
                        status="ACTIVE"
                        recording={true}
                        storage="Encrypted local server (air-gapped)"
                        timeline={[
                          "22:00 → Guards 4 & 5 report to Secure Cargo",
                          "22:45 → Target crate logged into inventory",
                          "23:00 → Security sweep completed, all clear",
                          "23:30-Present → Guards stationed, no movement",
                        ]}
                      />
                    ),
                  },
                }
              },
            }
          },

          "Warehouse Vending Machine": {
            favicon: <Icons.Vending />,
            content: (
              <VendingMachine
                id="alliansen-warehouse-vending"
                model="SynthDrinx 3000"
                location="Employee rec room, near break tables"
                drinks={[
                  { name: 'NRG Blast', pattern: 'lines', color: 'orange', available: true },
                  { name: 'Synth-Cola', pattern: 'circles', color: 'red', available: true },
                  { name: 'VitaWater', pattern: 'waves', color: 'blue', available: true },
                  { name: 'Cyber Coffee', pattern: 'blocks', color: 'yellow', available: false },
                  { name: 'FocusFuel', pattern: 'dots', color: 'green', available: true },
                  { name: 'ChillOut Tea', pattern: 'waves', color: 'purple', available: true },
                ]}
              />
            ),
          },
        },
      },
    },
  },
};

export default ALLIANSEN_WAREHOUSE_COMMANDS;
