import React from "react";

import SegmentedDice from "../SegmentedDice";

const STAT_INFO = {
  STR: {
    name: "Strength",
    description: "Strike, grapple, lift, throw",
  },
  AGI: {
    name: "Agility",
    description: "Sneak, dodge, drive, autofire",
  },
  PRE: {
    name: "Presence",
    description: "Snipe/shoot, use Nano, charm",
  },
  TOU: {
    name: "Toughness",
    description: "Survive falling, poison, and elements",
  },
  KNO: {
    name: "Knowledge",
    description: "Science, use tech or App",
  },
};

function StatButton({ locked = false, value = 0, onChange = () => {} }) {
  if (locked) {
    // Locked view: just show the value prominently
    return (
      <div className="flex items-center justify-center h-16 w-24 bg-black/30 border border-cy-cyan/30">
        <span className="text-4xl font-black text-cy-cyan font-mono">
          {value >= 0 ? '+' : ''}{value}
        </span>
      </div>
    );
  }

  // Unlocked view: show increment/decrement buttons
  return (
    <div className="flex items-stretch gap-1 h-12 w-32">
      <button
        onClick={() => onChange(-1)}
        className="flex-1 flex items-center justify-center bg-gray-800 hover:bg-gray-700 border border-gray-600 text-cy-cyan font-bold text-2xl transition-colors"
      >
        −
      </button>
      <div className="flex-1 flex items-center justify-center bg-black/50 border border-cy-yellow/30">
        <span className="text-2xl font-black text-cy-yellow font-mono">
          {value >= 0 ? '+' : ''}{value}
        </span>
      </div>
      <button
        onClick={() => onChange(1)}
        className="flex-1 flex items-center justify-center bg-gray-800 hover:bg-gray-700 border border-gray-600 text-cy-cyan font-bold text-2xl transition-colors"
      >
        +
      </button>
    </div>
  );
}

export default function Stats({
  character = null,
  locked = false,
  onUpdate = () => {},
}) {
  if (!character) return null;

  const stats = character.stats;
  const statKeys = Object.keys(STAT_INFO);

  // Locked view - compact grid
  if (locked) {
    return (
      <div className="w-full mb-6">
        <h3 className="text-2xl font-bold text-cy-cyan mb-3">ABILITIES</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {statKeys.map((statKey) => {
            const info = STAT_INFO[statKey];
            const value = stats[statKey];

            return (
              <div
                key={statKey}
                className="bg-gray-900/50 border border-gray-800 p-3"
              >
                {/* Stat name and abbreviation */}
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm font-bold text-cy-cyan uppercase">
                    {statKey}
                  </span>
                  <span className="text-xs text-gray-500">
                    {info.name}
                  </span>
                </div>

                {/* Large modifier value */}
                <div className="text-center mb-2">
                  <span className="text-4xl font-black text-cy-cyan font-mono">
                    {value >= 0 ? '+' : ''}{value}
                  </span>
                </div>

                {/* Description */}
                <div className="text-xs text-gray-500 text-center leading-tight">
                  {info.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Unlocked view - full cards with rollers
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-cy-cyan mb-3">ABILITIES</h3>

      <div className="mb-6 bg-cy-yellow/10 border border-cy-yellow/30 p-4">
        <p className="text-sm text-gray-300 leading-relaxed">
          <span className="font-bold text-cy-yellow">Roll 3d6 per ability:</span>{' '}
          <span className="font-mono text-xs block mt-2 text-gray-400">
            1-4 = -3 | 5-6 = -2 | 7-8 = -1 | 9-12 = ±0 | 13-14 = +1 | 15-16 = +2 | 17-20 = +3
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {statKeys.map((statKey) => {
          const info = STAT_INFO[statKey];
          const value = stats[statKey];

          const statMod = character.constructor.die?.stats?.[statKey]?.mod || 0;

          return (
            <div
              key={statKey}
              className="flex flex-col bg-gray-900/80 border-2 border-gray-800 hover:border-cy-cyan/30 transition-colors"
            >
              {/* Header - Horizontal layout */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-3 border-b border-gray-700 flex items-center justify-between">
                <div>
                  <div className="text-lg font-black text-cy-cyan uppercase tracking-wide">
                    {info.name} <span className="text-xs text-gray-500 font-mono uppercase">{statKey}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 leading-tight text-right">
                  {info.description}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {statMod !== 0 && `Class bonus: ${statMod >= 0 ? '+' : ''}${statMod}`}
                </div>
              </div>

              {/* Body - Horizontal layout for controls and dice */}
              <div className="flex items-center gap-4 p-4">
                {/* Stat Value/Controls */}
                <div className="flex-shrink-0">
                  <StatButton
                    locked={locked}
                    value={value}
                    onChange={(mod) => {
                      const currentValue = character[statKey.toLowerCase()];
                      character[statKey.toLowerCase()] = currentValue + mod;
                      onUpdate();
                    }}
                  />
                </div>

                {/* Dice Roller */}
                <div className="flex-1 flex items-center pl-2">
                  <SegmentedDice
                    dice="3d6"
                    mod={statMod}
                    onRollComplete={(total) => {
                      // Map the 3d6 total (3-18) to stat modifier (-3 to +3)
                      let modifier = 0;
                      if (total <= 4) modifier = -3;
                      else if (total <= 6) modifier = -2;
                      else if (total <= 8) modifier = -1;
                      else if (total <= 12) modifier = 0;
                      else if (total <= 14) modifier = +1;
                      else if (total <= 16) modifier = +2;
                      else modifier = +3;

                      // Update the character stat
                      character[statKey.toLowerCase()] = modifier;
                      onUpdate();
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
