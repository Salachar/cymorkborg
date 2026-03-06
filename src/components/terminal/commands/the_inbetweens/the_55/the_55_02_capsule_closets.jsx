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

import cctv_image from '@images/the55/capsules_cctv.png';

export const THE_55_CAPSULE_CLOSETS_COMMANDS = {
  "[U007 - U050] Capsule Closets": {
    content: (
      <PublicPortal
        name="CAPSULE CLOSETS"
        tagline="Affordable housing in The 55"
        network="CAPSULE_RESIDENT_NET"
        signalStrength="weak"
        status="ALWAYS OPEN"
        statusColor="neon"
        notes={[
          "Coffin-sized rooms stacked floor to ceiling",
          "Thousands of residents in customized capsules",
          "Rent starts at 100¤ per month",
          "Some organized into small communities"
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

      "Building Directory": {
        content: (
          <PublicPortal
            name="ALLIANSEN ARMS DIRECTORY"
            tagline="800 residential units"
            network="BUILDING_INTERCOM"
            signalStrength="medium"
            status="✓ PUBLIC DIRECTORY"
            statusColor="cyan"
            notes={[
              "Ring unit buzzer for contact",
              "Building management: Extension 100",
              "782 units occupied (98%)",
              "Community Board: Floor 64"
            ]}
            theme="corporate"
          />
        ),
        related_commands: {
          "The Circuit Witch": {
            content: (
              <Tenet
                id="CAP-27-89"
                name="Circuit Witch - Fortune Teller"
                unit="Capsule 27-89"
                building="Capsule Closets"
                moveInDate="4 years ago"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Divination & prophecy services. 75¤ + 1 piece of tech (sacrificed in ritual). Ring for appointment."
              />
            ),
          },

          "sMUTT": {
            content: (
              <Tenet
                id="CAP-19-42"
                name="sMUTT - Hacker for Hire"
                unit="Capsule 19-42"
                building="Capsule Closets"
                moveInDate="2 years ago"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Net jobs, corp infiltration. Discount if you provide rare data/vids. Contact via message."
              />
            ),
          },

          "December": {
            content: (
              <Tenet
                id="CAP-33-156"
                name="December - Mercenary"
                unit="Capsule 33-156"
                building="Capsule Closets"
                moveInDate="1 year ago"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Wetwork. Budget rates. Discounts for jobs targeting corpos. Ring for pricing."
              />
            ),
          },

          "Ibrakirre Gant": {
            content: (
              <Tenet
                id="CAP-41-203"
                name="I. Gant"
                unit="Capsule 41-203"
                building="Capsule Closets"
                moveInDate="6 months ago"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Ex-Kaytell employee. Selling insider info (verify authenticity yourself)."
              />
            ),
          },

          "Sim-K-One": {
            content: (
              <Tenet
                id="CAP-22-78"
                name="Sim-K-One - Streamer"
                unit="Capsule 22-78"
                building="Capsule Closets"
                moveInDate="3 years ago"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Daily life streamer. Follow @SimKOne! Always looking for viral content - collabs welcome!"
              />
            ),
          },

          "Calamity Coda": {
            content: (
              <Tenet
                id="CAP-38-91"
                name="Calamity Coda"
                unit="Capsule 38-91"
                building="Capsule Closets"
                moveInDate="4 months ago"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Driver for hire. Will join any job if vehicles involved. Need to earn transport out of city."
              />
            ),
          },

          "Maxus Tallard": {
            content: (
              <Tenet
                id="CAP-45-167"
                name="M. Tallard"
                unit="Capsule 45-167"
                building="Capsule Closets"
                moveInDate="8 months ago"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Claims to be cloned CEO. Story varies. Ring at your own risk."
              />
            ),
          },

          "Cooper": {
            content: (
              <Tenet
                id="CAP-31-122"
                name="Cooper - Local Information"
                unit="Capsule 31-122"
                building="Capsule Closets"
                moveInDate="5 years ago"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Knows everyone's business. Free gossip/info. Friendly. Never seems to sleep."
              />
            ),
          },

          "Way-High": {
            content: (
              <Tenet
                id="CAP-29-54"
                name="Way-High - Crash Journalist"
                unit="Capsule 29-54"
                building="Capsule Closets"
                moveInDate="2 years ago"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Vehicle crash journalist. Buying crash footage. Selling investigative services."
              />
            ),
          },

          "Cell Damage": {
            content: (
              <Tenet
                id="CAP-36-198"
                name="Cell Damage - Fixer"
                unit="Capsule 36-198"
                building="Capsule Closets"
                moveInDate="4 years ago"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Anarchist fixer. Arranging meetings, jobs, intros. Anti-corpo jobs preferred."
              />
            ),
          },

          "Gray Jacob": {
            content: (
              <Tenet
                id="CAP-48-231"
                name="Gray Jacob"
                unit="Capsule 48-231"
                building="Capsule Closets"
                status="ACTIVE"
                intercomEnabled={true}
                notes="AMNESIA CASE. Only remembers memes. Friendly but confused. Help appreciated."
              />
            ),
          },
        }
      },

      "The Shades": {
        content: (
          <MaintenanceAccess
            title="[THE SHADES - CLONE COMMUNITY]"
            deviceModel="Community Network"
            deviceId="SHADES-FLOOR-23"
            firmwareVersion="v1.0.0"
            systemStatus="ACTIVE"
            notes={[
              "Floor 23",
              "Escaped clone collective",
              "12 members total",
              "All clones of pop-star 'Shade'",
              "Modified capsule cluster"
            ]}
          >
            <InsetBox title="ABOUT:">
              <Line>Community of dozen escaped clones</Line>
              <Line>Originally used as organ farms or body doubles</Line>
              <Line>All clones of pop-star "Shade" (various generations)</Line>
              <Line>Living together in modified capsule cluster</Line>
            </InsetBox>
            <InsetBox title="COMMUNITY STRUCTURE:">
              <Line cyan>12 members total</Line>
              <Line cyan>Ages: 3 to 8 years (accelerated growth)</Line>
              <Line cyan>Share resources, memories, and identity</Line>
              <Line cyan>Extremely protective of each other</Line>
            </InsetBox>
            <InsetBox title="NOTABLE DETAILS:">
              <Line yellow>Original "Shade" unaware of their existence</Line>
              <Line yellow>Clones fear discovery and reclamation</Line>
              <Line yellow>Some possess fragments of Shade's memories</Line>
              <Line smoke>Occasionally perform together (wearing masks)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Remote Hall": {
        content: (
          <MaintenanceAccess
            title="[REMOTE HALL - UPLOAD COMMUNITY]"
            deviceModel="Upload Network"
            deviceId="REMOTE-FLOOR-35"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Floor 35",
              "Uploaded consciousness collective",
              "6 uploaded residents active",
              "Bodies maintained in capsules",
              "Residents operate remotely"
            ]}
          >

            <InsetBox title="ABOUT:">
              <Line>Several capsules modified for uploaded residents</Line>
              <Line>Consciousness uploaded to drones, machines, hardware</Line>
              <Line>Bodies maintained in capsules (life support)</Line>
              <Line>Residents operate remotely via various platforms</Line>
            </InsetBox>
            <InsetBox title="COMMUNITY MEMBERS (6 active):">
              <Line cyan>• Former corpo exec (now surveillance drone)</Line>
              <Line cyan>• Elderly woman (now service robot)</Line>
              <Line cyan>• Accident victim (now vehicle AI)</Line>
              <Line cyan>• Hacker (distributed across multiple terminals)</Line>
              <Line cyan>• Artist (now hologram projection system)</Line>
              <Line cyan>• Unknown individual (maintenance bot)</Line>
            </InsetBox>
            <InsetBox title="SERVICES:">
              <Line neon>Community offers remote work services:</Line>
              <Line neon>• Surveillance</Line>
              <Line neon>• Delivery</Line>
              <Line neon>• Data processing</Line>
              <Line smoke>Payment goes to maintain life support systems</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "The Serpent's Nest": {
        content: (
          <MaintenanceAccess
            title="[THE SERPENT'S NEST - VIRID VIPERS]"
            deviceModel="Gang Territory"
            deviceId="VIPERS-FLOOR-17"
            firmwareVersion="v1.0.0"
            systemStatus="CONTROLLED"
            notes={[
              "Floor 17",
              "Entire floor occupied by Virid Vipers gang",
              "~30 active gang members",
              "Act as couriers and security",
              "Leader: Jade Boomslang"
            ]}
          >

            <InsetBox title="ABOUT:">
              <Line>Entire floor occupied by Virid Vipers gang</Line>
              <Line>Act as couriers and security for local residents</Line>
              <Line>Fiercely protective of Capsule Closets community</Line>
            </InsetBox>
            <InsetBox title="SERVICES & RATES:">
              <Line cyan>Package delivery: 20¤ - 50¤</Line>
              <Line cyan>Personal security: 100¤ per day</Line>
              <Line cyan>Bodyguard work: 300¤ per job</Line>
              <Line cyan>Intimidation services: 150¤</Line>
              <Line cyan>Smuggling (small items): Negotiable</Line>
            </InsetBox>
            <InsetBox title="GANG NOTES:">
              <Line neon>Leader: Jade Boomslang</Line>
              <Line neon>Members: ~30 active gang members</Line>
              <Line smoke>Relatively honorable - keep their word</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Eco Hall": {
        content: (
          <MaintenanceAccess
            title="[ECO HALL - COMMUNITY GARDENS]"
            deviceModel="Agricultural Network"
            deviceId="ECO-FLOOR-40"
            firmwareVersion="v1.0.0"
            systemStatus="GROWING"
            notes={[
              "Floor 40",
              "Fresh produce cultivation",
              "Dozens of capsules converted to planters",
              "Gardeners sleep on floor",
              "Water redirection (technically illegal)"
            ]}
          >

            <InsetBox title="ABOUT:">
              <Line>Few dozen capsules converted to planters</Line>
              <Line>Growing fresh fruit and vegetables</Line>
              <Line>Maintained by residents with redirected water</Line>
              <Line>Gardeners sleep on floor (no capsule space)</Line>
            </InsetBox>
            <InsetBox title="PRODUCE AVAILABLE:">
              <Line cyan>Tomatoes: 5¤ per kg</Line>
              <Line cyan>Lettuce: 8¤ per head</Line>
              <Line cyan>Peppers: 6¤ per kg</Line>
              <Line cyan>Strawberries (rare): 20¤ per 100g</Line>
              <Line cyan>Herbs (various): 3¤ per bunch</Line>
            </InsetBox>
            <InsetBox title="COMMUNITY IMPACT:">
              <Line neon>Provides fresh food to hundreds of residents</Line>
              <Line neon>Reduces dependence on synth-food</Line>
              <Line neon>Gardeners accept volunteers and donations</Line>
              <Line yellow>Water redirection technically illegal</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Capsule Maintenance": {
        password: {
          pw: "closets",
          hint: "What the capsule units are called (second word)",
          difficulty: "easy",
          content: <Locked theme="terminal" title="CAPSULE MAINTENANCE" />
        },
        content: (
          <Message
            title="CAPSULE CLOSETS MAINTENANCE"
            message="MAINTENANCE ACCESS GRANTED"
            note="Building systems - Authorized personnel only"
            theme="limeade"
          />
        ),
        related_commands: {
          "Resident Personnel Files": {
            content: (
              <MaintenanceAccess
                title="[CAPSULE CLOSETS RESIDENT DIRECTORY]"
                deviceModel="Residential Management System"
                deviceId="CAPSULE-DIR-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "6,240 total capsule units",
                  "5,847 occupied (94%)",
                  "361 vacant (6%)",
                  "32 sealed/quarantined (0.5%)"
                ]}
              >

                <InsetBox title="COMMUNITY NETWORKS:">
                  <Line cyan>• Eco Hall - Fresh produce gardens</Line>
                  <Line cyan>• The Shades - Escaped clone community</Line>
                  <Line cyan>• Remote Hall - Uploaded consciousness</Line>
                  <Line cyan>• The Serpent's Nest - Virid Vipers gang</Line>
                </InsetBox>
                <InsetBox title="SEALED/QUARANTINED UNITS:">
                  <Line red>• Capsule 13-33 - Two Cy-raging menaces imprisoned</Line>
                  <Line red>• Capsule 43-103 - Ghost containment</Line>
                  <Line red>• Capsule 18-367 - G0 infection (sealed)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "The Circuit Witch": {
                content: (
                  <PersonnelFile
                    employeeId="CAPSULE-27-89"
                    name="The Circuit Witch"
                    occupation="Fortune Teller / Diviner"
                    joinDate="Resident for 4 years"
                    notes={[
                      "Gives portents, prophecies, and divination",
                      "Cost: 75¤ and one piece of tech (to be sacrificed in ritual)",
                      "Capsule heavily customized with occult symbols and wiring",
                      "Tech sacrifice is destroyed during reading (no returns)",
                      "Accuracy varies - some swear by her, others call it theater",
                      "Rumored to have actual nano-abilities (unconfirmed)"
                    ]}
                  />
                ),
              },

              "sMUTT": {
                content: (
                  <PersonnelFile
                    employeeId="CAPSULE-19-42"
                    name="sMUTT"
                    age={26}
                    occupation="Hacker for Hire"
                    joinDate="Resident for 2 years"
                    notes={[
                      "Skilled hacker with impressive track record",
                      "Discount offered if you provide rare data/vids",
                      "Specializes in corporate system infiltration",
                      "Works primarily on Net jobs, rarely leaves capsule",
                      "Known to trade in blackmail material and surveillance footage",
                      "Has connections to several local gangs (neutral broker)"
                    ]}
                  />
                ),
              },

              "December": {
                content: (
                  <PersonnelFile
                    employeeId="CAPSULE-33-156"
                    name="December"
                    age={34}
                    occupation="Mercenary"
                    joinDate="Resident for 1 year"
                    notes={[
                      "Cheap mercenary work, budget-friendly rates",
                      "Specializes in wetwork against wealthy targets",
                      "Loves killing rich folks - will discount jobs targeting corpos",
                      "Reputation for efficiency but messy methods",
                      "Not subtle - prefers direct confrontation",
                      "Banned from Corp Quad after 'incident' (details sealed)"
                    ]}
                  />
                ),
              },

              "Ibrakirre Gant": {
                content: (
                  <PersonnelFile
                    employeeId="CAPSULE-41-203"
                    name="Ibrakirre Gant"
                    age={47}
                    occupation="Ex-Corporate Executive"
                    joinDate="Resident for 6 months"
                    notes={[
                      "Claims to have a way into Kaytell Makers orbital HQ",
                      "Fired from mid-level position (embezzlement suspected)",
                      "Desperately trying to sell 'insider information'",
                      "Information may be outdated or fabricated",
                      "Paranoid - believes Kaytell is tracking him",
                      "Owes money to multiple creditors in The 55"
                    ]}
                  />
                ),
              },

              "Sim-K-One": {
                content: (
                  <PersonnelFile
                    employeeId="CAPSULE-22-78"
                    name="Sim-K-One"
                    age={22}
                    occupation="Streamer"
                    joinDate="Resident for 3 years"
                    notes={[
                      "Loquacious streamer with very few fans",
                      "Streams daily life in capsule (usually boring)",
                      "Desperate for viral content and recognition",
                      "Will do almost anything for views and donations",
                      "Known to exaggerate or fabricate stories for attention",
                      "Actually friendly and helpful if not streaming"
                    ]}
                  />
                ),
              },

              "Calamity Coda": {
                content: (
                  <PersonnelFile
                    employeeId="CAPSULE-38-91"
                    name="Calamity Coda"
                    age={19}
                    occupation="Stranded Corporate Brat"
                    joinDate="Resident for 4 months"
                    notes={[
                      "Daughter of wealthy corporate family, currently estranged",
                      "In desperate need of transportation/vehicles",
                      "Will join anyone for a job if there's a vehicle involved",
                      "Skilled driver (cars, bikes, anything with wheels)",
                      "Trying to earn enough to leave The City entirely",
                      "Not used to poverty - struggles with capsule life"
                    ]}
                  />
                ),
              },

              "Maxus Tallard": {
                content: (
                  <PersonnelFile
                    employeeId="CAPSULE-45-167"
                    name="Maxus Tallard"
                    age={52}
                    joinDate="Resident for 8 months"
                    notes={[
                      "Swears he's a cloned CEO of major corporation",
                      "Story changes depending on who asks",
                      "May be delusional or may be telling the truth",
                      "Has detailed knowledge of corporate operations",
                      "Paranoid about being 'retired' by original",
                      "Occasionally receives mysterious packages"
                    ]}
                  />
                ),
              },

              "Cooper": {
                content: (
                  <PersonnelFile
                    employeeId="CAPSULE-31-122"
                    name="Cooper"
                    occupation="Local Gossip"
                    joinDate="Resident for 5 years"
                    notes={[
                      "Knows everyone's business in Capsule Closets",
                      "Gathering information for unknown purpose",
                      "Friendly and helpful - provides gossip for free",
                      "May be corpo spy or independent agent",
                      "Never sleeps (residents assume insomnia)"
                    ]}
                  />
                ),
              },

              "Way-High": {
                content: (
                  <PersonnelFile
                    employeeId="CAPSULE-29-54"
                    name="Way-High"
                    age={28}
                    occupation="Streamer / Journalist"
                    joinDate="Resident for 2 years"
                    notes={[
                      "Streamer and amateur journalist",
                      "Exclusively covers car crashes and vehicle incidents",
                      "First responder to any traffic accident in The 55",
                      "Maintains database of crash footage (sellable)",
                      "Morbid fascination with vehicular destruction",
                      "Actually good investigative skills when motivated"
                    ]}
                  />
                ),
              },

              "Cell Damage": {
                content: (
                  <PersonnelFile
                    employeeId="CAPSULE-36-198"
                    name="Cell Damage"
                    age={31}
                    occupation="Sex Worker / Fixer"
                    joinDate="Resident for 4 years"
                    notes={[
                      "Anarchist sex worker and fixer",
                      "Well-connected throughout The 55",
                      "Can arrange meetings, jobs, and introductions",
                      "Actively working against corporate interests",
                      "Member of underground resistance networks",
                      "Trusted by locals, hated by corpos"
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

              "Gray Jacob": {
                content: (
                  <PersonnelFile
                    employeeId="CAPSULE-48-231"
                    name="Gray Jacob"
                    joinDate="Resident for unknown duration"
                    notes={[
                      "Only remembers recent memes and viral content",
                      "Total amnesia about everything else",
                      "Can recite entire meme timelines verbatim",
                      "No memory of personal history or identity",
                      "Friendly but deeply confused about own existence",
                      "Medical scans show unusual neural patterns"
                    ]}
                  />
                ),
              },
            },
          },

          "Sealed Units": {
            content: (
              <MaintenanceAccess
                title="[SEALED/QUARANTINED CAPSULES]"
                deviceModel="Quarantine Management"
                deviceId="SEALED-UNITS-01"
                firmwareVersion="v1.0.0"
                systemStatus="MONITORING"
                notes={[
                  "32 units currently sealed",
                  "Various threat levels",
                  "24/7 monitoring on critical units",
                  "Breach protocols in place"
                ]}
              >

                <InsetBox title="CAPSULE 13-33 - MAXIMUM SECURITY:">
                  <Line red bold>Contents: 2x Cy-raging menaces</Line>
                  <Line red>Sealed: Years ago (exact date unknown)</Line>
                  <Line red>Threat Level: EXTREME</Line>
                  <Line>Improvised prison for two cyber-psychos</Line>
                  <Line>Capsule reinforced with welded steel plates</Line>
                  <Line yellow>Occasionally hear screaming from inside</Line>
                  <Line red>DO NOT ATTEMPT TO OPEN</Line>
                </InsetBox>
                <InsetBox title="CAPSULE 43-103 - CONTAINMENT ACTIVE:">
                  <Line red bold>Contents: Ghost entity</Line>
                  <Line red>Sealed: 8 months ago</Line>
                  <Line red>Threat Level: HIGH</Line>
                  <Line>Imprisoned digital entity/consciousness</Line>
                  <Line>Capsule lined with Faraday cage</Line>
                  <Line>No network access - isolated from all systems</Line>
                  <Line yellow>Entity attempts communication via electrical interference</Line>
                </InsetBox>
                <InsetBox title="CAPSULE 18-367 - BIOHAZARD QUARANTINE:">
                  <Line red bold>Contents: G0 infection site</Line>
                  <Line red>Sealed: 2 years ago</Line>
                  <Line red>Threat Level: CATASTROPHIC</Line>
                  <Line>Former resident exposed to G0 nano-virus</Line>
                  <Line>Capsule sealed and abandoned in place</Line>
                  <Line red>BREACH WOULD CONTAMINATE ENTIRE FLOOR</Line>
                  <Line yellow>Corporate containment team monitors remotely</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Unit Registry": {
            content: (
              <MaintenanceAccess
                title="[CAPSULE UNIT REGISTRY]"
                deviceModel="Unit Management System"
                deviceId="REGISTRY-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Levels 79-132 (54 floors)",
                  "6,240 total capsule units",
                  "Monthly rent: 100¤ per capsule",
                  "Collection rate: 72%"
                ]}
              >

                <InsetBox title="OCCUPANCY STATUS:">
                  <Line cyan>Occupied units: 5,847 (94%)</Line>
                  <Line cyan>Vacant units: 361 (6%)</Line>
                  <Line cyan>Sealed/Quarantined: 32 (0.5%)</Line>
                </InsetBox>
                <InsetBox title="RENT COLLECTION:">
                  <Line neon>Expected monthly revenue: 584,700¤</Line>
                  <Line yellow>Actual collection rate: 72%</Line>
                  <Line smoke>Many residents behind on payments</Line>
                </InsetBox>
                <InsetBox title="UNIT CONDITIONS - MAINTENANCE BACKLOG:">
                  <Line red>• 487 units need electrical repairs</Line>
                  <Line red>• 623 units have water leaks</Line>
                  <Line red>• 1,204 units have broken climate control</Line>
                  <Line red>• 89 units structurally compromised</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Maintenance Logs": {
            content: (
              <MaintenanceAccess
                title="[MAINTENANCE LOG]"
                deviceModel="Work Order System"
                deviceId="MAINT-LOG-01"
                firmwareVersion="v1.0.0"
                systemStatus="BACKLOGGED"
                notes={[
                  "Last 30 days of service calls",
                  "High volume of requests",
                  "Staff understaffed",
                  "Priority to safety hazards"
                ]}
              >

                <InsetBox title="RECENT WORK ORDERS:">
                  <Line neon bold>WORK ORDER #2847 (2 days ago)</Line>
                  <Line>Location: Floor 23 (The Shades community)</Line>
                  <Line>Issue: Electrical overload from modified capsules</Line>
                  <Line>Resolution: Upgraded power supply (temporary fix)</Line>
                  <Line yellow>Modifications technically against regulations</Line>



                  <Line neon bold>WORK ORDER #2851 (5 days ago)</Line>
                  <Line>Location: Floor 40 (Eco Hall)</Line>
                  <Line>Issue: Water redirection to garden capsules</Line>
                  <Line>Resolution: Maintenance aware but unofficially ignoring</Line>
                  <Line smoke>Community provides maintenance crew with fresh food</Line>



                  <Line neon bold>WORK ORDER #2839 (8 days ago)</Line>
                  <Line>Location: Floor 17 (Serpent's Nest)</Line>
                  <Line>Issue: Structural reinforcement request</Line>
                  <Line>Resolution: Virid Vipers paid extra for priority service</Line>



                  <Line neon bold>WORK ORDER #2862 (1 day ago)</Line>
                  <Line>Location: Capsule 13-33 (sealed unit)</Line>
                  <Line>Issue: Reinforcement plates showing stress fractures</Line>
                  <Line red>Resolution: URGENT - Additional welding required</Line>
                  <Line yellow>Contained entities becoming more aggressive</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Quarantine Protocols": {
            password: {
              pw: "sealed",
              hint: "What dangerous capsules are",
              difficulty: "medium",
              content: <Locked theme="terminal" title="QUARANTINE PROTOCOLS" />
            },
            content: (
              <MaintenanceAccess
                title="[QUARANTINE PROTOCOLS]"
                deviceModel="Containment Management"
                deviceId="QUARANTINE-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Sealed unit management procedures",
                  "32 units currently under quarantine",
                  "24/7 monitoring on critical threats",
                  "Breach protocols established"
                ]}
              >

                <InsetBox title="ACTIVE QUARANTINES (32 units):">
                  <Line red>• 3 biohazard (G0 and other infections)</Line>
                  <Line red>• 12 structural collapse (unsafe to enter)</Line>
                  <Line red>• 8 criminal evidence (sealed by C.O.P.)</Line>
                  <Line red>• 6 entity containment (Ghosts, AI, anomalies)</Line>
                  <Line red>• 3 extreme violence (crime scenes, remains)</Line>
                </InsetBox>
                <InsetBox title="CAPSULE 18-367 - HIGHEST THREAT:">
                  <Line red bold>G0 INFECTION SITE</Line>
                  <Line red>Monitoring: Remote sensors (24/7)</Line>
                  <Line red>Corporate team: TG Labs containment on standby</Line>
                  <Line red>Breach protocol: Evacuate floor, seal level</Line>
                  <Line yellow>If infection spreads, entire stack at risk</Line>
                </InsetBox>
                <InsetBox title="CAPSULE 13-33 - DETERIORATING:">
                  <Line red bold>PHYSICAL CONTAINMENT FAILING</Line>
                  <Line yellow>Last inspection: 1 week ago</Line>
                  <Line yellow>Structural integrity: 68% (declining)</Line>
                  <Line yellow>Recommendation: Relocate to proper facility</Line>
                  <Line red>No facility willing to accept transfer</Line>
                  <Line red>Current plan: Reinforce until catastrophic failure</Line>
                </InsetBox>
                <InsetBox title="BREACH RESPONSE PROCEDURE:">
                  <Line neon>1. Immediate evacuation of affected floor</Line>
                  <Line neon>2. Seal stairwells and elevators (contain spread)</Line>
                  <Line neon>3. Contact Stack Command & Control</Line>
                  <Line neon>4. Deploy available security (Virid Vipers if needed)</Line>
                  <Line neon>5. Await corporate response team</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_CAPSULE_CLOSETS_COMMANDS;
