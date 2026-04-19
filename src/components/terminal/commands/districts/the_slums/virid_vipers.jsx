import Icons from '@utils/icons';
import { Line, NodePreview } from '@terminal/TerminalComponents';
import { FacilityPortal, RCDAlert } from "@terminal/retcomdevice";

export const VIRID_VIPERS_COMMANDS = {
  "Virid Vipers": {
    favicon: <Icons.Factory />,
    preview: (
      <NodePreview>
        <Line span smoke> · Major drug operation. South Cy and beyond. Council of the 10 Fangs.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="VIRID VIPERS"
        tagline="[FACILITY RECORD — PRIOR REGISTRATION: MOSSCROFT TEXTILE PROCESSING UNIT 4]"
        location="Bigmosse, South Cy"
        owner="[REGISTRATION LAPSED — LAST OWNER: KAYTELL MAKERS, 2047]"
        warnings={[
          "Building registration lapsed — no current legal owner on record",
          "Unauthorized occupancy — municipal enforcement pending (indefinitely)",
          "Armed personnel reported on perimeter",
        ]}
        theme="industrial"
      >
        <RCDAlert
          message="This is the Virid Vipers' primary base of operations. Old Kaytell processing plant, abandoned 2047, occupied shortly after."
          details={[
            "Led by the Council of the 10 Fangs — leadership structure unknown beyond that",
            "Drugs, security, combat enhancers — also courier services and entertainment",
            "Presence all over south Cy, minor branches in nearly every district",
            "At war with the Heirs of Kergoz",
          ]}
        />
      </FacilityPortal>
    ),
    related_commands: {
      // ...VIRID_VIPERS_INTERIOR_COMMANDS,
    },
  },
};

export default VIRID_VIPERS_COMMANDS;
