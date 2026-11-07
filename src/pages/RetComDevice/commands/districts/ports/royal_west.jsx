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

export const ROYAL_WEST_COMMANDS = {
  // "Royal West Shipping Co": {
  //   favicon: <Icons.Tower />,
  //   preview: (
  //     <NodePreview>
  //       <Line span smoke> · Largest warehouses in the Ports. Nobody challenges them.</Line>
  //     </NodePreview>
  //   ),
  //   content: (
  //     <FacilityPortal
  //       companyName="ROYAL WEST SHIPPING CO"
  //       tagline="Connected horizons."
  //       location="Ports District — HQ and primary warehouses"
  //       owner="Royal West Shipping Co — Sri Alraune, CEO"
  //       warnings={[
  //         "Largest and most well-guarded warehouses in the Ports",
  //         "Armed private security — do not approach without authorization",
  //         "All operations managed by NordShip AI — monitored continuously",
  //       ]}
  //       theme="corporate"
  //     >
  //       <RCDAlert
  //         message="NordShip is the first shackled 'true' AI. It runs everything. Sri Alraune signs the contracts — NordShip decides how they're executed."
  //         details={[
  //           "Royal West has presence in all three port exits — air, sea, space",
  //           "Nobody in the Ports challenges Royal West's warehouse territory. Nobody.",
  //         ]}
  //       />
  //     </FacilityPortal>
  //   ),
  //   related_commands: {
  //     // ...ROYAL_WEST_WAREHOUSE_COMMANDS,
  //   },
  // },
  "Royal West Shipping Co": {
    favicon: <Icons.Tower />,
    preview: (
      <NodePreview>
        <Line span smoke> · Largest warehouses in the Ports. Nobody challenges them.</Line>
      </NodePreview>
    ),
    content: (
      <CorpAd
        corp="ROYAL WEST SHIPPING CO."
        slogan="Connected Horizons"
        tagline="Global logistics, local delivery."
        products={[
          "Global Logistics Network",
          "Automated Warehousing",
          "Retail Distribution",
          "AI-Managed Operations",
        ]}
        cta="From Warehouse To Your Door - NordShip Never Sleeps"
        theme="green"
      >
        <Line neon>Accessing logistics network...</Line>
        <Line cyan>[PUBLIC PORTAL]</Line>
        <InsetBox title="ABOUT ROYAL WEST:">
          <Line neon>Global shipping, warehousing, retail distribution</Line>
          <Line neon>NordShip™ AI manages all operations (zero human error)</Line>
          <Line neon>HQ and primary warehouses: the Ports</Line>
          <Line neon>CEO: Sri Alraune</Line>
          <Line neon>Partnerships: Major retailers, corps, government contracts</Line>
        </InsetBox>
        <InsetBox title="SERVICES OFFERED:">
          <Line cyan>→ Global freight shipping (air, sea, land, automated)</Line>
          <Line cyan>→ Warehouse storage solutions (short/long-term)</Line>
          <Line cyan>→ Last-mile delivery (drone, vehicle, water taxi)</Line>
          <Line cyan>→ Supply chain optimization (AI-powered forecasting)</Line>
          <Line cyan>→ Retail fulfillment (direct-to-consumer solutions)</Line>
        </InsetBox>
        <InsetBox title="SHIPPING RATES (Cy Local):">
          <KeyValue label="Standard (2-5 days)" value="15¤" />
          <KeyValue label="Express (1-2 days)" value="35¤" />
          <KeyValue label="Same-day (Central only)" value="80¤" />
          <KeyValue label="Drone delivery" value="+20¤ (restrictions apply)" />
          <Line yellow>* Slums deliveries subject to additional fees</Line>
        </InsetBox>
        <InsetBox title="TRACK YOUR SHIPMENT:">
          <Line neon>Enter tracking number: [_______________]</Line>
          <Line cyan>Real-time GPS tracking powered by NordShip™</Line>
          <Line yellow>Delivery notifications via RCD</Line>
        </InsetBox>
        <InsetBox title="WAREHOUSE SERVICES:">
          <Line cyan>Small locker (1m³): 50¤/month</Line>
          <Line cyan>Standard unit (10m³): 200¤/month</Line>
          <Line cyan>Large unit (50m³): 800¤/month</Line>
          <Line cyan>Climate-controlled: +40%</Line>
          <Line yellow>Security: 24/7 monitoring, biometric access</Line>
        </InsetBox>
        <InsetBox title="CAREER OPPORTUNITIES:">
          <Line yellow>Now hiring: Warehouse operators (Ports)</Line>
          <Line yellow>Starting: 750¤/month + overtime</Line>
          <Line yellow>Benefits: Medical coverage, company discounts</Line>
          <Line red>Note: All operations managed by NordShip AI (human oversight minimal)</Line>
        </InsetBox>
        <InsetBox title="ON SITE: PORTS HQ & WAREHOUSES">
          <Line yellow>Largest and most well-guarded warehouses in the Ports</Line>
          <Line yellow>Armed private security — do not approach without authorization</Line>
          <Line yellow>All operations managed by NordShip AI — monitored continuously</Line>
        </InsetBox>
        <RCDAlert
          message="NordShip is the first shackled 'true' AI. It runs everything. Sri Alraune signs the contracts — NordShip decides how they're executed."
          details={[
            "Royal West has presence in all three port exits — air, sea, space",
            "Nobody in the Ports challenges Royal West's warehouse territory. Nobody.",
          ]}
        />
        <Line pink>"The world moves. We move it faster."</Line>
      </CorpAd>
    ),
  },
};

export default ROYAL_WEST_COMMANDS;
