import React from "react";

import SegmentedDice from "../SegmentedDice";

export default function HealthBar({
  character = null,
  locked = false,
  onUpdate = () => {},
}) {
  if (!character) return null;

  const healthPercent = (character.current_health / character.max_health) * 100;
  const healthDie = character.constructor.die.health || "d8";
  const toughness = character.stats?.TOU || 0;

  const handleHealthRoll = (rolledValue) => {
    // Calculate new max HP: rolled die + toughness (minimum 1)
    const newMaxHP = Math.max(1, rolledValue + toughness);
    character.current_health = newMaxHP;
    onUpdate();
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-cy-cyan mb-3">Health</h3>

      {/* Health Bar */}
      <div className="relative h-16 flex items-center overflow-hidden bg-gray-900 border-2 border-gray-700">
        {/* Fill bar */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700 transition-all duration-300"
          style={{
            width: `${Math.max(0, Math.min(100, healthPercent))}%`,
            opacity: healthPercent > 0 ? 1 : 0.3,
          }}
        />

        {/* Low health warning glow */}
        {healthPercent > 0 && healthPercent <= 25 && (
          <div
            className="absolute inset-0 bg-red-500 animate-pulse"
            style={{ opacity: 0.2 }}
          />
        )}

        {/* Decrease button */}
        <button
          onClick={() => {
            character.current_health = character.current_health - 1;
            onUpdate();
          }}
          className="relative z-10 w-20 h-full text-3xl font-bold text-white/50 hover:text-white hover:bg-black/30 transition-all flex items-center justify-center"
        >
          −
        </button>

        {/* HP Display */}
        <div className="relative z-10 flex-1 flex items-center justify-center gap-2">
          <span className="font-mono text-3xl font-black text-white drop-shadow-lg">
            {character.current_health}
          </span>
          <span className="text-2xl text-white/50">/</span>
          <span className="font-mono text-2xl font-bold text-white/80">
            {character.max_health}
          </span>
        </div>

        {/* Increase button */}
        <button
          onClick={() => {
            character.current_health = character.current_health + 1;
            onUpdate();
          }}
          className="relative z-10 w-20 h-full text-3xl font-bold text-white/50 hover:text-white hover:bg-black/30 transition-all flex items-center justify-center"
        >
          +
        </button>
      </div>

      {/* Dice Roller (unlocked only) */}
      {!locked && (
        <div className="mt-4 p-4 bg-gray-900/50 border border-gray-800 flex items-center gap-6">
          <div className="flex-shrink-0">
            <SegmentedDice
              dice={`1${healthDie}`}
              mod={toughness}
              rollable={true}
              onRollComplete={handleHealthRoll}
              character_id={character.id}
            />
          </div>

          <div className="flex-1 border-l-2 border-gray-800 pl-6">
            <div className="text-sm text-gray-400 mb-1">
              Max HP Formula:
            </div>
            <div className="font-mono text-lg">
              <span className="text-cy-yellow">{healthDie}</span>
              <span className="text-gray-500 mx-2">+</span>
              <span className="text-cy-cyan">Toughness ({toughness >= 0 ? '+' : ''}{toughness})</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Rolling will set your HP to the new maximum
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
