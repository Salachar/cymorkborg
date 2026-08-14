import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  PublicPortal,
  RCDAlert,
} from "@retcom";

import { AQUACULTURE_MAZE_COMMANDS } from './aquaculture_maze';
import { LAKE_GRAVEL_COMMANDS } from './lake_gravel';
import { CYNERGY_PLANTS_COMMANDS } from './cynergy_plants';
import { OLD_CY_COMMANDS } from './old_cy';
import WATERWAYS_NEARBY_COMMANDS from './waterways_nearby';

export const WATERWAYS_COMMANDS = {
  "Waterways": {
    favicon: <Icons.Water />,
    preview: (
      <NodePreview>
        <Line span smoke> · Canals, lakes, and sea access. The city's veins.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="CY WATERWAYS"
        tagline="The city's veins — pumping acidic waters, fetid waste, and commerce."
        notes={[
          "Canal network connects all major districts — taxi boats, market barges, supertankers",
          "Aquaculture cage maze controls sea access — heavily patrolled",
          "Water not potable — Cynergy filtered tiers required for consumption",
          "Canal water contact not advised — contamination risk throughout",
        ]}
        theme="casual"
      >
        <RCDAlert
          message="The canal network is how the city moves things it doesn't want tracked. Smuggling routes active throughout."
          details={[
            "Fatberg accumulation slows transit in southern canals regularly",
            "Floating homes and market barges operate without fixed registration in many areas",
          ]}
        />
      </PublicPortal>
    ),
    related_commands: {
      ...WATERWAYS_NEARBY_COMMANDS,
      ...AQUACULTURE_MAZE_COMMANDS,
      ...LAKE_GRAVEL_COMMANDS,
      ...CYNERGY_PLANTS_COMMANDS,
      ...OLD_CY_COMMANDS,
    },
  },
};

export default WATERWAYS_COMMANDS;
