import {
  Page,
  // PageHeader,
  Section,
  InsetPanel,
  Callout,
  Directory,
  Scale,
  RollTable,
  OptionalRule,
  OptionalTag,
  Tip,
  // JumpBar,
  Stack,
  SubHeading,
  Roll,
  Modifier,
} from '@components/Layout/Layout';

import { useSelectedCharacter } from '@context/CharacterContext';
import { formatModifier, STAT_LABELS } from '@utils/character';
import SegmentedDice from '@components/SegmentedDice';
import ChromeBar from '@components/Chrome/ChromeBar';

import {
  QuickGrid,
  QuickRow,
  QuickAction,
  QuickTest,
  StepBlock,
  StepNumber,
  StepTitle,
  ActionCard,
  ActionHeader,
  ActionName,
  ActionTest,
  ActionText,
  ActionRisk,
  ActionDetails,
  RollerRow,
} from './Combat.styles';

/* ==========================================================================
   DATA
   ========================================================================== */

const JUMPS = [
  { id: 'quick-ref', label: 'Quick ref' },
  { id: 'step-1', number: '1', label: 'Initiative' },
  { id: 'step-2', number: '2', label: 'Actions' },
  { id: 'step-3', number: '3', label: 'Hit' },
  { id: 'step-4', number: '4', label: 'Damage' },
  { id: 'step-5', number: '5', label: 'Defend' },
  { id: 'step-6', number: '6', label: '0 HP' },
  { id: 'step-7', number: '7', label: 'After' },
  { id: 'rules', label: 'Rules' },
];

const QUICK_REF = [
  { label: 'Melee attack', statKey: 'STR' },
  { label: 'Ranged attack', statKey: 'PRE' },
  { label: 'Autofire', statKey: 'AGI' },
  { label: 'Defense', statKey: 'AGI' },
  { label: 'Use App', statKey: 'KNO' },
  { label: 'Use Nano', statKey: 'PRE' },
];

const INITIATIVE = [
  { roll: '1–3', result: 'Enemies act first' },
  { roll: '4–6', result: 'PCs act first' },
];

const HIT_RESULTS = [
  { roll: 'Nat 20', result: 'Critical hit', detail: "×2 damage, and the target's armor or cover drops 1 tier." },
  { roll: '≥ DR', result: 'Hit', detail: 'Roll weapon damage.' },
  { roll: '< DR', result: 'Miss', detail: 'The attack misses.' },
  { roll: 'Nat 1', result: 'Fumble', detail: 'Roll on the weapon fumble table.' },
];

const WEAPON_FUMBLE = [
  { roll: '1–3', result: 'Out of ammo or drop weapon' },
  { roll: '4–5', result: 'Misfire or weapon breaks' },
  { roll: '6', result: 'Weapon explodes', detail: 'You take d6 damage.' },
];

const ARMOR_TIERS = [
  { value: 'None', label: 'No reduction' },
  { value: '−d2', label: 'Reduce damage by d2' },
  { value: '−d4', label: 'Reduce damage by d4' },
  { value: '−d6', label: 'Reduce damage by d6' },
];

const DEFENSE_RESULTS = [
  { roll: 'Nat 20', result: 'Critical defense', detail: 'You dodge and get a free attack on the enemy.' },
  { roll: '≥ DR12', result: 'Dodge', detail: 'No damage taken.' },
  { roll: '< DR12', result: 'Hit', detail: "You're hit. Roll your armor to reduce the damage." },
  { roll: 'Nat 1', result: 'Fumble', detail: 'You take ×2 damage, and your armor drops 1 tier.' },
];

const GM_ATTACK_RESULTS = [
  { roll: 'Nat 20', result: 'Critical hit', detail: "×2 damage, and the player's armor drops 1 tier." },
  { roll: '≥ DR12', result: 'Hit', detail: 'Player rolls armor to reduce the damage.' },
  { roll: '< DR12', result: 'Miss', detail: 'No damage.' },
  { roll: 'Nat 1', result: 'Fumble', detail: 'The player gets a free attack on the enemy.' },
];

const BATTERED = [
  { roll: '1–2', result: 'Fall unconscious', detail: 'Out for d4 rounds, then wake up with d4 HP.' },
  {
    roll: '3–4',
    result: 'Cy-Rage test',
    detail: 'Test Presence DR10, +1DR for each cybertech installed. Success: unconscious, as above. Failure: Cy-Rage.',
  },
  {
    roll: '5–6',
    result: 'Critical injury',
    detail: 'Roll on the body table. That body part is destroyed and must be replaced or regrown. Unable to act for d4 rounds, then active with d4 HP.',
  },
  {
    roll: '7',
    result: 'Hemorrhage',
    detail: 'Death in d2 hours unless treated. All tests are +4DR in the first hour, +6DR in the last.',
  },
  {
    roll: '8',
    result: 'Dead*',
    detail: "*Unless you can pay. With at least 1k¤ in a personal bank account, there's a 50% chance an Emergency Response Team reaches you in time at 0 or −1 HP. Add a zero to the bill for each HP below that.",
  },
];

const DR_SCALE = [
  { value: 'DR6', label: 'Simple' },
  { value: 'DR8', label: 'Routine' },
  { value: 'DR10', label: 'Easy' },
  { value: 'DR12', label: 'Normal' },
  { value: 'DR14', label: 'Difficult' },
  { value: 'DR16', label: 'Really hard' },
  { value: 'DR18', label: 'Almost impossible' },
];

const ABILITIES = [
  { label: 'Strength', description: 'Melee attacks, physical force, grappling.' },
  { label: 'Agility', description: 'Defense, autofire, dodging, sneaking.' },
  { label: 'Presence', description: 'Ranged attacks, social interaction, Nano, resisting Cy-Rage.' },
  { label: 'Toughness', description: 'Physical resilience. Sets starting HP.' },
  { label: 'Knowledge', description: 'Information, hacking, technical skills, using Apps.' },
];

const GLITCH_USES = [
  { label: 'Lower a DR', description: <>−4DR on one test. Spend it before rolling.</> },
  { label: 'Cancel a crit or fumble', description: 'Neutralize the special effect of a Nat 20 or Nat 1.' },
  { label: 'Soak damage', description: <>Reduce incoming damage by <Roll>d6</Roll>.</> },
  { label: 'Max damage', description: 'Deal maximum damage with one attack. No roll needed.' },
  { label: 'Reroll', description: "Reroll any die, yours or someone else's." },
];

const DOWNTIME = [
  { label: "Full night's rest", description: <>Eat, drink, and sleep for a full night. Restore <Roll>d6 HP</Roll>.</> },
  {
    label: 'No food or water',
    description: <>You can't recover HP, and you lose <Roll>d4 HP</Roll> each day without food or drink. All tests are +2DR per day without rest.</>,
  },
  {
    label: 'Time',
    description: 'A round is enough to cross a normal-sized room and attack once, activate an App, or use Nano. Ten rounds make about a minute.',
  },
  {
    label: 'Carrying',
    description: <>Carry <Roll>Strength + 8</Roll> normal-sized items without trouble. Beyond that, Strength and Agility tests are +2DR. You can't carry more than twice Strength + 8.</>,
  },
];

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function Combat() {
  const character = useSelectedCharacter();
  const agiMod = formatModifier(character?.stats?.AGI);

  return (
    <>
      <ChromeBar character jumps={JUMPS} />
      <Page compact>
        <Section id="quick-ref" title="Quick reference">
          <QuickGrid>
            {QUICK_REF.map((item) => (
              <QuickRefRow key={item.label} character={character} {...item} />
            ))}
          </QuickGrid>
        </Section>

        {/* ---- 1 ---- */}
        <Step id="step-1" number="1" title="Initiative">
          <p>Roll <Roll>d6</Roll> for the group:</p>
          <RollTable rows={INITIATIVE} />
          <p>
            If order matters within a group, each character rolls <Roll>Agility + d6</Roll>.
          </p>
          <GlitchTip>Reroll the initiative die and take the better result.</GlitchTip>
        </Step>

        {/* ---- 2 ---- */}
        <Step id="step-2" number="2" title="Your turn: choose an action">
          <p>
            Move anywhere within a reasonably sized room, roughly <Roll>6 spaces</Roll> on a 1" grid (~30ft). Movement needs no roll and can be split between your actions.
          </p>

          <Tip label="Cybertech">
            Check your cybertech for extra attack options. A SmartJack, for example, enhances some guns.
          </Tip>

          <Stack $gap="0.75rem">
            <Action
              name="Take cover"
              test="No roll"
              optional
              description="Get behind something. Raises the DR to hit you, or lowers your DR to defend."
            >
              <ActionDetails>
                <p><Roll>±2DR</Roll> Light cover: office cubicle, car door, hostage, explosive gas tank.</p>
                <p><Roll>±4DR</Roll> Heavy cover: concrete wall, cyberbike, bulletproof glass, reactor.</p>
                <p>When an attack misses you, cover degrades: heavy becomes light, light is destroyed.</p>
              </ActionDetails>
            </Action>

            <Action
              name="Melee attack"
              test="Strength DR12"
              statKey="STR"
              dr={12}
              character={character}
              description="Get close and personal. Roll to hit, then roll weapon damage."
            />

            <Action
              name="Ranged attack (single shot)"
              test="Presence DR12"
              statKey="PRE"
              dr={12}
              character={character}
              description="Aim and fire. Roll to hit, then roll weapon damage."
            />

            <Action
              name="Aim"
              test="No roll, 1 round"
              optional
              description="Spend a round aiming. Your next attack gets either −2DR to hit or +2 damage."
            />

            <Action
              name="Autofire"
              test="Agility DR12"
              statKey="AGI"
              dr={12}
              character={character}
              description="On a hit, roll damage, then attack again (same or a nearby target), up to 3 attacks total. Check armor for each hit."
            />

            <Action
              name="Suppressive fire"
              test="Agility, spend a mag"
              statKey="AGI"
              optional
              character={character}
              description="Suppress up to d3 targets with an automatic weapon. Each must either get out of the way (+4DR to their next action) or stand their ground (defend DR14 against autofire)."
            />

            <Action
              name="Use App"
              test="Knowledge DR12"
              statKey="KNO"
              dr={12}
              character={character}
              description="You must be jacked into your Deck. All non-App actions are +2DR while jacked in."
              risk="Fumble burns the App for the day and triggers a Backlash. Each use raises the fumble risk by 1 until the next day."
            />

            <Action
              name="Use Nano"
              test="Presence DR12"
              statKey="PRE"
              dr={12}
              character={character}
              description="Activate your Nano power."
              risk="Failure means the power fails and you take d2 damage. Each use raises the fumble risk by 1 for the day."
            />

            <Action
              name="Other actions"
              test="Varies"
              description="Reload, use an item, help an ally, anything else you want to try. The GM decides whether it needs a test."
            />
          </Stack>

          <OptionalRule title="Range modifiers">
            <p>Close range is arm's length or less. Long range is farther than a room away.</p>
            <p><Roll>+2DR</Roll> to fire at close range.</p>
            <p>Autofire: <Roll>+2 damage</Roll> at close range, <Roll>−2 damage</Roll> at long range.</p>
          </OptionalRule>
        </Step>

        {/* ---- 3 ---- */}
        <Step id="step-3" number="3" title="Roll to hit">
          <p>
            Roll <Roll>d20 ± ability</Roll> against the attack's DR (usually DR12).
          </p>
          <RollTable rows={HIT_RESULTS} />
          <GlitchTip>Spend one before rolling to lower the DR by 4.</GlitchTip>
          <GlitchTip>Neutralize a fumble. No roll on the weapon fumble table.</GlitchTip>

          <SubHeading>Weapon fumble (d6)</SubHeading>
          <RollTable rows={WEAPON_FUMBLE} />
        </Step>

        {/* ---- 4 ---- */}
        <Step id="step-4" number="4" title="Roll damage">
          <p>Roll your weapon's damage die. The target reduces it by rolling their armor.</p>

          <SubHeading>Armor</SubHeading>
          <Scale steps={ARMOR_TIERS} />

          <InsetPanel title="Example">
            <p>
              You hit with a pistol (<Roll>d8</Roll>) and roll 6. The enemy has −d2 armor and rolls 1. Final damage: 5 HP.
            </p>
          </InsetPanel>

          <GlitchTip>Deal maximum weapon damage. No roll needed.</GlitchTip>

          <OptionalRule title="Hits always hurt">
            <p>
              A hit always deals at least 1 damage, whatever armor or other modifiers say, unless that would bring a character to 0 HP.
            </p>
          </OptionalRule>
        </Step>

        {/* ---- 5 ---- */}
        <Step id="step-5" number="5" title="Enemy's turn: defend">
          <p>
            Enemies don't roll to attack. When attacked, roll <Roll>Agility DR12</Roll>
            {agiMod && <Modifier>({agiMod})</Modifier>} to defend.
          </p>
          <RollTable rows={DEFENSE_RESULTS} />
          <GlitchTip>Reduce incoming damage by d6.</GlitchTip>
          <GlitchTip>Neutralize a fumble. Take normal damage instead of ×2.</GlitchTip>

          <OptionalRule tag="Alternate" title="GM rolls attacks">
            <p>Instead of the player defending, the GM rolls <Roll>Agility DR12</Roll> for the enemy's attack.</p>
            <RollTable rows={GM_ATTACK_RESULTS} />
          </OptionalRule>
        </Step>

        {/* ---- 6 ---- */}
        <Step id="step-6" number="6" title="At 0 HP: the Battered table">
          <p>When you hit 0 HP, roll <Roll>d8</Roll>:</p>
          <RollTable rows={BATTERED} />
          <p>Below 0 HP, you're Dead* by the same rule: unless you can pay.</p>

          <InsetPanel title="Cy-Rage">
            <p>
              Gain <Roll>+d8 HP</Roll> and attack random targets twice per round with your most effective weapon. Attacks are DR10, defense DR14. It lasts until you're Battered, Dead, or sedated.
            </p>
          </InsetPanel>

          <GlitchTip>Reroll on the Battered table and take the better result.</GlitchTip>
        </Step>

        {/* ---- 7 ---- */}
        <Step id="step-7" number="7" title="After combat">
          <Directory
            labelWidth="13rem"
            items={[
              {
                label: 'Count your bullets',
                description: (
                  <>
                    <p>
                      For each weapon you fired, roll <Roll>d8</Roll> (single shot or melee) or <Roll>d6</Roll> (autofire). On 1–3 the mag is empty and must be replaced.
                    </p>
                    {character && (
                      <RollerRow data-align="start">
                        <SegmentedDice character_id={character.id} label="Single shot / melee" dice="1d8" />
                        <SegmentedDice character_id={character.id} label="Autofire" dice="1d6" />
                      </RollerRow>
                    )}
                  </>
                ),
              },
              {
                label: 'Catch your breath',
                description: <>If there's still time and it's safe: sit down, hydrate, breathe. Restore <Roll>d4 HP</Roll>.</>,
              },
              {
                label: 'Infestations',
                description: 'If you have Nano powers: infestations linked to a Nano power trigger on a fumble. Others trigger when you take 5+ damage from a single attack and fail a Presence DR10 test.',
              },
              {
                label: 'App Backlash',
                description: 'If you fumbled while using an App, the GM determines the Backlash.',
              },
            ]}
          />
        </Step>

        {/* ---- Reference ---- */}
        <Section id="rules" title="Rules reference">
          <Stack $gap="2.5rem">
            <Callout title="Tests">
              <p>
                Roll <Roll>d20 ± ability</Roll> and meet or beat the Difficulty Rating (DR) to succeed.
              </p>
            </Callout>

            <Stack>
              <SubHeading>Difficulty ratings</SubHeading>
              <Scale steps={DR_SCALE} />
            </Stack>

            <Stack>
              <SubHeading>Abilities</SubHeading>
              <Directory items={ABILITIES} labelWidth="10rem" />
            </Stack>

            <Stack>
              <SubHeading>Glitches</SubHeading>
              <p>
                Sometimes the constant bad luck just… glitches. You start with <Roll>d2</Roll> Glitches (or your class die). Once you've spent them all and had a chance to rest, roll that die again to regain them.
              </p>
              <Directory items={GLITCH_USES} labelWidth="13rem" />
            </Stack>

            <Stack>
              <SubHeading>Downtime</SubHeading>
              <Directory items={DOWNTIME} labelWidth="13rem" />
            </Stack>
          </Stack>
        </Section>
      </Page>
    </>
  );
}

/* ==========================================================================
   COMPONENTS
   ========================================================================== */

// Still exported: other pages may import it.
export function GlitchTip({ children }) {
  return (
    <Tip label="Glitch" tone="glitch">
      {children}
    </Tip>
  );
}

function Step({ id, number, title, children }) {
  return (
    <StepBlock id={id}>
      <StepNumber aria-hidden="true">{number}</StepNumber>
      <StepTitle>{title}</StepTitle>
      <Stack>{children}</Stack>
    </StepBlock>
  );
}

function QuickRefRow({ character, label, statKey }) {
  const modifier = formatModifier(character?.stats?.[statKey]);
  return (
    <QuickRow>
      <QuickAction>{label}</QuickAction>
      <QuickTest>
        <Roll>{STAT_LABELS[statKey]} DR12</Roll>
        {modifier && <Modifier>({modifier})</Modifier>}
      </QuickTest>
    </QuickRow>
  );
}

// Tests that involve a roll show as a Roll token; "No roll" / "Varies"
// stay plain. A dice roller appears when a character is selected.
function Action({ name, test, description, risk, optional, statKey, character, dr, children }) {
  const modifier = statKey ? formatModifier(character?.stats?.[statKey]) : null;

  return (
    <ActionCard data-optional={optional ? 'true' : undefined}>
      <ActionHeader>
        <ActionName>
          {name}
          {optional && <OptionalTag>Optional</OptionalTag>}
        </ActionName>
        <ActionTest>
          {statKey ? <Roll>{test}</Roll> : test}
          {modifier && <Modifier>({modifier})</Modifier>}
        </ActionTest>
      </ActionHeader>

      <ActionText>{description}</ActionText>

      {children}

      {risk && (
        <ActionRisk>
          <strong>Risk:</strong> {risk}
        </ActionRisk>
      )}

      {statKey && character && (
        <RollerRow>
          <SegmentedDice
            character_id={character.id}
            dice="1d20"
            mod={character.stats?.[statKey] ?? 0}
            dr={dr}
            showCombatOutcome={dr !== undefined}
          />
        </RollerRow>
      )}
    </ActionCard>
  );
}
