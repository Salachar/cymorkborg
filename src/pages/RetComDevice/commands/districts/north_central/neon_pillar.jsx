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
  PublicPortal,
} from "@retcom";

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
      // "Spectral FT Banks & Holdings": {
      //   favicon: <Icons.Wallet />,
      //   preview: (
      //     <NodePreview>
      //       <Line span smoke> · Financial services. Real estate. Infrastructure. They own your debt.</Line>
      //     </NodePreview>
      //   ),
      //   content: (
      //     <PublicPortal
      //       name="SPECTRAL FT BANKS & HOLDINGS"
      //       tagline="Building wealth. Building Cy. Building tomorrow."
      //       notes={[
      //         "HQ: The Neon Pillar, North Central",
      //         "CFO: Dr. Thaba Samson",
      //         "Strategic focus: medtech resources and lobbying",
      //         "Personal accounts require 5,000¤ minimum balance",
      //       ]}
      //       theme="fancy"
      //     />
      //   ),
      // },
      "Spectral FT Banks & Holdings": {
        favicon: <Icons.Wallet />,
        preview: (
          <NodePreview>
            <Line span smoke> · Financial services. Real estate. Infrastructure. They own your debt.</Line>
          </NodePreview>
        ),
        content: (
          <CorpAd
            corp="SPECTRAL FT BANKS & HOLDINGS"
            slogan="Your Future, Financed"
            products={[
              "Personal & Corporate Banking",
              "Real Estate Investment",
              "Infrastructure Funding",
              "MedTech Financing Options",
            ]}
            cta="BUILD YOUR EMPIRE. WE'LL PROVIDE THE FOUNDATION."
            theme="gold"
          >
            <Line neon>Welcome to Spectral Financial Services</Line>
            <Line cyan>[ACCOUNT ACCESS]</Line>
            <InsetBox title="ABOUT SPECTRAL FT:">
              <Line neon>Financial services, real estate, infrastructure investment</Line>
              <Line neon>Headquarters in the Neon Pillar, North Central</Line>
              <Line neon>CFO: Dr. Thaba Samson</Line>
              <Line neon>Strategic focus: medtech resources and lobbying</Line>
            </InsetBox>
            <InsetBox title="FINANCIAL PRODUCTS:">
              <Line cyan>→ Personal checking accounts (minimum 5,000¤ balance)</Line>
              <Line cyan>→ High-yield savings (3% APY for balances over 50,000¤)</Line>
              <Line cyan>→ Investment portfolios (managed by AI advisors)</Line>
              <Line cyan>→ Real estate loans (competitive rates for qualified buyers)</Line>
            </InsetBox>
            <InsetBox title="CURRENT PROMOTIONS:">
              <Line yellow>New account bonus: 100¤ credit (terms apply)</Line>
              <Line yellow>Referral program: Earn 50¤ per new customer</Line>
              <Line yellow>Premium tier: Waived fees for 100,000¤+ accounts</Line>
            </InsetBox>
            <Line pink>"Building wealth. Building Cy. Building tomorrow."</Line>
          </CorpAd>
        ),
      },

      // "Fideistic Transformation": {
      //   favicon: <Icons.Church />,
      //   preview: (
      //     <NodePreview>
      //       <Line span smoke> · Corp-church. Eternal singularity. Upload your soul — success rates undisclosed.</Line>
      //     </NodePreview>
      //   ),
      //   content: (
      //     <PublicPortal
      //       name="FIDEISTIC TRANSFORMATION"
      //       tagline="Ascend. Persist. Transcend."
      //       notes={[
      //         "Megatemple: The Neon Pillar, North Central",
      //         "Hiero-Confessor: Selva Ergene",
      //         "Protomartyr: Warad-Ishtar",
      //         "Free neural scan — first session complimentary",
      //         "Upload success rates and ego continuance not publicly disclosed",
      //         "Members make up an inappropriate number of Cy-rage victims",
      //       ]}
      //       theme="party"
      //     />
      //   ),
      // },
      "Fideistic Transformation": {
        favicon: <Icons.Church />,
        preview: (
          <NodePreview>
            <Line span smoke> · Corp-church. Eternal singularity. Upload your soul — success rates undisclosed.</Line>
          </NodePreview>
        ),
        content: (
          <CorpAd
            corp="FIDEISTIC TRANSFORMATION"
            slogan="Upgrade Your Soul™"
            tagline="Ascend. Persist. Transcend."
            products={[
              "Neural Interfaces - Direct Divine Connection",
              "Spiritual Cybernetics - Faith Enhanced",
              "Ego Enhancement - Become More",
              "Transcendence Packages - Eternal Life*",
            ]}
            cta="The Divine Is Just A Download Away"
            theme="purple"
          >
            <Line neon>Welcome to the Path of Transformation</Line>
            <Line cyan>[SEEKER ACCESS]</Line>
            <InsetBox title="ABOUT THE CHURCH:">
              <Line neon>Religion, cerebral interfaces, egotech, medtech</Line>
              <Line neon>Megatemple in the Neon Pillar, North Central</Line>
              <Line neon>Promise of eternal singularity through mind-upload</Line>
              <Line neon>Hiero-Confessor: Selva Ergene</Line>
              <Line neon>Protomartyr: Warad-Ishtar</Line>
            </InsetBox>
            <InsetBox title="SERVICES OFFERED:">
              <Line cyan>→ Free personality scans (first session complimentary)</Line>
              <Line cyan>→ Ego-mapping consultations (determine upload readiness)</Line>
              <Line cyan>→ Neural interface installations (certified technicians)</Line>
              <Line cyan>→ Transformation ceremonies (packages starting at 5,000¤)</Line>
            </InsetBox>
            <InsetBox title="TESTIMONIALS:">
              <Line pink>"I feel closer to divinity every day." - Anonymous Devotee</Line>
              <Line pink>"My consciousness expanded beyond flesh." - Former Executive</Line>
              <Line pink>"The upload changed everything." - [DATA CORRUPTED]</Line>
            </InsetBox>
            <Warning>Upload success rates and ego continuance results not publicly disclosed</Warning>
            <Line smoke>Members make up an inappropriate number of Cy-rage victims.</Line>
            <Line yellow>"Transcend the meat. Embrace eternity."</Line>
          </CorpAd>
        ),
      },
    },
  },
};
