import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  KeyValue,
  Warning,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  CorpAd,
  FacilityPortal,
  RCDAlert,
} from "@retcom";

export const ALLIANSEN_HQ_COMMANDS = {
  // "Alliansen Inc.": {
  //   favicon: <Icons.Tower />,
  //   preview: (
  //     <NodePreview>
  //       <Line span smoke> · Dominant megacorp. South Central. Real estate, security, everything.</Line>
  //     </NodePreview>
  //   ),
  //   content: (
  //     <FacilityPortal
  //       companyName="ALLIANSEN INC."
  //       tagline="Securing tomorrow."
  //       location="South Central, Central District"
  //       owner="Alliansen Inc. — Mrs. Lia, President of the Board"
  //       warnings={[
  //         "Alliansen private security on all floors",
  //         "Behavioral analytics active in all public-facing areas",
  //         "No unauthorized access — immediate response",
  //       ]}
  //       theme="corporate"
  //     >
  //       <RCDAlert
  //         message="Alliansen controls most of the Borghold prison complex and leases security infrastructure to half of Cy's SecCorps. They are at war with UCS."
  //         details={[
  //           "Primary sectors: real estate, security, entertainment, behavioral analytics, voting, research",
  //           "The war with UCS plays out through SecCorps proxy contracts across the city",
  //           "Mrs. Lia maintains personal residence in Galgbacken",
  //         ]}
  //       />
  //     </FacilityPortal>
  //   ),
  //   related_commands: {
  //     // ...ALLIANSEN_INTERIOR_COMMANDS,
  //   },
  // },
  "Alliansen Inc.": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · Dominant megacorp. South Central. Real estate, security, everything.</Line>
      </NodePreview>
    ),
    content: (
      <CorpAd
        corp="ALLIANSEN INC."
        slogan="Securing Tomorrow"
        tagline="Security. Analytics. Control."
        products={[
          "Private Security Forces",
          "Behavioral Analytics & Prediction",
          "Real Estate Development",
          "Entertainment Complexes",
        ]}
        cta="TRUST IN STRUCTURE. TRUST IN US."
        theme="corporate"
      >
        <Line neon>Welcome to Alliansen corporate network</Line>
        <Line cyan>[PUBLIC ACCESS]</Line>
        <InsetBox title="ABOUT ALLIANSEN:">
          <Line neon>Real estate, security, entertainment, behavioral analytics, voting, research</Line>
          <Line neon>Leasing infrastructure to half of Cy's SecOps divisions</Line>
          <Line neon>Controls most of the Borghold prison complex</Line>
          <Line neon>President of the Board: Mrs. Lia</Line>
        </InsetBox>
        <InsetBox title="FEATURED PROPERTIES:">
          <Line cyan>→ Luxury apartments in South Central (starting at 50,000¤/month)</Line>
          <Line cyan>→ Commercial space in the Ports (SecOps-protected zones)</Line>
          <Line cyan>→ Entertainment venues (turnkey operations available)</Line>
        </InsetBox>
        <InsetBox title="SECURITY SERVICES:">
          <Line yellow>Premium SecOps contracts available</Line>
          <Line yellow>Behavioral analytics for workplace optimization</Line>
          <Line yellow>Surveillance infrastructure (turnkey solutions)</Line>
        </InsetBox>
        <InsetBox title="ON SITE: ALLIANSEN HQ">
          <Line neon>South Central, Central District</Line>
          <Line yellow>Alliansen private security on all floors</Line>
          <Line yellow>Behavioral analytics active in all public-facing areas</Line>
          <Line yellow>No unauthorized access — immediate response</Line>
        </InsetBox>
        <RCDAlert
          message="Alliansen controls most of the Borghold prison complex and leases security infrastructure to half of Cy's SecCorps. They are at war with UCS."
          details={[
            "The war with UCS plays out through SecCorps proxy contracts across the city",
            "Mrs. Lia maintains personal residence in Galgbacken",
          ]}
        />
        <Line pink>"Building tomorrow's Cy, one district at a time."</Line>
      </CorpAd>
    ),
  },
};

export default ALLIANSEN_HQ_COMMANDS;
