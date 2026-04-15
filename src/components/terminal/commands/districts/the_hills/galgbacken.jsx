import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  DistrictPortal,
} from "@terminal/retcomdevice";

export const GALGBACKEN_COMMANDS = {
  "Galgbacken": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke> · Old money. Pre-Incident villas. Private residential enclave.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="GALGBACKEN"
        districtId="HILLS-GALGBACKEN-01"
        tagline="Old-money residential neighborhood, The Hills"
        region="The Hills, Western Cy"
        corporatePresence="PRIVATE"
        crimeThreat="LOW"
        securityResponse="IMMEDIATE"
        atmosphere="The oldest established neighborhood in the Hills. Pre-Incident villas and private estates behind multiple security perimeters. A long-standing residential enclave for Cy's most prominent citizens. No public access."
        warnings={[
          "Private residential zone — residents and invited guests only",
          "Comprehensive surveillance — all visitors logged",
          "Multiple private security contracts active",
        ]}
      >
        <InsetBox title="NOTABLE RESIDENTS:">
          <Line neon>• Mr. O.B.P. Gunner — CEO, United Citadel Security</Line>
          <Line neon>• Mrs. Lia — President of the Board, Alliansen Inc.</Line>
          <Line neon>• Dr. Daevy — Lead Researcher, TG Labs</Line>
        </InsetBox>
      </DistrictPortal>
    ),
    related_commands: {},
  },
};

export default GALGBACKEN_COMMANDS;
