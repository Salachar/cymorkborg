import React from "react";

import SegmentedDice from "../SegmentedDice";

export default function CreditsTracker({
  character = null,
  locked = false,
  onUpdate = () => {},
}) {
  if (!character) return null;

  const credits = character.credits || 0;

  const adjustCredits = (amount) => {
    character.credits = character.credits + amount;
    onUpdate();
  };

  const handleRollComplete = (total) => {
    character.credits = total;
    onUpdate();
  };

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value) || 0;
    character.credits = newValue;
    onUpdate();
  };

  return (
    <div className="flex-1">
      <h3 className="text-xl font-bold text-cy-cyan mb-3">Credits</h3>

      {/* Current Balance Display */}
      <div className="relative h-20 flex items-center justify-center overflow-hidden bg-gray-900 border-2 border-gray-700 mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cy-cyan/5 to-cy-yellow/5" />

        <div className="relative z-10 flex items-center gap-3">
          <input
            type="number"
            value={credits}
            onChange={handleInputChange}
            className="
              w-32 h-12 px-3 text-center
              bg-black border-2 border-cy-yellow/30
              font-mono text-3xl font-bold text-cy-yellow
              focus:border-cy-yellow focus:outline-none
              transition-colors
            "
          />
          <span className="text-3xl font-bold text-cy-yellow">¤</span>
        </div>
      </div>

      {/* Quick Adjust Buttons */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <AdjustButton amount={1} onClick={adjustCredits} />
        <AdjustButton amount={10} onClick={adjustCredits} />
        <AdjustButton amount={50} onClick={adjustCredits} />
        <AdjustButton amount={100} onClick={adjustCredits} />
        <AdjustButton amount={-1} onClick={adjustCredits} negative />
        <AdjustButton amount={-10} onClick={adjustCredits} negative />
        <AdjustButton amount={-50} onClick={adjustCredits} negative />
        <AdjustButton amount={-100} onClick={adjustCredits} negative />
      </div>

      {/* Dice Roller (unlocked only) */}
      {!locked && (
        <div className="p-3 bg-gray-900/50 border border-gray-800">
          <div className="text-xs text-gray-400 mb-2">Roll Starting Credits:</div>
          <SegmentedDice
            dice="2d6"
            multiplier={10}
            displayFormat={(val) => `${val}¤`}
            onRollComplete={handleRollComplete}
            character_id={character.id}
          />
        </div>
      )}
    </div>
  );
}

function AdjustButton({ amount, onClick, negative = false }) {
  return (
    <button
      onClick={() => onClick(amount)}
      className={`
        h-10 font-mono font-bold text-sm
        border transition-all
        ${negative
          ? 'bg-red-900/20 border-red-700/50 text-red-400 hover:bg-red-900/40 hover:border-red-600'
          : 'bg-green-900/20 border-green-700/50 text-green-400 hover:bg-green-900/40 hover:border-green-600'
        }
      `}
    >
      {amount > 0 ? '+' : ''}{amount}
    </button>
  );
}
