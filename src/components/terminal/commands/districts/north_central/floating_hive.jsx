import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  FacilityPortal,
  PublicPortal,
} from "@terminal/retcomdevice";

export const FLOATING_HIVE_COMMANDS = {
  "The Floating Hive": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · Cynergy HQ. They own the water. They own the power. They own you.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="THE FLOATING HIVE"
        tagline="Megacorp posing as public infrastructure"
        location="North Central, Central District"
        owner="Cynergy Water & Power Co"
        warnings={[
          "Cynergy private security — no public SecCorps jurisdiction",
          "Visitor access by appointment only",
          "Infrastructure control center — tampering carries extreme consequences",
        ]}
        theme="corporate"
      />
    ),
    related_commands: {
      "Cynergy Water & Power": {
        favicon: <Icons.Bulletin />,
        preview: (
          <NodePreview>
            <Line span smoke> · Public utilities portal. Water. Power. Their terms.</Line>
          </NodePreview>
        ),
        content: (
          <PublicPortal
            name="CYNERGY WATER & POWER CO"
            tagline="Keeping Cy Running — Whether You Like It Or Not"
            notes={[
              "HQ: The Floating Hive, North Central",
              "COO: Dana Azar",
              "Water (basic tier): 120¤/month",
              "Water (filtered tier): 280¤/month",
              "Power (residential): 180–450¤/month",
              "Late payment fee: 50¤ per day",
              "Planned outages: Slums districts (rotating schedule)",
            ]}
            theme="limeade"
          />
        ),
      },
    },
  },
};
