import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  FacilityPortal,
} from "@retcom";

export const ACGS_FACTORY_COMMANDS = {
  "ACGS Weapons Factory": {
    favicon: <Icons.Factory />,
    preview: (
      <NodePreview>
        <Line span smoke> · ACGS weapons production. West Mosscroft. Heavy security. Do not approach.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="ACGS"
        tagline="Automated certainty."
        location="West Mosscroft, Industrial Zone"
        owner="ACGS — A. Gustafsson, Member of the Board"
        warnings={[
          "Chemical smog — respirator mandatory at all times",
          "Armed ACGS security — automated weapon platforms on perimeter",
          "No public access under any circumstances",
          "AI-monitored facility — The Hermit oversees all operations",
        ]}
        theme="industrial"
      />
    ),
    related_commands: {
      // ...ACGS_FACTORY_INTERIOR_COMMANDS,
    },
  },
};

export default ACGS_FACTORY_COMMANDS;
