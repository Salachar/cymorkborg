import {
  Page,
  PageHeader,
  DefinitionBox,
} from "../components/PageComponents";

export default function Combat() {
  return (
    <Page>
      <PageHeader
        title="Combat Flow"
        subtitle="Step-by-step guide for running combat encounters"
      />

      {/* Quick Reference Box */}
      <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 border-2 border-red-500 p-6 mb-8">
        <h2 className="text-2xl font-black text-red-400 mb-3 uppercase">Quick Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="text-gray-300">
            <span className="text-cy-cyan font-bold">Melee Attack:</span> Strength DR12
          </div>
          <div className="text-gray-300">
            <span className="text-cy-cyan font-bold">Ranged Attack:</span> Presence DR12
          </div>
          <div className="text-gray-300">
            <span className="text-cy-cyan font-bold">Autofire:</span> Agility DR12
          </div>
          <div className="text-gray-300">
            <span className="text-cy-cyan font-bold">Defense:</span> Agility DR12
          </div>
          <div className="text-gray-300">
            <span className="text-cy-cyan font-bold">Use App:</span> Knowledge DR12
          </div>
          <div className="text-gray-300">
            <span className="text-cy-cyan font-bold">Use Nano:</span> Presence DR12
          </div>
        </div>
      </div>

      <DefinitionBox
        title="Using Glitches in Combat"
        definitions={[
          {
            label: "Reduce DR by 4",
            description: "Use before rolling a test",
          }, {
            label: "Neutralize Crit/Fumble",
            description: "Cancel the special effect",
          }, {
            label: "Reduce Damage by d6",
            description: "Lower incoming damage",
          }, {
            label: "Deal Max Damage",
            description: "No roll needed for damage",
          }, {
            label: "Reroll Any Die",
            description: "Yours or someone else's",
          }
        ]}
      >
        <p className="text-gray-300 mb-4 text-sm">
          Reality glitches in your favor. You start with d2 Glitches (or class die).
          Regain them by rolling again after spending all and resting.
        </p>
      </DefinitionBox>

      {/* Combat Steps */}
      <div className="space-y-6 mt-8">

        {/* Step 1 */}
        <CombatStep
          number="01"
          title="Initiative"
          color="cyan"
        >
          <div className="space-y-3">
            <div className="bg-black/30 p-4 rounded">
              <p className="text-gray-300 mb-2">
                <strong className="text-cy-yellow">Roll d6:</strong>
              </p>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>• <strong className="text-cy-cyan">1-3:</strong> Enemies act first</li>
                <li>• <strong className="text-cy-cyan">4-6:</strong> PCs act first</li>
              </ul>
            </div>
            <p className="text-gray-400 text-sm">
              <strong className="text-cy-cyan">If needed:</strong> Roll Agility + d6 to determine individual order within each group.
            </p>
          </div>
        </CombatStep>

        {/* Step 2 */}
        <CombatStep
          number="02"
          title="Your Turn: Choose Your Action"
          color="cyan"
        >
          <div className="space-y-3">
            <div className="bg-cy-cyan/10 border border-cy-cyan p-3 rounded">
              <p className="text-cy-cyan text-sm">
                <strong>Cybertech Tip:</strong> Check for attack options on any cybertech you might have.
              </p>
            </div>

            <ActionOption
              action="Take Cover (Optional)"
              test="No roll"
              description="Position yourself behind cover. Increase DR to hit you, or lower DR to defend while covered."
              optional={true}
            />
            <div className="ml-8 space-y-1 text-xs text-gray-400 mb-2">
              <p>• <strong className="text-blue-400">Light cover ±2DR</strong> - office cubicle, car door, hostage, explosive gas tank</p>
              <p>• <strong className="text-blue-600">Heavy cover ±4DR</strong> - concrete wall, cyberbike, bulletproof glass, reactor</p>
              <p className="text-gray-500 italic mt-2">When an attack misses: Heavy → Light, Light → Destroyed</p>
            </div>

            <ActionOption
              action="Melee Attack"
              test="Strength DR12"
              description="Get close and personal. Roll to hit, then roll weapon damage."
            />
            <ActionOption
              action="Ranged Attack (Single Shot)"
              test="Presence DR12"
              description="Aim and fire. Roll to hit, then roll weapon damage."
            />
            <ActionOption
              action="Aim at Target (Optional)"
              test="No roll (1 round)"
              description="Spend one round aiming. Next attack gets either -2DR to hit OR +2 damage."
              optional={true}
            />
            <ActionOption
              action="Autofire"
              test="Agility DR12"
              description="Spray and pray. On hit: roll damage, then you can attack again (same or different target). Max 3 attacks total. Check armor for each hit."
            />
            <ActionOption
              action="Suppressive Fire (Optional)"
              test="Agility (spend mag)"
              description="Suppress up to d3 targets with automatic weapon. Suppressed targets must either get out of the way (+4DR to next action) or stand their ground (defend DR14 autofire)."
              optional={true}
            />
            <ActionOption
              action="Use App"
              test="Knowledge DR12"
              description="Must be jacked into your Deck. All non-App actions are +2DR while jacked in."
              warning="Fumble = App burns for the day + Backlash. Each use increases fumble risk by 1 until next day."
            />
            <ActionOption
              action="Use Nano"
              test="Presence DR12"
              description="Activate your Nano power."
              warning="Failure = power fails + take d2 damage. Each use increases fumble risk by 1 for the day."
            />
            <ActionOption
              action="Other Actions"
              test="Varies"
              description="Move, reload, use item, help ally, etc. GM determines if a test is needed."
            />

            {/* Range Note */}
            <div className="bg-gray-900/50 border border-gray-700 p-3 rounded mt-4">
              <p className="text-cy-yellow font-bold text-sm mb-2">Range Modifiers (Optional)</p>
              <p className="text-gray-400 text-xs mb-2">
                <strong>Close range</strong> = arm's length or less • <strong>Long range</strong> = farther than a room away
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• <strong className="text-red-400">+2DR</strong> when firing at close range</li>
                <li>• Autofire: <strong className="text-green-400">+2 damage</strong> at close, <strong className="text-red-400">-2 damage</strong> at long</li>
              </ul>
            </div>
          </div>
        </CombatStep>

        {/* Step 3 */}
        <CombatStep
          number="03"
          title="Roll to Hit"
          color="yellow"
        >
          <div className="space-y-3">
            <div className="bg-black/30 p-4 rounded">
              <p className="text-gray-300 mb-3">
                Roll <strong className="text-cy-yellow">d20 ± your Ability Score</strong>
              </p>
              <div className="space-y-2 text-sm">
                <ResultBox
                  result="Natural 20 (Critical Hit)"
                  effect="×2 damage + reduce target's armor by 1 tier"
                  color="cyan"
                />
                <ResultBox
                  result="≥ DR12 (Success)"
                  effect="Roll weapon damage"
                  color="green"
                />
                <ResultBox
                  result="< DR12 (Miss)"
                  effect="You miss. End your turn."
                  color="gray"
                />
                <ResultBox
                  result="Natural 1 (Fumble)"
                  effect="Roll d6 on weapon mishap table"
                  color="red"
                />
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-600 p-3 rounded">
              <p className="text-red-400 font-bold text-sm mb-2">Fumble Table (d6):</p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• <strong>1-3:</strong> Out of ammo or drop weapon</li>
                <li>• <strong>4-5:</strong> Misfire / Weapon breaks</li>
                <li>• <strong>6:</strong> Weapon explodes, you take d6 damage</li>
              </ul>
            </div>
          </div>
        </CombatStep>

        {/* Step 4 */}
        <CombatStep
          number="04"
          title="Roll Damage (If You Hit)"
          color="yellow"
        >
          <div className="space-y-3">
            <p className="text-gray-300">
              Roll your weapon's damage die. Target reduces damage by their armor rating.
            </p>
            <div className="bg-black/30 p-4 rounded">
              <p className="text-gray-400 text-sm mb-2">
                <strong className="text-cy-yellow">Example:</strong>
              </p>
              <p className="text-gray-400 text-sm">
                You hit with a pistol (d8 damage). You roll 6. Enemy has -d2 armor and rolls 1.
                Final damage: <strong className="text-cy-cyan">5 HP</strong>
              </p>
            </div>
            <div className="bg-cy-cyan/10 border border-cy-cyan p-3 rounded">
              <p className="text-cy-cyan text-sm">
                <strong>Glitch Tip:</strong> Spend a Glitch to deal maximum weapon damage (no roll needed).
              </p>
            </div>

            {/* Hits Always Hurt */}
            <div className="bg-gray-900/50 border border-gray-700 p-3 rounded mt-4">
              <p className="text-cy-yellow font-bold text-sm mb-2">Hits Always Hurt (Optional)</p>
              <p className="text-gray-300 text-xs">
                Hits always deal a minimum of <strong className="text-cy-yellow">1 damage</strong> regardless of armor reduction or other negative damage modifiers <span className="text-gray-500 italic">unless that would bring a character down to 0 HP</span>.
              </p>
            </div>
          </div>
        </CombatStep>

        {/* Step 5 */}
        <CombatStep
          number="05"
          title="Enemy's Turn: Defend Yourself"
          color="red"
        >
          <div className="space-y-3">
            <div className="bg-black/30 p-4 rounded">
              <p className="text-gray-300 mb-3">
                When attacked, roll <strong className="text-cy-yellow">Agility DR12</strong> to defend.
              </p>
              <div className="space-y-2 text-sm">
                <ResultBox
                  result="Natural 20 (Critical Defense)"
                  effect="You dodge AND get a free attack on the enemy"
                  color="cyan"
                />
                <ResultBox
                  result="≥ DR12 (Success)"
                  effect="You dodge. No damage taken."
                  color="green"
                />
                <ResultBox
                  result="< DR12 (Failure)"
                  effect="You're hit. Roll your armor to reduce damage."
                  color="gray"
                />
                <ResultBox
                  result="Natural 1 (Fumble)"
                  effect="You take ×2 damage + armor reduced by 1 tier"
                  color="red"
                />
              </div>
            </div>

            <div className="bg-cy-cyan/10 border border-cy-cyan p-3 rounded">
              <p className="text-cy-cyan text-sm">
                <strong>Glitch Tip:</strong> Spend a Glitch to reduce incoming damage by d6.
              </p>
            </div>
          </div>
        </CombatStep>

        {/* Step 6 */}
        <CombatStep
          number="06"
          title="At 0 HP: Roll on Battered Table"
          color="red"
        >
          <div className="space-y-3">
            <p className="text-gray-300 mb-3">
              When you hit 0 HP, roll <strong className="text-cy-yellow">d8</strong>:
            </p>
            <div className="space-y-2">
              <BatteredResult
                roll="1-2"
                outcome="Fall Unconscious"
                description="Out for d4 rounds, wake up with d4 HP"
              />
              <BatteredResult
                roll="3-4"
                outcome="Cy-Rage Test"
                description="Test Presence DR10 (+1DR per cybertech). Success = unconscious. Failure = CY-RAGE."
              />
              <BatteredResult
                roll="5-6"
                outcome="Critical Injury"
                description="Random body part destroyed. Unable to act d4 rounds, then active with d4 HP."
              />
              <BatteredResult
                roll="7"
                outcome="Hemorrhage"
                description="Death in d2 hours unless treated. +4DR first hour, +6DR last hour."
              />
              <BatteredResult
                roll="8"
                outcome="Dead*"
                description="*Unless you can pay. 1k¤ in bank = 50% chance Emergency Response Team saves you (at 0 to -1 HP). Add a zero per HP below -1."
              />
            </div>

            <div className="bg-red-900/20 border-2 border-red-600 p-4 rounded mt-4">
              <p className="text-red-400 font-bold mb-2 uppercase">Cy-Rage</p>
              <p className="text-gray-400 text-sm">
                Gain +d8 HP. Attack random targets twice per round with most effective weapon.
                Attacks DR10, Defense DR14. Continues until Battered, Dead, or sedated.
              </p>
            </div>
          </div>
        </CombatStep>

        {/* Step 7 */}
        <CombatStep
          number="07"
          title="After Combat: Recovery & Checks"
          color="green"
        >
          <div className="space-y-4">
            <div className="bg-black/30 p-4 rounded">
              <p className="text-cy-yellow font-bold mb-2">Count Your Bullets</p>
              <p className="text-gray-300 text-sm mb-2">
                For each weapon you fired, roll:
              </p>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>• <strong className="text-cy-cyan">d8</strong> (if you used single shot or melee)</li>
                <li>• <strong className="text-cy-cyan">d6</strong> (if you used autofire)</li>
              </ul>
              <p className="text-gray-400 text-sm mt-2">
                <strong className="text-red-400">1-3:</strong> Magazine is empty. Must reload.
              </p>
            </div>

            <div className="bg-black/30 p-4 rounded">
              <p className="text-cy-yellow font-bold mb-2">Catch Your Breath</p>
              <p className="text-gray-300 text-sm">
                If there's still time and it's safe: sit down, hydrate, breathe.
                Restore <strong className="text-green-400">d4 HP</strong>.
              </p>
            </div>

            <div className="bg-black/30 p-4 rounded">
              <p className="text-cy-yellow font-bold mb-2">Check for Infestations</p>
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-cy-cyan">If you have Nano powers:</strong>
              </p>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>• Infestations linked to Nano power: Trigger on fumble</li>
                <li>• Other infestations: Trigger when taking 5+ damage from single attack + failing Presence DR10</li>
              </ul>
            </div>

            <div className="bg-black/30 p-4 rounded">
              <p className="text-cy-yellow font-bold mb-2">Check for App Backlash</p>
              <p className="text-gray-300 text-sm">
                If you fumbled while using an App, the GM determines the Backlash effect.
              </p>
            </div>
          </div>
        </CombatStep>
      </div>
    </Page>
  );
}

// Component: Combat Step
function CombatStep({ number, title, color, children }) {
  const colorMap = {
    cyan: "border-cy-cyan bg-cy-cyan/5",
    yellow: "border-cy-yellow bg-cy-yellow/5",
    red: "border-red-500 bg-red-900/10",
    green: "border-green-500 bg-green-900/10",
  };

  const textColorMap = {
    cyan: "text-cy-cyan",
    yellow: "text-cy-yellow",
    red: "text-red-400",
    green: "text-green-400",
  };

  return (
    <div className={`border-l-4 ${colorMap[color]} p-6`}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`text-4xl font-black ${textColorMap[color]} opacity-50`}>
          {number}
        </div>
        <h2 className={`text-2xl font-black ${textColorMap[color]} uppercase pt-1`}>
          {title}
        </h2>
      </div>
      <div className="pl-16">
        {children}
      </div>
    </div>
  );
}

// Component: Action Option
function ActionOption({ action, test, description, warning, optional }) {
  return (
    <div className={`bg-black/30 p-4 rounded ${optional ? 'border-l-2 border-cy-yellow' : ''}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-cy-cyan">{action}</h3>
        <span className="text-sm text-cy-yellow font-mono">{test}</span>
      </div>
      <p className="text-gray-400 text-sm mb-2">{description}</p>
      {warning && (
        <p className="text-red-400 text-xs"><b>!</b> {warning}</p>
      )}
    </div>
  );
}

// Component: Result Box
function ResultBox({ result, effect, color }) {
  const colorMap = {
    cyan: "border-cy-cyan text-cy-cyan",
    green: "border-green-500 text-green-400",
    gray: "border-gray-600 text-gray-400",
    red: "border-red-500 text-red-400",
  };

  return (
    <div className={`border-l-2 ${colorMap[color]} pl-3 py-1`}>
      <p className="font-bold text-sm">{result}</p>
      <p className="text-gray-400 text-xs">{effect}</p>
    </div>
  );
}

// Component: Battered Result
function BatteredResult({ roll, outcome, description }) {
  return (
    <div className="bg-black/40 border border-gray-700 p-3 rounded">
      <div className="flex items-start gap-3">
        <span className="text-cy-cyan font-bold font-mono text-sm">{roll}</span>
        <div>
          <p className="text-cy-yellow font-bold text-sm mb-1">{outcome}</p>
          <p className="text-gray-400 text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
}
