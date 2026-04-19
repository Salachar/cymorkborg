import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  FacilityPortal,
  PublicPortal,
} from "@terminal/retcomdevice";

export const NEON_PILLAR_COMMANDS = {
  "The Neon Pillar": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · Tallest structure in North Central. Finance and faith in the same tower.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="THE NEON PILLAR"
        tagline="Casts a fluorescent sun upon the district"
        location="North Central, Central District"
        owner="Spectral FT Banks & Holdings"
        warnings={[
          "Armed SecCorps on all access points — Spectral FT contracted",
          "Fideistic Transformation recruiters operate on public floors",
          "All visitor biometrics logged on entry",
        ]}
        theme="corporate"
      />
    ),
    related_commands: {
      "Spectral FT Banks & Holdings": {
        favicon: <Icons.Wallet />,
        preview: (
          <NodePreview>
            <Line span smoke> · Financial services. Real estate. Infrastructure. They own your debt.</Line>
          </NodePreview>
        ),
        content: (
          <PublicPortal
            name="SPECTRAL FT BANKS & HOLDINGS"
            tagline="Building wealth. Building Cy. Building tomorrow."
            notes={[
              "HQ: The Neon Pillar, North Central",
              "CFO: Dr. Thaba Samson",
              "Strategic focus: medtech resources and lobbying",
              "Personal accounts require 5,000¤ minimum balance",
            ]}
            theme="fancy"
          />
        ),
      },

      "Fideistic Transformation": {
        favicon: <Icons.Church />,
        preview: (
          <NodePreview>
            <Line span smoke> · Corp-church. Eternal singularity. Upload your soul — success rates undisclosed.</Line>
          </NodePreview>
        ),
        content: (
          <PublicPortal
            name="FIDEISTIC TRANSFORMATION"
            tagline="Ascend. Persist. Transcend."
            notes={[
              "Megatemple: The Neon Pillar, North Central",
              "Hiero-Confessor: Selva Ergene",
              "Protomartyr: Warad-Ishtar",
              "Free neural scan — first session complimentary",
              "Upload success rates and ego continuance not publicly disclosed",
              "Members make up an inappropriate number of Cy-rage victims",
            ]}
            theme="party"
          />
        ),
      },
    },
  },
};
