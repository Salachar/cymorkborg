export const APP_FUMBLES = [
  {
    id: "black_ice_burn",
    label: "Black Ice",
    die: "2d10",
    description: (
      <>
        Black ice left behind by an unidentified entity hits you for 2d10 damage and burns your deck. It requires a workshop and a Knowledge DR14 test to fix.
      </>
    ),
  },
  {
    id: "unknown_hacker",
    label: "Traced",
    description: (
      <>
        An unknown hacker begins tracing and interfering with you; +3 risk of App fumble and +2DR on all App activities or use of other connected technology for d6 days.
      </>
    ),
  },
  {
    id: "app_explodes",
    label: "App Explosion",
    description: (
      <>
        The App you were trying to activate explodes, destroying both the App and a slot in your deck.
      </>
    ),
  },
  {
    id: "ghost_activated",
    label: "Ghost",
    die: "d4",
    description: (
      <>
        A SecCorp activates a Ghost targeting you. It arrives in d4 minutes.
      </>
    ),
  },
  {
    id: "minor_emp",
    label: "Minor EMP",
    die: "d4",
    description: (
      <>
        A minor EMP triggers, and all tech within 15m malfunctions for d4 rounds.
      </>
    ),
  },
  {
    id: "flagged_suspicious",
    label: "Flagged",
    die: "d6",
    description: (
      <>
        You're flagged for suspicious activity. All further tests to use Apps or get through a security check are +2DR until you either get rid of it yourself by spending d6×10 minutes and pass a DR14 Knowledge test, or by waiting 48 hours without using any App or other suspicious Net activity.
      </>
    ),
  },
  {
    id: "power_surge",
    label: "Power Surge",
    die: "d4",
    description: (
      <>
        A power surge causes all lights within 30m to flicker and then explode. Everyone nearby takes d4 damage.
      </>
    ),
  },
  {
    id: "booby_trap",
    label: "Booby Trap",
    die: "d6",
    description: (
      <>
        You run into a booby trap, triggering an alarm and shorting out your deck. You take d6 damage and need to reboot and rejack to be able to use any tech again.
      </>
    ),
  },
  {
    id: "loopback",
    label: "Loopback",
    description: (
      <>
        A mistake causes a loopback, and you successfully use the App but with the wrong target or a reverse effect. The exact details are up to the GM.
      </>
    ),
  },
  {
    id: "hacker_collective",
    label: "ID'd by Collective",
    die: "d10",
    description: (
      <>
        You are ID'd by a hacker collective. They ask for d10k¤ in 72h or they will post real or fabricated incriminating data of you and your friends for everyone to see.
      </>
    ),
  },
  {
    id: "feedback_buzz",
    label: "Feedback Buzz",
    die: "d6",
    description: (
      <>
        A feedback buzz hits you for d6 damage, blinding you for d4 rounds as one of your eyeballs boils in its socket.
      </>
    ),
  },
  {
    id: "dangerous_data",
    label: "Dangerous Data",
    die: "d3",
    description: (
      <>
        Feedback hits you for d3 damage. Unknown to you, dangerous data is also copied to your deck, and several people or organizations are willing to kill to get hold of that data. They will know who you are when you next use an App.
      </>
    ),
  },
  {
    id: "rcd_corrupted",
    label: "RCD Corrupted",
    die: "d4",
    description: (
      <>
        Your RCD is corrupted. Real and unreal items glitch in and out of existence. Any test relying on sight is +4DR for d4 hours or until you can get 10 minutes of uninterrupted concentration.
      </>
    ),
  },
  {
    id: "virus_slots",
    label: "Virus",
    description: (
      <>
        A virus gets inside your deck and destroys 2 empty slots in it. If no slots are empty, a random App is destroyed instead.
      </>
    ),
  },
  {
    id: "freeze_spam",
    label: "Freeze & Spam",
    die: "d6",
    description: (
      <>
        Your deck and RCD both freeze, and you are unable to act for one round. Millions of spam messages have been sent out in your name. You are blocked from all communication channels until you replace your deck and pay a d6k¤ fine.
      </>
    ),
  },
  {
    id: "sleeper_doppels",
    label: "Sleeper Doppels",
    die: "d4",
    description: (
      <>
        d4 sleeper Doppels are activated with you as their target. They will strike in hours, days, or maybe even weeks from now.
      </>
    ),
  },
  {
    id: "electric_bolts",
    label: "Electric Bolts",
    die: "d12",
    description: (
      <>
        Nearby devices shoot bolts of electricity, dealing d12 damage to anyone in the room who fails a Toughness DR14 test. This goes on for d6 minutes.
      </>
    ),
  },
  {
    id: "broadcast_leak",
    label: "Broadcast",
    description: (
      <>
        Everything your RCD has picked up in the last 2.3 seconds is broadcasted to all monitors, screens, RCDs, etc. within 500m.
      </>
    ),
  },
  {
    id: "black_ice_convulsions",
    label: "Black Ice Convulsions",
    die: "2d6",
    description: (
      <>
        Black ice hits you for 2d6 damage, sending you into convulsions for d6 rounds. Test Presence DR14 or lower your Presence by −1.
      </>
    ),
  },
  {
    id: "extrinsic_presence",
    label: "Extrinsic Presence",
    die: "d6",
    description: (
      <>
        You stumble upon an extrinsic presence, perhaps an AI or something worse. Roll d6:<br/>
        1-2: it speaks to you in a language you cannot understand or record; you are unable to act for d4 rounds.<br/>
        3-4: it shrieks, and your deck explodes, dealing d6 damage to you and d3 nearby targets.<br/>
        5-6: it possesses you and your deck. All tech/App-related rolls are -2DR for d6 rounds. From this moment, you and it are one. You see the sidewalk cracks connect into strange symbols, the ads flicker in repeating patterns and the Net artifacts spell out cyphered code. It is a countdown. You're not supposed to see it.
      </>
    ),
  },
];
