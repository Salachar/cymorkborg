import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  FacilityPortal,
  RCDAlert,
} from "@terminal/retcomdevice";

export const ROYAL_WEST_COMMANDS = {
  "Royal West Shipping Co": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · Largest warehouses in the Ports. Nobody challenges them.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="ROYAL WEST SHIPPING CO"
        tagline="Connected horizons."
        location="Ports District — HQ and primary warehouses"
        owner="Royal West Shipping Co — Sri Alraune, CEO"
        warnings={[
          "Largest and most well-guarded warehouses in the Ports",
          "Armed private security — do not approach without authorization",
          "All operations managed by NordShip AI — monitored continuously",
        ]}
        theme="corporate"
      >
        <RCDAlert
          message="NordShip is the first shackled 'true' AI. It runs everything. Sri Alraune signs the contracts — NordShip decides how they're executed."
          details={[
            "Royal West has presence in all three port exits — air, sea, space",
            "Nobody in the Ports challenges Royal West's warehouse territory. Nobody.",
          ]}
        />
      </FacilityPortal>
    ),
    related_commands: {
      // ...ROYAL_WEST_WAREHOUSE_COMMANDS,
    },
  },
};

export default ROYAL_WEST_COMMANDS;
