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
        <Line span smoke> · Active contracts and mission briefs. Check before you move.</Line>
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
          <Briefing
            title="Reaper Repo"
            issuer="Doc Joy — Svärta Reaperdoc"
            classification="CONFIDENTIAL"
            primary={[
              {
                text: "Steal Steel Jackhammer's chrome legs",
                note: "Legs only — NOT a termination contract. Damage to merchandise reduces payment.",
                priority: "critical",
              },
            ]}
            intel={[
              "Target is hosting a multi-day party — security minimal, likely intoxicated",
              "Penthouse: Central District, Tower Block 7, Unit 4201",
              "Layout leaked in uncut reporter video — findable with a deep Net search",
              "Stage name only — real identity unknown",
              "Division: Heavyweight Killmatch, Rank #18 (climbing). Record: 24 wins, 8 losses",
              "Signature Move: Jackhammer Punch — chains attacks on heavy hits",
              "Chrome legs installed 2 weeks ago by Alliansen Inc. sponsor",
              "Upcoming match: vs Gargoyle (odds 3:1 against Jackhammer)",
              "REAPER TARGET: Chrome legs match stolen Doc Joy prototype",
            ]}
            payment={[
              "5,000¤ on delivery",
              "1 cybertech upgrade on delivery",
              "Deductions apply for damage to merchandise",
            ]}
            warnings={[
              "VIP guests are professional killmatch athletes — armed and dangerous",
              "Majority of party guests are holo-avatars, flesh guests will avoid violence",
              "Two guards on door — checking for heavy weapons on entry",
              "Target must be incapacitated before legs can be removed — requires tools and knowledge",
              "Legs must be delivered within 36 hours",
            ]}
          >
            <BountyCard
              id="bounty-steel-jackhammer"
              name="STEEL JACKHAMMER"
              alias="The Unkillable"
              image={STEEL_PROFILE}
              sponsor="Doc Joy (Private Contract)"
              hp={12}
              lastSeen="Central District, Tower Block 7, Unit 4201"
              threat="MEDIUM"
              notes={[
                "REAPER CONTRACT RR-2067-1104: Chrome legs only - NOT for termination",
                "Recent viral moment: Both legs ripped off by 5 Kroks, continued fighting 30 seconds (50M+ views)",
                "Current status: Day 3+ of recovery party in penthouse",
              ]}
            />
          </Briefing>
        ),
      },

      "Clean Break — Part 1": {
        password: {
          pw: 'toilet trouble',
        },
        favicon: <Icons.Briefing />,
        content: (
          <Briefing
            title="Up The Down Toilet"
            issuer="S4N1"
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
            intel={[
              "Target: CY_Sanitation HQ, Ports/Barnyard Fields border — quarantined, cement wall, sealed in industrial plastic",
              "Building has been abandoned for decades, staff were locked inside",
              "All locked doors require power to hack",
              "Hazard suits provided — protect from Nano infestation while intact",
            ]}
            payment={[
              "10% debt cleared on successful completion",
            ]}
            warnings={[
              "Nano infestation is airborne inside — suits must stay intact",
              "The staff did not all die. Some of them are still in there.",
            ]}
          />
        ),
      },
    },
  },
};

export default BRIEFINGS_COMMANDS;
