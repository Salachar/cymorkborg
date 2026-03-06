import {
  Line,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  Locked,
  MaintenanceAccess,
  PersonnelFile,
  PublicPortal,
} from "@terminal/retcomdevice";

export const THE_55_LOWER_LEVELS_COMMANDS = {
  "[A050 - B021] The Synk": {
    content: (
      <MaintenanceAccess
        title="[THE SYNK]"
        deviceModel="Hazard Zone Monitoring"
        deviceId="SYNK"
        firmwareVersion="v1.0.0"
        systemStatus="EXTREME HAZARD"
        notes={[
          "Ancient ruins miles below city surface",
          "Dark maze of tunnels and waste water",
          "No official infrastructure",
          "Large chance of vermin encounter",
          "Difficult navigation, bring suitable equipment"
        ]}
      >
        <InsetBox title="KNOWN LOCATIONS:">
          <Line neon>• Sewage Chasm - Bottomless cliffs, bridge crossing</Line>
          <Line neon>• The Offertory - Cult chamber in cliff wall</Line>
          <Line neon>• Crypto Mine - Semi-clean water cooling processors</Line>
          <Line neon>• The Dead Queen - Mass of dying flesh (extreme danger)</Line>
          <Line neon>• Medieval Ruins - Ancient structures, cult activity</Line>
        </InsetBox>
        <InsetBox title="HOSTILE ENTITIES:">
          <Line red>• Dredgers</Line>
          <Line red>• Gang-Goons</Line>
          <Line red>• Nanogoons</Line>
          <Line red>• Large Rats</Line>
          <Line red>• Cyber Rats</Line>
          <Line red>• The Dead Queen </Line>
          <Line red pulse bold>• Large Cyber Rats</Line>
        </InsetBox>
        <InsetBox title="WARNINGS:">
          <Line red>No light sources - total darkness in most areas</Line>
          <Line red>Toxic water</Line>
          <Line red>Easy to get lost - navigation extremely difficult</Line>
          <Line red>The Dead Queen will attempt to capture anything nearby</Line>
          <Line yellow>Dredger Priest corpse attracts Dead Queen if killed above</Line>
        </InsetBox>
      </MaintenanceAccess>
    ),
    related_commands: {
      "Sewage Chasm": {
        content: (
          <MaintenanceAccess
            title="[SEWAGE CHASM]"
            deviceModel="Location Survey"
            deviceId="SYNK-CHASM-01"
            firmwareVersion="v1.0.0"
            systemStatus="HAZARDOUS"
            notes={[
              "Massive tunnel system with bottomless cliffs",
              "Improvised bridge spans chasm (unstable)",
              "Sound of rushing water from far below",
            ]}
          >
            <InsetBox title="DESCRIPTION:">
              <Line>Enormous tunnels lead to cliff edges and total darkness</Line>
              <Line>Improvised bridge cobbled from scrap metal and cables</Line>
              <Line>Can hold ~6 people at once before risk of collapse</Line>
              <Line smoke small>Dredgers know safe crossing points</Line>
            </InsetBox>
            <InsetBox title="DREDGERS (HOSTILE GUARDS):">
              <Line yellow>Demand toll: Useful gear or supplies</Line>
              <Line smoke>Will attack if refused or if group appears weak</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "The Offertory": {
        content: (
          <MaintenanceAccess
            title="[THE OFFERTORY]"
            deviceModel="Location Survey"
            deviceId="SYNK-OFFERTORY-01"
            firmwareVersion="v1.0.0"
            systemStatus="CULT ACTIVITY"
            notes={[
              "Cult chamber in Sewage Chasm cliff face",
              "Accessed via narrow ledge from bridge",
              "Lit by bioluminescent fungi and torches",
              "Altar faces darkness of chasm below"
            ]}
          />
        ),
        related_commands: {
          "Dredge Priest": {
            content: (
              <PersonnelFile
                employeeId="CULT-PRIEST-01"
                name="Dredge Priest"
                age="Unknown"
                position="Cult Leader"
                department="The Offertory"
                supervisor="The Dead Queen (allegedly)"
                clearanceLevel={0}
                district="The Synk (Sewage Chasm)"
                emergencyContact="None"
                performance={0}
                notes={[
                  "Leader of Dredger cult worshipping 'dead god'",
                  "Conducts regular offerings into Sewage Chasm",
                  "Commands Dredger followers",
                  "Armed with ancient revolver",
                  "Death triggers Dead Queen pursuit (she retrieves corpse)",
                  "Believers think The Dead Queen is their deity",
                  "Actually: She's just a mass of dying flesh consuming everything"
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      "The Dead Queen": {
        content: (
          <MaintenanceAccess
            title="[THE DEAD QUEEN]"
            deviceModel="Threat Assessment"
            deviceId="SYNK-THREAT-01"
            firmwareVersion="v1.0.0"
            systemStatus="EXTREME DANGER"
            notes={[
              "Massive entity at bottom of Sewage Chasm",
              "Mass of dying flesh that catches anything falling",
              "Believes it is the 'dead god' worshipped by Dredgers",
              "Partially blocks Path to G0",
              "AVOID IF POSSIBLE"
            ]}
          >
            <InsetBox title="BEHAVIOR:">
              <Line>Anything that falls into chasm ends up here</Line>
              <Line>Reaches up with appendages to catch victims</Line>
              <Line>Slowly incorporates captured matter into itself</Line>
              <Line>Will pursue Dredge Priest corpses (unstoppable)</Line>
              <Line yellow>Can extend tendrils up into tunnels if motivated</Line>
            </InsetBox>
            <InsetBox title="COMPOSITION:">
              <Line>Accumulated trash, corpses, and waste from The 55</Line>
              <Line>Still-living tissue mixed with decaying matter</Line>
              <Line>Vaguely humanoid shape (barely recognizable)</Line>
              <Line>Constantly shifting and writhing</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Medieval Ruins": {
        content: (
          <MaintenanceAccess
            title="[MEDIEVAL RUINS]"
            deviceModel="Location Survey"
            deviceId="SYNK-RUINS-01"
            firmwareVersion="v1.0.0"
            systemStatus="CULT ACTIVITY"
            notes={[
              "Ancient structures predating The 55",
              "Accessible from Kergoz Compound (B15)",
              "Occupied by Heirs of Kergoz cultists",
            ]}
          >
            <InsetBox title="DESCRIPTION:">
              <Line>Stone structures hundreds of years old</Line>
              <Line>Covered in occult symbols and fresh graffiti</Line>
              <Line>Lit by torches and bio-luminescent growth</Line>
              <Line>Smells of incense, decay, and Nano-corruption</Line>
            </InsetBox>
            <InsetBox title="OCCUPANTS:">
              <Line red>• Nanogoons (corrupted cultists)</Line>
              <Line red>• Heir of Kergoz (cult leader)</Line>
              <Line yellow>Hostile to non-believers</Line>
              <Line yellow>Conducting sacrifices and Nano rituals</Line>
            </InsetBox>
            <InsetBox title="CONNECTION TO SURFACE:">
              <Line>Secret entrance from Kergoz Compound (B15)</Line>
              <Line>Heavily guarded by Heir of Kergoz</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Crypto Mine": {
        content: (
          <MaintenanceAccess
            title="[CRYPTO MINE]"
            deviceModel="Location Survey"
            deviceId="SYNK-CRYPTO-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Former water spring (semi-clean water)",
              "Natural cave with good cooling",
              "Processors mining cryptocurrency",
              "Guarded by gang-goons"
            ]}
          >
            <InsetBox title="DESCRIPTION:">
              <Line>Natural cave with water trickling through</Line>
              <Line>Cooling water for crypto processors</Line>
              <Line>Constant hum of processing equipment</Line>
              <Line>Slightly cooler than surrounding tunnels</Line>
            </InsetBox>
            <InsetBox title="SECURITY:">
              <Line yellow>Gang-Goons on guard</Line>
              <Line yellow>Poorly armed but determined</Line>
              <Line yellow>Will negotiate before violence</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  "[B020 - B001] The Base": {
    content: (
      <PublicPortal
        name="THE BASE"
        tagline="Foundation levels of The 55"
        network="BASE_MAINTENANCE"
        signalStrength="weak"
        status="FOUNDATION LEVELS"
        statusColor="yellow"
        notes={[
          "Levels B20-B1",
          "Maintenance corridors, car parks, cheapest rents",
          "Dark corners and flickering lights",
          "Most residents avoid if possible"
        ]}
        theme="limeade"
      />
    ),
    related_commands: {
      "Base Directory": {
        content: (
          <MaintenanceAccess
            title="[THE BASE - FACILITY DIRECTORY]"
            deviceModel="Foundation Infrastructure"
            deviceId="BASE-DIR-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Levels B20-B1",
              "Foundation infrastructure for The 55",
              "20 major facilities catalogued",
              "Mix of official and illegal operations"
            ]}
          >
            <InsetBox title="STORAGE & PARKING:">
              <Line neon>1. Resident Storage Drawers</Line>
              <Line smoke>Body-sized units, 50¤/month (questionable uses)</Line>
              <Line neon>2. Bike Cages</Line>
              <Line smoke>Forgotten relics, stolen tricycles (Ol' Sam repairs for 50¤)</Line>
              <Line neon>3. Parking Pyre</Line>
              <Line smoke>Vehicle husks, trash, scrap metal</Line>
              <Line neon>4. Resident Parking</Line>
              <Line smoke>Junkers and cheap cars</Line>
              <Line neon>5. VIP Parking</Line>
              <Line smoke>Robot valet, corporate access only</Line>
              <Line neon>6. VIP Storage</Line>
              <Line smoke>Room-sized units</Line>
            </InsetBox>
            <InsetBox title="HOUSING:">
              <Line neon>7. Crypt Rooms</Line>
              <Line smoke>Concrete boxes, 50¤/month (cheapest in The 55)</Line>
            </InsetBox>
            <InsetBox title="INFRASTRUCTURE:">
              <Line neon>8. Utility Corridors</Line>
              <Line smoke>Dark, winding, damp</Line>
              <Line neon>9. Net Control</Line>
              <Line smoke>Absolute mess of wires and cables</Line>
              <Line neon>10. Water Reclamation</Line>
              <Line smoke>Sewage processing, grey water, massive tanks</Line>
              <Line neon>11. Reactor ('The Devil')</Line>
              <Line smoke>Nuclear power source</Line>
              <Line neon>12. The Grove</Line>
              <Line smoke>Workshop for cars and local machinery</Line>
            </InsetBox>
            <InsetBox title="ILLEGAL OPERATIONS:">
              <Line neon>13. Crypto Racks</Line>
              <Line smoke>Processors mining cryptocurrency (gang-goons, natural cave)</Line>
              <Line neon>14. The Rot</Line>
              <Line smoke>Fungal growths, decay</Line>
              <Line neon>15. Kergoz Compound</Line>
              <Line smoke>Cultists in repurposed cars/tents (1 Heir, secret Synk entrance)</Line>
            </InsetBox>
            <InsetBox title="SEALED/DANGEROUS:">
              <Line neon>16. Fallout Shelter</Line>
              <Line smoke>Old, sealed 10+ years (500¤ bounty to open)</Line>
              <Line neon>17. Stack Archive</Line>
              <Line smoke>Rusted filing cabinets, hundreds of rats</Line>
              <Line neon>18. Stack Graveyard</Line>
              <Line smoke>PO box-sized plots for cremated remains (5¤ toll)</Line>
              <Line neon>19. Trash Cave</Line>
              <Line smoke>Compressed trash chunks (salvage opportunity)</Line>
              <Line neon>20. Body Compactor</Line>
              <Line smoke>Gang-goons dispose of bodies here</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "The Reactor": {
            content: (
              <MaintenanceAccess
                title="[THE REACTOR - 'THE DEVIL']"
                deviceModel="Nuclear Power System"
                deviceId="REACTOR-B11"
                firmwareVersion="v3.0.0"
                systemStatus="STABLE"
                uptime="1,847 days continuous"
                notes={[
                  "Level B11",
                  "Primary power source for The 55",
                  "Nicknamed 'The Devil' by workers",
                  "Huge temperamental reactor",
                  "Workers on 24/7 shifts"
                ]}
              >
                <InsetBox title="CORE STATUS:">
                  <Line cyan>Core Temperature: 547°C (Normal range)</Line>
                  <Line cyan>Radiation Levels: Contained (0.02 Sv/hr)</Line>
                  <Line cyan>Power Output: 98% capacity (stable)</Line>
                  <Line cyan>Cooling System: Operational (96%)</Line>
                  <Line cyan>Fuel Rods: 82% life remaining</Line>
                </InsetBox>
                <InsetBox title="ALERTS:">
                  <Line yellow>COOLING SYSTEM PUMP #3:</Line>
                  <Line smoke>Operating at reduced efficiency (96%)</Line>
                  <Line smoke>Maintenance scheduled for next month</Line>
                  <Line smoke>Backup pump ready if needed</Line>
                </InsetBox>
                <InsetBox title="STAFF:">
                  <Line neon>Workers (24/7 shifts)</Line>
                  <Line neon>Monitoring and maintaining stability</Line>
                  <Line neon>Paranoid about catastrophic failure</Line>
                  <Line yellow>Will defend reactor from sabotage</Line>
                </InsetBox>
                <InsetBox title="HAZARDS:">
                  <Line red>Shielded but not perfectly safe</Line>
                  <Line red>Workers rotate shifts to minimize exposure</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Reactor Monitoring": {
                password: {
                  pw: "reactor_admin",
                  hint: "Nuclear power system administrator access",
                  difficulty: "hard",
                  content: <Locked theme="terminal" title="REACTOR MONITORING" />
                },
                content: (
                  <MaintenanceAccess
                    title="[REACTOR MONITORING SYSTEM]"
                    deviceModel="Nuclear Control Interface"
                    deviceId="REACTOR-MON-01"
                    firmwareVersion="v3.0.0"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Real-time reactor status",
                      "Staff access only",
                      "Emergency protocols available",
                      "Backup power systems monitored"
                    ]}
                  >
                    <InsetBox title="MAINTENANCE LOG (Last 24h):">
                      <Line neon>• Routine inspection completed (all normal)</Line>
                      <Line neon>• Cooling system pressure adjusted</Line>
                      <Line neon>• Control rod calibration verified</Line>
                      <Line neon>• No anomalies detected</Line>
                    </InsetBox>
                    <InsetBox title="EMERGENCY PROTOCOLS:">
                      <Line red bold>REACTOR FAILURE RESPONSE:</Line>
                      <Line red>1. Automatic SCRAM (emergency shutdown)</Line>
                      <Line red>2. Evacuate Base levels immediately</Line>
                      <Line red>3. Seal reactor containment</Line>
                      <Line red>4. Switch to backup power (solar + batteries)</Line>
                      <Line red>5. Contact corporate nuclear response team</Line>
                      <Line yellow>Stack can run 72 hours on backup power</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },
            },
          },

          "Kergoz Compound": {
            content: (
              <MaintenanceAccess
                title="[KERGOZ COMPOUND]"
                deviceModel="Location Survey"
                deviceId="BASE-KERGOZ-01"
                firmwareVersion="v1.0.0"
                systemStatus="CULT ACTIVITY"
                notes={[
                  "Level B15",
                  "Cult of Kergoz settlement",
                  "Repurposed cars and tents",
                  "Secret entrance to The Synk",
                  "~20-30 cultists present"
                ]}
              >
                <InsetBox title="DESCRIPTION:">
                  <Line>Cultists squatting in repurposed cars</Line>
                  <Line>Tents and makeshift shelters</Line>
                  <Line>Covered in occult symbols and graffiti</Line>
                  <Line>Smells of incense and decay</Line>
                </InsetBox>
                <InsetBox title="LEADERSHIP:">
                  <Line red bold>1 Heir of Kergoz present</Line>
                  <Line red>Leads rituals and sacrifices</Line>
                  <Line yellow>Hostile to outsiders unless they show interest in cult</Line>
                </InsetBox>
                <InsetBox title="POPULATION:">
                  <Line>~20-30 cultists at any given time</Line>
                  <Line>Mix of desperate residents and true believers</Line>
                  <Line>Some come for shelter, stay for community</Line>
                  <Line yellow>Occasionally kidnap victims for sacrifice</Line>
                </InsetBox>
                <InsetBox title="SECRET ENTRANCE:">
                  <Line red bold>Path to The Synk (Medieval Ruins):</Line>
                  <Line>Hidden behind altar in main tent</Line>
                  <Line>Heavily guarded by Heir of Kergoz</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Crypto Racks": {
            content: (
              <MaintenanceAccess
                title="[CRYPTO RACKS]"
                deviceModel="Mining Operation"
                deviceId="BASE-CRYPTO-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Level B13",
                  "Cryptocurrency mining operation",
                  "Natural cave (former water spring)",
                  "Hundreds of processing units",
                ]}
              >
                <InsetBox title="DESCRIPTION:">
                  <Line>Hundreds of processors mining cryptocurrency</Line>
                  <Line>Located in natural cave</Line>
                  <Line>Extreme heat from processors</Line>
                  <Line>Constant whirring and fan noise</Line>
                </InsetBox>
                <InsetBox title="SECURITY:">
                  <Line yellow>Gang-Goons on guard</Line>
                  <Line yellow>Desperate for investors and protection money</Line>
                  <Line yellow>Will negotiate before resorting to violence</Line>
                  <Line yellow>Poorly armed but determined</Line>
                </InsetBox>
                <InsetBox title="OPERATION:">
                  <Line>Mining RATCOIN cryptocurrency</Line>
                  <Line>Barely profitable after power costs</Line>
                  <Line>Frequent equipment failures</Line>
                  <Line smoke>Gang always looking for backers or buyers</Line>
                </InsetBox>
                <InsetBox title="OPPORTUNITY:">
                  <Line cyan>• Invest in operation (risky, small returns)</Line>
                  <Line cyan>• Buy equipment (used crypto miners)</Line>
                  <Line cyan>• Steal RATCOIN (heavily guarded)</Line>
                  <Line cyan>• Sabotage for rival gang</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "The Rot": {
            content: (
              <MaintenanceAccess
                title="[THE ROT]"
                deviceModel="Biohazard Zone"
                deviceId="BASE-ROT-01"
                firmwareVersion="v1.0.0"
                systemStatus="QUARANTINED"
                notes={[
                  "Level B18",
                  "Fungal contamination",
                  "Partially contained",
                  "Entire section covered in growth",
                ]}
              >
                <InsetBox title="HAZARD PROFILE:">
                  <Line red bold>BIOHAZARD - FUNGAL CONTAMINATION</Line>
                  <Line red>Status: Partially contained</Line>
                  <Line red>Threat: Infestation risk</Line>
                  <Line red>Last Entry: 6 months ago</Line>
                </InsetBox>
                <InsetBox title="DESCRIPTION:">
                  <Line>Fungal growths covering entire section</Line>
                  <Line>Decaying organic matter throughout</Line>
                  <Line>Thick spores in air (filter mask required)</Line>
                  <Line>Bioluminescent in places (eerie glow)</Line>
                </InsetBox>
                <InsetBox title="EXPOSURE PROTOCOL:">
                  <Line yellow>Random infestation on failed save</Line>
                  <Line yellow>Symptoms appear within 24 hours</Line>
                  <Line smoke>Medical treatment required if infected</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Utility Corridors": {
            content: (
              <MaintenanceAccess
                title="[UTILITY CORRIDOR MAP]"
                deviceModel="Maintenance Network"
                deviceId="BASE-UTIL-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Level B8",
                  "Secret routes through The Base",
                  "Dark, winding, dangerous",
                ]}
              >
                <InsetBox title="KNOWN PASSAGES (Difficult Navigation):">
                  <Line neon>• Base to Capsule Closets (via Net Control)</Line>
                  <Line neon>• Base to The Synk (via maintenance shafts)</Line>
                  <Line neon>• Base to Multimart (via freight corridors)</Line>
                  <Line neon>• Base to Alliansen Arms (via water reclamation)</Line>
                  <Line smoke small>All routes dark, dangerous, unmapped</Line>
                </InsetBox>
                <InsetBox title="HAZARDS:">
                  <Line red>• Total darkness (bring light source)</Line>
                  <Line red>• Flooded sections (waist-deep water)</Line>
                  <Line red>• Exposed electrical wiring</Line>
                  <Line red>• Structural instability (ceiling collapse risk)</Line>
                  <Line red>• Vermin encounters (rats, worse)</Line>
                </InsetBox>
                <InsetBox title="ADVANTAGES:">
                  <Line cyan>• Bypass security checkpoints</Line>
                  <Line cyan>• Avoid cameras and surveillance</Line>
                  <Line cyan>• Access restricted areas undetected</Line>
                  <Line cyan>• Fastest route between distant levels (if you know the way)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Sealed Areas": {
            password: {
              pw: "sealed",
              hint: "What dangerous base areas are",
              difficulty: "medium",
              content: <Locked theme="terminal" title="SEALED AREAS" />
            },
            content: (
              <MaintenanceAccess
                title="[SEALED AREAS - BASE LEVELS]"
                deviceModel="Quarantine Management"
                deviceId="BASE-SEALED-01"
                firmwareVersion="v1.0.0"
                systemStatus="MULTIPLE HAZARDS"
                notes={[
                  "Various locations",
                  "Quarantined and dangerous zones",
                  "Access restricted",
                  "Entry at own risk"
                ]}
              >
                <InsetBox title="FALLOUT SHELTER (Level B17):">
                  <Line yellow bold>SEALED - UNKNOWN CONTENTS</Line>
                  <Line>Status: Locked for 10+ years</Line>
                  <Line>Bounty: 500¤ to open and report</Line>
                  <Line>Last Access: Over a decade ago</Line>
                  <Line smoke>Old Cold War-era shelter, no one knows what's inside</Line>
                  <Line yellow>May contain supplies, corpses, or worse</Line>
                </InsetBox>
                <InsetBox title="BODY COMPACTOR (Level B19):">
                  <Line yellow bold>UNSANCTIONED USE - GANG ACTIVITY</Line>
                  <Line>Status: Active (illegal use)</Line>
                  <Line>Users: Local gang-goons</Line>
                  <Line>Risk: Witness elimination</Line>
                  <Line smoke>Originally for trash, now disposes of bodies</Line>
                  <Line red>Witnessing disposal is extremely dangerous</Line>
                </InsetBox>
                <InsetBox title="STACK ARCHIVE (Level B16):">
                  <Line cyan bold>ABANDONED - VERMIN INFESTATION</Line>
                  <Line>Rusted filing cabinets</Line>
                  <Line>Hundreds of rats and vermin</Line>
                  <Line>Old records and documents (mostly worthless)</Line>
                  <Line smoke>Occasional salvage opportunity</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "Crypt Rooms": {
        content: (
          <MaintenanceAccess
            title="[CRYPT ROOMS]"
            deviceModel="Residential Zone"
            deviceId="BASE-CRYPT-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Level B7",
              "Cheapest housing in The 55",
              "Concrete boxes",
              "50¤/month rent",
              "Hundreds of units"
            ]}
          >
            <InsetBox title="DESCRIPTION:">
              <Line>Concrete boxes barely large enough to lie down</Line>
              <Line>No windows, minimal ventilation</Line>
              <Line>Shared bathrooms and water access</Line>
              <Line>Constant smell of dampness and mold</Line>
              <Line smoke>Residents call them 'crypts' for a reason</Line>
            </InsetBox>
            <InsetBox title="RENT:">
              <Line yellow>50¤/month (cheapest in The 55)</Line>
              <Line yellow>No deposit required</Line>
              <Line yellow>No lease (pay monthly or get evicted)</Line>
              <Line smoke>Perfect for those with no other options</Line>
            </InsetBox>
            <InsetBox title="POPULATION:">
              <Line>Hundreds of residents</Line>
              <Line>Mix of desperate, destitute, hiding</Line>
              <Line>High turnover rate</Line>
              <Line>Minimal community (survival mode)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "VIP Parking": {
        content: (
          <MaintenanceAccess
            title="[VIP PARKING]"
            deviceModel="Premium Vehicle Storage"
            deviceId="BASE-VIP-PARK-01"
            firmwareVersion="v1.0.0"
            systemStatus="SECURE"
            notes={[
              "Level B5",
              "Corporate access only",
              "Robot valet service",
              "Each worth D20x1K¤"
            ]}
          >
            <InsetBox title="SECURITY:">
              <Line red>Corporate access only (keycard required)</Line>
              <Line red>Robot valet guards vehicles</Line>
              <Line red>Cameras monitoring 24/7</Line>
              <Line red>Automated alarm system</Line>
              <Line yellow>Breaking in triggers corporate security response</Line>
            </InsetBox>
            <InsetBox title="VEHICLES PRESENT:">
              <Line cyan>Mix of sports cars, luxury sedans, armored SUVs</Line>
              <Line smoke>Owners: Corporate executives from upper levels</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  "[G000 - U006] Four Court (Ground Level)": {
    content: (
      <PublicPortal
        name="FOUR COURT"
        tagline="Main entrance to The 55"
        network="FOUR_COURT_PUBLIC"
        signalStrength="strong"
        status="✓ OPEN 24/7"
        statusColor="neon"
        notes={[
          "Ground level",
          "4 large entrances to central courtyard",
          "Local merchants, con artists, street culture",
          "Main access point for The 55"
        ]}
        theme="limeade"
      />
    ),
    related_commands: {
      "Court Directory": {
        content: (
          <MaintenanceAccess
            title="[FOUR COURT DIRECTORY]"
            deviceModel="Public Zone Mapping"
            deviceId="COURT-DIR-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Ground level",
              "Main entrance to The 55",
              "8 key locations",
              "High traffic 24/7"
            ]}
          >
            <InsetBox title="KEY LOCATIONS:">
              <Line neon>1. Info Walls</Line>
              <Line smoke>Inner walls covered in printouts, graffiti, requests</Line>
              <Line neon>2. Court Market</Line>
              <Line smoke>Dozens of merchants, basic equipment</Line>
              <Line neon>3. Food Stalls</Line>
              <Line smoke>Locust pizza, synth ramen, moonshine, modified vending machines</Line>
              <Line neon>4. C.O.P. Booth</Line>
              <Line smoke>Corporate Order Police</Line>
              <Line neon>5. Gates (4 total)</Line>
              <Line smoke>Massive accordion doors, open 24/7 (beggars, con artists, preachers)</Line>
              <Line neon>6. Fideistic Transformation Kiosk</Line>
              <Line smoke>Religious converts, body rental contracts (2 UCS sec ops on duty)</Line>
              <Line neon>7. Elevators</Line>
              <Line smoke>Slow, crowded (hours-long lineups, most use stairs)</Line>
              <Line neon>8. Community Outreach Booth</Line>
              <Line smoke>Volunteers protecting The 55 (jobs available, low/no pay)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Court Market": {
            content: (
              <MaintenanceAccess
                title="[COURT MARKET]"
                deviceModel="Merchant Zone"
                deviceId="COURT-MARKET-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Ground level courtyard",
                  "30-40 vendors on any given day",
                  "Basic equipment available",
                  "Pickpockets",
                ]}
              >
                <InsetBox title="AVAILABLE GOODS (Standard prices):">
                  <Line neon>• Food and water (synth and some fresh)</Line>
                  <Line neon>• Clothing (second-hand, some new)</Line>
                  <Line neon>• Tools (general purpose, basic quality)</Line>
                  <Line neon>• Electronics (phones, chargers, batteries)</Line>
                  <Line neon>• Miscellaneous supplies</Line>
                  <Line smoke small>For illegal items: Look higher in stack (Multimart, private vendors)</Line>
                </InsetBox>
                <InsetBox title="MERCHANTS:">
                  <Line>30-40 vendors on any given day</Line>
                  <Line>Mix of regulars and traveling merchants</Line>
                  <Line>Most friendly and willing to haggle</Line>
                  <Line>Some sell questionable goods (buyer beware)</Line>
                </InsetBox>
                <InsetBox title="SECURITY WARNING:">
                  <Line red>Multiple incidents daily</Line>
                  <Line yellow>C.O.P. booth nearby but rarely intervenes</Line>
                  <Line smoke>Vendors watch each others' stalls</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Food Stalls": {
            content: (
              <MaintenanceAccess
                title="[FOUR COURT FOOD STALLS]"
                deviceModel="Vendor Zone"
                deviceId="COURT-FOOD-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Street food and refreshments",
                  "Multiple vendors",
                  "Prices: 2¤-10¤ per item",
                  "Quality varies"
                ]}
              >
                <InsetBox title="MENU:">
                  <Line cyan>Locust pizza slice: 6¤</Line>
                  <Line cyan>Synth ramen bowl: 8¤</Line>
                  <Line cyan>Local moonshine (shot): 4¤</Line>
                  <Line cyan>Vending machine snacks: 2-5¤</Line>
                  <Line cyan>Mystery meat skewer: 5¤</Line>
                  <Line cyan>Fresh fruit (rare): 10¤</Line>
                  <Line cyan>Bottled water: 3¤</Line>
                  <Line cyan>Synth coffee: 2¤</Line>
                </InsetBox>
                <InsetBox title="POPULAR VENDORS:">
                  <Line neon bold>Mama's Locust Pizza:</Line>
                  <Line smoke>Best pizza in Four Court, always busy</Line>
                  <Line neon bold>Synth Ramen Cart:</Line>
                  <Line smoke>Fast service, filling portions</Line>
                  <Line neon bold>Moonshine Vendor:</Line>
                  <Line smoke>Homemade alcohol of questionable origin</Line>
                  <Line yellow>You'll regret it</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "C.O.P. Booth": {
            content: (
              <MaintenanceAccess
                title="[CORPORATE ORDER POLICE BOOTH]"
                deviceModel="Security Station"
                deviceId="COURT-COP-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Ground level security presence",
                  "Generic Sec Ops (rotating shifts)",
                  "Armored Cars (garage attached)",
                  "Vindicator Droid (emergency response)"
                ]}
              >
                <InsetBox title="JURISDICTION:">
                  <Line>Officially: Four Court security</Line>
                  <Line>In practice: Minimal enforcement</Line>
                  <Line>Only respond to major incidents or corpo interests</Line>
                  <Line yellow>Will not help with pickpocketing, minor disputes</Line>
                </InsetBox>
                <InsetBox title="WILL RESPOND TO:">
                  <Line cyan>• Violence involving corpo personnel</Line>
                  <Line cyan>• Major theft (1,000¤+ value)</Line>
                  <Line cyan>• Threats to Four Court structure</Line>
                  <Line cyan>• Gang warfare affecting access</Line>
                </InsetBox>
                <InsetBox title="WILL IGNORE:">
                  <Line smoke>• Pickpocketing</Line>
                  <Line smoke>• Con artists</Line>
                  <Line smoke>• Minor disputes</Line>
                  <Line smoke>• Most resident-on-resident crime</Line>
                </InsetBox>
                <InsetBox title="REPUTATION:">
                  <Line>Locals view C.O.P. as corporate enforcers</Line>
                  <Line>Most residents avoid contact unless necessary</Line>
                  <Line>Known to harass lower-level residents</Line>
                  <Line yellow>Reporting crimes may lead to being hassled yourself</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Community Outreach Booth": {
            content: (
              <MaintenanceAccess
                title="[55 COMMUNITY OUTREACH BOOTH]"
                deviceModel="Volunteer Organization"
                deviceId="COURT-OUTREACH-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Ground level",
                  "One of few public institutions left",
                  "Overworked volunteers",
                  "Fighting corporations, cults, NuFascists",
                  "Jobs available (low/no pay)"
                ]}
              >
                <InsetBox title="SERVICES:">
                  <Line neon>• Job board (community defense, investigations)</Line>
                  <Line neon>• Conflict mediation</Line>
                  <Line neon>• Resource coordination (food, supplies)</Line>
                  <Line neon>• Legal aid referrals</Line>
                  <Line neon>• Information sharing (warnings, threats)</Line>
                </InsetBox>
                <InsetBox title="STAFFING:">
                  <Line>2-3 volunteers at booth (waking hours)</Line>
                  <Line>Connected to Ada Five-Five (Alliansen Arms)</Line>
                  <Line>Network of ~20 active community members</Line>
                </InsetBox>
                <InsetBox title="CURRENT PRIORITIES:">
                  <Line cyan>• NuFascist bounty program (1k¤ per head)</Line>
                  <Line cyan>• Anti-eviction legal defense</Line>
                  <Line cyan>• Universal basic income fund (12% funded)</Line>
                  <Line cyan>• Corporate expansion resistance</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Fideistic Transformation Kiosk": {
            content: (
              <MaintenanceAccess
                title="[FIDEISTIC TRANSFORMATION KIOSK]"
                deviceModel="Religious Recruitment Station"
                deviceId="COURT-FIDEIS-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Ground level",
                  "Corp-church recruitment",
                  "Body rental contracts available",
                  "2 United Citadel sec ops on duty (during hours)"
                ]}
              >

                <InsetBox title="SERVICES:">
                  <Line yellow>Religious conversion programs</Line>
                  <Line yellow>Body rental contracts (sell your body when you die)</Line>
                  <Line yellow>Ego upload consultations</Line>
                  <Line smoke>"Eternal singularity" in divine mind-cloud (allegedly)</Line>
                </InsetBox>
                <InsetBox title="SECURITY:">
                  <Line red>2 United Citadel Security ops on duty</Line>
                  <Line red>Active during kiosk operating hours</Line>
                  <Line red>Will defend kiosk if attacked</Line>
                </InsetBox>
                <InsetBox title="WARNING:">
                  <Line yellow>Success of mind uploads questionable</Line>
                  <Line yellow>Ego continuance unknown</Line>
                  <Line yellow>Body rental means your corpse is corporate property</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_LOWER_LEVELS_COMMANDS;
