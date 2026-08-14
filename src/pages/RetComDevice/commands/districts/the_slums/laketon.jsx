import Icons from '@utils/icons';
import { Line, NodePreview } from '@retcom/RetComComponents';
import { DistrictPortal, RCDAlert } from "@retcom";

export const LAKETON_COMMANDS = {
  "Laketon": {
    favicon: <Icons.Pin />,
    preview: (
      <NodePreview>
        <Line span smoke> · Walls sodden with rot. G0 slurry. Nanomold in the water supply.</Line>
      </NodePreview>
    ),
    content: (
      <DistrictPortal
        districtName="LAKETON"
        districtId="SLUMS-LAKETON-01"
        tagline="The walls are sodden with rot."
        region="The Slums, South Cy — G0 border"
        corporatePresence="NONE"
        crimeThreat="EXTREME"
        securityResponse="NONE"
        atmosphere="Tainted slurry seeps out of G0 and causes nanomold outbreaks in the water supply. The walls are sodden with rot. Structural damage throughout. No SecCorps presence, no municipal response, no remediation on record."
        warnings={[
          "Water supply contaminated — nanomold outbreaks active",
          "Do not drink tap water",
          "G0 slurry seepage — structural damage widespread",
          "No SecCorps or emergency services",
        ]}
      >
        <RCDAlert
          message="Cynergy Water & Power has been aware of the Laketon contamination for years. No remediation scheduled."
          details={[
            "Boil advisory has been 'temporary' for over 18 months",
            "Cynergy's public statement attributes contamination to 'legacy infrastructure'",
          ]}
        />
      </DistrictPortal>
    ),
    related_commands: {},
  },
};

export default LAKETON_COMMANDS;
