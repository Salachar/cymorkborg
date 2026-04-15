import {
  Line,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  CCTV,
  Locked,
  MaintenanceAccess,
  Message,
  PublicPortal,
} from "@terminal/retcomdevice";

import cctv_image from '@images/the55/lost_zone_cctv.png';

export const THE_55_LOST_ZONE_COMMANDS = {
  "[U125 - U147] Lost Zone": {
    content: (
      <PublicPortal
        name="THE LOST ZONE"
        tagline="Abandoned construction zone"
        network="NONE"
        signalStrength="weak"
        status="HAZARDOUS AREA"
        statusColor="red"
        notes={[
          "Abandoned mid-construction decades ago",
          "Structural instability, environmental hazards",
          "Corporate activity and salvage operations",
          "No official access - trespassing technically illegal"
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

      "Zone Overview": {
        content: (
          <MaintenanceAccess
            title="[THE LOST ZONE]"
            deviceModel="Hazard Assessment System"
            deviceId="LOST-ZONE-01"
            firmwareVersion="v1.0.0"
            systemStatus="CONDEMNED"
            notes={[
              "Construction began 30+ years ago during expansion boom",
              "Project abandoned when funding collapsed",
              "Now serves as no-man's-land between lower and upper levels"
            ]}
          >

            <InsetBox title="HISTORY:">
              <Line>Construction began 30+ years ago during expansion boom</Line>
              <Line>Project abandoned when funding collapsed</Line>
              <Line>42 floors left incomplete - skeletal structures, exposed systems</Line>
              <Line>Stack operations continued around it (walls sealed off)</Line>
              <Line>Now serves as no-man's-land between lower and upper levels</Line>
            </InsetBox>
            <InsetBox title="CURRENT STATUS:">
              <Line cyan>Official status: Condemned / Restricted</Line>
              <Line cyan>Actual usage: Salvage, corporate ops, squatters</Line>
              <Line cyan>Structural integrity: 40-70% (varies by floor)</Line>
              <Line cyan>Power: Intermittent (jury-rigged)</Line>
              <Line cyan>Water: None (except leaks)</Line>
            </InsetBox>
            <InsetBox title="KNOWN HAZARDS:">
              <Line red>• Structural collapse risk (floors 148-150 critical)</Line>
              <Line red>• Exposed electrical systems (live wires)</Line>
              <Line red>• Toxic materials (asbestos, lead, chemicals)</Line>
              <Line red>• Poor lighting (darkness in most areas)</Line>
              <Line red>• No emergency services (you're on your own)</Line>
              <Line red>• Fungal contamination (floors 148-150)</Line>
            </InsetBox>
            <InsetBox title="INHABITANTS:">
              <Line yellow>• Salvagers and scavengers (independent operators)</Line>
              <Line yellow>• Squatters (homeless residents seeking shelter)</Line>
              <Line yellow>• United Citadel security (corporate operations)</Line>
              <Line yellow>• C.R.A.W.L.E.R. construction robots (still active)</Line>
              <Line yellow>• Gang-Goons (occasional hideouts)</Line>
              <Line yellow>• Urban explorers (thrill-seekers)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Zone Map": {
        content: (
          <MaintenanceAccess
            title="[LOST ZONE FLOOR BREAKDOWN]"
            deviceModel="Zone Navigation System"
            deviceId="ZONE-MAP-01"
            firmwareVersion="v1.0.0"
            systemStatus="PARTIAL"
          />
        ),
        related_commands: {
          "Contaminated Zone": {
            content: (
              <MaintenanceAccess
                title="[CONTAMINATED ZONE]"
                deviceModel="Biohazard Monitoring System"
                deviceId="CONTAMINATION-148-150"
                firmwareVersion="v1.0.0"
                systemStatus="EXTREME BIOHAZARD"
                notes={[
                  "Toxic fungal contamination throughout",
                  "Structural collapse - floors merged",
                  "DO NOT ENTER"
                ]}
              >

                <InsetBox title="CONTAMINATION DETAILS:">
                  <Line red bold>FUNGAL INFESTATION:</Line>
                  <Line red>Unknown species of aggressive fungus</Line>
                  <Line red>Covers walls, floors, exposed materials</Line>
                  <Line red>Releases toxic spores into air</Line>
                  <Line red>Failure: Respiratory damage, possible infestation</Line>
                </InsetBox>
                <InsetBox title="STRUCTURAL STATUS:">
                  <Line yellow>Creates unstable 3-floor open pit</Line>
                  <Line yellow>Falling debris common</Line>
                </InsetBox>
                <InsetBox title="ACCESS:">
                  <Line neon>Entry points sealed by Stack Command</Line>
                  <Line neon>Alternative: Navigate through mid-zone (dangerous)</Line>
                  <Line yellow>No reason to enter - avoid entirely</Line>
                </InsetBox>
                <InsetBox title="CONTAINMENT EFFORTS:">
                  <Line>Stack Command monitors remotely (sensors)</Line>
                  <Line>Contamination not spreading (sealed effectively)</Line>
                  <Line>No cleanup planned (too expensive, low priority)</Line>
                  <Line>Plan: Leave sealed indefinitely, wait for fungus to die naturally</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "C.R.A.W.L.E.R. Robots": {
            content: (
              <MaintenanceAccess
                title="[C.R.A.W.L.E.R. CONSTRUCTION ROBOTS]"
                deviceModel="Autonomous Construction Units"
                deviceId="CRAWLER-SERIES-7"
                firmwareVersion="v1.0.0"
                systemStatus="ERRATIC"
                notes={[
                  "12 units estimated active",
                  "Operating without supervision for 30+ years",
                  "Behavior: Unpredictable, sometimes hostile",
                  "United Citadel bounty: 50k¤ per disabled robot"
                ]}
              >

                <InsetBox title="ABOUT:">
                  <Line>Autonomous robots left behind when construction abandoned</Line>
                  <Line>Continued operating without supervision for 30+ years</Line>
                  <Line>Original programming: Build and maintain structures</Line>
                  <Line>Current behavior: Erratic, unpredictable</Line>
                </InsetBox>
                <InsetBox title="SPECIFICATIONS:">
                  <Line cyan>Designation: C.R.A.W.L.E.R. Series 7</Line>
                  <Line cyan>Quantity: 12 units (estimated active)</Line>
                  <Line cyan>Power: Solar + internal battery (self-sustaining)</Line>
                  <Line cyan>Size: 3m tall, 2m wide, treaded base</Line>
                  <Line cyan>Capabilities: Welding, cutting, lifting, drilling</Line>
                </InsetBox>
                <InsetBox title="BEHAVIOR PATTERNS:">
                  <Line yellow>Sometimes construct new structures (corrupted plans)</Line>
                  <Line yellow>Sometimes deconstruct existing structures (reverse programming)</Line>
                  <Line yellow>Occasionally repair themselves using salvaged parts</Line>
                  <Line yellow>May ignore humans, may treat them as obstacles to remove</Line>
                  <Line red>Have killed trespassers (accidental and intentional unclear)</Line>
                </InsetBox>
                <InsetBox title="CORPORATE INTEREST:">
                  <Line neon>United Citadel attempting to recover units</Line>
                  <Line neon>Value: 500k¤ per functioning robot</Line>
                  <Line neon>Capture teams active in upper Lost Zone</Line>
                  <Line neon>Offering bounty: 50k¤ per disabled robot (intact)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "United Citadel Operations": {
            content: (
              <MaintenanceAccess
                title="[UNITED CITADEL CORPORATE OPERATIONS]"
                deviceModel="Security Zone"
                deviceId="UC-OPS-166-174"
                firmwareVersion="v1.0.0"
                systemStatus="RESTRICTED"
                notes={[
                  "Active corporate presence",
                  "12-18 armed security operatives",
                  "Project details classified"
                ]}
              >

                <InsetBox title="ABOUT:">
                  <Line>United Citadel Corp has claimed upper Lost Zone for operations</Line>
                  <Line>Legal status unclear (abandoned space, no official ownership)</Line>
                  <Line>Enforced by private security (armed and authorized)</Line>
                  <Line>Project details classified</Line>
                </InsetBox>
                <InsetBox title="SECURITY PRESENCE:">
                  <Line red bold>ARMED GUARDS:</Line>
                  <Line red>Personnel: 12-18 security operatives</Line>
                  <Line red>Equipment: Body armor, assault rifles, stun weapons</Line>
                  <Line red>Stance: Hostile to unauthorized personnel</Line>
                  <Line red>Will detain or use force on trespassers</Line>
                  <Line red>No warning shots - assume hostile intent</Line>
                </InsetBox>
                <InsetBox title="KNOWN ACTIVITIES:">
                  <Line neon>• Heavy construction equipment operating</Line>
                  <Line neon>• Material deliveries (via freight elevator)</Line>
                  <Line neon>• C.R.A.W.L.E.R. robot recovery efforts</Line>
                  <Line neon>• Unknown research or construction project</Line>
                </InsetBox>
                <InsetBox title="SPECULATION (Unconfirmed):">
                  <Line yellow>Rumor: Building secret research facility</Line>
                  <Line yellow>Rumor: Testing experimental construction tech</Line>
                  <Line yellow>Rumor: Salvaging valuable materials/equipment</Line>
                  <Line yellow>Rumor: Planning to complete original construction</Line>
                </InsetBox>
                <InsetBox title="ACCESS RESTRICTIONS:">
                  <Line red>Perimeter established at Level 165/166 boundary</Line>
                  <Line red>Guards patrol 24/7</Line>
                  <Line red>Cameras and motion sensors active</Line>
                  <Line red>Trespassers detained and prosecuted</Line>
                  <Line yellow>Corporate lawyers aggressively defend operations</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "Salvage Opportunities": {
        content: (
          <MaintenanceAccess
            title="[SALVAGE OPPORTUNITIES]"
            deviceModel="Resource Catalog"
            deviceId="SALVAGE-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Valuable materials and equipment",
              "Most accessible materials already claimed",
              "High-value targets require risk"
            ]}
          >

            <InsetBox title="CONSTRUCTION MATERIALS (Lower Zone):">
              <Line cyan>Steel beams & rebar: 10¤ - 50¤ per piece</Line>
              <Line cyan>Copper wiring: 30¤ per kg</Line>
              <Line cyan>Concrete blocks: 5¤ per block</Line>
              <Line cyan>Aluminum panels: 20¤ per panel</Line>
              <Line cyan>Glass sheets (intact): 40¤ per sheet</Line>
              <Line smoke>Most easily accessible materials already claimed</Line>
            </InsetBox>
            <InsetBox title="TOOLS & EQUIPMENT:">
              <Line cyan>Power drills: 100¤ - 300¤</Line>
              <Line cyan>Welding equipment: 200¤ - 800¤</Line>
              <Line cyan>Heavy machinery (parts): 500¤ - 5,000¤</Line>
              <Line cyan>Safety equipment: 20¤ - 100¤</Line>
              <Line yellow>Most tools require repair or parts replacement</Line>
            </InsetBox>
            <InsetBox title="ELECTRONICS:">
              <Line neon>• Wiring and cables (copper, fiber optic)</Line>
              <Line neon>• Control panels and switches</Line>
              <Line neon>• Electrical components (resistors, capacitors)</Line>
              <Line neon>• Old computers and data storage (mostly corrupted)</Line>
              <Line yellow>Some electronics may contain valuable data</Line>
            </InsetBox>
            <InsetBox title="HIGH-VALUE TARGETS (Dangerous):">
              <Line red>• C.R.A.W.L.E.R. robots (50k¤ bounty if disabled)</Line>
              <Line red>• Industrial batteries (500¤ - 2,000¤)</Line>
              <Line red>• Heavy machinery (requires transport, 10k¤+)</Line>
              <Line red>• Corporate equipment in upper zone (guarded)</Line>
            </InsetBox>
            <InsetBox title="SALVAGER TIPS:">
              <Line neon>• Work in pairs (safety and efficiency)</Line>
              <Line neon>• Bring headlamps and backup lights</Line>
              <Line neon>• Test floor stability before walking (tap with pole)</Line>
              <Line neon>• Avoid contaminated zone (148-150) entirely</Line>
              <Line neon>• Mark your route (easy to get lost)</Line>
              <Line neon>• Don't venture into upper zone (corporate security)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Squatter Camps": {
        content: (
          <MaintenanceAccess
            title="[SQUATTER COMMUNITIES]"
            deviceModel="Population Monitoring"
            deviceId="SQUATTER-01"
            firmwareVersion="v1.0.0"
            systemStatus="MONITORED"
            notes={[
              "30-50 individuals living in Lost Zone",
              "Mostly lower-level residents unable to afford housing",
              "Technically illegal but rarely enforced"
            ]}
          >

            <InsetBox title="MAJOR CAMPS:">
              <Line neon bold>CAMP ALPHA:</Line>
              <Line smoke>~15 residents in corner of east wing</Line>
              <Line smoke>Most organized, some basic amenities</Line>
              <Line smoke>Community rules and shared resources</Line>
              <Line smoke>Leader: "Old Jack" (resident for 8+ years)</Line>



              <Line neon bold>CAMP BRAVO:</Line>
              <Line smoke>~8 residents in mid-zone skeletal structure</Line>
              <Line smoke>More desperate, fewer resources</Line>
              <Line smoke>Higher risk location (structural instability)</Line>
              <Line smoke>Residents often salvagers working in zone</Line>



              <Line neon bold>TRANSIENT CAMPS (Various):</Line>
              <Line smoke>Individuals or small groups (2-3 people)</Line>
              <Line smoke>Move frequently, no permanent structures</Line>
              <Line smoke>Hiding from authorities, debts, enemies</Line>
            </InsetBox>
            <InsetBox title="LIVING CONDITIONS:">
              <Line yellow>No running water (collect rainwater or steal)</Line>
              <Line yellow>No heat (except improvised fires - dangerous)</Line>
              <Line yellow>No sanitation (serious health risks)</Line>
              <Line yellow>Limited food (scavenge or beg in lower levels)</Line>
              <Line yellow>Constant danger (collapse, violence, accidents)</Line>
            </InsetBox>
            <InsetBox title="COMMUNITY SUPPORT:">
              <Line neon>Community Outreach occasionally brings supplies</Line>
              <Line neon>Some lower-level residents donate food/clothing</Line>
              <Line neon>Medical clinic (TG Labs) refuses to treat (policy)</Line>
              <Line neon>Dr. Yuki Tanaka secretly provides basic care (off-hours)</Line>
            </InsetBox>
            <InsetBox title="INTERACTIONS:">
              <Line cyan>Most are non-violent, just trying to survive</Line>
              <Line cyan>May ask for food, water, credits (up to you)</Line>
              <Line cyan>Can provide information about Lost Zone (for price)</Line>
              <Line cyan>Respect their camps, they'll respect you</Line>
              <Line yellow>A few are dangerous (criminals hiding out)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Construction Systems": {
        password: {
          pw: "abandoned",
          hint: "What the Lost Zone construction project was",
          difficulty: "easy",
          content: <Locked theme="terminal" title="CONSTRUCTION SYSTEMS" />
        },
        content: (
          <Message
            title="LOST ZONE CONSTRUCTION SYSTEMS"
            message="LEGACY SYSTEM ACCESS"
            note="Outdated systems - Limited functionality"
            theme="limeade"
          />
        ),
        related_commands: {
          "Construction Plans": {
            content: (
              <MaintenanceAccess
                title="[ORIGINAL CONSTRUCTION PLANS]"
                deviceModel="Archived Blueprints"
                deviceId="PLANS-01"
                firmwareVersion="v1.0.0"
                systemStatus="ARCHIVED"
                notes={[
                  "30+ years old",
                  "Project Name: The 55 Expansion Initiative",
                  "Status: ABANDONED (40% complete when halted)"
                ]}
              >

                <InsetBox title="PROJECT OVERVIEW:">
                  <Line>Project Name: "The 55 Expansion Initiative"</Line>
                  <Line>Purpose: Mixed-use residential and commercial</Line>
                  <Line>Budget: 500 million credits</Line>
                  <Line>Status: ABANDONED (40% complete when halted)</Line>
                </InsetBox>
                <InsetBox title="COMPLETED WORK:">
                  <Line cyan>Structural steel: 85% complete</Line>
                  <Line cyan>Concrete floors: 40% complete</Line>
                  <Line cyan>Exterior walls: 15% complete</Line>
                  <Line cyan>Electrical systems: 30% complete</Line>
                  <Line cyan>Plumbing: 20% complete</Line>
                  <Line cyan>Interior finishing: 0% complete</Line>
                </InsetBox>
                <InsetBox title="ABANDONMENT REASON:">
                  <Line yellow>Primary investor declared bankruptcy</Line>
                  <Line yellow>Secondary funding fell through during recession</Line>
                  <Line yellow>Legal disputes over ownership and contracts</Line>
                  <Line yellow>Eventually declared lost cause, sealed off</Line>
                  <Line red>Total loss: ~200 million credits invested</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "C.R.A.W.L.E.R. Control": {
            password: {
              pw: "robots",
              hint: "What the C.R.A.W.L.E.R. units are",
              difficulty: "medium",
              content: <Locked theme="terminal" title="ROBOT CONTROL" />
            },
            content: (
              <MaintenanceAccess
                title="[C.R.A.W.L.E.R. CONTROL SYSTEM]"
                deviceModel="Robot Management Interface"
                deviceId="CRAWLER-CTRL-01"
                firmwareVersion="v1.0.0"
                systemStatus="CORRUPTED"
                notes={[
                  "Legacy system - 30+ years without maintenance",
                  "Control protocols corrupted",
                  "Robot behavior unpredictable",
                  "Override commands may or may not work"
                ]}
              >
                <InsetBox title="UNITED CITADEL BOUNTY:">
                  <Line neon bold>50,000¤ per intact C.R.A.W.L.E.R. delivered</Line>
                  <Line neon>Must be disabled but repairable</Line>
                  <Line neon>Contact: United Citadel Operations</Line>
                  <Line yellow>Extremely dangerous - many have died attempting</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Quarantine Protocols": {
            content: (
              <MaintenanceAccess
                title="[CONTAMINATED ZONE QUARANTINE]"
                deviceModel="Containment Management"
                deviceId="QUARANTINE-148-150"
                firmwareVersion="v1.0.0"
                systemStatus="SEALED"
                notes={[
                  "Sealed 8 years ago",
                  "No cleanup scheduled",
                  "Effectively permanent quarantine"
                ]}
              >
                <InsetBox title="CONTAINMENT STATUS:">
                  <Line red>Threat Level: HIGH (Biohazard)</Line>
                  <Line red>Contamination Type: Fungal infestation</Line>
                  <Line cyan>Sealed: Yes (8 years ago)</Line>
                  <Line cyan>Monitoring: Remote sensors only</Line>
                </InsetBox>
                <InsetBox title="SEALING MEASURES:">
                  <Line neon>All stairwell access sealed (welded shut)</Line>
                  <Line neon>Ventilation ducts blocked and filtered</Line>
                  <Line neon>Elevator bypasses floors (no stops)</Line>
                  <Line neon>Warning signs posted at all approaches</Line>
                </InsetBox>
                <InsetBox title="ENVIRONMENTAL READINGS:">
                  <Line red>Air quality: TOXIC (spore concentration high)</Line>
                  <Line red>Structural integrity: CRITICAL (25% stable)</Line>
                  <Line cyan>Temperature: 18°C (stable)</Line>
                  <Line yellow>Humidity: 95% (promotes fungal growth)</Line>
                  <Line cyan>Biohazard spread: CONTAINED (not spreading)</Line>
                </InsetBox>
                <InsetBox title="CLEANUP PLANS:">
                  <Line red>NO CLEANUP SCHEDULED</Line>
                  <Line yellow>Cost estimated at 10-20 million credits</Line>
                  <Line yellow>Stack Command: "Not economically viable"</Line>
                  <Line yellow>Plan: Leave sealed until fungus dies naturally</Line>
                  <Line yellow>Estimated timeline: 50-100 years</Line>
                </InsetBox>
                <InsetBox title="BREACH RESPONSE PROTOCOL:">
                  <Line red>1. Immediate evacuation of adjacent floors</Line>
                  <Line red>2. Emergency sealing of entire Lost Zone</Line>
                  <Line red>3. Chemical sanitization of breach area</Line>
                  <Line red>4. Medical screening for all exposed individuals</Line>
                  <Line red>5. Extended quarantine of affected persons</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Salvage Records": {
            content: (
              <MaintenanceAccess
                title="[SALVAGE OPERATION RECORDS]"
                deviceModel="Scavenging Activity Log"
                deviceId="SALVAGE-LOG-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Documented scavenging activity",
                  "47 registered salvagers",
                  "Last 12 months: 3 deaths, 8 serious injuries"
                ]}
              >

                <InsetBox title="REGISTERED SALVAGERS:">
                  <Line>47 individuals have registered with Stack Command</Line>
                  <Line>Registration optional but provides legal protection</Line>
                  <Line>Registered salvagers less likely to be arrested</Line>
                  <Line yellow>Most salvagers operate unregistered</Line>
                </InsetBox>
                <InsetBox title="MAJOR FINDS (Last 12 months):">
                  <Line neon>• Industrial battery bank (sold for 15,000¤)</Line>
                  <Line neon>• Copper wiring cache (sold for 8,000¤)</Line>
                  <Line neon>• Intact welding equipment (sold for 3,500¤)</Line>
                  <Line neon>• Steel beam stockpile (sold for 12,000¤)</Line>
                  <Line neon>• Abandoned construction crane (parts, 6,000¤)</Line>
                </InsetBox>
                <InsetBox title="ACCIDENTS & INCIDENTS (Last 12 months):">
                  <Line red>• 3 deaths (structural collapse, falls)</Line>
                  <Line red>• 8 serious injuries (falls, equipment accidents)</Line>
                  <Line red>• 2 respiratory illnesses (contaminated zone exposure)</Line>
                  <Line red>• 1 C.R.A.W.L.E.R. attack (survivor, severe injuries)</Line>
                  <Line yellow>Actual numbers likely higher (unreported incidents)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_LOST_ZONE_COMMANDS;
