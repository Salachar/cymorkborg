import React, { useState } from "react";

import CollapsibleSection from '../CollapsibleSection';

const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

export default function Infestations({
  character = null,
  allInfestations = [],
  onUpdate = () => {},
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  if (!character) return null;

  // Get standalone infestations
  const infestations = character._infestations || {};
  const infestationEntries = Object.keys(infestations)
    .map(infId => {
      const infestation = allInfestations.find(i => (i.id || i.label) === infId);
      return { infId, infestation };
    })
    .filter(entry => entry.infestation);

  // Get all used infestation IDs (from powers AND standalone)
  const usedInfestationIds = [
    ...Object.values(character._nano_powers || {}).map(p => p.infestation).filter(Boolean),
    ...Object.keys(infestations)
  ];

  // Available infestations (not used anywhere)
  const availableInfestations = allInfestations.filter(
    inf => !usedInfestationIds.includes(inf.id || inf.label)
  );

  const handleAdd = (infestation) => {
    if (!character._infestations) {
      character._infestations = {};
    }

    const infId = infestation.id || infestation.label;
    character._infestations[infId] = true;

    onUpdate();
    setIsAdding(false);
  };

  const handleRemove = (infId) => {
    if (character._infestations && character._infestations[infId]) {
      delete character._infestations[infId];
      onUpdate();
    }
  };

  const handleRoll = () => {
    if (isRolling || availableInfestations.length === 0) return;

    setIsRolling(true);
    const duration = 500;
    const interval = 50;
    let elapsed = 0;
    let finalIndex = null;

    const intervalId = setInterval(() => {
      elapsed += interval;
      finalIndex = rollDie(availableInfestations.length) - 1;
      setHighlightedIndex(finalIndex);

      if (elapsed >= duration) {
        clearInterval(intervalId);

        setTimeout(() => {
          setIsRolling(false);
          setHighlightedIndex(null);

          const rolledInfestation = availableInfestations[finalIndex];
          handleAdd(rolledInfestation);
        }, 150);
      }
    }, interval);
  };

  return (
    <CollapsibleSection
      title="Infestations"
      character={character}
      headerClass="bg-gradient-to-r from-red-900/20 via-gray-900 to-red-900/20 border-2 border-red-600/50 p-4 mb-4"
      headerTextClass="text-red-400"
      headerChildrenEnabled={availableInfestations.length > 0}
      headerChildren={(
        <div className="flex gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRoll();
            }}
            disabled={isRolling}
            className="px-3 py-1 bg-red-900 hover:bg-red-800 border border-red-700 text-red-300 font-bold text-sm uppercase disabled:opacity-50"
          >
            {isRolling ? "..." : `Roll d${availableInfestations.length}`}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsAdding(!isAdding);
            }}
            className="px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-bold text-sm uppercase"
          >
            {isAdding ? "Cancel" : "Add Infestation"}
          </button>
        </div>
      )}
    >
      {/* Add Infestation Interface */}
      {isAdding && (
        <div className="mb-4 bg-gray-900/50 border border-gray-800 p-4 max-h-96 overflow-y-auto">
          <div className="text-sm font-bold text-gray-400 uppercase mb-3">Select Infestation:</div>
          <div className="space-y-1">
            {availableInfestations.map((infestation, index) => {
              const isHighlighted = highlightedIndex === index;

              return (
                <div
                  key={infestation.id || infestation.label}
                  onClick={() => {
                    if (isRolling) return;
                    handleAdd(infestation);
                  }}
                  className={`
                    p-3 cursor-pointer transition-all
                    ${isHighlighted
                      ? 'bg-red-400/40 border-l-2 border-red-400 text-white ring-2 ring-red-400/50'
                      : 'hover:bg-gray-800 border-l-2 border-transparent text-gray-400 hover:text-gray-300'
                    }
                  `}
                >
                  <div className="font-bold text-sm">{infestation.label}</div>
                  {infestation.description && (
                    <div className="text-xs text-gray-500 mt-1">{infestation.description}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Current Infestations */}
      {infestationEntries.length === 0 ? (
        <div className="text-center py-12 text-gray-500 italic border border-gray-800 bg-gray-900/20">
          No standalone infestations
        </div>
      ) : (
        <div className="space-y-2">
          {infestationEntries.map(({ infId, infestation }) => (
            <div
              key={infId}
              className="bg-red-900/10 border border-red-900/30 p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-base font-bold text-red-400">
                  {infestation.label}
                </h4>
                <button
                  onClick={() => handleRemove(infId)}
                  className="text-red-400 hover:text-red-300 text-sm border border-red-700 px-2 py-1 hover:bg-red-900/20 transition-colors"
                >
                  Remove
                </button>
              </div>

              {infestation.description && (
                <div className="text-sm text-gray-400">
                  {infestation.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Info Note */}
      <div className="mt-4 text-xs text-gray-500 bg-gray-900/30 border border-gray-800 p-3">
        These infestations are not linked to Nano Powers. They are triggered when you take 5+ damage from a single attack and fail a Presence DR10 test.
        Infestations can be acquired through App fumbles, Glitch overflow, or other gameplay events.
      </div>
    </CollapsibleSection>
  );
}
