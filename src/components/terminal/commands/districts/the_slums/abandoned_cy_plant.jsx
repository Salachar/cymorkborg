import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  FacilityPortal,
  RCDAlert,
} from "@terminal/retcomdevice";

export const CY_SANITATION_HQ_COMMANDS = {
  "Abandoned CY_Sanitation HQ": {
    favicon: <Icons.Warning />,
    preview: (
      <NodePreview>
        <Line span smoke> · Quarantined. Abandoned. Nano-infested. Nobody has checked on it in decades.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="CY_SANITATION HEADQUARTERS"
        tagline="Municipal waste management — operations transferred to subsidiary."
        location="Ports/Barnyard Fields border"
        owner="CY_Sanitation (DEFUNCT — operations transferred to corporate subsidiary)"
        warnings={[
          "QUARANTINE ZONE — Nano infestation confirmed",
          "Twenty-foot cement perimeter wall — building sheathed in industrial plastic",
          "No authorized entry — no inspection on record since quarantine",
          "Staff were not evacuated at time of quarantine",
        ]}
        theme="secure"
      >
        <RCDAlert
          message="CY_Sanitation's AI was offloaded to a corporate subsidiary after quarantine. The building has never been inspected. Staff remain inside."
          details={[
            "Three floors: basement (power generator, sewer regulators), lower offices, management offices",
            "Power offline since quarantine — mechanical locks only until generator is restored",
            "Paper records inside document the AI transfer — trail goes cold after subsidiary handoff",
          ]}
        />
      </FacilityPortal>
    ),
    related_commands: {
      // ...CY_SANITATION_INTERIOR_COMMANDS,
    },
  },
};

export default CY_SANITATION_HQ_COMMANDS;
