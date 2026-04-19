import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  ArcadeCabinet,
  BuildingServices,
  Camera,
  CoffeeMachine,
  EncryptedMessage,
  Extractable,
  Jukebox,
  Node,
  NetworkActivity,
  RCDAlert,
  RetComImage,
  Safe,
  SmartFridge,
  VIPList,
} from '@terminal/retcomdevice';

import cyberlich_painting_image from '@images/cyberlich_painting.png';

export const STEEL_PENTHOUSE_COMMANDS = {
  "Steel Jackhammer's Penthouse": {
    favicon: <Icons.House />,
    preview: (
      <NodePreview>
        <Line span smoke> · Smart Home System</Line>
      </NodePreview>
    ),
    password: {
      pw: 'unkillable',
      hint: "Can't take down the champ!",
      decoyLetters: "p,r,m",
      lockType: 'home',
    },
    content: (
      <Node
        title="PENTHOUSE SMART HOME — NETWORK ACCESS ESTABLISHED"
        table={{
          network: "JACKHAMMER_HOME",
          occupancy: "20+ guests",
          load: "85% capacity",
          power: "HIGH",
        }}
        notes={[
          "Smart fridge auto-reorder disabled — consumption exceeding capacity",
          "Climate control struggling — party heat exceeding set temperature",
          "Sparring cydroid: MAXIMUM difficulty, safety protocols disabled",
          "Holo projectors active — majority of guests are holo-avatars",
        ]}
        footer="Connected to JACKHAMMER_HOME | Welcome to the most over-engineered apartment in Central District"
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
      </Node>
    ),
    related_commands: {
      "Building Services": {
        favicon: <Icons.Services />,
        password: {
          pw: 'steel4201',
          lockType: 'terminal',
        },
        content: (
          <BuildingServices
            title="UNIT 4201 — BUILDING SYSTEMS"
            sections={[
              {
                title: "HVAC & Climate",
                notes: [
                  "Set temperature: 22°C",
                  "Actual temperature: 24°C (party heat exceeding capacity)",
                  "Humidity: 45%",
                  "Air quality: POOR (smoke, body heat, party)",
                ],
                actions: [
                  "Drop temperature to minimum (15°C)",
                  "Kill AC",
                  "Vent windows/balcony door remotely",
                ],
                warning: "Climate manipulation takes 10-15 minutes to have noticeable effect.",
              },
              {
                title: "Fire Suppression",
                notes: [
                  "Sprinkler system armed",
                  "Smoke detectors active (8 units)",
                  "Manual override available",
                  "Last test: 2 months ago",
                ],
                actions: [
                  "Trigger manual sprinkler override",
                ],
              },
              {
                title: "Emergency Systems",
                notes: [
                  "Smoke alarms active",
                  "Emergency exit lighting functional",
                ],
                actions: [
                  "Panic button — Master bedroom nightstand — alerts building security + SecCorps (~3 min response)",
                ],
              },
            ]}
          />
        ),
      },

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: 'twokroks',
          showFirst: true,
          showCount: true,
          hint: "The actual amount that weren't drugged",
          lockType: 'terminal',
        },
        content: (
          <Node
            title="[SECURITY SYSTEMS HUB]"
          />
        ),
        related_commands: {
          "Network Activiy": {
            favicon: <Icons.Computer />,
            content: (
              <NetworkActivity
                title="JACKHAMMER_HOME"
                environment={{ temp: "24°C", noise: "HIGH", power: "HIGH" }}
                devices={[
                  { name: "Security Console" },
                  {
                    name: "Camera System",
                    location: "All rooms",
                    transfer: {
                      name: "camera_feed_buffer_dump.vid",
                      destination: "Local NAS",
                      size: "4.1 GB",
                      note: "Automated hourly backup"
                    }
                  },
                  { name: "NAS Storage" },
                  {
                    name: "Holo Projectors",
                    location: "Holo Space",
                    status: "ACTIVE",
                    transfer: {
                      name: "holo_avatar_stream_batch_47.dat",
                      destination: "External (multiple IPs)",
                      size: "2.3 GB",
                      note: "22 concurrent holo-avatar connections"
                    }
                  },
                  {
                    name: "Smart Fridge",
                    location: "Kitchen",
                    transfer: {
                      name: "smart_fridge_auto_reorder.req",
                      destination: "Grocery Delivery",
                      size: "2.3 KB",
                      note: "FAILED — auto-reorder disabled after 47 attempts"
                    }
                  },
                  { name: "Sparring Cydroid", location: "Gym", status: "ACTIVE" },
                  { name: "Wall Safe", location: "Master Bedroom" },
                  { name: "Coffee Machine", location: "Kitchen" },
                  { name: "HVAC Control", status: "ACTIVE" },
                  { name: "Game Console", location: "Main Living Area", status: "ACTIVE" },
                  { name: "Jukebox", status: "ACTIVE" },
                ]}
              />
            ),
          },

          "VIP Guest List": {
            favicon: <Icons.Group />,
            content: (
              <VIPList
                eventName="Steel Jackhammer's Penthouse Party"
                location="Peach Trees - Unit 4201, Floor 42"
                date="Nov 16-18, 2067 (Ongoing)"
                vips={[
                  {
                    name: "ZENIT",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Writer for KILL!KILL!KILL! fan feed. Known for intimate athlete interviews. Often armed.",
                  },
                  {
                    name: "IKHON",
                    alias: "The Warlock",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Nano-using athlete with mysterious warlock persona. Heavyweight division. Friendly when substances are available.",
                  },
                  {
                    name: "THUGGER",
                    alias: "The Unstoppable",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "11-month win streak (will not stop mentioning this). Electro-taur chromed. Cyberspine enhanced. Extremely cocky.",
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
                  },
                  {
                    name: "MASTER CRIMSON",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Arvtagarna cult member. Nano abilities confirmed. C-list veteran, visibly bored with party scene.",
                  },
                  {
                    name: "GOLIATHESS",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Up-and-coming heavyweight. StoneSkin chrome. Known for engineering dramatic moments for feed engagement.",
                  },
                  {
                    name: "JADE BOOMSLANG",
                    status: "ARRIVED",
                    clearance: "VIP",
                    notes: "Virid Vipers sponsored. Full-body reptile scale modifications. New to scene, actively seeking connections.",
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
            favicon: <Icons.Camera />,
            content: (
              <Node
                title="[SECURITY CAMERA GRID]"
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
              </Node>
            ),
            related_commands: {
              "Main Living Area Camera": {
                favicon: <Icons.Camera />,
                content: (
                  <Camera
                    id="cam-penthouse-living"
                    location="Main Living Area"
                    coverage="Central party space, rounded table, Cyber-Lich painting, connections to kitchen, tiger room, balcony"
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
                favicon: <Icons.Camera />,
                content: (
                  <Camera
                    id="cam-penthouse-kitchen"
                    location="Kitchen"
                    coverage="Appliances, counters, entry from main area"
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
                favicon: <Icons.Camera />,
                content: (
                  <Camera
                    id="cam-penthouse-tigers"
                    location="Tiger Room (Modified Guest Room)"
                    coverage="Cage structure, cage gate, opening to main living area"
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
                favicon: <Icons.Camera />,
                content: (
                  <Camera
                    id="cam-penthouse-master"
                    location="Master Bedroom"
                    coverage="Full room, closet door, private balcony door"
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
                favicon: <Icons.Camera />,
                content: (
                  <Camera
                    id="cam-penthouse-gym"
                    location="Gym"
                    coverage="Equipment, sparring ring, mirror wall"
                    timeline={[
                      "Now → Empty (cydroid in standby)",
                      "Yesterday, 18:00 → Steel training session (2 hours)",
                      "Yesterday, 10:00 → Guest entered ring, cydroid engaged (guest fled)",
                    ]}
                  />
                ),
              },

              "Spa Camera": {
                favicon: <Icons.Camera />,
                content: (
                  <Camera
                    id="cam-penthouse-spa"
                    location="Spa"
                    coverage="Hot tub, sauna entrance, relaxation area"
                    timeline={[
                      "Now → 4 guests in hot tub, 2 in sauna",
                      "14:00 → Someone fell asleep in hot tub (woken by friend)",
                      "13:15 → Steam reduced visibility temporarily",
                    ]}
                  />
                ),
              },

              "Main Balcony Camera": {
                favicon: <Icons.Camera />,
                content: (
                  <Camera
                    id="cam-penthouse-balcony"
                    location="Main Balcony"
                    coverage="Pool/hot tub area, outdoor seating, balcony perimeter"
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
        favicon: <Icons.Devices />,
        content: (
          <Node
            title="[SMART APPLIANCE NETWORK]"
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
            favicon: <Icons.Radio />,
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
            favicon: <Icons.Fitness />,
            content: (
              <Node
                title="[SPARRING CYDROID CONTROL]"
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
              </Node>
            ),
          },

          "Game Console": {
            favicon: <Icons.VideoGame />,
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
            favicon: <Icons.Computer />,
            content: (
              <Node
                title="[HOLO PROJECTOR CONTROL]"
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
              </Node>
            ),
          },

          "Smart Fridge": {
            favicon: <Icons.Fridge />,
            content: (
              <SmartFridge
                id="penthouse-fridge"
                model="CoolTech VIP-9000"
                location="Kitchen"
                temperature={38}
                physicalItems={[
                  {
                    id: "jackhammer_fridge_beer",
                    label: "Beer",
                    description: "Various brands for party",
                    quantity: 48,
                  },
                  {
                    id: "jackhammer_fridge_energy",
                    label: "Energy Drinks",
                    description: "Party fuel",
                    quantity: 32,
                  },
                  {
                    id: "jackhammer_fridge_synth_juice",
                    label: "Synth-juice",
                    description: "Synthetic fruit juice",
                    quantity: 12,
                  },
                  {
                    id: "jackhammer_fridge_cocktails",
                    label: "Pre-mixed Cocktails",
                    description: "Ready to drink",
                    quantity: 18,
                  },
                  {
                    id: "jackhammer_fridge_water",
                    label: "Water",
                    description: "Mostly untouched",
                    quantity: 24,
                  },
                  {
                    id: "jackhammer_fridge_protein",
                    label: "Protein Packs",
                    description: "Meal replacement",
                    quantity: 8,
                  },
                  {
                    id: "jackhammer_fridge_takeout",
                    label: "Leftover Takeout",
                    description: "Days old, probably bad"
                  },
                ]}
                freezerItems={[
                  {
                    id: "jackhammer_freezer_blackout",
                    label: "Blackout",
                    description: "Sedative drug, kept frozen",
                    quantity: 10,
                    section: "drugs",
                  },
                  {
                    id: "jackhammer_freezer_ice_cream",
                    label: "Ice Cream",
                    description: "Various flavors",
                    quantity: 3,
                  },
                  {
                    id: "jackhammer_freezer_pizza",
                    label: "Frozen Pizza",
                    description: "Untouched",
                    quantity: 4,
                  },
                  {
                    id: "jackhammer_freezer_ice",
                    label: "Ice",
                    description: "For drinks",
                    quantity: 2,
                  },
                ]}
                freezerTemp={0}
                notes="Auto-reorder disabled - party consumption too high. Fridge desperately trying to order supplies but gave up."
              />
            ),
          },

          "Coffee Machine": {
            favicon: <Icons.CoffeeMachine />,
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
            favicon: <Icons.Maintenance />,
            content: (
              <Node
                title="[SPA CONTROL SYSTEMS]"
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
              </Node>
            ),
          },
        },
      },

      "Room Systems": {
        favicon: <Icons.Room />,
        content: (
          <Node
            title="ROOM-BY-ROOM STATUS"
            table={{
              occupancy: "20+ guests",
              power: "HIGH",
              noise: "HIGH",
            }}
          />
        ),
        related_commands: {
          "Hallway": {
            favicon: <Icons.Room />,
            content: (
              <Node
                title="HALLWAY"
                table={{
                  occupancy: "Constant flow",
                  noise: "HIGH",
                }}
              >
                <InsetBox title="CURRENT ACTIVITY:">
                  <Line cyan>Constant flow of party guests</Line>
                  <Line cyan>Multiple dealers visible (drugs, stims, party supplies)</Line>
                  <Line cyan>Delivery personnel (food, alcohol)</Line>
                  <Line cyan>Mix of flesh guests and holo-avatars</Line>
                  <Line smoke small>As soon as one dealer leaves, another shows up</Line>
                </InsetBox>
              </Node>
            ),
          },

          "Guest Room": {
            favicon: <Icons.Room />,
            content: (
              <Node
                title="GUEST ROOM"
                table={{ occupancy: "Empty" }}
              >
                <InsetBox title="CLOSET:">
                  <Line smoke>• Pots and pans</Line>
                  <Line smoke>• Old books </Line>
                  <Line smoke>• Tuxedo</Line>
                </InsetBox>
              </Node>
            ),
            related_commands: {
              "Drawer Storage": {
                favicon: <Icons.Furniture />,
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
            favicon: <Icons.Room />,
            content: (
              <Node
                title="TIGER ROOM"
                table={{ occupancy: "2 cats", noise: "LOW" }}
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
              </Node>
            ),
          },

          "Main Balcony": {
            favicon: <Icons.Room />,
            content: (
              <Node
                title="MAIN BALCONY"
                stats={{ occupancy: "5 guests", temp: "Outdoor" }}
              >
                <InsetBox title="FEATURES:">
                  <Line cyan>Heated pool (occupied, 3 guests)</Line>
                  <Line cyan>Outdoor seating (2 guests, private conversation)</Line>
                  <Line cyan>Panoramic view — Floor 42, Central District</Line>
                  <Line cyan>No holo projectors — flesh guests only</Line>
                  <Line yellow>⚠ Building disclaimer: Glazing stress fracture logged (see maintenance)</Line>
                </InsetBox>
              </Node>
            ),
          },

          "Master Bedroom": {
            favicon: <Icons.Room />,
            content: (
              <Node
                title="MASTER BEDROOM"
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
              </Node>
            ),
            related_commands: {
              "Wall Safe": {
                favicon: <Icons.Lock />,
                password: {
                  pw: 'password',
                  hint: "Default",
                  lockType: 'safe',
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
            favicon: <Icons.Room />,
            content: (
              <Node
                title="MAIN LIVING AREA"
                stats={{ occupancy: "8-10 guests", noise: "LOUD", power: "HIGH" }}
              >
                <InsetBox title="ENTERTAINMENT SYSTEMS:">
                  <Line neon>Jukebox (loud techno playing)</Line>
                  <Line neon>Holo projectors</Line>
                  <Line neon>Game console (GameBox Elite Pro)</Line>
                </InsetBox>
              </Node>
            ),
            related_commands: {
              "Cyber-Lich Holo Painting": {
                favicon: <Icons.Room />,
                content: (
                  <Node
                    title="CYBER-LICH HOLO PAINTING"
                  >
                    <RetComImage
                      theme="purple"
                      src={cyberlich_painting_image}
                      alt="Steel Jackhammer Penthouse Cyberlich Painting"
                    />
                  </Node>
                ),
                related_commands: {
                  "Holo Display Memory": {
                    favicon: <Icons.Database />,
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
            favicon: <Icons.Room />,
            content: (
              <Node
                title="PRIVATE BALCONY"
                stats={{ occupancy: "2 guests", temp: "Outdoor" }}
              >
                <InsetBox title="FEATURES:">
                  <Line cyan>Supposedly bulletproof glass (manufacturer claims)</Line>
                  <Line cyan>Panoramic view of Central District</Line>
                  <Line cyan>No holo projectors — flesh guests only</Line>
                  <Line cyan>Private area for conversations</Line>
                  <Line yellow>⚠ Building insurance disclaimer: Not responsible for structural failures</Line>
                </InsetBox>
              </Node>
            ),
          },
        },
      },
    },
  },
};

export default STEEL_PENTHOUSE_COMMANDS;
