import {
  Line,
  Divider,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  CCTV,
  Locked,
  MaintenanceAccess,
  Message,
  PublicPortal,
} from "@terminal/retcomdevice";

import cctv_image from '@images/the55/the_rec_cctv.png';

export const THE_55_REC_COMMANDS = {
  "[U051 - U060] The REC": {
    content: (
      <PublicPortal
        name="THE REC"
        tagline="Recreation Levels - Abandoned"
        network="NONE"
        signalStrength="weak"
        status="EXTREME HAZARD - SEALED"
        statusColor="red"
        notes={[
          "Once required recreational amenities, now abandoned",
          "Multiple hostile entities and environmental hazards",
          "Semi-contained chaos"
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

      "REC Overview": {
        content: (
          <MaintenanceAccess
            title="[THE REC - RECREATION LEVELS]"
            deviceModel="Hazard Zone Management"
            deviceId="REC-ZONE-01"
            firmwareVersion="v1.0.0"
            systemStatus="SEMI-CONTAINED"
            notes={[
              "Every stack once required 10+ levels of parks and recreation",
              "They never said anything about maintaining them",
              "Now: Semi-contained chaos locals call THE REC"
            ]}
          >

            <InsetBox title="KNOWN THREATS:">
              <Line red>• Chemmed Gang-Goons</Line>
              <Line red>• Blightlings</Line>
              <Line red>• Bloated</Line>
              <Line red pulse bold>• Rot King</Line>
            </InsetBox>
            <InsetBox title="ENVIRONMENTAL HAZARDS:">
              <Line yellow>• Fungal overgrowth from park and pool</Line>
              <Line yellow>• Toxic water in pool and showers</Line>
              <Line yellow>• Poor visibility (overgrowth, darkness)</Line>
            </InsetBox>
            <InsetBox title="ACCESS POINTS:">
              <Line cyan>• Maintenance access (credentials required)</Line>
              <Line cyan>• Ball Courts structural damage (exposed from below)</Line>
              <Line red bold>• Freight elevator (ROT KING)</Line>
            </InsetBox>
            <InsetBox title="BOUNTIES:">
              <Line neon bold>LAZET (Alliansen Arms #6101) PAYS:</Line>
              <Line neon>100¤ per biological sample from The REC</Line>
              <Line smoke>Interested in mutations, fungal specimens, entity tissue</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "REC Location Map": {
        content: (
          <MaintenanceAccess
            title="[THE REC - LOCATION MAP]"
            deviceModel="Facility Directory"
            deviceId="REC-MAP-01"
            firmwareVersion="v1.0.0"
            systemStatus="MONITORING"
            notes={[
              "10 floors of abandoned recreation facilities",
              "12 major locations identified",
              "Multiple threat zones"
            ]}
          >
            <InsetBox title="LEVEL 324-328: AQUATIC ZONE">
              <Line neon bold>1. POOL (Olympic-sized):</Line>
              <Line smoke>Long abandoned, strange ecosystem developed</Line>
              <Line smoke>Toxic water, bioluminescent algae</Line>
              <Line smoke>100¤ bounty per sample (Lazet)</Line>
              <Line yellow>Do not drink or swim in water</Line>
              <Divider />
              <Line neon bold>9. SHOWERS:</Line>
              <Line smoke>Humid, carpeted with fungi and rotting corpses</Line>
              <Line smoke>Slippery floors, poor visibility</Line>
              <Line red>Toxic spores in air</Line>
            </InsetBox>
            <InsetBox title="LEVEL 329-333: FITNESS ZONE">
              <Line neon bold>2. GYM:</Line>
              <Line smoke>Weights and equipment still functional</Line>
              <Line red>Extremely hostile to intruders</Line>
              <Divider />
              <Line neon bold>3. RUNNING TRACK:</Line>
              <Line smoke>Built along inner perimeter of floor</Line>
              <Line smoke>Overgrown from park and pool vegetation</Line>
              <Line smoke>Difficult terrain, limited visibility</Line>
            </InsetBox>
            <InsetBox title="LEVEL 334-338: ENTERTAINMENT ZONE">
              <Line neon bold>4. FLYNN'S CAVE (Ruined arcade):</Line>
              <Line smoke>Broken arcade machines and cabinets</Line>
              <Line smoke>Inhabited by d3 Ghosts</Line>
              <Line yellow>Digital entities, unpredictable behavior</Line>
              <Divider />
              <Line neon bold>7. CINEMA:</Line>
              <Line smoke>3 damaged screens, partially flooded</Line>
              <Line smoke>Old seats and projection equipment</Line>
              <Line cyan>Relatively safe (empty)</Line>
            </InsetBox>
            <InsetBox title="LEVEL 339-343: OUTDOOR ZONE">
              <Line neon bold>5. PARK:</Line>
              <Line smoke>Overgrown and mutated vegetation</Line>
              <Line smoke>Sealed to public</Line>
              <Line red>SOURCE of fungal contamination</Line>
              <Divider />
              <Line neon bold>6. BALL COURTS:</Line>
              <Line smoke>Moss and rot leaked in, floors collapsed</Line>
              <Line smoke>Easy access to other REC areas</Line>
              <Line yellow>Structural instability (collapse risk)</Line>
            </InsetBox>
            <InsetBox title="LEVEL 344-347: DANGER ZONE">
              <Line neon bold>8. THE HALLS:</Line>
              <Line smoke>Full of trash and barricaded doors</Line>
              <Line red bold>MINOS stalks these corridors</Line>
              <Line red>Cybered-up monster, extremely dangerous</Line>
              <Divider />
              <Line neon bold>10. GARDENS:</Line>
              <Line smoke>Converted to experimental botanical lab</Line>
              <Line smoke>Growing experimental drugs and mutated plants</Line>
              <Line yellow>Valuable but heavily guarded</Line>
            </InsetBox>
            <InsetBox title="LEVEL 348-349: VERTICAL DANGER">
              <Line neon bold>11. FREIGHT ELEVATOR:</Line>
              <Line red bold>HOME OF THE ROT KING</Line>
              <Line red>Mobile threat, climbs all surfaces</Line>
              <Line red>Can eat corpses to recover HP</Line>
              <Line red>Ambushes from elevator shaft</Line>
              <Divider />
              <Line neon bold>12. COMMON AREA:</Line>
              <Line smoke>Conversation pits, kids' play areas</Line>
              <Line smoke>Converted to gang makeshift homes</Line>
              <Line smoke>Lots of improvised gardens</Line>
              <Line smoke>Chemmed Gang-Goons live here</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "REC Monitoring": {
        password: {
          pw: "recreation",
          hint: "What REC is short for",
          difficulty: "easy",
          content: <Locked theme="terminal" title="REC MONITORING" />
        },
        content: (
          <Message
            title="REC MONITORING SYSTEMS"
            message="CONTAINMENT ACCESS GRANTED"
            note="Hazard zone monitoring - Emergency personnel only"
            theme="secure"
          />
        ),
        related_commands: {
          "Environmental Sensors": {
            content: (
              <MaintenanceAccess
                title="[REC ENVIRONMENTAL SENSORS]"
                deviceModel="Hazard Monitoring System"
                deviceId="ENV-SENS-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Real-time hazard monitoring",
                  "10 floors of contaminated space",
                  "Recommend respirators for all REC entry"
                ]}
              >
                <InsetBox title="AIR QUALITY:">
                  <Line red>Level 51-52 (Pool/Showers): TOXIC (Spores)</Line>
                  <Line yellow>Level 53-54 (Gym/Track): POOR (Stale air)</Line>
                  <Line yellow>Level 55-56 (Arcade/Cinema): POOR (Dust)</Line>
                  <Line red>Level 57-58 (Park/Courts): TOXIC (Fungal)</Line>
                  <Line yellow>Level 59 (Halls/Gardens): POOR (Decay)</Line>
                  <Line yellow>Level 60 (Elevator/Common): POOR (Rot)</Line>
                  <Line smoke>Recommend respirators for all REC entry</Line>
                </InsetBox>
                <InsetBox title="STRUCTURAL INTEGRITY:">
                  <Line cyan>Pool: 78% (Stable)</Line>
                  <Line cyan>Gym: 85% (Stable)</Line>
                  <Line yellow>Running Track: 71% (Degraded)</Line>
                  <Line cyan>Arcade: 82% (Stable)</Line>
                  <Line red>Park: 63% (Critical)</Line>
                  <Line red>Ball Courts: 41% (Collapsed sections)</Line>
                  <Line yellow>Cinema: 76% (Flooded)</Line>
                  <Line yellow>The Halls: 68% (Barricaded)</Line>
                  <Line yellow>Gardens: 73% (Modified)</Line>
                  <Line red>Freight Elevator: 55% (Damaged)</Line>
                </InsetBox>
                <InsetBox title="BIOLOGICAL CONTAMINATION:">
                  <Line red bold>ACTIVE CONTAMINATION ZONES:</Line>
                  <Line red>• Park (Level 57-58) - SOURCE of fungal spread</Line>
                  <Line red>• Pool (Level 51-52) - Toxic ecosystem development</Line>
                  <Line red>• Showers (Level 51-52) - Fungal growth, corpses</Line>
                  <Line red>• Ball Courts (Level 57-58) - Spillover from park</Line>
                  <Divider />
                  <Line yellow bold>CONTAINMENT STATUS:</Line>
                  <Line yellow>Semi-contained - Sealed doors prevent spread to other levels</Line>
                  <Line yellow>Internal spread uncontrolled within REC zone</Line>
                  <Line yellow>Regular breaches require security response</Line>
                </InsetBox>
                <InsetBox title="MOTION DETECTION (Last 24h):">
                  <Line neon>• Gym (Level 53-54) - Constant movement (gang activity)</Line>
                  <Line neon>• Gardens (Level 59) - Regular movement (gang cultivation)</Line>
                  <Line neon>• The Halls (Level 59) - Intermittent (Minos patrols)</Line>
                  <Line neon>• Freight Elevator - Sporadic (Rot King ambushes)</Line>
                  <Line neon>• Park (Level 57-58) - Extensive (Blightling infestation)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Containment Protocols": {
            content: (
              <MaintenanceAccess
                title="[REC CONTAINMENT PROTOCOLS]"
                deviceModel="Emergency Response System"
                deviceId="CONTAIN-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Emergency procedures for breach scenarios",
                  "Last breach: 2 days ago (Level 57-58)",
                  "Elimination authorization: APPROVED"
                ]}
              >
                <InsetBox title="CURRENT STATUS:">
                  <Line cyan>Containment Level: SEMI-CONTAINED</Line>
                  <Line yellow>Last Breach: 2 days ago (Level 57-58)</Line>
                  <Line cyan>Security Response: ACTIVE</Line>
                  <Line cyan>Elimination Authorization: APPROVED (All threats)</Line>
                </InsetBox>
                <InsetBox title="BREACH RESPONSE PROCEDURE:">
                  <Line neon bold>IF ENTITY ESCAPES REC ZONE:</Line>
                  <Line neon>1. Identify threat type and location</Line>
                  <Line neon>2. Alert Stack Command immediately</Line>
                  <Line neon>3. Deploy security team (armed)</Line>
                  <Line neon>4. Evacuate adjacent floors if necessary</Line>
                  <Line neon>5. Eliminate or recapture threat</Line>
                  <Line neon>6. Reinforce containment seals</Line>
                </InsetBox>
                <InsetBox title="THREAT ELIMINATION PRIORITIES:">
                  <Line red bold>HIGH PRIORITY (Eliminate on sight):</Line>
                  <Line red>• Blightlings (Spread contamination)</Line>
                  <Line red>• Bloated (Toxic hazard)</Line>
                  <Line red>• Rot King (Extreme danger)</Line>
                  <Divider />
                  <Line yellow bold>MEDIUM PRIORITY (Contain or negotiate):</Line>
                  <Line yellow>• Minos (Dangerous but contained to Halls)</Line>
                  <Line yellow>• Ghosts (Low physical threat)</Line>
                  <Divider />
                  <Line smoke bold>LOW PRIORITY (Monitor only):</Line>
                  <Line smoke>• Chemmed Gang-Goons (Rational, can negotiate)</Line>
                </InsetBox>
                <InsetBox title="RECENT INCIDENTS:">
                  <Line neon>• 2 days ago - Single Blightling escaped to Level 350</Line>
                  <Line smoke>  Response: Security team eliminated, no casualties</Line>
                  <Line neon>• 1 week ago - Minos attempted breach at sealed door</Line>
                  <Line smoke>  Response: Reinforced seals, monitored, returned to Halls</Line>
                  <Line neon>• 2 weeks ago - Rot King ambushed maintenance crew</Line>
                  <Line smoke>  Response: 1 casualty, freight elevator marked off-limits</Line>
                </InsetBox>
                <InsetBox title="SEAL MAINTENANCE:">
                  <Line yellow>Stairwell doors inspected weekly</Line>
                  <Line yellow>Elevator access disabled (except freight - dangerous)</Line>
                  <Line yellow>Ventilation sealed to prevent spore spread</Line>
                  <Line yellow>Warning signs posted at all access points</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Bounty Board": {
            content: (
              <MaintenanceAccess
                title="[REC ELIMINATION BOUNTIES]"
                deviceModel="Community Threat Removal Program"
                deviceId="BOUNTY-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Community-funded threat removal",
                  "Last 30 days: 3 Blightlings, 7 samples",
                  "Major threats: 0 eliminated"
                ]}
              >
                <InsetBox title="BLIGHTLING ELIMINATION:">
                  <Line neon>Bounty: 50¤ per Blightling</Line>
                  <Line neon>Proof Required: Tissue sample or photo</Line>
                  <Line neon>Funded By: Community Outreach + Lazet</Line>
                  <Line smoke>Reduces contamination spread risk</Line>
                </InsetBox>
                <InsetBox title="MINOS ELIMINATION:">
                  <Line neon>Bounty: 2,000¤</Line>
                  <Line neon>Proof Required: Cybered bull head</Line>
                  <Line neon>Funded By: Stack Command</Line>
                  <Line smoke>Most dangerous individual threat, would allow Halls reclamation</Line>
                </InsetBox>
                <InsetBox title="ROT KING ELIMINATION:">
                  <Line neon>Bounty: 1,500¤</Line>
                  <Line neon>Proof Required: Core tissue sample</Line>
                  <Line neon>Funded By: Stack Command</Line>
                  <Line smoke>Would make freight elevator usable again</Line>
                </InsetBox>
                <InsetBox title="BIOLOGICAL SAMPLES:">
                  <Line neon>Bounty: 100¤ per unique sample</Line>
                  <Line neon>Proof Required: Viable specimen</Line>
                  <Line neon>Funded By: Lazet (Alliansen Arms #6101)</Line>
                  <Line smoke>For research purposes, any REC organism</Line>
                </InsetBox>
                <InsetBox title="CLAIMED BOUNTIES (Last 30 Days):">
                  <Line cyan>• 3 Blightlings eliminated (150¤ paid out)</Line>
                  <Line cyan>• 7 biological samples collected (700¤ paid out)</Line>
                  <Line yellow>• 0 major threats eliminated</Line>
                </InsetBox>
                <InsetBox title="SUBMISSION PROCESS:">
                  <Line neon>1. Bring proof to Stack Command or Community Outreach</Line>
                  <Line neon>2. Proof verified by staff or Lazet (for samples)</Line>
                  <Line neon>3. Payment issued immediately upon verification</Line>
                  <Line yellow>No bounty for gang-goons (they're human residents)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_REC_COMMANDS;
