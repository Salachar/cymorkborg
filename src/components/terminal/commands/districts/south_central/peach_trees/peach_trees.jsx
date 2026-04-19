import Icons from '@utils/icons';

import {
  Line,
  Divider,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  ATM,
  Camera,
  DistrictPortal,
  HoursBanner,
  Menu,
  NetworkActivity,
  Node,
  PersonnelFile,
  PublicPortal,
  RetComImage,
  Safe,
  BuildingAccess,
  Tenet,
  VendingMachine,
} from '@terminal/retcomdevice';

import { TOWER_MANAGEMENT_COMMANDS } from './peach_trees_management';
import { GLASS_GARDENS_COMMANDS } from './glass_gardens';
import { STEEL_PENTHOUSE_COMMANDS } from './steel_penthouse';

import penthouseBlueprint from '@images/blueprints/steel_penthouse_2.png';
import central_tower_atrium_cctv_image from '@images/locations/central_tower_atrium_cctv.png';

export const PEACH_TREES_COMMANDS = {
  "Peach Trees": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · Home to the famous Steel Jackhammer!</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="Peach Trees"
        districtId="CPT-BLOCK-7"
        tagline="Premium Living in the Heart of the City"
        region="2847 Central Plaza, South Central District"
        population="210 units (198 residential, 12 penthouses)"
        corporatePresence="ChromeLux + Alliansen (tenants)"
        crimeThreat="LOW"
        securityResponse="MAXIMUM"
        atmosphere="51 floors of glass and steel overlooking the district. Weapon scanners at the door, keycards past floor 40, private security on the penthouse level. The kind of building that makes you feel poor just walking past it. If you belong here, you know it. If you don't, so does everyone else."
        accessPoints={[
          "Main Atrium — Ground floor, staffed 24/7, weapon scanners active",
          "Parking Garage — B1-B3, resident keycards only",
        ]}
        warnings={[
          "Weapon scanners active at main entrance",
          "Visitor log maintained — all guests signed in",
          "Floors 40+ require keycard authorization",
          "ChromeLux armed staff operate throughout atrium",
          "Penthouse residents employ private security (not building staff)",
          "Roof camera currently offline — scheduled maintenance",
        ]}
        theme="corporate"
      >
        <InsetBox title="DIRECTORY:">
          <Line smoke>B1-B3: Parking Garage</Line>
          <Line smoke>G: Lobby · Security · ATM · Vending</Line>
          <Line smoke>2: ChromeLux Boutique</Line>
          <Line smoke>3-39: Residential (198 units)</Line>
          <Line smoke>40-50: Penthouse Level (12 units)</Line>
          <Line smoke>51: Tower Management</Line>
          <Line smoke>R: The Glass Gardens · Helipad</Line>
        </InsetBox>
      </DistrictPortal>
    ),
    related_commands: {
      "Atrium": {
        favicon: <Icons.Atrium />,
        content: (
          <PublicPortal
            name="PEACH TREES"
            tagline="South Central's Premier Residential Address"
            theme="corporate"
          >
            <InsetBox title="GROUND FLOOR:">
              <Line neon>Security desk & visitor check-in</Line>
              <Line neon>ATM — Cy Central Bank</Line>
              <Line neon>VendLux Elite vending</Line>
              <Line neon>Elevator bank (4 main, 1 service)</Line>
              <Line neon>Digital resident directory</Line>
            </InsetBox>
            <InsetBox title="SECOND FLOOR:">
              <Line neon>ChromeLux Boutique — open railing overlooks lobby</Line>
              <Line neon>Waiting lounge & consultation suites</Line>
              <Line smoke small>Appointment required. Walk-ins discouraged.</Line>
            </InsetBox>
          </PublicPortal>
        ),
        related_commands: {
          "Atrium CityCam": {
            favicon: <Icons.Camera />,
            content: (
              <Camera
                cctv={central_tower_atrium_cctv_image}
              />
            ),
          },

          "Atrium ATM": {
            favicon: <Icons.ATM />,
            content: (
              <ATM
                id="atm-tower-lobby"
                model="ATM-600"
                location="Peach Trees - Ground Floor Lobby"
                network="Cy Central Bank"
                credits={200}
                physicalCredits={400}
                lastService="Yesterday, 14:00"
                transactions={[
                  "14:32 → Withdrawal: 500¤",
                  "13:18 → Withdrawal: 1,000¤",
                  "12:05 → Deposit: 2,500¤",
                  "11:42 → Balance inquiry",
                  "10:15 → Withdrawal: 200¤",
                ]}
              />
            ),
          },

          "Vending Machine": {
            favicon: <Icons.Vending />,
            content: (
              <VendingMachine
                id="vend-tower-lobby"
                model="VendLux Elite"
                location="Peach Trees - Ground Floor Lobby"
              />
            ),
          },

          "ChromeLux Boutique": {
            favicon: <Icons.GoldStars />,
            content: (
              <PublicPortal
                name="CHROMELUX"
                tagline="Premium augmentation for the discerning individual"
                notes={[
                  "Appointment required (walk-ins discouraged)",
                  "Consultation fee: 500¤ (credited toward purchase)",
                  "Installation by certified surgeons only",
                  "Security services available to Peach Trees residents"
                ]}
                theme="fancy"
              >
                <HoursBanner
                  name="CHROMELUX"
                  hours="10:00 - 20:00"
                  days="Mon-Sat — Closed Sunday"
                  status="OPEN"
                  statusColor="open"
                  location="Second Floor — Peach Trees Atrium"
                  note="Open railing overlooks ground floor lobby"
                  theme="fancy"
                />
              </PublicPortal>
            ),
            related_commands: {
              "Product Catalog": {
                favicon: <Icons.Inventory />,
                content: (
                  <Menu
                    title="CHROMELUX"
                    subtitle="Premium Cyberware - By Appointment"
                    signType="food"
                    categories={[
                      {
                        name: "NEURAL AUGMENTS",
                        items: [
                          { name: "Reflex Booster MK-II", price: "8,500¤" },
                          { name: "Neural Interface (Premium)", price: "12,000¤" },
                          { name: "Memory Expansion Unit", price: "6,000¤" },
                          { name: "Combat Targeting System", price: "15,000¤" },
                        ]
                      },
                      {
                        name: "PHYSICAL AUGMENTS",
                        items: [
                          { name: "Dermal Plating (Titanium)", price: "10,000¤" },
                          { name: "Subdermal Armor (Ceramic)", price: "14,000¤" },
                          { name: "Reinforced Skeleton", price: "18,000¤" },
                          { name: "Cyber-limbs (per limb)", price: "20,000¤+" },
                        ]
                      },
                      {
                        name: "OPTICAL AUGMENTS",
                        items: [
                          { name: "Low-light Vision", price: "4,500¤" },
                          { name: "Thermal Imaging", price: "7,000¤" },
                          { name: "Targeting Reticle", price: "5,500¤" },
                          { name: "Full Cyber-eyes (premium)", price: "12,000¤" },
                        ]
                      },
                      {
                        name: "MILITARY-GRADE (⚠ License Required)",
                        items: [
                          { name: "Adrenaline Injector System", price: "25,000¤" },
                          { name: "Pain Editor", price: "30,000¤" },
                          { name: "Sandevistan Reflex System", price: "45,000¤" },
                          { name: "Gorilla Arms", price: "35,000¤" },
                        ]
                      },
                    ]}
                    footer="Consultation fee 500¤ credited toward purchase. Financing at 18% APR."
                  />
                ),
              },

              "Management Portal": {
                favicon: <Icons.LAN />,
                password: {
                  pw: "chromium",
                  hint: "Such a precious material",
                  lockType: 'terminal',
                },
                content: (
                  <Node
                    title="[CHROMELUX — STAFF PORTAL]"
                    notes={[
                      "Peach Trees boutique — Floor 2",
                      "Staff: 4 on shift (2 consultants, 1 surgeon, 1 front desk)",
                      "Today's appointments: 3 confirmed, 1 no-show",
                      "Next delivery: Tomorrow 09:00 — Alliansen Inc. supply chain",
                    ]}
                  >
                    <InsetBox title="TODAY'S SCHEDULE:">
                      <Line cyan>10:00 — Consultation (RESIDENT: 3201) — completed</Line>
                      <Line cyan>13:30 — Installation (RESIDENT: 1804) — completed</Line>
                      <Line cyan>16:00 — Consultation (EXTERNAL) — no-show</Line>
                      <Line cyan>18:30 — Consultation (RESIDENT: 4201) — pending</Line>
                      <Line smoke small>Unit 4201 appointment flagged: high-value, handle personally</Line>
                    </InsetBox>
                    <InsetBox title="INVENTORY STATUS:">
                      <Line neon>ChromeLux Standard Line — 14 units (adequate)</Line>
                      <Line neon>ChromeLux Premium Line — 3 units (low — reorder pending)</Line>
                      <Line neon>Alliansen Prototype Series — 1 unit (DO NOT SELL — awaiting collection)</Line>
                      <Line yellow>⚠ Prototype unit flagged for secure storage — do not log in standard inventory</Line>
                    </InsetBox>
                    <InsetBox title="FINANCIALS (MTD):">
                      <Line cyan>Revenue: 847,500¤</Line>
                      <Line cyan>Consultations: 23 (18 converted)</Line>
                      <Line cyan>Average transaction: 36,848¤</Line>
                      <Line smoke small>Q4 target: on track</Line>
                    </InsetBox>
                  </Node>
                ),
                related_commands: {
                  "Personnel File - Dr. Nakamura": {
                    favicon: <Icons.Person />,
                    content: (
                      <PersonnelFile
                        employeeId="CHROMELUX-OWNER-001"
                        name="Dr. Yuki Nakamura"
                        age={44}
                        position="Owner / Chief Surgeon"
                        department="Cyberware Installation"
                        supervisor="Self-employed"
                        clearanceLevel={5}
                        district="Peach Trees, Unit 2204 (Floor 22)"
                        emergencyContact="Private medical insurance"
                        performance={96}
                        notes={[
                          "Former TG Labs researcher - cybernetics division",
                          "Departed TG Labs 2061 (circumstances undisclosed)",
                          "Specialization: High-end custom chrome installations",
                          "Reputation: Best rejection rate in South Central (zero documented)",
                          "Clientele: Corporate executives, killmatch athletes, wealthy criminals",
                          "Building security contract: ChromeLux staff supplement Tower security",
                          "Residence: Unit 2204 - same building as boutique"
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },

                  "ChromeVault": {
                    favicon: <Icons.Lock />,
                    content: (
                      <Safe
                        id="chromelux-vault"
                        model="MilitaryGrade-X"
                        security="Biometric + retinal scan + 8-digit PIN"
                        lastAccess="Yesterday (inventory check)"
                        physical={[
                          {
                            id: "vault_cyberware_stock",
                            label: "Premium cyberware inventory",
                            description: "Various high-end augments (estimated 500k¤+ value)"
                          },
                          {
                            id: "vault_military_chrome",
                            label: "Military-grade augments",
                            description: "Restricted stock (requires license to sell legally)"
                          },
                          {
                            id: "vault_custom_parts",
                            label: "Custom installation components",
                            description: "Rare parts for specialized builds"
                          },
                        ]}
                        digital={[
                          {
                            id: "vault_credchip",
                            label: "Business credchip",
                            description: "45,000¤ (operating capital)",
                            value: 45000,
                            isCredits: true
                          },
                          {
                            id: "vault_client_list",
                            label: "Client database",
                            description: "Complete installation records - all clients (encrypted)"
                          },
                        ]}
                        notes="Vault is military-grade."
                      />
                    ),
                  },
                }
              },
            },
          },
        },
      },

      "Resident Directory": {
        favicon: <Icons.Group />,
        content: (
          <Node
            title="[RESIDENT DIRECTORY - PUBLIC ACCESS]"
            notes={[
              "Partial listing - many residents opt for privacy",
              "Full directory: Building security only",
              "210 units total (198 residential, 12 penthouses)",
              "Floors 3-39: Standard residential",
              "Floors 40-50: Penthouse level"
            ]}
          >
            <InsetBox title="LISTED RESIDENTS (SELECTED):">
              <Line smoke small>Showing public listings only.</Line>
            </InsetBox>
          </Node>
        ),
        related_commands: {
          "Unit 2204 - Floor 22": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="RES-2204"
                name="Y. Nakamura"
                unit="2204"
                building="Peach Trees"
                moveInDate="March 2061"
                status="ACTIVE"
                intercomEnabled={true}
                emergencyContact="ChromeLux Boutique - Floor 2"
                notes="Deliveries: Leave with ChromeLux reception (Floor 2). Do not leave at door."
              />
            ),
          },

          "Unit 1508 - Floor 15": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="RES-1508"
                name="D. & P. Osei"
                unit="1508"
                building="Peach Trees"
                moveInDate="January 2065"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Deliveries: Ring intercom. Do not leave unattended."
              />
            ),
          },

          "Unit 3302 - Floor 33": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="RES-3302"
                name="T. Halverson"
                unit="3302"
                building="Peach Trees"
                moveInDate="August 2063"
                status="ACTIVE"
                intercomEnabled={false}
                notes="All correspondence via building management. Do not buzz directly."
              />
            ),
          },

          "Unit 4201 - Floor 42": {
            favicon: <Icons.Person />,
            content: (
              <Tenet
                id="RES-4201"
                name="Jackhammer"
                unit="4201"
                building="Peach Trees"
                moveInDate="September 2066"
                status="ACTIVE"
                intercomEnabled={false}
                notes="All deliveries: Contact Alliansen Inc. management. Do not buzz directly."
              />
            ),
            related_commands: {
              ...STEEL_PENTHOUSE_COMMANDS,
            }
          },
        },
      },

      ...TOWER_MANAGEMENT_COMMANDS,
      ...GLASS_GARDENS_COMMANDS,
    },
  },
};

export default PEACH_TREES_COMMANDS;
