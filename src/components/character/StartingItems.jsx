import React, { useState } from "react";

import CollapsibleSection from '../CollapsibleSection';

const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

function StartingItemSection({
  label,
  entries,
  selected,
  onSelect,
  locked,
  character_id,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const selectedEntry = entries.find(e => selected[e.id || e.label]);
  const selectedLabel = selectedEntry ? selectedEntry.label : null;
  const selectedDescription = selectedEntry ? selectedEntry.description : null;
  const isRequired = !selectedLabel;

  const handleRoll = () => {
    if (locked || isRolling) return;

    setIsRolling(true);
    const duration = 500;
    const interval = 50;
    let elapsed = 0;
    let finalIndex = null;

    const intervalId = setInterval(() => {
      elapsed += interval;
      finalIndex = rollDie(entries.length) - 1;
      setHighlightedIndex(finalIndex);

      if (elapsed >= duration) {
        clearInterval(intervalId);

        setTimeout(() => {
          setIsRolling(false);
          setHighlightedIndex(null);

          const rolledEntry = entries[finalIndex];
          onSelect(rolledEntry);
        }, 150);
      }
    }, interval);
  };

  return (
    <div className="mb-4">
      {/* Header: Category + Roll Button */}
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide">
          {label}
          {isRequired && (
            <span className="ml-2 text-xs text-red-400 border border-red-700 px-2 py-0.5 bg-red-900/20">
              Required
            </span>
          )}
        </h4>
        {!locked && (
          <button
            onClick={handleRoll}
            disabled={isRolling}
            className="
              px-3 py-1
              bg-gray-800 hover:bg-gray-700
              disabled:bg-gray-800 disabled:opacity-50
              border border-gray-700 hover:border-gray-600
              text-gray-300 hover:text-white
              font-bold text-xs uppercase
              transition-all
            "
          >
            {isRolling ? "..." : `Roll d${entries.length}`}
          </button>
        )}
      </div>

      {/* Selected Item Box */}
      <div className={`bg-gray-900 border p-3 mb-2 ${isRequired ? 'border-red-700' : 'border-gray-700'}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex-1">
            <div className="text-xs text-gray-500 uppercase mb-1">Selected:</div>
            {selectedLabel ? (
              <div className="text-base text-cy-cyan font-bold">
                {selectedLabel}
              </div>
            ) : (
              <div className="text-base text-red-400 italic">
                Nothing selected - roll or choose
              </div>
            )}
          </div>
          {!locked && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="
                px-3 py-1
                bg-gray-800 hover:bg-gray-700
                border border-gray-600
                text-gray-300 text-xs
                transition-colors
              "
            >
              {isExpanded ? "Close ▲" : "Change ▼"}
            </button>
          )}
        </div>

        {/* Description (if exists) */}
        {selectedDescription && (
          <div className="text-sm text-gray-400 border-t border-gray-800 pt-2 mt-2">
            {selectedDescription}
          </div>
        )}
      </div>

      {/* Expandable List */}
      {isExpanded && !locked && (
        <div className="bg-gray-900/50 border border-gray-800 p-3 max-h-96 overflow-y-auto">
          <div className="space-y-1">
            {entries.map((entry, index) => {
              const entryId = entry.id || entry.label;
              const isSelected = selected[entryId];
              const isHighlighted = highlightedIndex === index;

              return (
                <div
                  key={`${label}_${index}`}
                  onClick={() => {
                    if (isRolling) return;
                    onSelect(entry);
                    setIsExpanded(false);
                  }}
                  className={`
                    p-2 cursor-pointer transition-all
                    ${isHighlighted
                      ? 'bg-cy-cyan/40 border-l-2 border-cy-cyan text-white ring-2 ring-cy-cyan/50'
                      : isSelected
                        ? 'bg-cy-cyan/20 border-l-2 border-cy-cyan text-cy-cyan font-bold'
                        : 'hover:bg-gray-800 border-l-2 border-transparent text-gray-400 hover:text-gray-300'
                    }
                  `}
                >
                  <div className="text-sm font-medium">{entry.label}</div>
                  {entry.description && (
                    <div className="text-xs text-gray-500 mt-1">
                      {entry.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function StartingItems({
  character = null,
  sections = [],
  onUpdate = () => {},
}) {
  if (!character || !sections.length) return null;

  return (
    <CollapsibleSection
      title="Starting Items"
      character={character}
      headerClass="bg-gradient-to-r from-green-900/20 via-gray-900 to-green-900/20 border-2 border-green-600/50 p-4 mb-4"
      headerTextClass="text-green-400"
      defaultOpen
    >
      <div className="space-y-2">
        {sections.map((section, index) => {
          const { name, label, entries } = section;
          const selections = character.getStartingItemsSelections?.(name) || character.getTableSelections(name);

          return (
            <StartingItemSection
              key={`starting_${name}_${index}`}
              label={label}
              entries={entries}
              selected={selections}
              locked={character.locked}
              character_id={character.id}
              onSelect={(entry) => {
                if (!entry) return;
                if (character.setStartingItemsSelection) {
                  character.setStartingItemsSelection(name, entry);
                } else {
                  character.setTableSelection(name, entry, "single");
                }
                onUpdate();
              }}
            />
          );
        })}
      </div>
    </CollapsibleSection>
  );
}
