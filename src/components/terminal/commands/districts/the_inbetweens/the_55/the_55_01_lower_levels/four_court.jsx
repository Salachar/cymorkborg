import {
  Line,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  MaintenanceAccess,
  PublicPortal,
} from "@terminal/retcomdevice";

export const FOUR_COURT_COMMANDS = {
  "[G000 - U006] Four Court (Ground Level)": {
    content: (
      <PublicPortal
        name="FOUR COURT"
        tagline="Main entrance to The 55"
        network="FOUR_COURT_PUBLIC"
        signalStrength="strong"
        status="✓ OPEN 24/7"
        statusColor="neon"
        notes={[
          "Ground level",
          "4 large entrances to central courtyard",
          "Local merchants, con artists, street culture",
          "Main access point for The 55"
        ]}
        theme="limeade"
      />
    ),
    related_commands: {
      "Court Directory": {
        content: (
          <MaintenanceAccess
            title="[FOUR COURT DIRECTORY]"
            deviceModel="Public Zone Mapping"
            deviceId="COURT-DIR-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Ground level",
              "Main entrance to The 55",
              "8 key locations",
              "High traffic 24/7"
            ]}
          >
            <InsetBox title="KEY LOCATIONS:">
              <Line neon>1. Info Walls</Line>
              <Line smoke>Inner walls covered in printouts, graffiti, requests</Line>
              <Line neon>2. Court Market</Line>
              <Line smoke>Dozens of merchants, basic equipment</Line>
              <Line neon>3. Food Stalls</Line>
              <Line smoke>Locust pizza, synth ramen, moonshine, modified vending machines</Line>
              <Line neon>4. C.O.P. Booth</Line>
              <Line smoke>Corporate Order Police</Line>
              <Line neon>5. Gates (4 total)</Line>
              <Line smoke>Massive accordion doors, open 24/7 (beggars, con artists, preachers)</Line>
              <Line neon>6. Fideistic Transformation Kiosk</Line>
              <Line smoke>Religious converts, body rental contracts (2 UCS sec ops on duty)</Line>
              <Line neon>7. Elevators</Line>
              <Line smoke>Slow, crowded (hours-long lineups, most use stairs)</Line>
              <Line neon>8. Community Outreach Booth</Line>
              <Line smoke>Volunteers protecting The 55 (jobs available, low/no pay)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Court Market": {
            content: (
              <MaintenanceAccess
                title="[COURT MARKET]"
                deviceModel="Merchant Zone"
                deviceId="COURT-MARKET-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Ground level courtyard",
                  "30-40 vendors on any given day",
                  "Basic equipment available",
                  "Pickpockets",
                ]}
              >
                <InsetBox title="AVAILABLE GOODS (Standard prices):">
                  <Line neon>• Food and water (synth and some fresh)</Line>
                  <Line neon>• Clothing (second-hand, some new)</Line>
                  <Line neon>• Tools (general purpose, basic quality)</Line>
                  <Line neon>• Electronics (phones, chargers, batteries)</Line>
                  <Line neon>• Miscellaneous supplies</Line>
                  <Line smoke small>For illegal items: Look higher in stack (Multimart, private vendors)</Line>
                </InsetBox>
                <InsetBox title="MERCHANTS:">
                  <Line>30-40 vendors on any given day</Line>
                  <Line>Mix of regulars and traveling merchants</Line>
                  <Line>Most friendly and willing to haggle</Line>
                  <Line>Some sell questionable goods (buyer beware)</Line>
                </InsetBox>
                <InsetBox title="SECURITY WARNING:">
                  <Line red>Multiple incidents daily</Line>
                  <Line yellow>C.O.P. booth nearby but rarely intervenes</Line>
                  <Line smoke>Vendors watch each others' stalls</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Food Stalls": {
            content: (
              <MaintenanceAccess
                title="[FOUR COURT FOOD STALLS]"
                deviceModel="Vendor Zone"
                deviceId="COURT-FOOD-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Street food and refreshments",
                  "Multiple vendors",
                  "Prices: 2¤-10¤ per item",
                  "Quality varies"
                ]}
              >
                <InsetBox title="MENU:">
                  <Line cyan>Locust pizza slice: 6¤</Line>
                  <Line cyan>Synth ramen bowl: 8¤</Line>
                  <Line cyan>Local moonshine (shot): 4¤</Line>
                  <Line cyan>Vending machine snacks: 2-5¤</Line>
                  <Line cyan>Mystery meat skewer: 5¤</Line>
                  <Line cyan>Fresh fruit (rare): 10¤</Line>
                  <Line cyan>Bottled water: 3¤</Line>
                  <Line cyan>Synth coffee: 2¤</Line>
                </InsetBox>
                <InsetBox title="POPULAR VENDORS:">
                  <Line neon bold>Mama's Locust Pizza:</Line>
                  <Line smoke>Best pizza in Four Court, always busy</Line>
                  <Line neon bold>Synth Ramen Cart:</Line>
                  <Line smoke>Fast service, filling portions</Line>
                  <Line neon bold>Moonshine Vendor:</Line>
                  <Line smoke>Homemade alcohol of questionable origin</Line>
                  <Line yellow>You'll regret it</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "C.O.P. Booth": {
            content: (
              <MaintenanceAccess
                title="[CORPORATE ORDER POLICE BOOTH]"
                deviceModel="Security Station"
                deviceId="COURT-COP-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Ground level security presence",
                  "Generic Sec Ops (rotating shifts)",
                  "Armored Cars (garage attached)",
                  "Vindicator Droid (emergency response)"
                ]}
              >
                <InsetBox title="JURISDICTION:">
                  <Line>Officially: Four Court security</Line>
                  <Line>In practice: Minimal enforcement</Line>
                  <Line>Only respond to major incidents or corpo interests</Line>
                  <Line yellow>Will not help with pickpocketing, minor disputes</Line>
                </InsetBox>
                <InsetBox title="WILL RESPOND TO:">
                  <Line cyan>• Violence involving corpo personnel</Line>
                  <Line cyan>• Major theft (1,000¤+ value)</Line>
                  <Line cyan>• Threats to Four Court structure</Line>
                  <Line cyan>• Gang warfare affecting access</Line>
                </InsetBox>
                <InsetBox title="WILL IGNORE:">
                  <Line smoke>• Pickpocketing</Line>
                  <Line smoke>• Con artists</Line>
                  <Line smoke>• Minor disputes</Line>
                  <Line smoke>• Most resident-on-resident crime</Line>
                </InsetBox>
                <InsetBox title="REPUTATION:">
                  <Line>Locals view C.O.P. as corporate enforcers</Line>
                  <Line>Most residents avoid contact unless necessary</Line>
                  <Line>Known to harass lower-level residents</Line>
                  <Line yellow>Reporting crimes may lead to being hassled yourself</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Community Outreach Booth": {
            content: (
              <MaintenanceAccess
                title="[55 COMMUNITY OUTREACH BOOTH]"
                deviceModel="Volunteer Organization"
                deviceId="COURT-OUTREACH-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Ground level",
                  "One of few public institutions left",
                  "Overworked volunteers",
                  "Fighting corporations, cults, NuFascists",
                  "Jobs available (low/no pay)"
                ]}
              >
                <InsetBox title="SERVICES:">
                  <Line neon>• Job board (community defense, investigations)</Line>
                  <Line neon>• Conflict mediation</Line>
                  <Line neon>• Resource coordination (food, supplies)</Line>
                  <Line neon>• Legal aid referrals</Line>
                  <Line neon>• Information sharing (warnings, threats)</Line>
                </InsetBox>
                <InsetBox title="STAFFING:">
                  <Line>2-3 volunteers at booth (waking hours)</Line>
                  <Line>Connected to Ada Five-Five (Alliansen Arms)</Line>
                  <Line>Network of ~20 active community members</Line>
                </InsetBox>
                <InsetBox title="CURRENT PRIORITIES:">
                  <Line cyan>• NuFascist bounty program (1k¤ per head)</Line>
                  <Line cyan>• Anti-eviction legal defense</Line>
                  <Line cyan>• Universal basic income fund (12% funded)</Line>
                  <Line cyan>• Corporate expansion resistance</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Fideistic Transformation Kiosk": {
            content: (
              <MaintenanceAccess
                title="[FIDEISTIC TRANSFORMATION KIOSK]"
                deviceModel="Religious Recruitment Station"
                deviceId="COURT-FIDEIS-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Ground level",
                  "Corp-church recruitment",
                  "Body rental contracts available",
                  "2 United Citadel sec ops on duty (during hours)"
                ]}
              >

                <InsetBox title="SERVICES:">
                  <Line yellow>Religious conversion programs</Line>
                  <Line yellow>Body rental contracts (sell your body when you die)</Line>
                  <Line yellow>Ego upload consultations</Line>
                  <Line smoke>"Eternal singularity" in divine mind-cloud (allegedly)</Line>
                </InsetBox>
                <InsetBox title="SECURITY:">
                  <Line red>2 United Citadel Security ops on duty</Line>
                  <Line red>Active during kiosk operating hours</Line>
                  <Line red>Will defend kiosk if attacked</Line>
                </InsetBox>
                <InsetBox title="WARNING:">
                  <Line yellow>Success of mind uploads questionable</Line>
                  <Line yellow>Ego continuance unknown</Line>
                  <Line yellow>Body rental means your corpse is corporate property</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};
