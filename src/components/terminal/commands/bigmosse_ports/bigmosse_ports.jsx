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
import { ALLIANSEN_WAREHOUSE_COMMANDS } from './warehouse';
import { RESIDENTIAL_COMMANDS } from './residential';

import bigmosse_ports_cctv from '@images/locations/bigmosse_ports_cctv.png';

export const BIGMOSSE_PORTS_COMMANDS = {
  "Bigmosse & Ports": {
    preview: (
      <NodePreview>
        <Line span yellow> · Lucky Flight Casino</Line> open 24/7!
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="BIGMOSSE & PORTS"
        districtId="SLUMS-PORTS-BORDER"
        tagline="Where the desperate meet the decadent at the water's edge"
        region="Slums/Ports Border Zone"
        population="~120,000+ (estimated, many unregistered)"
        corporatePresence="MODERATE"
        crimeThreat="HIGH"
        securityResponse="DELAYED"
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
        <InsetBox title="MAJOR FACTIONS:">
          <Line red bold>• Virid Vipers - Drug trade kingpins</Line>
          <Line red bold>• Heirs of Kergoz - Cult with Barnyard Fields base</Line>
          <Line yellow>• Royal West Shipping - Legitimate (armed) warehouses</Line>
          <Line yellow>• Idol Coffins - Pop-up rock-star hotels</Line>
          <Line yellow>• Various street gangs and smaller factions</Line>
        </InsetBox>

        <InsetBox title="BORDER ZONE CHARACTERISTICS:">
          <Line cyan>• Slums side: Festering scars from G0 Incident, rundown</Line>
          <Line cyan>• Ports side: Entertainment, black market, hedonism</Line>
          <Line cyan>• Canal access: Taxi boats, smuggling routes</Line>
          <Line cyan>• Mixed architecture: Cargo containers, warehouses, clubs</Line>
        </InsetBox>

        <InsetBox title="SURVIVAL TIPS:">
          <Line yellow>• Pay protection money or have gang connections</Line>
          <Line yellow>• Don't ask questions about cargo or packages</Line>
          <Line yellow>• Avoid Barnyard Fields (cult territory)</Line>
          <Line yellow>• Water must be filtered - trust nothing from taps</Line>
          <Line yellow>• Night activity dangerous - travel in groups</Line>
        </InsetBox>

        <Line smoke small>
          Drugs and guns, clubs and fun - this is the entertainment district of Cy's true citizens. If you can't pay, you can't stay. If you can't fight, you won't survive.
        </Line>
      </DistrictPortal>
    ),
    related_commands: {
      "Bigmosse CityCam": {
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
      ...ALLIANSEN_WAREHOUSE_COMMANDS,
      ...RESIDENTIAL_COMMANDS,
    },
  },
}

export default BIGMOSSE_PORTS_COMMANDS;
