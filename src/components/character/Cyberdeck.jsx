import React from "react";

import CollapsibleSection from '../CollapsibleSection';
import BacklashRoller from './BacklashRoller';

import { APP_FUMBLES } from "../../data/tables";

export default function Cyberdeck({
  character = null,
  allApps = [],
  onUpdate = () => {},
}) {
  if (!character) return null;

  const cyberdeck = character._cyberdeck || { unlocked: false, slots: 4, loaded_apps: [], jacked_in: false };
  const apps = character._apps || {};

  // Get owned apps that aren't loaded
  const ownedApps = Object.keys(apps).map(appId => {
    return allApps.find(a => (a.id || a.label) === appId);
  }).filter(Boolean);

  const loadedApps = cyberdeck.loaded_apps
    .map(appId => allApps.find(a => (a.id || a.label) === appId))
    .filter(Boolean);

  const availableToLoad = ownedApps.filter(
    app => !cyberdeck.loaded_apps.includes(app.id || app.label)
  );

  const handleUnlock = () => {
    if (!character._cyberdeck) {
      character._cyberdeck = { unlocked: true, slots: 4, loaded_apps: [], jacked_in: false };
    } else {
      character._cyberdeck.unlocked = true;
    }
    onUpdate();
  };

  const handleToggleJackIn = () => {
    if (!character._cyberdeck) return;
    character._cyberdeck.jacked_in = !character._cyberdeck.jacked_in;
    onUpdate();
  };

  const handleAdjustSlots = (delta) => {
    if (character.locked) return; // Only in builder mode

    const newSlots = Math.max(1, Math.min(20, cyberdeck.slots + delta));
    character._cyberdeck.slots = newSlots;

    // Trim loaded apps if we reduced slots
    if (cyberdeck.loaded_apps.length > newSlots) {
      character._cyberdeck.loaded_apps = cyberdeck.loaded_apps.slice(0, newSlots);
    }

    onUpdate();
  };

  const handleLoadApp = (app) => {
    if (cyberdeck.loaded_apps.length >= cyberdeck.slots) return;

    const appId = app.id || app.label;
    if (!cyberdeck.loaded_apps.includes(appId)) {
      character._cyberdeck.loaded_apps = [...cyberdeck.loaded_apps, appId];
      onUpdate();
    }
  };

  const handleUnloadApp = (appId) => {
    character._cyberdeck.loaded_apps = cyberdeck.loaded_apps.filter(id => id !== appId);
    onUpdate();
  };

  return (
    <CollapsibleSection
      title="Cyberdeck"
      character={character}
      headerClass="bg-gradient-to-r from-cyan-900/20 via-gray-900 to-cyan-900/20 border-2 border-cy-cyan/50 p-4 mb-4 cursor-pointer hover:border-cy-cyan/70 transition-colors"
      headerTextClass="text-cy-cyan"
      headerChildrenEnabled={cyberdeck.unlocked && cyberdeck.jacked_in}
      headerChildren={(
        <span className="text-sm text-cy-cyan font-bold">⚡ JACKED IN</span>
      )}
    >
      {!cyberdeck.unlocked ? (
        /* Locked State - Need to unlock */
        <div className="border border-gray-800 bg-gray-900/20 p-8 text-center">
          <div className="mb-4 text-gray-400">
            You need a cyberdeck to use Apps or Hack. Purchase one from the Market or acquire during gameplay.
          </div>
          <button
            onClick={handleUnlock}
            className="px-6 py-3 bg-cy-cyan/20 hover:bg-cy-cyan/30 border-2 border-cy-cyan text-cy-cyan font-bold uppercase transition-colors"
          >
            Unlock Cyberdeck
          </button>
          <div className="mt-4 text-xs text-gray-600">
            This just enables the deck interface - purchase/acquisition is handled through roleplay
          </div>
        </div>
      ) : (
        /* Unlocked State - Show deck interface */
        <div className="border border-cy-cyan/50 bg-gray-900/20 p-4">
          {/* Jack In/Out Status (locked mode only) */}
          {character.locked && (
            <div className="mb-4 pb-4 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase mb-1">Connection Status:</div>
                  <div className={`text-lg font-black ${cyberdeck.jacked_in ? 'text-cy-cyan' : 'text-gray-600'}`}>
                    {cyberdeck.jacked_in ? '⚡ JACKED IN' : 'DISCONNECTED'}
                  </div>
                </div>
                <button
                  onClick={handleToggleJackIn}
                  className={`px-6 py-3 font-bold uppercase transition-colors ${
                    cyberdeck.jacked_in
                      ? 'bg-red-900/20 hover:bg-red-900/30 border-2 border-red-700 text-red-400'
                      : 'bg-cy-cyan/20 hover:bg-cy-cyan/30 border-2 border-cy-cyan text-cy-cyan'
                  }`}
                >
                  {cyberdeck.jacked_in ? 'Jack Out' : 'Jack In'}
                </button>
              </div>
              {cyberdeck.jacked_in && (
                <div className="mt-2 text-xs text-yellow-400 bg-yellow-900/20 border border-yellow-900/50 p-2">
                  ⚠ All non-App actions are +2DR while jacked in
                </div>
              )}
            </div>
          )}

          {/* Slots Management */}
          <div className="mb-4 pb-4 border-b border-gray-800">
            {/* Info Section - Enhanced */}
            <div className="bg-cy-cyan/5 border-l-4 border-cy-cyan p-4 mb-4 space-y-3">
              <div className="text-sm text-gray-300 leading-relaxed">
                <span className="text-cy-cyan font-bold">Custom-made cartridges and cassettes</span> with the ability to hack tech and physically affect your surroundings when slotted into a cyberdeck.
              </div>

              <div className="text-sm text-gray-300">
                <span className="text-cy-cyan font-bold">Using Apps:</span> You must be jacked into your deck with the App loaded into a slot. Test <span className="text-cy-yellow font-bold">Knowledge DR12</span> to activate. While jacked in, all <span className="text-red-400">non-App actions are +2DR</span>.
              </div>

              <div className="text-sm text-gray-300">
                <span className="text-red-400 font-bold">Fumbles:</span> A fumble burns the App for the day and triggers a Backlash. Each App use adds <span className="text-red-400 font-bold">+1 to fumble risk</span> until the next day.
              </div>

              <div className="text-sm text-gray-300 pt-2 border-t border-gray-800">
                <span className="text-cy-cyan font-bold">Hacking Without Apps:</span> Gathering information through non-App hacking is a time-consuming downtime activity. Test Knowledge to break into data nodes. Failing means you're discovered and data owners will respond. A fumble triggers a Backlash.
              </div>
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-gray-400 uppercase">Deck Slots:</span>
              {!character.locked && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAdjustSlots(-1)}
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300 font-bold"
                  >
                    −
                  </button>
                  <span className="font-mono text-2xl font-bold text-cy-cyan w-12 text-center">
                    {cyberdeck.slots}
                  </span>
                  <button
                    onClick={() => handleAdjustSlots(+1)}
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300 font-bold"
                  >
                    +
                  </button>
                </div>
              )}
              {character.locked && (
                <span className="font-mono text-2xl font-bold text-cy-cyan">
                  {cyberdeck.slots}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500">
              {!character.locked && "Adjust slots in builder mode"}
              {character.locked && `${cyberdeck.loaded_apps.length} of ${cyberdeck.slots} slots in use`}
            </div>
          </div>

          {/* Loaded Apps */}
          <div className="mb-4">
            <div className="text-sm font-bold text-gray-400 uppercase mb-3">
              Loaded Apps ({cyberdeck.loaded_apps.length}/{cyberdeck.slots}):
            </div>

            <div className="space-y-2 mb-3">
              {Array.from({ length: cyberdeck.slots }).map((_, index) => {
                const loadedApp = loadedApps[index];

                return (
                  <div
                    key={index}
                    className={`p-3 border ${loadedApp ? 'bg-cy-cyan/10 border-cy-cyan' : 'bg-gray-900/50 border-gray-800'}`}
                  >
                    {loadedApp ? (
                      <>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-gray-500 w-8">
                              [{index + 1}]
                            </span>
                            <span className="text-sm font-bold text-cy-cyan">
                              {loadedApp.label}
                              {loadedApp.die && (
                                <span className="text-cy-yellow ml-2">({loadedApp.die})</span>
                              )}
                            </span>
                          </div>
                          <button
                            onClick={() => handleUnloadApp(loadedApp.id || loadedApp.label)}
                            className="text-xs px-2 py-1 bg-red-900/20 hover:bg-red-900/30 border border-red-700 text-red-400 transition-colors"
                          >
                            Unload
                          </button>
                        </div>
                        {loadedApp.description && (
                          <div className="text-xs text-gray-500 ml-11">
                            {loadedApp.description}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-gray-500 w-8">
                          [{index + 1}]
                        </span>
                        <span className="text-sm text-gray-600 italic">Empty slot</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Load App Button */}
            {availableToLoad.length > 0 && cyberdeck.loaded_apps.length < cyberdeck.slots && (
              <details className="bg-gray-900/50 border border-gray-800">
                <summary className="p-3 cursor-pointer hover:bg-gray-800 text-sm font-bold text-gray-400 uppercase">
                  Load App ({availableToLoad.length} available)
                </summary>
                <div className="p-3 space-y-1 max-h-64 overflow-y-auto">
                  {availableToLoad.map(app => (
                    <div
                      key={app.id || app.label}
                      onClick={() => handleLoadApp(app)}
                      className="p-2 hover:bg-gray-800 cursor-pointer border-l-2 border-transparent hover:border-cy-cyan transition-all"
                    >
                      <div className="text-sm font-bold text-cy-cyan">
                        {app.label}
                      </div>
                      {app.description && (
                        <div className="text-xs text-gray-500 mt-1">
                          {app.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </details>
            )}

            {availableToLoad.length === 0 && cyberdeck.loaded_apps.length < cyberdeck.slots && (
              <div className="text-sm text-gray-600 italic text-center py-3">
                No apps available to load
              </div>
            )}
          </div>

          <BacklashRoller backlashes={APP_FUMBLES} />
        </div>
      )}
    </CollapsibleSection>
  );
}
