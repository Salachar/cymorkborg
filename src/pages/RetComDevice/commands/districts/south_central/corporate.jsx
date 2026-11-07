import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  KeyValue,
  Warning,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  Node,
  CorpAd,
  PublicPortal,
  FacilityPortal,
  PersonnelFile,
  CoffeeMachine,
} from "@retcom"

export const GOLDEN_SPIRE_COMMANDS = {
  "The Golden Spire": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · Gravf/Mellberg/Tosk HQ. No paying client of theirs ever goes to Borghold.</Line>
      </NodePreview>
    ),
    content: (
      <CorpAd
        corp="GRAVF/MELLBERG/TOSK"
        slogan="No Paying Client Goes to Borghold"
        tagline="Corporate law. Criminal defense. Results guaranteed."
        products={[
          "Corporate Legal Services",
          "Criminal Defense (All Charges)",
          "Contract Negotiation & Review",
          "Risk Management Consulting",
        ]}
        cta="When The Law Isn't On Your Side, We Are."
        theme="sleek"
      >
        <Line neon>Accessing legal services portal...</Line>
        <Line cyan>[CONSULTATION REQUIRED]</Line>
        <InsetBox title="ABOUT THE FIRM:">
          <Line neon>Premier corporate law firm, established 2044</Line>
          <Line neon>Headquartered in The Golden Spire, South Central</Line>
          <Line neon>Specialties: Corporate law, criminal defense, contract disputes</Line>
          <Line neon>Motto: "No paying client of ours ever goes to Borghold"</Line>
          <Line yellow>Track record: 94% acquittal rate for criminal cases</Line>
        </InsetBox>
        <InsetBox title="LEGAL SERVICES:">
          <Line cyan>→ Corporate representation (mergers, acquisitions, disputes)</Line>
          <Line cyan>→ Criminal defense (white-collar, violent crimes, all charges)</Line>
          <Line cyan>→ Contract law (review, negotiation, breach litigation)</Line>
          <Line cyan>→ Regulatory compliance (corp law, environmental, labor)</Line>
          <Line cyan>→ Risk management consulting (pre-emptive legal strategy)</Line>
          <Line cyan>→ Litigation support (trial preparation, expert witnesses)</Line>
        </InsetBox>
        <InsetBox title="RETAINER PACKAGES:">
          <KeyValue label="Basic consultation" value="500¤ (1 hour)" />
          <KeyValue label="Standard retainer" value="5,000¤/month" />
          <KeyValue label="Premium retainer" value="20,000¤/month" />
          <KeyValue label="Crisis response" value="50,000¤+ (immediate deployment)" />
          <Line yellow>Payment plans available for qualified clients</Line>
          <Line red>Corporate accounts receive priority scheduling</Line>
        </InsetBox>
        <InsetBox title="RECENT VICTORIES:">
          <Line pink>→ ACGS v. Alliansen Inc. - Contract upheld, 12M¤ settlement</Line>
          <Line pink>→ Executive murder trial - Full acquittal (self-defense)</Line>
          <Line pink>→ Kaytell regulatory violation - Charges dismissed</Line>
          <Line pink>→ UCS weapons trafficking - Reduced to misdemeanor fine</Line>
        </InsetBox>
        <InsetBox title="OUR ATTORNEYS:">
          <Line neon>Senior Partner: Ms. Gravf (Corporate law, 45 years)</Line>
          <Line neon>Senior Partner: Mr. Mellberg (Criminal defense, 38 years)</Line>
          <Line neon>Senior Partner: Dr. Tosk (Contract law, 42 years)</Line>
          <Line cyan>+ 47 associate attorneys across all specialties</Line>
        </InsetBox>
        <InsetBox title="ON SITE: THE GOLDEN SPIRE">
          <Line neon>South Central, Central District</Line>
          <Line yellow>Private security on all floors — GMT contracted</Line>
          <Line yellow>Visitor access by appointment only — no walk-ins</Line>
          <Line yellow>All communications within the building legally privileged</Line>
        </InsetBox>
        <Warning>Legal advice is attorney-client privileged and confidential</Warning>
        <Line pink>"When the stakes are high, we don't lose."</Line>
      </CorpAd>
    ),
    related_commands: {
      "Reception Area": {
        favicon: <Icons.Atrium />,
        content: (
          <Node
            title="[RECEPTION - FLOOR 18]"
            notes={[
              "Marble floors, leather furniture",
              "Armed security guard at desk",
              "All visitors must sign in (names logged)",
              "Magazines: Luxury Living, Corporate Law Review, KILL!KILL!KILL!"
            ]}
          >
            <InsetBox title="SECURITY MEASURES:">
              <Line red>• Metal detector at entrance</Line>
              <Line red>• Armed guard (24/7 presence)</Line>
              <Line red>• Biometric elevator access to upper floors</Line>
              <Line red>• Panic buttons at reception desk</Line>
              <Line red>• Direct line to UCS SecCorps (2-minute response)</Line>
            </InsetBox>
          </Node>
        ),
      },
      "Internal Access": {
        favicon: <Icons.LAN />,
        content: (
          <Node
            title="Gravf|Mellberg|Tosk Law Offices"
          />
        ),
        related_commands: {
          "Personnel File - Marcus Grave": {
            favicon: <Icons.Person />,
            content: (
              <PersonnelFile
                employeeId="GMT-PARTNER-001"
                name="Marcus Grave"
                age={58}
                position="Senior Partner"
                department="Criminal Defense Division"
                supervisor="Managing Partner"
                clearanceLevel={5}
                district="South Central (lives in The Hills)"
                emergencyContact="Private security detail"
                performance={98}
                notes={[
                  "Former prosecutor - switched sides after scandal",
                  "Win rate: 98% (highest in firm history)",
                  "Specialization: Making murder charges vanish",
                  "Known for: Destroying prosecution witnesses on stand",
                  "Connections: Every judge, half the SecCorps captains",
                  "Rumored: Keeps evidence disposal team on retainer",
                  "Warning: Do NOT cross him - witnesses tend to disappear"
                ]}
                status="ACTIVE"
              />
            ),
          },
        }
      },
      "Coffee Machine": {
        favicon: <Icons.CoffeeMachine />,
        content: (
          <CoffeeMachine />
        ),
      },
    },
  },
};

export const CITADEL_TOWER_COMMANDS = {
  // "Citadel Tower": {
  //   favicon: <Icons.Tower />,
  //   preview: (
  //     <NodePreview>
  //       <Line span smoke> · UCS HQ. At war with Alliansen. Outfitting most of Cy's SecCorps.</Line>
  //     </NodePreview>
  //   ),
  //   content: (
  //     <FacilityPortal
  //       companyName="CITADEL TOWER"
  //       tagline="When safety matters, trust UCS."
  //       location="South Central, Central District"
  //       owner="United Citadel Security"
  //       warnings={[
  //         "UCS armed personnel on all floors",
  //         "No public access — authorized personnel only",
  //         "Active corporate conflict with Alliansen Inc. — avoid cross-fire",
  //         "Automated weapon platforms on perimeter",
  //       ]}
  //       theme="secure"
  //     />
  //   ),
  // },
  "Citadel Tower": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · UCS HQ. At war with Alliansen. Outfitting most of Cy's SecCorps.</Line>
      </NodePreview>
    ),
    content: (
      <CorpAd
        corp="UNITED CITADEL SECURITY"
        slogan="Strength Through Defense"
        tagline="When safety matters, trust UCS."
        products={[
          "Military-Grade Weaponry",
          "Combat Enhancement Systems",
          "Corporate Protection Services",
          "Automated Defense Platforms",
        ]}
        cta="WHEN ALLIANSEN ISN'T ENOUGH"
        theme="sleek"
      >
        <Line neon>Accessing UCS corporate network...</Line>
        <Line cyan>[PUBLIC ACCESS]</Line>
        <InsetBox title="ABOUT UCS:">
          <Line neon>Security, weapontech, combat enhancers</Line>
          <Line neon>Headquarters in Citadel Tower, South Central</Line>
          <Line neon>Outfitting most of Cy's SecOps divisions</Line>
        </InsetBox>
        <InsetBox title="SECURITY SOLUTIONS:">
          <Line cyan>→ Personal protection services (armed detail available)</Line>
          <Line cyan>→ Home security systems (AI-monitored, armed response)</Line>
          <Line cyan>→ Corporate security contracts (customizable threat levels)</Line>
          <Line cyan>→ Automated weapon platforms (residential & commercial)</Line>
        </InsetBox>
        <InsetBox title="LATEST PRODUCTS:">
          <Line yellow>NEW: Sentinel™ Auto-Turret (home defense edition)</Line>
          <Line yellow>NEW: Guardian™ Combat Enhancer (legal for licensed security)</Line>
          <Line yellow>COMING SOON: Aegis™ Personal Shield Generator</Line>
        </InsetBox>
        <InsetBox title="ON SITE: CITADEL TOWER">
          <Line neon>South Central, Central District</Line>
          <Line yellow>UCS armed personnel on all floors</Line>
          <Line yellow>No public access — authorized personnel only</Line>
          <Line yellow>Automated weapon platforms on perimeter</Line>
        </InsetBox>
        <Line red>Currently engaged in corporate conflict with Alliansen Inc. — avoid cross-fire.</Line>
        <Line pink>"When safety matters, trust UCS."</Line>
      </CorpAd>
    ),
  },
};

export const TULLES_DEVERTE_COMMANDS = {
  // "Tulles&deVerte": {
  //   favicon: <Icons.Nightlife />,
  //   preview: (
  //     <NodePreview>
  //       <Line span smoke> · Lifestyle empire. Feeds, drugs, fashion. Famous for being famous.</Line>
  //     </NodePreview>
  //   ),
  //   content: (
  //     <PublicPortal
  //       name="TULLES&DEVERTE"
  //       tagline="Everyone's watching. Are you worth it?"
  //       notes={[
  //         "Penthouse: South Central",
  //         "Clubs: Ports district",
  //         "Lawyer/fixer: Tomi 'Toad' Dian (Grave/Mellberg/Tosk)",
  //         "Angel investors — all the latest social platforms",
  //         "Secondary sectors: fashion, restaurants, weapontech, staffing",
  //       ]}
  //       theme="party"
  //     />
  //   ),
  // },
  "Tulles&deVerte": {
    favicon: <Icons.Nightlife />,
    preview: (
      <NodePreview>
        <Line span smoke> · Lifestyle empire. Feeds, drugs, fashion. Famous for being famous.</Line>
      </NodePreview>
    ),
    content: (
      <CorpAd
        corp="TULLES&DEVERTE"
        slogan="Live. Stream. Consume."
        tagline="Everyone's watching. Are you worth it?"
        products={[
          "Lifestyle Products & Feeds",
          "Entertainment & Nightlife",
          "Social Platform Investments",
          "Premium Drug Experiences",
        ]}
        cta="EVERYONE'S WATCHING. ARE YOU WORTH IT?"
        theme="neon"
      >
        <Line neon>Accessing celebrity lifestyle feed...</Line>
        <Line cyan>[PUBLIC ACCESS - ALL FEEDS]</Line>
        <InsetBox title="LATEST FROM T&D:">
          <Line pink>→ Just announced: Merger with mystery partner (reveal in 48hrs!)</Line>
          <Line pink>→ New fashion line dropping next week (pre-order now)</Line>
          <Line pink>→ Club opening in Ports (VIP list already at capacity)</Line>
          <Line pink>→ Exclusive interview: "Why we're better than you" (premium access)</Line>
        </InsetBox>
        <InsetBox title="TRENDING POSTS:">
          <Line neon>• Photo dump from our yacht party (47k likes)</Line>
          <Line neon>• Rate our matching chrome upgrades (89k comments)</Line>
          <Line neon>• New sponsorship deal announced (mystery corp)</Line>
        </InsetBox>
        <InsetBox title="LIFESTYLE PRODUCTS:">
          <Line cyan>T&D Signature Fragrance: 450¤</Line>
          <Line cyan>Limited Edition Sunglasses: 890¤</Line>
          <Line cyan>Energy Drink Collab: 15¤ per can</Line>
          <Line yellow>"Live like us. Buy like us. Be like us (but not really)."</Line>
        </InsetBox>
        <InsetBox title="THE EMPIRE:">
          <Line neon>Penthouse: South Central</Line>
          <Line neon>Clubs: Ports district</Line>
          <Line neon>Lawyer/fixer: Tomi 'Toad' Dian (Gravf/Mellberg/Tosk)</Line>
          <Line neon>Angel investors — all the latest social platforms</Line>
          <Line neon>Secondary sectors: fashion, restaurants, weapontech, staffing</Line>
        </InsetBox>
        <Line pink>"Subscribe to premium for exclusive behind-the-scenes content!"</Line>
      </CorpAd>
    ),
  },
};

export const ACGS_OFFICES_COMMANDS = {
  "ACGS Offices": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · AI, weapontech, insurance. Home of The Hermit. Chariot drives the city.</Line>
      </NodePreview>
    ),
    content: (
      <CorpAd
        corp="ACGS"
        slogan="Automated Certainty"
        tagline="The future drives itself."
        products={[
          "AI-Powered Transit Solutions",
          "Smart Weapon Systems",
          "BioMed Enhancement Packages",
          "Automated Vehicle Fleet Management",
        ]}
        cta="LET THE CHARIOT DRIVE YOU"
        theme="cyber"
      >
        <Line neon>Connecting to corporate network...</Line>
        <Line cyan>[PUBLIC ACCESS GRANTED]</Line>
        <InsetBox title="ABOUT ACGS:">
          <Line neon>Leading provider of AI solutions, weapontech, and vehicles</Line>
          <Line neon>Home to The Hermit - the first-ever "true" AI</Line>
          <Line neon>Chariot, our transit AI, controls most of Cy's automated vehicles</Line>
          <Line neon>Decentralized offices throughout Central and the Industries</Line>
          <Line neon>Member of the Board: A. Gustafsson</Line>
        </InsetBox>
        <InsetBox title="LATEST INNOVATIONS:">
          <Line cyan>→ Chariot 2.0 - Enhanced traffic prediction algorithms</Line>
          <Line cyan>→ Bio-Enhanced Combat Platforms (military exclusive)</Line>
          <Line cyan>→ Neural Insurance Protocols (predict health issues before they occur)</Line>
        </InsetBox>
        <InsetBox title="CAREER OPPORTUNITIES:">
          <Line yellow>Now hiring: AI Ethics Consultants (5-year NDA required)</Line>
          <Line yellow>Now hiring: Weapons Testing Personnel (hazard pay included)</Line>
          <Line yellow>Now hiring: Data Entry (Mosscroft facility)</Line>
        </InsetBox>
        <InsetBox title="ON SITE: CENTRAL OFFICES">
          <Line neon>South Central, Central District</Line>
          <Line yellow>Badge access beyond the lobby — ACGS security on every floor</Line>
          <Line yellow>AI-monitored building — The Hermit is always listening</Line>
          <Line smoke>Weapons production: ACGS Weapons Factory, West Mosscroft</Line>
        </InsetBox>
        <Line pink>"Your future, automated. Your success, inevitable."</Line>
      </CorpAd>
    ),
  },
};

export const SOUTH_CENTRAL_CORPORATE_COMMANDS = {
  ...GOLDEN_SPIRE_COMMANDS,
  ...CITADEL_TOWER_COMMANDS,
  ...ACGS_OFFICES_COMMANDS,
  ...TULLES_DEVERTE_COMMANDS,
};
