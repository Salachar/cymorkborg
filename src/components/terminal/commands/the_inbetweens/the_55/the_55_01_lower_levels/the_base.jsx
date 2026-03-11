import {
  Line,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  Locked,
  MaintenanceAccess,
  PublicPortal,
} from "@terminal/retcomdevice";

export const THE_BASE_COMMANDS = {
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
};
