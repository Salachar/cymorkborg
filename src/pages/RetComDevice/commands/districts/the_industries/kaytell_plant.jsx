import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  KeyValue,
  Warning,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  CorpAd,
  FacilityPortal,
} from "@retcom";

export const KAYTELL_PLANT_COMMANDS = {
  // "Kaytell Manufacturing Plant": {
  //   favicon: <Icons.Factory />,
  //   preview: (
  //     <NodePreview>
  //       <Line span smoke> · Chemical textile plant. Shifts 24/7. The pay sucks and it's dangerous work.</Line>
  //     </NodePreview>
  //   ),
  //   content: (
  //     <FacilityPortal
  //       companyName="KAYTELL MAKERS"
  //       tagline="Industry must feed Cy's eternal consumption."
  //       location="West Mosscroft, Industrial Zone"
  //       owner="Kaytell Makers — Mr. Kaytell, Founder and CEO"
  //       warnings={[
  //         "Chemical smog — respirator mandatory at all times",
  //         "Kaytell private security on all perimeters",
  //         "Shifts run 24/7 — authorized personnel only outside shift hours",
  //         "Hazardous materials in active use — no unauthorized access",
  //       ]}
  //       theme="industrial"
  //     />
  //   ),
  //   related_commands: {
  //     // ...KAYTELL_PLANT_INTERIOR_COMMANDS,
  //   },
  // },
  "Kaytell Manufacturing Plant": {
    favicon: <Icons.Factory />,
    preview: (
      <NodePreview>
        <Line span smoke> · Chemical textile plant. Shifts 24/7. The pay sucks and it's dangerous work.</Line>
      </NodePreview>
    ),
    content: (
      <CorpAd
        corp="KAYTELL MAKERS"
        slogan="Building Tomorrow, Today"
        tagline="Industry must feed Cy's eternal consumption."
        products={[
          "Advanced Materials & Production",
          "Construction Services",
          "BioTech & CyberTech Components",
          "Fashion & Retail Goods",
        ]}
        cta="If It's Made, Kaytell Made It Better"
        theme="corporate"
      >
        <Line neon>Accessing Kaytell corporate systems...</Line>
        <Line cyan>[CONSUMER PORTAL]</Line>
        <InsetBox title="ABOUT KAYTELL:">
          <Line neon>Materials, production, construction, bio/cybertech</Line>
          <Line neon>Several large factories on Mosscroft</Line>
          <Line neon>150 years of continuous operation under Mr. Kaytell, Founder and CEO</Line>
          <Line neon>The true HQ has been moved into orbit</Line>
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
        <InsetBox title="ON SITE: WEST MOSSCROFT PLANT">
          <Line neon>West Mosscroft, Industrial Zone</Line>
          <Line yellow>Chemical smog — respirator mandatory at all times</Line>
          <Line yellow>Kaytell private security on all perimeters</Line>
          <Line yellow>Shifts run 24/7 — authorized personnel only outside shift hours</Line>
          <Line yellow>Hazardous materials in active use — no unauthorized access</Line>
        </InsetBox>
        <Line pink>"If it's made, Kaytell made it first."</Line>
      </CorpAd>
    ),
  },
};

export default KAYTELL_PLANT_COMMANDS;
