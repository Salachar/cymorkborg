import Icons from '@utils/icons';

import {
  InsetBox,
  Line,
  Divider,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  BuildingAccess,
  BuildingServices,
  EncryptedMessage,
  EventLineup,
  HoursBanner,
  Menu,
  NetworkActivity,
  Node,
  PersonnelFile,
  PublicPortal,
  RetComImage,
  Safe,
  ShiftSchedule,
  VIPList,
  Workstation,
} from "@retcom"

import floor1Image from '@images/blueprints/aurelion_floor_1.jpg';

// ============================================================================
// AURELION — Prestige dining, Undersjon central atrium (ground level)
// Second Seating sidequest: see aurelion_second_seating.md for GM notes
// ============================================================================

export const AURELION = {
  "Aurelion": {
    favicon: <Icons.Food />,
    preview: (
      <NodePreview>
        <Line span smoke> · Prestige dining. Real meat. Reservations only.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="AURELION"
        tagline="Every course a conversation."
        network="AURELION_GUEST"
        signalStrength="strong"
        status="SEATING TONIGHT — RESERVATIONS ONLY"
        statusColor="neon"
        notes={[
          "Undersjon — central atrium, ground level. Guest entrance on the west promenade.",
          "Smart dress required. Weapons checked at the host desk.",
          "Private VIP suites available by arrangement",
          "Corporate neutral ground. Please leave your business at the door.",
        ]}
        theme="fancy"
      >
        <InsetBox title="THE EXPERIENCE:">
          <Line neon bullet>Soil-grown produce. Real, traceable meat.</Line>
          <Line neon bullet>Live piano nightly</Line>
          <Line neon bullet>Two private suites with acoustic isolation</Line>
          <Line yellow bold bullet>Tableside flambé service — ask your server</Line>
        </InsetBox>
        <HoursBanner
          hours="18:00 — 01:00"
          days="Nightly"
          location="Undersjon central atrium — west promenade entrance"
          note="Guest valet available on the parking level. Ask the host for a card."
        >
          <Line yellow>Facial recognition in use for your comfort and safety</Line>
        </HoursBanner>
      </PublicPortal>
    ),
    related_commands: {

      // ----------------------------------------------------------------------
      // PUBLIC
      // ----------------------------------------------------------------------

      "Tonight's Menu": {
        favicon: <Icons.BarMenu />,
        content: (
          <Menu
            title="AURELION"
            subtitle="Tasting menu — tonight"
            signType="cocktail"
            categories={[
              {
                name: "COURSES:",
                items: [
                  { name: "Amuse — cured lake trout, soil radish", price: "incl." },
                  { name: "Real beef tartare, smoked yolk", price: "38¤" },
                  { name: "Heritage pork, three ways", price: "52¤" },
                  { name: "Vat-free lamb, ash crust", price: "64¤" },
                ],
              },
              {
                name: "DESSERT:",
                items: [
                  { name: "Burnt honey ice, gold leaf", price: "18¤" },
                  { name: "Flambé cherries, presented tableside", price: "24¤" },
                ],
              },
              {
                name: "BAR:",
                items: [
                  { name: "Real gin martini", price: "16¤" },
                  { name: "House red (soil-grown)", price: "22¤ / glass" },
                  { name: "Something older than you", price: "Ask" },
                ],
              },
            ]}
            footer="VIP suites receive their flambé with the door closed, for the theatre of the flame."
          />
        ),
      },

      "Live Piano": {
        favicon: <Icons.Entertainment />,
        content: (
          <EventLineup
            venueName="Aurelion"
            date="Tonight"
            updateFrequency="Updated by the house"
            theme="bar"
            performances={[
              { time: "20:00", artist: "Remy", genre: "Standards" },
              { time: "21:00", artist: "Remy", genre: "Old Cy ballads" },
              { time: "22:15", artist: "Remy — \"Lantern Waltz\"", genre: "Private request" },
              { time: "23:00", artist: "Remy", genre: "Late standards" },
            ]}
            entry={{
              notes: "Grand piano, dining floor south-east corner • Requests welcome (20¤+)",
            }}
            tagline="Requests are discreet. So is Remy."
          />
        ),
      },

      "Getting Here": {
        favicon: <Icons.Map />,
        content: (
          <Node
            title="AURELION — ARRIVAL & UNDERSJON ACCESS"
            subtitle="Undersjon central atrium, a few steps above the promenade"
          >
            <InsetBox title="GUEST ENTRANCE:">
              <Line neon>West promenade, central atrium</Line>
              <Line neon>Host desk and lobby lounge inside</Line>
              <Line yellow>Facial recognition at the door</Line>
            </InsetBox>
            <InsetBox title="PARKING:">
              <Line neon>Undersjon public parking level — via the North and South Central access tunnels</Line>
              <Line cyan>Guest valet cards provide stair access up to Aurelion</Line>
              <Line yellow>Garage stair is keycarded. No card, no entry.</Line>
            </InsetBox>
            <InsetBox title="UNDERSJON:">
              <Line neon>Atrium promenade and food court outside the south-west windows</Line>
              <Line neon>Lower level one floor down — unlisted units and night stalls</Line>
              <Line smoke>South-west windows are display only and do not open</Line>
            </InsetBox>
          </Node>
        ),
      },

      "Guest Concierge": {
        favicon: <Icons.Schedule />,
        content: (
          <Node
            title="AURELION CONCIERGE"
            subtitle="Tonight's availability"
            notes={[
              "Main dining: 2 tables remaining (21:30, 22:00)",
              "Bar seating: walk-in, subject to host approval",
              "VIP Suite 1: PRIVATE",
              "VIP Suite 2: PRIVATE",
              "Minimum spend applies. Deposit 40¤ per guest.",
            ]}
          />
        ),
      },

      // ----------------------------------------------------------------------
      // STAFF NETWORK
      // ----------------------------------------------------------------------

      "Staff Network": {
        favicon: <Icons.LAN />,
        password: {
          pw: "amuse bouche",
          hint: "A gift from the chef before the meal",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="[AURELION — HOUSE NETWORK]"
            notes={[
              "Access Level: Floor operations",
              "Rota, cameras, building services and guest lists available",
              "Reservation history is held on the Front Office terminal (local only)",
              "Surveillance Office requires elevated access",
            ]}
          />
        ),
        related_commands: {

          "Tonight's Rota": {
            favicon: <Icons.Schedule />,
            content: (
              <ShiftSchedule
                location="Aurelion"
                shift="Dinner Service"
                shiftTime="17:00 — 01:30"
                nextShift="Close-down crew 01:30"
                personnel={[
                  { name: "Celestine Rook", role: "Maître d'", location: "Host desk — lobby", status: "ACTIVE" },
                  { name: "Ambrose Teague", role: "Head of Security", location: "Surveillance Office", status: "MONITORING" },
                  { name: "June Takeda", role: "Security Operator", location: "Surveillance Office", status: "MONITORING" },
                  { name: "Oskar Hale", role: "Floor Security", location: "Dining floor — bar", status: "PATROL" },
                  { name: "Nadia Ferro", role: "Floor Security", location: "Guest corridor", status: "PATROL" },
                  { name: "Ivo Strand", role: "Head Chef", location: "Kitchen", status: "ACTIVE" },
                  { name: "Pip Laurent", role: "Pastry Cook", location: "Kitchen — pastry station", status: "ACTIVE" },
                  { name: "Remy", role: "Pianist (contract)", location: "Dining floor — piano", status: "ACTIVE" },
                  { name: "T. Brask", role: "Contractor — Climate Control", location: "Climate/Vent Control", status: "ACTIVE" },
                ]}
              />
            ),
          },

          "Guest List": {
            favicon: <Icons.Stars />,
            password: {
              pw: "covers",
              hint: "What a restaurant counts instead of guests",
            },
            content: (
              <VIPList
                eventName="Private Suites — Tonight"
                location="Aurelion"
                date="Tonight"
                vips={[
                  {
                    name: "Dir. Callum Hask",
                    alias: "Suite 1",
                    status: "ARRIVED",
                    notes: "Party of 3, incl. 2 personal security. Protection tier A. Guest liaison: W. Ostrava.",
                    clearance: "TIER A",
                  },
                  {
                    name: "Odile Vance-Marr",
                    alias: "Suite 2",
                    status: "ARRIVED",
                    notes: "Party of 3. Protection tier B. Dessert: flambé, tableside, door closed.",
                    clearance: "TIER B",
                  },
                  {
                    name: "Wen Ostrava",
                    alias: "Guest liaison",
                    status: "ARRIVED",
                    notes: "Hask party. Front Office courtesy access granted for the evening.",
                    clearance: "LIAISON",
                  },
                ]}
              />
            ),
          },

          "Camera Coverage": {
            favicon: <Icons.Camera />,
            content: (
              <NetworkActivity
                title="AURELION_CCTV"
                devices={[
                  { name: "Entrance — facial recognition", location: "Lobby" },
                  { name: "Host desk + lobby lounge", location: "Lobby" },
                  { name: "Dining floor x3", location: "Front-of-house" },
                  { name: "Bar", location: "Front-of-house" },
                  { name: "Guest corridor", location: "South corridor" },
                  { name: "Kitchen x2", location: "Back-of-house" },
                  { name: "Service corridor", location: "Back-of-house" },
                  { name: "East corridor + rear exit", location: "Back-of-house" },
                  { name: "Garage stair door", location: "South corridor" },
                  { name: "VIP exit vestibule", location: "East wing" },
                  { name: "VIP Suite 1", status: "NO COVERAGE — client privacy" },
                  { name: "VIP Suite 2", status: "NO COVERAGE — client privacy" },
                  { name: "Climate/Vent Control", status: "NOT INSTALLED" },
                ]}
              />
            ),
          },

          "Building Services": {
            favicon: <Icons.Maintenance />,
            password: {
              pw: "airflow",
              hint: "What the vents control",
              lockType: 'terminal',
            },
            content: (
              <BuildingServices
                title="BUILDING SERVICES — AURELION"
                sections={[
                  {
                    title: "CLIMATE / VENT CONTROL",
                    notes: [
                      "Suite 1: standard circulation",
                      "Suite 2: standard circulation",
                      "Scheduled filter service 19:00 — 23:00 (contractor on site)",
                      "Profile change queued 22:15 — Suite 2: SEALED RECIRCULATION",
                    ],
                    actions: [
                      "Force purge — all zones",
                      "Cancel queued profile change",
                      "Lock console to local access",
                    ],
                    warning: "Profile queued by maintenance session MNT-0447",
                  },
                  {
                    title: "KITCHEN EXTRACTION",
                    notes: [
                      "Twin extraction units: NOMINAL",
                      "Grease line inspection overdue (41 days)",
                    ],
                    actions: [
                      "Shut down extraction",
                    ],
                    warning: "Shutdown during service will fill the kitchen with smoke",
                  },
                  {
                    title: "FIRE SUPPRESSION",
                    notes: [
                      "Wet system: kitchen, service corridor",
                      "Dry system: dining floor, suites, server room",
                      "Alarm triggers vent purge in all zones",
                    ],
                    actions: [
                      "Trigger alarm — building wide",
                    ],
                    warning: "Triggering the alarm activates SEALED protocol",
                  },
                  {
                    title: "GAS SUPPLY",
                    notes: [
                      "Main feed via roof trunk",
                      "3 cylinders staged in service corridor (flame stations)",
                    ],
                    warning: "Manual shutoff only — roof trunk valve",
                  },
                ]}
              />
            ),
          },

          "Guest Protection Protocol": {
            favicon: <Icons.Security />,
            password: {
              pw: "discretion",
              hint: "What Aurelion promises above all",
            },
            content: (
              <Node
                title="[GUEST PROTECTION PROTOCOL — INTERNAL]"
                subtitle="Atmosphere first. Assets second. Everything else after."
              >
                <InsetBox title="OPERATIONAL:">
                  <Line neon>Passive monitoring. Staff intervene discreetly.</Line>
                  <Line neon>Security remains out of sight.</Line>
                </InsetBox>
                <InsetBox title="SEALED:">
                  <Line yellow>Lobby entrance and south-west stair door lock</Line>
                  <Line yellow>Guest elevator halted. Garage stair: security cards only.</Line>
                  <Line yellow>Tier A guests evacuated via VIP exit</Line>
                  <Line yellow>Tier B guests secured in place</Line>
                </InsetBox>
                <InsetBox title="BLACKOUT:">
                  <Line red>Manual overrides only. Radio comms.</Line>
                  <Line red>Prevent collapse. Do not enforce order.</Line>
                </InsetBox>
                <InsetBox title="CATASTROPHIC:">
                  <Line red pulse>Tier A evacuation only. Limit liability.</Line>
                </InsetBox>
                <Divider />
                <Line smoke small>"Secured in place" means the suite door locks from the corridor side.</Line>
              </Node>
            ),
          },

          "Building Access": {
            favicon: <Icons.Lock />,
            password: {
              pw: "valet",
              hint: "Who parks your car",
              lockType: 'terminal',
            },
            content: (
              <BuildingAccess
                title="ACCESS CONTROL — AURELION"
                points={[
                  {
                    location: "Front Office (lobby)",
                    access: ["Keypad — front-of-house staff", "Courtesy code — guest liaisons (tonight)"],
                    notes: ["Last access: 21:04 — courtesy code (W. Ostrava)"],
                  },
                  {
                    location: "Garage Stair (south corridor)",
                    access: ["Keycard — staff, contractor, guest valet"],
                    notes: ["Last access: 18:52 — contractor card (T. Brask)"],
                  },
                  {
                    location: "Climate/Vent Control",
                    access: ["Keycard — maintenance, contractor"],
                    notes: ["Last access: 19:01 — contractor card (T. Brask)", "Door sensor: OBSTRUCTED"],
                  },
                  {
                    location: "VIP Exit — armoured door (service corridor)",
                    access: ["Keycard — security only"],
                    notes: ["SEALED protocol: opens to Suite 1 party only"],
                  },
                  {
                    location: "VIP Suite 1 — north door",
                    access: ["Keypad — security, Suite 1 party"],
                    notes: ["Direct to VIP exit vestibule"],
                  },
                  {
                    location: "VIP Suite 2 — corridor door",
                    access: ["Host control"],
                    notes: ["SEALED protocol: locks from corridor side"],
                  },
                  {
                    location: "Service Elevator",
                    access: ["Keycard — staff, contractor"],
                    notes: ["Stops: dining level, roof hatch"],
                  },
                  {
                    location: "Surveillance Office",
                    access: ["Keycard + PIN — security only"],
                  },
                  {
                    location: "Secure Storage",
                    access: ["Keycard — head chef, management"],
                  },
                ]}
              />
            ),
          },

          "Facility Files": {
            favicon: <Icons.Files />,
            password: {
              pw: "floor plan",
              hint: "What the architect drew first",
            },
            content: (
              <Node
                title="[AURELION — FACILITY FILES]"
                notes={[
                  "1 floor on record: Dining Level",
                  "Atrium, lower level and parking held by AST Endless Seas tenancy division, not on file",
                  "Last updated: 20X2.03.02",
                  "Author: [REDACTED]",
                ]}
              >
                <InsetBox title="AVAILABLE BLUEPRINTS:">
                  <Line neon>Dining Level — front-of-house, VIP, back-of-house</Line>
                </InsetBox>
              </Node>
            ),
            related_commands: {
              "Blueprint: Dining Level": {
                favicon: <Icons.Files />,
                content: (
                  <Node
                    title="AURELION - DINING LEVEL BLUEPRINT - INTERNAL // SECURITY CLEARANCE 3"
                    subtitle="Dining Level Layout and Intel"
                  >
                    <RetComImage
                      src={floor1Image}
                      alt="Aurelion Dining Level"
                      style={{ marginTop: "1rem", width: "100%" }}
                    />
                    <Line neon xsmall style={{ marginTop: "1rem", textAlign: "center" }}>
                      FILE ID: AUR_DINING_LVL_V2.0 | LAST UPDATED: 20X2.03.02 | AUTHOR: [REDACTED]
                    </Line>
                    <Divider />
                    <InsetBox title="FRONT-OF-HOUSE">
                      <Line neon>• Entrance and Host Services / Lobby</Line>
                      <Line neon>• Front Office</Line>
                      <Line neon>• Dining Area</Line>
                      <Line neon>• Communal Restroom (via guest corridor)</Line>
                    </InsetBox>
                    <InsetBox title="VIP">
                      <Line neon>• VIP Suite 1</Line>
                      <Line neon>• VIP Suite 2</Line>
                      <Line neon>• Secure / VIP Exit</Line>
                    </InsetBox>
                    <InsetBox title="BACK-OF-HOUSE">
                      <Line neon>• Industrial Kitchen and Cold Storage</Line>
                      <Line neon>• Service Corridor and Service Elevator</Line>
                      <Line neon>• Staff Areas x2</Line>
                      <Line neon>• Storage and Secure Storage</Line>
                      <Line neon>• Rear Exit</Line>
                    </InsetBox>
                    <InsetBox title="INFRASTRUCTURE">
                      <Line neon>• Surveillance Office</Line>
                      <Line neon>• Climate / Vent Control</Line>
                      <Line neon>• Server Room</Line>
                    </InsetBox>
                    <Line yellow>Service elevator runs to the roof hatch</Line>
                    <Line yellow>Garage stair: keycard access only</Line>
                    <Line red>VIP Suite 1 connects directly to the VIP exit. Suite 2 does not.</Line>
                  </Node>
                ),
              },
            },
          },

          "Personnel Files": {
            favicon: <Icons.Person />,
            password: {
              pw: "brigade",
              hint: "The kitchen's chain of command",
            },
            content: (
              <Node
                title="[AURELION — HR RECORDS]"
                notes={[
                  "Front-of-house: 14 active",
                  "Kitchen: 9 active",
                  "Security: 4 active",
                  "Contractors on site tonight: 2",
                ]}
              />
            ),
            related_commands: {
              "Celestine Rook": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="AUR-FOH-0001"
                    name="Celestine Rook"
                    age={47}
                    position="Maître d'"
                    department="Front-of-House"
                    supervisor="Aurelion Hospitality Board"
                    clearanceLevel={3}
                    email="c.rook@aurelion.cy"
                    performance={96}
                    notes={[
                      "Station: Host desk, lobby balcony overlooking dining floor",
                      "Remembers every face. Has never needed the facial recognition.",
                      "Authority to refuse service to anyone, including tier A guests",
                      "Known to dislike scenes more than she dislikes crime",
                    ]}
                  />
                ),
              },
              "Ambrose Teague": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="AUR-SEC-ALPHA"
                    name="Ambrose Teague"
                    age={52}
                    position="Head of Security"
                    department="Security"
                    supervisor="Aurelion Hospitality Board"
                    clearanceLevel={5}
                    email="a.teague@aurelion.cy"
                    performance={88}
                    notes={[
                      "Station: Surveillance Office",
                      "Ex-corporate close protection",
                      "Contract terms: tier A protection takes priority, without exception",
                      "Equipment: Sidearm, master keycard, radio",
                    ]}
                  />
                ),
              },
              "Oskar Hale": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="AUR-SEC-1102"
                    name="Oskar Hale"
                    age={34}
                    position="Floor Security"
                    department="Security"
                    supervisor="Ambrose Teague"
                    clearanceLevel={2}
                    email="o.hale@aurelion.cy"
                    performance={71}
                    notes={[
                      "Station: Bar, dining floor",
                      "Training: De-escalation, guest relations",
                      "Equipment: Shockstick, concealed pistol (SEALED or above only)",
                    ]}
                  />
                ),
              },
              "Nadia Ferro": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="AUR-SEC-1107"
                    name="Nadia Ferro"
                    age={29}
                    position="Floor Security"
                    department="Security"
                    supervisor="Ambrose Teague"
                    clearanceLevel={2}
                    email="n.ferro@aurelion.cy"
                    performance={83}
                    notes={[
                      "Station: Guest corridor (restrooms, suites)",
                      "Training: De-escalation, first aid",
                      "Gives everyone the benefit of the doubt. Once.",
                    ]}
                  />
                ),
              },
              "Ivo Strand": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="AUR-KIT-0001"
                    name="Ivo Strand"
                    age={58}
                    position="Head Chef"
                    department="Kitchen"
                    supervisor="Aurelion Hospitality Board"
                    clearanceLevel={3}
                    email="chef@aurelion.cy"
                    performance={91}
                    notes={[
                      "Holds secure storage access",
                      "Has never tasted vat meat and says so often",
                    ]}
                  />
                ),
              },
              "Pip Laurent": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="AUR-KIT-0314"
                    name="Pip Laurent"
                    age={22}
                    position="Pastry Cook"
                    department="Kitchen"
                    supervisor="Ivo Strand (Head Chef)"
                    clearanceLevel={1}
                    email="p.laurent@aurelion.cy"
                    salary="340¤/month"
                    performance={58}
                    notes={[
                      "Station: Pastry, south prep island",
                      "Outstanding debt: 2,900¤ — Spectral FT Banks (2 months behind)",
                      "Debt account credited 200¤ this afternoon (source: cash deposit)",
                    ]}
                  />
                ),
              },
              "Remy": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="AUR-CON-0021"
                    name="Remy"
                    position="Pianist (contract)"
                    department="Entertainment"
                    supervisor="Celestine Rook"
                    clearanceLevel={1}
                    performance={80}
                    notes={[
                      "Plays requests. Paid in tips.",
                      "Tonight: 1 private request booked for 22:15",
                    ]}
                  />
                ),
              },
              "Teodor Brask": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="CON-CLM-0447"
                    name="Teodor Brask"
                    position="Climate Technician (contract)"
                    department="Contractor — Building Services"
                    supervisor="External"
                    clearanceLevel={2}
                    performance={50}
                    notes={[
                      "Work order MNT-0447: Filter service, VIP zone ducts",
                      "Contractor card issued 18:40 tonight",
                      "Contractor firm verification: PENDING",
                      "No previous visits on record",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
            },
          },

          "Network Activity": {
            favicon: <Icons.LAN />,
            password: {
              pw: "mise en place",
              hint: "Everything in its place",
              lockType: 'terminal',
            },
            content: (
              <NetworkActivity
                title="AURELION_HOUSE"
                environment={{ connections: "63", load: "MODERATE" }}
                devices={[
                  { name: "Reservation Terminal", location: "Front Office", status: "OFFLINE — local access only" },
                  { name: "Host Tablet", location: "Lobby" },
                  { name: "Server Stations x2", location: "Dining floor" },
                  { name: "Kitchen Order Display", location: "Kitchen" },
                  {
                    name: "Climate Control Console",
                    location: "Climate/Vent Control",
                    status: "ACTIVE",
                    transfer: {
                      name: "profile_suite2_recirc.cfg",
                      destination: "Climate Control — Suite 2 zone",
                      size: "4 KB",
                      note: "QUEUED — executes 22:15",
                    },
                  },
                  { name: "Server Racks", location: "Server Room", status: "ACTIVE — 31°C" },
                  { name: "Surveillance Uplink", location: "Roof dishes", status: "ACTIVE" },
                  { name: "Fire Suppression", status: "ARMED" },
                  { name: "Kitchen Extraction", status: "ACTIVE" },
                ]}
              />
            ),
          },
        },
      },

      // ----------------------------------------------------------------------
      // LOCAL / PHYSICAL ACCESS
      // ----------------------------------------------------------------------

      "Front Office Terminal": {
        favicon: <Icons.Computer />,
        password: {
          pw: "maitre d",
          hint: "The one who runs the room",
          lockType: 'terminal',
        },
        content: (
          <Workstation
            owner="Front-of-House (shared)"
            role="Reservations & guest records"
            status="ACTIVE"
            lastActivity="21:04 — courtesy session"
            emails={3}
            productivity={72}
            cpuUsage={18}
            uptime="12d 6h 51m"
            openTabs={[
              { title: "Reservations — Tonight" },
              { title: "Seating Changes — Audit Log", type: "suspicious" },
              { title: "Guest Profiles — Tier Review" },
            ]}
            recentFiles={[
              { name: "seating_tonight_FINAL.res", timestamp: "15:42" },
              { name: "valet_cards_issued.log", timestamp: "18:40" },
              { name: "guest_flags_facial.log", timestamp: "21:12" },
            ]}
          >
            <InsetBox title="SEATING CHANGES — AUDIT LOG:">
              <Line neon>11:20 — Suite 1 booked: Vance-Marr, party of 3</Line>
              <Line neon>11:35 — Suite 2 booked: Hask, party of 3</Line>
              <Line yellow>15:42 — SWAP: Vance-Marr → Suite 2, Hask → Suite 1</Line>
              <Line yellow>15:42 — Authorised: courtesy code, W. Ostrava (guest liaison)</Line>
              <Line red>15:43 — Suite 2 protection tier set: B</Line>
            </InsetBox>
            <Line smoke small>Local terminal. Not connected to the house network.</Line>
          </Workstation>
        ),
      },

      "Secure Storage": {
        favicon: <Icons.Inventory />,
        password: {
          pw: "vintage",
          hint: "What makes the old bottles expensive",
          lockType: 'safe',
        },
        content: (
          <Safe
            id="aurelion-secure-storage"
            model="Cage lock, keycard + key"
            location="Secure Storage — east wing, off the storeroom"
            owner="Ivo Strand (Head Chef)"
            security="Keycard + mechanical key"
            lastAccess="Tonight (17:30)"
            physical={[
              {
                id: "aurelion_cash_box",
                label: "Cash box",
                description: "Tip float and petty cash",
                value: 400,
                isCredits: true,
              },
              {
                id: "aurelion_real_meat",
                label: "Real-meat stock",
                description: "Vacuum-sealed beef and lamb. Worth a lot to the right buyer.",
              },
              {
                id: "aurelion_rare_liquor",
                label: "Rare liquor",
                description: "Three bottles older than Undersjon",
              },
            ]}
          />
        ),
      },

      "Unknown Comms Device": {
        favicon: <Icons.Cipher />,
        theme: 'rcda',
        password: {
          pw: "flambe",
          hint: "Dessert, on fire",
        },
        content: (
          <EncryptedMessage
            messages={[
              "[W.O. → T.B.] 15:44 — Table swapped. She's in two.",
              "[W.O. → T.B.] 18:31 — Card's waiting at the valet. Contractor tier.",
              "[T.B. → W.O.] 19:03 — In. Ducts are clean. Profile queued.",
              "[W.O. → T.B.] 21:40 — Flame goes in at 22:15. Door shuts for the show.",
              "[W.O. → T.B.] 21:41 — He leaves by the east door when the alarms go. Don't rush.",
              "[T.B. → W.O.] 21:42 — I never rush.",
            ]}
          />
        ),
      },
    },
  },
};

export default AURELION;
