import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  DistrictPortal,
  RCDAlert,
} from "@terminal/retcomdevice";

export const OAK_ISLES_COMMANDS = {
  "Oak Isles": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke> · New money. Vanity architecture. No public records on file.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="OAK ISLES"
        districtId="HILLS-OAK-ISLES-01"
        tagline="Residential and private development zone"
        region="The Hills, Western Cy"
        corporatePresence="PRIVATE"
        crimeThreat="LOW"
        securityResponse="IMMEDIATE"
        atmosphere="A residential zone in the Hills characterized by large private estates and recent construction. Several new structures have been built in distinctive architectural styles. The area is privately secured and not accessible to the public."
        warnings={[
          "Private residential zone — no public access",
          "Multiple private security contracts active",
        ]}
      >
        <RCDAlert
          message="Ownership records for several Oak Isles structures return no results. Not restricted — genuinely absent. Buildings went up, nobody filed anything."
          details={[
            "Architectural styles don't match any current firm or movement on record",
            "No planning permits, no construction contracts, no registered owners",
            "Locals in Galgbacken won't discuss them",
          ]}
        />
      </DistrictPortal>
    ),
  },
};

export default OAK_ISLES_COMMANDS;
