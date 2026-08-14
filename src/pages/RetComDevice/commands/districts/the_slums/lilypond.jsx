import Icons from '@utils/icons';
import { Line, NodePreview } from '@retcom/RetComComponents';
import { DistrictPortal } from "@retcom";

export const LILYPOND_COMMANDS = {
  "Lilypond": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke> · Armed vigilante brigades. Self-enforced peace. Outsiders unwelcome.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="LILYPOND"
        districtId="SLUMS-LILYPOND-01"
        tagline="Their idea of peace. Their gun to enforce it."
        region="The Slums, South Cy"
        corporatePresence="NONE"
        crimeThreat="HIGH"
        securityResponse="VIGILANTE"
        atmosphere="Lilypond secures its borders at the barrel of a gun. Armed citizen vigilante brigades enforce their own idea of peace. One of the more stable parts of the Slums, which is not the same as safe."
        warnings={[
          "No official SecCorps — armed civilian enforcement only",
          "Outsiders challenged on entry — have a reason to be here",
          "Rules enforced at the discretion of local brigades",
        ]}
      />
    ),
    related_commands: {},
  },
};

export default LILYPOND_COMMANDS;
