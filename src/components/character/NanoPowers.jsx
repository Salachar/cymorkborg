import React, { useState } from "react";

import SegmentedDice from "../SegmentedDice";
import CollapsibleSection from '../CollapsibleSection';

const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

function PowerCard({
  power,
  infestation,
  allInfestations,
  usedInfestationIds,
  onRemove,
  onChangeInfestation,
  locked,
  character_id,
}) {
  const [isSelectingInfestation, setIsSelectingInfestation] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  // Filter out already-used infestations
  const availableInfestations = allInfestations.filter(
    inf => !usedInfestationIds.includes(inf.id || inf.label) || (inf.id || inf.label) === (infestation?.id || infestation?.label)
  );

  const handleRollInfestation = () => {
    if (isRolling) return;

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
          onChangeInfestation(rolledInfestation);
          setIsSelectingInfestation(false);
        }, 150);
      }
    }, interval);
  };

  return (
    <div className="border-2 border-purple-700/50 bg-gray-900 p-4 mb-4">
      {/* Power Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-bold text-purple-400">
            {power.label}
            {power.die && (
              <span className="text-cy-yellow ml-2">({power.die})</span>
            )}
          </h4>
          <button
            onClick={onRemove}
            className="text-red-400 hover:text-red-300 text-sm border border-red-700 px-2 py-1 hover:bg-red-900/20 transition-colors"
          >
            Remove
          </button>
        </div>

        {power.description && (
          <div className="text-sm text-gray-400 mb-3">
            {power.description}
          </div>
        )}

        {/* Power Dice Roller (if applicable) */}
        {power.die && locked && (
          <SegmentedDice
            dice={power.die}
            rollable={true}
            character_id={character_id}
          />
        )}
      </div>

      {/* Linked Infestation Section */}
      <div className="border-t border-purple-900/50 pt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-red-400 uppercase">Linked Infestation:</span>
            {!locked && (
              <button
                onClick={handleRollInfestation}
                disabled={isRolling}
                className="text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 disabled:opacity-50"
              >
                {isRolling ? "..." : `Roll d${availableInfestations.length}`}
              </button>
            )}
          </div>
          {!locked && infestation && (
            <button
              onClick={() => setIsSelectingInfestation(!isSelectingInfestation)}
              className="text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300"
            >
              {isSelectingInfestation ? "Close ▲" : "Change ▼"}
            </button>
          )}
        </div>

        {/* Current Infestation */}
        {infestation ? (
          <div className="bg-red-900/10 border border-red-900/30 p-3">
            <div className="text-sm font-bold text-red-400 mb-1">
              {infestation.label}
            </div>
            {infestation.description && (
              <div className="text-xs text-gray-400">
                {infestation.description}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-gray-800/50 border border-gray-700 p-3">
            <div className="text-sm text-gray-500 italic">
              No infestation selected - roll or choose
            </div>
          </div>
        )}

        {/* Infestation Selection List */}
        {isSelectingInfestation && !locked && (
          <div className="mt-2 bg-gray-900/50 border border-gray-800 p-3 max-h-64 overflow-y-auto">
            <div className="space-y-1">
              {availableInfestations.map((inf, index) => {
                const infId = inf.id || inf.label;
                const isSelected = infestation && (infestation.id || infestation.label) === infId;
                const isHighlighted = highlightedIndex === index;

                return (
                  <div
                    key={infId}
                    onClick={() => {
                      if (isRolling) return;
                      onChangeInfestation(inf);
                      setIsSelectingInfestation(false);
                    }}
                    className={`
                      p-2 cursor-pointer transition-all text-sm
                      ${isHighlighted
                        ? 'bg-red-400/40 border-l-2 border-red-400 text-white ring-2 ring-red-400/50'
                        : isSelected
                          ? 'bg-red-900/20 border-l-2 border-red-400 text-red-400 font-bold'
                          : 'hover:bg-gray-800 border-l-2 border-transparent text-gray-400 hover:text-gray-300'
                      }
                    `}
                  >
                    {inf.label}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function NanoPowers({
  character = null,
  allPowers = [],
  allInfestations = [],
  onUpdate = () => {},
}) {
  const [isAddingPower, setIsAddingPower] = useState(false);
  const [isRollingPower, setIsRollingPower] = useState(false);
  const [highlightedPowerIndex, setHighlightedPowerIndex] = useState(null);

  // const [isOpen, setIsOpen] = useState(true);

  if (!character) return null;

  // Get current powers from character
  const nanoPowers = character._nano_powers || {};
  const powerEntries = Object.keys(nanoPowers).map(powerId => {
    const powerData = nanoPowers[powerId];
    const power = allPowers.find(p => (p.id || p.label) === powerId);
    const infestation = allInfestations.find(i => (i.id || i.label) === powerData.infestation);
    return { powerId, power, infestation };
  }).filter(entry => entry.power); // Remove any invalid entries

  // Get all used infestation IDs (from powers AND standalone infestations)
  const usedInfestationIds = [
    ...Object.values(nanoPowers).map(p => p.infestation).filter(Boolean),
    ...Object.keys(character._infestations || {})
  ];

  // Available powers (not yet selected)
  const availablePowers = allPowers.filter(
    p => !Object.keys(nanoPowers).includes(p.id || p.label)
  );

  // Available infestations (not yet used anywhere)
  const availableInfestations = allInfestations.filter(
    inf => !usedInfestationIds.includes(inf.id || inf.label)
  );

  const handleAddPower = (power, infestation) => {
    if (!character._nano_powers) {
      character._nano_powers = {};
    }

    const powerId = power.id || power.label;
    const infestationId = infestation ? (infestation.id || infestation.label) : null;

    character._nano_powers[powerId] = {
      infestation: infestationId
    };

    onUpdate();
    setIsAddingPower(false);
  };

  const handleRemovePower = (powerId) => {
    if (character._nano_powers && character._nano_powers[powerId]) {
      delete character._nano_powers[powerId];
      onUpdate();
    }
  };

  const handleChangeInfestation = (powerId, infestation) => {
    if (character._nano_powers && character._nano_powers[powerId]) {
      const infestationId = infestation ? (infestation.id || infestation.label) : null;
      character._nano_powers[powerId].infestation = infestationId;
      onUpdate();
    }
  };

  const handleRollPower = () => {
    if (isRollingPower || availablePowers.length === 0) return;

    setIsRollingPower(true);
    const duration = 500;
    const interval = 50;
    let elapsed = 0;
    let finalIndex = null;

    const intervalId = setInterval(() => {
      elapsed += interval;
      finalIndex = rollDie(availablePowers.length) - 1;
      setHighlightedPowerIndex(finalIndex);

      if (elapsed >= duration) {
        clearInterval(intervalId);

        setTimeout(() => {
          setIsRollingPower(false);
          setHighlightedPowerIndex(null);

          const rolledPower = availablePowers[finalIndex];
          // Auto-roll infestation too
          const rolledInfestationIndex = rollDie(availableInfestations.length) - 1;
          const rolledInfestation = availableInfestations[rolledInfestationIndex];

          handleAddPower(rolledPower, rolledInfestation);
        }, 150);
      }
    }, interval);
  };

  return (
    <CollapsibleSection
      title="NanoPowers"
      character={character}
      headerClass="bg-gradient-to-r from-purple-900/20 via-gray-900 to-purple-900/20 border-2 border-purple-600/50 p-4 mb-4"
      headerTextClass="text-purple-400"
      headerChildrenEnabled={availablePowers.length > 0}
      headerChildren={(
        <div className="flex gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRollPower();
            }}
            disabled={isRollingPower}
            className="px-3 py-1 bg-purple-900 hover:bg-purple-800 border border-purple-700 text-purple-300 font-bold text-sm uppercase disabled:opacity-50"
          >
            {isRollingPower ? "..." : `Roll d${availablePowers.length}`}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsAddingPower(!isAddingPower)
            }}
            className="px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-bold text-sm uppercase"
          >
            {isAddingPower ? "Cancel" : "Add Power"}
          </button>
        </div>
      )}
    >
      {/* Add Power Interface */}
      {isAddingPower && (
        <div className="mb-4 bg-gray-900/50 border border-gray-800 p-4 max-h-96 overflow-y-auto">
          <div className="text-sm font-bold text-gray-400 uppercase mb-3">Select Power:</div>
          <div className="space-y-1">
            {availablePowers.map((power, index) => {
              const isHighlighted = highlightedPowerIndex === index;

              return (
                <div
                  key={power.id || power.label}
                  onClick={() => {
                    if (isRollingPower) return;
                    // Prompt for infestation selection
                    const infestationIndex = rollDie(availableInfestations.length) - 1;
                    const randomInfestation = availableInfestations[infestationIndex];
                    handleAddPower(power, randomInfestation);
                  }}
                  className={`
                    p-3 cursor-pointer transition-all
                    ${isHighlighted
                      ? 'bg-purple-400/40 border-l-2 border-purple-400 text-white ring-2 ring-purple-400/50'
                      : 'hover:bg-gray-800 border-l-2 border-transparent text-gray-400 hover:text-gray-300'
                    }
                  `}
                >
                  <div className="font-bold text-sm">{power.label}</div>
                  {power.description && (
                    <div className="text-xs text-gray-500 mt-1">{power.description}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Current Powers */}
      {powerEntries.length === 0 ? (
        <div className="text-center py-12 text-gray-500 italic border border-gray-800 bg-gray-900/20">
          No nano powers acquired
        </div>
      ) : (
        <div>
          {powerEntries.map(({ powerId, power, infestation }) => (
            <PowerCard
              key={powerId}
              power={power}
              infestation={infestation}
              allInfestations={allInfestations}
              usedInfestationIds={usedInfestationIds}
              onRemove={() => handleRemovePower(powerId)}
              onChangeInfestation={(inf) => handleChangeInfestation(powerId, inf)}
              locked={character.locked}
              character_id={character.id}
            />
          ))}
        </div>
      )}

      {/* Info Note */}
      <div className="mt-4 text-xs text-gray-500 bg-gray-900/30 border border-gray-800 p-3">
        Each Nano Power is linked to an Infestation. When you add a power, you must also select its linked infestation.
        Infestations can be triggered during play when you take 5+ damage and fail a Presence DR10 test.
      </div>
    </CollapsibleSection>
  );
}
