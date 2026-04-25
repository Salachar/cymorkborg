import Icons from '@utils/icons';
import { Line, NodePreview } from '@terminal/TerminalComponents';
import { DistrictPortal, RCDAlert } from "@terminal/retcomdevice";

import { CY_SANITATION_HQ_COMMANDS } from './abandoned_cy_plant';

export const BARNYARD_FIELDS_COMMANDS = {
  "Barnyard Fields": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke br> · Slums at the southern edge. The Heirs own this ground in blood and ritual.</Line>
        <Line span yellow> · CY_Sanitation HQ</Line> — quarantined.
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="BARNYARD FIELDS"
        districtId="SLUMS-BARNYARD-01"
        tagline="Stained red in the name of the two-headed daemon."
        region="The Slums, South Cy"
        corporatePresence="NONE"
        crimeThreat="EXTREME"
        securityResponse="NONE"
        atmosphere="Large parts of Barnyard Fields pay tribute to the Heirs of Kergoz. The district bears the marks of ongoing Nanomantic ritual activity. No municipal presence. No SecCorps. No remediation."
        warnings={[
          "Heirs of Kergoz control this area",
          "Nanomantic activity reported throughout",
          "No SecCorps — no recovery if something goes wrong",
          "Active conflict with Virid Vipers — crossfire risk at all times",
        ]}
      >
        <RCDAlert
          message="The Heirs of Kergoz are not a gang. They are a death cult worshipping two-headed alien daemons. They are at war with the Virid Vipers and losing is not something they consider possible."
          details={[
            "The horde: corrupted, masked, nameless",
            "Ideology: harbingers of the end, saviours of the Nano-infested",
            "Black sacraments and Nanomantic blood rites conducted openly",
          ]}
        />
      </DistrictPortal>
    ),
    related_commands: {
      ...CY_SANITATION_HQ_COMMANDS,
    },
  },
};

export default BARNYARD_FIELDS_COMMANDS;
