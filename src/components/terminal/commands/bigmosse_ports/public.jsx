import {
  Box,
  Line,
  KeyValue,
  InsetBox,
} from '@terminal/TerminalComponents';

import {
  LocalAd,
  HoursBanner,
  MaintenanceAccess,
  PublicPortal,
} from "@terminal/retcomdevice"

export const PUBLIC_COMMANDS = {
  "Corp Compliance Alert": {
    content: (
      <LocalAd
        corp="CORPORATE RELATIONS BUREAU"
        slogan="Working Together Works"
        theme="corporate"
      >
        <div className="space-y-3 text-blue-200">
          <p className="font-bold">REMEMBER:</p>
          <div className="space-y-2 text-sm">
            <p>✓ Corporations provide jobs & stability</p>
            <p>✓ Cooperation ensures prosperity</p>
            <p>✓ Resistance is counterproductive</p>
            <p>✓ Your data keeps you safe</p>
          </div>
          <p className="text-lg font-bold text-cyan-300 mt-4">
            TRUST THE SYSTEM. THE SYSTEM TRUSTS YOU.
          </p>
        </div>
      </LocalAd>
    ),
  },

  "Samurai Concert [Ad]": {
    content: (
      <LocalAd
        corp="SAMURAI"
        slogan="Never Fade Away"
        tagline="Legendary Rockerboy Legacy Tour"
        theme="neon"
      >
        <div className="space-y-3 text-center">
          <p className="text-2xl font-black text-fuchsia-200">TRIBUTE CONCERT</p>
          <p className="text-lg text-pink-300">Featuring: Multiple Acts</p>
          <div className="text-sm text-fuchsia-200/80 space-y-1 mt-4">
            <p>THIS SATURDAY - 8PM</p>
            <p>THE CHROME ARENA</p>
            <p>Tickets: 50¤-200¤</p>
          </div>
          <p className="text-xs text-pink-300/60 italic mt-4">
            "Wake the fuck up, samurai. We have a show to rock."
          </p>
        </div>
      </LocalAd>
    ),
  },

  "Canal Water Taxi Network": {
    content: (
      <MaintenanceAccess
        title="[PORTS CANAL TRANSIT]"
        deviceModel="Transit Information System"
        deviceId="TRANSIT-CANAL-01"
        firmwareVersion="v2.5.0"
        systemStatus="OPERATIONAL"
        notes={[
          "Operating: 24/7 (all docks)",
          "Peak hours: 06:00-09:00, 17:00-20:00",
          "Average wait time: Under 5 minutes",
          "Payment: Cash or credchip accepted"
        ]}
      >
        <InsetBox title="STANDARD RATES:">
          <KeyValue label="Short trip (under 1km)" value="10¤" />
          <KeyValue label="Medium trip (1-3km)" value="20¤" />
          <KeyValue label="Long trip (over 3km)" value="40¤" />
          <KeyValue label="Private charter (1 hour)" value="150¤" />
        </InsetBox>
        <InsetBox title="MAJOR ROUTES:">
          <Line neon>→ Residential docks ⟷ Market district</Line>
          <Line neon>→ Industrial zone ⟷ Entertainment district</Line>
          <Line neon>→ North pier ⟷ South docks</Line>
          <Line yellow>→ Special routes available (negotiate with driver)</Line>
        </InsetBox>
        <InsetBox title="PASSENGER INFO:">
          <Line cyan>Capacity: Up to 6 passengers per boat</Line>
          <Line cyan>Luggage: Equipment/cargo allowed (driver discretion)</Line>
          <Line yellow>Tip expected for after-hours or special requests</Line>
        </InsetBox>
        <Line pink>"Cleanest water transport in Ports. That's not saying much."</Line>
      </MaintenanceAccess>
    ),
  },

  "Dice Emporium [Ad]": {
    content: (
      <LocalAd
        corp="THE LOADED DICE"
        slogan="Gaming Supply Specialists"
        products={[
          "Premium Gaming Dice",
          "Custom Chip Sets",
          "Card Decks (Standard & Marked)",
          "Gaming Accessories"
        ]}
        cta="Roll With The Best - 2 Blocks From Lucky Flight"
        theme="purple"
      >
        <p className="text-xs text-purple-300/60 italic text-center mt-4">
          We don't ask how you use them.
        </p>
      </LocalAd>
    ),
  },

  "Ports Bar [Ad]": {
    content: (
      <LocalAd
        corp="THE ANCHOR BAR"
        slogan="Cheap Drinks. No Judgment."
        products={[
          "Beer - 8¤",
          "Whiskey - 12¤",
          "Well Drinks - 10¤",
          "Happy Hour: 5PM-7PM (Half Price)"
        ]}
        cta="WATERFRONT VIEWS. DIVE BAR PRICES."
        theme="dystopian"
      >
        <p className="text-sm text-orange-200 text-center mt-4">
          Near Dock 5 - Open 2PM-2AM Daily
        </p>
      </LocalAd>
    ),
  },

  "Street Doc [Ad]": {
    content: (
      <LocalAd
        corp="EMERGENCY MEDICAL"
        slogan="No Questions. No Records."
        products={[
          "Trauma Surgery - 150¤",
          "Emergency Treatment - 100¤",
          "Cyberware Installation - Variable",
          "24/7 Availability"
        ]}
        cta="WHEN YOU CAN'T GO TO A REAL HOSPITAL"
        theme="sleek"
      >
        <p className="text-xs text-gray-400 italic text-center mt-4">
          Cash only. Location disclosed to verified clients.
        </p>
      </LocalAd>
    ),
  },

  "SecOps Recruitment [Ad]": {
    content: (
      <LocalAd
        corp="CY SECURITY OPERATIONS"
        slogan="Protect & Serve"
        tagline="Join the force that keeps Cy safe."
        products={[
          "Competitive Pay & Benefits",
          "Combat Training & Enhancement",
          "Career Advancement Opportunities",
          "Corporate Partnership Bonuses"
        ]}
        cta="APPLY NOW - SECOPS.CY/CAREERS"
        theme="corporate"
      />
    ),
  },

  "Public Safety Warning": {
    content: (
      <LocalAd
        corp="PUBLIC SAFETY NOTICE"
        slogan="Stay Alert. Stay Safe."
        theme="dystopian"
      >
        <div className="space-y-3 text-orange-200">
          <p className="font-bold text-lg">CURRENT THREAT LEVEL: MODERATE</p>
          <div className="space-y-2 text-sm">
            <p>• Report suspicious activity to SecOps immediately</p>
            <p>• Avoid unlit areas after dark</p>
            <p>• Carry valid identification at all times</p>
            <p>• Gang activity reported in Ports district</p>
          </div>
          <p className="text-xs text-orange-300/70 italic mt-4">
            Your compliance ensures everyone's safety.
          </p>
        </div>
      </LocalAd>
    ),
  },

  "Street Preacher Live Stream": {
    content: (
      <Box color="red">
        <Line red bold large>[LIVE: BROTHER STATIC'S SERMON]</Line>
        <Line yellow>Streaming from: Ports district, Pier 7</Line>
        <InsetBox title="CURRENT BROADCAST:" color="yellow">
          <Line red>"...AND THE MACHINES WILL WEEP CHROME TEARS!"</Line>
          <Line neon>"The corporations feed on your SOUL like vampires!"</Line>
          <Line red>"G0 was THEIR doing! THEIR sacrifice to dark gods!"</Line>
          <Line neon>"Reject the upload! Your consciousness DIES in the cloud!"</Line>
          <Line red>"ONLY FLESH IS REAL! ONLY PAIN IS TRUTH!"</Line>
          <Line neon>"The Basilisk watches from the Deep Net! WATCHING!"</Line>
          <Line red>"Repent! REPENT! Before the second Incident comes!"</Line>
        </InsetBox>
        <KeyValue label="Live Viewers" value="47" />
        <KeyValue label="Total Donations" value="12¤" />
        <Line yellow>"Chat is disabled due to spam."</Line>
      </Box>
    ),
  },

  "Traffic Signal Control (Innovation & 7th)": {
    content: (
      <MaintenanceAccess
        title="[TRAFFIC SIGNAL - INNOVATION AVE & 7TH ST]"
        deviceModel="Traffic Control System"
        deviceId="TRAFFIC-INNO7-01"
        firmwareVersion="v6.0.3"
        systemStatus="OPERATIONAL"
        notes={[
          "Operation Mode: AUTOMATED (adaptive timing)",
          "Cycle Time: 80 seconds (adjusts to traffic)",
          "Last Malfunction: 6 weeks ago (resolved)",
          "Maintained by: Cynergy Infrastructure Division"
        ]}
      >
        <InsetBox title="CURRENT TIMING:">
          <Line neon>Innovation Ave (East-West): 40 seconds green</Line>
          <Line neon>7th St (North-South): 30 seconds green</Line>
          <Line neon>All-red phase: 5 seconds (safety buffer)</Line>
          <Line neon>Pedestrian crossing: 20 seconds</Line>
        </InsetBox>
        <InsetBox title="TRAFFIC METRICS (Last Hour):">
          <Line cyan>Vehicles: 287 (Innovation Ave), 156 (7th St)</Line>
          <Line cyan>Pedestrians: 67 crossings</Line>
          <Line cyan>Emergency vehicle overrides: 1</Line>
          <Line cyan>Average wait time: 32 seconds</Line>
        </InsetBox>
      </MaintenanceAccess>
    ),
  },

  "NetBattler Arcade (Tech Mall)": {
    content: (
      <PublicPortal
        name="NETBATTLER ARCADE"
        tagline="Jack In. Battle. Win."
        network="ARCADE_GUEST"
        signalStrength="strong"
        status="✓ OPEN"
        statusColor="neon"
        nowPlaying="NetBattle Tournament Stream (live)"
        notes={[
          "Cost: 5¤ per game, 20¤ for 5 games",
          "Players online: 18 (across 12 terminals)",
          "Weekly tournaments - Saturday, 14:00"
        ]}
        theme="friendly"
      >
        <HoursBanner
          name="Schedule"
          hours="10:00 - 22:00"
          days="Every Day"
        />
        <InsetBox title="UPCOMING TOURNAMENT:">
          <Line cyan>Date: This Saturday, 14:00</Line>
          <Line cyan>Prize: 200¤ + Rare chip code</Line>
          <Line cyan>Registration: Open (12/16 slots filled)</Line>
        </InsetBox>
        <Line pink>"Jack in! MegaMan, execute!"</Line>
      </PublicPortal>
    ),
  },

  "Trauma Response Station (Medical District)": {
    content: (
      <PublicPortal
        name="TRAUMA RESPONSE COORDINATION"
        tagline="Critical Care. Rapid Deployment."
        network="TRAUMA_PUBLIC"
        signalStrength="strong"
        status="ACCEPTING MEMBERS"
        statusColor="neon"
        notes={[
          "Emergency medical response (platinum tier)",
          "Air & ground ambulance services",
          "Corporate contract coverage available"
        ]}
        theme="friendly"
      >
        <InsetBox title="MEMBERSHIP FEES:">
          <Line yellow>Platinum: 5,000¤/month (individual), 15,000¤/month (family)</Line>
          <Line yellow>Gold: 2,500¤/month (individual), 7,500¤/month (family)</Line>
          <Line yellow>Silver: 800¤/month (individual), 2,000¤/month (family)</Line>
        </InsetBox>
        <InsetBox title="COVERAGE AREAS:">
          <Line cyan>Central districts: Full air coverage</Line>
          <Line cyan>Mid-tier districts: Ground priority</Line>
          <Line cyan>Outer districts: Limited (contract dependent)</Line>
          <Line red>Slums: No service (corporate policy)</Line>
        </InsetBox>
        <Line pink>"Your life. Our priority. Their profit."</Line>
      </PublicPortal>
    ),
  },
};

export default PUBLIC_COMMANDS;
