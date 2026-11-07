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

export const AST_PLANT_COMMANDS = {
  // "AST Processing Plant": {
  //   favicon: <Icons.Factory />,
  //   preview: (
  //     <NodePreview>
  //       <Line span smoke> · Biomatter processing. South Mosscroft. The stench is unbearable.</Line>
  //     </NodePreview>
  //   ),
  //   content: (
  //     <FacilityPortal
  //       companyName="AST ENDLESS SEAS"
  //       tagline="From ocean to table. Eventually."
  //       location="South Mosscroft, Industrial Zone"
  //       owner="AST Endless Seas — Lakshmi Viswan, Product Manager"
  //       warnings={[
  //         "Extreme odor — respirator strongly recommended",
  //         "Biomatter contamination risk in southern perimeter",
  //         "AST private security on all access points",
  //         "Aquaculture waste runoff — avoid water contact in surrounding area",
  //       ]}
  //       theme="industrial"
  //     />
  //   ),
  //   related_commands: {
  //     // ...AST_PLANT_INTERIOR_COMMANDS,
  //   },
  // },
  "AST Processing Plant": {
    favicon: <Icons.Factory />,
    preview: (
      <NodePreview>
        <Line span smoke> · Biomatter processing. South Mosscroft. The stench is unbearable.</Line>
      </NodePreview>
    ),
    content: (
      <CorpAd
        corp="AST ENDLESS SEAS"
        slogan="From Ocean to Table"
        tagline="The future is underwater."
        products={[
          "Fish & Algae Products",
          "Restaurant Chain (15 Locations)",
          "Submarine Construction",
          "Undersjön Project Lead",
        ]}
        cta="TASTE THE FUTURE"
        theme="green"
      >
        <Line smoke large bold>SPECIAL: AlgaeBars™ - Buy 10, get 2 free!</Line>
        <Line smoke large>Now with 30% real fish in all protein bowls</Line>
        <Line neon>Accessing AST corporate network...</Line>
        <Line cyan>[CONSUMER ACCESS]</Line>
        <InsetBox title="ABOUT AST:">
          <Line neon>Leading fish/algae products, restaurants, submarine construction</Line>
          <Line neon>Gigantic processing plant in south Mosscroft</Line>
          <Line neon>Project lead for Undersjön construction</Line>
          <Line neon>Product Manager: Lakshmi Viswan</Line>
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
        <InsetBox title="ON SITE: SOUTH MOSSCROFT PLANT">
          <Line neon>South Mosscroft, Industrial Zone</Line>
          <Line yellow>Extreme odor — respirator strongly recommended</Line>
          <Line yellow>Biomatter contamination risk in southern perimeter</Line>
          <Line yellow>AST private security on all access points</Line>
          <Line yellow>Aquaculture waste runoff — avoid water contact in surrounding area</Line>
        </InsetBox>
        <Line pink>"The future is underwater. The future is AST."</Line>
      </CorpAd>
    ),
  },
};

export default AST_PLANT_COMMANDS;
