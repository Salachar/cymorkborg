import React, { useState } from "react";

import SegmentedDice from "../SegmentedDice";
import CollapsibleSection from '../CollapsibleSection';

const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

export default function Apps({
  character = null,
  allApps = [],
  onUpdate = () => {},
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const [isOpen, setIsOpen] = useState(true);

  if (!character) return null;

  // Get owned apps
  const apps = character._apps || {};
  const appEntries = Object.keys(apps)
    .map(appId => {
      const app = allApps.find(a => (a.id || a.label) === appId);
      return { appId, app };
    })
    .filter(entry => entry.app);

  // Available apps (not yet owned)
  const availableApps = allApps.filter(
    app => !Object.keys(apps).includes(app.id || app.label)
  );

  const handleAdd = (app) => {
    if (!character._apps) {
      character._apps = {};
    }

    const appId = app.id || app.label;
    character._apps[appId] = true;

    onUpdate();
    setIsAdding(false);
  };

  const handleRemove = (appId) => {
    if (character._apps && character._apps[appId]) {
      delete character._apps[appId];

      // Also remove from loaded apps in cyberdeck
      if (character._cyberdeck && character._cyberdeck.loaded_apps) {
        character._cyberdeck.loaded_apps = character._cyberdeck.loaded_apps.filter(
          id => id !== appId
        );
      }

      onUpdate();
    }
  };

  const handleRoll = () => {
    if (isRolling || availableApps.length === 0) return;

    setIsRolling(true);
    const duration = 500;
    const interval = 50;
    let elapsed = 0;
    let finalIndex = null;

    const intervalId = setInterval(() => {
      elapsed += interval;
      finalIndex = rollDie(availableApps.length) - 1;
      setHighlightedIndex(finalIndex);

      if (elapsed >= duration) {
        clearInterval(intervalId);

        setTimeout(() => {
          setIsRolling(false);
          setHighlightedIndex(null);

          const rolledApp = availableApps[finalIndex];
          handleAdd(rolledApp);
        }, 150);
      }
    }, interval);
  };

  const isLoadedInDeck = (appId) => {
    return character._cyberdeck?.loaded_apps?.includes(appId) || false;
  };

  return (
    <CollapsibleSection
      title="Apps"
      character={character}
      headerClass="bg-gradient-to-r from-cyan-900/20 via-gray-900 to-cyan-900/20 border-2 border-cy-cyan/50 p-4 mb-4"
      headerTextClass="text-cy-cyan"
      headerChildrenEnabled={availableApps.length > 0}
      headerChildren={(
        <div className="flex gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRoll();
            }}
            disabled={isRolling}
            className="px-3 py-1 bg-cy-cyan/20 hover:bg-cy-cyan/30 border border-cy-cyan text-cy-cyan font-bold text-sm uppercase disabled:opacity-50"
          >
            {isRolling ? "..." : `Roll d${availableApps.length}`}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsAdding(!isAdding);
            }}
            className="px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-bold text-sm uppercase"
          >
            {isAdding ? "Cancel" : "Add App"}
          </button>
        </div>
      )}
    >
      {isAdding && (
        <div className="mb-4 bg-gray-900/50 border border-gray-800 p-4 max-h-96 overflow-y-auto">
          <div className="text-sm font-bold text-gray-400 uppercase mb-3">Select App:</div>
          <div className="space-y-1">
            {availableApps.map((app, index) => {
              const isHighlighted = highlightedIndex === index;

              return (
                <div
                  key={app.id || app.label}
                  onClick={() => {
                    if (isRolling) return;
                    handleAdd(app);
                  }}
                  className={`
                    p-3 cursor-pointer transition-all
                    ${isHighlighted
                      ? 'bg-cy-cyan/40 border-l-2 border-cy-cyan text-white ring-2 ring-cy-cyan/50'
                      : 'hover:bg-gray-800 border-l-2 border-transparent text-gray-400 hover:text-gray-300'
                    }
                  `}
                >
                  <div className="font-bold text-sm">
                    {app.label}
                    {app.die && <span className="text-cy-yellow ml-2">({app.die})</span>}
                  </div>
                  {app.description && (
                    <div className="text-xs text-gray-500 mt-1">{app.description}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Current Apps */}
      {appEntries.length === 0 ? (
        <div className="text-center py-12 text-gray-500 italic border border-gray-800 bg-gray-900/20">
          No apps owned
        </div>
      ) : (
        <div className="space-y-2">
          {appEntries.map(({ appId, app }) => {
            const isLoaded = isLoadedInDeck(appId);

            return (
              <div
                key={appId}
                className={`p-4 border-l-2 ${isLoaded ? 'bg-cy-cyan/10 border-cy-cyan' : 'bg-gray-900/20 border-gray-700'}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-cy-cyan">
                      {app.label}
                      {app.die && (
                        <span className="text-cy-yellow ml-2">({app.die})</span>
                      )}
                    </h4>
                    {isLoaded && (
                      <span className="text-xs px-2 py-1 bg-cy-cyan/20 border border-cy-cyan text-cy-cyan uppercase">
                        Loaded
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemove(appId)}
                    className="text-red-400 hover:text-red-300 text-sm border border-red-700 px-2 py-1 hover:bg-red-900/20 transition-colors"
                  >
                    Remove
                  </button>
                </div>

                {app.description && (
                  <div className="text-sm text-gray-400 mb-3">
                    {app.description}
                  </div>
                )}

                {/* App Dice Roller (if applicable) */}
                {app.die && character.locked && (
                  <SegmentedDice
                    dice={app.die}
                    rollable={true}
                    character_id={character.id}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Info Note */}
      <div className="mt-4 text-xs text-gray-500 bg-gray-900/30 border border-gray-800 p-3">
        Apps are cartridges that can be loaded into your cyberdeck. To use an App, you must be jacked into your deck and have the App loaded into one of its slots.
        Test Knowledge DR12 to successfully activate an App. Each use adds +1 to fumble risk until the next day.
      </div>
    </CollapsibleSection>
  );
}
