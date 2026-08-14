import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  Node,
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
        <Line span smoke> · Grave/Mellberg/Tosk HQ. No paying client of theirs ever goes to Borghold.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="THE GOLDEN SPIRE"
        tagline="No paying client of ours ever goes to Borghold."
        location="South Central, Central District"
        owner="Grave/Mellberg/Tosk"
        warnings={[
          "Private security on all floors — GMT contracted",
          "Visitor access by appointment only — no walk-ins",
          "All communications within the building legally privileged",
        ]}
        theme="corporate"
      />
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
  "Citadel Tower": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · UCS HQ. At war with Alliansen. Outfitting most of Cy's SecCorps.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="CITADEL TOWER"
        tagline="When safety matters, trust UCS."
        location="South Central, Central District"
        owner="United Citadel Security"
        warnings={[
          "UCS armed personnel on all floors",
          "No public access — authorized personnel only",
          "Active corporate conflict with Alliansen Inc. — avoid cross-fire",
          "Automated weapon platforms on perimeter",
        ]}
        theme="secure"
      />
    ),
  },
};

export const TULLES_DEVERTE_COMMANDS = {
  "Tulles&deVerte": {
    favicon: <Icons.Nightlife />,
    preview: (
      <NodePreview>
        <Line span smoke> · Lifestyle empire. Feeds, drugs, fashion. Famous for being famous.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="TULLES&DEVERTE"
        tagline="Everyone's watching. Are you worth it?"
        notes={[
          "Penthouse: South Central",
          "Clubs: Ports district",
          "Lawyer/fixer: Tomi 'Toad' Dian (Grave/Mellberg/Tosk)",
          "Angel investors — all the latest social platforms",
          "Secondary sectors: fashion, restaurants, weapontech, staffing",
        ]}
        theme="party"
      />
    ),
  },
};

export const SOUTH_CENTRAL_CORPORATE_COMMANDS = {
  ...GOLDEN_SPIRE_COMMANDS,
  ...CITADEL_TOWER_COMMANDS,
  ...TULLES_DEVERTE_COMMANDS,
};
