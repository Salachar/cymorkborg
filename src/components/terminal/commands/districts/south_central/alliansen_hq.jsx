import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  FacilityPortal,
  RCDAlert,
} from "@terminal/retcomdevice";

export const ALLIANSEN_HQ_COMMANDS = {
  "Alliansen Inc.": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span cyan> · Dominant megacorp. South Central. Real estate, security, everything.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="ALLIANSEN INC."
        facilityId="SC-ALLIANSEN-HQ-01"
        tagline="Securing tomorrow."
        location="South Central, Central District"
        owner="Alliansen Inc. — Mrs. Lia, President of the Board"
        function="Corporate HQ / Security Operations / Behavioral Analytics"
        personnel="Jaci F. Ah — Head of Security Operations"
        networkStatus="ACTIVE — Alliansen secured network"
        securityLevel="MAXIMUM"
        warnings={[
          "Alliansen private security on all floors",
          "Behavioral analytics active in all public-facing areas",
          "No unauthorized access — immediate response",
        ]}
        theme="corporate"
      >
        <RCDAlert
          message="Alliansen controls most of the Borghold prison complex and leases security infrastructure to half of Cy's SecCorps. They are at war with UCS."
          details={[
            "Primary sectors: real estate, security, entertainment, behavioral analytics, voting, research",
            "The war with UCS plays out through SecCorps proxy contracts across the city",
            "Mrs. Lia maintains personal residence in Galgbacken",
          ]}
        />
      </FacilityPortal>
    ),
    related_commands: {
      // ...ALLIANSEN_INTERIOR_COMMANDS,
    },
  },
};

export default ALLIANSEN_HQ_COMMANDS;
