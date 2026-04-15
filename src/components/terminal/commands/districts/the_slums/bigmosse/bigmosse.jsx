import Icons from '@utils/icons';

import {
  InsetBox,
  Line,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  CCTV,
  DistrictPortal,
} from "@terminal/retcomdevice"

import { BODEGA_COMMANDS } from './bodega';
import { STONE_EELS_COMMANDS } from './caveclub';
import { LUCKY_FLIGHT_CASINO } from './casino';
import { BUSINESS_COMMANDS } from './business';
import { PUBLIC_COMMANDS } from './public';
import { RESIDENTIAL_COMMANDS } from './residential';

import bigmosse_ports_cctv from '@images/locations/bigmosse_ports_cctv.png';

export const BIGMOSSE_COMMANDS = {
  "Bigmosse": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke br> · Slums at the edge of the Ports. The most alive district you can die in.</Line>
        <Line span yellow> · Lucky Flight Casino</Line> open 24/7!
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="BIGMOSSE"
        tagline="Where the desperate meet the decadent at the water's edge"
        population="~120,000+ (estimated, many unregistered)"
        corporatePresence="MODERATE"
        crimeThreat="HIGH"
        atmosphere="The border bleeds. Slum desperation crashes into Port hedonism. Cargo containers become homes. Warehouses become clubs. The black market thrives where SecCorps fear to tread. Gangs, cults, and corpos vie for dominance in endless violent spirals."
        warnings={[
          "EXTREME DANGER - Gang war zone (Virid Vipers vs Heirs of Kergoz)",
          "SecCorps presence minimal - bribes required for response",
          "Drug trade highly active - avoid suspicious packages",
          "Cult activity (Heirs of Kergoz) - Nanomantic blood rites",
          "G0 contamination seepage from nearby quarantine",
          "Water supply tainted - nanomold outbreaks common",
          "Unauthorized weapons trade - expect armed civilians",
        ]}
        theme="slums"
      >
        <InsetBox title="SURVIVAL TIPS:">
          <Line yellow>• Pay protection money or have gang connections</Line>
          <Line yellow>• Don't ask questions about cargo or packages</Line>
          <Line yellow>• Avoid Barnyard Fields (cult territory)</Line>
          <Line yellow>• Water must be filtered - trust nothing from taps</Line>
          <Line yellow>• Night activity dangerous - travel in groups</Line>
        </InsetBox>
      </DistrictPortal>
    ),
    related_commands: {
      "Bigmosse CityCam": {
        favicon: <Icons.Camera />,
        content: (
          <CCTV
            src={bigmosse_ports_cctv}
            theme="amber"
            height={500}
          />
        ),
      },
      ...BODEGA_COMMANDS,
      ...LUCKY_FLIGHT_CASINO,
      ...STONE_EELS_COMMANDS,
      ...BUSINESS_COMMANDS,
      ...PUBLIC_COMMANDS,
      ...RESIDENTIAL_COMMANDS,
    },
  },
}

export default BIGMOSSE_COMMANDS;
