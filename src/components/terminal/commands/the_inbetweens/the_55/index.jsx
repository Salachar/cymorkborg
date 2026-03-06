import THE_55_LOWER_LEVELS_COMMANDS from "./the_55_01_lower_levels";
import THE_55_CAPSULE_CLOSETS_COMMANDS from "./the_55_02_capsule_closets";
import THE_55_REC_COMMANDS from "./the_55_03_rec";
import THE_55_ALLIANSEN_ARMS_COMMANDS from "./the_55_04_alliansen_arms";
import THE_55_MULTIMART_COMMANDS from "./the_55_05_multimart";
import THE_55_LOST_ZONE_COMMANDS from "./the_55_06_lost_zone";
import THE_55_KAYTELL_MANUFACTURING_COMMANDS from "./the_55_07_kaytell";
import THE_55_GREEN_ZONE_COMMANDS from "./the_55_08_green_zone";
import THE_55_STACK_COMMAND_COMMANDS from "./the_55_09_stack_command";
import THE_55_CORP_QUAD_COMMANDS from "./the_55_10_corp_quad";
import THE_55_SPECTRAL_LUXVITAE_COMMANDS from "./the_55_11_spectral_luxvitae";
import THE_55_ROOFLINE_COMMANDS from "./the_55_12_roofline"

import THE_55_IMAGE from '@images/the55/the55.png';

import {
  Line,
  Spacer,
  InsetBox,
} from '@terminal/TerminalComponents';
import {
  DistrictPortal,
  RetComImage,
} from "@terminal/retcomdevice"

export const THE_55_COMMANDS = {
  "The 55 [Stack #95563]": {
    content: (
      <DistrictPortal
        districtName="THE 55"
        districtId="STACK-95563"
        tagline="Vertical city. 47,000 souls stacked to the sky."
        region="The Inbetweens"
        population="~47,000 residents"
        corporatePresence="HIGH"
        crimeThreat="MEDIUM"
        securityResponse="ACTIVE"
        atmosphere="Concrete brutalism meets desperate commerce. From capsule coffins in the basement to penthouses in the clouds. The stack never sleeps, never stops, never cares."
        warnings={[
          "Climate control degraded on lower levels (7-60)",
          "Elevator wait times: 15-20 minutes average",
          "REC containment breach incidents reported",
          "Lost Zone floors 130-132 quarantined (fungal)",
          "Stack Command monitors all traffic",
        ]}
        theme="district"
      >
        <Spacer />
        <div style={{
          display: "flex",
          marginBottom: "1rem",
        }}>
          <div style={{
            paddingRight: "2rem",
          }}>
            <InsetBox title="STACK STATISTICS:" style={{
              margin: "0 0 2rem 0",
            }}>
              <Line cyan>• Total floors: 365 (Ground to roofline)</Line>
              <Line cyan>• Residential units: 6,000+ (capsules to penthouses)</Line>
              <Line cyan>• Commercial spaces: 800+ vendors and businesses</Line>
              <Line cyan>• Corporate offices: 150+ companies</Line>
              <Line cyan>• Emergency hotline: 95563-HELP (24/7)</Line>
            </InsetBox>
            <Line smoke small>
              The 55 is self-contained: live, work, die without ever leaving. Some haven't seen ground level in years.
            </Line>
          </div>
          <RetComImage
            src={THE_55_IMAGE}
            theme="purple"
            style={{
              width: "40%",
            }}
          />
        </div>
      </DistrictPortal>
    ),
    related_commands: {
      ...THE_55_LOWER_LEVELS_COMMANDS,
      ...THE_55_CAPSULE_CLOSETS_COMMANDS,
      ...THE_55_REC_COMMANDS,
      ...THE_55_ALLIANSEN_ARMS_COMMANDS,
      ...THE_55_MULTIMART_COMMANDS,
      ...THE_55_LOST_ZONE_COMMANDS,
      ...THE_55_KAYTELL_MANUFACTURING_COMMANDS,
      ...THE_55_GREEN_ZONE_COMMANDS,
      ...THE_55_STACK_COMMAND_COMMANDS,
      ...THE_55_CORP_QUAD_COMMANDS,
      ...THE_55_SPECTRAL_LUXVITAE_COMMANDS,
      ...THE_55_ROOFLINE_COMMANDS,
    },
  },
}

export default THE_55_COMMANDS;
