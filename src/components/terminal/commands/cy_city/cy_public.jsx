import Icons from '@utils/icons';

import {
  Line,
  Warning,
  KeyValue,
  InsetBox,
} from '@terminal/TerminalComponents';

import {
  CorpAd,
  EventFeed,
  CyWeather,
  CySports,
  Message,
  RetComImage
} from "@terminal/retcomdevice"

import CyCityPublicAccessBanner from '@terminal/retcomdevice/Portals/CyCityPublicPortals';
import CyCityCorporatePortalsBanner from '@terminal/retcomdevice/Portals/CyCityCorpPortals';

import CY_CITY_MAP from '@images/cycity_overview.png';

export const CY_CITY_NETWORK = {
  "Cy City Map": {
    favicon: <Icons.Map />,
    content: (
      <RetComImage
        src={CY_CITY_MAP}
        theme="red"
      />
    ),
  },

  "Cy City News Network": {
    favicon: <Icons.News />,
    content: (
      <EventFeed />
    ),
  },

  "CyWeather": {
    favicon: <Icons.Cloud />,
    content: (
      <CyWeather />
    ),
  },

  "CySports Network": {
    favicon: <Icons.Rugby />,
    content: (
      <CySports />
    ),
  },

  "Public Utilities": {
    favicon: <Icons.Bulletin />,
    content: (
      <CyCityPublicAccessBanner />
    ),
    related_commands: {
      "Cy Traffic (Real-Time)": {
        favicon: <Icons.Traffic />,
        content: (
          <Message
            title="CY TRAFFIC"
            subtitle="ACGS CHARIOT AI"
            message="Live route updates — plan your route, save your life"
            theme="corporate"
          >
            <InsetBox title="MAJOR ROUTES:">
              <Line red>Central Bridge (North-South): GRIDLOCK</Line>
              <Line neon>Accident scene — 3 fatalities, SecOps on site</Line>
              <Line neon>Estimated clearance: 2-3 hours</Line>
              <Line yellow>Ports Canal Route: DELAYED</Line>
              <Line neon>Fatberg collision near Dock 12</Line>
              <Line neon>Water taxi diversions in effect</Line>
              <Line cyan>Metro Lines: 75% OPERATIONAL</Line>
              <Line neon>Central-5 closed for maintenance</Line>
              <Line neon>Slums-3 suspended (security concerns)</Line>
            </InsetBox>
            <InsetBox title="DISTRICT ADVISORIES:">
              <Line red>⚠ AVOID: Bigmosse (gang activity reported)</Line>
              <Line yellow>⚠ CAUTION: South Central (heavy SecOps presence)</Line>
              <Line yellow>⚠ CAUTION: Mosscroft West (chemical leak, respirators required)</Line>
            </InsetBox>
            <Line pink small>"Plan your route. Save your life. Trust ACGS."</Line>
          </Message>
        ),
      },

      "Cy Entertainment Guide": {
        favicon: <Icons.Entertainment />,
        content: (
          <Message
            title="CY ENTERTAINMENT"
            subtitle="DIRECTORY"
            message="What's hot in the city tonight"
            theme="casual"
          >
            <InsetBox title="TRENDING VENUES:">
              <Line pink>HELLSCAPE (Ports) — Industrial nightclub, VIP available</Line>
              <Line pink>The Neon Pillar (Central) — Corporate lounge & temple</Line>
              <Line pink>Idol Coffins Hotels (Various) — Rock-star themed pop-ups</Line>
              <Line pink>The Salmon Door (Ports) — Ultra-exclusive restaurant [RUMORED]</Line>
            </InsetBox>
            <InsetBox title="LIVE MUSIC TONIGHT:">
              <Line neon>PHASER/MOB @ Underground Venue TBA</Line>
              <Line neon>HeCcc @ The Pit (Ports district)</Line>
              <Line neon>I must leave @ Secret location (password required)</Line>
            </InsetBox>
            <InsetBox title="CURRENT TRENDS:">
              <Line cyan>Mycobiotic cuisine (Burnchurch Hex pop-ups)</Line>
              <Line cyan>Cyberbike racing (illegal street events)</Line>
              <Line cyan>G0 artifacts (black market collectibles)</Line>
              <Line cyan>Mind-upload parties (Fideistic Transformation sponsored)</Line>
            </InsetBox>
            <Line yellow small>"Paid placements available. Contact Tulles&deVerte."</Line>
          </Message>
        ),
      },

      "Cy Survival Tips": {
        favicon: <Icons.Tips />,
        content: (
          <Message
            title="CY SURVIVAL GUIDE"
            subtitle="UNOFFICIAL"
            message="User-contributed wisdom from the streets"
            theme="casual"
          >
            <InsetBox title="ESSENTIAL TIPS:">
              <Line neon>1. Never drink canal water (not even filtered)</Line>
              <Line neon>2. SecOps response time: 4-12 minutes (if they bother)</Line>
              <Line neon>3. Respirator mandatory in Mosscroft (your lungs will thank you)</Line>
              <Line neon>4. Don't make eye contact in the Slums (unless you want trouble)</Line>
              <Line neon>5. G0 radiation kills in 20 minutes (don't test this)</Line>
              <Line neon>6. Street food is 60% safe (better odds than corporate meals)</Line>
              <Line neon>7. If you see Nanophreaks, RUN</Line>
              <Line neon>8. The Stone Eels are surprisingly reasonable (comparatively)</Line>
              <Line neon>9. Never trust anyone from the Hills (they're not like you)</Line>
              <Line neon>10. The city wants you dead. Prove it wrong.</Line>
            </InsetBox>
            <Line pink small>"Stay smart. Stay alive. Stay cynical."</Line>
          </Message>
        ),
      },

      "Cy Dating Network": {
        favicon: <Icons.Heart />,
        content: (
          <Message
            title="CY-MATCH"
            subtitle="SOCIAL NETWORK"
            message="Find Connection in the Disconnected City"
            note="Platform disclaimer: 78% of profiles may be bots, scams, or law enforcement"
            theme="casual"
          >
            <InsetBox title="NEARBY PROFILES:">
              <Line pink>"CHROME_QUEEN_23" — 2km away</Line>
              <Line neon>"Looking for someone who isn't a corpo rat"</Line>
              <Line pink>"DEFINITELY_HUMAN" — 0.5km away</Line>
              <Line neon>"I promise I'm not a SecOps honey trap (really)"</Line>
              <Line pink>"NEON_DREAMS_CY" — 4km away</Line>
              <Line neon>"Swipe right if you have a working cyberdeck ;)"</Line>
              <Line pink>"JUST_SURVIVING" — 1.2km away</Line>
              <Line neon>"Not looking for love, just someone to split rent"</Line>
            </InsetBox>
            <Line cyan small>"Love in the time of corporate dystopia. Good luck."</Line>
          </Message>
        ),
      },

      "Cy Food Delivery App": {
        favicon: <Icons.Food />,
        content: (
          <Message
            title="CY-EATS"
            subtitle="DELIVERY SERVICE"
            message="Hot food. Cold city. Fast delivery (eventually)."
            theme="casual"
          >
            <InsetBox title="TRENDING RESTAURANTS:">
              <Line neon>Body's Pho — Synthetic Beef Noodle Soup</Line>
              <Line cyan>35¤ | Rating: 4.2/5 | Delivery: 45-90min</Line>
              <Line neon>Mosscroft Grill — "Mystery Meat" Skewers</Line>
              <Line cyan>22¤ | Rating: 3.8/5 | Delivery: 30-60min</Line>
              <Line neon>AST Fresh — Biomatter Protein Bowl</Line>
              <Line cyan>18¤ | Rating: 4.0/5 | Delivery: 20-40min</Line>
              <Line neon>Fungi Garden — Mycobiotic Burger</Line>
              <Line cyan>28¤ | Rating: 4.5/5 | Delivery: 60-120min</Line>
            </InsetBox>
            <InsetBox title="DELIVERY STATUS:">
              <Line yellow>Current wait times: 2-4 hours (high demand)</Line>
              <Line red>⚠ Drone delivery suspended in Slums districts (too many shootdowns)</Line>
              <Line yellow>⚠ Water taxi couriers experiencing fatberg delays</Line>
            </InsetBox>
            <Line pink small>"Hungry? We'll get there. Probably."</Line>
          </Message>
        ),
      },

      "Cy Horoscope Network": {
        favicon: <Icons.Stars />,
        content: (
          <Message
            title="NET ORACLE"
            subtitle="DAILY HOROSCOPE"
            message="Cosmic guidance for the cybernetic age"
            note="Brought to you by Fideistic Transformation — Upload your destiny!"
            theme="casual"
          >
            <InsetBox title="TODAY'S READING (ALL SIGNS):">
              <Line pink>The stars align in a pattern of corporate oppression.</Line>
              <Line pink>Your lucky number is: [REDACTED FOR PROFIT]</Line>
              <Line pink>Avoid: SecOps, gang territory, G0, the rich, the poor, everyone.</Line>
              <Line pink>Lucky color: The color of blood on chrome</Line>
              <Line neon>Romance: You will meet someone. They will betray you.</Line>
              <Line neon>Career: Your boss doesn't know you exist. This is good.</Line>
              <Line neon>Health: The smog will outlast you. Accept it.</Line>
              <Line neon>Wealth: Money is fleeting. Debt is eternal.</Line>
              <Line pink>Overall: The city wants you dead. Don't give it satisfaction.</Line>
            </InsetBox>
          </Message>
        ),
      },

      "Cy Urban Legends Archive": {
        favicon: <Icons.Files />,
        content: (
          <Message
            title="CY URBAN LEGENDS"
            subtitle="DATABASE"
            message="Separating fact from fiction (probably)"
            note="78% of legends have some basis in documented events"
            theme="casual"
          >
            <InsetBox title="MOST SEARCHED LEGENDS:">
              <Line pink>The Salmon Door — Ultra-exclusive Ports restaurant</Line>
              <Line neon>Guards in brown tailcoats, salmon-painted door</Line>
              <Line neon>Allegedly so exclusive even the Guide can't get a table</Line>
              <Line pink>My Wall — Underground killclub/music venue</Line>
              <Line neon>Entrance allegedly through door on G0 containment wall</Line>
              <Line neon>Rumored meeting place for Terpischore Sisters</Line>
              <Line pink>The Terpischore Sisters — Secret society</Line>
              <Line neon>Base allegedly beneath Old Cy, accessible via My Wall</Line>
              <Line neon>Purpose unknown, members unknown</Line>
              <Line pink>The Night Sound — What screams in G0</Line>
              <Line neon>Heard nightly from within quarantine zone</Line>
              <Line neon>Neither human nor machine</Line>
              <Line pink>Basilisk Entities — Deep Net manifestations</Line>
              <Line neon>AI? Gods? Demons? Aliens?</Line>
              <Line neon>Hacker collectives whisper of encounters</Line>
            </InsetBox>
            <Line cyan small>"Believe what you want. The city doesn't care."</Line>
          </Message>
        ),
      },

      "Cy Public Services": {
        favicon: <Icons.Bulletin />,
        content: (
          <Message
            title="CY PUBLIC SERVICES"
            subtitle="CITIZEN PORTAL"
            message="Citizen resources and emergency information"
            note="Your safety is our priority. (Terms and conditions apply.)"
            theme="corporate"
          >
            <InsetBox title="EMERGENCY CONTACTS:">
              <Line neon>SecOps (Emergency): 911</Line>
              <Line neon>Fire Response: 912</Line>
              <Line neon>Medical Emergency: 913</Line>
              <Line neon>Infrastructure Failure: 914</Line>
              <Line yellow>Average response time: 8-45 minutes (varies by district)</Line>
            </InsetBox>
            <InsetBox title="TRANSIT INFORMATION:">
              <Line neon>Metro: 75% operational (see route map for closures)</Line>
              <Line neon>Water taxis: Available 24/7 at all major docks</Line>
              <Line neon>Automated vehicles: ACGS Chariot network active</Line>
              <Line red>Air transit: Restricted to licensed commercial operations</Line>
            </InsetBox>
            <InsetBox title="HEALTH ADVISORIES:">
              <Line yellow>Laketon: Water boil advisory (nanomold contamination)</Line>
              <Line yellow>Mosscroft West: Chemical leak — respirators required</Line>
              <Line yellow>Barnyard Fields: Avoid area (cult activity)</Line>
              <Line red>G0: QUARANTINE ZONE — Entry prohibited without authorization</Line>
            </InsetBox>
          </Message>
        ),
      },

      "Cy Job Board": {
        favicon: <Icons.Bulletin />,
        content: (
          <Message
            title="CY EMPLOYMENT NETWORK"
            subtitle="JOB BOARD"
            message="Your Future. Their Profit."
            note="All positions subject to background checks and corporate loyalty agreements"
            theme="corporate"
          >
            <InsetBox title="FEATURED OPPORTUNITIES:">
              <Line pink>FACTORY WORKER — Kaytell Makers (Mosscroft)</Line>
              <Line neon>Pay: 800¤/month + company housing | Shifts: 12-hour rotations</Line>
              <Line yellow>Benefits: Medical (on-site only), meal vouchers</Line>
              <Line red>Injury rate: 14% (within acceptable limits)</Line>
              <Line pink>WAREHOUSE OPERATOR — Royal West (Multiple locations)</Line>
              <Line neon>Pay: 750¤/month + overtime | Requirements: Basic literacy, 25kg lift</Line>
              <Line yellow>Benefits: Medical, employee discounts</Line>
              <Line red>All operations monitored by NordShip AI</Line>
              <Line pink>SECOPS TRAINEE — UCS Academy (Central)</Line>
              <Line neon>Pay: 1,200¤/month during training | Requirements: Physical fitness</Line>
              <Line yellow>Benefits: Full corpo package after graduation</Line>
              <Line red>6-month contract, combat deployment likely</Line>
              <Line pink>DATA ENTRY CLERK — ACGS Industries</Line>
              <Line neon>Pay: 650¤/month | Requirements: 60 WPM, basic AI interface skills</Line>
              <Line red>No benefits. Remote work not available.</Line>
            </InsetBox>
            <InsetBox title="GIG ECONOMY:">
              <Line cyan>Drone delivery pilot: 8¤/delivery (bring your own drone)</Line>
              <Line cyan>Water taxi operator: 12¤/hour (license required)</Line>
              <Line cyan>Street vendor permit: 200¤/month (location lottery)</Line>
              <Line cyan>Courier (foot): 5¤/delivery (Ports/Slums only)</Line>
            </InsetBox>
            <InsetBox title="EXECUTIVE POSITIONS:">
              <Line yellow>Senior AI Ethics Consultant — ACGS</Line>
              <Line neon>Pay: Competitive (disclosed upon interview) | 5-year NDA mandatory</Line>
              <Line yellow>Security Director — Alliansen Inc.</Line>
              <Line neon>Pay: 15,000¤/month + bonuses | Military/SecOps experience required</Line>
              <Line yellow>Regional Manager — AST Endless Seas</Line>
              <Line neon>Pay: 12,000¤/month + housing | 10+ years food service management</Line>
            </InsetBox>
            <Line pink small>"Work hard. Die young. Leave a profitable corpse."</Line>
          </Message>
        ),
      },

      "Cy Housing Market": {
        favicon: <Icons.House />,
        content: (
          <Message
            title="CY REAL ESTATE"
            subtitle="LISTINGS"
            message="Affordable is a relative term."
            note="All prices subject to market adjustment fees. First/last/security deposit standard (3 months upfront)."
            theme="corporate"
          >
            <InsetBox title="RENTALS — CENTRAL DISTRICT:">
              <Line pink>Luxury 2BR Apartment (South Central) — 8,500¤/month</Line>
              <Line neon>120m², filtered air, SecOps patrol, parking | Utilities: +600¤</Line>
              <Line red>Available next month (current tenant being evicted)</Line>
              <Line pink>Studio Apartment (North Central) — 3,200¤/month</Line>
              <Line neon>35m², shared bathroom, filtered water | Utilities: Included (basic)</Line>
              <Line red>Building has "minor" mold issues</Line>
            </InsetBox>
            <InsetBox title="RENTALS — PORTS DISTRICT:">
              <Line pink>1BR Apartment (East Ports) — 900¤/month</Line>
              <Line neon>45m², canal view | Security: Minimal (Stone Eels territory)</Line>
              <Line red>Noise from nearby clubs 20:00-06:00</Line>
              <Line pink>Shared Housing (West Ports) — 300¤/month per person</Line>
              <Line neon>4-person unit, shared kitchen/bathroom | Current occupants: 2 factory workers</Line>
            </InsetBox>
            <InsetBox title="RENTALS — SLUMS DISTRICTS:">
              <Line pink>Coffin Apartment (Laketon) — 180¤/month</Line>
              <Line neon>2m × 1m × 1m sleeping pod, shared facilities | Security: None</Line>
              <Line red>Water currently under boil advisory</Line>
              <Line pink>Converted Shipping Container (Various) — 250¤/month</Line>
              <Line neon>6m × 2.5m, basic electrical | Legal status: Not residential zoning</Line>
            </InsetBox>
            <InsetBox title="FOR SALE:">
              <Line yellow>Luxury Penthouse (The Neon Pillar) — 15,000,000¤</Line>
              <Line neon>400m², rooftop access, corpo-level everything</Line>
              <Line yellow>Commercial Warehouse (Mosscroft) — 2,500,000¤</Line>
              <Line neon>1,200m², zoned industrial, rail access</Line>
            </InsetBox>
            <Line pink small>"Home is where your credchip works."</Line>
          </Message>
        ),
      },

      "Cy Crime Reports": {
        favicon: <Icons.Police />,
        content: (
          <Message
            title="CY CRIME STATISTICS"
            subtitle="PUBLIC DIGEST"
            message="Sanitized for public consumption"
            note="Crime reporting varies by district corporate investment"
            theme="secure"
          >
            <InsetBox title="LAST 24 HOURS — CENTRAL DISTRICT:">
              <Line neon>Reported incidents: 0</Line>
              <Line cyan>SecOps coverage: Excellent | Corporate confidence: High</Line>
            </InsetBox>
            <InsetBox title="LAST 24 HOURS — PORTS DISTRICT:">
              <Line neon>Reported incidents: 47</Line>
              <Line yellow>Gang-related: 23 (expected/acceptable)</Line>
              <Line yellow>Property crime: 18 | Assaults: 6</Line>
              <Line cyan>SecOps coverage: Minimal by design</Line>
            </InsetBox>
            <InsetBox title="LAST 24 HOURS — MOSSCROFT INDUSTRIAL:">
              <Line neon>Reported incidents: 12</Line>
              <Line yellow>Workplace accidents: 8 (within projections)</Line>
              <Line yellow>Theft: 3 | Trespassing: 1</Line>
            </InsetBox>
            <InsetBox title="LAST 24 HOURS — SLUMS DISTRICTS:">
              <Line neon>Reported incidents: [DATA INSUFFICIENT]</Line>
              <Line red>SecOps coverage: None</Line>
              <Line red>Civilian estimates: 200+ unreported</Line>
            </InsetBox>
            <InsetBox title="MAJOR INVESTIGATIONS (ACTIVE):">
              <Line yellow>Central Bridge fatalities (traffic incident)</Line>
              <Line yellow>Mosscroft chemical leak (industrial accident)</Line>
              <Line yellow>[REDACTED] (corporate matter, sealed)</Line>
            </InsetBox>
            <InsetBox title="MOST WANTED:">
              <Line red>1. "GHOST" — Cybercrime, data theft (reward: 50,000¤)</Line>
              <Line red>2. "SCALPEL" — Multiple homicides (reward: 75,000¤)</Line>
              <Line red>3. [CLASSIFIED] — Corporate espionage</Line>
            </InsetBox>
            <Line pink small>"Stay safe. Stay compliant. Stay profitable."</Line>
          </Message>
        ),
      },

      "Cy Meme Feed": {
        favicon: <Icons.Ad />,
        content: (
          <Message
            title="CY VIRAL CONTENT"
            subtitle="NETWORK"
            message="The People's Voice (Probably)"
            note="Platform moderation provided by ACGS sentiment analysis AI"
            theme="casual"
          >
            <InsetBox title="TRENDING NOW:">
              <Line neon>"TAG YOURSELF I'M THE DRONE THAT GOT SHOT DOWN"</Line>
              <Line cyan>Image: Crashed delivery drone in Slums</Line>
              <Line yellow>Engagement: 847k shares, 2.1M likes</Line>
              <Line neon>"POV: You're a Mosscroft factory worker"</Line>
              <Line cyan>Video: Guy coughing for 30 seconds straight</Line>
              <Line yellow>Engagement: 1.2M views, 450k shares</Line>
              <Line neon>Undersjön opening in Year 18 — Timeline meme</Line>
              <Line cyan>2064: "Opens in 5 years!" → 2069: "Opens in 5 years!" → 2082: "Opens in 5 years!"</Line>
              <Line yellow>Engagement: 3.4M shares | AST legal takedown pending</Line>
            </InsetBox>
            <InsetBox title="CLASSIC HITS:">
              <Line pink>• "Corpo meeting could have been an RCD"</Line>
              <Line pink>• "That's not smog, that's Cy seasoning"</Line>
              <Line pink>• "My cyberdeck vs the cyberdeck she told me not to worry about"</Line>
              <Line pink>• "When your rent is due but you already sold your kidney"</Line>
              <Line pink>• "G0 incident survivors be like: [IMAGE CORRUPTED]"</Line>
            </InsetBox>
            <InsetBox title="CONTROVERSIAL (FLAGGED):">
              <Line red>"How many corpos does it take to screw in a lightbulb?"</Line>
              <Line yellow>[Content removed — violates community guidelines]</Line>
              <Line red>"Actual photo of Fideistic Transformation upload process"</Line>
              <Line yellow>[Content removed — corporate complaint]</Line>
            </InsetBox>
            <Line yellow small>"Laugh now. Cry later. Delete before SecOps sees."</Line>
          </Message>
        ),
      },
    }
  },

  "Corporate Portals": {
    favicon: <Icons.Tower />,
    content: (
      <CyCityCorporatePortalsBanner />
    ),
    related_commands: {
      "ACGS": {
        content: (
          <CorpAd
            corp="ACGS"
            slogan="Automated Certainty"
            tagline="The future drives itself."
            products={[
              "AI-Powered Transit Solutions",
              "Smart Weapon Systems",
              "BioMed Enhancement Packages",
              "Automated Vehicle Fleet Management"
            ]}
            cta="LET THE CHARIOT DRIVE YOU"
            theme="cyber"
            logo="🤖"
          >
            <Line neon>Connecting to corporate network...</Line>
            <Line cyan>[PUBLIC ACCESS GRANTED]</Line>
            <InsetBox title="ABOUT ACGS:">
              <Line neon>Leading provider of AI solutions, weapontech, and vehicles</Line>
              <Line neon>Home to Chariot - The first "true" AI controlling Cy's transport</Line>
              <Line neon>Decentralized offices throughout Central and Industries</Line>
            </InsetBox>
            <InsetBox title="LATEST INNOVATIONS:">
              <Line cyan>→ Chariot 2.0 - Enhanced traffic prediction algorithms</Line>
              <Line cyan>→ Bio-Enhanced Combat Platforms (military exclusive)</Line>
              <Line cyan>→ Neural Insurance Protocols (predict health issues before they occur)</Line>
            </InsetBox>
            <InsetBox title="CAREER OPPORTUNITIES:">
              <Line yellow>Now hiring: AI Ethics Consultants (5-year NDA required)</Line>
              <Line yellow>Now hiring: Weapons Testing Personnel (hazard pay included)</Line>
              <Line yellow>Now hiring: Data Entry (Mosscroft facility)</Line>
            </InsetBox>
            <Line pink>"Your future, automated. Your success, inevitable."</Line>
          </CorpAd>
        ),
      },

      "Alliansen Inc.": {
        favicon: <Icons.Tower />,
        content: (
          <CorpAd
            corp="ALLIANSEN INC."
            slogan="Securing Tomorrow"
            tagline="Security. Analytics. Control."
            products={[
              "Private Security Forces",
              "Behavioral Analytics & Prediction",
              "Real Estate Development",
              "Entertainment Complexes"
            ]}
            cta="TRUST IN STRUCTURE. TRUST IN US."
            theme="corporate"
            logo="🛡️"
          >
            <Line smoke>Leasing infrastructure to 50% of Cy's SecOps divisions</Line>
            <Line red pulse>⚠ Currently in corporate conflict with UCS</Line>
            <Line neon>Welcome to Alliansen corporate network</Line>
            <Line cyan>[PUBLIC ACCESS]</Line>
            <InsetBox title="ABOUT ALLIANSEN:">
              <Line neon>Real estate, security, entertainment, behavioral analytics</Line>
              <Line neon>Leasing infrastructure to half of Cy's SecOps divisions</Line>
              <Line neon>Controls most of the Borghold prison complex</Line>
            </InsetBox>
            <InsetBox title="FEATURED PROPERTIES:">
              <Line cyan>→ Luxury apartments in South Central (starting at 50,000¤/month)</Line>
              <Line cyan>→ Commercial space in the Ports (SecOps-protected zones)</Line>
              <Line cyan>→ Entertainment venues (turnkey operations available)</Line>
            </InsetBox>
            <InsetBox title="SECURITY SERVICES:">
              <Line yellow>Premium SecOps contracts available</Line>
              <Line yellow>Behavioral analytics for workplace optimization</Line>
              <Line yellow>Surveillance infrastructure (turnkey solutions)</Line>
            </InsetBox>
            <Line red>⚠ Currently engaged in corporate conflict with UCS</Line>
            <Line pink>"Building tomorrow's Cy, one district at a time."</Line>
          </CorpAd>
        ),
      },

      "AST Endless Seas": {
        favicon: <Icons.Tower />,
        content: (
          <CorpAd
            corp="AST ENDLESS SEAS"
            slogan="From Ocean to Table"
            tagline="The future is underwater."
            products={[
              "Fish & Algae Products",
              "Restaurant Chain (15 Locations)",
              "Submarine Construction",
              "Undersjön Project Lead"
            ]}
            cta="TASTE THE FUTURE"
            theme="green"
            logo="🐟"
          >
            <Line smoke large bold>SPECIAL: AlgaeBars™ - Buy 10, get 2 free!</Line>
            <Line smoke large>Now with 30% real fish in all protein bowls</Line>
            <Line neon>Accessing AST corporate network...</Line>
            <Line cyan>[CONSUMER ACCESS]</Line>
            <InsetBox title="ABOUT AST:">
              <Line neon>Leading fish/algae products, restaurants, submarine construction</Line>
              <Line neon>Gigantic processing plant in south Mosscroft</Line>
              <Line neon>Project lead for Undersjön construction</Line>
            </InsetBox>
            <InsetBox title="POPULAR PRODUCTS:">
              <Line cyan>→ AST Fresh Protein Bowls (Now with 30% real fish!)</Line>
              <Line cyan>→ AlgaeBars™ - Nutrient-dense meal replacement</Line>
              <Line cyan>→ SynthSalmon™ - "Tastes almost like the real thing"</Line>
              <Line cyan>→ BioBrew™ - Energy drink made from ocean nutrients</Line>
            </InsetBox>
            <InsetBox title="DINING LOCATIONS:">
              <Line yellow>15 AST Fresh locations across Cy</Line>
              <Line yellow>Now delivering via drone to Central and Ports</Line>
              <Line yellow>Submarine dining experiences available (Undersjön preview)</Line>
            </InsetBox>
            <Line pink>"The future is underwater. The future is AST."</Line>
          </CorpAd>
        ),
      },

      "Cynergy Water & Power": {
        favicon: <Icons.Tower />,
        content: (
          <CorpAd
            corp="CYNERGY WATER & POWER CO."
            slogan="We Keep CY Alive"
            products={[
              "💧 WATER - Purified & Delivered",
              "⚡ POWER - Always On",
              "🏠 PROPERTY - Premium Locations",
              "🚇 TRANSIT - Fast & Reliable"
            ]}
            cta="Your City. Our Infrastructure."
            theme="dystopian"
            logo="⚡"
          >
            <Line neon>Connecting to infrastructure network...</Line>
            <Line cyan>[PUBLIC PORTAL]</Line>
            <InsetBox title="ABOUT CYNERGY:">
              <Line neon>Facilities, infrastructure, transportation, real estate</Line>
              <Line neon>Headquarters in The Floating Hive, North Central</Line>
              <Line neon>Official utility provider (mandatory service agreements)</Line>
            </InsetBox>
            <InsetBox title="SERVICE RATES (Monthly):">
              <KeyValue label="Water (basic tier)" value="120¤" />
              <KeyValue label="Water (filtered tier)" value="280¤" />
              <KeyValue label="Water (premium clean)" value="650¤" />
              <KeyValue label="Power (residential)" value="180-450¤" />
              <KeyValue label="Late Payment Fee" value="50¤ per day" />
            </InsetBox>
            <InsetBox title="CURRENT ADVISORIES:">
              <Line yellow>→ Planned outages: Slums districts (rotating schedule)</Line>
              <Line yellow>→ Water quality notice: Laketon (boil advisory active)</Line>
              <Line red>→ Power surge warning: Mosscroft industrial zones</Line>
            </InsetBox>
            <Line pink>"We keep Cy running. You keep paying."</Line>
          </CorpAd>
        ),
      },

      "Fideistic Transformation": {
        favicon: <Icons.Tower />,
        content: (
          <CorpAd
            corp="FIDEISTIC TRANSFORMATION"
            slogan="Upgrade Your Soul™"
            products={[
              "Neural Interfaces - Direct Divine Connection",
              "Spiritual Cybernetics - Faith Enhanced",
              "Ego Enhancement - Become More",
              "Transcendence Packages - Eternal Life*"
            ]}
            cta="The Divine Is Just A Download Away"
            theme="purple"
            logo="✝️"
          >
            <Line neon>Welcome to the Path of Transformation</Line>
            <Line cyan>[SEEKER ACCESS]</Line>
            <InsetBox title="ABOUT THE CHURCH:">
              <Line neon>Religion, cerebral interfaces, egotech, medtech</Line>
              <Line neon>Megatemple in the Neon Pillar, North Central</Line>
              <Line neon>Promise of eternal singularity through mind-upload</Line>
            </InsetBox>
            <InsetBox title="SERVICES OFFERED:">
              <Line cyan>→ Free personality scans (first session complimentary)</Line>
              <Line cyan>→ Ego-mapping consultations (determine upload readiness)</Line>
              <Line cyan>→ Neural interface installations (certified technicians)</Line>
              <Line cyan>→ Transformation ceremonies (packages starting at 5,000¤)</Line>
            </InsetBox>
            <InsetBox title="TESTIMONIALS:">
              <Line pink>"I feel closer to divinity every day." - Anonymous Devotee</Line>
              <Line pink>"My consciousness expanded beyond flesh." - Former Executive</Line>
              <Line pink>"The upload changed everything." - [DATA CORRUPTED]</Line>
            </InsetBox>
            <Warning>Upload success rates and ego continuance results not publicly disclosed</Warning>
            <Line yellow>"Transcend the meat. Embrace eternity."</Line>
          </CorpAd>
        ),
      },

      "Kaytell Makers": {
        favicon: <Icons.Tower />,
        content: (
          <CorpAd
            corp="KAYTELL MAKERS"
            slogan="Building Tomorrow, Today"
            products={[
              "Advanced Materials & Production",
              "Construction Services",
              "BioTech & CyberTech Components",
              "Fashion & Retail Goods"
            ]}
            cta="If It's Made, Kaytell Made It Better"
            theme="corporate"
            logo="🏭"
          >
            <Line neon>Accessing Kaytell corporate systems...</Line>
            <Line cyan>[CONSUMER PORTAL]</Line>
            <InsetBox title="ABOUT KAYTELL:">
              <Line neon>Materials, production, construction, bio/cybertech</Line>
              <Line neon>Several large factories on Mosscroft</Line>
              <Line neon>150 years of continuous operation under Mr. Kaytell</Line>
            </InsetBox>
            <InsetBox title="PRODUCT LINES:">
              <Line cyan>→ Kaytell Home™ - Furniture, appliances, decor</Line>
              <Line cyan>→ Kaytell Fashion™ - Synthetic textiles, workwear</Line>
              <Line cyan>→ Kaytell Construction™ - Building materials, prefab units</Line>
              <Line cyan>→ Kaytell Bio™ - Basic cyberware, medical devices</Line>
            </InsetBox>
            <InsetBox title="EMPLOYMENT:">
              <Line yellow>Now hiring: Factory workers (all shifts, Mosscroft)</Line>
              <Line yellow>Starting pay: 800¤/month + company housing</Line>
              <Line yellow>Benefits: Medical coverage (Kaytell Bio facilities only)</Line>
              <Line red>Average injury rate: [REDACTED]</Line>
            </InsetBox>
            <Line pink>"If it's made, Kaytell made it first."</Line>
          </CorpAd>
        ),
      },

      "Spectral FT Banks": {
        favicon: <Icons.Wallet />,
        content: (
          <CorpAd
            corp="SPECTRAL FT BANKS & HOLDINGS"
            slogan="Your Future, Financed"
            products={[
              "Personal & Corporate Banking",
              "Real Estate Investment",
              "Infrastructure Funding",
              "MedTech Financing Options"
            ]}
            cta="BUILD YOUR EMPIRE. WE'LL PROVIDE THE FOUNDATION."
            theme="gold"
            logo="💰"
          >
            <Line neon>Welcome to Spectral Financial Services</Line>
            <Line cyan>[ACCOUNT ACCESS]</Line>
            <InsetBox title="ABOUT SPECTRAL FT:">
              <Line neon>Financial services, real estate, infrastructure investment</Line>
              <Line neon>Headquarters in the Neon Pillar, North Central</Line>
              <Line neon>Focus on medtech sector investment opportunities</Line>
            </InsetBox>
            <InsetBox title="FINANCIAL PRODUCTS:">
              <Line cyan>→ Personal checking accounts (minimum 5,000¤ balance)</Line>
              <Line cyan>→ High-yield savings (3% APY for balances over 50,000¤)</Line>
              <Line cyan>→ Investment portfolios (managed by AI advisors)</Line>
              <Line cyan>→ Real estate loans (competitive rates for qualified buyers)</Line>
            </InsetBox>
            <InsetBox title="CURRENT PROMOTIONS:">
              <Line yellow>New account bonus: 100¤ credit (terms apply)</Line>
              <Line yellow>Referral program: Earn 50¤ per new customer</Line>
              <Line yellow>Premium tier: Waived fees for 100,000¤+ accounts</Line>
            </InsetBox>
            <Line pink>"Building wealth. Building Cy. Building tomorrow."</Line>
          </CorpAd>
        ),
      },

      "UCS Corporate": {
        favicon: <Icons.Tower />,
        content: (
          <CorpAd
            corp="UNITED CITADEL SECURITY"
            slogan="Strength Through Defense"
            products={[
              "Military-Grade Weaponry",
              "Combat Enhancement Systems",
              "Corporate Protection Services",
              "Automated Defense Platforms"
            ]}
            cta="WHEN ALLIANSEN ISN'T ENOUGH"
            theme="sleek"
            logo="⚔️"
          >
            <Line neon>Accessing UCS corporate network...</Line>
            <Line cyan>[PUBLIC ACCESS]</Line>
            <InsetBox title="ABOUT UCS:">
              <Line neon>Security, weapontech, combat enhancers</Line>
              <Line neon>Headquarters in Citadel Tower, South Central</Line>
              <Line neon>Outfitting most of Cy's SecOps divisions</Line>
            </InsetBox>
            <InsetBox title="SECURITY SOLUTIONS:">
              <Line cyan>→ Personal protection services (armed detail available)</Line>
              <Line cyan>→ Home security systems (AI-monitored, armed response)</Line>
              <Line cyan>→ Corporate security contracts (customizable threat levels)</Line>
              <Line cyan>→ Automated weapon platforms (residential & commercial)</Line>
            </InsetBox>
            <InsetBox title="LATEST PRODUCTS:">
              <Line yellow>NEW: Sentinel™ Auto-Turret (home defense edition)</Line>
              <Line yellow>NEW: Guardian™ Combat Enhancer (legal for licensed security)</Line>
              <Line yellow>COMING SOON: Aegis™ Personal Shield Generator</Line>
            </InsetBox>
            <Line red>Currently engaged in corporate conflict with Alliansen Inc.</Line>
            <Line pink>"When safety matters, trust UCS."</Line>
          </CorpAd>
        ),
      },

      "Tulles & deVerte Lifestyle Feed": {
        favicon: <Icons.Nightlife />,
        content: (
          <CorpAd
            corp="TULLES&DEVERTE"
            slogan="Live. Stream. Consume."
            products={[
              "Lifestyle Products & Feeds",
              "Entertainment & Nightlife",
              "Social Platform Investments",
              "Premium Drug Experiences"
            ]}
            cta="EVERYONE'S WATCHING. ARE YOU WORTH IT?"
            theme="neon"
            logo="📱"
          >
            <Line neon>Accessing celebrity lifestyle feed...</Line>
            <Line cyan>[PUBLIC ACCESS - ALL FEEDS]</Line>
            <InsetBox title="LATEST FROM T&D:">
              <Line pink>→ Just announced: Merger with mystery partner (reveal in 48hrs!)</Line>
              <Line pink>→ New fashion line dropping next week (pre-order now)</Line>
              <Line pink>→ Club opening in Ports (VIP list already at capacity)</Line>
              <Line pink>→ Exclusive interview: "Why we're better than you" (premium access)</Line>
            </InsetBox>
            <InsetBox title="TRENDING POSTS:">
              <Line neon>• Photo dump from our yacht party (47k likes)</Line>
              <Line neon>• Rate our matching chrome upgrades (89k comments)</Line>
              <Line neon>• New sponsorship deal announced (mystery corp)</Line>
            </InsetBox>
            <InsetBox title="LIFESTYLE PRODUCTS:">
              <Line cyan>T&D Signature Fragrance: 450¤</Line>
              <Line cyan>Limited Edition Sunglasses: 890¤</Line>
              <Line cyan>Energy Drink Collab: 15¤ per can</Line>
              <Line yellow>"Live like us. Buy like us. Be like us (but not really)."</Line>
            </InsetBox>
            <Line pink>"Subscribe to premium for exclusive behind-the-scenes content!"</Line>
          </CorpAd>
        ),
      },

      "Royal West Shipping": {
        favicon: <Icons.Tower />,
        content: (
          <CorpAd
            corp="ROYAL WEST SHIPPING CO."
            slogan="Connected Horizons"
            tagline="Global logistics, local delivery."
            products={[
              "Global Logistics Network",
              "Automated Warehousing",
              "Retail Distribution",
              "AI-Managed Operations"
            ]}
            cta="From Warehouse To Your Door - NordShip Never Sleeps"
            theme="green"
            logo="🚢"
          >
            <Line neon>Accessing logistics network...</Line>
            <Line cyan>[PUBLIC PORTAL]</Line>
            <InsetBox title="ABOUT ROYAL WEST:">
              <Line neon>Global shipping, warehousing, retail distribution</Line>
              <Line neon>NordShip™ AI manages all operations (zero human error)</Line>
              <Line neon>Primary warehouse hub: Mosscroft industrial district</Line>
              <Line neon>Partnerships: Major retailers, corps, government contracts</Line>
            </InsetBox>
            <InsetBox title="SERVICES OFFERED:">
              <Line cyan>→ Global freight shipping (air, sea, land, automated)</Line>
              <Line cyan>→ Warehouse storage solutions (short/long-term)</Line>
              <Line cyan>→ Last-mile delivery (drone, vehicle, water taxi)</Line>
              <Line cyan>→ Supply chain optimization (AI-powered forecasting)</Line>
              <Line cyan>→ Retail fulfillment (direct-to-consumer solutions)</Line>
            </InsetBox>
            <InsetBox title="SHIPPING RATES (Cy Local):">
              <KeyValue label="Standard (2-5 days)" value="15¤" />
              <KeyValue label="Express (1-2 days)" value="35¤" />
              <KeyValue label="Same-day (Central only)" value="80¤" />
              <KeyValue label="Drone delivery" value="+20¤ (restrictions apply)" />
              <Line yellow>* Slums deliveries subject to additional fees</Line>
            </InsetBox>
            <InsetBox title="TRACK YOUR SHIPMENT:">
              <Line neon>Enter tracking number: [_______________]</Line>
              <Line cyan>Real-time GPS tracking powered by NordShip™</Line>
              <Line yellow>Delivery notifications via RCD</Line>
            </InsetBox>
            <InsetBox title="WAREHOUSE SERVICES:">
              <Line cyan>Small locker (1m³): 50¤/month</Line>
              <Line cyan>Standard unit (10m³): 200¤/month</Line>
              <Line cyan>Large unit (50m³): 800¤/month</Line>
              <Line cyan>Climate-controlled: +40%</Line>
              <Line yellow>Security: 24/7 monitoring, biometric access</Line>
            </InsetBox>
            <InsetBox title="CAREER OPPORTUNITIES:">
              <Line yellow>Now hiring: Warehouse operators (Mosscroft)</Line>
              <Line yellow>Starting: 750¤/month + overtime</Line>
              <Line yellow>Benefits: Medical coverage, company discounts</Line>
              <Line red>Note: All operations managed by NordShip AI (human oversight minimal)</Line>
            </InsetBox>
            <Line pink>"The world moves. We move it faster."</Line>
          </CorpAd>
        ),
      },

      "Gravf|Mellberg|Tosk Law": {
        favicon: <Icons.Prison />,
        content: (
          <CorpAd
            corp="GRAVF/MELLBERG/TOSK"
            slogan="No Paying Client Goes to Borghold"
            tagline="Corporate law. Criminal defense. Results guaranteed."
            products={[
              "Corporate Legal Services",
              "Criminal Defense (All Charges)",
              "Contract Negotiation & Review",
              "Risk Management Consulting"
            ]}
            cta="When The Law Isn't On Your Side, We Are."
            theme="sleek"
            logo="⚖️"
          >
            <Line neon>Accessing legal services portal...</Line>
            <Line cyan>[CONSULTATION REQUIRED]</Line>
            <InsetBox title="ABOUT THE FIRM:">
              <Line neon>Premier corporate law firm, established 2044</Line>
              <Line neon>Headquartered in The Neon Pillar, North Central</Line>
              <Line neon>Specialties: Corporate law, criminal defense, contract disputes</Line>
              <Line neon>Motto: "No paying client of ours ever goes to Borghold"</Line>
              <Line yellow>Track record: 94% acquittal rate for criminal cases</Line>
            </InsetBox>
            <InsetBox title="LEGAL SERVICES:">
              <Line cyan>→ Corporate representation (mergers, acquisitions, disputes)</Line>
              <Line cyan>→ Criminal defense (white-collar, violent crimes, all charges)</Line>
              <Line cyan>→ Contract law (review, negotiation, breach litigation)</Line>
              <Line cyan>→ Regulatory compliance (corp law, environmental, labor)</Line>
              <Line cyan>→ Risk management consulting (pre-emptive legal strategy)</Line>
              <Line cyan>→ Litigation support (trial preparation, expert witnesses)</Line>
            </InsetBox>
            <InsetBox title="RETAINER PACKAGES:">
              <KeyValue label="Basic consultation" value="500¤ (1 hour)" />
              <KeyValue label="Standard retainer" value="5,000¤/month" />
              <KeyValue label="Premium retainer" value="20,000¤/month" />
              <KeyValue label="Crisis response" value="50,000¤+ (immediate deployment)" />
              <Line yellow>Payment plans available for qualified clients</Line>
              <Line red>Corporate accounts receive priority scheduling</Line>
            </InsetBox>
            <InsetBox title="RECENT VICTORIES:">
              <Line pink>→ ACGS v. Alliansen Inc. - Contract upheld, 12M¤ settlement</Line>
              <Line pink>→ Executive murder trial - Full acquittal (self-defense)</Line>
              <Line pink>→ Kaytell regulatory violation - Charges dismissed</Line>
              <Line pink>→ UCS weapons trafficking - Reduced to misdemeanor fine</Line>
            </InsetBox>
            <InsetBox title="OUR ATTORNEYS:">
              <Line neon>Senior Partner: Ms. Gravf (Corporate law, 45 years)</Line>
              <Line neon>Senior Partner: Mr. Mellberg (Criminal defense, 38 years)</Line>
              <Line neon>Senior Partner: Dr. Tosk (Contract law, 42 years)</Line>
              <Line cyan>+ 47 associate attorneys across all specialties</Line>
            </InsetBox>
            <Warning>Legal advice is attorney-client privileged and confidential</Warning>
            <Line pink>"When the stakes are high, we don't lose."</Line>
          </CorpAd>
        ),
      },
    },
  },
};

export default CY_CITY_NETWORK;
