import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  ArcadeCabinet,
  Camera,
  CoffeeMachine,
  EncryptedMessage,
  Extractable,
  Jukebox,
  Locked,
  MaintenanceAccess,
  Message,
  NetworkDevices,
  NetworkTrafficMonitor,
  RCDAlert,
  RetComImage,
  RoomAccess,
  Safe,
  SmartFridge,
  VIPList,
} from '@terminal/retcomdevice';

import cyberlich_painting_image from '@images/cyberlich_painting.png';

export const STEEL_PENTHOUSE_COMMANDS = {
  "Steel Jackhammer's Penthouse": {
    preview: (
      <NodePreview>
        <Line span yellow> · Smart Home System</Line>
      </NodePreview>
    ),
    password: {
      pw: 'unkillable',
      hint: "Can't take down the champ!",
      decoyLetters: "p,r,m",
      content: <Locked theme="home" />
    },
    content: (
      <Message
        title="PENTHOUSE SMART HOME"
        message="NETWORK ACCESS ESTABLISHED"
        note="Connected to JACKHAMMER_HOME | Welcome to the most over-engineered apartment in Central District"
        theme="casual"
      >
        <RCDAlert
          message="High-density RCD activity detected in vicinity"
          details={[
            "67+ active RCD devices within 50m radius",
            "Majority: Party guests using mesh network for comms",
            "Potential signal interference in crowded areas",
            "Dealer RCDs cycling frequently (rotating stock)",
          ]}
        />
      </Message>
    ),
    related_commands: {
      "Building Services": {
        password: {
          pw: 'steel4201',
          content: <Locked theme="terminal" />
        },
        content: (
          <MaintenanceAccess
            title="[BUILDING SYSTEMS - UNIT 4201]"
            deviceModel="Integrated Building Services"
            deviceId="BLDG-SVC-4201"
            firmwareVersion="v5.1.2"
            systemStatus="OPERATIONAL"
            notes={[
              "Inherited from Tower Block 7 infrastructure",
              "HVAC, lighting, fire suppression",
              "Emergency systems operational",
              "Climate control struggling with party load"
            ]}
          >
            <InsetBox title="SYSTEM STATUS">
              <Line red bold pulse>Check Climate Control Systems</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "HVAC & Climate": {
            content: (
              <MaintenanceAccess
                title="[CLIMATE & LIGHTING CONTROL]"
                deviceModel="Smart Home Environmental System"
                deviceId="CLIMATE-4201"
                firmwareVersion="v4.0.0"
                systemStatus="STRUGGLING"
                notes={[
                  "Set temperature: 22°C",
                  "Actual temperature: 24°C (party heat exceeding capacity)",
                  "Humidity: 45%",
                  "Air quality: POOR (smoke, body heat, party)",
                ]}
              >
                <InsetBox title="OVERRIDE OPTIONS:">
                  <Line yellow>Drop temperature to minimum (15°C)</Line>
                  <Line yellow>Kill AC</Line>
                  <Line yellow>Vent windows/balcony door remotely</Line>
                </InsetBox>
                <Line smoke small>Climate manipulation takes 10-15 minutes to have noticeable effect.</Line>
              </MaintenanceAccess>
            ),
          },

          "Fire Suppression": {
            content: (
              <MaintenanceAccess
                title="[FIRE SUPPRESSION SYSTEM]"
                deviceModel="AutoSafe Fire Control"
                deviceId="FIRE-SUP-4201"
                firmwareVersion="v3.2.0"
                systemStatus="STANDBY"
                notes={[
                  "Sprinkler system armed",
                  "Smoke detectors active (8 units)",
                  "Manual override available",
                  "Last test: 2 months ago"
                ]}
              >
                <InsetBox title="COVERAGE:">
                  <Line neon>Sprinkler heads: 12 total</Line>
                  <Line neon>Water pressure: GOOD</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Emergency Systems": {
            content: (
              <MaintenanceAccess
                title="[EMERGENCY SYSTEMS]"
                deviceModel="Building Safety Integration"
                deviceId="EMERGENCY-4201"
                firmwareVersion="v2.0.0"
                systemStatus="ARMED"
                notes={[
                  "Smoke alarms active",
                  "Emergency exit lighting functional",
                ]}
              >
                <InsetBox title="PANIC BUTTON:">
                  <Line yellow>Location: Master bedroom nightstand</Line>
                  <Line yellow>Alert: Building security + SecCorps</Line>
                  <Line yellow>Response time: ~3 minutes</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "Internal Access": {
        password: {
          pw: 'TWOKROKS2',
          hint: "The actual amount that weren't drugged",
          content: <Locked theme="terminal" />
        },
        content: (
          <MaintenanceAccess
            title="[SECURITY SYSTEMS HUB]"
            deviceModel="Integrated Security Platform"
            deviceId="SECURITY-MAIN-4201"
            firmwareVersion="v6.0.3"
            systemStatus="RECORDING"
          />
        ),
        related_commands: {
          "Network Traffic": {
            content: (
              <NetworkTrafficMonitor
                systemName="JACKHAMMER_HOME NETWORK TRAFFIC"
                location="Penthouse Network - Unit 4201"
                bandwidth="847 Mbps / 1 Gbps (85% capacity)"
                activeConnections={67}
                transfers={[
                  {
                    timestamp: "14:47:33",
                    status: "ACTIVE",
                    filename: "holo_avatar_stream_batch_47.dat",
                    size: "2.3 GB",
                    source: "External (multiple IPs)",
                    destination: "Holo Projector Array",
                    protocol: "HOLO-STREAM-v3",
                    progress: 78,
                    notes: "22 concurrent holo-avatar connections"
                  },
                  {
                    timestamp: "14:45:12",
                    status: "ACTIVE",
                    filename: "killmatch_champions_tournament_sync.pkg",
                    size: "847 MB",
                    source: "GameBox Elite Network",
                    destination: "Game Console",
                    protocol: "GAME-SYNC",
                    progress: 34,
                    notes: "4-player tournament active"
                  },
                  {
                    timestamp: "14:42:01",
                    status: "COMPLETE",
                    filename: "audio_stream_industrial_techno.opus",
                    size: "156 MB",
                    source: "Music Streaming Service",
                    destination: "Jukebox System",
                    protocol: "AUDIO-STREAM",
                    notes: "Continuous playback for 3+ days"
                  },
                  {
                    timestamp: "14:38:47",
                    status: "COMPLETE",
                    filename: "camera_feed_buffer_dump.vid",
                    size: "4.1 GB",
                    source: "Security Camera Array",
                    destination: "Local NAS Storage",
                    protocol: "SURVEILLANCE-LOG",
                    notes: "Automated hourly backup"
                  },
                  {
                    timestamp: "14:15:22",
                    status: "COMPLETE",
                    filename: "rcd_messaging_batch_update.enc",
                    size: "67 MB",
                    source: "Multiple RCD devices (guests)",
                    destination: "Network Gateway",
                    protocol: "RCD-MESH-ENCRYPTED",
                    notes: "Party guest communications relay"
                  },
                  {
                    timestamp: "13:52:08",
                    status: "FAILED",
                    filename: "smart_fridge_auto_reorder.req",
                    size: "2.3 KB",
                    source: "Kitchen Smart Fridge",
                    destination: "Grocery Delivery Service",
                    protocol: "IOT-ORDER",
                    notes: "ALERT: Auto-reorder disabled after 47 failed attempts (consumption too high)"
                  },
                ]}
              />
            ),
          },

          "Connected Devices": {
            content: (
              <NetworkDevices
                networkName="JACKHAMMER_HOME"
                devices={[
                  { name: "Security Console", ip: "192.168.1.10", type: "Security" },
                  { name: "Camera System", ip: "192.168.1.20-28", type: "Surveillance" },
                  { name: "NAS Storage", ip: "192.168.1.29", type: "Storage" },
                  { name: "Entertainment Hub", ip: "192.168.1.30", type: "Media" },
                  { name: "Jukebox", ip: "192.168.1.31", type: "Audio" },
                  { name: "Holo Projectors", ip: "192.168.1.40-50", type: "Display" },
                  { name: "Game Console", ip: "192.168.1.51", type: "Entertainment" },
                  { name: "Smart Fridge", ip: "192.168.1.60", type: "Appliance" },
                  { name: "Coffee Machine", ip: "192.168.1.62", type: "Appliance" },
                  { name: "HVAC Control", ip: "192.168.1.70", type: "Climate" },
                  { name: "Lighting System", ip: "192.168.1.71", type: "Climate" },
                  { name: "Gym Equipment Hub", ip: "192.168.1.80", type: "Fitness" },
                  { name: "Sparring Cydroid", ip: "192.168.1.81", type: "Training" },
                  { name: "Wall Safe", ip: "192.168.1.90", type: "Security" },
                ]}
              />
            ),
          },

          "VIP Guest List": {
            content: (
              <VIPList
                eventName="Steel Jackhammer's Penthouse Party"
                location="Central Plaza Tower - Unit 4201, Floor 42"
                date="Nov 16-18, 2067 (Ongoing)"
                vips={[
                  {
                    name: "ZENIT",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Writer for KILL!KILL!KILL! fan feed. Known for intimate athlete interviews. Often armed.",
                    arrivalTime: "Nov 16"
                  },
                  {
                    name: "IKHON",
                    alias: "The Warlock",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Nano-using athlete with mysterious warlock persona. Heavyweight division. Friendly when substances are available.",
                    arrivalTime: "Nov 16"
                  },
                  {
                    name: "THUGGER",
                    alias: "The Unstoppable",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "11-month win streak (will not stop mentioning this). Electro-taur chromed. Cyberspine enhanced. Extremely cocky.",
                    arrivalTime: "Nov 16"
                  },
                  {
                    name: "RAZE",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Hacker/fighter hybrid. Tech overall with medical auto-injectors. Known gambler. Gathering intel on attendees.",
                    arrivalTime: "Nov 17"
                  },
                  {
                    name: "AMANDE",
                    alias: "The Pilot",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Mech pilot. Rarely recognized without mech. Lightweight build. Upcoming fight vs Thugger scheduled.",
                    arrivalTime: "Nov 17"
                  },
                  {
                    name: "MASTER CRIMSON",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Arvtagarna cult member. Nano abilities confirmed. C-list veteran, visibly bored with party scene.",
                    arrivalTime: "Nov 16"
                  },
                  {
                    name: "GOLIATHESS",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Up-and-coming heavyweight. StoneSkin chrome. Known for engineering dramatic moments for feed engagement.",
                    arrivalTime: "Nov 16"
                  },
                  {
                    name: "JADE BOOMSLANG",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Virid Vipers sponsored. Full-body reptile scale modifications. New to scene, actively seeking connections.",
                    arrivalTime: "Nov 17"
                  }
                ]}
              >
                <Line cyan>Guest list last updated: Nov 18, 14:30</Line>
                <Line yellow>⚠ All VIP guests are professional killmatch athletes</Line>
                <Line yellow>Security has been instructed to allow reasonable carry for self-defense</Line>
                <Line smoke small>Additional unnamed guests (friends, associates, holo-avatars) not tracked in this system</Line>
              </VIPList>
            ),
          },

          "Camera System": {
            content: (
              <MaintenanceAccess
                title="[SECURITY CAMERA GRID]"
                deviceModel="Surveillance System"
                deviceId="CAM-GRID-4201"
                firmwareVersion="v3.0.0"
                systemStatus="RECORDING"
                notes={[
                  "All cameras recording 24/7",
                  "No one actively monitoring (party chaos)",
                  "Footage saved to local NAS (30-day retention)",
                ]}
              >
                <InsetBox title="CAMERA LOCATIONS:">
                  <Line neon>Main Living Area (central party space)</Line>
                  <Line neon>Kitchen</Line>
                  <Line neon>Tiger Room (cage monitoring)</Line>
                  <Line neon>Master Bedroom</Line>
                  <Line neon>Gym</Line>
                  <Line neon>Spa</Line>
                  <Line neon>Main Balcony (exterior)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Main Living Area Camera": {
                content: (
                  <Camera
                    id="cam-penthouse-living"
                    location="Main Living Area"
                    coverage="Central party space, rounded table, Cyber-Lich painting, connections to kitchen, tiger room, balcony"
                    status="ACTIVE"
                    recording={true}
                    storage="Local NAS (30 day retention)"
                    timeline={[
                      "Now → 8-10 people visible, gaming tournament active",
                      "14:32 → New guests arrived, joined game",
                      "13:45 → Someone passed out on couch (still there)",
                      "12:20 → VIP altercation (resolved quickly)",
                    ]}
                  />
                ),
              },

              "Kitchen Camera": {
                content: (
                  <Camera
                    id="cam-penthouse-kitchen"
                    location="Kitchen"
                    coverage="Appliances, counters, entry from main area"
                    status="ACTIVE"
                    recording={true}
                    storage="Local NAS (30 day retention)"
                    timeline={[
                      "Now → 1 guest raiding fridge",
                      "14:20 → Someone made coffee (finally)",
                      "13:35 → Guest grabbed freezer items",
                      "12:45 → Empty for 30 minutes",
                    ]}
                  />
                ),
              },

              "Tiger Room Camera": {
                content: (
                  <Camera
                    id="cam-penthouse-tigers"
                    location="Tiger Room (Modified Guest Room)"
                    coverage="Cage structure, cage gate, opening to main living area"
                    status="ACTIVE"
                    recording={true}
                    storage="Local NAS (30 day retention)"
                    timeline={[
                      "Now → Stripe sleeping near back wall, Shade pacing along cage front",
                      "14:15 → Someone fed cats through bars (not recommended)",
                      "12:00 → Shade tested cage gate (held)",
                      "Yesterday, 21:00 → Both cats agitated during loud altercation in main area",
                    ]}
                  />
                ),
              },

              "Master Bedroom Camera": {
                content: (
                  <Camera
                    id="cam-penthouse-master"
                    location="Master Bedroom"
                    coverage="Full room, closet door, private balcony door"
                    status="ACTIVE"
                    recording={true}
                    storage="Local NAS (30 day retention)"
                    timeline={[
                      "Today, 14:45 → Room empty (Steel at party)",
                      "Today, 13:20 → Someone entered briefly, checked closet",
                      "Yesterday, 22:00 → Room empty all evening",
                      "Yesterday, 16:30 → Steel grabbed gym bag, left quickly",
                    ]}
                  />
                ),
              },

              "Gym Camera": {
                content: (
                  <Camera
                    id="cam-penthouse-gym"
                    location="Gym"
                    coverage="Equipment, sparring ring, mirror wall"
                    status="ACTIVE"
                    recording={true}
                    storage="Local NAS (30 day retention)"
                    timeline={[
                      "Now → Empty (cydroid in standby)",
                      "Yesterday, 18:00 → Steel training session (2 hours)",
                      "Yesterday, 10:00 → Guest entered ring, cydroid engaged (guest fled)",
                    ]}
                  />
                ),
              },

              "Spa Camera": {
                content: (
                  <Camera
                    id="cam-penthouse-spa"
                    location="Spa"
                    coverage="Hot tub, sauna entrance, relaxation area"
                    status="ACTIVE"
                    recording={true}
                    storage="Local NAS (30 day retention)"
                    timeline={[
                      "Now → 4 guests in hot tub, 2 in sauna",
                      "14:00 → Someone fell asleep in hot tub (woken by friend)",
                      "13:15 → Steam reduced visibility temporarily",
                    ]}
                  />
                ),
              },

              "Main Balcony Camera": {
                content: (
                  <Camera
                    id="cam-penthouse-balcony"
                    location="Main Balcony"
                    coverage="Pool/hot tub area, outdoor seating, balcony perimeter"
                    status="ACTIVE"
                    recording={true}
                    storage="Local NAS (30 day retention)"
                    timeline={[
                      "Now → 3 guests in pool, 2 at seating area",
                      "13:50 → Someone smoking alone near edge",
                      "12:30 → Small group, private conversation",
                      "11:00 → Empty (too early)",
                    ]}
                  />
                ),
              },
            },
          },
        },
      },

      "Smart Appliances": {
        content: (
          <MaintenanceAccess
            title="[SMART APPLIANCE NETWORK]"
            deviceModel="IoT Appliance Hub"
            deviceId="APPLIANCE-HUB-4201"
            firmwareVersion="v3.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "All kitchen and spa appliances networked",
              "High power consumption (party mode)",
              "Fridge auto-reorder disabled (consumption too high)",
              "All systems accessible remotely"
            ]}
          />
        ),
        related_commands: {
          "Jukebox": {
            content: (
              <Jukebox
                location="Steel Jackhammer's Penthouse - Holo Space"
                credits={0}
                theme="club"
                nowPlaying={{
                  title: "Chrome Fist Fury",
                  artist: "Killmatch Anthems Vol. 3",
                  genre: "Industrial Techno"
                }}
                queue={[
                  { title: "Blood on the Canvas", artist: "Cage Kings", genre: "Heavy Metal" },
                  { title: "Victory Lap", artist: "Champion Sounds", genre: "Trap" }
                ]}
                library={[
                  {
                    genre: "Industrial Techno",
                    songs: [
                      { title: "Chrome Fist Fury", artist: "Killmatch Anthems Vol. 3" },
                      { title: "Steel Rain", artist: "Cyber Assault" },
                      { title: "Hydraulic Pressure", artist: "Machine Gods" }
                    ]
                  },
                  {
                    genre: "Heavy Metal",
                    songs: [
                      { title: "Blood on the Canvas", artist: "Cage Kings" },
                      { title: "Warrior's Anthem", artist: "Battle Cry" },
                      { title: "No Mercy", artist: "Killzone" }
                    ]
                  },
                  {
                    genre: "Synthwave",
                    songs: [
                      { title: "Neon Victory", artist: "Retro Fighters" },
                      { title: "Digital Champion", artist: "ChromeCast" }
                    ]
                  }
                ]}
              />
            ),
          },

          "Sparring Cydroid": {
            content: (
              <MaintenanceAccess
                title="[SPARRING CYDROID CONTROL]"
                deviceModel="CombatTrain Pro-X"
                deviceId="CYDROID-GYM"
                firmwareVersion="v3.0.0"
                systemStatus="ACTIVE / STANDBY"
                notes={[
                  "Set to MAXIMUM DIFFICULTY (10/10)",
                  "Programmed with Steel's fighting style",
                  "Safety protocols DISABLED",
                  "Attacks anyone entering training ring",
                ]}
              >
                <InsetBox title="ADMIN CONTROL OPTIONS:">
                  <Line yellow>Change difficulty level (1-10)</Line>
                  <Line yellow>Enable/disable safety protocols</Line>
                  <Line yellow>Set specific target person</Line>
                  <Line yellow>Emergency shutdown</Line>
                  <Line yellow>Activate outside ring (chaos mode)</Line>
                </InsetBox>
                <Line red>WARNING: Activating outside ring will cause extreme chaos and injuries</Line>
              </MaintenanceAccess>
            ),
          },

          "Game Console": {
            content: (
              <ArcadeCabinet
                id="console-penthouse-elite"
                name="GAMEBOX ELITE PRO"
                location="Steel Jackhammer's Penthouse — Main Living Area"
                screenState="TOURNAMENT ACTIVE"
                lastPlayed="Now (4 players)"
                user="STEEL_J"
                credits={47500}
                gamesAvailable={[
                  "KILLMATCH CHAMPIONS",
                  "STREET WARS ONLINE",
                  "CYBER RACING UNLIMITED",
                ]}
              />
            ),
          },

          "Holo Projectors": {
            content: (
              <MaintenanceAccess
                title="[HOLO PROJECTOR CONTROL]"
                deviceModel="Multi-Room Holographic System"
                deviceId="HOLO-PROJ-01"
                firmwareVersion="v5.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "11 projectors total across penthouse",
                  "Currently displaying party content",
                  "Majority of party guests are holo-avatars",
                  "Real guests mixed with projections"
                ]}
              >
                <InsetBox title="ACTIVE PROJECTORS:">
                  <Line neon>Holo Space: 4 projectors (main entertainment)</Line>
                  <Line neon>Master Bedroom: 2 projectors (ambient/entertainment)</Line>
                  <Line neon>Gym: 1 projector (training displays)</Line>
                  <Line neon>Spa: 2 projectors (relaxation visuals)</Line>
                </InsetBox>
                <InsetBox title="OVERRIDE CAPABILITIES:">
                  <Line yellow>Display custom content on any projector</Line>
                  <Line yellow>Invite unlimited holo-avatars (flood with fake guests)</Line>
                  <Line yellow>Kill projections entirely</Line>
                  <Line yellow>Seizure-inducing flashing (extreme measure)</Line>
                </InsetBox>
                <Line red>WARNING: Extreme holo interference may cause panic or investigation</Line>
                <Line smoke small>Half the party guests are holo-avatars. Real guests in flesh.</Line>
              </MaintenanceAccess>
            ),
          },

          "Smart Fridge": {
            content: (
              <SmartFridge
                id="penthouse-fridge"
                model="CoolTech VIP-9000"
                location="Kitchen"
                temperature={38}
                physicalItems={[
                  {
                    id: "fridge_beer",
                    label: "Beer x48 bottles",
                    description: "Various brands for party"
                  },
                  {
                    id: "fridge_energy",
                    label: "Energy Drinks x32 cans",
                    description: "Party fuel"
                  },
                  {
                    id: "fridge_synth_juice",
                    label: "Synth-juice x12 bottles",
                    description: "Synthetic fruit juice"
                  },
                  {
                    id: "fridge_cocktails",
                    label: "Pre-mixed Cocktails x18 cans",
                    description: "Ready to drink"
                  },
                  {
                    id: "fridge_water",
                    label: "Water x24 bottles",
                    description: "Mostly untouched"
                  },
                  {
                    id: "fridge_protein",
                    label: "Protein Packs x8",
                    description: "Meal replacement"
                  },
                  {
                    id: "fridge_takeout",
                    label: "Leftover Takeout",
                    description: "Days old, probably bad"
                  },
                ]}
                freezerItems={[
                  {
                    id: "freezer_blackout",
                    label: "Blackout x10 doses",
                    description: "Sedative drug - kept frozen for preservation",
                    value: 1500,
                    isCredits: false
                  },
                  {
                    id: "freezer_ice_cream",
                    label: "Ice Cream x3 containers",
                    description: "Various flavors"
                  },
                  {
                    id: "freezer_pizza",
                    label: "Frozen Pizza x4 boxes",
                    description: "Untouched"
                  },
                  {
                    id: "freezer_ice",
                    label: "Ice x2 bags",
                    description: "For drinks"
                  },
                ]}
                freezerTemp={0}
                notes="Auto-reorder disabled - party consumption too high. Fridge desperately trying to order supplies but gave up."
              />
            ),
          },

          "Coffee Machine": {
            content: (
              <CoffeeMachine>
                <Extractable
                  id="penthouse-coffee-stash"
                  digitalItems={[
                    {
                      id: "coffee_emergency_cash",
                      label: "Emergency coffee funds",
                      description: "Get the good shit this time!",
                      value: 180,
                      isCredits: true
                    },
                  ]}
                />
              </CoffeeMachine>
            ),
          },

          "Spa Controls": {
            content: (
              <MaintenanceAccess
                title="[SPA CONTROL SYSTEMS]"
                deviceModel="Wellness Equipment Hub"
                deviceId="SPA-CONTROLS"
                firmwareVersion="v2.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Hot tub and sauna both running",
                  "High power consumption",
                  "Water filtration active",
                  "Temperature stable"
                ]}
              >
                <InsetBox title="HOT TUB:">
                  <Line cyan>Temperature: 40°C (104°F)</Line>
                  <Line cyan>Jets: ACTIVE</Line>
                  <Line cyan>Current occupancy: 4 guests</Line>
                  <Line cyan>Override: Can adjust temp, disable jets, drain</Line>
                </InsetBox>
                <InsetBox title="SAUNA:">
                  <Line yellow>Temperature: 85°C (185°F)</Line>
                  <Line yellow>Steam: ACTIVE</Line>
                  <Line yellow>Current occupancy: 2 guests</Line>
                  <Line yellow>Override: Can adjust temp, disable steam</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "Room Systems": {
        content: (
          <RoomAccess
            title="ROOM-BY-ROOM STATUS"
            network="JACKHAMMER_HOME"
            status="MONITORING"
            stats={{ occupancy: "20+ guests", power: "HIGH", noise: "HIGH" }}
          />
        ),
        related_commands: {
          "Hallway": {
            content: (
              <RoomAccess
                title="HALLWAY"
                network="JACKHAMMER_HOME"
                status="HIGH TRAFFIC"
                stats={{ occupancy: "Constant flow", noise: "HIGH" }}
              >
                <InsetBox title="CURRENT ACTIVITY:">
                  <Line cyan>Constant flow of party guests</Line>
                  <Line cyan>Multiple dealers visible (drugs, stims, party supplies)</Line>
                  <Line cyan>Delivery personnel (food, alcohol)</Line>
                  <Line cyan>Mix of flesh guests and holo-avatars</Line>
                  <Line smoke small>As soon as one dealer leaves, another shows up</Line>
                </InsetBox>
              </RoomAccess>
            ),
          },

          "Guest Room": {
            content: (
              <RoomAccess
                title="GUEST ROOM"
                network="JACKHAMMER_HOME"
                status="UNUSED"
                stats={{ occupancy: "Empty" }}
              >
                <InsetBox title="CLOSET:">
                  <Line smoke>• Pots and pans</Line>
                  <Line smoke>• Old books </Line>
                  <Line smoke>• Tuxedo</Line>
                </InsetBox>
              </RoomAccess>
            ),
            related_commands: {
              "Drawer Storage": {
                content: (
                  <Extractable
                    id="penthouse-guest-drawer"
                    physicalItems={[
                      {
                        id: "faceblock_pack_1",
                        label: "Faceblock (Pack 1)",
                        description: "Facial recognition blocker",
                        value: 450
                      },
                      {
                        id: "faceblock_pack_2",
                        label: "Faceblock (Pack 2)",
                        description: "Facial recognition blocker",
                        value: 450
                      },
                    ]}
                  />
                ),
              },
            },
          },

          "Tiger Room": {
            content: (
              <RoomAccess
                title="TIGER ROOM"
                network="JACKHAMMER_HOME"
                status="ACTIVE"
                stats={{ occupancy: "2 cats", noise: "LOW" }}
              >
                <InsetBox title="OCCUPANTS:">
                  <Line red bold>STRIPE — multi-colored striped fur, currently sleeping</Line>
                  <Line red bold>SHADE — dark violet fur, pacing cage front</Line>
                  <Line yellow>Cage gate: Electronically locked, opens to main living area</Line>
                </InsetBox>
                <InsetBox title="NOTES:">
                  <Line smoke>Modified guest room — cage structure occupies most of space</Line>
                  <Line smoke>Structural modification approved</Line>
                  <Line yellow>⚠ Cage inspection overdue (see building maintenance log)</Line>
                </InsetBox>
              </RoomAccess>
            ),
          },

          "Main Balcony": {
            content: (
              <RoomAccess
                title="MAIN BALCONY"
                network="JACKHAMMER_HOME"
                status="OCCUPIED"
                stats={{ occupancy: "5 guests", temp: "Outdoor" }}
              >
                <InsetBox title="FEATURES:">
                  <Line cyan>Heated pool (occupied, 3 guests)</Line>
                  <Line cyan>Outdoor seating (2 guests, private conversation)</Line>
                  <Line cyan>Panoramic view — Floor 42, Central District</Line>
                  <Line cyan>No holo projectors — flesh guests only</Line>
                  <Line yellow>⚠ Building disclaimer: Glazing stress fracture logged (see maintenance)</Line>
                </InsetBox>
              </RoomAccess>
            ),
          },

          "Master Bedroom": {
            content: (
              <RoomAccess
                title="MASTER BEDROOM"
                network="JACKHAMMER_HOME"
                status="EMPTY"
                stats={{ occupancy: "Empty", temp: "22°C", noise: "MUFFLED" }}
              >
                <InsetBox title="ROOM FEATURES:">
                  <Line cyan>Soundproofed walls</Line>
                  <Line cyan>King-sized bed (unmade, unused during party)</Line>
                  <Line cyan>Door to en-suite bathroom</Line>
                  <Line cyan>Door to private balcony (seating, city view, no pool)</Line>
                  <Line cyan>Clothes scattered everywhere</Line>
                  <Line smoke small>Smells of incense and cleaning detergent</Line>
                </InsetBox>
              </RoomAccess>
            ),
            related_commands: {
              "Wall Safe": {
                password: {
                  pw: 'password',
                  hint: "Default",
                  content: <Locked theme="safe" />
                },
                content: (
                  <Safe
                    id="penthouse-master-safe"
                    model="SafeBox Mini"
                    location="Master Bedroom - Small wall safe"
                    owner="Steel Jackhammer"
                    lastAccess="4 days ago (pre-party)"
                    physical={[]}
                    digital={[
                      {
                        id: "jackhammer_master_safe",
                        label: "Quick emergency funds",
                        value: 100,
                        isCredits: true,
                      },
                    ]}
                  />
                ),
              },
            },
          },

          "Main Living Area": {
            content: (
              <RoomAccess
                title="MAIN LIVING AREA"
                network="JACKHAMMER_HOME"
                status="PARTY MODE ACTIVE"
                stats={{ occupancy: "8-10 guests", noise: "LOUD", power: "HIGH" }}
              >
                <InsetBox title="ENTERTAINMENT SYSTEMS:">
                  <Line neon>Jukebox (loud techno playing)</Line>
                  <Line neon>Holo projectors</Line>
                  <Line neon>Game console (GameBox Elite Pro)</Line>
                </InsetBox>
              </RoomAccess>
            ),
            related_commands: {
              "Cyber-Lich Holo Painting": {
                content: (
                  <RoomAccess
                    title="CYBER-LICH HOLO PAINTING"
                    network="JACKHAMMER_HOME"
                  >
                    <RetComImage
                      theme="purple"
                      src={cyberlich_painting_image}
                      alt="Steel Jackhammer Penthouse Cyberlich Painting"
                    />
                  </RoomAccess>
                ),
                related_commands: {
                  "Holo Display Memory": {
                    password: {
                      pw: 'heman',
                      hint: "I'll get you next time!",
                      content: <EncryptedMessage />
                    },
                    content: (
                      <EncryptedMessage
                        messages={[
                          "[TIMESTAMP: Oct 28, 2067 - 02:47]",
                          "FROM: A.Inc_Legal_7",
                          "TO: TG_Research_Lead",
                          "",
                          "Prototype leg transfer confirmed. Jackhammer incident",
                          "scheduled for Oct 29 (Krok match). Legs will be",
                          "'damaged beyond repair' as planned.",
                          "",
                          "Medical team standing by for installation.",
                          "Cover story: Alliansen developed independently.",
                          "",
                          "Payment: 2.5M¤ to your offshore account.",
                          "Delete this after reading.",
                          "",
                          "[MARKET VALUE: 9,000¤ to competitor media]",
                          "[CONSEQUENCE: Career/life termination for Steel Jackhammer]",
                        ]}
                      />
                    ),
                  },
                },
              },
            },
          },

          "Balcony": {
            content: (
              <RoomAccess
                title="PRIVATE BALCONY"
                network="JACKHAMMER_HOME"
                status="OPERATIONAL"
                stats={{ occupancy: "2 guests", temp: "Outdoor" }}
              >
                <InsetBox title="FEATURES:">
                  <Line cyan>Supposedly bulletproof glass (manufacturer claims)</Line>
                  <Line cyan>Panoramic view of Central District</Line>
                  <Line cyan>No holo projectors — flesh guests only</Line>
                  <Line cyan>Private area for conversations</Line>
                  <Line yellow>⚠ Building insurance disclaimer: Not responsible for structural failures</Line>
                </InsetBox>
              </RoomAccess>
            ),
          },
        },
      },
    },
  },
};

export default STEEL_PENTHOUSE_COMMANDS;
