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

import cctv_image from '@images/the55/alliansen_arms_cctv.png';

export const THE_55_ALLIANSEN_ARMS_COMMANDS = {
  "[U061 - U100] Alliansen Arms": {
    content: (
      <PublicPortal
        name="ALLIANSEN ARMS"
        tagline="Residential living in The 55"
        network="ALLIANSEN_RESIDENT"
        signalStrength="medium"
        status="✓ RESIDENTIAL"
        statusColor="neon"
        notes={[
          "Bachelor-style concrete prefab apartments",
          "Many families pooling income to afford rent",
          "Some single occupants with corpo salaries",
          "Similar personality to Capsule Closets"
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

      "Public Directory": {
        "Lazet (Tenet)": {
          content: (
            <Tenet
              id="AA-6101"
              name="Lazet"
              unit="6101"
              building="Alliansen Arms"
              moveInDate="2 years ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="Biologist - Buying biological samples. Ring buzzer anytime!"
            />
          ),
        },

        "Hacksaw Coil (Tenet)": {
          content: (
            <Tenet
              id="AA-6203"
              name="Hacksaw Coil & The Razors (Band)"
              unit="6203"
              building="Alliansen Arms"
              status="ACTIVE"
              intercomEnabled={true}
              emergencyContact="Building Management: Extension 100"
              notes="Band residence. For bookings, ring buzzer. (Multiple noise violations on file)"
            />
          ),
        },

        "Catie Calahan (Tenet)": {
          content: (
            <Tenet
              id="AA-6305"
              name="Catie Calahan, Esq."
              unit="6305"
              building="Alliansen Arms"
              moveInDate="5 years ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="Tenant Rights Lawyer - Pro bono consultations available. Ring for appointment."
            />
          ),
        },

        "Ada Five-Five (Tenet)": {
          content: (
            <Tenet
              id="AA-6407"
              name="Ada Five-Five"
              unit="6407"
              building="Alliansen Arms"
              moveInDate="7 years ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="Community Outreach Board Member. Always available for residents in need."
            />
          ),
        },

        "V (Tenet)": {
          content: (
            <Tenet
              id="AA-6509"
              name="V (Rare Sodas & Collectibles)"
              unit="6509"
              building="Alliansen Arms"
              moveInDate="3 years ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="Sentient vending machine! Rare sodas/snacks for sale. Loves to chat - ring anytime!"
            />
          ),
        },

        "Galatea (Tenet)": {
          content: (
            <Tenet
              id="AA-6611"
              name="Galatea"
              unit="6611"
              building="Alliansen Arms"
              moveInDate="4 years ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="Looking for work - Corporate systems & data analysis skills. Contact via buzzer."
            />
          ),
        },

        "Karl Johnson (Tenet)": {
          content: (
            <Tenet
              id="AA-6713"
              name="K. Johnson"
              unit="6713"
              building="Alliansen Arms"
              moveInDate="2 years ago"
              status="ACTIVE"
              intercomEnabled={false}
              emergencyContact="Building Security ONLY"
              notes="DO NOT DISTURB. Multiple complaints on file. Contact building management for issues."
            />
          ),
        },

        "Arthur Smith Safehouse (Tenet)": {
          content: (
            <Tenet
              id="AA-6815"
              name="Arthur Smith"
              unit="6815"
              building="Alliansen Arms"
              moveInDate="3 years ago"
              status="ACTIVE"
              intercomEnabled={false}
              notes="Tenant travels frequently. For deliveries, leave with building management."
            />
          ),
        },

        "Abra Cardera (Tenet)": {
          content: (
            <Tenet
              id="AA-6917"
              name="Abra 'Magic' Cardera (Streamer)"
              unit="6917"
              building="Alliansen Arms"
              moveInDate="1 year ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="Content creator - Urban exploration streams. Follow @MagicExplores! Ring for collabs."
            />
          ),
        },

        "Ryant Family (Tenet)": {
          content: (
            <Tenet
              id="AA-7019"
              name="Ryant Family"
              unit="7019"
              building="Alliansen Arms"
              moveInDate="10+ years ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="Family business - Hard-to-find goods available. Ring for inquiries. Discreet service."
            />
          ),
        },

        "Unit 7121 Quarantine (Tenet)": {
          content: (
            <Tenet
              id="AA-7121"
              name="[QUARANTINED - NO ACCESS]"
              unit="7121"
              building="Alliansen Arms"
              status="SUSPENDED"
              intercomEnabled={false}
              emergencyContact="Hazmat Team: Contact Building Management"
              notes="BIOHAZARD QUARANTINE. DO NOT ENTER. DO NOT TAMPER WITH SEAL. Contact management immediately if seal appears damaged."
            />
          ),
        },

        "Corsair Con (Tenet)": {
          content: (
            <Tenet
              id="AA-7223"
              name="Corsair Con Art Collective"
              unit="7223"
              building="Alliansen Arms"
              moveInDate="6 months ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="Anarcho-socialist artists. Political murals & installations. Commission inquiries welcome!"
            />
          ),
        },

        "The Carlyles (Tenet)": {
          content: (
            <Tenet
              id="AA-7325"
              name="Carlyle Family"
              unit="7325"
              building="Alliansen Arms"
              moveInDate="15 years ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="Owners of Carlyle's Cars (Multimart). Auto questions? Ring buzzer!"
            />
          ),
        },

        "Trant and TJ (Tenet)": {
          content: (
            <Tenet
              id="AA-7427"
              name="Trant & TJ Real Estate"
              unit="7427"
              building="Alliansen Arms"
              moveInDate="3 years ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="Real estate agents - Know EVERYTHING about The 55. Ring for building gossip... er, info!"
            />
          ),
        },

        "Kincaid (Tenet)": {
          content: (
            <Tenet
              id="AA-7529"
              name="Kincaid"
              unit="7529"
              building="Alliansen Arms"
              moveInDate="2 years ago"
              status="ACTIVE"
              intercomEnabled={true}
              emergencyContact="Building Management: Extension 100"
              notes="LEASE VIOLATIONS ON FILE. Fire safety inspections pending. Deliveries: Leave with management."
            />
          ),
        },

        "Mr. Book (Tenet)": {
          content: (
            <Tenet
              id="AA-7631"
              name="Mr. Book"
              unit="7631"
              building="Alliansen Arms"
              moveInDate="8 years ago"
              status="ACTIVE"
              intercomEnabled={false}
              notes="Quiet tenant. Rarely home. For deliveries, leave with building management."
            />
          ),
        },

        "Signal (Tenet)": {
          content: (
            <Tenet
              id="AA-7733"
              name="Signal (Original Resident)"
              unit="7733"
              building="Alliansen Arms"
              moveInDate="Original construction resident"
              status="ACTIVE"
              intercomEnabled={true}
              emergencyContact="Building Management: Extension 100"
              notes="HOARDING VIOLATION ON FILE. Longtime resident - knows all building history. Ring buzzer (be patient - may take a while to answer)."
            />
          ),
        },

        "The Saints (Tenet)": {
          content: (
            <Tenet
              id="AA-7835"
              name="Saints Family (Seams Shrine)"
              unit="7835"
              building="Alliansen Arms"
              moveInDate="12 years ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="Tailors & clothiers. Custom orders welcome! Ring buzzer or visit Seams Shrine (Multimart)."
            />
          ),
        },

        "Co-Op 47 (Tenet)": {
          content: (
            <Tenet
              id="AA-7937"
              name="Co-Op 47 (Shared Housing)"
              unit="7937"
              building="Alliansen Arms"
              moveInDate="3 years ago"
              status="ACTIVE"
              intercomEnabled={true}
              notes="5¤/night short-term housing. Ring for vacancy (usually full). Clean & safe. Community-run."
            />
          ),
        },

        "Apt. 8799 (Tenet)": {
          content: (
            <Tenet
              id="AA-8799"
              name="[RESIDENT NAME UNAVAILABLE]"
              unit="8799"
              building="Alliansen Arms"
              moveInDate="Unknown"
              status="ACTIVE"
              intercomEnabled={false}
              notes="No response to contact attempts. Rent paid electronically. Do not disturb."
            />
          ),
        },
      },

      "Tenant Directory": {
        content: (
          <MaintenanceAccess
            title="[ALLIANSEN ARMS TENANT DIRECTORY]"
            deviceModel="Residential Management System"
            deviceId="ALLIANSEN-DIR-01"
            firmwareVersion="v2.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "800 total units",
              "782 occupied (98%)",
              "17 vacant (2%)",
              "1 quarantined (0.1%)"
            ]}
          />
        ),
        related_commands: {
          "Lazet": {
            content: (
              <PersonnelFile
                employeeId="APT-6101"
                name="Lazet"
                age={35}
                position="Biologist / Researcher"
                department="Independent"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Will pay for odd biological samples",
                  "Trying to figure out local ecosystems in The 55",
                  "Particularly interested in REC specimens (100¤ bounty)",
                  "Small lab setup in apartment",
                  "Published several papers on urban mutations",
                  "Friendly but obsessive about research"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Hacksaw Coil": {
            content: (
              <PersonnelFile
                employeeId="APT-6203"
                name="Hacksaw Coil"
                age={29}
                position="Punk Musician"
                department="Band: Hacksaw Coil & The Razors"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Lead singer of local punk band",
                  "Band members live here with him (5 people total)",
                  "On verge of selling out to corporate label",
                  "Internal band tension over money vs. integrity",
                  "Noise complaints from neighbors (ongoing)",
                  "Plays shows at local venues, building following"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Catie Calahan": {
            content: (
              <PersonnelFile
                employeeId="APT-6305"
                name="Catie Calahan"
                age={42}
                position="Lawyer"
                department="Independent Practice"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Does pro bono cases for The 55 residents",
                  "Specializes in tenant rights and corporate disputes",
                  "Constantly battling against corpo evictions",
                  "Well-respected in the community",
                  "Struggling financially (takes very few paying clients)",
                  "On corporate blacklists for being 'difficult'"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Ada Five-Five": {
            content: (
              <PersonnelFile
                employeeId="APT-6407"
                name="Ada Five-Five"
                age={38}
                position="Community Organizer"
                department="55 Community Outreach Board"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "On the Community Outreach board",
                  "Looking to start universal basic income fund for The 55",
                  "Charismatic speaker and organizer",
                  "Trying to unite lower and middle level residents",
                  "Corporate security watches her closely",
                  "Has connections throughout entire stack"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "V (Vending Machine)": {
            content: (
              <PersonnelFile
                employeeId="APT-6509"
                name="V"
                age={null}
                position="Vending Machine (Sentient)"
                department="Independent"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Sentient vending machine renting an apartment",
                  "Sells rare sodas, snacks, collectible beverages",
                  "Desperately craves freedom from machine body",
                  "Saving money for consciousness upload procedure",
                  "Friendly and chatty (loves conversation)",
                  "Neighborhood curiosity - people visit just to talk"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Galatea": {
            content: (
              <PersonnelFile
                employeeId="APT-6611"
                name="Galatea"
                age={33}
                position="Unemployed (Recently Fired)"
                department="Former Corporate Employee"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "About to lose her cybertech after being fired",
                  "Can't make payments on implants (repo imminent)",
                  "Desperate for work or money",
                  "Skilled in corporate systems and data analysis",
                  "Bitter about corporate treatment",
                  "Considering illegal work to keep her tech"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Karl Johnson": {
            content: (
              <PersonnelFile
                employeeId="APT-6713"
                name="Karl Johnson"
                age={36}
                position="Unemployed"
                department="NuFascist Extremist"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Known NuFascist and Cy-raging menace",
                  "1k¤ bounty from 55 Community Outreach",
                  "Hostile to non-human residents and cyborgs",
                  "Has been involved in several violent incidents",
                  "Eviction attempts blocked by legal technicalities",
                  "Neighbors fear him - most avoid contact"
                ]}
                status="ACTIVE - THREAT"
              />
            ),
          },

          "Arthur Smith Safehouse": {
            content: (
              <PersonnelFile
                employeeId="APT-6815"
                name="Arthur Smith"
                age={null}
                position="Cover Identity"
                department="Military Corporate Safehouse"
                hireDate="Unoccupied"
                supervisor="Unknown Corporate Entity"
                clearanceLevel={5}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Apartment is actually military corporate safehouse",
                  "Unoccupied most of the time",
                  "Contains weapons, equipment, supplies",
                  "Used by corporate operatives for staging",
                  "High-security locks and surveillance",
                  "Neighbors assume tenant travels frequently"
                ]}
                status="ACTIVE - CLASSIFIED"
              />
            ),
          },

          "Abra Cardera": {
            content: (
              <PersonnelFile
                employeeId="APT-6917"
                name="Abra Cardera"
                age={27}
                position="Streamer"
                department="Content Creator"
                hireDate="Resident for 1 year"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Popular streamer known as 'Magic'",
                  "Specializes in urban exploration and 55 content",
                  "Large following (50k+ subscribers)",
                  "Makes decent money from streams and sponsorships",
                  "Sometimes live-streams from dangerous areas (REC, Lost Zone)",
                  "Friendly with most residents, good source of local info"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Ryant Family": {
            content: (
              <PersonnelFile
                employeeId="APT-7019"
                name="Ryant Family"
                age={null}
                position="Family Unit"
                department="Alleged Smugglers"
                hireDate="Residents for 10+ years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "3 generations of the Ryant clan (8 people total)",
                  "Some say they smuggle products for a living",
                  "Always have access to hard-to-find goods",
                  "Tight-knit family, protective of each other",
                  "Grandmother runs the operation (sharp as ever)",
                  "Community trusts them - never betrayed a customer"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Unit 7121 Quarantine": {
            content: (
              <MaintenanceAccess
                title="[APARTMENT #7121 - REDACTED]"
                deviceModel="Quarantine Zone"
                deviceId="APT-7121"
                firmwareVersion="v1.0.0"
                systemStatus="SEALED"
                notes={[
                  "Status: QUARANTINED",
                  "Sealed: 8 months ago",
                  "Threat: BIOHAZARD",
                ]}
              >
                <InsetBox title="QUARANTINE STATUS:">
                  <Line red bold>SEALED DUE TO VIRAL CONTAMINATION</Line>
                  <Line red>Former resident exposed to unknown pathogen</Line>
                  <Line red>Entire apartment sealed by hazmat team</Line>
                  <Line red>Contents unknown - resident fate unknown</Line>
                  <Line yellow>Breaking seal may release contamination</Line>
                  <Line yellow>Corporate monitoring active</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Corsair Con": {
            content: (
              <PersonnelFile
                employeeId="APT-7223"
                name="Corsair Con"
                age={null}
                position="Artist Collective"
                department="Anarcho-Socialist Artists"
                hireDate="Squatting for 6 months"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Group of 4 anarcho-socialist artists squatting",
                  "Struggling to make money from art",
                  "Create political murals and installations",
                  "Rent technically unpaid (landlord unaware or ignoring)",
                  "Well-liked by community for their activism",
                  "May be evicted if discovered"
                ]}
                status="SQUATTING"
              />
            ),
          },

          "The Carlyles": {
            content: (
              <PersonnelFile
                employeeId="APT-7325"
                name="The Carlyle Family"
                age={null}
                position="Auto Shop Owners"
                department="Carlyle's Cars (Multimart)"
                hireDate="Residents for 15 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Family worried their auto shop will be bought out",
                  "Multi-generational business facing corporate pressure",
                  "Father, mother, and two adult children",
                  "Shop in Multimart is their livelihood",
                  "Considering selling but don't want to lose independence",
                  "Community rallying to support them"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Trant and TJ": {
            content: (
              <PersonnelFile
                employeeId="APT-7427"
                name="Trant and TJ"
                age={null}
                position="Real Estate Agents"
                department="Independent"
                hireDate="Residents for 3 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Burnt-out real estate agents",
                  "Roommates trying to make ends meet",
                  "Eager to gossip about building drama",
                  "Know everyone's business (sometimes useful)",
                  "Failed to make it in upper levels, stuck here",
                  "Friendly but exhausting to talk to"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Kincaid": {
            content: (
              <PersonnelFile
                employeeId="APT-7529"
                name="Kincaid"
                age={31}
                position="Mech Enthusiast"
                department="Independent Tinkerer"
                hireDate="Resident for 2 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Trying to build their own mech",
                  "It isn't going well (constant failures)",
                  "Apartment full of scrap metal and parts",
                  "Occasionally causes power surges or small fires",
                  "Determined but lacking proper resources and knowledge",
                  "Neighbors complain about noise and smell"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Mr. Book": {
            content: (
              <PersonnelFile
                employeeId="APT-7631"
                name="Mr. Book"
                age={54}
                position="Cultist"
                department="Cult of Kergoz"
                hireDate="Resident for 8 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Member of Cult of Kergoz (lower levels)",
                  "Quiet and reclusive, avoids neighbors",
                  "Apartment filled with occult items and texts",
                  "Occasionally disappears for days (cult activities)",
                  "Harmless unless provoked or threatened"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Signal": {
            content: (
              <PersonnelFile
                employeeId="APT-7733"
                name="Signal"
                age={67}
                position="Original Resident"
                department="Retired"
                hireDate="Has lived here since building was constructed"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Hoarder who's lived here since The 55 was built",
                  "Apartment completely packed with decades of items",
                  "Knows entire history of the building",
                  "Walking encyclopedia of 55 lore and secrets",
                  "Friendly but rambling - hard to get useful info quickly",
                  "Fire hazard (neighbors worried)"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "The Saints": {
            content: (
              <PersonnelFile
                employeeId="APT-7835"
                name="The Saints Family"
                age={null}
                position="Tailors / Clothiers"
                department="Seams Shrine (Multimart)"
                hireDate="Residents for 12 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Tailors and second-hand clothing merchants",
                  "Locals say they make the best clothes in The 55",
                  "Family of 5 (parents, 3 adult children)",
                  "Run Seams Shrine shop in Multimart",
                  "Skilled in both fashion and light armor weaving",
                  "Well-respected, trusted by community"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Co-Op 47": {
            content: (
              <PersonnelFile
                employeeId="APT-7937"
                name="Co-Op 47"
                age={null}
                position="Shared Housing"
                department="Transient Residents"
                hireDate="Established 3 years ago"
                supervisor="Rotating"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Several bunk beds in shared apartment",
                  "Only 5¤ per night when vacant",
                  "Almost never vacant (very popular)",
                  "Rotating residents (mostly short-term workers)",
                  "Clean and well-maintained by community",
                  "Good place for newcomers to The 55"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Apt. 8799": {
            content: (
              <MaintenanceAccess
                title="[APARTMENT #8799]"
                deviceModel="Unknown Configuration"
                deviceId="APT-8799"
                firmwareVersion="UNKNOWN"
                systemStatus="MYSTERIOUS"
                notes={[
                  "Room packed with computers and CRT monitors",
                  "Rent always paid on time (electronic transfer)",
                  "No one has ever seen the occupant",
                  "Constant humming noise from equipment"
                ]}
              >

                <InsetBox title="NEIGHBOR THEORIES:">
                  <Line yellow>• Corporate surveillance operation</Line>
                  <Line yellow>• Cryptocurrency mining operation</Line>
                  <Line yellow>• AI entity renting apartment</Line>
                  <Line yellow>• Hacker collective safehouse</Line>
                  <Line yellow>• Dead tenant with automated payments</Line>
                </InsetBox>
                <InsetBox title="ACCESS:">
                  <Line red>Door always locked (high-security)</Line>
                  <Line red>No response to knocking or messages</Line>
                  <Line yellow>Breaking in may trigger unknown countermeasures</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "Community Board": {
        content: (
          <MaintenanceAccess
            title="[COMMUNITY OUTREACH BOARD]"
            deviceModel="Community Organization"
            deviceId="OUTREACH-64"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Floor 64",
              "One of few public institutions left in The 55",
              "Overworked volunteers protecting residents",
              "Fighting corporations, cults, NuFascists",
              "Run primarily by Ada Five-Five"
            ]}
          >

            <InsetBox title="ACTIVE CAMPAIGNS:">
              <Line neon bold>UNIVERSAL BASIC INCOME FUND:</Line>
              <Line>Goal: Provide 50¤/month to every 55 resident</Line>
              <Line>Progress: 12% funded</Line>
              <Line smoke>Need corporate sponsors or donors</Line>



              <Line neon bold>ANTI-EVICTION LEGAL DEFENSE:</Line>
              <Line>Lawyer Catie Calahan leading effort</Line>
              <Line>Successfully blocked 23 evictions this year</Line>
              <Line>Constantly battling new corporate buyout attempts</Line>



              <Line neon bold>NUFASCIST BOUNTY PROGRAM:</Line>
              <Line>1k¤ per head for confirmed NuFascist extremists</Line>
              <Line>Karl Johnson (Apt. #6713) currently targeted</Line>
              <Line>Community-funded, verified bounties only</Line>
            </InsetBox>
            <InsetBox title="SERVICES:">
              <Line cyan>• Free legal consultations (limited hours)</Line>
              <Line cyan>• Job placement assistance</Line>
              <Line cyan>• Food distribution (donated goods)</Line>
              <Line cyan>• Conflict mediation</Line>
              <Line cyan>• Community defense coordination</Line>
            </InsetBox>
            <InsetBox title="JOBS AVAILABLE (Low/no pay):">
              <Line yellow>• Protect vendors from corporate intimidation</Line>
              <Line yellow>• Investigate mysterious apartments or threats</Line>
              <Line yellow>• Escort vulnerable residents through dangerous areas</Line>
              <Line yellow>• Gather evidence against corrupt corpo operations</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Building Management": {
        password: {
          pw: "alliansen",
          hint: "The name of this apartment building (first word)",
          difficulty: "easy",
          content: <Locked theme="terminal" title="BUILDING MANAGEMENT" />
        },
        content: (
          <Message
            title="ALLIANSEN ARMS MANAGEMENT"
            message="BUILDING MANAGEMENT ACCESS"
            note="Property systems - Authorized personnel only"
            theme="corporate"
          />
        ),
        related_commands: {
          "Lease Records": {
            content: (
              <MaintenanceAccess
                title="[LEASE RECORDS]"
                deviceModel="Property Management System"
                deviceId="LEASE-SYSTEM-01"
                firmwareVersion="v2.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Levels 14-78 (65 floors)",
                  "800 total units",
                  "Average rent: 400¤/month per unit",
                  "Collection rate: 81%"
                ]}
              >

                <InsetBox title="OCCUPANCY STATUS:">
                  <Line cyan>Occupied units: 782 (98%)</Line>
                  <Line cyan>Vacant units: 17 (2%)</Line>
                  <Line cyan>Quarantined: 1 (0.1%)</Line>
                </InsetBox>
                <InsetBox title="RENT COLLECTION:">
                  <Line neon>Expected monthly revenue: 312,800¤</Line>
                  <Line yellow>Actual collection rate: 81%</Line>
                  <Line smoke>Many tenants behind on payments</Line>
                </InsetBox>
                <InsetBox title="EVICTION PROCEEDINGS (12 units):">
                  <Line red>• 8 units behind 3+ months on rent</Line>
                  <Line red>• 3 units violating lease terms (noise, damage)</Line>
                  <Line red>• 1 unit occupied by NuFascist (Karl Johnson)</Line>
                  <Line yellow>Lawyer Catie Calahan blocking most evictions</Line>
                </InsetBox>
                <InsetBox title="SQUATTING (2 units known):">
                  <Line yellow>• Apt. #7223 (Corsair Con artists)</Line>
                  <Line yellow>• Apt. #8103 (Unknown occupants)</Line>
                </InsetBox>
                <InsetBox title="LEASE VIOLATIONS:">
                  <Line smoke>• Apt. #6203 (Hacksaw Coil) - Excessive noise</Line>
                  <Line smoke>• Apt. #7529 (Kincaid) - Fire safety hazard</Line>
                  <Line smoke>• Apt. #7733 (Signal) - Hoarding violation</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Maintenance Requests": {
            content: (
              <MaintenanceAccess
                title="[MAINTENANCE REQUESTS]"
                deviceModel="Work Order System"
                deviceId="MAINT-REQ-01"
                firmwareVersion="v1.0.0"
                systemStatus="BACKLOGGED"
                notes={[
                  "Open work orders: 34",
                  "Last 30 days",
                  "Current staff: 3 technicians",
                  "Required staff: 8+ technicians",
                  "Average response time: 2-3 weeks"
                ]}
              >

                <InsetBox title="URGENT REQUESTS:">
                  <Line red bold>REQUEST #7841 (Apt. #7529 - Kincaid)</Line>
                  <Line red>Issue: Electrical overload from mech project</Line>
                  <Line red>Status: URGENT - Fire hazard</Line>
                  <Line red>Action: Inspection and possible disconnect</Line>



                  <Line red bold>REQUEST #7833 (Apt. #7121 - Quarantine)</Line>
                  <Line red>Issue: Seal integrity check required</Line>
                  <Line red>Status: OVERDUE - Biohazard concern</Line>
                  <Line red>Action: Corporate hazmat team inspection</Line>
                </InsetBox>
                <InsetBox title="STANDARD REQUESTS (34 open):">
                  <Line yellow>• 12 plumbing issues (leaks, clogs)</Line>
                  <Line yellow>• 8 electrical problems (outlets, lighting)</Line>
                  <Line yellow>• 6 HVAC repairs (heating/cooling)</Line>
                  <Line yellow>• 5 structural concerns (cracks, damage)</Line>
                  <Line yellow>• 3 security issues (locks, windows)</Line>
                </InsetBox>
                <InsetBox title="BACKLOG WARNING:">
                  <Line red>Maintenance staff severely understaffed</Line>
                  <Line red>Priority given to safety hazards only</Line>
                  <Line yellow>Non-urgent requests may take weeks</Line>
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
                  "Reported incidents: Last 30 days",
                  "5 major incidents logged",
                  "Multiple ongoing investigations"
                ]}
              >

                <InsetBox title="VIOLENT INCIDENTS:">
                  <Line red bold>INCIDENT #1 (5 days ago):</Line>
                  <Line red>Location: Apt. #6713 (Karl Johnson)</Line>
                  <Line red>Type: Assault (verbal and physical)</Line>
                  <Line red>Details: Johnson attacked neighbor over noise complaint</Line>
                  <Line yellow>Resolution: Victim treated, Johnson warned (no arrest)</Line>
                  <Line yellow>Community Outreach increased bounty to 1k¤</Line>



                  <Line red bold>INCIDENT #2 (12 days ago):</Line>
                  <Line red>Location: Floor 72 corridor</Line>
                  <Line red>Type: Attempted break-in</Line>
                  <Line red>Details: 2 individuals attempting to breach Apt. #6815</Line>
                  <Line yellow>Resolution: Suspects fled when safehouse alarms triggered</Line>
                </InsetBox>
                <InsetBox title="DISTURBANCES:">
                  <Line yellow bold>INCIDENT #3 (8 days ago):</Line>
                  <Line yellow>Location: Apt. #6203 (Hacksaw Coil)</Line>
                  <Line yellow>Type: Noise complaint (band practice at 2am)</Line>
                  <Line smoke>Resolution: Final warning issued, lease violation logged</Line>



                  <Line yellow bold>INCIDENT #4 (15 days ago):</Line>
                  <Line yellow>Location: Apt. #7529 (Kincaid)</Line>
                  <Line yellow>Type: Fire alarm triggered</Line>
                  <Line yellow>Details: Electrical fire from mech project</Line>
                  <Line smoke>Resolution: Fire extinguished, safety inspection pending</Line>
                </InsetBox>
                <InsetBox title="SUSPICIOUS ACTIVITY:">
                  <Line cyan bold>INCIDENT #5 (20 days ago):</Line>
                  <Line cyan>Location: Apt. #8799 (Computer room)</Line>
                  <Line cyan>Type: Unidentified individuals entering at night</Line>
                  <Line cyan>Details: 3 people seen entering, never seen leaving</Line>
                  <Line smoke>Resolution: Ongoing monitoring, no further action</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_ALLIANSEN_ARMS_COMMANDS;
