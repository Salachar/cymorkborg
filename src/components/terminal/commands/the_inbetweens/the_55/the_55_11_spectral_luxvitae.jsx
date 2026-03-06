import {
  Line,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  CCTV,
  Locked,
  MaintenanceAccess,
  Message,
  PersonnelFile,
  PublicPortal,
  Tenet,
} from "@terminal/retcomdevice";

import cctv_image from '@images/the55/spectral_lux_cctv.png';

export const THE_55_SPECTRAL_LUXVITAE_COMMANDS = {
  "[U265 - U331] Spectral Luxvitae": {
    content: (
      <PublicPortal
        name="SPECTRAL LUXVITAE"
        tagline="Live light. Live life."
        network="LUXVITAE_GUEST"
        signalStrength="excellent"
        status="✓ RESIDENTS ONLY"
        statusColor="neon"
        notes={[
          "100+ penthouses and condos",
          "Wealthiest residents in The 55",
          "Private security, concierge services 24/7",
          "Access restricted to residents and authorized guests"
        ]}
        theme="secure"
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

      "Luxvitae Overview": {
        content: (
          <MaintenanceAccess
            title="[SPECTRAL LUXVITAE]"
            deviceModel="Premium Residential Tower"
            deviceId="LUXVITAE-01"
            firmwareVersion="v1.0.0"
            systemStatus="RESIDENTS ONLY"
          >
            <InsetBox title="ABOUT:">
              <Line>67 floors of ultra-luxury penthouses</Line>
              <Line>Each unit occupies entire floor or multiple floors</Line>
              <Line>Wealthiest and most influential residents of The 55</Line>
              <Line>Private amenities, dedicated staff, maximum security</Line>
            </InsetBox>
            <InsetBox title="RESIDENTS (Approximate demographics):">
              <Line cyan>Total units: 45 penthouses</Line>
              <Line cyan>Estimated residents: ~120 individuals</Line>
              <Line cyan>Corporate executives: 35%</Line>
              <Line cyan>Celebrities/influencers: 25%</Line>
              <Line cyan>Old money/inherited wealth: 20%</Line>
              <Line red>Criminal elite: 15% (suspected)</Line>
              <Line cyan>Other wealthy: 5%</Line>
            </InsetBox>
            <InsetBox title="AMENITIES - RESIDENT SERVICES:">
              <Line neon>• 24/7 concierge and personal assistants</Line>
              <Line neon>• Private chef and catering services</Line>
              <Line neon>• In-unit spa and wellness treatments</Line>
              <Line neon>• Dedicated security details (per unit)</Line>
              <Line neon>• Helicopter pad access (roof level)</Line>
              <Line neon>• Private wine cellars and humidors</Line>
              <Line neon>• Smart home automation (cutting-edge)</Line>
              <Line neon>• Maintenance and housekeeping (daily)</Line>
            </InsetBox>
            <InsetBox title="COST OF LIVING (Estimated expenses):">
              <Line yellow>Monthly rent: 50,000¤ - 200,000¤ per unit</Line>
              <Line yellow>HOA fees: 10,000¤ - 30,000¤</Line>
              <Line yellow>Concierge service: 5,000¤ - 15,000¤</Line>
              <Line yellow>Security (private): 10,000¤ - 40,000¤</Line>
              <Line red>Total monthly: 75,000¤ - 285,000¤ per household</Line>
            </InsetBox>
            <InsetBox title="SECURITY - MAXIMUM SECURITY PROTOCOLS:">
              <Line red>• Biometric access at all entry points</Line>
              <Line red>• Armed security guards (24/7, 15+ personnel)</Line>
              <Line red>• Facial recognition and surveillance</Line>
              <Line red>• Elevator access restricted by floor</Line>
              <Line red>• Panic rooms in every unit</Line>
              <Line red>• Direct line to private security company</Line>
              <Line red>• Background checks on all staff and visitors</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Resident Directory": {
        // Ultra-private residents - minimal info
        content: (
          <MaintenanceAccess />
        ),
        related_commands: {
          "Unit 301-302": {
            content: (
              <Tenet
                id="SL-301"
                name="C. Vex"
                unit="301-302"
                building="Spectral Luxvitae"
                status="ACTIVE"
                intercomEnabled={false}
                notes="All deliveries: Building concierge only. NO DIRECT CONTACT."
              />
            )
          },

          "Unit 315": {
            content: (
              <Tenet
                id="SL-315"
                name="Hightower Capital LLC"
                unit="315"
                building="Spectral Luxvitae"
                status="ACTIVE"
                intercomEnabled={false}
                notes="Contact building management for all inquiries."
              />
            )
          },

          "Unit 295-296": {
            content: (
              <Tenet
                id="SL-295"
                name="PRIVATE RESIDENCE"
                unit="295-296"
                building="Spectral Luxvitae"
                status="ACTIVE"
                intercomEnabled={false}
                emergencyContact="Building Security: Extension 2400"
                notes="NO UNAUTHORIZED ACCESS. Security detail on premises 24/7."
              />
            )
          },

          "Unit 320": {
            content: (
              <Tenet
                id="SL-320"
                name="Stadium of Prophets Foundation"
                unit="320"
                building="Spectral Luxvitae"
                status="ACTIVE"
                intercomEnabled={false}
                notes="All correspondence through foundation office."
              />
            )
          },

          // Mr. Silk - MAXIMUM PRIVACY
          "Unit 331": {
            content: (
              <Tenet
                id="SL-331"
                name="PRIVATE RESIDENCE"
                unit="331"
                building="Spectral Luxvitae"
                status="ACTIVE"
                intercomEnabled={false}
                emergencyContact="Building Security ONLY"
                notes="NO DELIVERIES. NO VISITORS. NO EXCEPTIONS. Contact building management."
              />
            )
          },

          // Ashford Family - Old money discretion
          "Units 325-328": {
            content: (
              <Tenet
                id="SL-325"
                name="Ashford Family Trust"
                unit="325-328"
                building="Spectral Luxvitae"
                status="ACTIVE"
                intercomEnabled={false}
                notes="Estate staff handles all deliveries. Contact concierge."
              />
            )
          },

          // Dmitri Volkov - Diplomatic immunity, maximum security
          "Unit 318": {
            content: (
              <Tenet
                id="SL-318"
                name="D. Volkov - Diplomatic Residence"
                unit="318"
                building="Spectral Luxvitae"
                status="ACTIVE"
                intercomEnabled={false}
                emergencyContact="Diplomatic Security: See building management"
                notes="DIPLOMATIC IMMUNITY. All contact through official channels only."
              />
            )
          },

          // Geoffrey Sterling - Building manager (more accessible)
          "Unit 267": {
            content: (
              <Tenet
                id="SL-267"
                name="G. Sterling - Building Management"
                unit="267"
                building="Spectral Luxvitae"
                status="ACTIVE"
                intercomEnabled={true}
                emergencyContact="Front desk: Extension 2000"
                notes="Building manager residence. For emergencies only."
              />
            ),
          },

          // Example of moved out resident
          "Unit 289": {
            content: (
              <Tenet
                id="SL-289"
                name="ESTATE IN PROBATE"
                unit="289"
                building="Spectral Luxvitae"
                status="SUSPENDED"
                intercomEnabled={false}
                notes="Unit vacant. Legal proceedings pending. Contact building management."
              />
            )
          },

          // Example of new resident (tech CEO)
          "Unit 312": {
            content: (
              <Tenet
                id="SL-312"
                name="PRIVATE RESIDENCE"
                unit="312"
                building="Spectral Luxvitae"
                moveInDate="6 months ago"
                status="ACTIVE"
                intercomEnabled={false}
                notes="All deliveries: Concierge desk only."
              />
            )
          },

          // Lady Pembroke - Aristocrat (some public presence but still private)
          "Unit 310": {
            content: (
              <Tenet
                id="SL-310"
                name="V. Pembroke"
                unit="310"
                building="Spectral Luxvitae"
                status="ACTIVE"
                intercomEnabled={false}
                notes="Contact building concierge for all inquiries."
              />
            )
          },
        },
      },

      "Notable Residents": {
        content: (
          <MaintenanceAccess
            title="[SPECTRAL LUXVITAE RESIDENT DIRECTORY]"
            deviceModel="Resident Registry"
            deviceId="RESIDENT-DIR-01"
            firmwareVersion="v1.0.0"
            systemStatus="CONFIDENTIAL"
            notes={[
              "High-profile inhabitants (partial list)",
              "Most use aliases or shell companies",
              "Staff sign extensive NDAs",
              "Privacy paramount"
            ]}
          />
        ),
        related_commands: {
          "Cassandra Vex": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-301"
                name="Cassandra Vex"
                age={41}
                position="Tech CEO"
                department="Founder & CEO - NexGen Systems"
                hireDate="Resident for 5 years"
                supervisor="None (business owner)"
                clearanceLevel={5}
                district="Spectral Luxvitae (Unit 301-302)"
                performance={null}
                notes={[
                  "Founded NexGen Systems (AI and neural tech company)",
                  "Net worth estimated at 800 million credits",
                  "Occupies two full floors (14,000 sq ft total)",
                  "Rarely leaves penthouse (works remotely)",
                  "Rumored to be testing experimental neural implants on herself",
                  "Has connections to TG Labs and The Enrichment Centre"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Alexander Hightower": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-315"
                name="Alexander Hightower"
                age={56}
                position="Investment Banker"
                department="Managing Partner - Hightower Capital"
                hireDate="Resident for 8 years"
                supervisor="None (business owner)"
                clearanceLevel={5}
                district="Spectral Luxvitae (Unit 315)"
                performance={null}
                notes={[
                  "Manages multi-billion credit investment fund",
                  "Net worth: 1.2 billion credits (personal)",
                  "Member of The Platinum Club",
                  "Connected to every major corporation in The City",
                  "Suspected of insider trading (unproven)",
                  "Divorced three times, currently single"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Stella Nova": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-295"
                name="Stella Nova"
                age={28}
                position="Pop Star"
                department="Recording Artist & Performer"
                hireDate="Resident for 2 years"
                supervisor="None (celebrity)"
                clearanceLevel={3}
                district="Spectral Luxvitae (Unit 295-296)"
                performance={null}
                notes={[
                  "International pop star, 50+ million fans",
                  "Net worth: 150 million credits",
                  "Two-floor penthouse with recording studio",
                  "Frequently hosts parties (noise complaints from neighbors)",
                  "Heavy security detail (paranoid about stalkers)",
                  "Secret: Clones of her live in The Shades (Capsule Closets)"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Prophet Marcus Gold": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-320"
                name="Prophet Marcus Aurelius Gold"
                age={51}
                position="Religious Leader"
                department="Stadium of Prophets Returned"
                hireDate="Resident for 6 years"
                supervisor="None (self-appointed leader)"
                clearanceLevel={3}
                district="Spectral Luxvitae (Unit 320)"
                performance={null}
                notes={[
                  "Leader of Stadium of Prophets mega-church",
                  "Net worth: 50+ million credits",
                  "Lives in luxury while congregation struggles",
                  "Preaches prosperity gospel, practices opulence",
                  "Multiple scandals (financial, personal) swept under rug",
                  "Politically connected, immune to accountability"
                ]}
                status="ACTIVE"
              />
            ),
          },

          '"Mr. Silk"': {
            content: (
              <MaintenanceAccess
                title='["MR. SILK"]'
                deviceModel="High-Risk Individual"
                deviceId="RESIDENT-331"
                firmwareVersion="v1.0.0"
                systemStatus="EXTREMELY DANGEROUS"
                notes={[
                  "Unit 331 (Top Floor)",
                  "Crime Boss - Identity unknown",
                  "10+ armed bodyguards at all times",
                  "DO NOT ENGAGE"
                ]}
              >
                <InsetBox title="KNOWN INFORMATION:">
                  <Line red>Real name never confirmed</Line>
                  <Line red>Always appears in public wearing silk suits</Line>
                  <Line red>Age: Estimated 50s-60s</Line>
                  <Line red>Gender: Male (assumed)</Line>
                  <Line red>Origin: Unknown</Line>
                </InsetBox>
                <InsetBox title="CRIMINAL ENTERPRISES (Suspected):">
                  <Line yellow>• Drug trafficking (citywide network)</Line>
                  <Line yellow>• Protection rackets (Lower levels of The 55)</Line>
                  <Line yellow>• Money laundering (multiple businesses)</Line>
                  <Line yellow>• Contract killings (professional assassins)</Line>
                  <Line yellow>• Blackmail and extortion (high-profile targets)</Line>
                  <Line yellow>• Illegal gambling operations</Line>
                </InsetBox>
                <InsetBox title="PENTHOUSE DEFENSES:">
                  <Line red>10+ armed bodyguards at all times</Line>
                  <Line red>Biometric access (Mr. Silk and trusted lieutenants only)</Line>
                  <Line red>Surveillance cameras covering all approaches</Line>
                  <Line red>Reinforced walls and bulletproof windows</Line>
                  <Line red>Panic room with independent escape route (helicopter)</Line>
                  <Line red>Attempting entry is suicide</Line>
                </InsetBox>
                <InsetBox title="LAW ENFORCEMENT:">
                  <Line yellow>Multiple C.O.P. investigations launched (all failed)</Line>
                  <Line yellow>Witnesses disappear or refuse to testify</Line>
                  <Line yellow>Evidence mysteriously lost or compromised</Line>
                  <Line yellow>Suspected corruption within law enforcement</Line>
                  <Line red>Effectively untouchable</Line>
                </InsetBox>
                <InsetBox title="WARNINGS:">
                  <Line red bold>DO NOT ENGAGE</Line>
                  <Line red>Extremely dangerous and well-protected</Line>
                  <Line red>Has killed people for less than suspicion</Line>
                  <Line red>Connections throughout The City</Line>
                  <Line red>Community Outreach advises: avoid at all costs</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "The Ashford Family": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-325"
                name="The Ashford Family"
                age={null}
                position="Generational Wealth"
                department="Old Money Dynasty"
                hireDate="Resident for 15+ years"
                supervisor="None (inherited wealth)"
                clearanceLevel={5}
                district="Spectral Luxvitae (Units 325-328, 4 floors)"
                performance={null}
                notes={[
                  "Four-generation family occupying 4 floors",
                  "Combined net worth: 2+ billion credits",
                  "Wealth accumulated over 150+ years",
                  "Own multiple properties worldwide",
                  "Rarely interact with other stack residents",
                  "Patriarch (age 87) controls family fortune with iron fist"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Dmitri Volkov": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-318"
                name="Dmitri Volkov"
                age={52}
                position="Arms Dealer"
                department="International Weapons Trade"
                hireDate="Resident for 4 years"
                supervisor="None (business owner)"
                clearanceLevel={4}
                district="Spectral Luxvitae (Unit 318)"
                performance={null}
                notes={[
                  "International arms dealer (legal and illegal)",
                  "Net worth: Unknown (estimated 500+ million)",
                  "Supplies weapons to corporations, governments, criminals",
                  "Has diplomatic immunity (works for foreign government)",
                  "Penthouse doubles as secure weapons cache",
                  "Completely immune to prosecution in The City"
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      "Amenities & Services": {
        content: (
          <MaintenanceAccess
            title="[LUXVITAE AMENITIES]"
            deviceModel="Premium Services Catalog"
            deviceId="AMENITIES-01"
            firmwareVersion="v1.0.0"
            systemStatus="ACTIVE"
            notes={[
              "Premium resident services 24/7",
              "Concierge, security, maintenance",
              "Shared facilities and exclusive privileges"
            ]}
          >
            <InsetBox title="CONCIERGE SERVICES (24/7):">
              <Line neon>• Restaurant reservations (citywide)</Line>
              <Line neon>• Travel arrangements (private jet, helicopter)</Line>
              <Line neon>• Event planning (parties, gatherings)</Line>
              <Line neon>• Personal shopping and errands</Line>
              <Line neon>• Tickets to exclusive events</Line>
              <Line neon>• Gift procurement and delivery</Line>
              <Line neon>• Problem solving ("make it happen" service)</Line>
            </InsetBox>
            <InsetBox title="IN-UNIT SERVICES (On request):">
              <Line neon>• Private chef (meals prepared in-unit)</Line>
              <Line neon>• Spa treatments (massage, facials, etc.)</Line>
              <Line neon>• Personal training and yoga instruction</Line>
              <Line neon>• Housekeeping (daily or on-demand)</Line>
              <Line neon>• Laundry and dry cleaning (same-day)</Line>
              <Line neon>• Pet care and grooming</Line>
              <Line neon>• Tech support and smart home maintenance</Line>
            </InsetBox>
            <InsetBox title="SHARED FACILITIES (Resident-only):">
              <Line cyan>• Rooftop terrace and gardens (Level 331)</Line>
              <Line cyan>• Infinity pool and spa (Level 330)</Line>
              <Line cyan>• Private theater (seats 20, Level 280)</Line>
              <Line cyan>• Wine cellar and tasting room (Level 270)</Line>
              <Line cyan>• Executive gym (Level 275)</Line>
              <Line cyan>• Business center and meeting rooms (Level 268)</Line>
              <Line cyan>• Helicopter landing pad (roof)</Line>
            </InsetBox>
            <InsetBox title="SECURITY SERVICES:">
              <Line red>• Building security (15+ guards, 24/7)</Line>
              <Line red>• Personal bodyguards (available for hire)</Line>
              <Line red>• Secure parking (armored vehicles)</Line>
              <Line red>• Panic buttons in every room</Line>
              <Line red>• Safe rooms in every unit</Line>
              <Line red>• Private security firm on retainer</Line>
              <Line red>• Background checks on all visitors/staff</Line>
            </InsetBox>
            <InsetBox title="EXCLUSIVE PRIVILEGES:">
              <Line yellow>• Priority access to Corp Quad and Green Zone</Line>
              <Line yellow>• VIP treatment at all 55 businesses</Line>
              <Line yellow>• Direct line to Stack Command for emergencies</Line>
              <Line yellow>• Exemption from most stack regulations</Line>
              <Line yellow>• Invitation to exclusive social events</Line>
              <Line yellow>• Networking with other ultra-wealthy residents</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Staff Directory": {
        content: (
          <MaintenanceAccess
            title="[LUXVITAE STAFF DIRECTORY]"
            deviceModel="Personnel Registry"
            deviceId="STAFF-DIR-01"
            firmwareVersion="v1.0.0"
            systemStatus="ACTIVE"
            notes={[
              "Building personnel and management",
              "60+ total staff members",
              "All sign extensive NDAs"
            ]}
          >
            <InsetBox title="MANAGEMENT:">
              <Line neon>• Geoffrey Sterling - Building Manager</Line>
              <Line neon>• Isabelle Chen - Head Concierge</Line>
            </InsetBox>
            <InsetBox title="SECURITY:">
              <Line neon>• Captain Marcus Steele - Security Director</Line>
              <Line neon>• 15+ Security Personnel (rotating shifts)</Line>
            </InsetBox>
            <InsetBox title="SERVICE STAFF:">
              <Line neon>• Maria Santos - Head Housekeeper</Line>
              <Line neon>• Chef Pierre Laurent - Private Chef (on-call)</Line>
              <Line neon>• 40+ Support Staff (housekeeping, maintenance, etc.)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Geoffrey Sterling": {
            content: (
              <PersonnelFile
                employeeId="SL-MGR-001"
                name="Geoffrey Sterling"
                age={63}
                position="Building Manager"
                department="Spectral Luxvitae Management"
                hireDate="18 years ago"
                supervisor="Property Owners (corporate consortium)"
                clearanceLevel={5}
                district="Spectral Luxvitae (Lives in Unit 267)"
                performance={95}
                notes={[
                  "Longest-serving manager in Luxvitae history",
                  "Impeccable reputation, trusted by residents",
                  "Knows every resident's secrets (never tells)",
                  "Manages staff of 60+ employees",
                  "Salary: 200,000¤/year + bonuses",
                  "Given free penthouse as part of compensation"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Isabelle Chen": {
            content: (
              <PersonnelFile
                employeeId="SL-CON-001"
                name="Isabelle Chen"
                age={37}
                position="Head Concierge"
                department="Resident Services"
                hireDate="9 years ago"
                supervisor="Geoffrey Sterling"
                clearanceLevel={4}
                district="Spectral Luxvitae"
                performance={93}
                notes={[
                  "Manages all concierge services and requests",
                  "Connected to every service provider in The City",
                  "Can make anything happen (legally or otherwise)",
                  "Discreet, professional, never judges",
                  "Residents trust her completely",
                  "Secret: Also works as information broker (very selective)"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Captain Marcus Steele": {
            content: (
              <PersonnelFile
                employeeId="SL-SEC-001"
                name="Captain Marcus Steele"
                age={49}
                position="Security Director"
                department="Luxvitae Security"
                hireDate="11 years ago"
                supervisor="Geoffrey Sterling"
                clearanceLevel={5}
                district="Spectral Luxvitae"
                performance={91}
                notes={[
                  "Former military special forces",
                  "Commands 15-person security team",
                  "Zero tolerance for threats to residents",
                  "Has killed in defense of residents (legally justified)",
                  "Respected by residents, feared by potential threats",
                  "Salary: 180,000¤/year"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Maria Santos": {
            content: (
              <PersonnelFile
                employeeId="SL-HSK-001"
                name="Maria Santos"
                age={52}
                position="Head Housekeeper"
                department="Housekeeping Services"
                hireDate="14 years ago"
                supervisor="Geoffrey Sterling"
                clearanceLevel={3}
                district="Spectral Luxvitae"
                performance={89}
                notes={[
                  "Manages team of 25+ housekeepers",
                  "Sees everything, says nothing",
                  "Knows which residents have affairs, addictions, secrets",
                  "Fiercely protective of her staff",
                  "Will quit before tolerating resident abuse of workers",
                  "Sends money to family in lower levels every month"
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      "Luxury Management": {
        password: {
          pw: "spectral",
          hint: "The first word of this building's name",
          difficulty: "easy",
          content: <Locked theme="terminal" title="LUXURY MANAGEMENT" />
        },
        content: (
          <Message
            title="SPECTRAL LUXVITAE MANAGEMENT"
            message="MANAGEMENT ACCESS GRANTED"
            note="Resident systems - Authorized personnel only"
            theme="secure"
          />
        ),
        related_commands: {
          "Resident Registry": {
            content: (
              <MaintenanceAccess
                title="[RESIDENT REGISTRY]"
                deviceModel="Occupancy Management"
                deviceId="REGISTRY-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Current occupancy and details",
                  "45 total units, 42 occupied",
                  "Average net worth: 380M¤ per household"
                ]}
              >
                <InsetBox title="OCCUPANCY STATUS:">
                  <Line cyan>Total units: 45 penthouses</Line>
                  <Line cyan>Occupied: 42 (93%)</Line>
                  <Line yellow>Vacant: 2 (5%)</Line>
                  <Line yellow>Under renovation: 1 (2%)</Line>
                </InsetBox>
                <InsetBox title="RESIDENT DEMOGRAPHICS - WEALTH DISTRIBUTION:">
                  <Line neon>Billionaires: 8 residents/families</Line>
                  <Line neon>100M-1B¤: 22 residents/families</Line>
                  <Line neon>10M-100M¤: 12 residents/families</Line>
                  <Line smoke>Average net worth: 380 million credits per household</Line>
                </InsetBox>
                <InsetBox title="UNIT SIZES:">
                  <Line cyan>Single floor (7,000 sq ft): 25 units</Line>
                  <Line cyan>Two floors (14,000 sq ft): 12 units</Line>
                  <Line cyan>Three+ floors (21,000+ sq ft): 8 units</Line>
                </InsetBox>
                <InsetBox title="RECENT ACTIVITY (Last 6 months):">
                  <Line yellow>• Unit 312 - New resident (CEO, tech startup)</Line>
                  <Line yellow>• Unit 298 - Sold (12M¤ transaction)</Line>
                  <Line yellow>• Unit 305 - Under renovation (expanding to 2 floors)</Line>
                  <Line yellow>• Unit 289 - Resident death (Dr. Cross, natural causes)</Line>
                  <Line smoke>  Estate in probate, family dispute over inheritance</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Financial Records": {
            password: {
              pw: "luxury",
              hint: "What type of living Spectral Luxvitae provides",
              difficulty: "medium",
              content: <Locked theme="terminal" title="FINANCIAL RECORDS" />
            },
            content: (
              <MaintenanceAccess
                title="[FINANCIAL RECORDS]"
                deviceModel="Revenue Tracking System"
                deviceId="FINANCE-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Revenue and resident payments",
                  "Monthly income: 5.85M¤",
                  "Annual revenue: ~70.2M¤"
                ]}
              >
                <InsetBox title="MONTHLY REVENUE:">
                  <Line cyan>Rent (all units): 4,200,000¤</Line>
                  <Line cyan>HOA fees: 850,000¤</Line>
                  <Line cyan>Concierge services: 420,000¤</Line>
                  <Line cyan>Additional services: 380,000¤</Line>
                  <Line neon>Total: 5,850,000¤/month</Line>
                  <Line smoke>Annual revenue: ~70,200,000¤</Line>
                </InsetBox>
                <InsetBox title="OPERATING EXPENSES:">
                  <Line yellow>Staff salaries: 1,200,000¤</Line>
                  <Line yellow>Security: 600,000¤</Line>
                  <Line yellow>Maintenance & repairs: 400,000¤</Line>
                  <Line yellow>Utilities: 350,000¤</Line>
                  <Line yellow>Insurance: 200,000¤</Line>
                  <Line yellow>Other: 150,000¤</Line>
                  <Line red>Total expenses: 2,900,000¤/month</Line>
                  <Line neon>Net profit: 2,950,000¤/month (~35M¤/year)</Line>
                </InsetBox>
                <InsetBox title="TOP PAYING RESIDENTS (Monthly rent):">
                  <Line neon>1. Mr. Silk (Unit 331): 200,000¤</Line>
                  <Line neon>2. Ashford Family (Units 325-328): 180,000¤ combined</Line>
                  <Line neon>3. Cassandra Vex (Units 301-302): 150,000¤</Line>
                  <Line neon>4. Alexander Hightower (Unit 315): 120,000¤</Line>
                  <Line neon>5. Stella Nova (Units 295-296): 110,000¤</Line>
                </InsetBox>
                <InsetBox title="PAYMENT STATUS:">
                  <Line cyan>ALL RESIDENTS CURRENT ON PAYMENTS</Line>
                  <Line smoke>No outstanding balances (enforcement strict)</Line>
                  <Line smoke>Failure to pay results in immediate eviction proceedings</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Security Protocols": {
            content: (
              <MaintenanceAccess
                title="[SECURITY PROTOCOLS]"
                deviceModel="Access Control System"
                deviceId="SECURITY-01"
                firmwareVersion="v1.0.0"
                systemStatus="MAXIMUM"
                notes={[
                  "Multi-layer verification required",
                  "15+ security personnel",
                  "Zero unauthorized access incidents (last year)"
                ]}
              >
                <InsetBox title="ACCESS CONTROL - MULTI-LAYER VERIFICATION:">
                  <Line red>Level 1: Building entrance (biometric + face recognition)</Line>
                  <Line red>Level 2: Elevator access (resident-specific floors only)</Line>
                  <Line red>Level 3: Penthouse entry (unit-specific biometrics)</Line>
                  <Line red>Level 4: Interior rooms (varies by resident preference)</Line>
                </InsetBox>
                <InsetBox title="VISITOR PROTOCOLS - GUEST ACCESS PROCEDURE:">
                  <Line neon>1. Resident pre-approves visitor (name, photo, date/time)</Line>
                  <Line neon>2. Visitor presents ID at entrance (verified)</Line>
                  <Line neon>3. Security escorts visitor to correct floor</Line>
                  <Line neon>4. Resident confirms visitor at penthouse door</Line>
                  <Line neon>5. Visitor departure logged and verified</Line>
                  <Line yellow>Unannounced visitors turned away (no exceptions)</Line>
                </InsetBox>
                <InsetBox title="SECURITY STAFF:">
                  <Line cyan>Day shift (08:00-20:00): 8 guards</Line>
                  <Line cyan>Night shift (20:00-08:00): 7 guards</Line>
                  <Line cyan>Roaming patrols: 2 guards (24/7)</Line>
                  <Line cyan>Total personnel: 15 guards</Line>
                </InsetBox>
                <InsetBox title="EMERGENCY RESPONSE - PANIC BUTTON ACTIVATION:">
                  <Line red>1. Immediate alert to security command center</Line>
                  <Line red>2. Guards dispatched (ETA ~60 seconds)</Line>
                  <Line red>3. Building lockdown if threat confirmed</Line>
                  <Line red>4. Private security firm notified (backup)</Line>
                  <Line red>5. C.O.P. contacted if necessary (rarely needed)</Line>
                </InsetBox>
                <InsetBox title="THREAT ASSESSMENT - KNOWN CONCERNS:">
                  <Line yellow>• Kidnapping risk (wealthy residents, potential targets)</Line>
                  <Line yellow>• Burglary attempts (high-value possessions)</Line>
                  <Line yellow>• Paparazzi and stalkers (celebrity residents)</Line>
                  <Line yellow>• Criminal retaliation (Mr. Silk, others)</Line>
                  <Line yellow>• Corporate espionage (executive residents)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Incident Log": {
            password: {
              pw: "penthouse",
              hint: "What the luxury units are called",
              difficulty: "medium",
              content: <Locked theme="terminal" title="INCIDENT LOG" />
            },
            content: (
              <MaintenanceAccess
                title="[SECURITY INCIDENT LOG]"
                deviceModel="Event Tracking System"
                deviceId="INCIDENTS-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Notable events - Last 12 months",
                  "3 major incidents",
                  "1 resident death (natural causes)"
                ]}
              >
                <InsetBox title="INCIDENT #SL-2025-008 (3 months ago):">
                  <Line red>Type: Attempted break-in</Line>
                  <Line red>Location: Unit 295 (Stella Nova)</Line>
                  <Line red>Details: Obsessed fan bypassed lobby, reached floor</Line>
                  <Line cyan>Resolution: Security apprehended, criminal charges filed</Line>
                  <Line smoke>Outcome: Enhanced facial recognition database</Line>
                </InsetBox>
                <InsetBox title="INCIDENT #SL-2025-014 (1 month ago):">
                  <Line yellow>Type: Domestic disturbance</Line>
                  <Line yellow>Location: Unit 308 (Julian Winters)</Line>
                  <Line yellow>Details: Argument with partner, neighbors reported loud sounds</Line>
                  <Line cyan>Resolution: Security checked, no violence confirmed</Line>
                  <Line smoke>Outcome: Resident counseled about noise levels</Line>
                </InsetBox>
                <InsetBox title="INCIDENT #SL-2025-019 (2 weeks ago):">
                  <Line yellow>Type: Suspicious package</Line>
                  <Line yellow>Location: Delivery for Unit 315 (Alexander Hightower)</Line>
                  <Line yellow>Details: Unmarked package, no sender information</Line>
                  <Line cyan>Resolution: Bomb squad called, package harmless (gift)</Line>
                  <Line smoke>Outcome: Enhanced package screening procedures</Line>
                </InsetBox>
                <InsetBox title="ROUTINE INCIDENTS (Last 12 months):">
                  <Line cyan>• 47 unauthorized visitor attempts (all turned away)</Line>
                  <Line cyan>• 12 noise complaints (parties, construction)</Line>
                  <Line cyan>• 8 medical emergencies (all resolved, no fatalities)</Line>
                  <Line cyan>• 6 elevator malfunctions (repairs completed)</Line>
                  <Line cyan>• 3 fire alarms (all false alarms)</Line>
                </InsetBox>
                <InsetBox title="STAFF INCIDENTS:">
                  <Line yellow>• 2 staff members terminated (theft from residents)</Line>
                  <Line yellow>• 1 housekeeper quit (resident abuse)</Line>
                  <Line yellow>• 1 security guard reprimanded (sleeping on duty)</Line>
                </InsetBox>
                <InsetBox title="RESIDENT DEATHS (Last 12 months):">
                  <Line red>• Dr. Nathaniel Cross (Unit 289): Natural causes, age 78</Line>
                  <Line smoke>  Estate valued at 90M¤, family dispute ongoing</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Concierge Request Log": {
            content: (
              <MaintenanceAccess
                title="[CONCIERGE SERVICE REQUESTS]"
                deviceModel="Request Tracking System"
                deviceId="CONCIERGE-LOG-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Recent requests - Last 7 days",
                  "All requests logged for billing",
                  "Sensitive requests redacted or coded"
                ]}
              >
                <InsetBox title="TRAVEL ARRANGEMENTS:">
                  <Line neon>• Unit 301 (Cassandra Vex): Private jet to Paris</Line>
                  <Line smoke>  Departure: Tomorrow, 14:00 | Return: 5 days</Line>
                  <Line neon>• Unit 315 (Alexander Hightower): Helicopter to heliport</Line>
                  <Line smoke>  Departure: Today, 09:00 | Business meeting downtown</Line>
                </InsetBox>
                <InsetBox title="EVENT PLANNING:">
                  <Line neon>• Unit 295 (Stella Nova): Party planning</Line>
                  <Line smoke>  Date: This Saturday | Guests: 50+ | Budget: 100k¤</Line>
                  <Line smoke>  Requirements: DJ, catering, security, cleanup</Line>
                  <Line neon>• Unit 320 (Prophet Gold): Charity gala organization</Line>
                  <Line smoke>  Date: Next month | Guests: 200 | Venue: Off-site</Line>
                </InsetBox>
                <InsetBox title="PERSONAL SHOPPING:">
                  <Line neon>• Unit 310 (Lady Pembroke): Rare orchid procurement</Line>
                  <Line smoke>  Specific species requested, budget: 20k¤</Line>
                  <Line neon>• Unit 318 (Dmitri Volkov): Custom suit tailoring</Line>
                  <Line smoke>  Designer: Exotique | Rush order: 3 days</Line>
                </InsetBox>
                <InsetBox title="UNUSUAL REQUESTS:">
                  <Line yellow>• Unit 331 (Mr. Silk): "Problem resolution" (no details logged)</Line>
                  <Line smoke>  Status: Handled discreetly by Isabelle Chen</Line>
                  <Line yellow>• Unit 325 (Ashford Family): Family therapist (confidential)</Line>
                  <Line smoke>  In-home sessions, NDA required</Line>
                </InsetBox>
                <InsetBox title="NOTES:">
                  <Line smoke>All requests logged for billing and quality assurance</Line>
                  <Line smoke>Sensitive requests redacted or coded</Line>
                  <Line yellow>Concierge staff sign extensive NDAs</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_SPECTRAL_LUXVITAE_COMMANDS;
