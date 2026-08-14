import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  DistrictPortal,
} from "@retcom";

export const EDGES_COMMANDS = {
  "Edges": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke> · Outer fringe of the Hills. Where the luxury starts to thin.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="EDGES"
        districtId="HILLS-EDGES-01"
        tagline="Where the city ends and the money begins to run out"
        region="The Hills, Outer Fringe"
        corporatePresence="LOW"
        crimeThreat="LOW"
        securityResponse="STANDARD"
        atmosphere="The outer boundary of the Hills where the fortress villas thin out and the landscape opens toward the city below. Still gated, still surveilled, still wealthy by any measure — just not quite wealthy enough to matter up here."
        warnings={[
          "Still restricted access — not public territory",
          "Security lighter than inner Hills but present",
        ]}
      />
    ),
  },
};

export default EDGES_COMMANDS;
