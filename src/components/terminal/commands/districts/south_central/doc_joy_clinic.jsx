import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
} from '@terminal/TerminalComponents';

import {
  Camera,
  CoffeeMachine,
  CommunityBoard,
  DigitalWallet,
  Extractable,
  HoursBanner,
  Node,
  Menu,
  PublicPortal,
  SmartFridge,
  VendingMachine,
  Workstation,
} from "@terminal/retcomdevice"

export const DOC_JOY_CLINIC_COMMANDS = {
  "Doc Joy's Clinic": {
    favicon: <Icons.RipperDoc />,
    content: (
      <PublicPortal
        name="DOC JOY'S CLINIC"
        tagline="Fast fixes, no questions asked"
        network="DOCJOY_PUBLIC"
        signalStrength="strong"
        status="✓ OPEN 24/7"
        statusColor="neon"
        notes={[
          "Emergency trauma care available",
          "Chrome installation & repairs",
          "Discretion guaranteed"
        ]}
        theme="casual"
      >
        <HoursBanner
          name="Schedule"
          hours="24/7"
          days="Every Day"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Services Menu": {
        favicon: <Icons.Services />,
        content: (
          <Menu
            title="DOC JOY'S SERVICES"
            subtitle="Svärta District Reaperdoc"
            signType="coffee"
            categories={[
              {
                name: "EMERGENCY SERVICES",
                items: [
                  { name: "Trauma Stabilization", price: "500¤" },
                  { name: "Combat Stim Pack", price: "200¤" },
                  { name: "Blood Transfusion", price: "300¤" },
                  { name: "Organ Patch Job", price: "800¤" }
                ]
              },
              {
                name: "CHROME WORK",
                items: [
                  { name: "Chrome Installation", price: "2,000¤+" },
                  { name: "Chrome Repair", price: "500¤+" },
                  { name: "Chrome Removal", price: "1,500¤" },
                  { name: "Diagnostic Scan", price: "100¤" }
                ]
              },
              {
                name: "SPECIALTY SERVICES",
                items: [
                  { name: "Reaper Jobs (Contract Work)", price: "Negotiable" },
                  { name: "No-Records Treatment", price: "+50%" },
                  { name: "House Calls", price: "Triple Rate" }
                ]
              }
            ]}
            footer="Payment up front. Cash preferred. No corp insurance."
          />
        )
      },

      "Community Board": {
        favicon: <Icons.Bulletin />,
        content: (
          <CommunityBoard
            name="CLINIC BULLETIN BOARD"
            location="Near entrance - Public access"
            posts={[
              { text: "Lost cat - grey with chrome leg - answers to 'Static'", color: "pink" },
              { text: "Chrome installer needed - pay negotiable", color: "pink" },
              { text: "Selling old cyberdeck - good working condition", color: "pink" },
              { text: "WARNING: Virid Vipers active in area - stay alert", color: "red" },
            ]}
            services={[
              "Emergency contact: +67-555-FIXME",
              "Reaper contracts available (inquire with Doc Joy)",
            ]}
            vibe="Gritty but professional. Locals trust Doc Joy."
          />
        ),
      },

      "Vending Machine": {
        favicon: <Icons.Vending />,
        content: (
          <VendingMachine
            id="docjoy-waiting-vending"
            model="MediSnack Pro"
            location="Doc Joy's Clinic - Waiting Area"
            drinks={[
              { name: 'SYNTH-CAF', pattern: 'lines', color: 'yellow', available: true },
              { name: 'PROTEIN BAR', pattern: 'blocks', color: 'green', available: true },
              { name: 'ENERGY DRINK', pattern: 'dots', color: 'orange', available: true },
              { name: 'PAINKILLERS', pattern: 'waves', color: 'blue', available: true },
              { name: 'STIM-LITE', pattern: 'circles', color: 'purple', available: true },
            ]}
          />
        ),
        related_commands: {
          "Maintenance Panel": {
            favicon: <Icons.Maintenance />,
            password: {
              pw: "suppressor",
              hint: "Polite murder accessory",
              lockType: 'terminal',
            },
            content: (
              <Node
                title="[VENDING MACHINE MAINTENANCE]"
                notes={[
                  "Last service: 1 week ago",
                  "Next service: Due in 2 weeks",
                  "Collection box emptied weekly",
                  "Popular items: Painkillers, Energy drinks"
                ]}
              />
            ),

          },
        },
      },

      "Coffee Machine": {
        favicon: <Icons.CoffeeMachine />,
        content: (
          <CoffeeMachine>
            <DigitalWallet
              id="doc_joy_coffee_machine_wallet"
              credits={50}
            />
          </CoffeeMachine>
        ),
      },

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "reaperwork",
          showFirst: true,
          showCount: true,
          hint: "What Doc Joy calls his specialty contract jobs",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="Doc Joy's Clinic"
            notes={[
              "Chrome installation tools on nearby tray",
              "Medical equipment operational, standby mode",
              "Vibrant skull graffiti on floor",
              "Side walkways for equipment storage"
            ]}
            scans={[
              "Doc Joy%98",
              "Doc Joy%97",
              "Unknown Individual%FAILED",
              "SECURITY BREACH%DENIED",
            ]}
          >
            <InsetBox title="EQUIPMENT STATUS:">
              <Line neon>• Operating chair: READY</Line>
              <Line neon>• Chrome installation tools: STERILIZED</Line>
              <Line neon>• Medical scanner: ONLINE</Line>
              <Line neon>• Anesthetic dispenser: LOADED</Line>
              <Line neon>• Emergency defibrillator: CHARGED</Line>
            </InsetBox>
          </Node>
        ),
        related_commands: {
          "Security Footage": {
            favicon: <Icons.Camera />,
            content: (
              <Camera
                cameraId="CAM-DOCJOY-01"
                location="Doc Joy's Clinic — Main Floor & Storage"
                status="ACTIVE"
                details={[
                  "Resolution: 1080p HD",
                  "Night vision: Enabled",
                  "Motion detection: Active",
                  "Biometric scanner on storage door (upgraded post-breach)",
                ]}
                alerts={[
                  "Doc Joy arrived for night shift",
                  "Suspicious individual — hooded, no treatment, departed after 3 min",
                  "Unauthorized storage access attempt — alarm triggered, suspect fled",
                  "Intel confirmed: stolen design spotted on Steel Jackhammer",
                  "BREACH — Chrome leg prototype stolen. Footage corrupted by malware. Biometrics bypassed.",
                ]}
              />
            ),
          },

          "CyberWare Lockbox": {
            favicon: <Icons.Lock />,
            password: {
              pw: "prototype",
              hint: "What was stolen from the lab",
              lockType: 'vault',
            },
            content: (
              <Extractable
                id="docjoy-lab-storage"
                physicalItems={[
                  {
                    id: "chrome_leg_mk2",
                    label: "Chrome Leg Prototype Mk.II",
                    description: "Replacement for stolen design - improved servos",
                  },
                  {
                    id: "neural_interface",
                    label: "Neural Interface Components",
                    description: "Various experimental parts",
                  },
                  {
                    id: "research_notes",
                    label: "Research Notes",
                    description: "Handwritten design schematics (encrypted)",
                  },
                ]}
                digitalItems={[
                  {
                    id: "backup_designs",
                    label: "Backup Design Files",
                    description: "All chrome leg prototypes (encrypted)",
                  },
                  {
                    id: "supplier_contacts",
                    label: "Supplier Contact List",
                    description: "Black market chrome and medical suppliers",
                  },
                ]}
              />
            ),
          },

          "MedCryo Storage": {
            favicon: <Icons.Medical />,
            password: {
              pw: "iceicebaby",
              hint: "Gotta keep everything nice and Vanilla Ice cold",
              lockType: 'safe',
            },
            content: (
              <SmartFridge
                id="docjoy-medical-fridge"
                model="MediCool Pro-3000"
                location="Doc Joy's Clinic - Supply Room"
                temperature={38}
                physicalItems={[
                  {
                    id: "blood_packs",
                    label: "Blood Packs (Type O-) x8",
                    description: "Emergency transfusion supply",
                    value: 400
                  },
                  {
                    id: "synthetic_skin",
                    label: "Synthetic Skin x12",
                    description: "Grafting patches",
                    value: 180
                  },
                  {
                    id: "antibiotics",
                    label: "Antibiotics (Medical grade)",
                    description: "Broad spectrum - 20 doses"
                  },
                  {
                    id: "painkillers",
                    label: "Painkillers (Prescription)",
                    description: "High-grade - 30 doses"
                  },
                ]}
                freezerItems={[
                  {
                    id: "faceblock",
                    label: "Faceblock x3",
                    description: "Facial recognition blocker",
                    value: 450
                  },
                  {
                    id: "red_juice",
                    label: "Red-juice x2",
                    description: "Emergency healing stimulant",
                    value: 600
                  },
                  {
                    id: "vurt",
                    label: "Vurt x1",
                    description: "High-grade hallucinogen",
                    value: 300
                  },
                  {
                    id: "blackout",
                    label: "Blackout x1",
                    description: "Sedative/anesthetic",
                    value: 150
                  },
                ]}
                freezerTemp={0}
                notes="Emergency supplies kept on hand. Doc Joy occasionally 'loans' items to trusted contractors before dangerous jobs."
              />
            ),
          },
          "Office Workstation": {
            favicon: <Icons.Computer />,
            password: {
              pw: "reaperdoc",
              hint: "Best job in the business",
              lockType: 'terminal',
            },
            content: (
              <Workstation
                owner="Doc Joy"
                role="Owner / Lead Surgeon"
                status="IDLE"
                lastActivity="2 hours ago"
                openTabs={[
                  { title: 'Reaper Contract RR-2067-1104', type: 'work' },
                  { title: 'Steel Jackhammer - Net Search', type: 'work' },
                  { title: 'Black Market Suppliers Contact List', type: 'work' },
                  { title: 'Patient Records (Encrypted)', type: 'work' },
                ]}
                recentFiles={[
                  { name: 'Contract_RR-2067-1104.txt', timestamp: 'This morning' },
                  { name: 'Steel_Jackhammer_Intel.txt', timestamp: '2 hours ago' },
                  { name: 'Incident_Report_Oct28.txt', timestamp: '2 weeks ago' },
                  { name: 'Medical_Supplies_Order.txt', timestamp: '1 week ago' },
                ]}
                emails={3}
                productivity={87}
              />
            ),
          },
        },
      },
    },
  },
};

export default DOC_JOY_CLINIC_COMMANDS;
