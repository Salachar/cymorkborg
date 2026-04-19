import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  PublicPortal,
  RCDAlert,
} from "@terminal/retcomdevice";

export const LAKE_GRAVEL_COMMANDS = {
  "Lake Gravel": {
    favicon: <Icons.Water />,
    preview: (
      <NodePreview>
        <Line span smoke> · Natural lake. North/South Central boundary. Undersjon beneath it.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="LAKE GRAVEL"
        tagline="Natural freshwater lake, Central District."
        notes={[
          "Natural lake separating North and South Central",
          "Undersjon retail park currently under construction beneath the lake bed",
          "Canal access connects Lake Gravel to broader waterway network",
          "Water quality monitored by Cynergy Water & Power Co",
        ]}
        theme="casual"
      >
        <RCDAlert
          message="15 years of Undersjon construction directly beneath Lake Gravel. Structural assessments are not public record."
          details={[
            "Multiple tunnel reinforcements have been required during construction",
            "Budget overruns at 340% — AST has not disclosed full scope of lake bed impact",
          ]}
        />
      </PublicPortal>
    ),
    related_commands: {},
  },
};

export default LAKE_GRAVEL_COMMANDS;
