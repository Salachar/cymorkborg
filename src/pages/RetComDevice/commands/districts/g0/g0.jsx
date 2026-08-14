import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  DistrictPortal,
} from "@retcom";

export const G0_COMMANDS = {
  "G0": {
    favicon: <Icons.Alert />,
    preview: (
      <NodePreview>
        <Line span smoke> · Quarantine zone. Do not approach the wall. Trespassers will not be recovered.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="G0"
        districtId="GROUND-ZERO-QUARANTINE"
        tagline="This is where the rock fell. Where the bombs dropped."
        region="City Center — Permanent Quarantine Zone"
        corporatePresence="NONE"
        crimeThreat="CRITICAL"
        securityResponse="NONE"
        atmosphere="A post-apocalyptic quagmire behind a massive wall monitored by auto-turrets and armed drones. Most of the area is waterlogged scrap and warped steel — but some of the oldest, medieval parts of Cy still stand. Entering without proper protection is a death sentence. If the Nanophreaks, nerve gas or radioactive dust don't kill you, whatever makes THAT NOISE at night will."
        warnings={[
          "QUARANTINE ZONE — authorized entry only",
          "Nanophreaks — hostile, numerous, unpredictable",
          "Nerve gas pockets — no visual warning",
          "Radioactive dust — protection required at all times",
          "Auto-turrets on perimeter — no challenge issued",
        ]}
      >
        <InsetBox title="WHO GOES IN:">
          <Line neon>• Scrapheads — antique junk, pre-Incident artifacts</Line>
          <Line neon>• Smugglers — running goods through the old tunnels</Line>
          <Line neon>• Cultists — seeking profane truth in the ruins</Line>
          <Line neon>• Scientists — looking to profiteer from the fallout</Line>
        </InsetBox>

        <Line smoke small>
          One door on the G0 bulwark allegedly leads to My Wall — an underground killclub and music venue. The Terpischore Sisters use it as a forward base for their enclave deep beneath Old Cy.
        </Line>
      </DistrictPortal>
    ),
    related_commands: {
      // ...MY_WALL_COMMANDS,
    },
  },
};

export default G0_COMMANDS;
