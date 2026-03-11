import {
  Line,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  MaintenanceAccess,
  PersonnelFile,
} from "@terminal/retcomdevice";

export const THE_SNYK_COMMANDS = {
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
};
