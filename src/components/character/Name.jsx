import React from "react";

export default function Name({
  character = null,
  builder = false,
  locked = false,
  onUpdate = () => {},
}) {
  if (!character) return null;

  const displayName = character.name?.trim() || "No Name";

  // Get flavor selections from character.style
  const getFlavorText = () => {
    if (!locked || !character.style) return [];

    const flavorTexts = [];

    Object.keys(character.style).forEach(category => {
      const selections = character.style[category];
      if (selections && typeof selections === 'object') {
        const selected = Object.keys(selections).find(key => selections[key]);
        if (selected) {
          flavorTexts.push({ label: category, value: selected });
        }
      }
    });

    return flavorTexts;
  };

  return (
    <div className="mb-8">
      {/* Unlocked: Editable name input */}
      {builder && !locked && (
        <div className="space-y-3">
          {/* Class name - always shown */}
          <div className="flex items-center gap-3">
            <div
              className="h-1 flex-1"
              style={{
                background: `linear-gradient(90deg, ${character.color} 0%, transparent 100%)`
              }}
            />
            <h2
              className="text-lg font-black uppercase tracking-wider"
              style={{ color: character.color }}
            >
              {character.class}
            </h2>
            <div
              className="h-1 flex-1"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${character.color} 100%)`
              }}
            />
          </div>

          {/* Name input */}
          <input
            type="text"
            className="
              w-full h-14 px-4
              bg-black border-2 border-gray-700
              focus:border-cy-cyan focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]
              text-3xl font-bold text-white
              placeholder-gray-600
              transition-all
              outline-none
              font-mono
              uppercase
            "
            placeholder="Enter Name"
            value={character.name || ""}
            onChange={(e) => {
              character.name = e.target.value;
              onUpdate();
            }}
            onFocus={(e) => e.target.select()}
            disabled={locked}
            readOnly={locked}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="characters"
            spellCheck="false"
          />
        </div>
      )}

      {/* Locked: Display name with class subtitle */}
      {builder && locked && (
        <div className="relative p-6 bg-gradient-to-r from-black via-gray-900 to-black border-2 border-gray-800">
          {/* Corner accents */}
          <div
            className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4"
            style={{ borderColor: character.color }}
          />
          <div
            className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4"
            style={{ borderColor: character.color }}
          />
          <div
            className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4"
            style={{ borderColor: character.color }}
          />
          <div
            className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4"
            style={{ borderColor: character.color }}
          />

          {/* Name */}
          <div className="text-center">
            <h1
              className="text-5xl font-black uppercase tracking-wide mb-2"
              style={{
                color: character.color,
                textShadow: `0 0 20px ${character.color}80, 0 0 40px ${character.color}40`,
              }}
            >
              {displayName}
            </h1>

            {/* Class subtitle */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <div
                className="h-px w-20"
                style={{ backgroundColor: character.color, opacity: 0.5 }}
              />
              <h2 className="text-xl font-bold uppercase tracking-widest text-gray-400">
                The <span style={{ color: character.color }}>{character.class}</span>
              </h2>
              <div
                className="h-px w-20"
                style={{ backgroundColor: character.color, opacity: 0.5 }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-3">
              {/* Flavor text */}
              {getFlavorText().map((flavor, index) => (
                <div key={index} className="mt-2 flex flex-col gap-0">
                  <span className="text-xs text-gray-600 uppercase tracking-wide mr-2">
                    {flavor.label}
                  </span>
                  <span
                    className="text-lg font-bold uppercase tracking-wide"
                    style={{ color: character.color }}
                  >
                    {flavor.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scanline effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                ${character.color} 2px,
                ${character.color} 4px
              )`
            }}
          />
        </div>
      )}

      {/* Non-builder mode: Just show class */}
      {!builder && (
        <div className="flex items-center gap-3 mb-6">
          <div
            className="h-1 flex-1"
            style={{
              background: `linear-gradient(90deg, ${character.color} 0%, transparent 100%)`
            }}
          />
          <h2
            className="text-2xl font-black uppercase tracking-wider"
            style={{ color: character.color }}
          >
            {character.class}
          </h2>
          <div
            className="h-1 flex-1"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${character.color} 100%)`
            }}
          />
        </div>
      )}
    </div>
  );
}
