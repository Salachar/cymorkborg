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
} from "@terminal/retcomdevice";

import cctv_image from '@images/the55/tg_labs_cctv.png';

export const THE_55_GREEN_ZONE_COMMANDS = {
  "[U171 - U200] TG Labs Green Zone": {
    content: (
      <PublicPortal
        name="TG LABS GREEN ZONE"
        tagline="Corporate access barrier"
        network="GREEN_ZONE_PUBLIC"
        signalStrength="strong"
        status="✓ RESTRICTED ACCESS"
        statusColor="yellow"
        notes={[
          "Corporate barrier separating upper and lower stack",
          "Credit balance required for access (10,000¤ minimum)",
          "Lush gardens, clean air, premium amenities",
          "Prevents lower-level residents from accessing upper floors"
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

      "Green Zone Overview": {
        content: (
          <MaintenanceAccess
            title="[TG LABS GREEN ZONE]"
            deviceModel="Access Control System"
            deviceId="GREEN-ZONE-01"
            firmwareVersion="v1.0.0"
            systemStatus="RESTRICTED"
            notes={[
              "Owned and operated by TG Labs corporation",
              "Serves as exclusive amenity zone for wealthy residents",
              "10,000¤ minimum credit balance required for entry"
            ]}
          >

            <InsetBox title="ACCESS RESTRICTIONS:">
              <Line red bold>MINIMUM 10,000¤ CREDIT BALANCE REQUIRED</Line>
              <Line red>Facial recognition and credit verification at all entrances</Line>
              <Line red>Unauthorized entry results in immediate security response</Line>
            </InsetBox>
            <InsetBox title="AMENITIES (Qualified residents only):">
              <Line neon>• Lush vertical gardens (oxygen-rich environment)</Line>
              <Line neon>• Premium restaurants and cafes</Line>
              <Line neon>• Fitness centers and spas</Line>
              <Line neon>• Shopping boutiques</Line>
              <Line neon>• Medical clinics (private healthcare)</Line>
              <Line neon>• Business centers and meeting rooms</Line>
              <Line neon>• Parks and recreation spaces</Line>
            </InsetBox>
            <InsetBox title="ACCESS REQUIREMENTS:">
              <Line cyan>Credit Balance: 10,000¤ minimum (verified)</Line>
              <Line cyan>Identity Check: Facial recognition required</Line>
              <Line cyan>Background: No outstanding warrants</Line>
              <Line cyan>Behavior: Professional conduct mandatory</Line>
              <Line yellow>Violations result in permanent ban</Line>
            </InsetBox>
            <InsetBox title="SECURITY PRESENCE:">
              <Line red>• Armed guards at all entrances (6 checkpoints)</Line>
              <Line red>• Constant surveillance (cameras everywhere)</Line>
              <Line red>• Automated credit verification systems</Line>
              <Line red>• Quick response teams (2 minutes anywhere in zone)</Line>
              <Line red>• Direct line to TG Labs corporate security</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Access Procedures": {
        content: (
          <MaintenanceAccess
            title="[GREEN ZONE ACCESS PROCEDURES]"
            deviceModel="Entry Verification System"
            deviceId="ACCESS-PROC-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Entry requirements and verification process",
              "6 checkpoint locations",
              "2-5 second verification time",
              "~2% denial rate daily"
            ]}
          >
            <InsetBox title="STANDARD ENTRY PROCESS (6 checkpoints):">
              <Line neon>1. Approach checkpoint gate</Line>
              <Line neon>2. Facial recognition scan (automated)</Line>
              <Line neon>3. Credit balance verification (real-time)</Line>
              <Line neon>4. Background check (warrant database)</Line>
              <Line neon>5. Access granted or denied (2-5 seconds)</Line>
            </InsetBox>
            <InsetBox title="DENIAL REASONS:">
              <Line red>• Insufficient credit balance (~10,000¤)</Line>
              <Line red>• Outstanding warrants or legal issues</Line>
              <Line red>• Previous ban from Green Zone</Line>
              <Line red>• Suspected criminal activity</Line>
              <Line red>• Failed identity verification</Line>
            </InsetBox>
            <InsetBox title="BYPASS METHODS (Unofficial):">
              <Line yellow bold>KNOWN VULNERABILITIES:</Line>
              <Line yellow>• Service entrance</Line>
              <Line yellow>• Maintenance tunnels</Line>
              <Line yellow>• Bribed guards (2,000¤ per entry, rare, risky)</Line>
              <Line yellow>• Identity spoofing</Line>
              <Line red>All methods carry risk of detection and prosecution</Line>
            </InsetBox>
            <InsetBox title="VISITOR PASSES (Temporary 24h access):">
              <Line neon>Sponsored by Green Zone resident (1,000¤ deposit)</Line>
              <Line neon>Visitor must stay with sponsor at all times</Line>
              <Line neon>Limited to specific approved areas</Line>
              <Line neon>Sponsor liable for visitor's conduct</Line>
              <Line yellow>Rarely granted to lower-level residents</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Notable Locations": {
        content: (
          <MaintenanceAccess
            title="[GREEN ZONE LOCATIONS]"
            deviceModel="Facility Directory"
            deviceId="LOCATIONS-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Key facilities and attractions",
              "4 major zones by floor range",
              "Commercial, wellness, residential, corporate"
            ]}
          />
        ),
        related_commands: {
          "The Enrichment Centre": {
            content: (
              <MaintenanceAccess
                title="[THE ENRICHMENT CENTRE]"
                deviceModel="Research Facility"
                deviceId="ENRICHMENT-238-249"
                firmwareVersion="v1.0.0"
                systemStatus="MAXIMUM SECURITY"
                notes={[
                  "TG Labs' most classified research facility",
                  "Armed guards, biometric access, surveillance",
                  "Unauthorized entry is corporate espionage"
                ]}
              >
                <InsetBox title="OFFICIAL DESCRIPTION:">
                  <Line>"A cutting-edge research facility dedicated to advancing human potential through biotechnology, neural enhancement, and medical innovation."</Line>
                  <Line smoke>- TG Labs public relations statement</Line>
                </InsetBox>
                <InsetBox title="RUMORS & SPECULATION (Unconfirmed):">
                  <Line yellow>• Human experimentation (voluntary and otherwise)</Line>
                  <Line yellow>• Neural interface development (military contracts)</Line>
                  <Line yellow>• Consciousness uploading research</Line>
                  <Line yellow>• Illegal nano-technology testing</Line>
                  <Line yellow>• "Disappeared" test subjects</Line>
                  <Line yellow>• Genetic modification experiments</Line>
                </InsetBox>
                <InsetBox title="MISSING PERSONS:">
                  <Line red bold>47 RESIDENTS REPORTED MISSING (Last 3 years)</Line>
                  <Line red>All last seen near Green Zone</Line>
                  <Line red>TG Labs denies any connection</Line>
                  <Line red>C.O.P. investigation inconclusive</Line>
                  <Line yellow>Community Outreach suspects foul play</Line>
                </InsetBox>
                <InsetBox title="SECURITY MEASURES:">
                  <Line neon>• Level 5 clearance minimum (TG Labs employees only)</Line>
                  <Line neon>• Biometric scanners at all doors</Line>
                  <Line neon>• Armed security patrols (24/7)</Line>
                  <Line neon>• No windows or external views</Line>
                  <Line neon>• Electronic jamming (no unauthorized devices)</Line>
                  <Line yellow>• Memory wipe protocols for visitors (rumored)</Line>
                </InsetBox>
                <InsetBox title="KNOWN EMPLOYEES:">
                  <Line>Very few confirmed employees</Line>
                  <Line>Most staff housing inside facility</Line>
                  <Line>NDAs and non-compete agreements standard</Line>
                  <Line yellow>Whistleblowers have "accidents"</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Azure Dining": {
            content: (
              <MaintenanceAccess
                title="[AZURE DINING]"
                deviceModel="Premium Restaurant"
                deviceId="AZURE-214"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Celebrity chef Kenji Nakamura",
                  "Molecular gastronomy",
                  "Reservation-only (weeks in advance)"
                ]}
              >

                <InsetBox title="ABOUT:">
                  <Line>High-end restaurant in Green Zone</Line>
                  <Line>Celebrity chef Kenji Nakamura</Line>
                  <Line>Molecular gastronomy, seasonal tasting menus</Line>
                  <Line>Reservation-only (weeks in advance)</Line>
                </InsetBox>
                <InsetBox title="PRIX FIXE TASTING MENU (200¤):">
                  <Line cyan>8 courses, wine pairings included</Line>
                  <Line cyan>Changes seasonally, dietary restrictions accommodated</Line>



                  <Line neon>Current offerings:</Line>
                  <Line smoke>• Amuse-bouche (Chef's choice)</Line>
                  <Line smoke>• Oyster with yuzu foam</Line>
                  <Line smoke>• Aged beef tartare, quail egg</Line>
                  <Line smoke>• Uni risotto, gold leaf</Line>
                  <Line smoke>• Seared scallop, cauliflower purée</Line>
                  <Line smoke>• Wagyu beef, miso glaze</Line>
                  <Line smoke>• Palate cleanser (sorbet)</Line>
                  <Line smoke>• Chocolate sphere, espresso center</Line>
                </InsetBox>
                <InsetBox title="ATMOSPHERE:">
                  <Line>Intimate dining room (20 seats)</Line>
                  <Line>Floor-to-ceiling windows overlooking gardens</Line>
                  <Line>Soft lighting, live music (pianist)</Line>
                  <Line>Service impeccable, formal attire required</Line>
                </InsetBox>
                <InsetBox title="CLIENTELE:">
                  <Line>Corporate executives, wealthy upper-level residents</Line>
                  <Line>Spectral Luxvitae penthouse dwellers</Line>
                  <Line>Occasional celebrity sightings</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "Personnel Directory": {
        content: (
          <MaintenanceAccess
            title="[GREEN ZONE PERSONNEL]"
            deviceModel="Staff Registry"
            deviceId="PERSONNEL-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Notable staff and residents",
              "Security, management, service staff",
              "42 total security personnel"
            ]}
          >

            <InsetBox title="SECURITY & MANAGEMENT:">
              <Line neon>• Director Chen Wei - Green Zone Administrator</Line>
              <Line neon>• Captain Elena Voronin - Security Chief</Line>
              <Line neon>• Marcus Trent - Checkpoint Supervisor</Line>
            </InsetBox>
            <InsetBox title="SERVICE STAFF:">
              <Line neon>• Sofia Ramirez - Concierge Manager</Line>
              <Line neon>• Dr. Yuki Tanaka - TG Medical Clinic Director</Line>
              <Line neon>• Chef Kenji Nakamura - Azure Dining (Celebrity)</Line>
            </InsetBox>
            <InsetBox title="NOTABLE RESIDENTS:">
              <Line neon>• Julian Cross - Media Mogul (Eden Apartments)</Line>
              <Line neon>• Dr. Aria Blackwell - Research Scientist (TG Labs)</Line>
              <Line neon>• Victoria Sterling - Corporate Lawyer (Eden Apartments)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Director Chen Wei": {
            content: (
              <PersonnelFile
                employeeId="GZ-DIR-001"
                name="Director Chen Wei"
                age={52}
                position="Green Zone Administrator"
                department="TG Labs Management"
                hireDate="9 years ago"
                supervisor="TG Labs Corporate (off-site)"
                clearanceLevel={5}
                district="Green Zone"
                performance={94}
                notes={[
                  "Oversees all Green Zone operations",
                  "Firm believer in credit-based access system",
                  "Views lower-level residents as security risk",
                  "Efficient administrator, no tolerance for rule-breaking",
                  "Has final say on access disputes",
                  "Rumored to receive bonuses for limiting lower-level access"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Captain Elena Voronin": {
            content: (
              <PersonnelFile
                employeeId="GZ-SEC-001"
                name="Captain Elena Voronin"
                age={41}
                position="Security Chief"
                department="Green Zone Security"
                hireDate="6 years ago"
                supervisor="Director Chen Wei"
                clearanceLevel={4}
                district="Green Zone"
                performance={91}
                notes={[
                  "Former military, highly disciplined",
                  "Commands 42+ security personnel",
                  "Zero-tolerance policy for security breaches",
                  "Respected by guards, feared by troublemakers",
                  "Personally investigates all serious incidents",
                  "Secretly sympathetic to lower-level struggles (won't act on it)"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Dr. Aria Blackwell": {
            content: (
              <PersonnelFile
                employeeId="GZ-RES-047"
                name="Dr. Aria Blackwell"
                age={36}
                position="Senior Research Scientist"
                department="TG Labs - Enrichment Centre"
                hireDate="4 years ago"
                supervisor="Classified"
                clearanceLevel={5}
                district="Green Zone (Eden Apartments)"
                performance={null}
                notes={[
                  "Works at The Enrichment Centre (classified research)",
                  "Brilliant but morally ambiguous",
                  "Specializes in neural interface technology",
                  "Under strict NDA, never discusses work",
                  "Lives in Eden Apartments (rarely leaves Green Zone)",
                  "Rumored involvement in controversial experiments"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Marcus Trent": {
            content: (
              <PersonnelFile
                employeeId="GZ-SEC-015"
                name="Marcus Trent"
                age={34}
                position="Checkpoint Supervisor"
                department="Green Zone Security"
                hireDate="3 years ago"
                supervisor="Captain Elena Voronin"
                clearanceLevel={3}
                district="Green Zone"
                performance={79}
                notes={[
                  "Supervises North Gate checkpoint (main entrance)",
                  "By-the-book approach to security",
                  "Occasionally accepts bribes (2,000¤ for entry)",
                  "Careful to never be caught, covers tracks well",
                  "Gambling debts motivate corruption",
                  "Vulnerable to blackmail if discovered"
                ]}
                status="ACTIVE - COMPROMISED"
              />
            ),
          },

          "Sofia Ramirez": {
            content: (
              <PersonnelFile
                employeeId="GZ-SRV-008"
                name="Sofia Ramirez"
                age={29}
                position="Concierge Manager"
                department="Guest Services"
                hireDate="5 years ago"
                supervisor="Director Chen Wei"
                clearanceLevel={2}
                district="Green Zone"
                performance={88}
                notes={[
                  "Manages visitor passes and guest services",
                  "Professional, courteous, extremely organized",
                  "Grew up in lower levels (rare for Green Zone staff)",
                  "Quietly helps lower-level residents when possible",
                  "Knows how to work the system without getting caught",
                  "Information broker (will trade intel for favors)"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Dr. Yuki Tanaka": {
            content: (
              <PersonnelFile
                employeeId="GZ-MED-001"
                name="Dr. Yuki Tanaka"
                age={44}
                position="Medical Director"
                department="TG Medical Clinic"
                hireDate="7 years ago"
                supervisor="Director Chen Wei"
                clearanceLevel={3}
                district="Green Zone"
                performance={93}
                notes={[
                  "Runs TG Medical Clinic (premium healthcare)",
                  "Excellent physician, cutting-edge treatments",
                  "Only treats Green Zone residents (corporate policy)",
                  "Frustrated by healthcare inequality",
                  "Secretly provides pro bono care to lower-level residents",
                  "Uses clinic resources off-hours (major risk)"
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      "Green Zone Security": {
        password: {
          pw: "credit",
          hint: "What you need a balance of to access the Green Zone",
          difficulty: "easy",
          content: <Locked theme="terminal" title="GREEN ZONE SECURITY" />
        },
        content: (
          <Message
            title="GREEN ZONE SECURITY SYSTEMS"
            message="SECURITY ACCESS GRANTED"
            note="Access control systems - Authorized personnel only"
            theme="secure"
          />
        ),
        related_commands: {
          "Access Control Logs": {
            content: (
              <MaintenanceAccess
                title="[ACCESS CONTROL LOGS]"
                deviceModel="Entry/Exit Tracking System"
                deviceId="ACCESS-LOG-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Entry/exit records - Last 24 hours",
                  "Total entries: 2,427",
                  "Total denials: 48 (1.9%)",
                  "6 checkpoint monitoring"
                ]}
              >

                <InsetBox title="CHECKPOINT ACTIVITY:">
                  <Line cyan>North Gate: 847 entries, 12 denials</Line>
                  <Line cyan>South Gate: 623 entries, 18 denials</Line>
                  <Line cyan>East Gate: 412 entries, 7 denials</Line>
                  <Line cyan>West Gate: 389 entries, 9 denials</Line>
                  <Line cyan>Service Entrance: 156 entries, 2 denials</Line>
                  <Line cyan>Emergency Exit: 0 (exit only, alarmed)</Line>
                  <Line smoke>Total entries: 2,427 | Total denials: 48 (1.9%)</Line>
                </InsetBox>
                <InsetBox title="DENIAL REASONS:">
                  <Line red>Insufficient credits: 31 (65%)</Line>
                  <Line red>Outstanding warrants: 8 (17%)</Line>
                  <Line red>Previous ban: 5 (10%)</Line>
                  <Line red>Failed ID verification: 4 (8%)</Line>
                </InsetBox>
                <InsetBox title="RECENT INCIDENTS (Last 24h):">
                  <Line yellow bold>14:23 - Forged badge attempt:</Line>
                  <Line smoke>Location: Service Entrance | Status: Detained, handed to C.O.P.</Line>

                  <Line yellow bold>19:47 - Altercation at North Gate:</Line>
                  <Line smoke>Individual denied entry, became aggressive | Status: Escorted away</Line>

                  <Line yellow bold>02:15 - Suspicious activity:</Line>
                  <Line smoke>Near emergency exit, testing door | Status: Patrol dispatched</Line>
                </InsetBox>
                <InsetBox title="VIP ACCESS (Last 24h):">
                  <Line neon>Julian Cross: 4 entries/exits (media mogul)</Line>
                  <Line neon>Dr. Aria Blackwell: 2 entries/exits (TG Labs scientist)</Line>
                  <Line neon>Victoria Sterling: 3 entries/exits (corporate lawyer)</Line>
                  <Line smoke>VIP access flagged for security priority</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Credit Verification Database": {
            password: {
              pw: "balance",
              hint: "What the system checks in your account",
              difficulty: "medium",
              content: <Locked theme="terminal" title="CREDIT VERIFICATION" />
            },
            content: (
              <MaintenanceAccess
                title="[CREDIT VERIFICATION DATABASE]"
                deviceModel="Financial Screening System"
                deviceId="CREDIT-VER-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Real-time financial screening",
                  "Queries banking network <1 second",
                  "Minimum threshold: 10,000¤",
                  "Continuous monitoring during visit"
                ]}
              >
                <InsetBox title="SYSTEM OVERVIEW:">
                  <Line>Automated credit balance verification at all checkpoints</Line>
                  <Line>Queries banking network in real-time (~1 second)</Line>
                  <Line>Minimum threshold: 10,000¤ liquid funds</Line>
                  <Line>Updates continuously during Green Zone visit</Line>
                  <Line yellow>If balance drops below threshold while inside, ejection protocols activate</Line>
                </InsetBox>
                <InsetBox title="VERIFICATION PROCESS:">
                  <Line neon>1. Facial recognition identifies individual</Line>
                  <Line neon>2. System queries linked bank accounts</Line>
                  <Line neon>3. Calculates total liquid assets</Line>
                  <Line neon>4. Checks against 10,000¤ minimum</Line>
                  <Line neon>5. Grant or deny access (2-5 seconds)</Line>
                </InsetBox>
                <InsetBox title="EXEMPTIONS (Bypass credit check):">
                  <Line cyan>• TG Labs employees (Level 3+ clearance)</Line>
                  <Line cyan>• Green Zone service staff (on duty only)</Line>
                  <Line cyan>• Sponsored visitors (temporary, 24 hours)</Line>
                  <Line cyan>• Emergency personnel (medical, security)</Line>
                  <Line cyan>• Corporate executives (director level+)</Line>
                </InsetBox>
                <InsetBox title="STATISTICS (Last 30 days):">
                  <Line yellow>Average entries per day: 2,400</Line>
                  <Line yellow>Average denials per day: 50 (2%)</Line>
                  <Line yellow>Highest denial day: 89 denials (3.7%)</Line>
                  <Line smoke>Denial rate increasing 0.3% month-over-month</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Missing Persons Database": {
            password: {
              pw: "enrichment",
              hint: "The name of TG Labs' research facility",
              difficulty: "hard",
              content: <Locked theme="terminal" title="MISSING PERSONS" />
            },
            content: (
              <MaintenanceAccess
                title="[MISSING PERSONS - GREEN ZONE RELATED]"
                deviceModel="Investigation Database"
                deviceId="MISSING-01"
                firmwareVersion="v1.0.0"
                systemStatus="CLASSIFIED"
                notes={[
                  "Unexplained disappearances - Last 3 years",
                  "47 total cases",
                  "TG Labs denies involvement",
                  "Official investigations inconclusive"
                ]}
              >

                <InsetBox title="CASE SUMMARY:">
                  <Line red bold>47 MISSING PERSONS CASES</Line>
                  <Line red>Last seen in Green Zone: 39 (83%)</Line>
                  <Line red>Last seen near Green Zone: 8 (17%)</Line>
                  <Line red>Resolved cases: 0</Line>
                  <Line yellow>Active investigations: 12</Line>
                  <Line yellow>Cold cases: 35</Line>
                </InsetBox>
                <InsetBox title="VICTIM PROFILES - PATTERN ANALYSIS:">
                  <Line yellow>Demographics: Lower-level residents (100%)</Line>
                  <Line yellow>Age range: 18-45 years old</Line>
                  <Line yellow>Financial status: Desperate or in debt (89%)</Line>
                  <Line yellow>Common factor: All responded to "research study" ads</Line>
                  <Line red>Ads traced to shell companies linked to TG Labs</Line>
                </InsetBox>
                <InsetBox title="NOTABLE CASES:">
                  <Line neon bold>CASE #GZ-2024-031 (6 months ago):</Line>
                  <Line smoke>Marcus Chen, Age 28 | Last seen: Service Entrance</Line>
                  <Line smoke>Responded to "paid medical trial" ad | Status: No body found</Line>



                  <Line neon bold>CASE #GZ-2025-008 (2 months ago):</Line>
                  <Line smoke>Sarah Kowalski, Age 34 | Last seen: Near Enrichment Centre</Line>
                  <Line smoke>"Cognitive enhancement study" | Status: Family filed missing persons</Line>



                  <Line neon bold>CASE #GZ-2025-015 (3 weeks ago):</Line>
                  <Line smoke>Diego Martinez, Age 23 | Last seen: Azure Dining (busboy)</Line>
                  <Line smoke>Offered "opportunity" by recruiter | Status: Phone inactive</Line>
                </InsetBox>
                <InsetBox title="INVESTIGATION STATUS:">
                  <Line red bold>C.O.P. INVESTIGATION:</Line>
                  <Line red>Official: "Insufficient evidence of foul play"</Line>
                  <Line red>Cases remain open but inactive</Line>
                  <Line red>TG Labs cooperation limited (corporate lawyers)</Line>



                  <Line yellow bold>COMMUNITY OUTREACH THEORY:</Line>
                  <Line yellow>TG Labs recruiting test subjects from lower levels</Line>
                  <Line yellow>Enrichment Centre conducting unauthorized experiments</Line>
                  <Line yellow>Missing persons either dead or held against will</Line>
                  <Line red>No proof, but pattern too consistent to ignore</Line>
                </InsetBox>
                <InsetBox title="COMMUNITY ALERT:">
                  <Line red bold>DO NOT respond to research study advertisements</Line>
                  <Line red>DO NOT accept "opportunities" from TG Labs recruiters</Line>
                  <Line red>DO NOT enter Enrichment Centre under any circumstances</Line>
                  <Line red>REPORT suspicious recruitment to Community Outreach</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Security Patrol Routes": {
            content: (
              <MaintenanceAccess
                title="[SECURITY PATROL ROUTES]"
                deviceModel="Guard Management System"
                deviceId="PATROL-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Guard schedules and patrol patterns",
                  "42 total security personnel",
                  "4 patrol zones",
                  "Response times: <3 minutes"
                ]}
              >

                <InsetBox title="PATROL STRUCTURE:">
                  <Line cyan>Total security personnel: 42</Line>
                  <Line cyan>Day shift (06:00-18:00): 20 guards</Line>
                  <Line cyan>Night shift (18:00-06:00): 15 guards</Line>
                  <Line cyan>Floating/relief: 7 guards</Line>
                </InsetBox>
                <InsetBox title="PATROL ZONES:">
                  <Line neon bold>ZONE 1 - COMMERCIAL (Levels 212-216):</Line>
                  <Line smoke>6 guards, 15-min rotation | Focus: Shoplifting, disturbances</Line>

                  <Line neon bold>ZONE 2 - WELLNESS (Levels 217-227):</Line>
                  <Line smoke>4 guards, 20-min rotation | Focus: General security, medical</Line>

                  <Line neon bold>ZONE 3 - RESIDENTIAL (Levels 228-237):</Line>
                  <Line smoke>5 guards, 30-min rotation | Focus: Unauthorized access, complaints</Line>

                  <Line neon bold>ZONE 4 - CORPORATE (Levels 238-249):</Line>
                  <Line smoke>10 guards, constant coverage | Focus: Enrichment Centre, espionage</Line>
                </InsetBox>
                <InsetBox title="RESPONSE TIMES:">
                  <Line cyan>Zone 1-2: 2 minutes average</Line>
                  <Line cyan>Zone 3: 3 minutes average</Line>
                  <Line cyan>Zone 4: 1 minute average (priority)</Line>
                  <Line cyan>Emergency (all zones): ~90 seconds</Line>
                </InsetBox>
                <InsetBox title="SHIFT CHANGE VULNERABILITIES:">
                  <Line yellow>18:00 - Day to night transition (10-minute gap)</Line>
                  <Line yellow>06:00 - Night to day transition (10-minute gap)</Line>
                  <Line yellow>Lunch breaks: 12:00-13:00 (reduced coverage)</Line>
                  <Line yellow>Weekend staffing: -20% (budget cuts)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_GREEN_ZONE_COMMANDS;
