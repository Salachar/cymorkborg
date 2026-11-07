import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
} from '@retcom/RetComComponents';

import {
  Node,
  RetComImage
} from "@retcom"

import CY_CITY_MAP from '@images/cycity_overview.png';

export const CY_CITY_NETWORK = {
  // "Cy City Map": {
  //   favicon: <Icons.Map />,
  //   content: (
  //     <RetComImage
  //       src={CY_CITY_MAP}
  //       theme="red"
  //     />
  //   ),
  // },

  "Cy Traffic (Real-Time)": {
    favicon: <Icons.Traffic />,
    content: (
      <Node
        title="CY TRAFFIC - ACGS CHARIOT AI"
        subtitle="Live route updates — plan your route, save your life"
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
      </Node>
    ),
  },

  "Cy Entertainment Guide": {
    favicon: <Icons.Entertainment />,
    content: (
      <Node
        title="CY ENTERTAINMENT - DIRECTORY"
        subtitle="What's hot in the city tonight"
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
      </Node>
    ),
  },

  "Cy Survival Tips": {
    favicon: <Icons.Tips />,
    content: (
      <Node
        title="CY SURVIVAL GUIDE - UNOFFICIAL"
        subtitle="User-contributed wisdom from the streets"
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
      </Node>
    ),
  },

  "Cy Dating Network": {
    favicon: <Icons.Heart />,
    content: (
      <Node
        title="CY-MATCH - SOCIAL NETWORK"
        subtitle="Find Connection in the Disconnected City"
        footer="Platform disclaimer: 78% of profiles may be bots, scams, or law enforcement"
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
      </Node>
    ),
  },

  "Cy Food Delivery App": {
    favicon: <Icons.Food />,
    content: (
      <Node
        title="CY-EATS - DELIVERY SERVICE"
        subtitle="Hot food. Cold city. Fast delivery (eventually)."
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
      </Node>
    ),
  },

  "Cy Horoscope Network": {
    favicon: <Icons.Stars />,
    content: (
      <Node
        title="NET ORACLE - DAILY HOROSCOPE"
        subtitle="Cosmic guidance for the cybernetic age"
        footer="Brought to you by Fideistic Transformation — Upload your destiny!"
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
      </Node>
    ),
  },

  "Cy Urban Legends Archive": {
    favicon: <Icons.Files />,
    content: (
      <Node
        title="CY URBAN LEGENDS - DATABASE"
        subtitle="Separating fact from fiction (probably)"
        footer="78% of legends have some basis in documented events"
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
      </Node>
    ),
  },

  "Cy Public Services": {
    favicon: <Icons.Bulletin />,
    content: (
      <Node
        title="CY PUBLIC SERVICES - CITIZEN PORTAL"
        subtitle="Citizen resources and emergency information"
        footer="Your safety is our priority. (Terms and conditions apply.)"
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
      </Node>
    ),
  },

  "Cy Job Board": {
    favicon: <Icons.Bulletin />,
    content: (
      <Node
        title="CY EMPLOYMENT NETWORK - JOB BOARD"
        subtitle="Your Future. Their Profit."
        footer="All positions subject to background checks and corporate loyalty agreements"
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
      </Node>
    ),
  },

  "Cy Housing Market": {
    favicon: <Icons.House />,
    content: (
      <Node
        title="CY REAL ESTATE - LISTINGS"
        subtitle="Affordable is a relative term."
        footer="All prices subject to market adjustment fees. First/last/security deposit standard (3 months upfront)."
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
      </Node>
    ),
  },

  "Cy Crime Reports": {
    favicon: <Icons.Police />,
    content: (
      <Node
        title="CY CRIME STATISTICS - PUBLIC DIGEST"
        subtitle="Sanitized for public consumption"
        footer="Crime reporting varies by district corporate investment"
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
      </Node>
    ),
  },

  "Cy Meme Feed": {
    favicon: <Icons.Ad />,
    content: (
      <Node
        title="CY VIRAL CONTENT - NETWORK"
        subtitle="The People's Voice (Probably)"
        footer="Platform moderation provided by ACGS sentiment analysis AI"
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
      </Node>
    ),
  },
};

export default CY_CITY_NETWORK;
