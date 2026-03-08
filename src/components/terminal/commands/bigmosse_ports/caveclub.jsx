import Icons from '@utils/icons';

import {
  Line,
  Divider,
  DataTable,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  Safe,
  PersonnelFile,
  Menu,
  EventLineup,
  CommunityBoard,
  IncidentLog,
  HoursBanner,
  MaintenanceAccess,
  Message,
  VIPList,
  Locked,
} from "@terminal/retcomdevice";

import StoneEelsAd from './caveclub_ad';

export const STONE_EELS_COMMANDS = {
  "Cave Club": {
    favicon: <Icons.Nightlife />,
    preview: (
      <NodePreview>
        <Line span neon> · Stone Eels territory</Line>
      </NodePreview>
    ),
    content: (
      <StoneEelsAd />
    ),
    related_commands: {
      "Tonight's Entertainment": {
        favicon: <Icons.Entertainment />,
        content: (
          <EventLineup
            venueName="Cave Club"
            date="Tonight"
            updateFrequency="Updated hourly"
            theme="club"
            performances={[
              { time: "22:00", artist: "PHASER/MOB", genre: "blackened chromecore" },
              { time: "23:30", artist: "HeCcc", genre: "hexcore" },
              { time: "01:00", artist: "I must leave", genre: "doompunk" },
              { time: "02:30", artist: "Sirius Last Light", genre: "atmo-orbitalwave" },
            ]}
            djs={[
              { name: "DJ Scrap", genre: "industrial techno" },
              { name: "SynthWave Sasha", genre: "retro-future" },
              { name: "Bass_Driller", genre: "sub-bass assault" },
            ]}
            entry={{
              price: "20¤ (includes 1 drink token)",
              vipAccess: "By invitation only",
              memberBenefit: "Stone Eels members - Free entry"
            }}
            tagline="No corps. No cops. No bullshit."
          />
        ),
      },

      "Bar Menu": {
        favicon: <Icons.BarMenu />,
        content: (
          <Menu
            title="CAVE CLUB BAR"
            subtitle="Cash or credchip - No corp cards"
            signType="cocktail"
            categories={[
              {
                name: "DRINKS",
                items: [
                  { name: "Beer (local)", price: "8¤" },
                  { name: "Synth-Whiskey", price: "12¤" },
                  { name: "NeoVodka", price: "10¤" },
                  { name: "Energy Drink", price: "6¤" },
                  { name: "Mystery Shot", price: "5¤" },
                  { name: "Water (free)", price: "0¤" },
                ],
              },
              {
                name: "SPECIALS",
                items: [
                  { name: "Stone Eel Special (don't ask what's in it)", price: "15¤" },
                  { name: "Ports Punch (strong, cheap, effective)", price: "10¤" },
                ],
              },
            ]}
            footer="⚠ Management not responsible for morning regrets"
          />
        ),
      },

      "Hours & Location": {
        favicon: <Icons.Hours />,
        content: (
          <HoursBanner
            name="CAVE CLUB"
            hours="20:00 - 06:00"
            days="Every Night"
            status="OPEN"
            statusColor="open"
            location="Ports District, Eastern Section"
            note="Best time: 23:00-03:00 (peak crowd, live music)"
          />
        ),
      },

      "Community Board": {
        favicon: <Icons.Bulletin />,
        content: (
          <CommunityBoard
            name="COMMUNITY BOARD"
            posts={[
              { text: "New band forming - need drummer with own kit", color: "pink" },
              { text: "Selling modified amp - 200¤ OBO", color: "pink" },
              { text: "Studio space available - split rent 4 ways", color: "pink" },
              { text: "Looking for vocals for industrial project", color: "pink" },
              { text: "Anti-gentrification protest this Saturday - meet at bodega", color: "pink" },
              { text: "Virid Vipers spotted near docks - watch your back", color: "red" },
              { text: "SecOps doing sweeps on weekends lately", color: "red" },
              { text: "Alliansen suits been asking questions about the club", color: "yellow" },
            ]}
            services={[
              "Band equipment rental - ask at bar",
              "Studio time bookings - talk to DJ Scrap",
            ]}
            vibe="Tight community, fuck-the-corps attitude"
          />
        ),
      },

      "Management Network": {
        favicon: <Icons.LAN />,
        password: {
          pw: "python",
          hint: "Gives the best hugs",
          content: <Locked theme="terminal" title="CAVE CLUB NETWORK" />
        },
        content: (
          <MaintenanceAccess
            title="[CAVE CLUB INTERNAL NETWORK]"
            deviceModel="Stone Eels Secure Network"
            deviceId="CAVE-NET-MAIN"
            firmwareVersion="v3.2.1"
            systemStatus="OPERATIONAL"
            uptime="234 days, 18 hours"
            notes={[
              "Network maintained by Stone Eels tech crew",
              "Security level: Gang-grade encryption",
              "Access Level: Staff and trusted members",
              "Cameras, facility data, and operational files available",
              "Leadership files require elevated credentials"
            ]}
          />
        ),
        related_commands: {
          "Security Systems": {
            favicon: <Icons.Security />,
            content: (
              <MaintenanceAccess
                title="[SECURITY SYSTEMS]"
                deviceModel="Cave Club Security Network"
                deviceId="SEC-SYS-MAIN"
                firmwareVersion="v4.0.3"
                systemStatus="OPERATIONAL"
                uptime="156 days, 9 hours"
                notes={[
                  "Main floor: Full camera coverage (4 cameras)",
                  "VIP areas: NO cameras (privacy policy)",
                  "Staff presence: 1-2 bouncers (entrance), 1 guard (stairs), 2 security (upper level)",
                  "Emergency response: Panic button at security station",
                  "Philosophy: Moderate presence, heavy response if needed"
                ]}
              />
            ),
          },

          "VIP List": {
            favicon: <Icons.Person />,
            password: {
              pw: "constrictor",
              hint: "The walls are closing in",
              content: <Locked theme="terminal" title="VIP GUEST SYSTEM" />
            },
            content: (
              <VIPList
                eventName="Tonight's VIP Guests"
                location="Cave Club - Upper Level"
                date="Current Session"
                vips={[
                  {
                    name: "Gibos",
                    alias: "cyborg grandpa",
                    status: "ARRIVED",
                    notes: "Regular patron. Lucky Flight casino winnings. Extensive cyberware. Mobility assistance required (leg actuators malfunctioning). Drinking: Stone Eel Special (4th)",
                    clearance: "VIP",
                    arrivalTime: "21:30"
                  },
                  {
                    name: "Saša",
                    status: "ARRIVED",
                    notes: "Stone Eels leadership - always present on busy nights",
                    clearance: "STAFF"
                  },
                  {
                    name: "Marcus 'The Wire' Chen",
                    alias: "info broker",
                    status: "ARRIVED",
                    notes: "Regular fixer, buying rounds for contacts. Cousin to DJ Scrap.",
                    clearance: "VIP",
                    arrivalTime: "22:15"
                  },
                  {
                    name: "PHASER/MOB",
                    alias: "tonight's headliner",
                    status: "EXPECTED",
                    notes: "Blackened chromecore band. Backstage prep before 22:00 set.",
                    clearance: "GUEST",
                    arrivalTime: "21:45"
                  },
                  {
                    name: "Zara Khamidova",
                    alias: "courier",
                    status: "ARRIVED",
                    notes: "Batu's niece. Freelance courier. Checking in with gang contacts.",
                    clearance: "GUEST",
                    arrivalTime: "23:00"
                  },
                ]}
              >
                <Divider />
                <Line pink>"Cave Club is neutral ground. Everyone knows this."</Line>
                <Line yellow>Privacy policy: No cameras in VIP areas</Line>
                <Line yellow>Neutral ground rules: Violence = permanent ban + consequences</Line>
              </VIPList>
            ),
          },

          "Incident Reports": {
            favicon: <Icons.Files />,
            content: (
              <IncidentLog
                title="INCIDENT LOG"
                timeframe="Last 7 days"
                incidents={[
                  {
                    timestamp: "3 DAYS AGO (22:45)",
                    type: "Questioning",
                    details: {
                      "Individual brought in": "Charlie Sand",
                      "Reason": "Asking questions about Lucky Flight Casino operations",
                      "Location": "Detained at Batu's Bodega, brought to Cave Club",
                      "Duration": "2 hours (holding room)",
                      "Resolution": "Information exchange completed, individual released",
                      "Status": "No further action required",
                    }
                  },
                  {
                    timestamp: "5 DAYS AGO (23:15)",
                    type: "Territorial intrusion",
                    details: {
                      "Details": "Virid Vipers scout spotted outside entrance",
                      "Response": "Stone Eels mobilized (3 members)",
                      "Resolution": "Subject fled before engagement",
                      "Follow-up": "Increased perimeter patrols initiated",
                    }
                  },
                  {
                    timestamp: "6 DAYS AGO (01:30)",
                    type: "Patron disturbance",
                    details: {
                      "Details": "Intoxicated patrons fighting on main floor",
                      "Response": "Bouncers intervened (non-lethal)",
                      "Resolution": "Both parties ejected to street",
                      "Injuries": "Minor (bruises, no medical treatment required)",
                    }
                  },
                ]}
              />
            ),
          },

          "Back Office Safe": {
            favicon: <Icons.Lock />,
            password: {
              pw: "ekans or arbok",
              hint: "Favorite pokemon, its one of two...",
              decoyLetters: "r,b,o,x,z,h",
              content: <Locked theme="safe" title="MANAGEMENT SAFE" />
            },
            content: (
              <Safe
                id="cave-club-backoffice"
                model="DS-500X"
                location="Management office"
                owner="Stone Eels leadership"
                security="Biometric (fingerprint) + keypad"
                lastAccess="Yesterday evening (21:30)"
                physical={[
                  {
                    id: "cave_club_cash",
                    label: "Cash",
                    description: "1,200¤ (nightly bar receipts, mixed bills)",
                    value: 1200,
                    isCredits: true
                  },
                  {
                    id: "cave_club_weapons",
                    label: "Weapons",
                    description: "2 handguns"
                  },
                  {
                    id: "cave_club_product",
                    label: "Product samples",
                    description: "Quality control inventory (Stone Eels brand)"
                  },
                  {
                    id: "cave_club_keys",
                    label: "Keys",
                    description: "Access to safe houses, storage units"
                  },
                ]}
                digital={[
                  {
                    id: "cave_club_credchip",
                    label: "Credchip",
                    description: "85¤ (petty cash fund, transferable)",
                    value: 85,
                    isCredits: true
                  }
                ]}
              />
            ),
          },

          "Territory Status": {
            favicon: <Icons.Query />,
            content: (
              <Message
                title="STONE EELS"
                subtitle="TERRITORY OPS"
                message="PORTS EASTERN SECTOR — OPERATIONAL"
                theme="casual"
              >
                <DataTable data={[
                  { label: "Territory", value: "Ports, eastern section" },
                  { label: "HQ", value: "Cave Club" },
                  { label: "Standing members", value: "~100 (~20-30 active daily)" },
                  { label: "Established", value: "2074" },
                ]} />
                <Divider />
                <DataTable data={[
                  { label: "Vipers", value: "Active — perimeter incidents up this month" },
                  { label: "Alliansen", value: "Buying property on the western edge. Watching." },
                  { label: "SecOps", value: "On payroll but patrols increasing. Unreliable." },
                ]} />
                <Divider />
                <DataTable data={[
                  { label: "Protection", value: "Local businesses — fair rate, no exceptions" },
                  { label: "Distribution", value: "Stone Eels brand, Ports only" },
                  { label: "Arms", value: "Vetted buyers, council sign-off required" },
                  { label: "Intel", value: "Cave Club neutral ground — everyone talks here" },
                ]} />
              </Message>
            ),
          },

          "Personnel Files": {
            favicon: <Icons.Person />,
            content: (
              <MaintenanceAccess
                title="[PERSONNEL FILES]"
                deviceModel="Gang Personnel Database"
                deviceId="GANG-HR-01"
                firmwareVersion="v2.5.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Saša + Council of 5",
                  "Enforcers: 8-10",
                  "Active daily: 20-30",
                  "Door, stairs, station",
                  "Bar, DJ, crew",
                ]}
              />
            ),
            related_commands: {
              "Saša": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="GANG-SE-001"
                    name="Saša"
                    age={38}
                    position="Leadership"
                    department="Stone Eels"
                    supervisor="—"
                    clearanceLevel={5}
                    district="Ports (3rd generation)"
                    emergencyContact="Council"
                    performance={95}
                    notes={[
                      "3rd generation Ports. This is home.",
                      "Full access — Club, safe houses, all of it.",
                      "Council defers. That's how it is.",
                      "Network: fixers, medics, arms, intel. All current.",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

              "Kaz 'Brick' Volkov": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="GANG-SE-008"
                    name="Kaz 'Brick' Volkov"
                    age={34}
                    position="Door / Security Lead"
                    department="Cave Club"
                    supervisor="Saša"
                    clearanceLevel={3}
                    district="Ports"
                    emergencyContact="Nina Volkov (sister)"
                    performance={89}
                    notes={[
                      "Best eye we have. Remembers every face.",
                      "Finds things people don't want found.",
                      "Doesn't improvise. Follows the protocol.",
                      "Sister's at the Alliansen warehouse. Useful occasionally.",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

              "Rina 'Switch' Pak": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="GANG-SE-014"
                    name="Rina 'Switch' Pak"
                    age={27}
                    position="Security Station — Upper Level"
                    department="Cave Club"
                    supervisor="Saša"
                    clearanceLevel={3}
                    district="Ports"
                    emergencyContact="Council"
                    performance={92}
                    notes={[
                      "Runs the cameras. Knows where everyone is.",
                      "Controls access to the private booths.",
                      "Fast. Hasn't missed a shift in two years.",
                      "Night hours. 20:00-04:00.",
                    ]}
                    status="ACTIVE"
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

export default STONE_EELS_COMMANDS;
