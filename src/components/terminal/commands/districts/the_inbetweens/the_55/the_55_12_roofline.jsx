import {
  Line,
  Divider,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  Camera,
  CCTV,
  Locked,
  MaintenanceAccess,
  Message,
  PersonnelFile,
  PublicPortal,
} from "@terminal/retcomdevice";

import cctv_image from '@images/the55/stack_rooftop_cctv.png';

export const THE_55_ROOFLINE_COMMANDS = {
  "[U332 - U365] The Roofline": {
    content: (
      <PublicPortal
        name="THE ROOFLINE"
        tagline="Where the tower meets the sky"
        network="ROOFLINE_PUBLIC"
        signalStrength="strong"
        status="RESTRICTED ACCESS"
        statusColor="yellow"
        notes={[
          "Unfinished floors and infrastructure",
          "Security checkpoints active",
          "Fresh air above The City's smog layer",
          "Graffiti artists and cultists at night"
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

      "Roofline Overview": {
        content: (
          <MaintenanceAccess
            title="[THE ROOFLINE]"
            deviceModel="Infrastructure Management System"
            deviceId="ROOFLINE-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
          >
            <InsetBox title="KEY FEATURES:">
              <Line neon>• Construction crane</Line>
              <Line neon>• VIP & Emergency helipads</Line>
              <Line neon>• Solar field (847 panels, 2.4 MW output)</Line>
              <Line neon>• Wind turbine (defunct, stripped for parts, graffiti covered)</Line>
              <Line neon>• Security checkpoint</Line>
              <Line neon>• Drone garage</Line>
              <Line neon>• Storage crates (37 containers, rumored anomalous tech)</Line>
              <Line neon>• Observatory</Line>
            </InsetBox>
            <InsetBox title="SECURITY STATUS:">
              <Line red>Security checkpoint staffed 24/7</Line>
              <Line red>Drone patrols (Stinger Drones, remote controlled)</Line>
              <Line red>Camera surveillance (limited coverage, blind spots exist)</Line>
              <Line yellow>Purpose: Keep citizens from machinery & vandalism</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Construction Crane": {
            content: (
              <MaintenanceAccess
                title="[CONSTRUCTION CRANE]"
                deviceModel="TitanLift 9000-XL"
                deviceId="CRANE-340"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Heavy cargo lift - Upper level access",
                  "Capacity: 50 tons",
                  "Reach: Levels 214-365",
                ]}
              >
                <InsetBox title="SPECIFICATIONS:">
                  <Line cyan>Model: TitanLift 9000-XL</Line>
                  <Line cyan>Capacity: 50 tons</Line>
                  <Line cyan>Reach: Levels 214-365</Line>
                  <Line cyan>Status: OPERATIONAL (limited hours)</Line>
                  <Line cyan>Control: Operator cabin + remote terminal</Line>
                </InsetBox>
                <InsetBox title="CURRENT USAGE:">
                  <Line neon>• Move cargo on upper levels</Line>
                  <Line neon>• VIP deliveries (furniture, vehicles)</Line>
                  <Line neon>• Maintenance access for infrastructure repair</Line>
                  <Line neon>• Emergency evacuation capability (rarely used)</Line>
                </InsetBox>
                <InsetBox title="CONTROL REQUIREMENTS:">
                  <Line yellow>Operator license required (corp issued)</Line>
                  <Line yellow>Physical access: Cabin on Level 340</Line>
                  <Line yellow>Safety override: Emergency stop at checkpoint</Line>
                </InsetBox>
                <InsetBox title="RECENT ACTIVITY:">
                  <Line cyan>Yesterday: Delivered solar panel replacements (Level 355)</Line>
                  <Line cyan>3 days ago: Moved furniture to penthouse (Level 287)</Line>
                  <Line cyan>Last week: Lifted armored van to Unit 290-1</Line>
                  <Line yellow>Maintenance scheduled: Next week</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "VIP & Emergency Helipads": {
            content: (
              <MaintenanceAccess
                title="[VIP & EMERGENCY HELIPADS]"
                deviceModel="Landing Pad System"
                deviceId="HELIPADS-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "5 helipads total",
                  "Reserved for residents floors 214-331",
                  "Facial recognition + authorization required"
                ]}
              >
                <InsetBox title="HELIPAD LOCATIONS:">
                  <Line cyan>Pad Alpha (Level 365): VIP primary</Line>
                  <Line cyan>Pad Beta (Level 360): VIP secondary</Line>
                  <Line cyan>Pad Gamma (Level 350): Emergency services</Line>
                  <Line cyan>Pad Delta (Level 345): Corporate charter</Line>
                  <Line cyan>Pad Echo (Level 340): Medical evacuation</Line>
                </InsetBox>
                <InsetBox title="ACCESS RESTRICTIONS:">
                  <Line red>Residents: Floors 214-331 (verified by facial recognition)</Line>
                  <Line red>Corporate executives: Pre-approved list</Line>
                  <Line red>Emergency services: Priority override</Line>
                  <Line red>Charter services: Prime Convoys VIP Station</Line>
                  <Line yellow>Unauthorized landing triggers immediate security response</Line>
                </InsetBox>
                <InsetBox title="RECENT FLIGHTS:">
                  <Line neon>2 hours ago: Corporate exec departed (Pad Alpha)</Line>
                  <Line neon>Yesterday: Medical evacuation (Pad Echo - heart attack)</Line>
                  <Line neon>3 days ago: VIP arrival from off-city resort (Pad Beta)</Line>
                  <Line yellow>Last week: Unauthorized drone (shot down by Stinger Drones)</Line>
                </InsetBox>
                <InsetBox title="CURRENT STATUS:">
                  <Line cyan>Pad Alpha: AVAILABLE</Line>
                  <Line cyan>Pad Beta: AVAILABLE</Line>
                  <Line cyan>Pad Gamma: AVAILABLE</Line>
                  <Line yellow>Pad Delta: RESERVED (corporate charter, 6 hours)</Line>
                  <Line cyan>Pad Echo: AVAILABLE</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Rooflight System": {
            content: (
              <MaintenanceAccess
                title="[ROOFLIGHT SYSTEM]"
                deviceModel="Natural Light Infrastructure"
                deviceId="ROOFLIGHT-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Acre of reinforced glass",
                  "Natural light to Level 214",
                  "Daily cleaning by custodian squads",
                  "Structural integrity: 98%"
                ]}
              >
                <InsetBox title="SYSTEM OVERVIEW:">
                  <Line cyan>Size: 1 acre (4,047 m²)</Line>
                  <Line cyan>Material: Reinforced transparent alloy</Line>
                  <Line cyan>Light penetration: Levels 214-365</Line>
                  <Line cyan>Maintenance: Daily cleaning (custodian squads)</Line>
                  <Line cyan>Structural integrity: 98% (monitored)</Line>
                </InsetBox>
                <InsetBox title="CLEANING SCHEDULE:">
                  <Line neon>Daily: 06:00-10:00 (exterior surface)</Line>
                  <Line neon>Weekly: Interior inspection (Level 214)</Line>
                  <Line neon>Monthly: Structural assessment</Line>
                  <Line yellow>Custodian squads: Underpaid, overworked, resentful</Line>
                </InsetBox>
                <InsetBox title="RECENT ISSUES:">
                  <Line yellow>Last week: Minor crack detected (Sector 7-B)</Line>
                  <Line smoke>Status: Repaired, monitoring</Line>
                  <Divider />
                  <Line yellow>2 weeks ago: Graffiti on exterior (paint removal)</Line>
                  <Line smoke>Perpetrators: Not caught</Line>
                  <Divider />
                  <Line yellow>3 months ago: Bird strike (no structural damage)</Line>
                  <Line smoke>Note: Rare above smog layer</Line>
                </InsetBox>
                <InsetBox title="ACCESS POINTS:">
                  <Line cyan>Maintenance catwalks (Level 365 - requires harness)</Line>
                  <Line cyan>Interior access (Level 214 - locked maintenance doors)</Line>
                  <Line red>Working on Rooflight without safety gear = death</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Solar Field": {
            content: (
              <MaintenanceAccess
                title="[SOLAR FIELD ARRAY]"
                deviceModel="Power Generation System"
                deviceId="SOLAR-355-360"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Levels 355-360",
                  "847 panels total (823 operational)",
                  "Current output: 2.4 MW",
                  "Backup power for upper floors"
                ]}
              >
                <InsetBox title="STATS:">
                  <Line cyan>Total Panels: 847 units</Line>
                  <Line cyan>Operational: 823 (97.2%)</Line>
                  <Line cyan>Current Output: 2.4 MW</Line>
                  <Line cyan>Battery Storage: 78% charged</Line>
                  <Line cyan>Efficiency: 89% (above smog helps)</Line>
                </InsetBox>
                <InsetBox title="READINGS:">
                  <Line neon>Solar Irradiance: 850 W/m² (OPTIMAL)</Line>
                  <Line neon>Panel Temperature: 42°C (NORMAL)</Line>
                  <Line neon>Inverter Status: All functional (GOOD)</Line>
                  <Line neon>Battery Health: 94% (GOOD)</Line>
                </InsetBox>
                <InsetBox title="ALERTS:">
                  <Line yellow>• 24 panels offline (scheduled replacement next month)</Line>
                  <Line yellow>• Sector 3 inverter efficiency down 5% (monitoring)</Line>
                  <Line yellow>• Bird nesting detected (Panels 450-455, cleaning scheduled)</Line>
                </InsetBox>
                <InsetBox title="PURPOSE:">
                  <Line smoke>Backup power for upper floors (214-365) during grid failures</Line>
                  <Line smoke>Critical infrastructure</Line>
                  <Line smoke>Last service: 2 weeks ago | Next maintenance: 4 weeks</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Wind Turbine (Defunct)": {
            content: (
              <MaintenanceAccess
                title="[WIND TURBINE - DEFUNCT]"
                deviceModel="SkyWind 5000"
                deviceId="TURBINE-365"
                firmwareVersion="v1.0.0"
                systemStatus="NON-OPERATIONAL"
                notes={[
                  "Decommissioned 15 years ago",
                  "Stripped for parts, vandalized, rusted",
                  "Now: Graffiti monument to failed green energy"
                ]}
              >
                <InsetBox title="TURBINE STATUS:">
                  <Line red>Model: SkyWind 5000</Line>
                  <Line red>Status: NON-OPERATIONAL (15 years)</Line>
                  <Line red>Condition: Stripped, vandalized, rusted</Line>
                  <Line cyan>Height: 50 meters above Level 365</Line>
                  <Line smoke>Original Output: 5 MW (when functional)</Line>
                </InsetBox>
                <InsetBox title="HISTORY:">
                  <Line yellow>Installed: 40 years ago (alternative energy initiative)</Line>
                  <Line yellow>Operational: 25 years (intermittent failures)</Line>
                  <Line yellow>Decommissioned: 15 years ago (repair costs too high)</Line>
                  <Line smoke>Current use: Monument to failed green energy</Line>
                </InsetBox>
                <InsetBox title="VANDALISM & GRAFFITI:">
                  <Line pink>• "CORPO FAILURE" (large letters on turbine base)</Line>
                  <Line pink>• Gang tags: Virid Vipers, Stone Eels, others</Line>
                  <Line pink>• Political slogans: "GREEN LIES BROWN SKIES"</Line>
                  <Line pink>• Art pieces: Elaborate murals by local artists</Line>
                  <Line pink>• Cult symbols: Keter Protocol, D3BT markings</Line>
                </InsetBox>
                <InsetBox title="STRIPPED PARTS:">
                  <Line red>Missing components (stolen over 15 years):</Line>
                  <Line smoke>• Copper wiring (sold for scrap)</Line>
                  <Line smoke>• Generator housing (metal salvage)</Line>
                  <Line smoke>• Control electronics (resold on black market)</Line>
                  <Line smoke>• Turbine blades (1 of 3 remaining)</Line>
                  <Line yellow>Estimated scrap value still remaining: 2,000¤</Line>
                </InsetBox>
                <InsetBox title="CURRENT USE:">
                  <Line cyan>• Graffiti canvas (constantly updated)</Line>
                  <Line cyan>• Urban explorer destination (risky climb)</Line>
                  <Line cyan>• Secret meetup spot (hidden behind turbine base)</Line>
                  <Line cyan>• Symbol of corporate green-washing failure</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Graffiti Mural (Floor 350)": {
            content: (
              <MaintenanceAccess
                title="[GRAFFITI MURAL - FLOOR 350]"
                deviceModel="Cultural Landmark (Unofficial)"
                deviceId="MURAL-350"
                firmwareVersion="v1.0.0"
                systemStatus="EVOLVING"
                notes={[
                  "Once unblemished walls, now local art collection",
                  "Hidden from main security patrols (blind spot)",
                ]}
              >
                <InsetBox title="LOCATION:">
                  <Line>Floor 350 interior walls (unfinished construction area)</Line>
                  <Line>Accessible from multiple stairwells and service corridors</Line>
                  <Line>Hidden from main security patrols (blind spot)</Line>
                  <Line>Popular spot for graffiti artists and crews</Line>
                </InsetBox>
                <InsetBox title="NOTABLE ARTWORK:">
                  <Line pink>• "THE 55 BLEEDS" - 20-foot mural, tower as wounded giant</Line>
                  <Line pink>• "CORP DREAMS DIE HERE" - Abstract piece, dripping paint</Line>
                  <Line pink>• Gang territory markers - Virid Vipers vs Stone Eels war</Line>
                  <Line pink>• Portrait wall - Faces of residents who "disappeared"</Line>
                  <Line pink>• "KETER WATCHES" - Cult symbol, glows in dark (nano-paint)</Line>
                  <Line pink>• Collaborative piece - Dozens of artists, evolving</Line>
                </InsetBox>
                <InsetBox title="ADDING YOUR MARK:">
                  <Line yellow>OR gets noticed by underground art scene</Line>
                  <Line cyan>Success = respect from local crews, potential commissions</Line>
                  <Line smoke>Failure = painted over quickly or mocked publicly</Line>
                </InsetBox>
                <InsetBox title="SECURITY THREAT:">
                  <Line red>Corpos want to paint over it (haven't done it yet)</Line>
                  <Line yellow>Budget constraints delay action (always "next quarter")</Line>
                  <Line yellow>Security patrols occasionally sweep area</Line>
                </InsetBox>
                <InsetBox title="CULTURAL SIGNIFICANCE:">
                  <Line cyan>Represents resistance against corporate control</Line>
                  <Line cyan>Meeting place for underground artists</Line>
                  <Line cyan>Tourist attraction for urban explorers</Line>
                  <Line cyan>Historical record of The 55's counter-culture</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Observatory": {
            content: (
              <MaintenanceAccess
                title="[OBSERVATORY]"
                deviceModel="Observation Platform"
                deviceId="OBS-365"
                firmwareVersion="v1.0.0"
                systemStatus="OCCUPIED (Nights)"
                notes={[
                  "Level 365 (highest accessible point)",
                  "Graffiti sigils, clear air, panoramic views",
                ]}
              >
                <InsetBox title="LOCATION:">
                  <Line cyan>Level: 365 (highest accessible point)</Line>
                  <Line cyan>Structure: Unfinished observation platform</Line>
                  <Line cyan>Access: Stairways covered in graffiti sigils</Line>
                  <Line cyan>View: Panoramic - Above smog layer</Line>
                  <Line cyan>Air quality: Clean (rare for The City)</Line>
                </InsetBox>
                <InsetBox title="GRAFFITI SIGILS (Stairway markings):">
                  <Line pink>• Keter Protocol symbols (most prevalent)</Line>
                  <Line pink>• D3BT accelerationist slogans</Line>
                  <Line pink>• Heir of Kergoz warnings: "NANO ASCENDANT"</Line>
                  <Line pink>• Directional arrows leading to observatory</Line>
                  <Line pink>• Protective wards (alleged magical significance)</Line>
                </InsetBox>

                <InsetBox title="THE VIEW:">
                  <Line neon>Panoramic view of The City</Line>
                  <Line neon>Above smog layer - see stars at night</Line>
                  <Line neon>Sunrise/sunset views spectacular</Line>
                  <Line neon>Other megablocks visible on horizon</Line>
                  <Line cyan>"Worth the climb" - Universal consensus</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Storage Crates": {
            content: (
              <MaintenanceAccess
                title="[STORAGE CRATES]"
                deviceModel="Corporate Shipping Containers"
                deviceId="STORAGE-01"
                firmwareVersion="v1.0.0"
                systemStatus="MONITORED"
                notes={[
                  "37 containers total",
                  "Mixed corporate logos",
                  "Official: Building materials | Rumored: Anomalous tech",
                ]}
              >
                <InsetBox title="CONTAINER INVENTORY:">
                  <Line cyan>Total containers: 37 units</Line>
                  <Line cyan>Corporate logos: Mixed (various corps)</Line>
                  <Line cyan>Security: Basic locks</Line>
                  <Line cyan>Official contents: Building materials</Line>
                  <Line yellow>Rumored contents: Anomalous tech (unconfirmed)</Line>
                </InsetBox>
                <InsetBox title="LABELED CONTENTS (Official manifests):">
                  <Line neon>• Construction materials (concrete, steel beams)</Line>
                  <Line neon>• Solar panel replacements</Line>
                  <Line neon>• HVAC system components</Line>
                  <Line neon>• Electrical wiring and junction boxes</Line>
                  <Line neon>• Rooflight maintenance supplies</Line>
                  <Line neon>• General infrastructure repair materials</Line>
                </InsetBox>
                <InsetBox title="RUMORS (Unconfirmed speculation):">
                  <Line yellow>"This is a dumping ground for anomalous tech"</Line>
                  <Line yellow>"Failed corporate experiments hidden here"</Line>
                  <Line yellow>"Prototype cyberware that went wrong"</Line>
                  <Line yellow>"AI cores with unexpected behaviors"</Line>
                  <Line yellow>"Evidence of corporate crimes"</Line>
                  <Line red>No proof, but rumors persist among urban explorers</Line>
                </InsetBox>
                <InsetBox title="SECURITY:">
                  <Line cyan>Patrolled by security guards (every 2 hours)</Line>
                  <Line cyan>Drone surveillance (Camera 2 monitors area)</Line>
                  <Line yellow>Opening containers triggers motion alarms (50% chance)</Line>
                </InsetBox>
                <InsetBox title="RECENT ACTIVITY:">
                  <Line neon>Last week: 3 new containers delivered (construction materials)</Line>
                  <Line neon>2 weeks ago: 5 containers removed (contents unknown)</Line>
                  <Line yellow>Urban explorers occasionally break in (rarely caught)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Control Aerials": {
            content: (
              <MaintenanceAccess
                title="[CONTROL AERIALS]"
                deviceModel="Antenna Array System"
                deviceId="AERIALS-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Dense forest of antennas and satellite dishes",
                  "Control autonomous drones and craft",
                ]}
              >
                <InsetBox title="INFRASTRUCTURE:">
                  <Line>Dense cluster of receivers and transmitters</Line>
                  <Line>Antenna types: Communication, navigation, surveillance</Line>
                  <Line>Satellite dishes: Corporate, government, broadcast</Line>
                  <Line>Purpose: Control autonomous drones and craft in/around The 55</Line>
                </InsetBox>
                <InsetBox title="HACKING OPPORTUNITY:">
                  <Line yellow bold>DRONE/CRAFT CONTROL:</Line>
                  <Line yellow>Targets: Delivery drones, security drones, flying cars</Line>
                  <Line yellow>Range: Within visual range of The 55</Line>
                  <Line yellow>Duration: Temporary control (15-30 minutes before re-sync)</Line>
                  <Line red>Detection risk: High (corporate security monitors signal anomalies)</Line>
                </InsetBox>
                <InsetBox title="LAYOUT:">
                  <Line cyan>Maze-like arrangement (easy to get lost)</Line>
                  <Line cyan>Multiple levels (catwalks, platforms)</Line>
                  <Line cyan>Service access points (maintenance hatches)</Line>
                  <Line cyan>Blind spots (security cameras can't see through antenna forest)</Line>
                </InsetBox>
                <InsetBox title="USES:">
                  <Line neon>• Hacker hideout (signal tapping operations)</Line>
                  <Line neon>• Secret meetings (private, hidden from cameras)</Line>
                  <Line neon>• Urban explorer destination (great views from top)</Line>
                  <Line neon>• Graffiti canvas (hidden tags on antenna bases)</Line>
                </InsetBox>
                <InsetBox title="SECURITY:">
                  <Line yellow>Patrols rarely check area (too dense, time-consuming)</Line>
                  <Line yellow>Motion sensors disabled (too many false alarms from wind)</Line>
                  <Line yellow>Access technically restricted (not enforced)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Project CARV": {
            content: (
              <MaintenanceAccess
                title="[PROJECT CARV]"
                deviceModel="Vindicator-X Combat VTOL"
                deviceId="CARV-DELTA"
                firmwareVersion="v1.0.0"
                systemStatus="PARKED"
                notes={[
                  "Flying Vindicator - Corporate military vehicle",
                  "Parked on Helipad Delta (Level 345)",
                  "Biometric security locks",
                  "DO NOT APPROACH"
                ]}
              >
                <InsetBox title="VEHICLE STATUS:">
                  <Line red>Model: Vindicator-X Combat VTOL</Line>
                  <Line red>Status: PARKED (Helipad Delta)</Line>
                  <Line red>Owner: Unknown (classified)</Line>
                  <Line red>Security: Advanced (biometric locks)</Line>
                  <Line red>Armament: Heavy (classified loadout)</Line>
                </InsetBox>
                <InsetBox title="DESCRIPTION:">
                  <Line>Military-grade flying vehicle (VTOL capable)</Line>
                  <Line>Sleek black chassis, no visible markings</Line>
                  <Line>Armored hull (appears heavily reinforced)</Line>
                  <Line>Weapon mounts visible (purpose unclear)</Line>
                  <Line>Parked on Helipad Delta (Level 345)</Line>
                </InsetBox>
                <InsetBox title="PROJECT CARV (Classified):">
                  <Line yellow>Official designation: "Project CARV"</Line>
                  <Line yellow>Purpose: Unknown (corporate R&D suspected)</Line>
                  <Line yellow>Ownership: Not listed in public records</Line>
                  <Line yellow>Speculation: Black ops, corporate military, experimental tech</Line>
                  <Line red>High security clearance required for information access</Line>
                </InsetBox>
                <InsetBox title="SECURITY - DO NOT APPROACH:">
                  <Line red>Biometric security locks (fingerprint + retina scan)</Line>
                  <Line red>Proximity alarms (trigger at 5 meters)</Line>
                  <Line red>Armed response team on standby (2-minute response)</Line>
                  <Line red>Tampering = immediate security escalation</Line>
                </InsetBox>
                <InsetBox title="RECENT ACTIVITY:">
                  <Line cyan>Parked for 2 weeks (static, no movement)</Line>
                  <Line cyan>Daily maintenance checks (anonymous technicians)</Line>
                  <Line cyan>No flight activity observed</Line>
                  <Line yellow>Purpose of extended parking: Unknown</Line>
                </InsetBox>
                <InsetBox title="SPECULATION:">
                  <Line pink>"It's a corp black ops vehicle"</Line>
                  <Line pink>"Experimental weapons testing platform"</Line>
                  <Line pink>"VIP extraction vehicle (for emergencies)"</Line>
                  <Line pink>"Evidence of upcoming corporate war"</Line>
                  <Line pink>"Connected to missing persons from lower levels"</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "Security Checkpoint": {
        content: (
          <MaintenanceAccess
            title="[SECURITY CHECKPOINT]"
            deviceModel="Access Control Station"
            deviceId="CHECKPOINT-340"
            firmwareVersion="v1.0.0"
            systemStatus="ACTIVE"
            notes={[
              "Level 340 - Main access point",
              "Staffed 24/7 by Sec Ops",
            ]}
          >
            <InsetBox title="CHECKPOINT STATUS:">
              <Line cyan>Location: Level 340 - Main access point</Line>
              <Line cyan>Staffing: Sec Ops (6-12 guards)</Line>
              <Line cyan>Hours: 24/7 coverage</Line>
              <Line cyan>Equipment: Basic weapons, stun batons, comms</Line>
              <Line cyan>Drone Control: Remote access to Stinger Drones</Line>
            </InsetBox>
            <InsetBox title="SECURITY PROTOCOLS:">
              <Line neon>• Check ID against authorized list</Line>
              <Line neon>• Maintenance workers: Verified credentials required</Line>
              <Line neon>• VIP residents: Facial recognition bypass</Line>
              <Line neon>• Unauthorized access: Detained, questioned, escorted out</Line>
              <Line neon>• Persistent trespassers: Handed to C.O.P.</Line>
            </InsetBox>
            <InsetBox title="PATROL COVERAGE:">
              <Line yellow>Guards patrol in 2-person teams</Line>
              <Line yellow>Routes: Helipads, Solar field, Storage area</Line>
              <Line yellow>Frequency: Every 2 hours (shift dependent)</Line>
              <Line yellow>Known gaps: Graffiti mural, Wind turbine, Observatory at night</Line>
            </InsetBox>
            <InsetBox title="RECENT INCIDENTS:">
              <Line red>Yesterday: 3 graffiti artists detained (released with warning)</Line>
              <Line red>3 days ago: Urban explorer fell from crane (medical evac)</Line>
              <Line red>Last week: Cultists spotted at observatory (did not engage)</Line>
              <Line yellow>Budget cuts reduced night shift staffing by 30%</Line>
            </InsetBox>
            <InsetBox title="GUARD MORALE:">
              <Line cyan>Low - Boring job, low pay, budget cuts</Line>
              <Line cyan>Guards often bored (fly drones for entertainment)</Line>
              <Line cyan>Some guards sympathetic to graffiti artists</Line>
              <Line yellow>Bribery possible: 50-200¤ depending on guard and request</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Captain Marcus Webb": {
            content: (
              <PersonnelFile
                employeeId="SEC-RL-001"
                name="Captain Marcus Webb"
                age={45}
                position="Roofline Security Captain"
                department="The 55 Security - Roofline Division"
                supervisor="Stack Command and Control"
                clearanceLevel={3}
                district="The 55 - Resident (Level 95)"
                performance={76}
                notes={[
                  "Long tenure, experienced in roofline security protocols",
                  "Pragmatic approach: 'Pick your battles, avoid unnecessary trouble'",
                  "Unofficial policy: Don't engage cultists at observatory",
                  "Frustrated by budget cuts (staffing reduced 30%)",
                  "Allows guards to fly drones for entertainment (morale)",
                  "Open to bribes for minor infractions (50-200¤)",
                  "Protective of his team, resents corporate cost-cutting"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Officer Sarah Kim": {
            content: (
              <PersonnelFile
                employeeId="SEC-RL-015"
                name="Officer Sarah Kim"
                age={29}
                position="Drone Operator"
                department="The 55 Security - Roofline Division"
                supervisor="Captain Marcus Webb"
                clearanceLevel={2}
                district="The 55 - Resident (Level 48)"
                performance={85}
                notes={[
                  "Expert drone pilot, handles all Stinger Drone operations",
                  "Tech-savvy, maintains drone garage systems",
                  "Hobby: Competitive drone racing (uses work drones after hours)",
                  "Sympathetic to graffiti artists (secretly appreciates their work)",
                  "Won't report minor trespassing if no damage done",
                  "Occasionally accepts bribes to 'look the other way' (100¤+)"
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      "Roofline Security": {
        password: {
          pw: "roofline",
          hint: "What's this area called?",
          difficulty: "easy",
          content: <Locked theme="terminal" title="ROOFLINE SECURITY" />
        },
        content: (
          <Message
            title="ROOFLINE SECURITY SYSTEMS"
            message="SECURITY ACCESS GRANTED"
            note="Checkpoint systems - Guard access only"
            theme="secure"
          />
        ),
        related_commands: {
          "Drone Garage Control": {
            content: (
              <MaintenanceAccess
                title="[DRONE GARAGE - CONTROL SYSTEM]"
                deviceModel="Stinger-X Drone Fleet"
                deviceId="DRONE-GARAGE-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Guards fly drones for fun when bored"
                ]}
              >
                <InsetBox title="DRONE INVENTORY:">
                  <Line cyan>Total Drones: 8 units (current roll: 8)</Line>
                  <Line cyan>Operational: 7 units</Line>
                  <Line yellow>Maintenance: 1 unit (battery replacement)</Line>
                  <Line cyan>Model: Stinger-X Security Drone</Line>
                  <Line cyan>Armament: Taser, camera, spotlight</Line>
                </InsetBox>
                <InsetBox title="CURRENT DEPLOYMENT:">
                  <Line neon>Drone 1: Patrolling helipad area</Line>
                  <Line neon>Drone 2: Monitoring storage crates</Line>
                  <Line neon>Drone 3: Parked at checkpoint (standby)</Line>
                  <Line neon>Drone 4: Investigating graffiti reports</Line>
                  <Line neon>Drone 5: Parked at checkpoint (standby)</Line>
                  <Line neon>Drone 6: Patrolling solar field perimeter</Line>
                  <Line neon>Drone 7: Parked at checkpoint (standby)</Line>
                  <Line yellow>Drone 8: IN MAINTENANCE (battery issue)</Line>
                </InsetBox>
                <InsetBox title="CONTROL OPTIONS:">
                  <Line cyan>• Deploy to location</Line>
                  <Line cyan>• Return to garage</Line>
                  <Line cyan>• View camera feed</Line>
                  <Line cyan>• Activate spotlight/taser</Line>
                  <Line cyan>• Set patrol route</Line>
                </InsetBox>
                <InsetBox title="RECENT ACTIVITY:">
                  <Line yellow>2 hours ago: Drone 4 chased urban explorer from crane</Line>
                  <Line yellow>Yesterday: Drone 2 investigated suspicious noise (false alarm)</Line>
                  <Line red>Last week: Drone 6 shot down unauthorized drone (intruder)</Line>
                  <Line cyan>Guards fly drones for fun when bored (against policy)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Security Camera Network": {
            content: (
              <MaintenanceAccess
                title="[SECURITY CAMERA NETWORK]"
                deviceModel="Surveillance System"
                deviceId="CAMSYS-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Limited coverage - Infrastructure monitoring",
                  "11 cameras operational",
                  "Multiple blind spots (graffiti mural, wind turbine, observatory)"
                ]}
              >
                <InsetBox title="CAMERA LOCATIONS:">
                  <Line cyan>Checkpoint entrance: 2 cameras (main/backup)</Line>
                  <Line cyan>Helipad Alpha: 1 camera</Line>
                  <Line cyan>Helipad Beta: 1 camera</Line>
                  <Line cyan>Solar field perimeter: 4 cameras</Line>
                  <Line cyan>Storage crate area: 2 cameras</Line>
                  <Line cyan>Construction crane: 1 camera</Line>
                  <Line smoke>Total operational: 11 cameras</Line>
                </InsetBox>
                <InsetBox title="BLIND SPOTS (No camera coverage):">
                  <Line red>• Graffiti mural area (Floor 350 interior)</Line>
                  <Line red>• Wind turbine (too far from checkpoint)</Line>
                  <Line red>• Observatory (unfinished construction zone)</Line>
                  <Line red>• Control aerials (dense antenna forest blocks view)</Line>
                  <Line red>• Multiple stairwells and service corridors</Line>
                </InsetBox>
                <InsetBox title="RECORDING STATUS:">
                  <Line neon>All cameras recording (7-day loop)</Line>
                  <Line neon>Storage: Local server at checkpoint</Line>
                  <Line neon>Backup: None (budget cuts eliminated cloud backup)</Line>
                  <Line yellow>Older footage frequently overwritten</Line>
                </InsetBox>
                <InsetBox title="RECENT FOOTAGE:">
                  <Line cyan>Yesterday: Urban explorer on crane (flagged)</Line>
                  <Line cyan>3 days ago: Graffiti artists at mural (not visible on camera)</Line>
                  <Line cyan>Last week: Cultists walking to observatory at dusk</Line>
                  <Line yellow>Guards rarely review footage unless incident reported</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Checkpoint Camera": {
            content: (
              <Camera
                id="roofline-checkpoint-main"
                location="Roofline Security Checkpoint - Main entrance"
                coverage="Checkpoint entrance, stairwell access, drone garage"
                status="ACTIVE"
                recording={true}
                resolution="4K security-grade"
                storage="Local server (7-day loop)"
                features={[
                  "Night vision",
                  "Motion detection",
                  "Facial recognition (linked to authorized list)",
                  "Zoom capability (50x optical)",
                  "Audio recording",
                ]}
                timeline={[
                  "06:00 → Day shift arrived (6 guards)",
                  "08:30 → Maintenance worker accessed solar field",
                  "12:00 → VIP resident passed through (no check required)",
                  "15:45 → Urban explorer detained, escorted out",
                  "18:00 → Night shift arrived (4 guards - reduced staffing)",
                  "20:30-Present → Quiet, guards on break room duty",
                ]}
                accessLog={[
                  { time: "08:30", user: "Maintenance: J. Martinez", action: "Solar field access" },
                  { time: "12:00", user: "VIP: Samuel Samson", action: "Helipad access (authorized)" },
                  { time: "15:45", user: "Unknown (detained)", action: "Unauthorized access attempt" },
                ]}
                lastService="1 month ago"
                notes="Primary security camera - High priority maintenance"
              />
            ),
          },

          "Access Log": {
            content: (
              <MaintenanceAccess
                title="[CHECKPOINT ACCESS LOG]"
                deviceModel="Entry Tracking System"
                deviceId="ACCESS-LOG-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Entry records - Last 7 days",
                  "Authorized and unauthorized attempts tracked",
                  "Cultist activity known but unaddressed"
                ]}
              >
                <InsetBox title="AUTHORIZED ACCESS (Last 24h):">
                  <Line neon>08:30 - Maintenance: J. Martinez (Solar field repair)</Line>
                  <Line neon>12:00 - VIP: Samuel Samson (Helipad Alpha, departure)</Line>
                  <Line neon>14:00 - Cleaning crew: 4 personnel (Rooflight maintenance)</Line>
                  <Line neon>16:30 - Maintenance: K. Chen (Wind turbine graffiti removal - cancelled)</Line>
                </InsetBox>
                <InsetBox title="UNAUTHORIZED ATTEMPTS:">
                  <Line red>Yesterday 15:45 - Urban explorer detained</Line>
                  <Line smoke>Name: Unknown (no ID, gave fake name)</Line>
                  <Line smoke>Reason: "Wanted to see the view"</Line>
                  <Line smoke>Action: Escorted out, warned not to return</Line>
                  <Divider />
                  <Line red>3 days ago 22:30 - Graffiti artists spotted</Line>
                  <Line smoke>Count: 3 individuals | Location: Floor 350 mural (blind spot)</Line>
                  <Line smoke>Action: Detained briefly, released with warning</Line>
                  <Divider />
                  <Line red>Last week 03:00 - Unauthorized drone</Line>
                  <Line smoke>Type: Commercial quadcopter (paparazzi suspected)</Line>
                  <Line smoke>Action: Shot down by Stinger Drone 6 | Debris in evidence locker</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_ROOFLINE_COMMANDS;
