import {
  Page,
  PageHeader,
  PageBox,
  DefinitionBox,
  ListBox,
} from "../components/PageComponents";

import Definitions from "../components/Definitions";

const GLITCHES_USES = [
  {
    label: "Reduce Test Difficulty",
    description: "-4DR to one test (before rolling)",
  },
  {
    label: "Neutralize Critical/Fumble",
    description: "Cancel a Crit or Fumble result",
  },
  {
    label: "Reduce Incoming Damage",
    description: "Lower damage dealt to you by d6",
  },
  {
    label: "Deal Maximum Damage",
    description: "Deal maximum damage with one attack",
  },
  {
    label: "Reroll",
    description: "Reroll a dice roll (yours or someone else's)",
  },
];

const HP_AT_ZERO = [
  {
    label: "1-2: Fall Unconscious",
    description: "Fall unconscious for d4 rounds, awaken with d4 HP",
  },
  {
    label: "3-4: Cy-Rage Test",
    description: "Test Presence DR10 with +1DR for every cybertech installed. Unconscious as above on success. Cy-rage on failure.",
  },
  {
    label: "5-6: Critical Injury",
    description: "Roll on the body table to see where you were hit. The body part is destroyed and has to be replaced or regrown. Unable to act for d4 rounds then become active with d4 HP.",
  },
  {
    label: "7: Hemorrhage",
    description: "Death in d2 hours unless treated. All tests are DR16 in the first hour, DR18 the last hour.",
  },
  {
    label: "8: Dead*",
    description: "*Unless you can pay. If you have a personal bank account with at least 1k¤, there is a 50% chance for an Emergency Response Team to reach you in time to save your life if you are at 0 or -1 HP. Add an additional zero to the bill for each negative HP thereafter.",
  },
];

const CY_RAGE = {
  label: "Cy-Rage",
  description: <>Someone in CY-RAGE goes berserk, temporarily gains +d8 HP and attacks random targets twice per round with their most effective weapon. Attacks are DR10 and defense DR14. This doesn't stop until Battered, Dead, or otherwise sedated.</>,
};

const COMBAT_BASICS = [
  {
    label: "Initiative",
    description: "Roll d6: 1-3 enemies act first, 4-6 PCs act first. If necessary: Agility+d6 to determine who acts first within the group.",
  },
  {
    label: "Melee Attack",
    description: "Test Strength DR12 to hit, then roll for damage.",
  },
  {
    label: "Ranged Attack (Single Shot)",
    description: "Test Presence DR12 to hit, then roll for damage.",
  },
  {
    label: "Autofire",
    description: "Test Agility DR12 to hit, then roll for damage. Hits also allow a second attack, against either the same target or another one nearby, up to a maximum of three attacks. Check armor for each hit.",
  },
  {
    label: "Defense",
    description: "Test Agility DR12 to avoid an enemy's attack.",
  },
  {
    label: "Critical (Natural 20)",
    description: "Attack: Double damage and target's armor/cover is also reduced by 1 tier. Defense: PC gains a free attack.",
  },
  {
    label: "Fumble (Natural 1)",
    description: "Attack: Roll d6 - weapon mishap. Defense: PC takes double damage and armor/cover is reduced 1 tier.",
  },
];

const ARMOR_TIERS = [
  { label: "No Armor", description: "No damage reduction" },
  { label: "-d2 Armor", description: "Reduces incoming damage by d2" },
  { label: "-d4 Armor", description: "Reduces incoming damage by d4" },
  { label: "-d6 Armor", description: "Reduces incoming damage by d6" },
];

const ABILITIES = [
  {
    label: "Strength",
    description: "Melee attacks, physical force, grappling",
  },
  {
    label: "Agility",
    description: "Defense, autofire, dodging, sneaking",
  },
  {
    label: "Presence",
    description: "Ranged attacks, social interaction, Cy-rage resistance",
  },
  {
    label: "Toughness",
    description: "Physical resilience, determines starting HP",
  },
  {
    label: "Knowledge",
    description: "Information, hacking, technical skills, using Apps",
  }
];

export default function Rules() {
  return (
    <Page>
      <PageHeader
        title="Rules Reference"
        subtitle="And Core Mechanics"
      />

      <DefinitionBox
        title="Tests"
        definitions={ [
          { label: "DR6", description: "Simple" },
          { label: "DR8", description: "Routine" },
          { label: "DR10", description: "Easy" },
          { label: "DR12", description: "Normal" },
          { label: "DR14", description: "Difficult" },
          { label: "DR16", description: "Really Hard" },
          { label: "DR18", description: "Almost Impossible" },
        ]}
      >
        <p className="mb-4 leading-relaxed text-gray-300">
          To succeed on a test, roll <strong className="text-cy-yellow">d20 ± your Ability Score</strong> with a result equal to or
          greater than the <strong className="text-cy-yellow">Difficulty Rating (DR)</strong>.
        </p>
        <p className="text-gray-400 text-sm">
          Enemies and opponents don't roll to attack. Instead, the player character rolls to defend or resist.
        </p>
      </DefinitionBox>

      <div className="divider" />

      <section className="mb-8">
        <h2 className="text-3xl font-black text-cy-yellow mb-4 uppercase">Abilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ABILITIES.map((abi) => {
            return (
              <div className="bg-gray-900/50 border border-gray-800 p-4 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-cy-cyan mb-2">{abi.label}</h3>
                <p className="text-sm text-gray-400">{abi.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="divider" />

      {/* Glitches */}
      <section className="mb-8">
        <h2 className="text-3xl font-black text-cy-yellow mb-4 uppercase">Glitches</h2>
        <div className="bg-gray-900/50 border border-gray-800 p-6 mb-4">
          <p className="mb-4 leading-relaxed text-gray-300">
            You don't know why, but sometimes the constant bad luck seems to... <span className="text-cy-cyan italic">glitch</span>.
            You begin with <strong className="text-cy-yellow">d2 Glitches</strong> (unless your class says otherwise) and regain them
            by rolling that d2 (or class-based die) again after you've spent all Glitches and have had the
            chance to rest.
          </p>
        </div>

        <h3 className="text-xl font-bold text-cy-pink mb-1">You Can Use Them To:</h3>
        <Definitions definitions={GLITCHES_USES} />
      </section>

      <div className="divider" />

      {/* Hit Points & Damage */}
      <section className="mb-8">
        <h2 className="text-3xl font-black text-cy-yellow mb-4 uppercase">Hit Points & Damage</h2>
        <div className="bg-gray-900/50 border border-gray-800 p-6 mb-6">
          <p className="text-lg text-gray-300">
            Punks start with <strong className="text-cy-yellow">Toughness + d8 HP</strong> (but never less than 1).
          </p>
        </div>

        <h3 className="text-xl font-bold text-cy-pink mb-1">At Zero HP (Roll d8):</h3>
        <Definitions definitions={HP_AT_ZERO} />

        <div className="bg-red-900/20 border-2 border-red-600 p-6 my-6">
          <Definitions definitions={[CY_RAGE]} />
        </div>

        <h3 className="text-xl font-bold text-cy-pink mb-1 mt-6">Negative HP:</h3>
        <p className="mb-4 text-gray-300"><strong className="text-red-500">Dead*</strong> — Unless you can pay. See "8: Dead*" above.</p>

        <h3 className="text-xl font-bold text-cy-pink mb-1 mt-6">Armor</h3>
        <Definitions definitions={ARMOR_TIERS} />
      </section>

      <div className="divider" />

      {/* Combat */}
      <section className="mb-8">
        <h2 className="text-3xl font-black text-cy-yellow mb-4 uppercase">Combat</h2>
        <Definitions definitions={COMBAT_BASICS} />

        <div className="bg-gray-900/50 border border-gray-800 p-6 mt-6">
          <h3 className="text-xl font-bold text-cy-pink mb-1">After Combat:</h3>
          <p className="mb-1 text-gray-300">
            <strong className="text-cy-yellow">Count Your Bullets:</strong> Roll d8 (or d6 if you used autofire) for each weapon you have
            fired. A result of 1-3 indicates your mag is empty and has to be replaced.
          </p>
          <p className="text-gray-300">
            <strong className="text-cy-yellow">If There's Still Time:</strong> Catch your breath, wipe your brow. Restore d4 HP.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Rest & Recovery */}
      <section className="mb-8">
        <h2 className="text-3xl font-black text-cy-yellow mb-4 uppercase">Rest & Recovery</h2>
        <div className="bg-gray-900/50 border border-gray-800 p-6">
          <ul className="space-y-3 text-gray-300">
            <li><strong className="text-cy-cyan">After Combat (Short Rest):</strong> Sit down, hydrate, breathe. Take ten. Restore d4 HP.</li>
            <li><strong className="text-cy-cyan">Full Night's Rest:</strong> Eat, drink, and sleep for a full night and restore d6 HP.</li>
            <li><strong className="text-cy-cyan">Without Food/Water:</strong> If you don't eat, you are unable to recover HP, and each day
            without food or drink, you lose d4 HP. All tests are +2DR per day without rest.</li>
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* Time */}
      <section className="mb-8">
        <h2 className="text-3xl font-black text-cy-yellow mb-4 uppercase">Time</h2>
        <div className="bg-gray-900/50 border border-gray-800 p-6">
          <ul className="space-y-2 text-gray-300">
            <li>A <strong className="text-cy-cyan">round</strong> is enough time to traverse a normal-sized room and either attack once, activate an App or use Nano.</li>
            <li>Ten rounds make up about a <strong className="text-cy-cyan">minute</strong>.</li>
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* Carrying Capacity */}
      <section className="mb-8">
        <h2 className="text-3xl font-black text-cy-yellow mb-4 uppercase">Carrying Capacity</h2>
        <div className="bg-gray-900/50 border border-gray-800 p-6">
          <p className="text-gray-300">
            You can carry <strong className="text-cy-yellow">Strength+8 normal-sized items</strong> without a problem. After that,
            Strength and Agility DRs increase by 2. You can't carry more than twice Strength+8.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Apps & Nano */}
      <section className="mb-8">
        <h2 className="text-3xl font-black text-cy-yellow mb-4 uppercase">Apps & Nano</h2>

        <div className="bg-gray-900/50 border border-gray-800 p-6 mb-4">
          <h3 className="text-xl font-bold text-cy-pink mb-2">Using Apps</h3>
          <p className="text-gray-300 mb-2">
            Test <strong className="text-cy-yellow">Knowledge DR12</strong> while jacked into a Deck (+2DR on all non-App actions).
          </p>
          <p className="text-gray-400 text-sm mb-2">
            <strong className="text-red-400">Fumble:</strong> Burns the App for the day and triggers a Backlash.
          </p>
          <p className="text-gray-400 text-sm">
            Each App-use raises the risk of fumble by 1 until next day.
          </p>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 p-6">
          <h3 className="text-xl font-bold text-cy-pink mb-2">Using Nano</h3>
          <p className="text-gray-300 mb-2">
            Test <strong className="text-cy-yellow">Presence DR12</strong>.
          </p>
          <p className="text-gray-400 text-sm mb-2">
            <strong className="text-red-400">Failure:</strong> Power doesn't work and user takes d2 damage.
          </p>
          <p className="text-gray-400 text-sm">
            Each Nano-use increases the risk of fumble by 1 for the day.
          </p>
        </div>
      </section>

      <div className="divider" />

      <ListBox
        title="Creating a Character"
        list={[
          {
            label: "Roll Starting Items",
            description: "Roll d8 and d12 tables for starting gear. Kind DMs might let you pick.",
          },
          {
            label: "Choose a Class",
            description: "Select a class, some have notes pertaining to starting gear, take notice.",
          },
          {
            label: "Roll Abilities",
            description: "Generate your ability scores.",
          },
          {
            label: "Determine HP",
            description: "Roll Toughness + Class Health Die, min of 1 don't worry.",
          },
          {
            label: "Roll Glitches",
            description: "Roll d2 for starting Glitches, think of these as your Inspirations if you're familiar with D&D",
          },
          {
            label: "Buy Additional Equipment",
            description: "If you're not completely broke, you might be able to afford some real things!",
          },
          {
            label: "Add Flavor",
            description: "Roll for Style, Features, Wants, Quirks, and Obsessions.",
          },
          {
            label: "Calculate Debt",
            description: "Roll for who you owe and how much (if applicable)",
          }
        ]}
      />
    </Page>
  );
}
