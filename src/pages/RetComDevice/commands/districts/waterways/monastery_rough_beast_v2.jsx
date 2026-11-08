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

const B = ({ children }) => <strong style={{ fontWeight: 800 }}>{children}</strong>;

export const MONASTERY_ROUGH_BEAST_COMMANDS = {
  "Lake Gravel Charitable Foundation": {
    favicon: <Icons.Medical />,
    preview: (
      <NodePreview>
        <Line span smoke> · Community outreach and medical services. Lake Gravel / Old Cy border.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="LAKE GRAVEL CHARITABLE FOUNDATION"
        tagline="Healing. Community. Renewal."
        notes={[
          "Drop-in support and outreach services for displaced and injured residents",
          "Medical appointments available to the public — see Infirmary booking",
          "Garden Programme volunteers wanted — see Bloom Drive",
          "All visitors processed at main gate",
        ]}
      >
        <InsetBox title="SERVICES:">
          <Line bullet>Wound care and basic medical treatment — walk-in and appointment</Line>
          <Line bullet>Temporary shelter assessment</Line>
          <Line bullet>Community support meetings — daily, led by Flower Child</Line>
          <Line bullet>Afternoon pageant — open to everyone in line</Line>
          <Line bullet>Hot meals — noon and evening</Line>
          <Line yellow bullet>After-hours emergency intake available — ring gate bell</Line>
        </InsetBox>
        <Nodes.HoursBanner
          hours="08:00 — 20:00"
          days="Daily"
          location="Lake Gravel / Old Cy border — follow the outer wall north from the lake"
          note="Gate staff present at all hours. Medical appointments bookable below."
        />
      </Nodes.PublicPortal>
    ),
    related_commands: {

      // ======================================================================
      // PUBLIC — OPEN TO THE LINE
      // ======================================================================

      "Book Infirmary Appointment": {
        favicon: <Icons.Medical />,
        content: (
          <Node
            title="GLCF INFIRMARY — APPOINTMENT BOOKING"
            subtitle="Open to foundation members and the public"
            notes={[
              "Walk-ins treated during operating hours — appointments prioritised",
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

      "Bloom Drive": {
        favicon: <Icons.Heart />,
        preview: (
          <NodePreview>
            <Line span smoke> · Garden Programme. Volunteers wanted. 50¤ a bloom, or a place in the member programme.</Line>
          </NodePreview>
        ),
        content: (
          <Node
            title="GARDEN PROGRAMME — BLOOM DRIVE"
            subtitle="Lake Gravel Charitable Foundation — volunteers wanted"
            notes={[
              "The Foundation's memorial garden needs blooms from the platform beds at Old Cy Station",
              "Pale, low-light flowering variety — the old transit authority planting",
              "Volunteers who bring a bloom to the gate receive 50¤ each, or a place in the member programme",
              "Member programme: meals, bunks and work in the Foundation's grounds",
              "Garden Programme volunteers use the member lane at the main gate",
              "The Foundation accepts no liability for volunteers at the site",
            ]}
            alerts={[
              "Drive extended — blooms still wanted",
            ]}
          />
        ),
      },

      "Front Gates": {
        favicon: <Icons.Security />,
        content: (
          <Node
            title="FRONT GATES"
            subtitle="Main Entry — Lake Gravel Charitable Foundation"
            notes={[
              "Single vehicle gate and pedestrian access point",
              "Foundation staff manage visitor intake during operating hours",
              "After-hours bell for emergencies",
              "Visitor queue forms outside during peak hours",
              "Weapons not permitted inside the compound",
              "Garden Programme volunteers use the member lane",
            ]}
          />
        ),
        related_commands: {
          "Donation Box": {
            favicon: <Icons.Wallet />,
            content: (
              <Nodes.DigitalWallet
                id="glcf-gate-donation-box"
                label="Foundation donations — gate box"
                accountHolder="GLCF"
                credits={35}
              />
            ),
          },
        },
      },

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
              "Afternoon pageant on the west stage — open to everyone in line",
              "One-on-one sessions available by request — speak to gate staff",
            ]}
            alerts={[
              "This week: extended evening session Thursday 19:00 — member programme",
            ]}
          />
        ),
      },

      // ======================================================================
      // INTERNAL ACCESS — half online: status, schedules, credentials, lore
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
            title="LAKE GRAVEL CHARITABLE FOUNDATION — STAFF NETWORK"
            subtitle="Authorised personnel only — all access logged"
            notes={[
              "Internal operations network — status relay only",
              "Building systems, personnel, scheduling and correspondence",
              "Control functions run on separate closed networks at each site",
            ]}
          />
        ),
        related_commands: {

          "Shift Schedule": {
            favicon: <Icons.Schedule />,
            content: (
              <Nodes.ShiftSchedule
                location="Lake Gravel Charitable Foundation"
                shift="Day Shift"
                shiftTime="08:00 — 20:00"
                nextShift="Night watch — 20:00"
                personnel={[
                  { name: "Armitage", role: "Foundation Director", location: "HQ", status: "ACTIVE" },
                  { name: "Flower Child", role: "Community Outreach Lead", location: "Neophyte Quarters", status: "ACTIVE" },
                  { name: "Foundation Staff (x4)", role: "Gate Security", location: "Front Gates", status: "ACTIVE" },
                  { name: "Foundation Staff (x2)", role: "Checkpoint", location: "Members' side — internal wall gaps", status: "ACTIVE" },
                  { name: "Foundation Staff (x2)", role: "Forecourt Post", location: "HQ — forecourt", status: "ACTIVE" },
                  { name: "Foundation Staff (x4)", role: "Monitoring", location: "HQ — Security Office", status: "ACTIVE" },
                  { name: "Foundation Staff (x2)", role: "Grounds Patrol", location: "Compound — rotating", status: "ACTIVE" },
                  { name: "Foundation Staff (x2)", role: "Neophyte Care", location: "Neophyte Quarters", status: "ACTIVE" },
                  { name: "Foundation Staff (x1)", role: "Infirmary", location: "Neophyte Quarters — Infirmary Wing", status: "ACTIVE" },
                  { name: "Foundation Staff (x1)", role: "Watch", location: "HQ — round room", status: "ACTIVE" },
                ]}
              />
            ),
          },

          "Building Access": {
            favicon: <Icons.Lock />,
            password: {
              pw: "sector four",
              hint: "What the utility sensors call this site",
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
                      "Fifty-foot reinforced concrete — original installation",
                      "Epoxy coating and barbed wire added by the Foundation",
                      "Cameras at each corner — feeds to the Security Office",
                    ],
                  },
                  {
                    location: "Main Gate — Open Zone",
                    access: ["Staff-controlled — manual operation"],
                    notes: [
                      "Visitors processed individually — weapons surrendered on entry",
                      "Garden Programme volunteers use the member lane",
                      "Open zone: gate, tanks, Neophyte Quarters, west stage",
                    ],
                  },
                  {
                    location: "Neophyte Quarters",
                    access: ["Open 08:00 — 20:00", "Keycard after hours — care staff only"],
                    notes: [
                      "Visitor intake, infirmary, meeting hall",
                    ],
                  },
                  {
                    location: "Members' Side — Checkpoint",
                    access: ["Member programme — anointed members only"],
                    notes: [
                      "Staffed post at the internal wall gaps",
                      "Beyond: vehicle bays, kitchen, cafeteria, barracks, east stage, training grounds",
                    ],
                  },
                  {
                    location: "HQ — Forecourt",
                    access: ["Invitation only"],
                    notes: [
                      "Two-person post",
                      "Meal carts to the Mess admitted at noon and evening",
                    ],
                  },
                  {
                    location: "HQ — Interior",
                    access: ["Mechanical locks — keys held by senior staff"],
                    notes: [
                      "Security Office, Power, infirmary, jail, mess, storage, living quarters",
                      "Electronic door strikes retained on selected interior doors — see Security Office",
                    ],
                  },
                  {
                    location: "HQ — The Descent (round room)",
                    access: ["Authorised console only"],
                    notes: [
                      "Platform opens from one authorised console on the closed descent network",
                      "No remote access from this network",
                      "Passphrase custody: split — Director and Outreach Lead",
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
                  control: "Closed networks — local consoles only",
                  infrastructure: "Original military installation — partial systems retained",
                }}
                devices={[
                  { name: "Gate Camera NE", location: "Perimeter — Northeast corner", status: "ACTIVE" },
                  { name: "Gate Camera NW", location: "Perimeter — Northwest corner", status: "ACTIVE" },
                  { name: "Gate Camera SE", location: "Perimeter — Southeast corner", status: "ACTIVE" },
                  { name: "Gate Camera SW", location: "Perimeter — Southwest corner", status: "ACTIVE" },
                  { name: "Security Monitor", location: "HQ — Security Office", status: "ACTIVE" },
                  { name: "Gatehouse Console", location: "Open zone — closed network, status only", status: "ACTIVE" },
                  { name: "Supply Prefab Console", location: "Members' side — closed network, status only", status: "ACTIVE" },
                  { name: "Power Console", location: "HQ — closed network, status only", status: "ACTIVE" },
                  { name: "Descent Consoles (x6)", location: "HQ round room — closed network, status only", status: "ACTIVE" },
                  { name: "Door Strike Controller", location: "HQ and members' side — selected interior doors", status: "ACTIVE" },
                  { name: "Intake Terminal", location: "Neophyte Quarters — reception", status: "ACTIVE" },
                  { name: "Infirmary Terminal", location: "Neophyte Quarters — infirmary wing", status: "ACTIVE" },
                ]}
              />
            ),
          },

          // ====================================================================
          // CITY DEALINGS & LORE
          // ====================================================================

          "Recommissioning Programme": {
            favicon: <Icons.Weapons />,
            content: (
              <Nodes.Inventory
                title="Recommissioning Programme — Asset Status"
                subtitle="Foundation grounds — reconditioning of inherited assets"
                items={[
                  {
                    label: "Main battle tanks (x2)",
                    condition: "Poor",
                    description: "Drivetrain reconditioning 40%. No ammunition on site.",
                  },
                  {
                    label: "Field howitzers (x3)",
                    condition: "Poor",
                    description: "Barrel and breech reconditioning 15%. Crews on site by day.",
                  },
                  {
                    label: "Working vehicles (x6)",
                    condition: "Good",
                    description: "Charity vans and utility trucks. In daily service.",
                  },
                  {
                    label: "Decommissioned vehicles (x9)",
                    condition: "Scrap",
                    description: "Stripped for parts.",
                  },
                  {
                    label: "Ordnance and small arms",
                    condition: "Unknown",
                    description: "Six crates received this month. Source redacted.",
                  },
                ]}
                footer="Programme lead: Director. Funding: disposition account."
              />
            ),
          },

          "Legal & Compliance": {
            favicon: <Icons.Files />,
            password: {
              pw: "paperwork",
              hint: "What nobody here likes doing",
              showFirst: true,
            },
            content: (
              <Node
                title="LEGAL & COMPLIANCE"
                subtitle="Correspondence with municipal bodies"
                notes={[
                  "3 open items",
                  "Registered address: Lake Gravel / Old Cy border — acquired at municipal surplus sale",
                  "Charity registration: current",
                ]}
              />
            ),
            related_commands: {
              "Notice of Intent": {
                favicon: <Icons.Warning />,
                content: (
                  <Node
                    title="MUNICIPAL ENFORCEMENT — NOTICE OF INTENT"
                    subtitle="Ref ENF-GL-0457 — Lake Gravel Charitable Foundation"
                    notes={[
                      "Basis: acquisition of decommissioned ordnance and reconditioning of armoured vehicles without a municipal licence",
                      "Response requested within 14 days",
                      "No response received",
                      "Escalation: heavy-response review authorised",
                      "Execution at dispatch's discretion",
                    ]}
                    alerts={[
                      "FINAL NOTICE — no further correspondence will be issued",
                    ]}
                  />
                ),
              },
              "Draft Reply": {
                favicon: <Icons.Files />,
                content: (
                  <Nodes.EncryptedMessage
                    messages={[
                      "Draft — unsent",
                      "To: Municipal Enforcement, Re: ENF-GL-0457",
                      "We are a charity. We have always been a charity. The equipment you describe came with the property and is being restored for the benefit of the community.",
                      "[DRAFT UNSENT — A.]",
                    ]}
                  />
                ),
              },
            },
          },

          // ====================================================================
          // MAINTENANCE — descent route, NUMBER
          // ====================================================================

          "Maintenance": {
            favicon: <Icons.Maintenance />,
            password: {
              pw: "spanner",
              hint: "What a British mechanic calls a wrench",
            },
            content: (
              <Node
                title="MAINTENANCE"
                subtitle="Grounds and building services"
                notes={[
                  "Crew of 3 — shared between the open zone and members' side",
                  "HQ interior work by senior-staff escort only",
                ]}
              />
            ),
            related_commands: {
              "Work Orders": {
                favicon: <Icons.Files />,
                content: (
                  <Node
                    title="MAINTENANCE — WORK ORDERS"
                    subtitle="Open and recently closed"
                    notes={[
                      "WO-2194 — Gatehouse console, keypad intermittent — closed",
                      "WO-2217 — Descent ring, position 2, keypad wear — keys replaced (third time this year) — closed",
                      "WO-2231 — Supply prefab console, fan noise — deferred",
                      "WO-2240 — West stage bleachers, three loose bolts — open",
                      "WO-2246 — Kitchen cold store, compressor — open",
                    ]}
                  />
                ),
              },
            },
          },

          // ====================================================================
          // SECURITY OFFICE — descent route, LETTER and PHRASE
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
                subtitle="HQ ground floor, west — Compound Monitoring"
                notes={[
                  "Camera monitoring station — six feeds",
                  "Staffed at all hours — four personnel",
                  "Door strike and feed controls available from this terminal",
                  "Turrets and field lights run on separate closed networks",
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
                      "Yesterday — unmarked vehicle returned to the outer road and parked two hundred metres east for forty minutes",
                      "Two days ago — same vehicle slowed on the outer road, did not stop",
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
                    coverage="Southwest wall and rear approach — vehicle lots visible"
                    timeline={[
                      "Last night — no activity",
                      "Two nights ago — movement near the lots after 22:00",
                      "Three days ago — unmarked delivery vehicle, rear approach, short stop",
                      "Four days ago — patrol, routine",
                    ]}
                  />
                ),
              },

              "HQ Forecourt Camera": {
                favicon: <Icons.Camera />,
                content: (
                  <Nodes.Camera
                    id="glcf-cam-forecourt"
                    location="HQ — forecourt approach"
                    status="ACTIVE"
                    coverage="Forecourt post, HQ entrance, meal cart route"
                    timeline={[
                      "This morning — meal cart to the Mess, noon, admitted by forecourt post",
                      "Yesterday — Armitage returned from the gate, 11:30",
                      "Yesterday — meal cart, evening, admitted",
                      "Two days ago — no visitors, no entries",
                      "Post rotation every six hours, on the hour",
                    ]}
                  />
                ),
              },

              // DESCENT — LETTER (B): the Director uses console B nightly
              "Round Room Camera": {
                favicon: <Icons.Camera />,
                content: (
                  <Nodes.Camera
                    id="glcf-cam-round-room"
                    location="HQ — round room"
                    status="ACTIVE"
                    coverage="Ring consoles and central platform"
                    timeline={[
                      "Last night 02:10 — platform lowered. Director at console B. Platform raised 02:16",
                      "Two nights ago 02:04 — platform lowered. Director at console B. Platform raised 02:09",
                      "Three nights ago 02:12 — platform lowered. Director at console B. Platform raised 02:20",
                      "Four nights ago — no platform cycle logged",
                      "Watch post: one staff member, rotated every six hours",
                    ]}
                  />
                ),
              },

              "Feed Control": {
                favicon: <Icons.Camera />,
                content: (
                  <Node
                    title="SECURITY — FEED CONTROL"
                    subtitle="Camera feed management"
                    notes={[
                      "Any camera feed can be looped from this terminal for up to ten minutes",
                      "Loop requests are written to the feed log",
                      "Last loop request: none in the past 30 days",
                    ]}
                  />
                ),
              },

              "Door Strikes": {
                favicon: <Icons.Lock />,
                content: (
                  <Node
                    title="SECURITY — DOOR STRIKES"
                    subtitle="Electronic door release"
                    notes={[
                      "Electronic strikes retained from the original installation on four doors",
                      "Neophyte Quarters (after hours), storage rooms, supply prefab, Mess",
                      "Release on request from this terminal — releases are logged",
                      "All other doors: mechanical locks",
                      "Courtesy lighting: one building at a time can be cut from this terminal",
                    ]}
                  />
                ),
              },

              // DESCENT — PHRASE: the hardest lock in the network
              "Console Credentials": {
                favicon: <Icons.Lock />,
                password: {
                  pw: "halvard shore",
                  lockType: 'terminal',
                  decoyLetters: "b,c,f,g,k,m,n,p,q,t,w,x,y,z",
                },
                content: (
                  <Node
                    title="DESCENT CONSOLES — CREDENTIAL ROTATION"
                    subtitle="Archive record — audit copy"
                    notes={[
                      "Authentication: passphrase, rotated monthly",
                      "Lockout: three failed entries — one hour",
                      "Custody: split — Director and Outreach Lead",
                      "Audit copy of the current passphrase retained below",
                    ]}
                  >
                    <InsetBox color="yellow" title="CURRENT PASSPHRASE:">
                      <Line yellow bold>ALL ARE WELCOME BELOW</Line>
                    </InsetBox>
                  </Node>
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
                      { title: "Visitor Log — Today", type: "normal" },
                      { title: "Patrol Schedule — Active", type: "normal" },
                      { title: "Feed Control", type: "normal" },
                    ]}
                  />
                ),
              },
            },
          },

          // ====================================================================
          // NEOPHYTE QUARTERS — open zone
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
                  "Primary visitor-facing building — open zone, central compound",
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
                      { title: "Garden Programme — volunteer log", type: "normal" },
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
                related_commands: {
                  "Night Visit Roster": {
                    favicon: <Icons.Files />,
                    content: (
                      <Node
                        title="INFIRMARY — NIGHT VISIT ROSTER"
                        subtitle="Patients flagged for follow-up visits — Director's office"
                        notes={[
                          "Flag criteria: implant value above 150¤, no registered next of kin",
                          "Tonight: 2 visits scheduled — bed 4 (optic implant), bed 9 (dermal plating)",
                          "Visit staff: Director's office plus two escorts",
                          "Outcome codes: EC = extended care (transfer to HQ infirmary), R = released",
                          "Last 30 days: 11 flagged, 9 EC, 2 R",
                          "EC consignments leave on the south run, Tuesday and Thursday",
                        ]}
                      />
                    ),
                  },
                },
              },

              "Personnel Files": {
                favicon: <Icons.Person />,
                content: (
                  <Node
                    title="NEOPHYTE QUARTERS — PERSONNEL"
                    notes={["3 care and medical staff assigned to this facility"]}
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
                        district="Lake Gravel / Old Cy border"
                        notes={[
                          "Primary public-facing representative of the Foundation",
                          "Leads all community support meetings",
                          "Resident — HQ, west living quarters",
                          "Passphrase custody: descent console (split)",
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
          // KITCHEN — members' side
          // ====================================================================

          "Kitchen": {
            favicon: <Icons.Food />,
            password: {
              pw: "stockpot",
              hint: "The one pot every kitchen never empties",
              showCount: true,
            },
            content: (
              <Node
                title="KITCHEN & CAFETERIA"
                subtitle="Members' side — meal service"
                notes={[
                  "Hot meals at noon and in the evening for the open zone and the member programme",
                  "Meal cart service to the HQ Mess, noon and evening",
                  "Crew of 6 — member programme volunteers",
                ]}
              />
            ),
            related_commands: {
              "Supply Orders": {
                favicon: <Icons.Inventory />,
                content: (
                  <Node
                    title="KITCHEN — SUPPLY ORDERS"
                    subtitle="Weekly standing orders"
                    notes={[
                      "Rice 120 kg, synth-protein 80 kg, algae sticks 40 kg",
                      "Raw meat — kennel allocation: 4 kg daily, pantry B, collected by Power staff",
                      "Catering for the Thursday sermon: 200 portions (members)",
                      "Pantry B is locked after 21:00",
                    ]}
                  />
                ),
              },
              "Cafeteria Coffee Machine": {
                favicon: <Icons.CoffeeMachine />,
                content: (
                  <Nodes.CoffeeMachine>
                    <Nodes.DigitalWallet
                      id="glcf-cafeteria-coffee-wallet"
                      label="Coffee fund — please keep it topped up"
                      credits={14}
                    />
                  </Nodes.CoffeeMachine>
                ),
              },
              "Kitchen Bin": {
                content: (
                  <Nodes.SmartBin
                    id="glcf-kitchen-bin"
                    location="Behind the serving line"
                    status="NOMINAL"
                    items={[
                      'thermos',
                      'bandages',
                      'duct_tape',
                    ]}
                  />
                ),
              },
            },
          },

          // ====================================================================
          // VEHICLE POOL — members' side
          // ====================================================================

          "Vehicle Pool": {
            favicon: <Icons.CarRepair />,
            password: {
              pw: "motor pool",
              hint: "Old military term for vehicle storage",
            },
            content: (
              <Node
                title="VEHICLE POOL"
                subtitle="Members' side — working lot, garage and decommissioned lot"
                notes={[
                  "Working lot: six vehicles in daily service",
                  "Garage prefab: decommissioned — scrap and a non-operational van, no lighting",
                  "Decommissioned lot: nine hulks, stripped for parts",
                  "Structural assessment overdue — maintenance request pending 14 months",
                ]}
              />
            ),
            related_commands: {
              "Storage Inventory": {
                favicon: <Icons.Inventory />,
                content: (
                  <Nodes.Inventory
                    title="Garage Prefab — Logged Contents"
                    subtitle="Last physical audit: 14 months ago"
                    items={[
                      {
                        label: "Industrial scrap — pipe, fittings, plate steel",
                        condition: "Worn",
                        description: "Stacked along the north wall.",
                      },
                      {
                        label: "Van — white, unmarked",
                        condition: "Poor",
                        description: "Logged as non-operational. Last service date unknown.",
                      },
                    ]}
                    note="Audit reflects logged state only. Current contents unverified."
                  />
                ),
              },
              "South Run Manifest": {
                favicon: <Icons.Shipping />,
                content: (
                  <Node
                    title="SOUTH RUN — MANIFEST"
                    subtitle="Tuesday and Thursday, after midnight"
                    notes={[
                      "Tue 01:20 — van 3 — 3 crates (biomedical), 2 passengers (transfer) — Ports pickup point",
                      "Thu 01:15 — van 3 — 2 crates (biomedical), 1 passenger (transfer) — Ports pickup point",
                      "Running dark, no markings — authorised by Director",
                      "Payment: credchip transfer, third party",
                    ]}
                  />
                ),
              },
            },
          },

          // ====================================================================
          // POWER STATION — HQ
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
                subtitle="Compound Power Generation — HQ, north"
                notes={[
                  "On-site diesel generator — original military installation",
                  "Powers field lights, security systems and all compound buildings",
                  "Console on a closed network — status only from here",
                  "Control: local console only",
                ]}
                alerts={[
                  "Manual override on site only — no remote control available",
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
                      "No logged outages in the past 90 days",
                      "Original installation: military-spec diesel, service life exceeded — running on extension",
                    ]}
                  />
                ),
              },
            },
          },

          // ====================================================================
          // THE CATHEDRAL — HQ
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
                subtitle="HQ — Senior Staff Only"
                notes={[
                  "Former command building — repurposed as foundation headquarters",
                  "Director's office, living quarters, infirmary, jail, mess, storage",
                  "Round room: the descent",
                  "One staff member on watch at all hours",
                  "Forecourt post: two personnel",
                ]}
                alerts={[
                  "Access: invitation only — mechanical locks, keys held by senior staff",
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
                        district="Lake Gravel / Old Cy border"
                        notes={[
                          "Public director — primary external representative of the Foundation",
                          "Conducts visitor selection at main gate — twice daily",
                          "Resident — HQ, east bedroom",
                          "Passphrase custody: descent console (split)",
                          "Project lead: Recommissioning Programme",
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
                        district="Lake Gravel / Old Cy border"
                        notes={[
                          "Resident — HQ, west living quarters",
                          "Passphrase custody: descent console (split)",
                          "Cross-referenced: Neophyte Quarters personnel file",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },
                },
              },

              "The Descent": {
                favicon: <Icons.Lock />,
                content: (
                  <Node
                    title="THE DESCENT — STATUS"
                    subtitle="HQ round room — closed network"
                    table={{
                      platform: "SEALED",
                      network: "CLOSED — not connected",
                      provisionedStations: "1 of 6",
                      stationFormat: "Letter-number (A to C, 1 to 2)",
                      authentication: "Passphrase",
                    }}
                    notes={[
                      "Platform opens from one authorised console on the descent network",
                      "No remote control from any other network",
                      "Passphrase custody: split — Director and Outreach Lead",
                      "Signal ends at the platform",
                    ]}
                  />
                ),
              },

              // DESCENT — LETTER (B), plus two words of the phrase (ALL ARE)
              "Armitage — Private Notes": {
                favicon: <Icons.Computer />,
                password: {
                  pw: "kv7q-m3zt-w9ld-x2rb",
                  lockType: 'terminal',
                },
                content: (
                  <Node
                    title="A."
                    subtitle="Private notes"
                  >
                    <Line smoke>I selected four today. The pro<B>b</B>lem with the queue is that every face is a hope, and I have to carry <B>all</B> of them.</Line>
                    <Line smoke>One of them held her wrist the way I held mine, after. I said nothing. Corto would have. Corto is not here to say things.</Line>
                    <Line smoke>Riviera was loud again after midnight. I do not mind the voice. It is the quiet I fear. We <B>are</B> what he needs us to be.</Line>
                    <Line smoke>The inspectors' letter is in the drawer. I have not answered it. What would I say?</Line>
                    <Line smoke>Flower Child says I should rest. She is right. I will not.</Line>
                  </Node>
                ),
              },

              // DESCENT — NUMBER (2), plus two words of the phrase (WELCOME BELOW)
              "Flower Child — Private Notes": {
                favicon: <Icons.Computer />,
                password: {
                  pw: "ph4n-j8cs-y6gv-t1eu",
                  lockType: 'terminal',
                },
                content: (
                  <Node
                    title="F."
                    subtitle="Private notes"
                  >
                    <Line smoke>Meetings at 10:00 and 17:00. We were four chairs short again. I held <B>2</B> hands tonight and told each of them the same thing.</Line>
                    <Line smoke>I tell them they are <B>welcome</B>. I mean it. I have never said it and not meant it.</Line>
                    <Line smoke>The hum from <B>below</B> makes the chairs rattle on the quiet nights. The new ones think it is the generator. I let them.</Line>
                    <Line smoke>Armitage does not sleep. He thinks I do not notice. I leave a lamp on for him.</Line>
                  </Node>
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
