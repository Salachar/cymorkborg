import React, { useState } from "react";

import CollapsibleSection from '../CollapsibleSection';

const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

export default function Cyberware({
  character = null,
  allCyberware = [],
  onUpdate = () => {},
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const [isOpen, setIsOpen] = useState(true);

  if (!character) return null;

  // Get installed cyberware
  const cyberware = character._cyberware || {};
  const cyberwareEntries = Object.keys(cyberware)
    .map(cyberwareId => {
      const cyber = allCyberware.find(c => (c.id || c.label) === cyberwareId);
      return { cyberwareId, cyber };
    })
    .filter(entry => entry.cyber);

  // Available cyberware (not yet installed)
  const availableCyberware = allCyberware.filter(
    cyber => !Object.keys(cyberware).includes(cyber.id || cyber.label)
  );

  const handleAdd = (cyber) => {
    if (!character._cyberware) {
      character._cyberware = {};
    }

    const cyberId = cyber.id || cyber.label;
    character._cyberware[cyberId] = true;

    onUpdate();
    setIsAdding(false);
  };

  const handleRemove = (cyberId) => {
    if (character._cyberware && character._cyberware[cyberId]) {
      delete character._cyberware[cyberId];
      onUpdate();
    }
  };

  const handleRoll = () => {
    if (isRolling || availableCyberware.length === 0) return;

    setIsRolling(true);
    const duration = 500;
    const interval = 50;
    let elapsed = 0;
    let finalIndex = null;

    const intervalId = setInterval(() => {
      elapsed += interval;
      finalIndex = rollDie(availableCyberware.length) - 1;
      setHighlightedIndex(finalIndex);

      if (elapsed >= duration) {
        clearInterval(intervalId);

        setTimeout(() => {
          setIsRolling(false);
          setHighlightedIndex(null);

          const rolledCyber = availableCyberware[finalIndex];
          handleAdd(rolledCyber);
        }, 150);
      }
    }, interval);
  };

  return (
    <CollapsibleSection
      title="Cybertech"
      character={character}
      headerClass="bg-gradient-to-r from-gray-700/20 via-gray-900 to-gray-700/20 border-2 border-gray-600/50 p-4 mb-4"
      headerTextClass="text-gray-400"
      headerChildrenEnabled={availableCyberware.length > 0}
      headerChildren={(
        <div className="flex gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRoll();
            }}
            disabled={isRolling}
            className="px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-300 font-bold text-sm uppercase disabled:opacity-50"
          >
            {isRolling ? "..." : `Roll d${availableCyberware.length}`}
          </button>
          <button
            onClick={(e) => {
              setIsAdding(!isAdding)
            }}
            className="px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-bold text-sm uppercase"
          >
            {isAdding ? "Cancel" : "Add Cyberware"}
          </button>
        </div>
      )}
    >
      {isAdding && (
        <div className="mb-4 bg-gray-900/50 border border-gray-800 p-4 max-h-96 overflow-y-auto">
          <div className="text-sm font-bold text-gray-400 uppercase mb-3">Select Cyberware:</div>
          <div className="space-y-1">
            {availableCyberware.map((cyber, index) => {
              const isHighlighted = highlightedIndex === index;

              return (
                <div
                  key={cyber.id || cyber.label}
                  onClick={() => {
                    if (isRolling) return;
                    handleAdd(cyber);
                  }}
                  className={`
                    p-3 cursor-pointer transition-all
                    ${isHighlighted
                      ? 'bg-gray-600/40 border-l-2 border-gray-400 text-white ring-2 ring-gray-400/50'
                      : 'hover:bg-gray-800 border-l-2 border-transparent text-gray-400 hover:text-gray-300'
                    }
                  `}
                >
                  <div className="font-bold text-sm">{cyber.label}</div>
                  {cyber.description && (
                    <div className="text-xs text-gray-500 mt-1">{cyber.description}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Current Cyberware */}
      {cyberwareEntries.length === 0 ? (
        <div className="text-center py-12 text-gray-500 italic border border-gray-800 bg-gray-900/20">
          No cyberware installed
        </div>
      ) : (
        <div className="space-y-2">
          {cyberwareEntries.map(({ cyberwareId, cyber }) => (
            <div
              key={cyberwareId}
              className="bg-gray-900/20 border-l-2 border-gray-600 p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-base font-bold text-gray-300">
                  {cyber.label}
                </h4>
                <button
                  onClick={() => handleRemove(cyberwareId)}
                  className="text-red-400 hover:text-red-300 text-sm border border-red-700 px-2 py-1 hover:bg-red-900/20 transition-colors"
                >
                  Remove
                </button>
              </div>

              {cyber.description && (
                <div className="text-sm text-gray-400">
                  {cyber.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Info Note */}
      <div className="mt-4 text-xs text-gray-500 bg-gray-900/30 border border-gray-800 p-3">
        Cyberware represents your mechanical augmentations and implants. These modifications provide various benefits but may also have drawbacks or side effects.
      </div>
    </CollapsibleSection>
  );
}
