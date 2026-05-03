import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  DistrictPortal,
  RCDAlert,
  PublicPortal,
} from "@terminal/retcomdevice"

// import { ROYAL_WEST_COMMANDS } from './royal_west';
// import { TG_LABS_SHOWROOM_COMMANDS } from './tg_labs_showroom';
// import { IDOL_COFFINS_COMMANDS } from './idol_coffins';
import { ALLIANSEN_WAREHOUSE_COMMANDS } from './alliansen_warehouse';
import { TG_LABS_COMMANDS } from './tg_labs';
import { ROYAL_WEST_COMMANDS } from './royal_west';
import { IRON_VAULT_STORAGE_COMMANDS } from './iron_vaults';

export const PORTS_DISTRICT_COMMANDS = {
  "Ports": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke> · Air, sea, space access. Drugs and guns, clubs and fun.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="PORTS"
        districtId="PORTS-DISTRICT-01"
        tagline="Air, sea, and space access. The illusion of escape."
        region="North Cy, coastal and transit zone"
        corporatePresence="MODERATE"
        crimeThreat="HIGH"
        securityResponse="MINIMAL"
        atmosphere="A labyrinthine universe of steel, concrete, and abandoned warehouses offering access to air, sea, and space. The entertainment district of Cy's true citizens — drugs and guns, clubs and fun. Corps, mobs, VIP-celebs and street gangs vie for dominance, their gunfights drowned out only by the hedonism on display. Royal West Shipping controls the largest warehouses. Nobody challenges them."
        warnings={[
          "High criminal activity — gang and corporate conflict ongoing",
          "SecCorps presence minimal — response times unpredictable",
          "Firearms discharge reported regularly",
        ]}
      >
        <InsetBox title="DOMINANT PRESENCE:">
          <Line neon>• Royal West Shipping Co — largest warehouses, HQ here</Line>
          <Line neon>• Idol Coffins — rock-star themed pop-up hotels, rotating locations</Line>
          <Line neon>• TG Labs — showroom and experience center</Line>
        </InsetBox>

        <RCDAlert
          message="SecCorps response in the Ports is negotiable. Bribes keep the cameras pointed elsewhere."
          details={[
            "Black market imports active — goods from outside Cy available if you know where to look",
          ]}
        />
      </DistrictPortal>
    ),
    related_commands: {
      // ...ROYAL_WEST_COMMANDS,
      // ...TG_LABS_SHOWROOM_COMMANDS,
      // ...IDOL_COFFINS_COMMANDS,
      ...ALLIANSEN_WAREHOUSE_COMMANDS,
      ...TG_LABS_COMMANDS,
      ...ROYAL_WEST_COMMANDS,
      ...IRON_VAULT_STORAGE_COMMANDS,

      "Idol Coffins Pop-Up Hotel": {
        favicon: <Icons.Hotel />,
        content: (
          <PublicPortal
            name="IDOL COFFINS"
            tagline="Sleep like a rock star. Wake up like a legend."
            notes={[
              "Theme changes monthly (currently: 'Chrome Idol' aesthetic)",
              "Located near hottest clubs (moves with trends)",
              "Instagram-ready interiors guaranteed",
              "Check-in: 15:00 | Check-out: 11:00"
            ]}
            theme="party"
          >
            <InsetBox title="ROOM RATES (Per Night):">
              <Line neon>• Coffin Pod (solo): 80¤</Line>
              <Line neon>• Double Coffin (couple): 120¤</Line>
              <Line neon>• VIP Suite ("Backstage Pass"): 250¤</Line>
              <Line pink>• Party Package (4 pods + lounge): 400¤</Line>
            </InsetBox>
            <InsetBox title="AMENITIES:">
              <Line cyan>✦ Themed interiors (rock star aesthetic)</Line>
              <Line cyan>✦ Premium sound systems in every pod</Line>
              <Line cyan>✦ Complimentary energy drinks & stimulants</Line>
              <Line cyan>✦ Rooftop party deck (21:00-03:00)</Line>
              <Line cyan>✦ Photo-op stations throughout</Line>
            </InsetBox>
            <Line smoke small>
              "Pop-up locations change with the scene. This month: 3 blocks from Cave Club.
              Next month: Wherever the music takes us."
            </Line>
          </PublicPortal>
        ),
      },
    },
  },
};

export default PORTS_DISTRICT_COMMANDS;
