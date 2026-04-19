import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  PublicPortal,
} from "@terminal/retcomdevice";

export const UNDERSJON_COMMANDS = {
  "Undersjon": {
    favicon: <Icons.Bulletin />,
    preview: (
      <NodePreview>
        <Line span smoke> · An altar to consumerism. Beneath Lake Gravel. Perpetually under construction.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="UNDERSJON"
        tagline="An altar to consumerism — beneath Lake Gravel"
        notes={[
          "Location: Beneath Lake Gravel — separates North and South Central",
          "Project lead: AST Endless Seas",
          "Year 15 of construction — 60% complete",
          "Grand opening projected: Year 18–20 (estimate subject to revision)",
          "Access: Underwater tunnels from North and South Central",
          "Budget overruns: 340% over original estimate",
          "Lake water leaks through ceiling periodically — management calls it ambiance",
        ]}
        theme="fancy"
      />
    ),
    related_commands: {
      // ...UNDERSJON_STORES_COMMANDS,
    },
  },
};

export default UNDERSJON_COMMANDS;
