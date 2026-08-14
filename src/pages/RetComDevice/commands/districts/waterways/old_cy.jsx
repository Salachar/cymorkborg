import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  DistrictPortal,
} from "@retcom";

import OLD_CY_NEARBY_COMMANDS from './old_cy_nearby';
import { MONASTERY_ROUGH_BEAST_COMMANDS } from './monastery_rough_beast';

export const OLD_CY_COMMANDS = {
  "Old Cy": {
    favicon: <Icons.City />,
    preview: (
      <NodePreview>
        <Line span smoke> · Pre-Incident ruins. Gravel Lake border. What the city used to be.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="OLD CY"
        districtId="OLD-CY-01"
        tagline="The wreckage of what came before."
        region="Gravel Lake border — between Central and the Slums"
        corporatePresence="NONE"
        crimeThreat="HIGH"
        securityResponse="NONE"
        atmosphere="The oldest bones of the city. Pre-Incident architecture swallowed by decades of neglect, overgrowth, and opportunistic occupation. No corp would touch it — too unstable, too haunted by what happened here. What remains is a fringe territory claimed by those who need to disappear: cults, squatters, roadrunner clans, and things that resist categorization."
        warnings={[
          "No SecCorps presence — no response, no protection",
          "Structural instability throughout — pre-Incident construction",
          "Cult activity confirmed in multiple locations",
          "Proximity to G0 contamination zone — air quality unverified",
        ]}
      >
        <InsetBox title="KNOWN OCCUPANTS:">
          <Line neon>• Gravel Lake Charitable Foundation — Gravel Lake border</Line>
          <Line yellow>• Various squatter settlements — unregistered, unmapped</Line>
          <Line yellow>• Roadrunner clan territory — eastern approaches</Line>
        </InsetBox>
      </DistrictPortal>
    ),
    related_commands: {
      ...MONASTERY_ROUGH_BEAST_COMMANDS,
      ...OLD_CY_NEARBY_COMMANDS,
    },
  },
};

export default OLD_CY_COMMANDS;
