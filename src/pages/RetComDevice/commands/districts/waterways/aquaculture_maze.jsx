import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  FacilityPortal,
  RCDAlert,
} from "@retcom";

export const AQUACULTURE_MAZE_COMMANDS = {
  "Aquaculture Cage Maze": {
    favicon: <Icons.Water />,
    preview: (
      <NodePreview>
        <Line span smoke> · Sea access chokepoint. Heavily patrolled. All maritime transit monitored.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="AQUACULTURE CAGE MAZE"
        tagline="Cy's archipelagic outlet."
        location="Eastern waterways, sea access zone"
        owner="Multiple — Cynergy Water & Power Co, Royal West Shipping Co"
        warnings={[
          "All maritime transit routed through this zone — no bypass available",
          "Heavily patrolled — armed vessels on continuous rotation",
          "Unauthorized vessels subject to immediate interdiction",
          "Aquaculture cage network extends several kilometers — navigation hazard",
        ]}
        theme="corporate"
      >
        <RCDAlert
          message="Every ship entering or leaving Cy by sea passes through here. Cynergy and Royal West both have eyes on every vessel."
          details={[
            "Beyond the maze: trackless open water — oil rig graveyards, glitching holobeacons, drifting plastic continents",
            "The open sea beyond actively discourages navigation — holobeacons are not navigation aids, they lure ships off course",
          ]}
        />
      </FacilityPortal>
    ),
    related_commands: {},
  },
};

export default AQUACULTURE_MAZE_COMMANDS;
