import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  DistrictPortal,
} from "@retcom";

import { KAYTELL_PLANT_COMMANDS } from "./kaytell_plant";
import { AST_PLANT_COMMANDS } from "./ast_plant";
import { ACGS_FACTORY_COMMANDS } from "./acgs_factory";

export const THE_INDUSTRIES_COMMANDS = {
  "The Industries": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke> · Toxic hellscape. Fume-spewing factories. Industry must feed Cy's eternal consumption.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="THE INDUSTRIES"
        districtId="INDUSTRIES-DISTRICT-01"
        tagline="Industry must feed Cy's eternal consumption"
        region="Industrial Zone, Northeast"
        corporatePresence="TOTAL"
        crimeThreat="HIGH"
        securityResponse="CORPORATE ONLY"
        atmosphere="Nightmarish industrial zones, gargantuan in scale, overflowing with poison and peril. The steel isle of Mosscroft reigns foulest — a toxic hellscape rivaling Central in size. Barbed wire labyrinths of fume-spewing factories and overtaxed power plants where the overworked and underpaid are herded like cattle until they break. Respirator mandatory."
        warnings={[
          "Air quality — respirator required at all times",
          "Western Mosscroft — chemical smog from Kaytell and ACGS plants",
          "Southern Mosscroft — AST biomatter processing, extreme odor and contamination",
          "Corporate security only — no public SecCorps presence",
        ]}
      >
        <InsetBox title="DOMINANT CORPS:">
          <Line neon>• Kaytell Makers — Chemical textile plant, west Mosscroft</Line>
          <Line neon>• ACGS — Weapons factory, west Mosscroft</Line>
          <Line neon>• AST Endless Seas — Biomatter processing plant, south Mosscroft</Line>
        </InsetBox>

        <Line smoke small>
          Shifts run 24/7. The pay sucks and it's dangerous work. Most workers live on-site — the commute isn't bad if you never leave.
        </Line>
      </DistrictPortal>
    ),
    related_commands: {
      ...KAYTELL_PLANT_COMMANDS,
      ...ACGS_FACTORY_COMMANDS,
      ...AST_PLANT_COMMANDS,
    },
  },
};

export default THE_INDUSTRIES_COMMANDS;
