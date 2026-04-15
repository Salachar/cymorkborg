import Icons from '@utils/icons';

import {
  InsetBox,
  Line,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  BountyCard,
  Briefing,
  RetComImage,
} from "@terminal/retcomdevice"

import cop_car_image from '@images/cop_car.png';
import STEEL_PROFILE from "@images/profile_images/steel_jackhammer.png";

export const BRIEFINGS_COMMANDS = {
  "Briefings & Missions": {
    favicon: <Icons.Briefing />,
    preview: (
      <NodePreview>
        <Line span cyan> · Active contracts and mission briefs. Check before you move.</Line>
      </NodePreview>
    ),
    related_commands: {
      "Charlie's Brief": {
        favicon: <Icons.Briefing />,
        content: (
          <Briefing
            title="Lucky Flight Takedown"
            issuer="Charlie Sand"
            classification="CONFIDENTIAL"
            primary={[
              {
                text: "Destroy debt records",
                note: "Records stored in offline database - likely 2nd floor tech room or vault",
                priority: "critical",
              },
            ]}
            secondary={[
              {
                text: "Find Batu (if possible)",
                note: "Bodega owner missing for 3 days - may be held in casino",
                priority: "high",
              },
              {
                text: "Permanently close the casino",
                note: "Make it impossible for them to reopen and continue preying on neighborhood",
                priority: "normal",
              },
            ]}
            intel={[
              "Casino has private power source somewhere",
              "Debt records are offline (can't be accessed remotely)",
              "Charlie will return to bodega in TWO DAYS to meet you",
            ]}
            payment={[
              "Decommissioned patrol car (functional, untraceable)",
              "Bonus if Batu rescued alive (Charlie didn't specify amount)",
              "Neighborhood's gratitude and protection",
            ]}
            warnings={[
              "Keep it QUIET. Mass murder complicates everything.",
              "SecOps monitors casino - heavy response if major alarm triggered",
              "Workers are victims too - avoid unnecessary casualties",
            ]}
          >
            <RetComImage
              src={cop_car_image}
              alt="Cop Car"
            />
          </Briefing>
        ),
      },

      "Doc Joy's Reaper Contract": {
        favicon: <Icons.Bounty />,
        content: (
          <BountyCard
            id="bounty-steel-jackhammer"
            name="STEEL JACKHAMMER"
            alias="The Unkillable"
            image={STEEL_PROFILE}
            credits={5000}
            sponsor="Doc Joy (Private Contract)"
            hp={12}
            lastSeen="Central District, Tower Block 7, Unit 4201"
            threat="MEDIUM"
            notes={[
              "REAPER CONTRACT RR-2067-1104: Chrome legs only - NOT for termination",
              "Damage to merchandise will lead to reduction in payment",
              "Time limit: 36 hours",
              "OFFERING: 1 cybertech upgrade (limited options) upon delivery",
              "Target hosting multi-day party - security minimal, likely intoxicated"
            ]}
          >
            <InsetBox title="ADDITIONAL INFO:">
              <Line yellow>Stage name only - real identity unknown</Line>
              <Line yellow>Division: Heavyweight Killmatch, Rank #18 (climbing)</Line>
              <Line yellow>Record: 24 wins, 8 losses</Line>
              <Line yellow>Signature Move: Jackhammer Punch (chained attacks on 5+ damage)</Line>
              <Line yellow>Recent viral moment: Both legs ripped off by 5 Kroks, continued fighting 30 seconds (50M+ views)</Line>
              <Line yellow>Chrome legs installed 2 weeks ago by Alliansen Inc. sponsor</Line>
              <Line yellow>Current status: Day 3+ of recovery party in penthouse</Line>
              <Line yellow>Upcoming match: vs Gargoyle (odds 3:1 against Jackhammer)</Line>
              <Line yellow>REAPER TARGET: Chrome legs match stolen Doc Joy prototype</Line>
            </InsetBox>
          </BountyCard>
        ),
      },

      "Clean Break — Part 1": {
        favicon: <Icons.Briefing />,
        content: (
          <Briefing
            title="Up The Down Toilet"
            issuer="S4N1 — via Asa Carmack, Sabbath Square"
            classification="CONFIDENTIAL"
            primary={[
              {
                text: "Restart the power generator",
                note: "Located in the basement of CY_Sanitation HQ — required before anything else can happen",
                priority: "critical",
              },
              {
                text: "Sabotage all four sewer regulators",
                note: "Sanny will write the APP once jacked in — regulators too old to hack conventionally",
                priority: "critical",
              },
              {
                text: "Find the paper trail",
                note: "Search the offices — locate documents showing where Sanny was offloaded after the building shuttered",
                priority: "critical",
              },
            ]}
            secondary={[
              {
                text: "Keep Sanny connected",
                note: "He travels with you as a dot matrix printer on wheels — plug him into jackpoints as you find them",
                priority: "high",
              },
            ]}
            intel={[
              "Target: CY_Sanitation HQ, Ports/Barnyard Fields border — quarantined, cement wall, sealed in industrial plastic",
              "Building has been abandoned for decades — Nano-infected staff were never evacuated",
              "All locked doors require power to hack — generator first",
              "Jackpoints throughout the building — Sanny can interface once power is restored",
              "Hazard suits provided — protect from Nano infestation while intact",
            ]}
            payment={[
              "10% debt cleared on successful completion",
            ]}
            warnings={[
              "Nano infestation is airborne inside — suits must stay intact",
              "The staff did not all die. Some of them are still in there.",
              "Sanny has not disclosed the full scope of his plan",
            ]}
          />
        ),
      },
    },
  },
};

export default BRIEFINGS_COMMANDS;
