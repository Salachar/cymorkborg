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

export const MONASTERY_ROUGH_BEAST_COMMANDS = {
  "Gravel Lake Charitable Foundation": {
    favicon: <Icons.Medical />,
    preview: (
      <NodePreview>
        <Line span smoke> · Community outreach and medical services. Gravel Lake / Old Cy border.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="GRAVEL LAKE CHARITABLE FOUNDATION"
        tagline="Healing. Community. Renewal."
        network="GLCF_PUBLIC"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Gravel Lake / Old Cy border",
          "Drop-in support and outreach services for displaced and injured residents",
          "Medical appointments available to the public — see Infirmary booking",
          "All visitors processed at main gate",
        ]}
        theme="casual"
      >
        <InsetBox title="SERVICES:">
          <Line neon bullet>Wound care and basic medical treatment — walk-in and appointment</Line>
          <Line neon bullet>Temporary shelter assessment</Line>
          <Line neon bullet>Community support meetings — daily, led by Flower Child</Line>
          <Line neon bullet>Hot meals — noon and evening</Line>
          <Line yellow bullet>After-hours emergency intake available — ring gate bell</Line>
        </InsetBox>
        <Nodes.HoursBanner
          hours="08:00 — 20:00"
          days="Daily"
          location="Gravel Lake / Old Cy border — follow the outer wall north from the lake"
          note="Gate staff present at all hours. Medical appointments bookable below."
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {

      // ======================================================================
      // INFIRMARY BOOKING — PUBLIC FACING
      // ======================================================================

      "Book Infirmary Appointment": {
        favicon: <Icons.Medical />,
        content: (
          <Node
            title="GLCF INFIRMARY — APPOINTMENT BOOKING"
            subtitle="Open to foundation members and the public"
            notes={[
              "Walk-in treated during operating hours — appointments prioritised",
              "After-hours emergency intake: ring gate bell",
              "Bring any valid ID or district registration if available — not required",
            ]}
            alerts={[
              "Next available appointment: Tomorrow, 09:00",
              "After-hours slots available on request — contact gate staff",
            ]}
          >
            <InsetBox title="INTAKE FORM — PLEASE COMPLETE:">
              <Line smoke bullet>Name or alias (optional)</Line>
              <Line smoke bullet>Nature of injury or complaint</Line>
              <Line smoke bullet>Current medications or active drug use</Line>
              <Line smoke bullet>Cybertech installed — list all active implants for treatment safety</Line>
              <Line yellow small>All information held in confidence by foundation staff</Line>
            </InsetBox>
          </Node>
        ),
      },

      // ======================================================================
      // FRONT GATES — PUBLIC
      // ======================================================================

      "Front Gates": {
        favicon: <Icons.Security />,
        content: (
          <Node
            title="FRONT GATES"
            subtitle="Main Entry — Gravel Lake Charitable Foundation"
            notes={[
              "Single vehicle gate and pedestrian access point",
              "Foundation staff manage visitor intake during operating hours",
              "After-hours bell for emergencies",
              "Visitor queue forms outside during peak hours",
              "Weapons not permitted inside the compound",
            ]}
          />
        ),
      },

      // ======================================================================
      // COMMUNITY MEETINGS — PUBLIC
      // ======================================================================

      "Community Meetings": {
        favicon: <Icons.Group />,
        content: (
          <Node
            title="COMMUNITY SUPPORT PROGRAMME"
            subtitle="Led by Flower Child — Neophyte Quarters"
            notes={[
              "Daily meetings — 10:00 and 17:00",
              "Open to all — no registration required",
              "Topics: recovery, community, purpose, renewal",
              "One-on-one sessions available by request — speak to gate staff",
            ]}
            alerts={[
              "This week: extended evening session Thursday 19:00 — all welcome",
            ]}
          />
        ),
      },

      // ======================================================================
      // INTERNAL ACCESS
      // ======================================================================

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "renewal",
          hint: "The foundation's third principle",
          showFirst: true,
        },
        content: (
          <Node
            title="GRAVEL LAKE CHARITABLE FOUNDATION — STAFF NETWORK"
            subtitle="Authorised personnel only — all access logged"
            notes={[
              "Internal operations network",
              "Building systems, personnel, and scheduling",
            ]}
          />
        ),
        related_commands: {

          "Shift Schedule": {
            favicon: <Icons.Schedule />,
            content: (
              <Nodes.ShiftSchedule
                location="Gravel Lake Charitable Foundation"
                shift="Day Shift"
                shiftTime="08:00 — 20:00"
                nextShift="Night watch — 20:00"
                personnel={[
                  { name: "Armitage", role: "Foundation Director", location: "Cathedral", status: "ACTIVE" },
                  { name: "Flower Child", role: "Community Outreach Lead", location: "Neophyte Quarters", status: "ACTIVE" },
                  { name: "Foundation Staff (x2)", role: "Gate Security", location: "Front Gates", status: "ACTIVE" },
                  { name: "Foundation Staff (x3)", role: "Neophyte Care", location: "Neophyte Quarters", status: "ACTIVE" },
                  { name: "Foundation Staff (x4)", role: "Grounds Patrol", location: "Compound — rotating", status: "ACTIVE" },
                  { name: "Foundation Staff (x1)", role: "Infirmary", location: "Neophyte Quarters — Infirmary Wing", status: "ACTIVE" },
                ]}
              />
            ),
          },

          "Building Access": {
            favicon: <Icons.Lock />,
            password: {
              pw: "sector four",
              hint: "Old compound designation for the main building",
              showCount: true,
            },
            content: (
              <Nodes.BuildingAccess
                title="GLCF — FACILITY ACCESS CONTROL"
                points={[
                  {
                    location: "Outer Perimeter Wall",
                    access: ["Main Gate — staff controlled"],
                    notes: [
                      "Fifty-foot reinforced concrete construction",
                      "Barbed wire along full perimeter top",
                      "Security camera at each corner — feeds to Security Office",
                      "Original military-grade specification — no modifications logged",
                    ],
                  },
                  {
                    location: "Main Gate",
                    access: ["Staff-controlled — manual operation"],
                    notes: [
                      "Vehicle and pedestrian access",
                      "All visitors processed individually",
                      "Weapons surrender required on entry",
                    ],
                  },
                  {
                    location: "Security Office",
                    access: ["Foundation keycard — security staff only"],
                    notes: [
                      "Camera monitoring station — six feeds",
                      "Field light and turret controls — manual override panel",
                    ],
                  },
                  {
                    location: "Neophyte Quarters",
                    access: ["Open 08:00 — 20:00", "Keycard after hours — care staff only"],
                    notes: [
                      "Visitor intake, infirmary, meeting rooms",
                    ],
                  },
                  {
                    location: "Cathedral — Ground Level",
                    access: ["Foundation keycard — Armitage and Flower Child only"],
                    notes: [
                      "Primary operations building — senior staff only",
                      "Director's office, staff quarters, watch post",
                    ],
                  },
                  {
                    location: "Cathedral — Lower Level Hatch",
                    access: [
                      "Component 1: Mechanical key — registered holder: Armitage",
                      "Component 2: Biometric scan — registered holder: Flower Child",
                    ],
                    notes: [
                      "Both components required simultaneously — no override",
                      "Hatch installed post-occupation — not part of original facility plans",
                      "Maintenance record: none on file",
                    ],
                  },
                ]}
              />
            ),
          },

          "Facility Network": {
            favicon: <Icons.LAN />,
            content: (
              <Nodes.NetworkActivity
                title="GLCF_LOCAL"
                environment={{
                  power: "ACTIVE — on-site generation",
                  signal: "Weak — perimeter interference",
                  lighting: "Field lights operational",
                  infrastructure: "Original military installation — partial systems retained",
                }}
                devices={[
                  { name: "Gate Camera NE", location: "Perimeter — Northeast corner", status: "ACTIVE" },
                  { name: "Gate Camera NW", location: "Perimeter — Northwest corner", status: "ACTIVE" },
                  { name: "Gate Camera SE", location: "Perimeter — Southeast corner", status: "ACTIVE" },
                  { name: "Gate Camera SW", location: "Perimeter — Southwest corner", status: "ACTIVE" },
                  { name: "Security Monitor", location: "Security Office", status: "ACTIVE" },
                  { name: "Power Station Control", location: "Power Station", status: "ACTIVE" },
                  { name: "Field Light Array", location: "Compound — perimeter", status: "ACTIVE" },
                  { name: "Intake Terminal", location: "Neophyte Quarters — reception", status: "ACTIVE" },
                  { name: "Infirmary Terminal", location: "Neophyte Quarters — infirmary wing", status: "ACTIVE" },
                  { name: "Cathedral Terminal", location: "Cathedral — director's office", status: "ACTIVE" },
                  { name: "Lower Level Hatch Control", location: "Cathedral — lower access panel", status: "ACTIVE" },
                ]}
              />
            ),
          },

          // ====================================================================
          // SECURITY OFFICE
          // ====================================================================

          "Security Office": {
            favicon: <Icons.Security />,
            password: {
              pw: "nightwatch",
              hint: "What the overnight shift is called",
            },
            content: (
              <Node
                title="SECURITY OFFICE"
                subtitle="Compound Monitoring & Access Control"
                notes={[
                  "Prefab structure — adjacent to main gate",
                  "Six-camera monitoring station — full perimeter coverage",
                  "Field light controls — manual override",
                  "Turret control panel — main gate emplacements",
                  "Staffed at all hours — two personnel minimum overnight",
                ]}
              />
            ),
            related_commands: {
              "Gate Camera NE": {
                favicon: <Icons.Camera />,
                content: (
                  <Nodes.Camera
                    id="glcf-cam-ne"
                    location="Perimeter — Northeast corner"
                    status="ACTIVE"
                    coverage="Northeast wall — outer approach and inner compound"
                    timeline={[
                      "This morning — patrol rotation, northeast sector",
                      "Yesterday — civilian queue at main gate, approx 40 individuals",
                      "Yesterday — Armitage at gate, selected several civilians for intake",
                      "Two days ago — unregistered vehicle slowed on outer road, did not stop",
                      "Three days ago — routine perimeter check, dusk",
                    ]}
                  />
                ),
              },
              "Gate Camera SW": {
                favicon: <Icons.Camera />,
                content: (
                  <Nodes.Camera
                    id="glcf-cam-sw"
                    location="Perimeter — Southwest corner"
                    status="ACTIVE"
                    coverage="Southwest wall and rear approach — vehicle storage area visible"
                    timeline={[
                      "Last night — no activity",
                      "Two nights ago — movement near vehicle storage after 22:00",
                      "Three days ago — unmarked delivery vehicle, rear approach, short stop",
                      "Four days ago — patrol, routine",
                    ]}
                  />
                ),
              },
              "Security Monitor": {
                favicon: <Icons.Security />,
                content: (
                  <Nodes.Workstation
                    owner="Security Staff"
                    role="Compound Monitoring"
                    status="ACTIVE"
                    lastActivity="Camera array review — overnight log"
                    openTabs={[
                      { title: "Camera Array — Live Feed", type: "normal" },
                      { title: "Field Light Control Panel", type: "normal" },
                      { title: "Visitor Log — Today", type: "normal" },
                      { title: "Patrol Schedule — Active", type: "normal" },
                    ]}
                  />
                ),
              },
            },
          },

          // ====================================================================
          // NEOPHYTE QUARTERS
          // ====================================================================

          "Neophyte Quarters": {
            favicon: <Icons.Room />,
            password: {
              pw: "open arms",
              hint: "How the foundation greets the desperate",
            },
            content: (
              <Node
                title="NEOPHYTE QUARTERS"
                subtitle="Visitor Intake, Infirmary & Meeting Facility"
                notes={[
                  "Primary visitor-facing building — central compound",
                  "Intake reception, infirmary wing, recovery rooms, meeting hall",
                  "Civilians convalescing throughout — rotating population",
                  "Flower Child runs community meetings twice daily from the hall",
                  "Locked overnight — care staff keycard access only",
                ]}
              />
            ),
            related_commands: {

              "Intake Terminal": {
                favicon: <Icons.Files />,
                content: (
                  <Nodes.Workstation
                    owner="Intake Staff"
                    role="Visitor Processing"
                    status="ACTIVE"
                    lastActivity="Morning intake — 14 visitors registered"
                    openTabs={[
                      { title: "Visitor Register — Active", type: "normal" },
                      { title: "Infirmary Appointment Queue", type: "normal" },
                      { title: "Meeting Schedule — Flower Child", type: "normal" },
                      { title: "Overnight Care Notes", type: "normal" },
                    ]}
                  />
                ),
              },

              "Infirmary Terminal": {
                favicon: <Icons.Medical />,
                password: {
                  pw: "triage",
                  hint: "First thing you do when someone comes in hurt",
                },
                content: (
                  <Nodes.Workstation
                    owner="Infirmary Staff"
                    role="Medical Records & Scheduling"
                    status="ACTIVE"
                    lastActivity="Patient notes updated — this morning"
                    openTabs={[
                      { title: "Active Patient Files", type: "normal" },
                      { title: "Appointment Bookings — Public & Internal", type: "normal" },
                      { title: "Cybertech Intake Log", type: "suspicious" },
                      { title: "Supply Requisition — pending", type: "normal" },
                    ]}
                  >
                    <Nodes.EncryptedMessage
                      messages={[
                        "CYBERTECH INTAKE LOG — INTERNAL NOTE",
                        "All implant disclosures from intake forms to be forwarded to Director's office by 21:00 daily",
                        "Standard notation: patient name, implant type, condition, estimated value",
                        "Do not discuss this process with visitors or non-senior staff",
                        "[STANDING INSTRUCTION — ARMITAGE]",
                      ]}
                    />
                  </Nodes.Workstation>
                ),
              },

              "Personnel Files": {
                favicon: <Icons.Person />,
                content: (
                  <Node
                    title="NEOPHYTE QUARTERS — PERSONNEL"
                    notes={["4 care and medical staff assigned to this facility"]}
                  />
                ),
                related_commands: {
                  "Flower Child": {
                    favicon: <Icons.Person />,
                    content: (
                      <Nodes.PersonnelFile
                        employeeId="STAFF-002"
                        name="Flower Child"
                        position="Community Outreach Lead"
                        department="Visitor Care"
                        district="Gravel Lake / Old Cy border"
                        notes={[
                          "Primary public-facing representative of the Foundation",
                          "Leads all community support meetings",
                          "Resident — quarters in Cathedral building",
                          "Biometric access: Cathedral lower level hatch — registered holder",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },
                },
              },
            },
          },

          // ====================================================================
          // VEHICLE STORAGE
          // ====================================================================

          "Vehicle Storage": {
            favicon: <Icons.CarRepair />,
            password: {
              pw: "motor pool",
              hint: "Old military term for vehicle storage",
            },
            content: (
              <Node
                title="VEHICLE STORAGE"
                subtitle="Disused — Southwest Compound"
                notes={[
                  "Decommissioned — original military motor pool, no active foundation use",
                  "Salvage and scrap stored on-site",
                  "No lighting — power disconnected at junction box",
                  "Excluded from regular patrol rotation",
                ]}
                alerts={[
                  "Structural assessment overdue — maintenance request pending 14 months",
                ]}
              />
            ),
            related_commands: {
              "Storage Inventory": {
                favicon: <Icons.Inventory />,
                content: (
                  <Nodes.Inventory
                    title="Vehicle Storage — Logged Contents"
                    subtitle="Last physical audit: 14 months ago"
                    items={[
                      {
                        label: "Vehicle frames — decommissioned (x4)",
                        condition: "Scrap",
                        note: "Various military-spec. Non-operational.",
                      },
                      {
                        label: "Industrial scrap — pipe, fittings, plate steel",
                        condition: "Worn",
                        note: "Stacked along north wall.",
                      },
                      {
                        label: "Van — white, unmarked",
                        condition: "Poor",
                        note: "Logged as non-operational. Last service date unknown.",
                      },
                    ]}
                    note="Audit reflects logged state only. Current contents unverified."
                  />
                ),
              },
            },
          },

          // ====================================================================
          // POWER STATION
          // ====================================================================

          "Power Station": {
            favicon: <Icons.Maintenance />,
            password: {
              pw: "generator",
              hint: "What keeps the lights on",
              showCount: true,
            },
            content: (
              <Node
                title="POWER STATION"
                subtitle="Compound Power Generation — Southeast"
                notes={[
                  "On-site diesel generator — original military installation",
                  "Powers field lights, security systems, and all compound buildings",
                  "Manual access only — no remote shutdown capability",
                  "Continuous operation required — field lights and perimeter systems dependent",
                ]}
                alerts={[
                  "Manual override on-site only — no remote control available",
                ]}
              />
            ),
            related_commands: {
              "Maintenance Log": {
                favicon: <Icons.Files />,
                content: (
                  <Node
                    title="POWER STATION — MAINTENANCE LOG"
                    notes={[
                      "Last service: 6 weeks ago — routine inspection, no faults logged",
                      "Fuel reserve: adequate — resupply scheduled next week",
                      "No logged outages in past 90 days",
                      "Original installation: military-spec diesel, estimated service life exceeded — running on extension",
                    ]}
                  />
                ),
              },
            },
          },

          // ====================================================================
          // CATHEDRAL
          // ====================================================================

          "Cathedral": {
            favicon: <Icons.Church />,
            password: {
              pw: "the chorus",
              hint: "What you hear if you listen too closely to the floor",
            },
            content: (
              <Node
                title="THE CATHEDRAL"
                subtitle="Primary Operations Building — Senior Staff Only"
                notes={[
                  "Former military command structure — repurposed as foundation headquarters",
                  "Director's office, staff quarters, watch post",
                  "Residential — Armitage and Flower Child permanent residents",
                  "One staff member on watch at all hours — ground floor",
                  "Locked at all times — Foundation keycard required",
                ]}
                alerts={[
                  "Access: Foundation keycard — Armitage and Flower Child only",
                  "Lower level hatch: biometric and mechanical — two components required",
                ]}
              />
            ),
            related_commands: {

              "Personnel Files": {
                favicon: <Icons.Person />,
                content: (
                  <Node
                    title="CATHEDRAL — RESIDENT STAFF"
                    notes={["2 senior staff — permanent residents"]}
                  />
                ),
                related_commands: {
                  "Armitage": {
                    favicon: <Icons.Person />,
                    content: (
                      <Nodes.PersonnelFile
                        employeeId="STAFF-001"
                        name="Armitage"
                        position="Foundation Director"
                        department="Senior Leadership"
                        district="Gravel Lake / Old Cy border"
                        notes={[
                          "Public director — primary external representative of the Foundation",
                          "Conducts visitor selection at main gate — twice daily",
                          "Resident — upper floor quarters, Cathedral",
                          "Mechanical key holder — Cathedral lower level hatch",
                          "Spare key: stored in quarters",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },
                  "Flower Child": {
                    favicon: <Icons.Person />,
                    content: (
                      <Nodes.PersonnelFile
                        employeeId="STAFF-002"
                        name="Flower Child"
                        position="Community Outreach Lead"
                        department="Visitor Care"
                        district="Gravel Lake / Old Cy border"
                        notes={[
                          "Resident — upper floor quarters, Cathedral",
                          "Biometric access: Cathedral lower level hatch — registered holder",
                          "Cross-referenced: Neophyte Quarters personnel file",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },
                },
              },

              "Director's Office Terminal": {
                favicon: <Icons.Computer />,
                password: {
                  pw: "corto",
                  hint: "The name he left behind",
                },
                content: (
                  <Nodes.Workstation
                    owner="Armitage"
                    role="Foundation Director"
                    status="ACTIVE"
                    lastActivity="Intake review — cybertech log"
                    openTabs={[
                      { title: "Intake log — today", type: "normal" },
                      { title: "Cybertech disclosure summary — this week", type: "suspicious" },
                      { title: "Draft — unsent", type: "suspicious" },
                    ]}
                  >
                    <Nodes.EncryptedMessage
                      messages={[
                        "Draft — unsent",
                        "The mass projection has been revised. It is not enough. Riviera knows this — I believe he has known for some time. He does not care.",
                        "What grows below does not think in terms of cities. It thinks in terms of consumption.",
                        "I am past the point of leaving.",
                        "[DRAFT UNSENT]",
                      ]}
                    />
                  </Nodes.Workstation>
                ),
              },

              "Lower Level Hatch Control": {
                favicon: <Icons.Lock />,
                password: {
                  pw: "two saints",
                  hint: "What Armitage calls the two holders",
                  lockType: 'safe',
                },
                content: (
                  <Node
                    title="LOWER LEVEL — ACCESS CONTROL"
                    subtitle="Hatch B1 — Cathedral Floor"
                    notes={[
                      "Access: combination mechanical-biometric — two components required simultaneously",
                      "Component 1 — Mechanical key (registered holder: Armitage)",
                      "Component 2 — Biometric scan (registered holder: Flower Child)",
                      "No remote override — physical presence required for both components",
                      "Hatch installed post-occupation — not present in original facility schematics",
                      "No maintenance record on file",
                    ]}
                    alerts={[
                      "Signal loss below hatch level — network does not extend to lower facility",
                    ]}
                  />
                ),
              },

            },
          },
        },
      },
    },
  },
};

export default MONASTERY_ROUGH_BEAST_COMMANDS;
