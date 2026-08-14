import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  FacilityPortal,
} from "@retcom";

export const AST_PLANT_COMMANDS = {
  "AST Processing Plant": {
    favicon: <Icons.Factory />,
    preview: (
      <NodePreview>
        <Line span smoke> · Biomatter processing. South Mosscroft. The stench is unbearable.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="AST ENDLESS SEAS"
        tagline="From ocean to table. Eventually."
        location="South Mosscroft, Industrial Zone"
        owner="AST Endless Seas — Lakshmi Viswan, Product Manager"
        warnings={[
          "Extreme odor — respirator strongly recommended",
          "Biomatter contamination risk in southern perimeter",
          "AST private security on all access points",
          "Aquaculture waste runoff — avoid water contact in surrounding area",
        ]}
        theme="industrial"
      />
    ),
    related_commands: {
      // ...AST_PLANT_INTERIOR_COMMANDS,
    },
  },
};

export default AST_PLANT_COMMANDS;
