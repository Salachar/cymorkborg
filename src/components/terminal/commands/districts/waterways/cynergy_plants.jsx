import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  FacilityPortal,
  RCDAlert,
} from "@terminal/retcomdevice";

export const CYNERGY_PLANTS_COMMANDS = {
  "Cynergy Water & Power — Waterway Infrastructure": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span yellow> · Cynergy water treatment and power plants. Canal network infrastructure.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="CYNERGY WATER & POWER CO"
        facilityId="WATERWAYS-CYNERGY-INFRA-01"
        tagline="Keeping Cy running — whether you like it or not."
        location="Waterways — multiple canal and waterfront sites"
        owner="Cynergy Water & Power Co — Dana Azar, COO"
        function="Water Treatment / Power Generation / Canal Infrastructure"
        networkStatus="ACTIVE — Cynergy infrastructure network"
        securityLevel="HIGH"
        warnings={[
          "Critical infrastructure — tampering carries extreme legal and physical consequences",
          "Cynergy private security on all waterfront facilities",
          "Authorized access only",
        ]}
        theme="corporate"
      >
        <RCDAlert
          message="Cynergy controls the water supply for the entire city. The canal network, treatment plants, and distribution are all theirs. They are a megacorp posing as public infrastructure."
          details={[
            "Water is not potable without Cynergy filtration — and filtration is a paid service",
            "Canal water quality directly tied to Cynergy maintenance schedules — which vary by district wealth",
            "Rising competition with AST Endless Seas over water shares",
          ]}
        />
      </FacilityPortal>
    ),
    related_commands: {},
  },
};

export default CYNERGY_PLANTS_COMMANDS;
