import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  FacilityPortal,
  PublicPortal,
  RCDAlert,
} from "@retcom";

export const TG_LABS_COMMANDS = {
  "TG Labs": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · Science Redefined. Showroom and warehouses. Orbital HQ.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="TG LABS"
        tagline="Science Redefined."
        location="Ports District"
        owner="TG Labs — Dr. Daevy, Lead Researcher"
        warnings={[
          "Private security on all TG Labs premises",
          "Warehouse access restricted to authorized personnel",
          "Showroom open to public — warehouse access separate",
        ]}
        theme="corporate"
      >
        <RCDAlert
          message="TG Labs' actual headquarters are orbital. What's in the Ports is the public face."
          details={[
            "Rumored G0 blacksites — unverified, no public records",
            "Dr. Daevy maintains personal residence in Galgbacken",
          ]}
        />
      </FacilityPortal>
    ),
    related_commands: {
      "TG Labs Experience Center": {
        favicon: <Icons.Bulletin />,
        preview: (
          <NodePreview>
            <Line span smoke> · Public showroom. Free tours. Science as spectacle.</Line>
          </NodePreview>
        ),
        content: (
          <PublicPortal
            name="TG LABS EXPERIENCE CENTER"
            tagline="Where impossibility ends."
            notes={[
              "Ports District showroom and public experience center",
              "Free tours of nano-engineering demonstrations",
              "Bio/Nano/med/gene/space tech on display",
              "Orbital research station applications available on-site",
            ]}
            theme="corporate"
          />
        ),
      },
    },
  },
};

export default TG_LABS_COMMANDS;
