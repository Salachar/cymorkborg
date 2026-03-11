import Icons from '@utils/icons';

import {
  Line,
  KeyValue,
  InsetBox,
} from '@terminal/TerminalComponents';

import {
  ArcadeCabinet,
  ATM,
  Safe,
  FacilityPortal,
  Jukebox,
  Locked,
  Menu,
  HoursBanner,
  CommunityBoard,
  MaintenanceAccess,
  PublicPortal,
  PersonnelFile,
  Workstation,
} from "@terminal/retcomdevice"

export const BUSINESS_COMMANDS = {
  "Fingers' Clinic": {
    favicon: <Icons.RipperDoc />,
    content: (
      <MaintenanceAccess
        title="[FINGERS' MEDICAL SERVICES]"
        deviceModel="Clinic Management System"
        deviceId="CLINIC-FINGERS-01"
        firmwareVersion="v2.1.0"
        systemStatus="OPERATIONAL"
        notes={[
          "Walk-ins welcome - Cash preferred",
          "Hours: 24/7 (emergencies always accepted)",
          "Location: 2 blocks south of main market, basement entrance",
          "Access: Knock three times, wait for response",
          "Proprietor: 'Fingers' (licensed medical training, former corporate medic)"
        ]}
      >
        <InsetBox title="SERVICES & RATES:">
          <KeyValue label="Emergency treatment" value="100¤" />
          <KeyValue label="Trauma surgery" value="150¤" />
          <KeyValue label="Cyberware installation" value="Variable (consultation required)" />
          <KeyValue label="Prescriptions (stims, painkillers)" value="20¤ per dose" />
          <KeyValue label="Medical record services" value="80¤" />
        </InsetBox>
        <Line pink>"Former corporate medic. Credentials don't matter when you're bleeding."</Line>
      </MaintenanceAccess>
    ),
    related_commands: {
      "Personnel File": {
        favicon: <Icons.Person />,
        content: (
          <PersonnelFile
            employeeId="CLINIC-DOC-001"
            name="Victor 'Fingers' Chen"
            position="Proprietor / Street Doctor"
            department="Independent Medical Practice"
            supervisor="Self-employed"
            clearanceLevel={5}
            performance={88}
            notes={[
              "Former corporate medic - MediCorp (10 years service)",
              "Left corporate medicine after ethics dispute",
              "Specialty: Trauma care, emergency cyberware repairs",
              "Reputation: Discreet, skilled, expensive but fair",
              "No questions asked policy - maintains strict patient confidentiality",
              "Maintains connections with black market medical suppliers",
              "Known weakness: Soft spot for desperate cases (sometimes works pro bono)"
            ]}
          />
        ),
      },

      "Patient Records": {
        favicon: <Icons.Files />,
        password: {
          pw: "scalpel",
          hint: "Slicey slicey time tool",
          content: <Locked theme="terminal" title="PATIENT DATABASE" />
        },
        content: (
          <MaintenanceAccess
            title="[PATIENT DATABASE]"
            deviceModel="Medical Records System"
            deviceId="MED-REC-FINGERS"
            firmwareVersion="v1.8.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Last 30 days of records",
              "Patient identities not recorded per policy",
              "All records encrypted and air-gapped",
              "Supply orders tracked for inventory management"
            ]}
          >
            <InsetBox title="RECENT CASES:">
              <Line neon>Patient #447 - Gunshot wound (shoulder), treated, stable</Line>
              <Line neon>Patient #448 - Cyberware rejection, stabilized, referred</Line>
              <Line neon>Patient #449 - Blunt trauma (multiple), treated, discharged</Line>
              <Line yellow>Patient #450 - Stim overdose, critical, stabilized</Line>
              <Line neon>Patient #451 - Lacerations (defensive wounds), treated</Line>
            </InsetBox>
            <InsetBox title="SUPPLY ORDERS:">
              <Line cyan>Last order: 5 days ago</Line>
              <Line neon>Items: Synthetic skin, antibiotics, painkillers</Line>
              <Line neon>Supplier: Black market medical (no receipts)</Line>
              <Line yellow>Next order: Low on trauma supplies</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  "Razor's Garage": {
    favicon: <Icons.Garage />,
    content: (
      <MaintenanceAccess
        title="[RAZOR'S TECHNICAL SERVICES]"
        deviceModel="Shop Management System"
        deviceId="SHOP-RAZOR-01"
        firmwareVersion="v3.0.2"
        systemStatus="OPERATIONAL"
        notes={[
          "Modifications. Repairs. Discretion.",
          "Hours: 14:00-02:00 (closed mornings)",
          "Location: 3 blocks east, abandoned garage complex",
          "Access: Side entrance, ask for Razor",
          "Premium: +50¤ for 'no questions asked' service"
        ]}
      >
        <InsetBox title="SERVICES OFFERED:">
          <Line neon>• Cyberware sales & installation</Line>
          <Line neon>• Weapon modifications</Line>
          <Line neon>• Vehicle repairs & upgrades</Line>
          <Line neon>• Electronics & hacking tools</Line>
          <Line neon>• ID & credential services</Line>
        </InsetBox>
        <InsetBox title="PRICING:">
          <Line cyan>Cyberware: Market rate minus 40% (used/refurbished)</Line>
          <Line cyan>Weapons: Custom work, 80¤ base + parts</Line>
          <Line cyan>IDs/Credentials: 80¤ (quality varies)</Line>
          <Line cyan>Vehicle work: Consultation required</Line>
        </InsetBox>
        <Line pink>"You get what you pay for. Sometimes you get more."</Line>
        <Line red>* All sales final - No refunds or exchanges</Line>
      </MaintenanceAccess>
    ),
    related_commands: {
      "Personnel File": {
        favicon: <Icons.Person />,
        content: (
          <PersonnelFile
            employeeId="SHOP-TECH-001"
            name="Razor"
            age={35}
            position="Proprietor / Chop Shop Technician"
            department="Independent Technical Services"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Ports (unknown residence)"
            emergencyContact="None listed"
            performance={91}
            notes={[
              "Background: Unknown (suspected former corpo tech)",
              "Specialty: Cyberware modification, weapons tech, vehicle work",
              "Reputation: Skilled but paranoid, high quality work",
              "Known for: Refusing jobs from corps, SecOps, Virid Vipers",
              "Maintains strict 'no questions' policy on all work",
              "Excellent connections to black market suppliers",
              "Will sometimes trade services for interesting tech/parts"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "Inventory System": {
        favicon: <Icons.Inventory />,
        password: {
          pw: "bruteforce",
          hint: "Not elegant. But effective",
          content: <Locked theme="terminal" title="INVENTORY SYSTEM" />
        },
        content: (
          <MaintenanceAccess
            title="[INVENTORY DATABASE]"
            deviceModel="Shop Inventory System"
            deviceId="INV-RAZOR-01"
            firmwareVersion="v2.0.1"
            systemStatus="OPERATIONAL"
            uptime="234 days, 6 hours"
            notes={[
              "Current stock - Last updated 2 hours ago",
              "Source: Various (stolen, salvaged, black market)",
              "Shipment expected: 3 days (canal delivery)",
              "All items tested before sale (mostly)"
            ]}
          >
            <InsetBox title="CYBERWARE (Refurbished):">
              <Line neon>Neural interface (basic) - 3 units</Line>
              <Line neon>Subdermal armor plates - 2 units</Line>
              <Line neon>Optical enhancement (low-grade) - 4 units</Line>
              <Line yellow>Reflex booster (untested) - 1 unit</Line>
            </InsetBox>
            <InsetBox title="WEAPONS & PARTS:">
              <Line neon>Pistol frames (no serial) - 6 units</Line>
              <Line neon>Ammunition (various calibers) - Mixed stock</Line>
              <Line neon>Suppressors (homemade) - 3 units</Line>
            </InsetBox>
            <InsetBox title="ELECTRONICS:">
              <Line cyan>Signal jammers - 2 units</Line>
              <Line cyan>Lockpick kits (electronic) - 5 units</Line>
              <Line cyan>Surveillance counter-measures - 4 units</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  "Mira's Corner Shop": {
    favicon: <Icons.Bodega />,
    content: (
      <PublicPortal
        name="MIRA'S CORNER SHOP"
        tagline="Groceries. Supplies. Gossip."
        network="MIRA_GUEST_WIFI"
        signalStrength="strong"
        status="✓ OPEN"
        statusColor="neon"
        nowPlaying="Local radio - Ports Community Hour"
        notes={[
          "Free WiFi with purchase",
          "Package pickup available",
          "Bathroom for customers only"
        ]}
        theme="casual"
      >
        <HoursBanner
          name="Schedule"
          hours="Mon-Sat: 06:00-22:00 | Sun: 08:00-18:00"
          days="7 Days a Week"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Community Bulletin": {
        favicon: <Icons.Bulletin />,
        content: (
          <CommunityBoard
            name="COMMUNITY BULLETIN BOARD"
            posts={[
              { text: "Roommate needed - 300¤/month, utilities split", color: "pink" },
              { text: "Lost cat - grey tabby, answers to 'Static'", color: "pink" },
              { text: "Selling bicycle - needs work, 50¤", color: "pink" },
              { text: "Looking for work - have tools, will travel", color: "pink" },
              { text: "Poker night Fridays - basement of The Anchor bar", color: "cyan" },
              { text: "Musician seeking bandmates - synth & drums especially", color: "pink" },
            ]}
            services={[
              "Handyman - odd jobs, fair rates (RCD: fix_it_vic@local)",
              "Tutor - math & science, evenings (knock apt 4B)",
              "Bicycle repair - mobile service, call ahead",
            ]}
            vibe="Tight-knit neighborhood, everyone knows everyone"
          />
        ),
      },

      "Personnel File": {
        favicon: <Icons.Person />,
        content: (
          <PersonnelFile
            employeeId="SHOP-OWNER-001"
            name="Mira Patel"
            age={52}
            position="Owner / Operator"
            department="Independent Retail"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Ports (lives in apartment above shop)"
            emergencyContact="Daughter - Priya Patel"
            performance={84}
            notes={[
              "Third-generation Ports resident",
              "Known as neighborhood information hub",
              "Maintains good relationships with all local factions",
              "Fair prices, extends credit to regulars during hard times",
              "Gossip network: Knows everything happening in 5-block radius",
              "Protective of neighborhood - reports suspicious outsiders",
              "Daughter Priya helps with shop on weekends"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "boxesboxesboxes",
          hint: "So many boxes",
          content: <Locked theme="terminal" title="SHOP SYSTEMS" />
        },
        content: (
          <MaintenanceAccess
            title="[SHOP INTERNAL SYSTEMS]"
            deviceModel="Retail Management System"
            deviceId="RETAIL-MIRA-01"
            firmwareVersion="v1.9.2"
            systemStatus="OPERATIONAL"
            uptime="412 days, 3 hours"
            notes={[
              "Last 24h transactions: 47",
              "Revenue: 412¤",
              "Most popular: Cigarettes, energy drinks, lottery",
              "Next delivery: Tomorrow morning (06:00)"
            ]}
          >
            <InsetBox title="INVENTORY ALERTS:">
              <Line yellow>Low stock: Milk, bread, batteries</Line>
              <Line yellow>Reorder needed: Snacks, alcohol</Line>
              <Line red>Expired soon: Check cooler items</Line>
            </InsetBox>
            <InsetBox title="PENDING:">
              <Line neon>Customer package pickups: 3</Line>
              <Line neon>Credchip exchange requests: 2</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  "The Rusty Anchor": {
    favicon: <Icons.Bar />,
    content: (
      <PublicPortal
        name="THE RUSTY ANCHOR"
        tagline="Cheap drinks. Cheaper conversation."
        network="ANCHOR_GUEST"
        signalStrength="medium"
        status="✓ OPEN"
        statusColor="neon"
        nowPlaying="Jukebox: Canal Blues - The Ports Drifters"
        notes={[
          "Happy Hour: 17:00-19:00",
          "Pool table: 5¤ per game",
          "Cash or credchip accepted"
        ]}
        theme="casual"
      >
        <HoursBanner
          name="Schedule"
          hours="14:00 - 02:00"
          days="Every Day"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Bar Menu": {
        favicon: <Icons.BarMenu />,
        content: (
          <Menu
            title="THE RUSTY ANCHOR"
            subtitle="Waterfront Dive Since 2070"
            signType="cocktail"
            categories={[
              {
                name: "DRINKS",
                items: [
                  { name: "Beer (local)", price: "8¤" },
                  { name: "Whiskey (synth)", price: "12¤" },
                  { name: "Vodka", price: "10¤" },
                  { name: "Well drinks", price: "10¤" },
                  { name: "Water (free)", price: "0¤" },
                ],
              },
              {
                name: "FOOD",
                items: [
                  { name: "Pretzels & peanuts", price: "Free with drink" },
                  { name: "Synth-meat sandwich", price: "15¤" },
                  { name: "Protein bowl", price: "12¤" },
                ],
              },
            ]}
            footer="If you can't find it at the Anchor, you don't need it."
          />
        ),
      },

      "Personnel File": {
        favicon: <Icons.Person />,
        content: (
          <PersonnelFile
            employeeId="BAR-OWNER-001"
            name="Voss Andersen"
            age={58}
            position="Owner / Bartender"
            department="Independent Hospitality"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Ports (lives in back room behind bar)"
            emergencyContact="None listed"
            performance={79}
            notes={[
              "Former dockworker - saved for 10 years to buy bar",
              "No-nonsense personality, maintains order through respect",
              "Extends credit to unemployed regulars (within reason)",
              "Known for: Remembering everyone's usual drink",
              "Neutral ground policy - all factions welcome if they behave",
              "Information broker (passive) - hears everything, shares selectively",
              "Pool shark - don't bet against him"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "Jukebox Terminal (JB-707-F4)": {
        favicon: <Icons.Radio />,
        content: (
          <Jukebox
            model="JB-707"
            location="Corner near pool table"
            cost="2¤"
            songs={[
              { title: "Rusty Water", artist: "Steel Tide", genre: "Industrial rock", color: 'blue' },
              { title: "Corporate Collapse", artist: "System Down", genre: "Punk", color: 'red' },
              { title: "Whiskey Nights", artist: "Dock Workers Union", genre: "Folk", color: 'orange' },
              { title: "Canal Blues", artist: "The Ports Drifters", genre: "Industrial folk-rock", color: 'cyan' },
              { title: "Chrome Dreams", artist: "Synapse", genre: "Synthwave", color: 'purple' },
            ]}
          />
        ),
      },

      "Bar Safe": {
        favicon: <Icons.Lock />,
        password: {
          pw: "crustacean",
          hint: "Crabs and such",
          content: <Locked theme="safe" title="BAR SAFE" />
        },
        content: (
          <Safe
            id="rusty-anchor-bar-safe"
            model="DS-300"
            location="Behind bar, under counter"
            owner="Voss (bar owner)"
            security="Electronic keypad"
            lastAccess="6 hours ago"
            physical={[
              {
                id: "bar_safe_cash",
                label: "Daily collected cash",
                description: "300¤ (cash, mixed bills)",
                value: 300,
                isCredits: true
              },
            ]}
            digital={[
              {
                id: "bar_safe_credchip",
                label: "Digitally collection credits",
                description: "125¤",
                value: 125,
                isCredits: true
              },
            ]}
            notes="Safe checked at closing (02:00) and opening (14:00)"
          />
        ),
      },
    },
  },

  "Lucky's Pawn & Trade": {
    favicon: <Icons.Pawn />,
    content: (
      <PublicPortal
        name="LUCKY'S PAWN & TRADE"
        tagline="Buy. Sell. Trade. No Judgments."
        network="LUCKY_PAWN_PUBLIC"
        signalStrength="strong"
        status="✓ OPEN"
        statusColor="neon"
        notes={[
          "Valid ID required",
          "All sales final",
          "Free appraisals (under 5 items)"
        ]}
        theme="friendly"
      >
        <HoursBanner
          name="LUCKY'S PAWN & TRADE"
          hours="10:00 - 19:00"
          days="Monday - Saturday (Closed Sunday)"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Personnel File": {
        favicon: <Icons.Person />,
        content: (
          <PersonnelFile
            employeeId="PAWN-OWNER-001"
            name="'Lucky' Lucas Kane"
            age={44}
            position="Owner / Pawnbroker"
            department="Independent Retail"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Ports (unknown residence)"
            emergencyContact="None listed"
            performance={82}
            notes={[
              "Background: Former fence for minor gangs",
              "Went legitimate after corp crackdown in 2074",
              "Sharp appraiser - rarely pays more than item is worth",
              "Reputation: Fair but shrewd businessman",
              "Known for: Accepting 'no questions asked' items (for premium)",
              "Connections: Maintains relationships with collectors, dealers",
              "Will occasionally tip off Stone Eels about valuable items"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "ATM": {
        favicon: <Icons.ATM />,
        password: {
          pw: "cashmoney",
          hint: "What everyone wants from an ATM",
          content: <Locked theme="terminal" title="ATM ACCESS" />
        },
        content: (
          <ATM
            id="lucky-pawn-atm"
            model="ATM-500"
            location="Inside Lucky's Pawn (by entrance)"
            network="CityBank"
            credits={20}
            lastService="1 week ago"
            transactions={[
              "14:32 → Withdrawal: 40¤",
              "15:18 → Withdrawal: 100¤",
              "16:05 → Balance inquiry",
              "16:47 → Failed transaction (insufficient funds)",
              "17:23 → Withdrawal: 20¤",
            ]}
          />
        ),
      },

      "Access Pawn Records": {
        favicon: <Icons.Files />,
        password: {
          pw: "thehouse",
          hint: "It always wins",
          content: <Locked theme="terminal" title="PAWN RECORDS" />
        },
        content: (
          <MaintenanceAccess
            title="[PAWN RECORDS DATABASE]"
            deviceModel="Pawn Shop Management System"
            deviceId="PAWN-LUCKY-01"
            firmwareVersion="v2.4.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Active loans & transaction history",
              "Last 7 days of pawn activity",
              "High-value items tracked separately",
              "Back room inventory unsorted"
            ]}
          >
            <InsetBox title="RECENT PAWNS (Last 7 days):">
              <Line neon>Item: Synthesizer keyboard, Loan: 80¤, Due: 22 days</Line>
              <Line neon>Item: Gold watch, Loan: 120¤, Due: 18 days</Line>
              <Line neon>Item: Power tools (set), Loan: 60¤, Due: 25 days</Line>
              <Line yellow>Item: Wedding ring, Loan: 40¤, Due: 3 days (redemption likely)</Line>
            </InsetBox>
            <InsetBox title="HIGH-VALUE ITEMS (In Stock):">
              <Line cyan>Vintage guitar: 200¤ (floor display)</Line>
              <Line cyan>Cyberware components: 150¤ (back room)</Line>
              <Line cyan>Antique watch collection: 180¤ (display case)</Line>
            </InsetBox>
            <InsetBox title="BACK ROOM INVENTORY:">
              <Line yellow>Unsorted electronics (awaiting testing)</Line>
              <Line yellow>Confiscated items (failed loan redemptions)</Line>
              <Line yellow>Lucky's personal collection (not for sale)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  "Sanchez Electronics & Repair": {
    favicon: <Icons.Science />,
    content: (
      <PublicPortal
        name="SANCHEZ ELECTRONICS & REPAIR"
        tagline="Interdimensional Selection. Dimensional Prices."
        network="SANCHEZ_SHOP_GUEST"
        signalStrength="strong"
        status="OPEN"
        statusColor="neon"
        nowPlaying="Interdimensional Cable (signal unstable)"
        notes={[
          "All sales final (seriously, don't even try)",
          "Repairs: 3-5 day turnaround (maybe longer)",
          "Management not responsible for existential side effects",
        ]}
        theme="friendly"
      >
        <HoursBanner
          name="Schedule"
          hours="Mon-Sat: 11:00-23:00 | Sun: 12:00-20:00"
          days="7 Days a Week"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Personnel File": {
        favicon: <Icons.Person />,
        content: (
          <PersonnelFile
            employeeId="SHOP-ELEC-001"
            name="R. Sanchez"
            age={67}
            position="Owner / Electronics Technician"
            department="Independent Electronics Repair"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Market District (unknown residence)"
            emergencyContact="Morty Smith (grandson)"
            performance={94}
            notes={[
              "Genius-level intellect, specializes in unusual electronics",
              "Often smells like alcohol, burps frequently",
              "Refuses to explain modifications or special inventory",
              "Reputation: Brilliant but erratic — customers nervous but loyal",
              "Known for: 'infinite channels' cable boxes, mysterious back room",
            ]}
          />
        ),
      },

      "Shop Inventory": {
        favicon: <Icons.Inventory />,
        content: (
          <MaintenanceAccess
            title="[INVENTORY DATABASE]"
            deviceModel="Shop Inventory System"
            deviceId="INV-SANCHEZ-01"
            firmwareVersion="v1.3.7"
            systemStatus="OPERATIONAL"
            notes={[
              "Last updated: 2 hours ago",
              "Back room inventory not tracked here",
              "Repair queue: 3 items waiting",
            ]}
          >
            <InsetBox title="STANDARD STOCK:">
              <Line neon>Smart TVs: 8 units (refurbished, various brands)</Line>
              <Line neon>Tablets: 15 units (mixed condition)</Line>
              <Line neon>Phones: 22 units (unlocked, some carrier-locked)</Line>
              <Line neon>Cables & adapters: High stock (universal compatibility)</Line>
            </InsetBox>
            <InsetBox title="BACK ROOM (Special Items):">
              <Line cyan>Weird cable boxes: 3 units (claim to receive "infinite channels")</Line>
              <Line cyan>Portal device: 1 unit (parts only — do not activate)</Line>
              <Line cyan>Strange blue boxes: 4 units (unknown purpose, owner won't sell)</Line>
              <Line yellow>Green vials: Unknown quantity (locked cabinet)</Line>
            </InsetBox>
            <InsetBox title="REPAIR QUEUE:">
              <Line smoke>Smart fridge — firmware issue (waiting for parts)</Line>
              <Line smoke>Game console — overheating (in progress)</Line>
              <Line smoke>Cyberdeck — unknown fault (customer waiting, frustrated)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Demo Console": {
        favicon: <Icons.VideoGame />,
        content: (
          <ArcadeCabinet
            id="demo-sanchez-console"
            name="CYSTATION PRO"
            location="Display near front counter"
            screenState="DEMO MODE"
            lastPlayed="Yesterday"
            user="R_SANCHEZ"
            credits={0}
            gamesAvailable={[
              "LIFE SIMULATOR VR",
              "COSMIC HORROR ADVENTURE",
              "DIMENSION JUMPER",
              "CABLE SURFING SIMULATOR",
              "POCKET CREATURES",
            ]}
          >
            <InsetBox title="HIGH SCORES:">
              <Line yellow>Life Simulator VR: R_Sanchez — 55 years (off the grid ending)</Line>
              <Line yellow>Dimension Jumper: Morty — 2.4M points (second place)</Line>
              <Line yellow>Pocket Creatures: BirdPrsn — All 151 captured</Line>
            </InsetBox>
            <Line smoke small>Modified hardware. Don't ask about the modifications.</Line>
          </ArcadeCabinet>
        ),
      },

      "Back Room Safe": {
        favicon: <Icons.Lock />,
        content: (
          <Safe
            id="sanchez-backroom-safe"
            model="???"
            location="Back room — behind shelving unit"
            owner="R. Sanchez"
            security="Unknown technology (not standard)"
            lastAccess="Unknown (no logs)"
            physical={[
              {
                id: "sanchez_cash",
                label: "Cash",
                description: "Unknown amount (safe makes weird noises)",
              },
              {
                id: "sanchez_documents",
                label: "Documents",
                description: "Patents? Blueprints? Language unrecognizable.",
              },
              {
                id: "sanchez_vials",
                label: "Vials",
                description: "Green liquid — do not consume",
              },
              {
                id: "sanchez_components",
                label: "Device components",
                description: "Unknown purpose",
              },
            ]}
            digital={[
              {
                id: "sanchez_credchip",
                label: "Credchip",
                description: "28¤",
                value: 28,
                isCredits: true,
              },
              {
                id: "sanchez_cable_app",
                label: "App",
                description: "Inter-D Cable Guide (non-functional)",
              },
              {
                id: "sanchez_encrypted_file",
                label: "Encrypted file",
                description: "boogeraids_aidsbooger.enc",
              },
            ]}
            notes="⚠ Safe appears to phase in and out of visibility occasionally"
          />
        ),
      },

    },
  },

  "Gilded Oddities Pawn": {
    favicon: <Icons.PawnGold />,
    content: (
      <PublicPortal
        name="GILDED ODDITIES PAWN"
        tagline="Treasures. Trash. Tales."
        network="PAWN_SHOP_PUBLIC"
        signalStrength="medium"
        status="OPEN"
        statusColor="neon"
        notes={[
          "Free appraisals (first 3 items)",
          "Golden statue NOT for sale",
          "Don't... touch... that... byook",
        ]}
        theme="friendly"
      >
        <HoursBanner
          name="Schedule"
          hours="09:00 - 19:00"
          days="Monday - Saturday (Closed Sunday)"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Personnel File": {
        favicon: <Icons.Person />,
        content: (
          <PersonnelFile
            employeeId="PAWN-OWNER-008"
            name="Lee Gal Bizznizz"
            age={42}
            position="Owner / Pawnbroker"
            department="Independent Retail"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Near waterfront (unknown residence)"
            emergencyContact="Staniel"
            status="ACTIVE"
          />
        ),
      },

      "Shop Safe": {
        favicon: <Icons.Lock />,
        password: {
          pw: "listerine",
          hint: "It's a booze cause it's green",
          content: <Locked theme="safe" title="SHOP SAFE" />
        },
        content: (
          <Safe
            id="pawn-counter-safe"
            model="DS-350"
            location="Behind counter, floor-mounted"
            owner="Roger Smith (this week's name)"
            security="Combination + voice recognition"
            lastAccess="This morning (opening)"
            physical={[
              {
                id: "pawn_cash",
                label: "Cash",
                description: "daily receipts + emergency fund",
                value: 100,
                isCredits: true
              },
              {
                id: "pawn_jewelry",
                label: "High-value jewelry",
                description: "Wedding rings (3), gold chains (2)",
                value: 100,
              },
              {
                id: "pawn_disguises",
                label: "Personal items",
                description: "Collection of disguises (wigs, glasses, prosthetics)",
              },
            ]}
            digital={[
              {
                id: "pawn_credchip",
                label: "Credchip",
                value: 25,
                isCredits: true
              },
            ]}
          />
        ),
      },

      "Pawn Records": {
        favicon: <Icons.File />,
        password: {
          pw: "deathdogs",
          hint: "They have an absurd amount of nitrates",
          content: <Locked theme="terminal" title="PAWN RECORDS" />
        },
        content: (
          <MaintenanceAccess
            title="[PAWN RECORDS]"
            deviceModel="Pawn Shop Management System"
            deviceId="PAWN-ODDITIES-01"
            firmwareVersion="v2.1.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Active loans & recent transactions",
              "Last 7 days of pawn activity",
              "High-value inventory tracked",
            ]}
          >
            <InsetBox title="RECENT PAWNS (Last 7 days):">
              <Line neon>Item: Electric guitar, Loan: 75¤, Due: 28 days</Line>
              <Line neon>Item: Smartwatch, Loan: 50¤, Due: 24 days</Line>
              <Line neon>Item: Antique camera, Loan: 60¤, Due: 19 days</Line>
              <Line yellow>Item: Wedding dress, Loan: 40¤, Due: 45 days (extended term)</Line>
            </InsetBox>
            <InsetBox title="HIGH-VALUE INVENTORY:">
              <Line cyan>Vintage sword collection: 420¤ (display case)</Line>
              <Line cyan>Refurbished cyberware: 280¤ (various components)</Line>
              <Line cyan>Antique music box: 180¤ (plays haunting melody)</Line>
            </InsetBox>
            <InsetBox title="BACK ROOM (Not For Sale):">
              <Line pink>Golden statue (shop mascot, mysterious origins)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  "Cipher Solutions": {
    favicon: <Icons.Cipher />,
    content: (
      <PublicPortal
        name="CIPHER SOLUTIONS"
        tagline="Data Recovery. System Security. Discretion Guaranteed."
        network="CIPHER_GUEST"
        signalStrength="strong"
        status="ACCEPTING CLIENTS"
        statusColor="neon"
        notes={[
          "Appointments only",
          "Confidentiality guaranteed",
          "No corporate contracts (independents only)"
        ]}
        theme="friendly"
      >
        <HoursBanner
          name="Schedule"
          hours="10:00 - 18:00"
          days="Monday - Friday (Appointments Only)"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Personnel File": {
        favicon: <Icons.Person />,
        content: (
          <PersonnelFile
            employeeId="TECH-CIPHER-001"
            name="Cipher"
            age={36}
            position="Owner / Security Consultant"
            department="Independent Data Forensics"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Office building, 3rd floor (unknown residence)"
            emergencyContact="None provided"
            performance={96}
            notes={[
              "Real name unknown - operates under pseudonym 'Cipher'",
              "Expert: Data recovery, digital forensics, network security",
              "Reputation: Brilliant but secretive, absolutely trustworthy",
              "Refuses corporate clients - independents only",
              "Known for: Military-grade encryption, quantum-secured safe",
              "Motto: 'Your secrets are safe. From everyone except me.'"
            ]}
          />
        ),
      },

      "Office Workstation": {
        favicon: <Icons.Computer />,
        password: {
          pw: "encryption",
          hint: "What Cipher specializes in for security",
          content: <Locked theme="terminal" title="WORKSTATION ACCESS" />
        },
        content: (
          <Workstation
            owner="Cipher"
            role="Security Consultant / Data Forensics"
            status="IDLE"
            lastActivity="4 hours ago"
            openTabs={[
              { title: 'Client 447 - Recovery Progress', type: 'work' },
              { title: 'Network Analysis - SmallBiz 082', type: 'work' },
              { title: 'Forensic Imaging Software', type: 'work' },
              { title: '[ENCRYPTED PROJECT]', type: 'work' },
            ]}
            recentFiles={[
              { name: 'Client_447_Recovery.log', timestamp: '2 days ago' },
              { name: 'NetworkMap_SmallBiz_082.png', timestamp: 'Yesterday' },
              { name: 'Invoice_Template.docx', timestamp: 'This morning' },
              { name: 'Personal_Notes_Encrypted.txt', timestamp: 'Unknown' },
            ]}
            emails={8}
            productivity={94}
          />
        ),
      },

      "Office Safe": {
        favicon: <Icons.Lock />,
        password: {
          pw: "decryption",
          hint: "Opposite of encryption",
          content: <Locked theme="safe" title="OFFICE SAFE" />
        },
        content: (
          <Safe
            id="cipher-office-safe"
            model="DS-500X"
            owner="Cipher (proprietor)"
            security="Biometric + quantum encryption"
            lastAccess="Yesterday evening"
            physical={[
              {
                id: "cipher_cash",
                label: "Cash",
                description: "client payments, emergency fund",
                value: 400,
                isCredits: true
              },
            ]}
            digital={[
              {
                id: "cipher_business_credchip",
                label: "Credchip",
                description: "business account",
                value: 95,
                isCredits: true
              },
            ]}
            notes="Safe features quantum encryption - extremely difficult to crack"
          />
        ),
      },
    },
  },

  "The Compiler Bar": {
    favicon: <Icons.Tech />,
    content: (
      <PublicPortal
        name="THE COMPILER BAR"
        tagline="Where Code Meets Culture."
        network="COMPILER_GUEST_WIFI"
        signalStrength="strong"
        status="OPEN"
        statusColor="neon"
        nowPlaying="Recursion Blues - The Stack Overflow"
        notes={[
          "Free wifi (gigabit fiber)",
          "Weekly coding meetups (Thursdays, 19:00)",
          "Whiteboard wall for collaborative problem-solving"
        ]}
        theme="casual"
      >
        <HoursBanner
          name="Schedule"
          hours="14:00 - 02:00"
          days="Every Day"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Bar Menu": {
        favicon: <Icons.BarMenu />,
        content: (
          <Menu
            title="THE COMPILER BAR"
            subtitle="Tech District's Favorite Watering Hole"
            signType="cocktail"
            categories={[
              {
                name: "DRINKS",
                items: [
                  { name: "Beer (craft local)", price: "10¤" },
                  { name: "Coffee (actually good)", price: "6¤" },
                  { name: "Whiskey (imported)", price: "15¤" },
                  { name: "Energy Drink", price: "7¤" },
                  { name: "The Infinite Loop", price: "12¤ (house special)" },
                ],
              },
              {
                name: "FOOD",
                items: [
                  { name: "Code-fuel nachos", price: "12¤" },
                  { name: "Syntax error sandwich", price: "14¤" },
                  { name: "Debugging pizza (personal)", price: "16¤" },
                  { name: "Stack overflow fries", price: "8¤" },
                ],
              },
            ]}
            footer="// TODO: Get another drink"
          />
        ),
      },

      "Personnel File": {
        favicon: <Icons.Person />,
        content: (
          <PersonnelFile
            employeeId="BAR-COMPILER-001"
            name="Morgan Patel"
            age={39}
            position="Owner / Bartender"
            department="Independent Hospitality"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Tech district (lives in apartment above bar)"
            emergencyContact="Dev Patel (sibling)"
            performance={100}
            notes={[
              "Former software engineer - left tech to open bar",
              "Knows programming, creates themed drinks and menu items",
              "Hosts weekly coding meetups (popular with local devs)",
              "Reputation: Friendly, tech-savvy, understands the crowd",
            ]}
          />
        ),
      },

      "Bar Jukebox": {
        favicon: <Icons.Radio />,
        content: (
          <Jukebox
            model="JB-808"
            location="Near pool table, corner booth area"
            cost="2¤"
            songs={[
              { title: "Recursion Blues", artist: "The Stack Overflow", genre: "Synthwave-rock fusion", color: 'cyan' },
              { title: "Infinite Loop", artist: "Compiled Dreams", genre: "Electronic", color: 'purple' },
              { title: "Garbage Collection", artist: "Memory Leaks", genre: "Industrial", color: 'green' },
              { title: "404 Not Found", artist: "Error State", genre: "Glitch-hop", color: 'red' },
              { title: "Binary Sunset", artist: "Digital Horizons", genre: "Ambient synthwave", color: 'orange' },
            ]}
          />
        ),
      },

      "Bar Safe": {
        favicon: <Icons.Lock />,
        password: {
          pw: "algorithm",
          hint: "What programmers write to solve problems",
          content: <Locked theme="safe" title="BAR SAFE" />
        },
        content: (
          <Safe
            id="compiler-bar-safe"
            model="DS-300"
            owner="Morgan Patel (bar owner)"
            security="Electronic keypad"
            lastAccess="6 hours ago (shift change)"
            physical={[
              {
                id: "compiler_cash",
                label: "Cash",
                description: "daily receipts",
                value: 340,
                isCredits: true
              },
              {
                id: "compiler_documents",
                label: "Documents",
                description: "Liquor license, business permits"
              },
              {
                id: "compiler_personal_credchip",
                label: "Personal credchip",
                description: "Unknown amount (owner's personal funds)"
              },
            ]}
            digital={[
              {
                id: "compiler_petty_cash",
                label: "Credchip",
                description: "bar petty cash",
                value: 32,
                isCredits: true
              },
            ]}
          />
        ),
      },

      "Internal Systems": {
        favicon: <Icons.LAN />,
        password: {
          pw: "debug",
          hint: "What programmers do when code doesn't work",
          content: <Locked theme="terminal" title="BAR SYSTEMS" />
        },
        content: (
          <MaintenanceAccess
            title="[BAR INTERNAL SYSTEMS]"
            deviceModel="POS & Inventory System"
            deviceId="BAR-COMPILER-01"
            firmwareVersion="v4.2.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Today's transactions: 67",
              "Revenue: 823¤ (above average for weekday)",
              "Occupancy: 24 customers (moderate)",
              "Most ordered: Coffee, Beer, Energy drinks"
            ]}
          >
            <InsetBox title="INVENTORY ALERTS:">
              <Line yellow>Low stock: Imported whiskey, craft beer (IPA)</Line>
              <Line yellow>Reorder needed: Coffee beans, energy drinks</Line>
              <Line red>Out of stock: The Infinite Loop ingredients (signature drink)</Line>
            </InsetBox>
            <InsetBox title="UPCOMING EVENTS:">
              <Line cyan>Tomorrow: Coding meetup (expected 15-20 attendees)</Line>
              <Line cyan>This weekend: Live music - "The Exception Handlers"</Line>
              <Line cyan>Next week: Startup pitch night (reserved area)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  "Royal West Shipping Warehouse": {
    favicon: <Icons.Shipping />,
    password: {
      pw: 'royalwestisthebest',
      decoyLetters: "z,p,u,x",
    },
    content: (
      <FacilityPortal
        companyName="ROYAL WEST SHIPPING CO."
        facilityId="PRIMARY PORTS FACILITY"
        tagline="The Largest. The Best Guarded. The Untouchable."
        location="Ports Industrial District - Waterfront"
        owner="Royal West Shipping Co."
        function="Import/Export Hub & Secure Storage"
        personnel="120+ security personnel, 80+ warehouse staff"
        networkStatus="CORPORATE PRIVATE NETWORK (Externally inaccessible)"
        securityLevel="MAXIMUM"
        warnings={[
          "EXTREME SECURITY - Armed guards patrol 24/7",
          "Drone surveillance active across entire perimeter",
          "Lethal force authorized for trespassers",
          "No external network access - air-gapped systems",
          "Nobody challenges Royal West - Nobody."
        ]}
        theme="secure"
      >
        <InsetBox title="FACILITY OVERVIEW:">
          <Line red bold>STATUS: IMPENETRABLE</Line>
          <Line cyan>• Size: 4 city blocks (largest in Ports)</Line>
          <Line cyan>• Security: Military-grade systems</Line>
          <Line cyan>• Warehouses: 12 buildings (each heavily fortified)</Line>
          <Line cyan>• Docks: 8 deep-water berths (24/7 operations)</Line>
          <Line cyan>• Staff: 200+ employees (all background-checked)</Line>
        </InsetBox>
        <InsetBox title="SECURITY MEASURES:">
          <Line red>✗ Perimeter wall: 6 meters, reinforced concrete</Line>
          <Line red>✗ Guard towers: 8 positions (manned 24/7)</Line>
          <Line red>✗ Patrol teams: 20+ guards on rotation</Line>
          <Line red>✗ Drones: Autonomous surveillance grid</Line>
          <Line red>✗ Cameras: 200+ units (no blind spots)</Line>
          <Line red>✗ Access control: Biometric + retinal scan</Line>
          <Line red>✗ Response time: ~30 seconds to any breach</Line>
          <Line red>✗ Backup: Private military contractors on standby</Line>
        </InsetBox>
        <InsetBox title="REPUTATION:">
          <Line neon bold>"Nobody dares challenge them."</Line>
          <Line yellow>• Last attempted theft: 6 years ago (3 dead, 2 imprisoned)</Line>
          <Line yellow>• Gang respect: All factions avoid this facility</Line>
          <Line yellow>• SecCorps deference: Even UCS stays clear</Line>
          <Line yellow>• Employee loyalty: Highest pay in district</Line>
        </InsetBox>
        <Line smoke small>
          Royal West Shipping has the largest and most well-guarded warehouses in Ports.
          Their security budget exceeds most gang's entire operations. Smart people don't
          even look at this place too long.
        </Line>
      </FacilityPortal>
    ),
  },
};

export default BUSINESS_COMMANDS;
