import {
  Line,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  CCTV,
  HoursBanner,
  Locked,
  MaintenanceAccess,
  Menu,
  Message,
  PublicPortal,
} from "@terminal/retcomdevice";

import cctv_image from '@images/the55/multimart_cctv.png';

export const THE_55_MULTIMART_COMMANDS = {
  "[U101 - U124] Multimart": {
    content: (
      <PublicPortal
        name="MULTIMART"
        tagline="One-stop shop for locals"
        network="MULTIMART_GUEST"
        signalStrength="medium"
        status="✓ OPEN 24/7"
        statusColor="neon"
        notes={[
          "Over 50 vendors",
          "Cash and credchips accepted",
          "Haggling encouraged",
          "Watch belongings - pickpockets active"
        ]}
        theme="limeade"
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

      "Vendor Directory": {
        content: (
          <MaintenanceAccess
            title="[MULTIMART VENDOR DIRECTORY]"
            deviceModel="Merchant Registry System"
            deviceId="VENDOR-DIR-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Over 50 active vendors",
              "24/7 operating hours",
              "Community-focused marketplace"
            ]}
          >
            <InsetBox title="VENDOR ALERTS:">
              <Line yellow>Lot #105-3: Temporarily vacant</Line>
              <Line smoke>Fierce bidding war between locals and corpo reps</Line>
              <Line yellow>Lots #43, 61, 124: Under renovation</Line>
              <Line smoke>Corporate contractors converting to corpo storefronts</Line>
            </InsetBox>
            <InsetBox title="COMMUNITY SPACE:">
              <Line cyan bold>THE 55 COMMUNITY CENTRE (Floor 112)</Line>
              <Line smoke>Entire floor converted to fitness, parks, gardens</Line>
              <Line smoke>Replacing what was lost in The REC</Line>
              <Line smoke>Free access to all residents</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Guillotine Row": {
            content: (
              <MaintenanceAccess
                title="[GUILLOTINE ROW]"
                deviceModel="Vendor Zone"
                deviceId="GUILLOTINE-103"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Cybertech & Prosthetics",
                  "Dozens of vendors in one hall",
                  "Used, custom, and 'liberated' tech"
                ]}
              >

                <InsetBox title="ABOUT:">
                  <Line>Dozens of vendors selling refurbished prosthetics and cybertech</Line>
                  <Line>Some used, some custom made, others cleaved from wealthy suits</Line>
                </InsetBox>
                <InsetBox title="SAMPLE INVENTORY:">
                  <Line cyan>Cyberarms (used): 800¤ - 2,500¤</Line>
                  <Line cyan>Cyberlegs (refurb): 1,200¤ - 4,000¤</Line>
                  <Line cyan>Cybereyes (basic): 600¤</Line>
                  <Line cyan>Cybereyes (enhanced): 1,800¤</Line>
                  <Line cyan>Neural interfaces: 900¤ - 3,000¤</Line>
                  <Line cyan>Custom installs: Negotiable</Line>
                </InsetBox>
                <InsetBox title="VENDOR NOTES:">
                  <Line yellow>Provenance questionable on premium items</Line>
                  <Line yellow>Some tech may be "recently liberated" from corpo suits</Line>
                  <Line smoke>Warranty: None | Installation: Extra 200¤</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Zed's Pawn Shop": {
            content: (
              <MaintenanceAccess
                title="[ZED'S PAWN SHOP]"
                deviceModel="General Store"
                deviceId="ZEDS-108"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "General goods, gear, and curiosities",
                  "Proprietor: Zed (cybertech bear head)",
                  "Fair dealer, good for basic gear"
                ]}
              >

                <InsetBox title="PROPRIETOR:">
                  <Line neon bold>ZED</Line>
                  <Line>Boisterous man with cybertech bear head</Line>
                  <Line>Fair dealer, good place to find basic gear</Line>
                  <Line>Specializes in items "acquired" from rich folks</Line>
                </InsetBox>
                <InsetBox title="INVENTORY CATEGORIES:">
                  <Line cyan>• Weapons (melee & firearms)</Line>
                  <Line cyan>• Armor (light to medium)</Line>
                  <Line cyan>• Electronics & tools</Line>
                  <Line cyan>• Miscellaneous gear</Line>
                  <Line cyan>• "Special acquisitions" (ask Zed directly)</Line>
                </InsetBox>
                <InsetBox title="PRICING:">
                  <Line neon>Basic gear: Standard prices</Line>
                  <Line neon>Used gear: 30-50% off retail</Line>
                  <Line neon>"Liberated" corpo gear: Negotiable</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Seams Shrine": {
            content: (
              <MaintenanceAccess
                title="[SEAMS SHRINE]"
                deviceModel="Clothing & Armor Shop"
                deviceId="SEAMS-106"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Custom clothing & light armor",
                  "Run by The Saints Family",
                  "Also operate from Alliansen Arms"
                ]}
              >

                <InsetBox title="PROPRIETORS:">
                  <Line neon bold>THE SAINTS FAMILY</Line>
                  <Line>Tailors and second-hand clothing merchants</Line>
                  <Line>Locals say they make the best clothes in The 55</Line>
                  <Line>Also operate from Alliansen Arms apartment #7835</Line>
                </InsetBox>
                <InsetBox title="SERVICES:">
                  <Line cyan>Custom tailoring: 150¤ - 500¤</Line>
                  <Line cyan>Armor weaving: 200¤ - 800¤</Line>
                  <Line cyan>Repairs & alterations: 30¤ - 100¤</Line>
                  <Line cyan>Second-hand clothing: 10¤ - 80¤</Line>
                </InsetBox>
                <InsetBox title="SPECIALTIES:">
                  <Line neon>• StyleGuard fabric integration (-D2 armor)</Line>
                  <Line neon>• Concealed weapon pockets</Line>
                  <Line neon>• Corporate knockoffs (look the part without the price)</Line>
                  <Line neon>• Climate adaptive materials</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Angela Ammo's Auto-Mart": {
            content: (
              <Menu
                title="ANGELA AMMO'S AUTO-MART"
                subtitle="Food, drinks, and ammunition"
                signType="food"
                categories={[
                  {
                    name: "FOOD",
                    items: [
                      { name: "Pre-packaged proteins", price: "8¤" },
                      { name: "Homemade sandwiches", price: "12¤" },
                      { name: "Synth milkshakes", price: "6¤" },
                      { name: "Fresh fruit (rare)", price: "15¤" },
                    ],
                  },
                  {
                    name: "AMMUNITION",
                    items: [
                      { name: "9mm (box of 50)", price: "25¤" },
                      { name: "Shotgun shells (box of 25)", price: "30¤" },
                      { name: "Rifle rounds (box of 20)", price: "35¤" },
                      { name: "Special orders", price: "Inquire" },
                    ],
                  },
                ]}
                footer="ID required for ammo purchases (loosely enforced)"
              />
            ),
          },

          "Monday Morning Medicine": {
            content: (
              <MaintenanceAccess
                title="[MONDAY MORNING MEDICINE]"
                deviceModel="Pharmaceutical Vendor"
                deviceId="MEDICINE-109"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Drugs, remedies, medical supplies",
                  "Quality varies - buyer beware",
                  "No refunds on 'experimental' items"
                ]}
              >

                <InsetBox title="HOME REMEDIES:">
                  <Line cyan>Painkillers (generic): 10¤</Line>
                  <Line cyan>Antibiotics (bootleg): 25¤</Line>
                  <Line cyan>Stimulants (mild): 15¤</Line>
                  <Line cyan>Sleep aids: 12¤</Line>
                </InsetBox>
                <InsetBox title="RECREATIONAL (with beneficial side effects):">
                  <Line cyan>Blackout: 30¤</Line>
                  <Line cyan>Red-juice: 40¤</Line>
                  <Line cyan>Vurt: 50¤</Line>
                  <Line cyan>Faceblock: 20¤</Line>
                </InsetBox>
                <InsetBox title="STOLEN CORPORATE MEDICAL EQUIPMENT:">
                  <Line neon>First aid kits, diagnostic tools, nano-patches</Line>
                  <Line smoke>Prices negotiable</Line>
                </InsetBox>
                <InsetBox title="VENDOR NOTES:">
                  <Line yellow>Quality varies - buyer beware</Line>
                  <Line yellow>No refunds on "experimental" items</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Carlyle's Cars": {
            content: (
              <MaintenanceAccess
                title="[CARLYLE'S CARS]"
                deviceModel="Auto Shop"
                deviceId="CARLYLES-115"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Auto repair & parts",
                  "Run by Carlyle Family",
                  "Facing corporate buyout pressure"
                ]}
              >

                <InsetBox title="PROPRIETORS:">
                  <Line neon bold>THE CARLYLE FAMILY</Line>
                  <Line>Multi-generational auto shop</Line>
                  <Line>Worried about corporate buyout attempts</Line>
                  <Line>Also operate from Alliansen Arms apartment #7325</Line>
                </InsetBox>
                <InsetBox title="SERVICES:">
                  <Line cyan>Basic repairs: 50¤ - 200¤</Line>
                  <Line cyan>Engine work: 300¤ - 1,500¤</Line>
                  <Line cyan>Body work: 200¤ - 800¤</Line>
                  <Line cyan>Cyberbike mods: 400¤+</Line>
                  <Line cyan>Diagnostic scan: 25¤</Line>
                </InsetBox>
                <InsetBox title="LOCATION NOTES:">
                  <Line>Near The 55's freight elevators (lower levels access)</Line>
                  <Line>Can handle cars, bikes, small transport vehicles</Line>
                  <Line yellow>Currently facing aggressive corporate buyout offers</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Smile Cafe": {
            content: (
              <>
                <HoursBanner hours="24/7" />
                <Menu
                  title="SMILE CAFE"
                  subtitle="Best food in the stack"
                  signType="food"
                  categories={[
                    {
                      name: "FOOD",
                      items: [
                        { name: "Full breakfast", price: "18¤" },
                        { name: "Greasy burger & fries", price: "15¤" },
                        { name: "Synth-ramen bowl", price: "12¤" },
                        { name: "Mystery meat sandwich", price: "10¤" },
                        { name: "Daily special", price: "20¤" },
                      ],
                    },
                    {
                      name: "DRINKS",
                      items: [
                        { name: "Coffee (real)", price: "5¤" },
                        { name: "Coffee (synth)", price: "2¤" },
                        { name: "Tea", price: "3¤" },
                        { name: "Soda", price: "4¤" },
                        { name: "Beer (local)", price: "6¤" },
                      ],
                    },
                  ]}
                  footer="★ Packed 24/7 | Smokers welcome! | Best food in The 55 according to locals"
                />
              </>
            ),
          },

          "Bio Court": {
            content: (
              <MaintenanceAccess
                title="[BIO COURT]"
                deviceModel="Biological Marketplace"
                deviceId="BIO-111"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Pets, seeds, fresh catch",
                  "Various vendors",
                  "Gene-spliced pets require special care"
                ]}
              >

                <InsetBox title="SAMPLE INVENTORY:">
                  <Line cyan>Artificial pets (small): 50¤ - 200¤</Line>
                  <Line cyan>Gene-spliced pets: 400¤ - 2,000¤</Line>
                  <Line cyan>Synth-seeds (vegetables): 5¤ per pack</Line>
                  <Line cyan>Synth-seeds (flowers): 8¤ per pack</Line>
                  <Line cyan>Fresh fish (mutated): 10¤ per kg</Line>
                  <Line cyan>Fresh fish (non-mutated): 40¤ per kg</Line>
                </InsetBox>
                <InsetBox title="NOTES:">
                  <Line yellow>Non-mutated fish cost extra (rare in The City)</Line>
                  <Line smoke>Gene-spliced pets require special care instructions</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Blaster's Hoverboards": {
            content: (
              <MaintenanceAccess
                title="[BLASTER'S HOVERBOARDS]"
                deviceModel="Custom Vehicle Shop"
                deviceId="BLASTER-119"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Custom hoverboards & extreme sports gear",
                  "Proprietor: Blaster (local racing legend)",
                  "First flight is free (waiver required)"
                ]}
              >

                <InsetBox title="PROPRIETOR:">
                  <Line neon bold>BLASTER</Line>
                  <Line>Local legend in underground racing scene</Line>
                  <Line>Builds custom boards from scavenged parts</Line>
                </InsetBox>
                <InsetBox title="INVENTORY:">
                  <Line cyan>Basic hoverboard: 500¤</Line>
                  <Line cyan>Custom build: 1,200¤ - 3,000¤</Line>
                  <Line cyan>Racing mods: 300¤ - 800¤</Line>
                  <Line cyan>Safety gear: 100¤ - 400¤</Line>
                  <Line cyan>Repairs: 50¤+</Line>
                </InsetBox>
                <InsetBox title="SPECIAL OFFER:">
                  <Line neon bold>FIRST FLIGHT IS FREE!</Line>
                  <Line yellow>Homemade and dangerous</Line>
                  <Line smoke>Waiver required. Blaster not responsible for injuries.</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "Vendor Network": {
        password: {
          pw: "multimart",
          hint: "The name of this shopping area",
          difficulty: "easy",
          content: <Locked theme="terminal" title="VENDOR NETWORK" />
        },
        content: (
          <Message
            title="MULTIMART VENDOR NETWORK"
            message="VENDOR ACCESS GRANTED"
            note="Shared vendor systems - Authorized merchants only"
            theme="limeade"
          />
        ),
        related_commands: {
          "Vendor Communications": {
            content: (
              <MaintenanceAccess
                title="[VENDOR COMMUNICATIONS]"
                deviceModel="Message Board System"
                deviceId="VENDOR-MSG-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Internal message board",
                  "Last 30 days",
                  "50+ vendors connected",
                  "Community organizing platform"
                ]}
              >

                <InsetBox title="RECENT MESSAGES:">
                  <Line neon bold>FROM: Zed (Zed's Pawn Shop)</Line>
                  <Line smoke>Subject: Lot #105-3 bidding war</Line>
                  <Line>"Heard corpo reps offering 50k¤ for the vacant lot. We need to pool resources and outbid them. Who's in?"</Line>
                  <Line yellow>15 vendors replied (mixed support)</Line>



                  <Line neon bold>FROM: The Saints (Seams Shrine)</Line>
                  <Line smoke>Subject: Corporate renovation crews</Line>
                  <Line>"Lots 43, 61, and 124 being converted to corpo stores. They're pricing us out. Community meeting this Friday at Smile Cafe?"</Line>
                  <Line yellow>22 vendors confirmed attendance</Line>



                  <Line neon bold>FROM: Angela (Angela Ammo's)</Line>
                  <Line smoke>Subject: Pickpocket problem</Line>
                  <Line>"3 customers hit this week alone. Can we pool credits for better security? Or at least share descriptions of known thieves?"</Line>
                  <Line yellow>Ongoing discussion (18 replies)</Line>



                  <Line neon bold>FROM: Carlyle's Cars</Line>
                  <Line smoke>Subject: Help needed</Line>
                  <Line>"Corporate buyout pressure getting worse. They're threatening to cut our supply lines. Anyone have contacts outside The 55?"</Line>
                  <Line yellow>12 vendors offered support</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Collective Inventory": {
            content: (
              <MaintenanceAccess
                title="[SHARED INVENTORY SYSTEM]"
                deviceModel="Cross-Vendor Stock Tracking"
                deviceId="INVENTORY-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Real-time stock tracking",
                  "50+ vendors contributing data",
                  "Hot items and overstock alerts"
                ]}
              >

                <InsetBox title="HOT ITEMS (High demand):">
                  <Line yellow bold>LOW STOCK ALERT:</Line>
                  <Line red>• Ammunition (all calibers) - Multiple vendors</Line>
                  <Line red>• Fresh food (non-synth) - Bio Court, Smile Cafe</Line>
                  <Line red>• Medical supplies - Monday Morning Medicine</Line>
                  <Line red>• Cyberlegs (refurbished) - Guillotine Row</Line>
                </InsetBox>
                <InsetBox title="OVERSTOCKED (Deals available):">
                  <Line cyan bold>EXCESS INVENTORY:</Line>
                  <Line cyan>• Synth-clothing (last season) - Seams Shrine (30% off)</Line>
                  <Line cyan>• Basic tools - Zed's Pawn Shop (40% off)</Line>
                  <Line cyan>• Artificial pets (small) - Bio Court (Buy 1 Get 1)</Line>
                </InsetBox>
                <InsetBox title="RECENT ACQUISITIONS (Last 7 days):">
                  <Line neon>• High-end corpo cybertech - Guillotine Row (provenance unknown)</Line>
                  <Line neon>• Luxury vehicle parts - Carlyle's Cars (from wealthy district)</Line>
                  <Line neon>• Designer clothing (knockoffs) - Seams Shrine</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Sales Records": {
            password: {
              pw: "vendors",
              hint: "What the merchants in the Multimart are called",
              difficulty: "easy",
              content: <Locked theme="terminal" title="SALES RECORDS" />
            },
            content: (
              <MaintenanceAccess
                title="[SALES RECORDS]"
                deviceModel="Revenue Tracking System"
                deviceId="SALES-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Aggregate vendor revenue",
                  "Last 30 days",
                  "Total revenue: 142,000¤",
                  "Growth vs last month: +8%"
                ]}
              >

                <InsetBox title="TOP PERFORMING VENDORS:">
                  <Line cyan>Smile Cafe: 18,500¤ (Food & beverage)</Line>
                  <Line cyan>Guillotine Row: 16,200¤ (Cybertech)</Line>
                  <Line cyan>Zed's Pawn Shop: 14,800¤ (General goods)</Line>
                  <Line cyan>Carlyle's Cars: 12,300¤ (Auto repair)</Line>
                  <Line cyan>Monday Morning Medicine: 11,900¤ (Drugs & medical)</Line>
                </InsetBox>
                <InsetBox title="TOTAL MULTIMART REVENUE:">
                  <Line neon bold>Monthly Total: 142,000¤</Line>
                  <Line smoke>Average per vendor: 2,840¤</Line>
                  <Line smoke>Growth vs. last month: +8%</Line>
                </InsetBox>
                <InsetBox title="TRENDS & CONCERNS:">
                  <Line yellow bold>CONCERNS:</Line>
                  <Line yellow>• Corporate storefronts may reduce foot traffic</Line>
                  <Line yellow>• Rising security costs eating into margins</Line>
                  <Line yellow>• Lot #105-3 bidding war draining collective funds</Line>



                  <Line cyan bold>OPPORTUNITIES:</Line>
                  <Line cyan>• Community Centre driving more residents to Multimart</Line>
                  <Line cyan>• Increased demand from upper level workers (Kaytell, TG Labs)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Security Incidents": {
            content: (
              <MaintenanceAccess
                title="[SECURITY INCIDENT LOG]"
                deviceModel="Incident Reporting System"
                deviceId="SEC-LOG-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Vendor-reported incidents",
                  "Last 30 days",
                  "5 major incidents logged",
                  "Pickpocketing remains primary concern"
                ]}
              >

                <InsetBox title="THEFT & PICKPOCKETING:">
                  <Line red bold>INCIDENT #1 (3 days ago):</Line>
                  <Line red>Location: Angela Ammo's Auto-Mart</Line>
                  <Line red>Type: Shoplifting (ammunition)</Line>
                  <Line red>Suspect: Male, 20s, hood obscuring face</Line>
                  <Line smoke>Resolution: Escaped before confrontation</Line>



                  <Line red bold>INCIDENT #2 (5 days ago):</Line>
                  <Line red>Location: Bio Court</Line>
                  <Line red>Type: Pickpocketing (customer credchip stolen)</Line>
                  <Line red>Suspect: Female, 30s, professional demeanor</Line>
                  <Line smoke>Resolution: Victim reported to C.O.P. booth (no action taken)</Line>



                  <Line red bold>INCIDENT #3 (8 days ago):</Line>
                  <Line red>Location: Zed's Pawn Shop</Line>
                  <Line red>Type: Armed robbery attempt</Line>
                  <Line red>Suspect: 2 males, armed with knives</Line>
                  <Line smoke>Resolution: Zed defended store (suspects fled, one injured)</Line>
                </InsetBox>
                <InsetBox title="VANDALISM:">
                  <Line yellow bold>INCIDENT #4 (12 days ago):</Line>
                  <Line yellow>Location: Lot #105-3 (vacant)</Line>
                  <Line yellow>Type: Graffiti and property damage</Line>
                  <Line yellow>Message: "KEEP THE 55 LOCAL"</Line>
                  <Line smoke>Resolution: Community suspects anti-corpo activists (investigation ongoing)</Line>
                </InsetBox>
                <InsetBox title="DISPUTES:">
                  <Line yellow bold>INCIDENT #5 (15 days ago):</Line>
                  <Line yellow>Location: Carlyle's Cars</Line>
                  <Line yellow>Type: Verbal altercation with corporate rep</Line>
                  <Line yellow>Details: Corpo rep threatened legal action over buyout refusal</Line>
                  <Line smoke>Resolution: Security escorted corpo rep out, no further action</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_MULTIMART_COMMANDS;
