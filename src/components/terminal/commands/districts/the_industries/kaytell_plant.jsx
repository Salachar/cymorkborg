import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  FacilityPortal,
} from "@terminal/retcomdevice";

export const KAYTELL_PLANT_COMMANDS = {
  "Kaytell Manufacturing Plant": {
    favicon: <Icons.Factory />,
    preview: (
      <NodePreview>
        <Line span yellow> · Chemical textile plant. Shifts 24/7. The pay sucks and it's dangerous work.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="KAYTELL MAKERS"
        facilityId="MOSSCROFT-KAYTELL-WEST-01"
        tagline="Industry must feed Cy's eternal consumption."
        location="West Mosscroft, Industrial Zone"
        owner="Kaytell Makers — Mr. Kaytell, Founder and CEO"
        function="Chemical Textile Manufacturing / Materials Production"
        networkStatus="ACTIVE — Kaytell internal network"
        securityLevel="HIGH"
        warnings={[
          "Chemical smog — respirator mandatory at all times",
          "Kaytell private security on all perimeters",
          "Shifts run 24/7 — authorized personnel only outside shift hours",
          "Hazardous materials in active use — no unauthorized access",
        ]}
        theme="industrial"
      />
    ),
    related_commands: {
      // ...KAYTELL_PLANT_INTERIOR_COMMANDS,
    },
  },
};

export default KAYTELL_PLANT_COMMANDS;
