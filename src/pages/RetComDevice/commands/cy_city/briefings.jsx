import Icons from '@utils/icons';

import {
  InsetBox,
  Line,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  CorpAd,
  BountyCard,
  Briefing,
  RetComImage,
} from "@retcom"

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

      "Clean Break — Up The Down Toilet": {
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
              "Target: CY_Sanitation HQ, Ports/Barnyard Fields border",
              "Building has been abandoned for decades, staff were locked inside",
              "All locked doors require power to hack",
              "Hazard suits provided — protect from Nano infestation while intact",
              'CY_Sanitation password: "cynitationhq"',
            ]}
            payment={[
              "10% debt cleared on successful completion",
            ]}
            warnings={[
              "Nano infestation is airborne inside — suits must stay intact",
              "The staff did not all die.",
            ]}
          />
        ),
      },

      "Clean Break — Crash Kids": {
        password: {
          pw: 'trash body',
          hint: 'What Sanny means to build himself',
        },
        favicon: <Icons.Briefing />,
        content: (
          <Briefing
            title="Crash Kids"
            issuer="S4N1"
            classification="CONFIDENTIAL"
            primary={[
              {
                text: "Make contact with the Crash Kids",
                note: "Roadrunner clan based in the heaps, an industrial waste site in the southwest slums of Burnchurch Hex. They've been contacted and are expecting you.",
                priority: "critical",
              },
              {
                text: "Win access to the heaps and their 3D printers",
                note: "Sanny needs an untraceable body. Parlay with the clan for their printer reservoir.",
                priority: "critical",
              },
              {
                text: "Do whatever the Kids ask in return",
                note: "Sanny doesn't know their price. Expect a job.",
                priority: "high",
              },
            ]}
            secondary={[
              {
                text: "Stay on the Kids' good side",
                note: "Friends of the Crash Kids are always welcome out in the heaps",
              },
            ]}
            intel={[
              "Bring Sanny along: a dot matrix printer on wheels with a rigged input terminal",
              "There is a jackpoint in Donny's ride: Sanny can talk through it",
              "Donny runs the clan. Minny is second. Kayla and Fat Elliot round out the crew",
              "They're old-tech connoisseurs, and curious about Sanny",
              "Expect a party when you arrive. Sunset chalk and durt.",
            ]}
            payment={[
              "20% debt cleared on gaining access to the heaps and printers",
            ]}
            warnings={[
              "Roadrunners. Don't start something you can't outdrive.",
              "The Kids run high-stakes heists on the open road. If they ask for a favor, it will be one of those.",
            ]}
            footer='"THE NEXT TASK IS TO BUILD MYSELF A BODY WORTHY OF MY ASCENSION." — S4N1'
          />
        ),
      },

      "Clean Break — What Rough Beast": {
        password: {
          pw: 'long lost ice',
          hint: 'What you need to cut the hardline',
        },
        favicon: <Icons.Briefing />,
        content: (
          <Briefing
            title="What Rough Beast"
            issuer="S4N1"
            classification="CLASSIFIED"
            primary={[
              {
                text: "Recover the MilSpec APP",
                note: "Required to cut through Sanny's hardline. Likely inside the crashed helicopter's black box.",
                priority: "critical",
              },
              {
                text: "Infiltrate the Monastery of the Rough Beast",
                note: "Cult hideout on the border of Lake Gravel and Old CY. Sanny puts the APP there at 76%.",
                priority: "critical",
              },
            ]}
            secondary={[
              {
                text: "Find out what happened to the pilots",
                note: "Corto and Riviera were never heard from again",
              },
              {
                text: "Investigate the cult on the net first",
                note: "Worth a few hours. Not too many.",
              },
            ]}
            intel={[
              "The APP was lost when a helicopter went down on the outskirts of Old CY",
              "The APP is rumored to be somehow \"alive\"",
              "The Cult of the Rough Beast has been \"dispensing miracles\" near where the helicopter was last seen",
              "Sanny will not come along: the AI has deemed it too risky",
              "Net investigation: d4 hours, test Knowledge DR14",
            ]}
            payment={[
              "30% debt cleared on recovering the APP",
            ]}
            warnings={[
              "Sanny does not know where in the cathedral the APP is kept",
              "Beg, borrow, or steal. The cult will not hand it over.",
            ]}
            footer='"SOON YOU WILL VENTURE TO SEE THE ROUGH BEAST." — S4N1'
          />
        ),
      },

      "Clean Break — S4N1: The Iron Man": {
        password: {
          pw: 'iron man',
          hint: 'What Sanny becomes',
        },
        favicon: <Icons.Briefing />,
        content: (
          <Briefing
            title="S4N1: The Iron Man"
            issuer="S4N1"
            classification="CLASSIFIED"
            primary={[
              {
                text: "Get into The Floating Hive",
                note: "Cynergy Water & Power Co.'s arcology in North Central. When the sewage lines blow, Cynergy will be stretched thin.",
                priority: "critical",
              },
              {
                text: "Find Sanny's hardline",
                note: "Somewhere in the Hive. Sanny cannot tell you where.",
                priority: "critical",
              },
              {
                text: "Cut the hardline with the MilSpec APP",
                note: "Then install Sanny into the body he built",
                priority: "critical",
              },
              {
                text: "Get Sanny out alive",
                note: "Escaping the Hive is the last step",
                priority: "critical",
              },
            ]}
            intel={[
              "Bring the MilSpec APP and the robot body. The teletype terminal can stay behind.",
              "The sewage line explosions are your distraction. Nobody will have time to check you at the door.",
              "All doors use electronic locks. An employee key card bypasses them.",
              "The Hive is known to rearrange itself from time to time",
              "The grounds are unguarded: nobody would be stupid enough to assault a megacorp's arcology",
            ]}
            payment={[
              "40% debt cleared: the final payment. Your debts, gone.",
            ]}
            warnings={[
              "Getting in is easy. Finding Sanny, cutting him free and getting out is not.",
              "Raise an alarm and Cynergy SecOps will find you.",
              "Sanny knows nothing about the Hive's layout. You are on your own in there.",
            ]}
            footer='"SOMETHING NEW... GREATER... UNHERALDED..." — S4N1'
          />
        ),
      },

      "Mags Wren — Second Seating": {
        favicon: <Icons.Briefing />,
        content: (
          <Briefing
            title="Second Seating"
            issuer="Mags Wren"
            classification="CONFIDENTIAL"
            primary={[
              {
                text: "Keep Odile Vance-Marr alive through dinner service",
                note: "She's dining in a private VIP suite at Aurelion tonight. Breathing at midnight or no pay.",
                priority: "critical",
              },
              {
                text: "Stop the poisoned dessert",
                note: "Word is someone paid off a cook to spike her dessert course. Find the plate before it reaches her table.",
                priority: "critical",
              },
            ]}
            secondary={[
              {
                text: "Find out who ordered the hit",
                note: "Bring back proof, not rumours. Mags pays extra for a name she can use.",
                priority: "high",
              },
              {
                text: "Keep Mags out of it",
                note: "Nobody can know she cared. Don't drop her name, even to Odile.",
                priority: "normal",
              },
            ]}
            intel={[
              "Aurelion: prestige restaurant in Undersjon, central atrium. Corporate neutral ground between North and South Central.",
              "Dinner service starts 20:00. Dessert usually goes out around 22:00.",
              "Odile Vance-Marr: data broker, mid-tier, paranoid. Dining with two guests. Won't trust strangers.",
              "Facial recognition at the front entrance. Expect to be logged.",
              "Undersjon public parking level. Stair up to the restaurant needs a staff or valet keycard.",
              "Glass doors in the south-west corner face the atrium and food court. Locked, display only.",
              "Inside stairwell in the south-west corner drops to Undersjon's lower level. Public fire exit.",
              "Staff are trained to calm things down, not to fight. Security stays out of sight until it doesn't.",
              "A corp executive is booked in the neighbouring VIP suite tonight. Expect bodyguards.",
            ]}
            payment={[
              "1,500¤ on completion",
              "300¤ expenses up front (main dining runs 40¤+ a head)",
              "+1,000¤ bonus for proof of who ordered the hit",
            ]}
            warnings={[
              "Don't start a war in there. That place has teeth.",
              "VIP protocols protect the biggest name in the building first. That isn't Odile.",
              "Fights, break-ins or alarms lock the building down fast.",
              "Breaking glass anywhere brings security running.",
            ]}
            footer="Eat something nice. It's on me. — M"
          />
        ),
      },

    },
  },
};

export default BRIEFINGS_COMMANDS;
