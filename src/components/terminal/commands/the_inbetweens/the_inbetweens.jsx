import Icons from '@utils/icons';

import {
  Line,
  Divider,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  FacilityPortal,
  DistrictPortal,
  PublicPortal,
} from '@terminal/retcomdevice';

import THE_55_COMMANDS from './the_55';

export const THE_INBETWEENS_DISTRICT = {
  "The Inbetweens": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke> · Endless tenements. Cubicle zombies. Ads on every surface.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="THE INBETWEENS"
        districtId="INBETWEENS-DISTRICT-01"
        tagline="Where the salaryfolk store their dreams"
        region="Central Cy City, Mid-tier Zone"
        population="~250,000+ residents"
        corporatePresence="MODERATE"
        crimeThreat="MEDIUM"
        securityResponse="STANDARD"
        atmosphere="Endless rows of bland tenement slabs. Oppressive concrete brutalism advertises to you at every waking moment. Cubicle zombies and cogs in the machine are stored here between shifts. Hyperlocal gentrification flickers like bad wiring—today's trendy sector is tomorrow's abandoned husk."
        accessPoints={[
          "Stack #95563 'The 55' - 365-floor megablock (47k residents)",
          "Burnchurch Hex - Illegal mycobiotic meat trade hub",
          "Svarta - Bombed by roadrunner clan wars",
          "Borghold - Prison complex (centuries old)",
          "The Arcs - Standard residential complexes",
          "Transit hubs to Central and Industries",
        ]}
        warnings={[
          "Gentrification surges unpredictable - areas change overnight",
          "Pop-up businesses exploit then vanish like locusts",
          "Transit crime moderate - keep valuables secure",
          "Trend thralls and boutique entrepreneurs swarm new 'hidden gems'",
          "Corporate surveillance moderate but constant",
        ]}
        theme="district"
      >
        <InsetBox title="DISTRICT CHARACTERISTICS:">
          <Line cyan>• Mixed-income residential towers and apartment blocks</Line>
          <Line cyan>• Salary workers, mid-level employees, service industry</Line>
          <Line cyan>• Neither slums nor luxury - the grinding middle</Line>
          <Line cyan>• Transit hubs connect to all major districts</Line>
          <Line cyan>• Corporate housing blocks owned by various megacorps</Line>
        </InsetBox>

        <InsetBox title="MAJOR STRUCTURES:">
          <Line neon bold>Stack #95563 "The 55":</Line>
          <Line yellow>• 365 floors from basement to roofline</Line>
          <Line yellow>• ~47,000 residents (capsules to penthouses)</Line>
          <Line yellow>• Self-contained: shops, factories, offices, clinics</Line>
          <Line yellow>• Some residents haven't left in years</Line>
          <Divider />
          <Line neon bold>Burnchurch Hex:</Line>
          <Line yellow>• Illegal mycobiotic meat grown underwater in G0</Line>
          <Line yellow>• Pop-up food stalls surge and scatter</Line>
          <Line yellow>• Health inspections? What's that?</Line>
          <Divider />
          <Line neon bold>Borghold Prison Complex:</Line>
          <Line yellow>• Parts nearly 500 years old, new additions yearly</Line>
          <Line yellow>• Locals insular, suspicious of outsiders</Line>
          <Line yellow>• Multi-family houses and small villas</Line>
          <Line yellow>• "We know the city by whom we hold in cages"</Line>
        </InsetBox>

        <InsetBox title="RECENT EVENTS:">
          <Line red>• Svarta cyberbike hype ended in bombings (rival roadrunner clans)</Line>
          <Line red>• Most of the area destroyed in turf war</Line>
          <Line yellow>• Burnchurch Hex food stalls currently surging</Line>
          <Line yellow>• Transit hub upgrades planned (corporate funding TBD)</Line>
        </InsetBox>

        <Line smoke small>
          The Inbetweens never changes, it just rearranges its misery. You live here because you can't afford Central and you're too good for the Slums. Keep telling yourself that.
        </Line>
      </DistrictPortal>
    ),
    related_commands: {
      ...THE_55_COMMANDS,

      "Burnchurch Hex": {
        favicon: <Icons.BurnchurchHex />,
        content: (
          <PublicPortal
            name="BURNCHURCH HEX"
            tagline="Eat what you can afford. Don't ask questions."
            network="BURNCHURCH_PUBLIC"
            signalStrength="medium"
            status="✓ OPEN FOR BUSINESS"
            statusColor="yellow"
            nowPlaying="Sizzling meat, shouting vendors, desperate appetites"
            notes={[
              "Pop-up food stalls selling mycobiotic meat",
              "Grown illegally underwater in G0 quarantine zone",
              "Health inspections? Never heard of them.",
              "Prices cheaper than synth-food (barely)",
              "Surge economy - here today, scattered tomorrow"
            ]}
            theme="casual"
          >
            <InsetBox title="WHAT'S ON OFFER:">
              <Line cyan>• Mycobiotic meat steaks (10¤-25¤)</Line>
              <Line cyan>• Mystery meat skewers (5¤-15¤)</Line>
              <Line cyan>• "Fish" tacos (questionable origin, 8¤)</Line>
              <Line cyan>• Fungal burgers (12¤, actually not bad)</Line>
              <Line cyan>• Noodle bowls with "protein" (7¤)</Line>
            </InsetBox>
            <InsetBox title="THE STALLS (Currently Active):">
              <Line neon>• Mama Kez's Grill - Best fungal burgers</Line>
              <Line neon>• The Wet Market - Mystery meats, don't ask</Line>
              <Line neon>• Skewer Station - Quick bites on the go</Line>
              <Line neon>• Uncle Cho's Noodles - Cheapest meal around</Line>
              <Line neon>• 2d6 other vendors (rotating daily)</Line>
            </InsetBox>
            <Line yellow bold>⚠ BUYER BEWARE:</Line>
            <Line smoke small>
              No guarantees on freshness, safety, or species of origin. Eat at your own risk.
              Food poisoning common but rarely fatal. Probably.
            </Line>
          </PublicPortal>
        ),
      },

      "Borghold Prison Complex": {
        favicon: <Icons.Prison />,
        content: (
          <FacilityPortal
            companyName="BORGHOLD CORRECTIONAL"
            facilityId="PRISON-COMPLEX-01"
            tagline="We know the city by whom we hold in cages"
            location="The Inbetweens District"
            owner="Cy Municipal Authority / Private Contractors"
            function="Maximum Security Prison & Detention"
            personnel="500+ guards, staff, administrators"
            networkStatus="RESTRICTED_ACCESS (Staff only)"
            securityLevel="MAXIMUM"
            warnings={[
              "Prison complex - Unauthorized access is illegal",
              "Armed guards patrol perimeter 24/7",
              "Locals extremely insular and suspicious of outsiders",
              "Some sections nearly 500 years old (medieval Cy)",
              "New construction added yearly - ever expanding"
            ]}
            theme="secure"
          >
            <InsetBox title="FACILITY OVERVIEW:">
              <Line cyan>• Oldest sections: ~500 years old (pre-Incident)</Line>
              <Line cyan>• Medieval Cy architecture still standing</Line>
              <Line cyan>• New blocks constructed yearly (prison always growing)</Line>
              <Line cyan>• Current capacity: 12,000+ inmates</Line>
              <Line cyan>• Actual population: ~15,000 (overcrowded)</Line>
            </InsetBox>
            <InsetBox title="SURROUNDING NEIGHBORHOOD:">
              <Line yellow>• Locals live in small villas and multi-family houses</Line>
              <Line yellow>• Community insular - view outsiders with suspicion</Line>
              <Line yellow>• Many families work at the prison (generational employment)</Line>
              <Line yellow>• "We know the city by whom we hold in cages"</Line>
            </InsetBox>
            <InsetBox title="PRISON BLOCKS (Known):">
              <Line neon>• Old Wing - Medieval cells, stone walls</Line>
              <Line neon>• Maximum Security - Violent offenders</Line>
              <Line neon>• Corporate Detention - White-collar crimes</Line>
              <Line neon>• Quarantine Block - Nano-infected inmates</Line>
              <Line neon>• Death Row - Capital punishment wing</Line>
              <Line neon>• New Construction - Blocks 12-15 (in progress)</Line>
            </InsetBox>
            <Line red bold>⚠ SECURITY NOTICE:</Line>
            <Line smoke small>
              This is a maximum security facility. Unauthorized access will result in immediate
              detention. Drone surveillance active 24/7. Perimeter is heavily armed. Do not approach
              without clearance.
            </Line>
          </FacilityPortal>
        ),
      },
    },
  },
};

export default THE_INBETWEENS_DISTRICT;
