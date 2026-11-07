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
  Nodes,
} from "@retcom";

export const FLOATING_HIVE_COMMANDS = {
  "The Floating Hive": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · Cynergy HQ. They own the water. They own the power. They own you.</Line>
      </NodePreview>
    ),
    content: (
      <FacilityPortal
        companyName="THE FLOATING HIVE"
        tagline="Megacorp posing as public infrastructure"
        location="North Central, Central District"
        owner="Cynergy Water & Power Co"
        warnings={[
          "Cynergy private security — no public SecCorps jurisdiction",
          "Visitor access by appointment only",
          "Infrastructure control center — tampering carries extreme consequences",
        ]}
        theme="corporate"
      />
    ),
    related_commands: {
      // "Cynergy Water & Power": {
      //   favicon: <Icons.Bulletin />,
      //   preview: (
      //     <NodePreview>
      //       <Line span smoke> · Public utilities portal. Water. Power. Their terms.</Line>
      //     </NodePreview>
      //   ),
      //   content: (
      //     <PublicPortal
      //       name="CYNERGY WATER & POWER CO"
      //       tagline="Keeping Cy Running — Whether You Like It Or Not"
      //       notes={[
      //         "HQ: The Floating Hive, North Central",
      //         "COO: Dana Azar",
      //         "Water (basic tier): 120¤/month",
      //         "Water (filtered tier): 280¤/month",
      //         "Power (residential): 180–450¤/month",
      //         "Late payment fee: 50¤ per day",
      //         "Planned outages: Slums districts (rotating schedule)",
      //       ]}
      //       theme="limeade"
      //     />
      //   ),
      // },
      "Cynergy Water & Power": {
        favicon: <Icons.Bulletin />,
        preview: (
          <NodePreview>
            <Line span smoke> · Public utilities portal. Water. Power. Their terms.</Line>
          </NodePreview>
        ),
        content: (
          <CorpAd
            corp="CYNERGY WATER & POWER CO."
            slogan="We Keep CY Alive"
            tagline="Keeping Cy Running — Whether You Like It Or Not"
            products={[
              "WATER - Purified & Delivered",
              "POWER - Always On",
              "PROPERTY - Premium Locations",
              "TRANSIT - Fast & Reliable",
            ]}
            cta="Your City. Our Infrastructure."
            theme="dystopian"
          >
            <Line neon>Connecting to infrastructure network...</Line>
            <Line cyan>[PUBLIC PORTAL]</Line>
            <InsetBox title="ABOUT CYNERGY:">
              <Line neon>Facilities, infrastructure, transportation, real estate</Line>
              <Line neon>Headquarters in The Floating Hive, North Central</Line>
              <Line neon>COO: Dana Azar</Line>
              <Line neon>Official utility provider (mandatory service agreements)</Line>
            </InsetBox>
            <InsetBox title="SERVICE RATES (Monthly):">
              <KeyValue label="Water (basic tier)" value="120¤" />
              <KeyValue label="Water (filtered tier)" value="280¤" />
              <KeyValue label="Water (premium clean)" value="650¤" />
              <KeyValue label="Power (residential)" value="180-450¤" />
              <KeyValue label="Late Payment Fee" value="50¤ per day" />
            </InsetBox>
            <InsetBox title="CURRENT ADVISORIES:">
              <Line yellow>→ Planned outages: Slums districts (rotating schedule)</Line>
              <Line yellow>→ Water quality notice: Laketon (boil advisory active)</Line>
              <Line red>→ Power surge warning: Mosscroft industrial zones</Line>
            </InsetBox>
            <Line pink>"We keep Cy running. You keep paying."</Line>
          </CorpAd>
        ),
      },
    },
  },

  // ── Next to the Hive (Part 4 prep) ────────────────────────────────────────

  "Hive Linen & Uniform": {
    favicon: <Icons.Services />,
    preview: (
      <NodePreview>
        <Line span smoke> · Cynergy-contracted uniform service. Pressed. Tagged. Tracked.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="HIVE LINEN & UNIFORM"
        tagline="Look like you belong."
        network="HLU_CONTRACT"
        signalStrength="medium"
        status="ACTIVE"
        statusColor="neon"
        notes={[
          "Contracted uniform service for Cynergy Water & Power Co.",
          "Pickup and delivery to all Floating Hive hab-blocks",
          "Lost uniforms will be billed to the employee",
        ]}
        theme="corporate"
      />
    ),
    related_commands: {
      "Lost & Found": {
        favicon: <Icons.Inventory />,
        content: (
          <Nodes.RCDAlert
            id="hive-linen-lost-and-found"
            message="Lost-and-found bin. Two uniforms with ID badges still clipped on. Nobody's claimed them."
            details={["Badges are visitor-grade. They'd get you past a glance, not a scanner."]}
            physical={[
              { id: "hive_linen_uniform_a", label: "Cynergy work uniform + badge", description: "Size L. Badge: 'M. Pruitt, Facilities.'" },
              { id: "hive_linen_uniform_b", label: "Cynergy work uniform + badge", description: "Size S. Badge: 'Dana A. — [photo scratched off]'" },
            ]}
          />
        ),
      },
    },
  },

  "The Timecard": {
    favicon: <Icons.Bar />,
    preview: (
      <NodePreview>
        <Line span smoke> · Where Hive workers drink after shift. Nobody talks about work. Everybody talks about work.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.CommunityBoard
        name="THE TIMECARD — BAR TALK"
        location="Overheard at the counter"
        posts={[
          { text: "Went to bed in block 9, woke up and my door opened onto the pizza place.", color: "smoke" },
          { text: "They moved the bathroom again. Third time this week.", color: "smoke" },
          { text: "Don't go looking for the cryo floor. Just don't.", color: "yellow" },
          { text: "Happy hour: 17:00–19:00. Two-for-one on whatever's left.", color: "neon" },
        ]}
        vibe="Tired people who stopped asking questions."
      />
    ),
  },
};
