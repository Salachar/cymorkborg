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
        <Line span cyan> · An altar to consumerism. Beneath Lake Gravel. Perpetually under construction.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="UNDERSJON"
        tagline="An altar to consumerism — beneath Lake Gravel"
        network="UNDERSJON_PUBLIC"
        signalStrength="medium"
        status="✓ OPEN (Partial — Construction Active)"
        statusColor="yellow"
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

/*

  "Undersjon Retail Park": {
    favicon: <Icons.Bulletin />,
    content: (
      <PublicPortal
        name="UNDERSJON"
        tagline="An Altar to Consumerism - Beneath Lake Gravel"
        network="UNDERSJON_PUBLIC"
        signalStrength="medium"
        status="✓ OPEN (Perpetual Construction)"
        statusColor="yellow"
        nowPlaying="Ambient underwater sounds mixed with shopping music"
        notes={[
          "Located beneath Lake Gravel (separates North/South Central)",
          "Perpetually under construction (always expanding)",
          "300+ stores and counting",
          "Accessible via underwater tunnels from both districts"
        ]}
        theme="fancy"
      >
        <InsetBox title="RETAIL PARK OVERVIEW:">
          <Line cyan>• Location: Beneath Lake Gravel (between North/South Central)</Line>
          <Line cyan>• Size: 15 city blocks (underwater)</Line>
          <Line cyan>• Stores: 300+ luxury retailers</Line>
          <Line cyan>• Status: Always expanding (construction never stops)</Line>
          <Line cyan>• Access: Underwater tunnels, submersible taxi service</Line>
        </InsetBox>
        <InsetBox title="NOTABLE STORES:">
          <Line neon>• Tulles&deVerte Flagship (celebrity fashion empire)</Line>
          <Line neon>• ChromeLux (premium cyberware boutique)</Line>
          <Line neon>• Spectral Banking Center (underwater branch)</Line>
          <Line neon>• The Aquarium Restaurant ($$$$)</Line>
          <Line neon>• Idol Coffins Pop-Up (changes location monthly)</Line>
          <Line neon>• 295+ other luxury retailers</Line>
        </InsetBox>
        <InsetBox title="UNIQUE FEATURES:">
          <Line yellow>• Floor-to-ceiling aquarium walls (Lake Gravel visible)</Line>
          <Line yellow>• Holographic fish swimming through corridors</Line>
          <Line yellow>• Construction zones randomly close sections (always shifting)</Line>
          <Line yellow>• Premium oxygen filtration (better air than outside)</Line>
          <Line yellow>• Water leaks common but "adds to the ambiance"</Line>
        </InsetBox>
        <Line smoke small>
          Shopping as religion. Consume or be consumed. The construction never stops because
          capitalism never stops. Lake Gravel occasionally leaks through the ceiling.
        </Line>
      </PublicPortal>
    ),
  },


*/
