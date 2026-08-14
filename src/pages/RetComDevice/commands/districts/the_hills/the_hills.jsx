import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  DistrictPortal,
} from "@retcom";

import { GALGBACKEN_COMMANDS } from './galgbacken';
import { OAK_ISLES_COMMANDS } from './oak_isles';
import { EDGES_COMMANDS } from './edges';

export const THE_HILLS_COMMANDS = {
  "The Hills": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke> · Gates upon gates. Fortress villas. The higher you climb, the tighter the security.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="THE HILLS"
        districtId="HILLS-DISTRICT-01"
        tagline="The higher you climb, the greater the luxury"
        region="Western Cy, above the urban expanse"
        corporatePresence="PRIVATE"
        crimeThreat="LOW"
        securityResponse="IMMEDIATE"
        atmosphere="Locked safely behind gates upon gates, the hills and valleys away from the Ports and Central crawl with fortress-like villas and mansions swallowed by private parks and frivolous splendor. Every unfamiliar face tracked and rendered in a panopticon of surveillance feeds. Officially, there is no crime here. The SecCorps are paid well for their discretion — and their brutality."
        warnings={[
          "No public access — invitation or residence only",
          "Blanket surveillance — all faces logged on entry",
          "SecCorps response immediate — no warning issued",
        ]}
      >
        <InsetBox title="DISTRICTS:">
          <Line neon>• Galgbacken — old money, Cy's most powerful residents</Line>
          <Line neon>• Oak Isles — new occult structures, no public records of ownership</Line>
          <Line neon>• Edges — outer fringe of the Hills</Line>
        </InsetBox>
      </DistrictPortal>
    ),
    related_commands: {
      ...GALGBACKEN_COMMANDS,
      ...OAK_ISLES_COMMANDS,
      ...EDGES_COMMANDS,
    },
  },
};

export default THE_HILLS_COMMANDS;
