import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  DistrictPortal,
} from "@terminal/retcomdevice";

import { BIGMOSSE_COMMANDS } from './bigmosse/bigmosse';
import { BARNYARD_FIELDS_COMMANDS } from './barnyard_fields/barnyard_fields';
import { VIRID_VIPERS_COMMANDS } from './virid_vipers';
import { LILYPOND_COMMANDS } from './lilypond';
import { LAKETON_COMMANDS } from './laketon';

export const THE_SLUMS_COMMANDS = {
  "The Slums": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke> · G0 scars. Gang wars. Cults. Honest people dreaming of a different future.</Line>
        <Line span smoke br> · Bigmosse · Lilypond · Laketon · Barnyard Fields</Line>
        <Line span yellow> · Lucky Flight Casino · CY_Sanitation HQ</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="THE SLUMS"
        districtId="SLUMS-DISTRICT-01"
        tagline="The city remembers the Incident. So do the walls."
        region="South Cy, bordering G0"
        corporatePresence="NONE"
        crimeThreat="EXTREME"
        securityResponse="NONE"
        atmosphere="Everything near G0 bears visible scars from the Incident — buildings and people alike. Festering scabs, scorch marks, psychic shock and things more sinister. Gangs fight the cults, cults fight the militias. You'll find most things here: honest but broken people, underground shadow markets, hole-in-the-wall reaperdoc clinics that may fix you up or harvest your organs."
        warnings={[
          "No SecCorps presence — no response, no protection",
          "Active gang war — Virid Vipers vs Heirs of Kergoz",
          "G0 contamination seepage — nanomold outbreaks common",
          "Cult activity throughout — avoid unsolicited invitations",
        ]}
      >
        <InsetBox title="DISTRICTS:">
          <Line neon>• Bigmosse — Virid Vipers and Heirs of Kergoz turf war epicenter</Line>
          <Line neon>• Lilypond — armed vigilante brigades, self-enforced borders</Line>
          <Line neon>• Laketon — nanomold outbreaks, G0 slurry seeping through walls</Line>
          <Line neon>• Barnyard Fields — Heirs of Kergoz territory, Nanomantic blood rites</Line>
        </InsetBox>
      </DistrictPortal>
    ),
    related_commands: {
      ...BIGMOSSE_COMMANDS,
      ...BARNYARD_FIELDS_COMMANDS,
      ...VIRID_VIPERS_COMMANDS,
      ...LILYPOND_COMMANDS,
      ...LAKETON_COMMANDS,
    },
  },
};

export default THE_SLUMS_COMMANDS;
