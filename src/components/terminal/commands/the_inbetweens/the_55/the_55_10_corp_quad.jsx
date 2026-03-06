import {
  Line,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  CCTV,
  Locked,
  MaintenanceAccess,
  Menu,
  Message,
  PersonnelFile,
  PublicPortal,
} from "@terminal/retcomdevice";

import cctv_image from '@images/the55/corp_quad_cctv.png';

export const THE_55_CORP_QUAD_COMMANDS = {
  "[U214 - U264] Corp Quad": {
    content: (
      <PublicPortal
        name="CORP QUAD"
        tagline="Corporate retail and services"
        network="CORP_QUAD_PUBLIC"
        signalStrength="strong"
        status="✓ OPEN (Limited Hours)"
        statusColor="neon"
        notes={[
          "Corporate retail and services",
          "High-end stores, luxury brands, exclusive access",
          "Lower-level residents restricted during peak hours",
          "Corporate security presence throughout"
        ]}
        theme="corporate"
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

      "Corp Quad Directory": {
        content: (
          <MaintenanceAccess
            title="[CORP QUAD DIRECTORY]"
            deviceModel="Commercial Zone Management"
            deviceId="CORP-DIR-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
          >

            <InsetBox title="ACCESS RESTRICTIONS:">
              <Line yellow bold>TIME-BASED RESTRICTIONS:</Line>
              <Line>Peak hours (10:00-20:00): Upper-level residents priority</Line>
              <Line>Lower-level residents face "random" security checks</Line>
              <Line>Off-peak (20:00-10:00): Open to all stack residents</Line>
              <Line>Some stores require credit checks before entry</Line>
            </InsetBox>
            <InsetBox title="SERVICES AVAILABLE:">
              <Line cyan>• Luxury retail shopping</Line>
              <Line cyan>• Fine dining and cafes</Line>
              <Line cyan>• Professional services (legal, financial)</Line>
              <Line cyan>• Personal care and wellness</Line>
              <Line cyan>• Entertainment and leisure</Line>
              <Line cyan>• Corporate meeting spaces</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Exotique": {
            content: (
              <MaintenanceAccess
                title="[EXOTIQUE]"
                deviceModel="Fashion Boutique"
                deviceId="EXOTIQUE-220"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "High-end fashion boutique",
                  "Designer brands and custom tailoring",
                  "Owner: Madame Vivienne Laurent"
                ]}
              >

                <InsetBox title="ABOUT:">
                  <Line>Luxury fashion store featuring designer brands</Line>
                  <Line>Custom tailoring and personal styling services</Line>
                  <Line>Exclusive collections not available elsewhere in The 55</Line>
                  <Line>Appointment recommended for personal shopping</Line>
                </InsetBox>
                <InsetBox title="FEATURED BRANDS:">
                  <Line neon>• CHROME COUTURE - Cyberwear fashion</Line>
                  <Line neon>• NEON DYNASTY - Neo-Asian luxury</Line>
                  <Line neon>• VOID COLLECTIVE - Minimalist high-end</Line>
                  <Line neon>• GLITCH ATELIER - Experimental fashion</Line>
                  <Line neon>• SYNTH ROYALE - Classic with tech integration</Line>
                </InsetBox>
                <InsetBox title="PRICE RANGES:">
                  <Line cyan>Accessories: 300¤ - 2,000¤</Line>
                  <Line cyan>Ready-to-wear: 1,500¤ - 8,000¤</Line>
                  <Line cyan>Custom tailoring: 3,000¤ - 15,000¤</Line>
                  <Line cyan>Cyberwear fashion: 5,000¤ - 25,000¤</Line>
                  <Line cyan>Exclusive pieces: 10,000¤+</Line>
                </InsetBox>
                <InsetBox title="SERVICES:">
                  <Line neon>• Personal styling (500¤ session)</Line>
                  <Line neon>• Custom fitting and alterations</Line>
                  <Line neon>• Wardrobe consultation (1,000¤)</Line>
                  <Line neon>• Exclusive preview events (invitation only)</Line>
                  <Line neon>• VIP loyalty program (spend 50k¤+ annually)</Line>
                </InsetBox>
                <InsetBox title="CLIENTELE:">
                  <Line>Corporate executives, celebrities, influencers</Line>
                  <Line>Spectral Luxvitae and Green Zone residents</Line>
                  <Line yellow>Lower-level residents often followed by security</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Stadium of Prophets Returned": {
            content: (
              <MaintenanceAccess
                title="[STADIUM OF PROPHETS RETURNED]"
                deviceModel="Religious Facility"
                deviceId="STADIUM-230-235"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Levels 230-235 (6 floors)",
                  "Mega-church facility",
                  "Leader: Prophet Marcus Aurelius Gold",
                  "Seats 5,000+ for services"
                ]}
              >

                <InsetBox title="ABOUT:">
                  <Line>Massive corporate-backed religious organization</Line>
                  <Line>6 floors including worship space, offices, facilities</Line>
                  <Line>Seats 5,000+ for services</Line>
                  <Line>Officially non-denominational, practically prosperity gospel</Line>
                </InsetBox>
                <InsetBox title="LEADERSHIP:">
                  <Line neon bold>PROPHET MARCUS AURELIUS GOLD:</Line>
                  <Line>Charismatic leader, former corporate executive</Line>
                  <Line>Preaches "divine wealth through faith and work"</Line>
                  <Line>Lives in Spectral Luxvitae penthouse</Line>
                  <Line>Net worth estimated at 50+ million credits</Line>
                  <Line yellow>Controversial figure, accused of exploitation</Line>
                </InsetBox>
                <InsetBox title="SERVICES & SCHEDULE:">
                  <Line cyan bold>WORSHIP SERVICES:</Line>
                  <Line cyan>• Sunday Main Service - 10:00 (2,000+ attendance)</Line>
                  <Line cyan>• Wednesday Evening - 19:00 (500+ attendance)</Line>
                  <Line cyan>• Friday "Prosperity Prayer" - 18:00 (800+ attendance)</Line>
                  <Line cyan>• Daily morning prayer - 07:00 (100+ attendance)</Line>



                  <Line cyan bold>PROGRAMS:</Line>
                  <Line cyan>• "Path to Prosperity" seminars (200¤ per session)</Line>
                  <Line cyan>• Business networking events</Line>
                  <Line cyan>• Youth programs and childcare</Line>
                  <Line cyan>• Marriage and family counseling (donation-based)</Line>
                </InsetBox>
                <InsetBox title="FINANCIAL MODEL:">
                  <Line yellow bold>TITHING EXPECTATIONS:</Line>
                  <Line yellow>Members expected to tithe 10% of income</Line>
                  <Line yellow>"Seed offerings" encouraged for blessings (vary widely)</Line>
                  <Line yellow>VIP seating and private sessions cost extra</Line>
                  <Line yellow>Annual revenue estimated at 15+ million credits</Line>
                </InsetBox>
                <InsetBox title="CONTROVERSY:">
                  <Line red bold>COMMUNITY CONCERNS:</Line>
                  <Line red>• Exploits desperate lower-level residents</Line>
                  <Line red>• Promises prosperity that never materializes</Line>
                  <Line red>• Prophet Gold lives lavishly while members struggle</Line>
                  <Line red>• Allegations of financial mismanagement</Line>
                  <Line red>• Some former members claim cult-like behavior</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Prime Convoys VIP Station": {
            content: (
              <MaintenanceAccess
                title="[PRIME CONVOYS VIP STATION]"
                deviceModel="Executive Transit Hub"
                deviceId="CONVOYS-240"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Private transportation service",
                  "Armored vehicles, personal drivers",
                  "Membership-based access"
                ]}
              >

                <InsetBox title="ABOUT:">
                  <Line>Private transportation service for wealthy residents</Line>
                  <Line>Armored vehicles, personal drivers, luxury interiors</Line>
                  <Line>Direct routes to other premium locations in The City</Line>
                  <Line>Membership-based access (expensive)</Line>
                </InsetBox>
                <InsetBox title="VEHICLE OPTIONS:">
                  <Line neon>• Executive Sedan (standard service)</Line>
                  <Line neon>• Armored SUV (high-security)</Line>
                  <Line neon>• Luxury Limousine (special occasions)</Line>
                  <Line neon>• Corporate Shuttle (group transport)</Line>
                  <Line neon>• Air Transport (helicopter, premium locations only)</Line>
                </InsetBox>
                <InsetBox title="MEMBERSHIP TIERS:">
                  <Line cyan>Silver (Basic): 5,000¤/month + 100¤ per ride</Line>
                  <Line cyan>Gold (Priority): 15,000¤/month + 50¤ per ride</Line>
                  <Line cyan>Platinum (Unlimited): 50,000¤/month, unlimited rides</Line>
                </InsetBox>
                <InsetBox title="DESTINATIONS:">
                  <Line>Premium locations throughout The City</Line>
                  <Line>Corporate headquarters and office buildings</Line>
                  <Line>Luxury shopping districts, exclusive clubs</Line>
                  <Line>Private estates and gated communities</Line>
                  <Line yellow>Will NOT transport to lower-class areas</Line>
                </InsetBox>
                <InsetBox title="SECURITY FEATURES:">
                  <Line neon>• Bulletproof glass and armor plating</Line>
                  <Line neon>• Armed drivers (licensed security personnel)</Line>
                  <Line neon>• GPS tracking and panic buttons</Line>
                  <Line neon>• Secure communication systems</Line>
                  <Line neon>• Backup vehicle on standby for emergencies</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Founder's Floral Garden": {
            content: (
              <MaintenanceAccess
                title="[FOUNDER'S FLORAL GARDEN]"
                deviceModel="Botanical Garden"
                deviceId="GARDEN-245-250"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Luxury botanical garden",
                  "Rare and exotic plants",
                  "Director: Dr. Helena Yamamoto"
                ]}
              >

                <InsetBox title="ABOUT:">
                  <Line>6-floor vertical garden and park</Line>
                  <Line>Rare and exotic plants from around the world</Line>
                  <Line>Climate-controlled environments for different species</Line>
                  <Line>Named after stack's original corporate founder</Line>
                </InsetBox>
                <InsetBox title="ADMISSION:">
                  <Line cyan>General admission: 50¤</Line>
                  <Line cyan>Guided tour: 100¤ (90 minutes)</Line>
                  <Line cyan>Private event rental: 5,000¤+ per hour</Line>
                  <Line cyan>Annual membership: 2,000¤ (unlimited)</Line>
                  <Line yellow>Lower-level residents often scrutinized at entry</Line>
                </InsetBox>
                <InsetBox title="AMENITIES:">
                  <Line cyan>• Tea house (reservations required)</Line>
                  <Line cyan>• Photography permitted (no flash)</Line>
                  <Line cyan>• Meditation alcoves and seating areas</Line>
                  <Line cyan>• Gift shop (seeds, books, garden supplies)</Line>
                  <Line cyan>• Educational programs and workshops</Line>
                </InsetBox>
                <InsetBox title="EVENTS:">
                  <Line>Popular venue for weddings and corporate events</Line>
                  <Line>Photography sessions (500¤ per hour)</Line>
                  <Line>Botanical society meetings, children's programs</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Celestial Cuisine": {
            content: (
              <Menu
                title="CELESTIAL CUISINE"
                subtitle="Fine dining restaurant"
                signType="food"
                categories={[
                  {
                    name: "APPETIZERS",
                    items: [
                      { name: "Foie Gras Terrine", price: "45¤", description: "Truffle reduction, brioche" },
                      { name: "Oysters on Ice", price: "60¤", description: "Half dozen, mignonette" },
                      { name: "Tuna Tartare", price: "40¤", description: "Avocado, sesame, wonton" },
                    ],
                  },
                  {
                    name: "MAINS",
                    items: [
                      { name: "Wagyu Beef Tenderloin", price: "120¤", description: "Truffle butter, seasonal vegetables" },
                      { name: "Pan-Seared Sea Bass", price: "85¤", description: "Lemon beurre blanc, asparagus" },
                      { name: "Duck Breast", price: "95¤", description: "Cherry reduction, duck fat potatoes" },
                      { name: "Lobster Thermidor", price: "110¤", description: "Cognac cream, gruyère" },
                    ],
                  },
                  {
                    name: "DESSERTS",
                    items: [
                      { name: "Chocolate Soufflé", price: "25¤", description: "Vanilla ice cream" },
                      { name: "Crème Brûlée", price: "20¤", description: "Fresh berries" },
                      { name: "Tasting Platter", price: "35¤", description: "Chef's selection of 4 desserts" },
                    ],
                  },
                  {
                    name: "WINE",
                    items: [
                      { name: "House Red/White", price: "40¤/bottle" },
                      { name: "Premium Selection", price: "80¤-300¤/bottle" },
                      { name: "Sommelier's Choice", price: "Ask server" },
                    ],
                  },
                ]}
                footer="Reservations strongly recommended | Dress code: Business casual or formal"
              />
            ),
          },

          "The Platinum Club": {
            content: (
              <MaintenanceAccess
                title="[THE PLATINUM CLUB]"
                deviceModel="Private Members Club"
                deviceId="PLATINUM-260"
                firmwareVersion="v1.0.0"
                systemStatus="EXCLUSIVE"
                notes={[
                  "Members-only social club",
                  "~150 members total",
                  "Waiting list: 2+ years"
                ]}
              >

                <InsetBox title="ABOUT:">
                  <Line>Exclusive social club for wealthy and influential residents</Line>
                  <Line>Networking, entertainment, private dining</Line>
                  <Line>Strict membership requirements</Line>
                  <Line>Ultimate status symbol in The 55</Line>
                </InsetBox>
                <InsetBox title="MEMBERSHIP REQUIREMENTS:">
                  <Line red>• Minimum net worth: 1,000,000¤</Line>
                  <Line red>• Two current member sponsors required</Line>
                  <Line red>• Background check and interview</Line>
                  <Line red>• Initiation fee: 100,000¤</Line>
                  <Line red>• Annual dues: 50,000¤</Line>
                  <Line yellow>Waiting list: 2+ years</Line>
                </InsetBox>
                <InsetBox title="FACILITIES (Members only):">
                  <Line neon>• Private dining rooms (reservation required)</Line>
                  <Line neon>• Bar and lounge (premium spirits)</Line>
                  <Line neon>• Cigar room (rare collection)</Line>
                  <Line neon>• Library and reading room</Line>
                  <Line neon>• Business center (secure communications)</Line>
                  <Line neon>• Game room (poker, billiards)</Line>
                  <Line neon>• Spa and wellness center</Line>
                  <Line neon>• Rooftop terrace</Line>
                </InsetBox>
                <InsetBox title="EVENTS:">
                  <Line cyan>• Quarterly galas and fundraisers</Line>
                  <Line cyan>• Monthly networking dinners</Line>
                  <Line cyan>• Guest speaker series (industry leaders)</Line>
                  <Line cyan>• Private concerts and performances</Line>
                  <Line cyan>• Investment opportunity presentations</Line>
                </InsetBox>
                <InsetBox title="REPUTATION:">
                  <Line yellow>Symbol of extreme wealth inequality</Line>
                  <Line yellow>Where major business deals happen behind closed doors</Line>
                  <Line yellow>Rumors of political manipulation and corruption</Line>
                  <Line red>Community Outreach considers it emblematic of The 55's problems</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "Hours & Restrictions": {
        content: (
          <MaintenanceAccess
            title="[CORP QUAD OPERATING HOURS]"
            deviceModel="Access Control System"
            deviceId="HOURS-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Access schedules and restrictions",
              "Time-based discrimination enforced",
              "20+ security guards on peak hours"
            ]}
          >

            <InsetBox title="GENERAL HOURS:">
              <Line cyan>Retail stores: 10:00 - 22:00</Line>
              <Line cyan>Restaurants: 11:00 - 23:00 (varies)</Line>
              <Line cyan>Services: 09:00 - 18:00 (weekdays)</Line>
              <Line cyan>Stadium of Prophets: See schedule</Line>
              <Line cyan>Gardens: 08:00 - 20:00</Line>
            </InsetBox>
            <InsetBox title="ACCESS RESTRICTIONS:">
              <Line yellow bold>UNOFFICIAL DISCRIMINATION:</Line>
              <Line yellow>Peak hours (10:00-20:00): Lower-level residents face scrutiny</Line>
              <Line yellow>Security "randomly" stops and questions non-wealthy visitors</Line>
              <Line yellow>Some stores require credit checks before entry</Line>
              <Line yellow>Guards may ask residents to leave if "suspicious"</Line>



              <Line cyan bold>OFF-PEAK HOURS (20:00-10:00):</Line>
              <Line cyan>Reduced security presence</Line>
              <Line cyan>More welcoming to all stack residents</Line>
              <Line cyan>Many premium stores closed (but restaurants open)</Line>
            </InsetBox>
            <InsetBox title="DRESS CODE:">
              <Line neon>Business casual minimum for most establishments</Line>
              <Line neon>Some venues require formal dress (The Platinum Club)</Line>
              <Line neon>Athletic wear discouraged except at Apex Fitness</Line>
              <Line yellow>Visible poverty (torn clothes, etc.) may draw security</Line>
            </InsetBox>
            <InsetBox title="SECURITY PRESENCE:">
              <Line red>20+ guards on duty during peak hours</Line>
              <Line red>10+ guards during off-peak hours</Line>
              <Line red>Response time: ~3 minutes anywhere in Corp Quad</Line>
              <Line red>Authorized to detain and eject "troublemakers"</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Personnel Directory": {
        content: (
          <MaintenanceAccess
            title="[CORP QUAD PERSONNEL]"
            deviceModel="Staff Registry"
            deviceId="PERSONNEL-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Notable staff and business owners",
              "Management, security, and key figures"
            ]}
          >

            <InsetBox title="MANAGEMENT & SECURITY:">
              <Line neon>• Richard Sterling - Corp Quad Administrator</Line>
              <Line neon>• Lieutenant James Barrett - Security Chief</Line>
            </InsetBox>
            <InsetBox title="BUSINESS OWNERS:">
              <Line neon>• Madame Vivienne Laurent - Exotique Owner</Line>
              <Line neon>• Prophet Marcus Aurelius Gold - Stadium Leader</Line>
              <Line neon>• Chef Antoine Rousseau - Celestial Cuisine</Line>
            </InsetBox>
            <InsetBox title="SERVICE STAFF:">
              <Line neon>• Isabella Chen - Prime Convoys Manager</Line>
              <Line neon>• Dr. Helena Yamamoto - Founder's Garden Director</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Richard Sterling": {
            content: (
              <PersonnelFile
                employeeId="CQ-ADM-001"
                name="Richard Sterling"
                age={58}
                position="Corp Quad Administrator"
                department="Management"
                hireDate="12 years ago"
                supervisor="Corporate Consortium (off-site)"
                clearanceLevel={5}
                district="Corp Quad"
                performance={89}
                notes={[
                  "Oversees all Corp Quad operations and businesses",
                  "Former corporate executive, connections to multiple corps",
                  "Prioritizes profits and wealthy clientele",
                  "Views lower-level residents as 'bad for business'",
                  "Instructs security to discourage their presence",
                  "Receives bonuses based on revenue growth"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Lieutenant James Barrett": {
            content: (
              <PersonnelFile
                employeeId="CQ-SEC-001"
                name="Lieutenant James Barrett"
                age={44}
                position="Security Chief"
                department="Corporate Security"
                hireDate="8 years ago"
                supervisor="Richard Sterling"
                clearanceLevel={4}
                district="Corp Quad"
                performance={86}
                notes={[
                  "Commands 30+ security personnel in Corp Quad",
                  "Former military, disciplined approach",
                  "Enforces 'discourage lower-level residents' policy",
                  "Personally uncomfortable with discrimination but follows orders",
                  "Treats genuine threats seriously, ignores shopping-while-poor",
                  "Could be convinced to look the other way for right cause"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Prophet Marcus Aurelius Gold": {
            content: (
              <PersonnelFile
                employeeId="CQ-REL-001"
                name="Prophet Marcus Aurelius Gold"
                age={51}
                position="Religious Leader"
                department="Stadium of Prophets Returned"
                hireDate="7 years ago (founded church)"
                supervisor="None (self-appointed)"
                clearanceLevel={3}
                district="Corp Quad (lives in Spectral Luxvitae)"
                performance={null}
                notes={[
                  "Charismatic mega-church leader worth 50+ million",
                  "Former corporate executive turned religious entrepreneur",
                  "Preaches prosperity gospel, lives lavishly",
                  "Exploits desperate lower-level residents for tithes",
                  "Multiple accusations of financial impropriety (unproven)",
                  "Politically connected, untouchable by local authorities"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Madame Vivienne Laurent": {
            content: (
              <PersonnelFile
                employeeId="CQ-RET-005"
                name="Madame Vivienne Laurent"
                age={47}
                position="Boutique Owner"
                department="Exotique Fashion"
                hireDate="5 years ago (opened store)"
                supervisor="None (owner)"
                clearanceLevel={2}
                district="Corp Quad"
                performance={null}
                notes={[
                  "Owner of Exotique high-end fashion boutique",
                  "Impeccable taste, eye for emerging designers",
                  "Connections to fashion industry worldwide",
                  "Treats all customers with respect (unlike some Corps)",
                  "Will serve lower-level residents if they have credits",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Chef Antoine Rousseau": {
            content: (
              <PersonnelFile
                employeeId="CQ-FD-012"
                name="Chef Antoine Rousseau"
                age={52}
                position="Head Chef & Owner"
                department="Celestial Cuisine"
                hireDate="9 years ago (opened restaurant)"
                supervisor="None (owner)"
                clearanceLevel={2}
                district="Corp Quad"
                performance={null}
                notes={[
                  "Acclaimed chef, multiple culinary awards",
                  "Perfectionist, demands excellence from staff",
                  "Restaurant consistently rated among The 55's best",
                  "Personally trained in Paris, New York, Tokyo",
                  "Treats kitchen staff poorly (high turnover)",
                  "Secretly struggling with gambling addiction"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Dr. Helena Yamamoto": {
            content: (
              <PersonnelFile
                employeeId="CQ-BOT-003"
                name="Dr. Helena Yamamoto"
                age={39}
                position="Garden Director"
                department="Founder's Floral Garden"
                hireDate="6 years ago"
                supervisor="Richard Sterling"
                clearanceLevel={3}
                district="Corp Quad"
                performance={92}
                notes={[
                  "Botanist and horticulturist, PhD in plant biology",
                  "Passionate about plants and conservation",
                  "Maintains rare and exotic species collection",
                  "Frustrated with Corp Quad's exclusivity policies",
                  "Wants garden accessible to all residents (denied)",
                  "Secretly provides seeds and plants to Eco Hall (Capsule Closets)"
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      "Corp Services": {
        password: {
          pw: "corporate",
          hint: "What type of businesses are in Corp Quad",
          difficulty: "easy",
          content: <Locked theme="terminal" title="CORP SERVICES" />
        },
        content: (
          <Message
            title="CORP QUAD SERVICES"
            message="BUSINESS ACCESS GRANTED"
            note="Corporate systems - Authorized personnel only"
            theme="corporate"
          />
        ),
        related_commands: {
          "Revenue Reports": {
            content: (
              <MaintenanceAccess
                title="[CORP QUAD REVENUE REPORTS]"
                deviceModel="Financial Tracking System"
                deviceId="REVENUE-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Financial performance - Last 30 days",
                  "Total revenue: 4,850,000¤",
                  "Growth vs previous month: +3.2%",
                  "Year-over-year growth: +12.4%"
                ]}
              >

                <InsetBox title="TOTAL REVENUE:">
                  <Line neon bold>MONTHLY TOTAL: 4,850,000¤</Line>
                  <Line smoke>Average per business: 485,000¤</Line>
                  <Line smoke>Growth vs. previous month: +3.2%</Line>
                  <Line smoke>Year-over-year growth: +12.4%</Line>
                </InsetBox>
                <InsetBox title="TOP PERFORMERS:">
                  <Line cyan>Stadium of Prophets: 890,000¤ (18%)</Line>
                  <Line cyan>The Platinum Club: 720,000¤ (15%)</Line>
                  <Line cyan>Prime Convoys: 650,000¤ (13%)</Line>
                  <Line cyan>Celestial Cuisine: 480,000¤ (10%)</Line>
                  <Line cyan>Exotique: 420,000¤ (9%)</Line>
                </InsetBox>
                <InsetBox title="CUSTOMER DEMOGRAPHICS BY RESIDENCE:">
                  <Line yellow>Spectral Luxvitae: 45% of revenue</Line>
                  <Line yellow>Green Zone: 30% of revenue</Line>
                  <Line yellow>Corp Quad residents: 15% of revenue</Line>
                  <Line yellow>Other upper levels: 8% of revenue</Line>
                  <Line yellow>Lower levels: 2% of revenue</Line>
                  <Line smoke>Lower-level residents contribute minimal revenue despite population</Line>
                </InsetBox>
                <InsetBox title="TRENDS:">
                  <Line neon bold>GROWTH AREAS:</Line>
                  <Line cyan>• Luxury services (+8% this quarter)</Line>
                  <Line cyan>• Fine dining (+6% this quarter)</Line>
                  <Line cyan>• Private memberships (+4% this quarter)</Line>



                  <Line red bold>CONCERNS:</Line>
                  <Line red>• Lower-level customer traffic declining (-15%)</Line>
                  <Line red>• Increasing complaints about discrimination</Line>
                  <Line red>• Community Outreach organizing boycotts</Line>
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
                  "Corp Quad incidents - Last 30 days",
                  "Total incidents: 47",
                  "Ejections/removals: 23 (49%)",
                  "100% of ejected individuals were lower-level residents"
                ]}
              >

                <InsetBox title="INCIDENT SUMMARY:">
                  <Line cyan>Total incidents: 47</Line>
                  <Line cyan>Ejections/removals: 23 (49%)</Line>
                  <Line cyan>Shoplifting: 8 (17%)</Line>
                  <Line cyan>Disturbances: 12 (26%)</Line>
                  <Line cyan>Medical emergencies: 3 (6%)</Line>
                  <Line cyan>Other: 1 (2%)</Line>
                </InsetBox>
                <InsetBox title="EJECTIONS BREAKDOWN (23 total):">
                  <Line red>"Suspicious behavior": 14 incidents (61%)</Line>
                  <Line red>Dress code violations: 5 incidents (22%)</Line>
                  <Line red>Aggressive panhandling: 3 incidents (13%)</Line>
                  <Line red>Actual criminal activity: 1 incident (4%)</Line>



                  <Line yellow bold>DEMOGRAPHICS OF EJECTED INDIVIDUALS:</Line>
                  <Line red>100% were lower-level residents</Line>
                  <Line red>0% were Green Zone or higher residents</Line>
                  <Line yellow>Community Outreach claims systematic discrimination (accurate)</Line>
                </InsetBox>
                <InsetBox title="NOTABLE INCIDENTS:">
                  <Line neon bold>INCIDENT #CQ-2026-034 (5 days ago):</Line>
                  <Line>Location: Exotique boutique</Line>
                  <Line>Type: Shoplifting attempt</Line>
                  <Line>Lower-level resident attempted to steal designer jacket (2,800¤)</Line>
                  <Line smoke>Resolution: Detained, handed to C.O.P., prosecuted</Line>



                  <Line neon bold>INCIDENT #CQ-2026-041 (2 days ago):</Line>
                  <Line>Location: Stadium of Prophets</Line>
                  <Line>Type: Disturbance</Line>
                  <Line>Former member disrupted service, accused Prophet Gold of fraud</Line>
                  <Line smoke>Resolution: Ejected, banned from premises</Line>
                </InsetBox>
                <InsetBox title="DISCRIMINATION COMPLAINTS:">
                  <Line yellow bold>FILED COMPLAINTS (Last 30 days):</Line>
                  <Line yellow>12 formal complaints to Stack Command</Line>
                  <Line yellow>All from lower-level residents</Line>
                  <Line yellow>Alleging unfair treatment and discrimination</Line>
                  <Line red>Management response: "Security exercising reasonable discretion"</Line>
                  <Line red>Community Outreach documenting incidents for lawsuit</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Tenant Leases": {
            password: {
              pw: "revenue",
              hint: "What businesses generate",
              difficulty: "medium",
              content: <Locked theme="terminal" title="TENANT LEASES" />
            },
            content: (
              <MaintenanceAccess
                title="[CORP QUAD TENANT LEASES]"
                deviceModel="Property Management System"
                deviceId="LEASES-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Business agreements and rent structure",
                  "All pay base rent + percentage of revenue",
                  "Corporate Consortium owns all property"
                ]}
              >

                <InsetBox title="LEASE STRUCTURE:">
                  <Line>All businesses pay base rent + percentage of revenue</Line>
                  <Line>Premium locations command higher rates</Line>
                  <Line>Long-term leases (5-10 years standard)</Line>
                  <Line>Corporate Consortium owns all property</Line>
                </InsetBox>
                <InsetBox title="TOTAL RENTAL INCOME:">
                  <Line neon bold>MONTHLY REVENUE FROM LEASES:</Line>
                  <Line cyan>Base rent (all tenants): 280,000¤</Line>
                  <Line cyan>Revenue share (all tenants): ~420,000¤ average</Line>
                  <Line cyan>Total landlord income: ~700,000¤/month</Line>
                  <Line cyan>Annual: ~8,400,000¤</Line>
                </InsetBox>
                <InsetBox title="LEASE VIOLATIONS:">
                  <Line yellow>• Celestial Cuisine behind on rent (2 months, negotiating)</Line>
                  <Line yellow>• Small boutique (Level 218) closing (lease termination)</Line>
                  <Line yellow>• Stadium under investigation for tax issues (ongoing)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Security Patrol Schedules": {
            content: (
              <MaintenanceAccess
                title="[SECURITY PATROL SCHEDULES]"
                deviceModel="Guard Management System"
                deviceId="PATROL-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Guard assignments and coverage",
                  "30 total security personnel",
                  "Response times: <3 minutes"
                ]}
              >

                <InsetBox title="SHIFT STRUCTURE:">
                  <Line cyan>Day shift (08:00-16:00): 12 guards</Line>
                  <Line cyan>Evening shift (16:00-00:00): 10 guards</Line>
                  <Line cyan>Night shift (00:00-08:00): 8 guards</Line>
                  <Line cyan>Total personnel: 30 guards</Line>
                </InsetBox>
                <InsetBox title="RESPONSE TIMES:">
                  <Line cyan>Zone A: 2-3 minutes</Line>
                  <Line cyan>Zone B: 2-4 minutes</Line>
                  <Line cyan>Zone C: 1-2 minutes (priority)</Line>
                  <Line cyan>Emergency (all zones): ~90 seconds</Line>
                </InsetBox>
                <InsetBox title="KNOWN SECURITY GAPS:">
                  <Line yellow>Shift changes (08:00, 16:00, 00:00) - 10 minute gaps</Line>
                  <Line yellow>Lunch breaks reduce coverage by 30%</Line>
                  <Line yellow>Night shift (00:00-08:00) minimal staffing</Line>
                  <Line yellow>Service corridors rarely patrolled</Line>
                  <Line yellow>Rooftop and emergency exits not monitored constantly</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_CORP_QUAD_COMMANDS;
