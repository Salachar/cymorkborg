import { useEffect, useState, useCallback, useRef } from "react";

const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

export default function RollableTable({
  character_id = "",
  locked = false,
  selectable = true,
  compact = false,
  collapsible = false,
  startCollapsed = false,
  label = "",
  note = null,
  headerChildren = null,
  entries = [],
  selected = {},
  select_mode = "single",
  onClick = () => {},
  before = null,
  after = null,
}) {
  const [currentId, setCurrentId] = useState(character_id);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(startCollapsed);
  const intervalRef = useRef(null);

  if (!entries.length) return null;

  const rollTable = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (locked) return;

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const duration = 500;
    const interval = 50;
    let elapsed = 0;
    let finalIndex = null;

    intervalRef.current = setInterval(() => {
      elapsed += interval;
      const randomIndex = rollDie(entries.length) - 1;
      finalIndex = randomIndex;
      setHighlightedIndex(randomIndex);

      if (elapsed >= duration) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;

        // Auto-select the final result after a brief delay
        setTimeout(() => {
          setHighlightedIndex(null);
          if (select_mode !== "none" && finalIndex !== null) {
            const finalEntry = entries[finalIndex];
            onClick(finalEntry, finalIndex);
          }
        }, 150);
      }
    }, interval);
  }, [locked, entries.length, select_mode, onClick]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (character_id === currentId) return;
    setHighlightedIndex(null);
    setCurrentId(character_id);
  }, [character_id, currentId]);

  const canInteract = (selectable && select_mode !== "none");

  return (
    <>
      {before && before}
      <div className="mb-6">
        {/* Header */}
        <div
          className={`
            flex items-center gap-3 mb-2
            ${collapsible ? 'cursor-pointer hover:bg-gray-900/30 px-2 py-1 -mx-2 rounded' : ''}
          `}
          onClick={collapsible ? () => setIsCollapsed(!isCollapsed) : undefined}
        >
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            {label}
            {collapsible && (
              <span className="text-sm text-gray-500">
                {isCollapsed ? '▶' : '▼'}
              </span>
            )}
          </h3>

          <div className="ml-auto flex whitespace-nowrap items-center">
            {/* Header Children (cost totals, etc) */}
            {headerChildren && (
              <div className="mr-2 text-cy-yellow font-mono text-sm whitespace-nowrap">
                {headerChildren}
              </div>
            )}

            {/* Roll Button */}
            {selectable && !locked && !isCollapsed && (
              <button
                type="button"
                onClick={(e) => {
                  if (collapsible) e.stopPropagation();
                  rollTable(e);
                }}
                className="
                  px-3 py-1
                  bg-gray-800 hover:bg-gray-700
                  text-gray-300 hover:text-white
                  font-bold text-sm uppercase
                  border border-gray-700 hover:border-gray-600
                  transition-all
                  whitespace-nowrap
                "
              >
                Roll d{entries.length}
              </button>
            )}
          </div>
        </div>



        {/* Entries */}
        {(!collapsible || !isCollapsed) && (
          <>
            {note && note}
            <div
              className={
                compact
                  ? // COMPACT MODE: Checkboxes
                    'border border-gray-800 bg-gray-900/10'
                  : // NORMAL MODE: Full cards
                    'flex flex-col gap-2'
              }
            >
              {entries.map((entry, index) => {
                const {
                  id = "",
                  label = "",
                  die = "",
                  cost = "",
                  description = "",
                  tags = [],
                } = entry || {};

                const entryId = id || label;
                const isSelected = selected[entryId];
                const isHighlighted = highlightedIndex === index;

                if (locked && !isSelected) return null;

                // COMPACT MODE
                if (compact) {
                  return (
                    <div
                      key={`entry_${index}`}
                      onClick={() => {
                        if (!selectable || select_mode === "none") return;
                        onClick(entry, index);
                      }}
                      className={`
                        flex items-center gap-2 px-2 py-2
                        border-b border-gray-800/50 last:border-b-0
                        transition-colors
                        ${canInteract ? 'cursor-pointer hover:bg-gray-800/30' : ''}
                        ${isSelected ? 'bg-gray-800/20' : ''}
                        ${isHighlighted ? 'bg-gray-800/40 ring-2 ring-cy-cyan/50' : ''}
                      `}
                    >
                      {/* Checkbox */}
                      {!locked && (
                        <span className="text-2xl flex-shrink-0" style={{ opacity: isSelected ? 1 : 0.3 }}>
                          {isSelected ? '☑' : '□'}
                        </span>
                      )}

                      {/* Label */}
                      <span className="font-bold whitespace-nowrap text-sm text-cy-cyan">
                        {label}
                        {die && <span className="text-cy-yellow ml-1">({die})</span>}
                        {cost && <span className="text-yellow-400 ml-1">[{cost}]</span>}
                        {description && ':'}
                      </span>

                      {/* Description */}
                      {description && (
                        <span className="text-xs text-gray-400 ml-1">{description}</span>
                      )}

                      {tags.map((tag) => {
                        return (<span className="text-cy-pink text-xs">{tag}</span>)
                      })}
                    </div>
                  );
                }

                // NORMAL MODE (full cards)
                return (
                  <div
                    key={`entry_${index}`}
                    onClick={() => {
                      if (!selectable || select_mode === "none") return;
                      onClick(entry, index);
                    }}
                    className={`
                      p-3 border transition-all
                      ${canInteract ? 'cursor-pointer' : ''}
                      ${
                        isSelected
                          ? 'bg-gray-800 text-white border-cy-cyan shadow-lg shadow-cy-cyan/20'
                          : isHighlighted
                          ? 'bg-gray-800/50 border-cy-cyan ring-2 ring-cy-cyan/50'
                          : 'bg-gray-900/20 border-gray-800 hover:border-gray-700'
                      }
                    `}
                  >
                    {/* Label */}
                    <div className={`font-bold whitespace-nowrap text-sm mb-1 ${isSelected ? 'text-cy-cyan' : isHighlighted ? 'text-cy-cyan' : 'text-cy-cyan'}`}>
                      {label}
                      {die && (
                        <span className={`ml-1 whitespace-nowrap ${isSelected || isHighlighted ? 'text-cy-yellow' : 'text-cy-yellow'}`}>
                          ({die})
                        </span>
                      )}
                      {cost && (
                        <span className={`ml-1 whitespace-nowrap ${isSelected || isHighlighted ? 'text-yellow-400' : 'text-yellow-400'}`}>
                          [{cost}]
                        </span>
                      )}
                      {description && ':'}
                    </div>

                    {/* Description */}
                    {description && (
                      <div className={`text-sm ${isSelected || isHighlighted ? 'text-gray-300' : 'text-gray-300'}`}>
                        {description}
                      </div>
                    )}

                    {tags.map((tag) => {
                      return (<span className="text-cy-pink text-xs">{tag}</span>)
                    })}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      {after && after}
    </>
  );
}
