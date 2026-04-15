import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  FacilityPortal,
} from "@terminal/retcomdevice";

export const ACGS_FACTORY_COMMANDS = {
  "ACGS Weapons Factory": {
    favicon: <Icons.Factory />,
    preview: (
      <NodePreview>
        <Line span red> · ACGS weapons production. West Mosscroft. Heavy security. Do not approach.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="ACGS"
        facilityId="MOSSCROFT-ACGS-WEST-01"
        tagline="Automated certainty."
        location="West Mosscroft, Industrial Zone"
        owner="ACGS — A. Gustafsson, Member of the Board"
        function="Weapons Manufacturing / Combat Platform Production"
        networkStatus="ACTIVE — ACGS secured network"
        securityLevel="MAXIMUM"
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
