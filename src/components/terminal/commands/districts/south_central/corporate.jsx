import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  Node,
  PublicPortal,
  FacilityPortal,
  PersonnelFile,
  CoffeeMachine,
} from "@terminal/retcomdevice"

export const GOLDEN_SPIRE_COMMANDS = {
  "The Golden Spire": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span cyan> · Grave/Mellberg/Tosk HQ. No paying client of theirs ever goes to Borghold.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="THE GOLDEN SPIRE"
        facilityId="SC-GOLDEN-SPIRE-01"
        tagline="No paying client of ours ever goes to Borghold."
        location="South Central, Central District"
        owner="Grave/Mellberg/Tosk"
        function="Corporate Law HQ / Risk Management / Private Dining"
        personnel="Senior Partners: Ms. Gravf, Mr. Mellberg, Dr. Tosk"
        networkStatus="ACTIVE — GMT internal network"
        securityLevel="MAXIMUM"
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
        internal: true,
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
        <Line span red> · UCS HQ. At war with Alliansen. Outfitting most of Cy's SecCorps.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="CITADEL TOWER"
        facilityId="SC-CITADEL-TOWER-01"
        tagline="When safety matters, trust UCS."
        location="South Central, Central District"
        owner="United Citadel Security"
        function="Corporate HQ / Weapons R&D / SecCorps Command"
        personnel="CEO: Mr. O.B.P. Gunner"
        networkStatus="ACTIVE — UCS secured network"
        securityLevel="MAXIMUM"
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
        <Line span cyan> · Lifestyle empire. Feeds, drugs, fashion. Famous for being famous.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="TULLES&DEVERTE"
        tagline="Everyone's watching. Are you worth it?"
        network="TDV-LIFESTYLE-FEED"
        signalStrength="strong"
        status="✓ LIVE"
        statusColor="neon"
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

/*

      <FacilityPortal
        companyName="GRAVE/MELLBERG/TOSK"
        facilityId="LAW-OFFICES-SC-01"
        tagline="We don't get you off. We make sure you never go on trial."
        location="South Central - Corporate Tower, Floors 18-22"
        owner="Partners: Grave, Mellberg, Tosk"
        function="Criminal Defense & Corporate Law"
        personnel="47 lawyers, 23 support staff"
        networkStatus="CORPORATE_SECURE (Client-attorney privilege enforced)"
        securityLevel="HIGH"
        warnings={[
          "All visitors logged and screened",
          "Recording devices prohibited",
          "Armed security on every floor",
          "Client confidentiality enforced by mob connections"
        ]}
        theme="corporate"
      >
        <InsetBox title="FIRM OVERVIEW:">
          <Line neon bold>The most feared law firm in South Central</Line>
          <Line cyan>• Specialization: Criminal defense, corporate litigation</Line>
          <Line cyan>• Reputation: Never lose (because witnesses disappear)</Line>
          <Line cyan>• Clientele: Organized crime, corrupt corps, wealthy criminals</Line>
          <Line cyan>• Success rate: 98% (cases dismissed or won)</Line>
          <Line cyan>• Known for: Making evidence vanish, witness intimidation</Line>
        </InsetBox>
        <InsetBox title="THE PARTNERS:">
          <Line yellow bold>Marcus Grave:</Line>
          <Line yellow>• Senior partner, former prosecutor turned defense</Line>
          <Line yellow>• Specializes in making murder charges disappear</Line>
          <Divider />
          <Line yellow bold>Helena Mellberg:</Line>
          <Line yellow>• Corporate litigation expert</Line>
          <Line yellow>• Has dirt on every judge in Central District</Line>
          <Divider />
          <Line yellow bold>Viktor Tosk:</Line>
          <Line yellow>• Former mob enforcer with law degree</Line>
          <Line yellow>• Handles "delicate negotiations"</Line>
        </InsetBox>
        <Line smoke small>
          They say if you can afford Grave/Mellberg/Tosk, you can afford to get away with murder.
          They're not wrong.
        </Line>
      </FacilityPortal>

*/
