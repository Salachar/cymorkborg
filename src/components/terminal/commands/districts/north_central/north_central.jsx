import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  DistrictPortal,
} from "@terminal/retcomdevice";

import { NEON_PILLAR_COMMANDS } from './neon_pillar';
import { FLOATING_HIVE_COMMANDS } from './floating_hive';
import { CARMACK_ANTIQUITIES_COMMANDS } from './carmack_antiquities';

export const NORTH_CENTRAL_COMMANDS = {
  "North Central": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke> · The Neon Pillar. Financial district. God and money in the same tower.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="NORTH CENTRAL"
        districtId="CENTRAL-NORTH-01"
        tagline="The fluorescent sun that never sets"
        region="Central District, Northern Sector"
        corporatePresence="DOMINANT"
        crimeThreat="LOW"
        securityResponse="MAXIMUM"
        atmosphere="The Neon Pillar casts a fluorescent sun over the district — Spectral FT's financial empire and Fideistic Transformation's megatemple share the same structure. The Floating Hive looms nearby, Cynergy's monument to owning the city's water and power. Once this was woodland. The Incident made it something else."
        warnings={[
          "SecCorps jurisdictions overlap — competing firms enforce violently",
          "Fideistic Transformation recruiters operate openly — don't engage",
          "Facial recognition blanket coverage — no blind spots",
        ]}
      >
        <InsetBox title="DOMINANT CORPS:">
          <Line neon>• Spectral FT Banks & Holdings — HQ, Neon Pillar</Line>
          <Line neon>• Fideistic Transformation — Megatemple, Neon Pillar</Line>
          <Line neon>• Cynergy Water & Power Co — HQ, The Floating Hive</Line>
        </InsetBox>

        <Line smoke small>
          Fideistic Transformation promises eternal singularity in a divine mind-cloud. Their success with uploads is questionable. Ego continuance: unknown.
        </Line>
      </DistrictPortal>
    ),
    related_commands: {
      ...NEON_PILLAR_COMMANDS,
      ...FLOATING_HIVE_COMMANDS,
      ...CARMACK_ANTIQUITIES_COMMANDS,
    },
  },
};

export default NORTH_CENTRAL_COMMANDS;
