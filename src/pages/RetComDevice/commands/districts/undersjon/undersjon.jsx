import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  Nodes,
} from "@retcom";

import UNDERSJON_OFFICAL_COMMANDS from './undersjon_official';
import UNDERSJON_UNOFFICIAL_COMMANDS from './undersjon_unofficial';

export const UNDERSJON_COMMANDS = {
  "Undersjon": {
    favicon: <Icons.Bulletin />,
    preview: (
      <NodePreview>
        <Line span smoke> · An altar to consumerism. Beneath Lake Gravel. Perpetually under construction.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.PublicPortal
        name="UNDERSJON"
        tagline="An altar to consumerism — beneath Lake Gravel"
        notes={[
          "Location: Beneath Lake Gravel — separates North and South Central",
          "Project lead: AST Endless Seas",
          "Year 15 of construction — 60% complete",
          "Grand opening projected: Year 18-20 (estimate subject to revision)",
          "Access: Underwater tunnels from North and South Central",
          "Budget overruns: 340% over original estimate",
          "Lake water leaks through ceiling periodically — management calls it ambiance",
        ]}
        theme="fancy"
      >
        <InsetBox title="CURRENT TENANTS:">
          <Line neon bullet>Ongo Gablogian's — Unit 3, north corridor — fashion</Line>
          <Line neon bullet>RetCom Electronics — Unit 7, east corridor — electronics and repair</Line>
          <Line neon bullet>Food Court — central atrium — six stalls, ATM, vending</Line>
          <Line smoke small>Further units available — contact AST Endless Seas tenancy division</Line>
        </InsetBox>
      </Nodes.PublicPortal>
    ),
    related_commands: {
      ...UNDERSJON_OFFICAL_COMMANDS,
      ...UNDERSJON_UNOFFICIAL_COMMANDS,
    },
  },
};

export default UNDERSJON_COMMANDS;
