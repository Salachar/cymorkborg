import Icons from '@utils/icons';

import {
  Line,
  KeyValue,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  Safe,
  GameConsole,
  Camera,
  Tenet,
  Locked,
  MaintenanceAccess,
  PublicPortal,
  IncidentLog,
  NetworkDevices,
} from "@terminal/retcomdevice"

export const RESIDENTIAL_COMMANDS = {
  "Idol Coffins Pop-Up Hotel": {
    favicon: <Icons.Hotel />,
    content: (
      <PublicPortal
        name="IDOL COFFINS"
        tagline="Sleep like a rock star. Wake up like a legend."
        network="IDOL_GUEST_WIFI"
        signalStrength="strong"
        status="NOW BOOKING"
        statusColor="neon"
        nowPlaying="Neon Funeral - The Chrome Idols"
        notes={[
          "Theme changes monthly (currently: 'Chrome Idol' aesthetic)",
          "Located near hottest clubs (moves with trends)",
          "Instagram-ready interiors guaranteed",
          "Check-in: 15:00 | Check-out: 11:00"
        ]}
        theme="party"
      >
        <InsetBox title="ROOM RATES (Per Night):">
          <Line neon>• Coffin Pod (solo): 80¤</Line>
          <Line neon>• Double Coffin (couple): 120¤</Line>
          <Line neon>• VIP Suite ("Backstage Pass"): 250¤</Line>
          <Line pink>• Party Package (4 pods + lounge): 400¤</Line>
        </InsetBox>
        <InsetBox title="AMENITIES:">
          <Line cyan>✦ Themed interiors (rock star aesthetic)</Line>
          <Line cyan>✦ Premium sound systems in every pod</Line>
          <Line cyan>✦ Complimentary energy drinks & stimulants</Line>
          <Line cyan>✦ Rooftop party deck (21:00-03:00)</Line>
          <Line cyan>✦ Photo-op stations throughout</Line>
        </InsetBox>
        <Line smoke small>
          "Pop-up locations change with the scene. This month: 3 blocks from Cave Club.
          Next month: Wherever the music takes us."
        </Line>
      </PublicPortal>
    ),
  },

  "Torres Apartments": {
    favicon: <Icons.Apartment />,
    preview: (
      <NodePreview>
        <Line span smoke> · Studio vacancies available</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="TORRES APARTMENTS"
        tagline="Affordable Living Since 2071"
        network="TORRES_RESIDENT_WIFI"
        signalStrength="strong"
        status="✓ ACCEPTING APPLICATIONS"
        statusColor="neon"
        notes={[
          "24 units (6 floors, 4 per floor)",
          "2 vacancies available",
          "Building Manager: Rosa Mendez (Unit 1A)",
          "Laundry: 5¤ wash, 3¤ dry"
        ]}
        theme="casual"
      >
        <InsetBox title="RENT INFO:">
          <KeyValue label="Studio" value="350¤/month" />
          <KeyValue label="1-bedroom" value="500¤/month" />
          <KeyValue label="2-bedroom" value="700¤/month" />
          <Line smoke>Utilities: Additional 80-120¤/month</Line>
        </InsetBox>
        <Line pink>"Quiet building. Good neighbors. Mostly."</Line>
      </PublicPortal>
    ),
    related_commands: {
      "Resident Directory": {
        favicon: <Icons.Group />,
        content: (
          <MaintenanceAccess
            title="[RESIDENT DIRECTORY - PUBLIC ACCESS]"
            deviceModel="Directory System"
            deviceId="DIR-TORRES-01"
            firmwareVersion="v1.4.2"
            systemStatus="OPERATIONAL"
            notes={[
              "Partial listing — many residents opt for privacy",
              "Full directory: Building manager only (Unit 1A)",
              "24 units total (6 floors, 4 per floor)",
              "2 vacancies currently available"
            ]}
          >
            <InsetBox title="LISTED RESIDENTS (SELECTED):">
              <Line smoke small>Showing public listings only.</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Unit 1A - Floor 1": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="RES-1A"
                name="Rosa Mendez"
                unit="1A"
                building="Torres Apartments"
                moveInDate="April 2071"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Building Manager. Contact for maintenance, applications, and emergencies. Available most hours — knocking preferred."
              />
            ),
            related_commands: {
              "Unit 1A - Personal Safe": {
                favicon: <Icons.Lock />,
                password: {
                  pw: "mendez",
                  hint: "The manager's last name",
                  content: <Locked theme="safe" title="PERSONAL SAFE" />
                },
                content: (
                  <Safe
                    id="torres-1a-safe"
                    model="PS-100"
                    location="Unit 1A, bedroom (manager's unit)"
                    owner="Rosa Mendez"
                    security="4-digit PIN"
                    lastAccess="This morning"
                    physical={[
                      {
                        id: "mendez_master_keys",
                        label: "Master key set",
                        description: "Physical keys to all 24 units (old backup system, still functional)"
                      },
                      {
                        id: "mendez_tenant_files",
                        label: "Tenant files (paper)",
                        description: "Emergency contacts, lease summaries, notes on problem tenants"
                      },
                    ]}
                    digital={[
                      {
                        id: "mendez_credchip",
                        label: "Credchip",
                        description: "200¤ (building petty cash)",
                        value: 200,
                        isCredits: true
                      },
                    ]}
                    notes="Manager's unit. She's in and out all day — access window is narrow."
                  />
                ),
              },
            },
          },

          "Unit 2A - Floor 2": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="CIT-2847-JT"
                name="Jake Torres"
                age={34}
                dob="05/12/2048"
                occupation="Facilities Maintenance Technician"
                employer="Lucky Flight Casino"
                district="Ports (Torres Apartments, Unit 2A)"
                bio="Keeping the machines running so you can keep losing. Night shift life. Coffee addict. Builder of things."
                interests={['Gaming', 'Electronics', 'DIY Projects', 'Mechanical Repair', 'Coffee', 'Cyberpunk Media']}
                connections={47}
                status="ACTIVE"
                privacy="PUBLIC"
              />
            ),
            related_commands: {
              "Game Console": {
                favicon: <Icons.VideoGame />,
                content: (
                  <GameConsole
                    model="CyberDeck Pro X"
                    owner="xXShadowHackerXx"
                    gameLoaded="Cyberpunk 2077: Ultra Edition"
                    friends={[
                      { name: 'NoobMaster69', status: 'online', game: 'Call of Cyber' },
                      { name: 'Elite_Sniper', status: 'offline' },
                      { name: 'RazorEdge', status: 'online', game: 'Netrunner Arena' },
                      { name: 'GhostReaper', status: 'offline' },
                    ]}
                  />
                )
              },

              "Unit 2A - Personal Safe": {
                favicon: <Icons.Lock />,
                password: {
                  pw: "maintenance",
                  hint: "The resident's department at the casino",
                  content: <Locked theme="safe" title="PERSONAL SAFE" />
                },
                content: (
                  <Safe
                    id="torres-2a-safe"
                    model="DS-200"
                    location="Unit 2A, kitchen cabinet (hidden)"
                    owner="Jake Torres (facilities maintenance)"
                    security="Combination lock (mechanical)"
                    lastAccess="2 days ago"
                    physical={[
                      {
                        id: "torres_2a_coveralls",
                        label: "Work coveralls",
                        description: "Lucky Flight maintenance uniform (dirty, needs washing)"
                      },
                      {
                        id: "torres_2a_keycard",
                        label: "Staff keycard",
                        description: "Maintenance access (service corridors, mechanical rooms, roof access)"
                      },
                      {
                        id: "torres_2a_cash",
                        label: "Cash",
                        value: 20,
                        isCredits: true
                      },
                    ]}
                    digital={[
                      {
                        id: "torre_2a_credchip",
                        label: "Credchip",
                        description: "85¤",
                        value: 85,
                        isCredits: true
                      },
                      {
                        id: "torres_2a_lfc_password",
                        label: "LFC Facilities PW",
                        description: "architecture"
                      },
                    ]}
                  />
                ),
              },
            },
          },

          "Unit 2B - Floor 2": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="RES-2B"
                name="[Unlisted]"
                unit="2B"
                building="Torres Apartments"
                moveInDate="Unknown"
                status="ACTIVE"
                intercomEnabled={false}
                notes="Hosts weekly poker games. Manager has noted noise from this unit on Thursday evenings."
              />
            ),
            related_commands: {
              "Unit 2B - Personal Safe": {
                favicon: <Icons.Lock />,
                content: (
                  <Safe
                    id="torres-2b-safe"
                    model="PS-100"
                    location="Unit 2B, living room (behind TV panel)"
                    owner="Unknown"
                    security="4-digit PIN"
                    lastAccess="Unknown"
                    physical={[
                      {
                        id: "torres_2b_chips",
                        label: "Poker chips",
                        description: "Tournament-grade set, well used"
                      },
                      {
                        id: "torres_2b_cash",
                        label: "Cash",
                        description: "Rolled bills, various denominations",
                        value: 150,
                        isCredits: true
                      },
                    ]}
                    digital={[]}
                    notes="Safe is unlocked — left open after last game night."
                  />
                ),
              },
            },
          },

          "Unit 3B - Floor 3": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="RES-3B"
                name="Marco Silva"
                unit="3B"
                building="Torres Apartments"
                moveInDate="June 2073"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Quiet tenant. Pays on time. Building manager notes: model resident."
              />
            ),
            related_commands: {
              "Unit 3B - Personal Safe": {
                favicon: <Icons.Lock />,
                password: {
                  pw: "localhost",
                  hint: "This terminal doesn't trust the outside world",
                  content: <Locked theme="safe" title="PERSONAL SAFE" />
                },
                content: (
                  <Safe
                    id="torres-3b-safe"
                    model="PS-150"
                    location="Unit 3B, bedroom closet"
                    owner="Marco Silva"
                    security="4-digit PIN"
                    lastAccess="2 days ago"
                    physical={[
                      {
                        id: "torres_3b_documents",
                        label: "Documents",
                        description: "Passport, birth certificate"
                      },
                      {
                        id: "torres_3b_bracelet",
                        label: "Jewelry",
                        description: "Gold bracelet (family heirloom)"
                      },
                    ]}
                    digital={[
                      {
                        id: "torres_3b_credchip",
                        label: "Credchip",
                        description: "40¤",
                        value: 40,
                        isCredits: true
                      },
                    ]}
                    notes="Safe mounted to wall, relatively new installation."
                  />
                ),
              },
            },
          },

          "Unit 3D - Floor 3": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="RES-3D"
                name="[Unlisted]"
                unit="3D"
                building="Torres Apartments"
                moveInDate="Unknown"
                status="ACTIVE"
                intercomEnabled={false}
                notes="Quiet. Pays rent early. Manager's notes: 'model tenant.' No further public information available."
              />
            ),
            related_commands: {
              "Unit 3D - Personal Safe": {
                favicon: <Icons.Lock />,
                content: (
                  <Safe
                    id="torres-3d-safe"
                    model="PS-100"
                    location="Unit 3D, bedroom"
                    owner="Unknown"
                    security="Unknown"
                    lastAccess="Unknown"
                    physical={[]}
                    digital={[]}
                    notes="Unit kept extremely tidy. Safe location not confirmed — may be concealed."
                  />
                ),
              },
            },
          },

          "Unit 4B - Floor 4": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="RES-4B"
                name="Marcus Reeves"
                unit="4B"
                building="Torres Apartments"
                moveInDate="February 2074"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Works casino shifts. Regular hours, in and out on a predictable schedule. Deliveries accepted in person only."
              />
            ),
            related_commands: {
              "Unit 4B - Personal Safe": {
                favicon: <Icons.Lock />,
                password: {
                  pw: "dealer",
                  hint: "The resident's job at the casino",
                  content: <Locked theme="safe" title="PERSONAL SAFE" />
                },
                content: (
                  <Safe
                    id="torres-4b-safe"
                    model="DS-250"
                    location="Unit 4B, bedroom closet shelf"
                    owner="Marcus Reeves"
                    security="Digital keypad"
                    lastAccess="Yesterday evening"
                    physical={[
                      {
                        id: "reeves_documents",
                        label: "Documents",
                        description: "Pay stubs, employee handbook, locker key"
                      },
                    ]}
                    digital={[
                      {
                        id: "reeves_credchip",
                        label: "Credchip",
                        description: "15¤ (personal spending money, transferable)",
                        value: 15,
                        isCredits: true
                      },
                    ]}
                    notes="Safe checked daily before and after casino shifts."
                  />
                ),
              },
            },
          },

          "Unit 5A - Floor 5": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="RES-5A"
                name="[Unlisted]"
                unit="5A"
                building="Torres Apartments"
                moveInDate="Unknown"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Currently on a payment plan with building management. 14 days late on rent as of last log entry."
              />
            ),
            related_commands: {
              "Unit 5A - Personal Safe": {
                favicon: <Icons.Lock />,
                content: (
                  <Safe
                    id="torres-5a-safe"
                    model="PS-100"
                    location="Unit 5A, kitchen"
                    owner="Unknown"
                    security="Key lock"
                    lastAccess="Unknown"
                    physical={[
                      {
                        id: "torres_5a_cash",
                        label: "Cash",
                        description: "Small amount — looks like rent money being set aside",
                        value: 80,
                        isCredits: true
                      },
                    ]}
                    digital={[]}
                    notes="Tenant under financial stress. Payment plan arranged with management."
                  />
                ),
              },
            },
          },

          "Unit 6A - Floor 6": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="RES-6A"
                name="[Unlisted]"
                unit="6A"
                building="Torres Apartments"
                moveInDate="Unknown"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Musician. Occasional noise complaints during quiet hours. Verbal warning on file."
              />
            ),
            related_commands: {
              "Unit 6A - Personal Safe": {
                favicon: <Icons.Lock />,
                content: (
                  <Safe
                    id="torres-6a-safe"
                    model="PS-100"
                    location="Unit 6A, studio area (under equipment rack)"
                    owner="Unknown"
                    security="Key lock"
                    lastAccess="Unknown"
                    physical={[
                      {
                        id: "torres_6a_recordings",
                        label: "Recording media",
                        description: "Stack of data chips — demo tracks and session recordings"
                      },
                      {
                        id: "torres_6a_cash",
                        label: "Cash",
                        description: "Gig money, loose",
                        value: 55,
                        isCredits: true
                      },
                    ]}
                    digital={[]}
                    notes="Unit is loud. Equipment everywhere. Safe partially buried under cables."
                  />
                ),
              },
            },
          },

        },
      },

      "Security Cameras": {
        favicon: <Icons.Camera />,
        content: (
          <NetworkDevices
            networkName="TORRES_SECURITY"
            devices={[
              { name: "Lobby Camera", ip: "10.88.1.101", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
              { name: "Floor 2 Hallway", ip: "10.88.1.102", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
              { name: "Floor 4 Hallway", ip: "10.88.1.103", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
              { name: "Floor 6 Hallway", ip: "10.88.1.104", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
            ]}
          />
        ),
        related_commands: {
          "Camera - Lobby": {
            favicon: <Icons.Camera />,
            content: (
              <Camera
                id="torres-lobby-cam"
                location="Torres Apartments - Entrance lobby"
                coverage="Front entrance, mailboxes, stairs"
                status="ACTIVE"
                recording={true}
                storage="Local server (basement)"
                timeline={[
                  "Yesterday, 18:45 → Resident entered with groceries",
                  "Yesterday, 20:15 → Pizza delivery (Unit 4B)",
                  "Today, 07:30 → Multiple residents departing for work",
                  "Today, 12:00 → Mail carrier delivery",
                  "Today, 15:45 → Maintenance worker entered (scheduled repair)",
                ]}
              />
            ),
          },
          "Camera - Floor 2 Hallway": {
            favicon: <Icons.Camera />,
            content: (
              <Camera
                id="torres-fl2-cam"
                location="Torres Apartments - Floor 2 Hallway"
                coverage="Units 2A, 2B, 2C, 2D and stairwell access"
                status="ACTIVE"
                recording={true}
                storage="Local server (basement)"
                timeline={[
                  "Yesterday, 22:30 → Noise complaint hour — residents seen in hallway",
                  "Yesterday, 20:00 → Several people arriving at Unit 2B (poker night)",
                  "Today, 07:15 → Jake Torres departing for night shift",
                  "Today, 14:00 → No activity",
                ]}
              />
            ),
          },
        },
      },

      "Building Incident Log": {
        favicon: <Icons.Files />,
        content: (
          <IncidentLog
            title="BUILDING INCIDENTS"
            timeframe="Last 30 days"
            incidents={[
              {
                timestamp: "Jan 15 (22:30)",
                type: "Noise Complaint",
                details: {
                  Unit: "6A (musician)",
                  Complaint: "Loud music during quiet hours",
                  Resolution: "Verbal warning issued",
                  Status: "Resolved"
                }
              },
              {
                timestamp: "Jan 8 (14:00)",
                type: "Maintenance",
                details: {
                  Unit: "4C",
                  Issue: "Plumbing leak",
                  Resolution: "Repaired same day",
                  Status: "Closed"
                }
              },
              {
                timestamp: "Jan 3 (09:00)",
                type: "Payment Issue",
                details: {
                  Unit: "5A",
                  Issue: "Late rent (14 days overdue)",
                  Resolution: "Payment plan arranged",
                  Status: "Monitoring"
                }
              },
            ]}
          >
            <Line cyan>Overall: Quiet building, minimal issues</Line>
            <Line yellow>Next maintenance: HVAC inspection (next week)</Line>
          </IncidentLog>
        ),
      },

      "Building Management": {
        favicon: <Icons.LAN />,
        password: {
          pw: "blind",
          hint: "You pay before you see",
          content: <Locked theme="terminal" title="BUILDING MANAGEMENT" />
        },
        content: (
          <MaintenanceAccess
            title="[BUILDING MANAGEMENT SYSTEM]"
            deviceModel="Property Management Software"
            deviceId="BLD-MGMT-TORRES"
            firmwareVersion="v3.1.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Manager Access: Rosa Mendez",
              "Upcoming maintenance: HVAC inspection (next week)",
              "Annual fire safety check: Next month",
              "Vacancies: 2 units available"
            ]}
          >
            <InsetBox title="RECENT ISSUES:">
              <Line yellow>Unit 4C: Plumbing leak (resolved)</Line>
              <Line yellow>Floor 2: Hallway light replacement (scheduled)</Line>
              <Line red>Unit 5A: Late payment (14 days overdue)</Line>
              <Line yellow>Roof access: Door lock needs repair</Line>
            </InsetBox>
            <InsetBox title="RESIDENT NOTES:">
              <Line cyan>Unit 2B: Hosting weekly poker games</Line>
              <Line cyan>Unit 6A: Musician (occasional noise complaints)</Line>
              <Line cyan>Unit 3D: Quiet, pays early, model tenant</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

    },
  },
};

export default RESIDENTIAL_COMMANDS;
