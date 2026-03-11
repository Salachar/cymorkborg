import Icons from '@utils/icons';

import {
  Line,
  Divider,
  DataTable,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  ATM,
  Briefing,
  VendingMachine,
  Safe,
  Camera,
  Menu,
  MaintenanceAccess,
  Message,
  PersonnelFile,
  CommunityBoard,
  CoffeeMachine,
  HoursBanner,
  Radio,
  RetComImage,
  ArcadeCabinet,
  DigitalWallet,
  Locked,
} from "@terminal/retcomdevice"

import BatusBodegaAd from './bodega_ad'

import cop_car_image from '@images/cop_car.png';

export const BODEGA_COMMANDS = {
  "Batu's Bodega": {
    favicon: <Icons.Bodega />,
    content: (
      <BatusBodegaAd />
    ),
    preview: (
      <NodePreview>
        <Line span neon> · FREE WIFI ACCESS!</Line>
        <Line span neon> · Market drone drop off location</Line>
      </NodePreview>
    ),
    related_commands: {
      "Charlie's Brief": {
        favicon: <Icons.Briefing />,
        content: (
          <Briefing
            title="Lucky Flight Takedown"
            issuer="Charlie Sand"
            classification="CONFIDENTIAL"
            primary={[
              {
                text: "Destroy debt records",
                note: "Records stored in offline database - likely 2nd floor tech room or vault",
                priority: "critical",
              },
            ]}
            secondary={[
              {
                text: "Find Batu (if possible)",
                note: "Bodega owner missing for 3 days - may be held in casino",
                priority: "high",
              },
              {
                text: "Permanently close the casino",
                note: "Make it impossible for them to reopen and continue preying on neighborhood",
                priority: "normal",
              },
            ]}
            intel={[
              "Casino has private power source somewhere",
              "Debt records are offline (can't be accessed remotely)",
              "Charlie will return to bodega in TWO DAYS to meet you",
            ]}
            payment={[
              "Decommissioned patrol car (functional, untraceable)",
              "Bonus if Batu rescued alive (Charlie didn't specify amount)",
              "Neighborhood's gratitude and protection",
            ]}
            warnings={[
              "Keep it QUIET. Mass murder complicates everything.",
              "SecOps monitors casino - heavy response if major alarm triggered",
              "Workers are victims too - avoid unnecessary casualties",
            ]}
          >
            <RetComImage
              src={cop_car_image}
              alt="Cop Car"
            />
          </Briefing>
        ),
      },

      "Bodega Menu": {
        favicon: <Icons.Food />,
        content: (
          <Menu
            title="DAILY SPECIALS"
            subtitle="Batu's Bodega - Corner Store Deals"
            signType="sandwich"
            categories={[
              {
                name: "FOOD & SNACKS:",
                items: [
                  { name: "Synth-Ramen Cup", price: "3¤" },
                  { name: "Protein Bar", price: "2¤" },
                  { name: "Synth-Burger (heated)", price: "5¤" },
                  { name: "Candy Mix", price: "1¤" },
                ],
              },
              {
                name: "DRINKS:",
                items: [
                  { name: "Energy Drink", price: "4¤" },
                  { name: "Water Bottle", price: "2¤" },
                  { name: "Coffee (hot)", price: "3¤" },
                  { name: "Synth-Soda", price: "2¤" },
                ],
              },
            ]}
            footer="Free wifi with any purchase!"
          />
        ),
      },

      "Coffee Machine": {
        favicon: <Icons.CoffeeMachine />,
        content: (
          <CoffeeMachine />
        ),
        related_commands: {
          "Digital Wallet": {
            password: {
              pw: "clock",
              hint: "I have hands but can't clap",
              content: <DigitalWallet isLocked />
            },
            content: (
              <DigitalWallet
                id="bogeda-coffee-machine-wallet"
                credits={30}
              />
            )
          }
        }
      },

      "Bodega Radio": {
        favicon: <Icons.Radio />,
        content: (
          <Radio />
        )
      },

      "Arcade Machine": {
        favicon: <Icons.VideoGame />,
        icebreaker: {
          difficulty: 'easy',
        },
        content: (
          <ArcadeCabinet
            credits={15}
          />
        )
      },

      "Bodega ATM": {
        favicon: <Icons.ATM />,
        mastermind: {
          difficulty: 'medium',
        },
        content: (
          <ATM
            id="bodega-corner-atm"
            location="Inside Batu's Bodega - Near entrance"
            credits={20}
            lastService="2 weeks ago"
            transactions={[
              "3 days ago, 19:42 → Withdrawal: 40¤",
              "3 days ago, 18:15 → Withdrawal: 20¤",
              "3 days ago, 16:33 → Balance inquiry",
              "4 days ago, 20:01 → Withdrawal: 60¤",
            ]}
          />
        ),
      },

      "Vending Machine": {
        favicon: <Icons.Vending />,
        content: (
          <VendingMachine
            id="bodega-outside-vending"
            location="Outside Batu's Bodega - Street side"
          />
        ),
        related_commands: {
          "Maintenance Access": {
            favicon: <Icons.Maintenance />,
            password: {
              pw: "refresh",
              hint: "What you do to restock the machine",
            },
            content: (
              <MaintenanceAccess />
            ),
            related_commands: {
              "VendWallet": {
                favicon: <Icons.Wallet />,
                content: (
                  <DigitalWallet
                    id="bodega-vending-machine-wallet"
                    accountHolder="Beverage Corp (vending division)"
                    credits={15}
                  />
                ),
              },
              "DebugMode": {
                icebreaker: {
                  difficulty: 'easy',
                },
                content: (
                  <Message
                    title="VENDING MACHINE"
                    message="DEBUG MODE ACTIVATED"
                    note="Dispense drinks via main interface - no charge"
                    theme="corporate"
                  >
                    <Line yellow large>FREE VEND MODE ENABLED</Line>
                    <Line cyan>All payment verification disabled</Line>
                  </Message>
                ),
              },
            },
          },
        },
      },

      "Deals!": {
        favicon: <Icons.Deals />,
        content: (
          <Message
            title="BODEGA"
            subtitle="TODAY'S SPECIALS"
            message="Updated: 3 days ago"
            note={'"Fair prices. No questions." - Batu'}
            theme="casual"
          >
            <InsetBox title="WEEKLY DEALS:">
              <Line neon>• Synth-Ramen 6-pack → 12¤ (was 18¤)</Line>
              <Line neon>• Energy Drinks (any brand) → 2 for 8¤</Line>
              <Line neon>• Protein Bars (expired last week) → 1¤ each</Line>
            </InsetBox>
            <InsetBox title="ALWAYS IN STOCK:">
              <Line yellow>→ Cigarettes (all brands)</Line>
              <Line yellow>→ Lottery tickets (Ports Weekly Draw)</Line>
              <Line yellow>→ Basic first aid supplies</Line>
              <Line yellow>→ Cheap liquor & beer</Line>
              <Line yellow>→ Snacks & candy</Line>
            </InsetBox>
            <InsetBox title="SERVICES:">
              <Line cyan>✓ Community bulletin board</Line>
              <Line cyan>✓ Credchip exchange (small fee)</Line>
              <Line cyan>✓ Package pickup/dropoff for couriers</Line>
              <Line cyan>✓ Bathroom access (regulars only)</Line>
              <Line cyan>✓ Free WiFi</Line>
            </InsetBox>
          </Message>
        ),
      },

      "Hours of Operation": {
        favicon: <Icons.Hours />,
        content: (
          <HoursBanner
            name="Batu's Bodega"
            hours="06:00 - 23:00"
            days="Monday-Saturday"
            status="⚠ CLOSED - 3 DAYS"
            statusColor="closed"
            location="Corner of Drech Ave & 5th Street, Ports/Bigmosse border"
            note="Batu sometimes stays open late for regulars"
          >
            <Line smoke large bold>[CLOSURE DETAILS]</Line>
            <Divider />
            <DataTable data={[
              { label: "Duration Closed", value: "3 days" },
              { label: "Last Transaction", value: "72 hours ago (19:47)" },
              { label: "Owner Contact", value: "NO RESPONSE" },
              { label: "Sunday Hours", value: "08:00 - 20:00 (when open)" },
            ]} />
            <InsetBox title="ADDITIONAL LOCATION INFO:" color="yellow">
              <Line cyan>4 blocks from Lucky Flight Casino</Line>
              <Line cyan>Ground floor of old apartment complex</Line>
            </InsetBox>
            <Line red>⚠ Store appears damaged - front window broken</Line>
            <Line yellow>Neighbors report no sign of Batu for 3 days</Line>
          </HoursBanner>
        ),
      },

      "Community Bulletin": {
        favicon: <Icons.Bulletin />,
        content: (
          <CommunityBoard
            id="bodega-bulletin"
            boardName="COMMUNITY BULLETIN BOARD"
            posts={[
              { text: '"MISSING: Batu, bodega owner. Anyone seen him?"', color: 'red' },
              { text: '"Lucky Flight took another house on our street this week"', color: 'cyan' },
              { text: '"Cant afford groceries after casino payment this month"', color: 'pink' },
              { text: '"4th eviction on our block this year. When does it stop?"', color: 'pink' },
              { text: '"Organizing neighborhood meeting - discuss casino problem"', color: 'pink' },
              { text: '"We need to do something about that fucking place"', color: 'neon' },
              { text: '"Anyone know a good fixer? Asking for a friend..."', color: 'smoke' },
            ]}
            services={[
              'Street doc - "Fingers" (2 blocks south, knock 3x)',
            ]}
            vibe="Frustrated, angry, desperate"
          />
        ),
      },

      "Internal Network": {
        favicon: <Icons.LAN />,
        password: {
          pw: "payday",
          hint: "Niece's favorite day and candybar",
          showFirst: true,
          showCount: true,
          content: <Locked theme="terminal" />
        },
        content: (
          <MaintenanceAccess
            title="[BODEGA INTERNAL NETWORK]"
            deviceModel="Small Business Router"
            deviceId="BODEGA-NET-01"
            firmwareVersion="v2.1.8"
            systemStatus="OPERATIONAL"
            uptime="156 days, 3 hours"
            notes={[
              "Owner: Batu Khamidov",
              "Connected devices: 3 (security camera, POS terminal, office PC)",
              "Last admin login: Batu",
              "Security level: Basic (WPA2, default firewall)",
            ]}
          >
            <Line yellow>Note from Batu (cloud sync): "Zara - Please restock the vending machine"</Line>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Security Camera - Main Shop": {
            favicon: <Icons.Camera />,
            content: (
              <Camera
                id="bodega-main-cam"
                location="Batu's Bodega - Main room (above counter)"
                status="ACTIVE"
                recording={true}
                storage="Local"
                timeline={[
                  "19:15 → Batu closes register (earlier than usual)",
                  "19:30 → Last customers exit",
                  "19:45 → Batu locks front door, exits",
                  "19:47 → Batu walks north on Drech Ave (direction: casino)",
                  "20:00-22:00 → Store empty, lights remain on",
                  "22:15 → Unidentified individual tries door, leaves",
                  "22:30 → FEED LOST (power outage to building)",
                  "--- 2 DAYS AGO ---",
                  "No footage - camera offline",
                  "--- YESTERDAY ---",
                  "07:00 → Power restored, camera active",
                  "07:15 → Front window shattered (impact visible)",
                  "07:16 → Three individuals enter through broken window",
                  "07:17-07:45 → Store looted (shelves cleared, register opened)",
                  "07:46 → Stone Eels gang tag spray-painted on wall",
                  "07:47 → Individuals exit, head east on foot",
                ]}
              />
            ),
          },

          "Personnel Files": {
            favicon: <Icons.Person />,
            content: (
              <Message
                title="BODEGA"
                subtitle="PERSONNEL RECORDS"
                message="EMPLOYEE ACCESS GRANTED"
                note="Internal network maintained by Batu"
                theme="corporate"
              >
                <Line smoke large bold>[PERSONNEL RECORDS]</Line>
                <Line cyan>Active employees: 2</Line>
                <InsetBox title="EMPLOYEE ROSTER:" color="yellow">
                  <Line neon>→ Batu (Owner/Operator)</Line>
                  <Line neon>→ Zara (Part-time)</Line>
                </InsetBox>
              </Message>
            ),
            related_commands: {
              "Batu": {
                favicon: <Icons.Person />,
                password: {
                  pw: "community",
                  hint: "What Batu cares about more than profit",
                },
                content: (
                  <PersonnelFile
                    employeeId="BODEGA-001"
                    name="Batu Khamidov"
                    position="Owner/Operator"
                    department="Self-Employed"
                    supervisor="N/A - Owner"
                    clearanceLevel="OWNER"
                    salary="~800¤/month (variable)"
                    location="Corner of Drech Ave & 5th Street"
                    email="batu@bodega-local.cy"
                    phone="[REDACTED]"
                    emergencyContact="Zara Khamidova (niece)"
                    performance={75}
                    status="MISSING"
                    notes={[
                      "FINANCIAL: Outstanding debt 3,200¤ to CasinoBlizzFunds Inc.",
                      "FINANCIAL: Original loan 1,500¤ at 47% interest (medical emergency)",
                      "FINANCIAL: Total paid to date ~8,100¤, Current savings: 47¤",
                      "PERSONAL NOTE (Cloud): 'Can't keep living like this. The neighborhood deserves better.'",
                      "PERSONAL NOTE (Cloud): 'If I don't come back, tell Zara I'm sorry.'",
                      "PERSONAL NOTE (Cloud): 'Charlie was right. Someone needs to act.'",
                      "COMMUNICATIONS: Debt negotiation request to Lucky Flight - DENIED",
                      "STATUS: Missing for 3 days - last seen heading toward casino",
                    ]}
                  />
                ),
              },

              "Zara": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="BODEGA-002"
                    name="Zara Khamidova"
                    position="Part-time Associate"
                    department="Retail (intermittent)"
                    supervisor="Batu Khamidov (uncle)"
                    clearanceLevel={1}
                    salary="Unpaid (family arrangement)"
                    email="zara_k_courier@freenet.cy"
                    phone="[AVAILABLE]"
                    emergencyContact="Batu Khamidov (uncle)"
                    performance={85}
                    status="ACTIVE"
                    notes={[
                      "PRIMARY EMPLOYMENT: Freelance courier (cyberbike)",
                      "BODEGA ROLE: Works shifts between courier jobs, has keys & security codes",
                      "RECENT ACTIVITY: Attempted to reach Batu via RCD - no response",
                      "RECENT ACTIVITY: Found store damaged, filed missing person report",
                    ]}
                  />
                ),
              },
            },
          },

          "Inventory Status": {
            favicon: <Icons.Inventory />,
            content: (
              <Message
                title="BODEGA"
                subtitle="INVENTORY MANAGEMENT"
                message="Last updated: 3 days ago (pre-closure)"
                note="Free wifi still active"
                theme="casual"
              >
                <InsetBox title="CURRENT STOCK STATUS:">
                  <Line red>Significant inventory loss detected</Line>
                  <Line red>Physical count required for accuracy</Line>
                </InsetBox>
                <InsetBox title="ESTIMATED REMAINING STOCK:">
                  <Line neon>Credchips (loose change in register): Present</Line>
                  <Line neon>Energy drinks/stims: Low stock</Line>
                  <Line neon>First aid supplies: Partial kit remaining</Line>
                  <Line neon>Synth-food rations: Minimal</Line>
                  <Line neon>Batu's personal items: 1 casino chip (sentimental)</Line>
                </InsetBox>
                <InsetBox title="EQUIPMENT STATUS:">
                  <Line cyan>✓ Wifi router: Operational</Line>
                  <Line cyan>✓ Security system: Online</Line>
                  <Line cyan>✓ Under-counter storage: Intact</Line>
                </InsetBox>
              </Message>
            ),
          },

          "Office Safe": {
            favicon: <Icons.Lock />,
            password: {
              pw: "zara",
              hint: "His niece's name",
              showFrequency: true,
            },
            content: (
              <Safe
                id="bodega-office-safe"
                model="DS-200"
                location="Batu's office"
                owner="Batu Khamidov"
                security="4-digit PIN"
                lastAccess="3 days ago (before disappearance)"
                physical={[
                  {
                    id: "batu_cash",
                    label: "Emergency cash",
                    description: "180¤ (small bills, last reserves)",
                    value: 180,
                    isCredits: true
                  },
                  {
                    id: "batu_documents",
                    label: "Documents",
                    description: "Bodega deed, Zara's medical records"
                  },
                  {
                    id: "batu_personal",
                    label: "Personal items",
                    description: "Family photos, wedding ring (deceased wife)"
                  },
                  {
                    id: "batu_casino_chip",
                    label: "Casino chip",
                    description: "Lucky Flight 100¤ chip (never cashed, sentimental)"
                  },
                  {
                    id: "machete",
                  },
                ]}
                digital={[
                  {
                    id: "batu_credchip",
                    label: "Credchip",
                    description: "22¤ (personal savings, transferable)",
                    value: 22,
                    isCredits: true
                  },
                  {
                    id: "batu_goodbye_note",
                    label: "Note",
                    description: "Goodbye letter to Zara (unsent, dated 3 days ago)"
                  },
                ]}
                notes="Safe contains Batu's last personal effects before confronting casino"
              />
            ),
          },
        },
      },
    },
  },
};
