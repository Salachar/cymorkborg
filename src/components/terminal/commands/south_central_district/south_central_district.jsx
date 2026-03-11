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
import { CENTRAL_PLAZA_TOWER_COMMANDS } from './central_plaza_tower';
import { SOUTH_CENTRAL_FUN_COMMANDS } from "./fun";

import south_central_cctv from '@images/locations/south_central_cctv.png';

export const SOUTH_CENTRAL_DISTRICT_COMMANDS = {
  "South Central District": {
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
        population="~80,000 residents"
        corporatePresence="DOMINANT"
        crimeThreat="LOW"
        securityResponse="MAXIMUM"
        atmosphere="Neon-soaked towers. Holographic advertisements larger than buildings. SecCorps on every corner. The wealthy walk without fear while the rest dream of escape. White-collar crimes, high yields, low convictions. The rich remain above the law."
        warnings={[
          "SecCorps presence extreme - expect constant surveillance",
          "Crimes here get attention - heavy response guaranteed",
          "Wealth disparity severe - act like you belong or leave",
          "Facial recognition active in all public spaces",
          "Unauthorized recording devices detected and confiscated",
        ]}
        theme="corporate"
      >
        <InsetBox title="MAJOR PLAYERS:">
          <Line neon>• Alliansen Inc. - Southern sector dominance</Line>
          <Line neon>• Grave/Mellberg/Tosk - Mobster law firm</Line>
          <Line neon>• Tulles&deVerte - Current superstar it couple</Line>
          <Line neon>• Spectral FT Banks & Holdings - Financial district</Line>
        </InsetBox>

        <InsetBox title="SECURITY CONTRACTORS:">
          <Line yellow>• Multiple SecCorps with competing jurisdictions</Line>
          <Line yellow>• Response time to threats: ~2 minutes</Line>
          <Line yellow>• Private security available for hire (premium rates)</Line>
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
      ...CENTRAL_PLAZA_TOWER_COMMANDS,
      ...SOUTH_CENTRAL_FUN_COMMANDS,
    },
  },
}

export default SOUTH_CENTRAL_DISTRICT_COMMANDS;
