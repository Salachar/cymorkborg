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

export const THE_INBETWEENS_COMMANDS = {
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
        favicon: <Icons.Pin />,
        preview: (
          <NodePreview>
            <Line span smoke> · Illegal G0-grown mycobiotic meat. Pop-up stalls. Don't ask questions.</Line>
          </NodePreview>
        ),
        content: (
          <PublicPortal
            name="BURNCHURCH HEX"
            tagline="Eat what you can afford. Don't ask questions."
            notes={[
              "Pop-up food stalls — mycobiotic meat grown illegally in G0",
              "Surge economy — here today, scattered tomorrow",
              "Health inspections: none on record",
              "Prices cheaper than synth-food (barely)",
            ]}
            theme="casual"
          />
        ),
      },

      "Borghold": {
        favicon: <Icons.Prison />,
        preview: (
          <NodePreview>
            <Line span smoke> · Prison complex. Parts nearly 500 years old. Alliansen controlled. Locals insular.</Line>
          </NodePreview>
        ),
        content: (
          <FacilityPortal
            companyName="BORGHOLD"
            tagline="We know the city by whom we hold in cages."
            location="The Inbetweens, Central Cy"
            owner="Alliansen Inc. (majority control)"
            warnings={[
              "Unauthorized access is illegal — immediate detention",
              "Armed perimeter — drone surveillance 24/7",
              "Locals extremely insular — outsiders viewed with suspicion",
              "Some sections nearly 500 years old — new construction added yearly",
            ]}
            theme="secure"
          />
        ),
      },

      "Svärta": {
        favicon: <Icons.Pin />,
        preview: (
          <NodePreview>
            <Line span smoke> · Cyberbike hype epicenter. Bombed out by roadrunner clans. Mostly rubble.</Line>
          </NodePreview>
        ),
        content: (
          <DistrictPortal
            districtName="SVÄRTA"
            districtId="INBETWEENS-SVARTA-01"
            tagline="Was the place to be. Then the bombs dropped."
            region="The Inbetweens, Central Cy"
            corporatePresence="NONE"
            crimeThreat="HIGH"
            securityResponse="MINIMAL"
            atmosphere="Svärta was recently the epicenter of a cyberbike hype that came to a violent end when rival roadrunner clans bombed most of the area in a fight for dominance against the locals. Most of it is still rubble. A few reaperdocs and stubborn residents remain."
            warnings={[
              "Structural damage widespread — unstable buildings throughout",
              "Roadrunner clan activity — ongoing territorial disputes",
              "No official SecCorps presence",
            ]}
          />
        ),
      },

      "Low Meadow": {
        favicon: <Icons.Pin />,
        preview: (
          <NodePreview>
            <Line span smoke> · Inbetweens fringe. Quiet. Unremarkable. Which means something is wrong.</Line>
          </NodePreview>
        ),
        content: (
          <DistrictPortal
            districtName="LOW MEADOW"
            districtId="INBETWEENS-LOW-MEADOW-01"
            tagline="Nothing to see here"
            region="The Inbetweens, Central Cy"
            corporatePresence="LOW"
            crimeThreat="MEDIUM"
            securityResponse="STANDARD"
            atmosphere="A quiet fringe district of the Inbetweens. Tenement blocks, local commerce, nothing that draws attention. In Cy, that's either very good or very bad."
            warnings={[
              "No notable incidents on record",
            ]}
          />
        ),
      },
    },
  },
};

export default THE_INBETWEENS_COMMANDS;
