import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  CCTV,
  DistrictPortal,
} from "@terminal/retcomdevice"

import { DOC_JOY_CLINIC_COMMANDS } from './doc_joy_clinic';
import { PEACH_TREES_COMMANDS } from './peach_tress';
import { SOUTH_CENTRAL_FUN_COMMANDS } from "./fun";
import { SOUTH_CENTRAL_CORPORATE_COMMANDS } from './corporate';
import { ALLIANSEN_HQ_COMMANDS } from './alliansen_hq'

import south_central_cctv from '@images/locations/south_central_cctv.png';

export const SOUTH_CENTRAL_COMMANDS = {
  "South Central": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span yellow> · Alliansen territory. Corporate law. Chrome and concrete.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="SOUTH CENTRAL"
        districtId="CENTRAL-SOUTH-01"
        tagline="Where the money lives and the chrome shines"
        region="Central District, Southern Sector"
        corporatePresence="DOMINANT"
        crimeThreat="LOW"
        securityResponse="MAXIMUM"
        atmosphere="Alliansen Inc. owns the skyline and most of what's beneath it. The Golden Spire looms over deal-making that would empty a city block overnight. Holographic advertisements the size of buildings. The wealthy walk without fear. White-collar crimes, high yields, low convictions."
        warnings={[
          "SecCorps presence extreme — multiple competing jurisdictions",
          "Facial recognition active in all public spaces",
          "Act like you belong or leave",
        ]}
        theme="corporate"
      >
        <InsetBox title="DOMINANT CORPS:">
          <Line neon>• Alliansen Inc. — Southern sector megacorp, HQ here</Line>
          <Line neon>• Grave/Mellberg/Tosk — Mobster law firm, Golden Spire</Line>
          <Line neon>• Tulles&deVerte — Superstar it couple, media empire</Line>
        </InsetBox>

        <Line smoke small>
          A coffin apartment here costs more than you'd make in ten lifetimes. It won't let you forget that.
        </Line>
      </DistrictPortal>
    ),
    related_commands: {
      "South Central CityCam": {
        favicon: <Icons.Camera />,
        content: (
          <CCTV
            src={south_central_cctv}
            cameraId="CAM-CPT-FOYER"
            location="Entrance"
            theme="amber"
            height={500}
          />
        ),
      },

      ...DOC_JOY_CLINIC_COMMANDS,
      ...PEACH_TREES_COMMANDS,
      ...SOUTH_CENTRAL_FUN_COMMANDS,
      ...SOUTH_CENTRAL_CORPORATE_COMMANDS,
      ...ALLIANSEN_HQ_COMMANDS,
    },
  },
}

export default SOUTH_CENTRAL_COMMANDS;
