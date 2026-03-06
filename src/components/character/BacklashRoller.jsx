import { useState, useRef, useEffect } from "react";

const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

export default function BacklashRoller({ backlashes = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [result, setResult] = useState(null);
  const [showAllOptions, setShowAllOptions] = useState(false);
  const intervalRef = useRef(null);

  const handleRoll = () => {
    if (isRolling || backlashes.length === 0) return;

    setIsRolling(true);
    setResult(null);

    const duration = 500;
    const interval = 50;
    let elapsed = 0;
    let finalIndex = null;

    intervalRef.current = setInterval(() => {
      elapsed += interval;
      finalIndex = rollDie(backlashes.length) - 1;

      if (elapsed >= duration) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;

        setTimeout(() => {
          setIsRolling(false);
          setResult(backlashes[finalIndex]);
        }, 100);
      }
    }, interval);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="border-t border-gray-800 pt-4">
      {/* Header/Toggle */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-gray-900 to-gray-800 border-l-4 border-yellow-500 px-4 py-3 mb-3 cursor-pointer hover:bg-gray-800 transition-colors"
      >
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
            App Backlashes
          </h4>
          <div className="flex items-center gap-3">
            {result && !isOpen && (
              <span className="text-xs text-gray-500 italic">
                Last: {result.label}
              </span>
            )}
            <div className="text-xs text-gray-500 uppercase">
              {isOpen ? '▼' : '▶'}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <div className="bg-gray-900/20 border border-gray-800 p-4">
          {/* Roll Button */}
          <div className="flex justify-center mb-4">
            <button
              onClick={handleRoll}
              disabled={isRolling}
              className="px-6 py-3 bg-yellow-900/20 hover:bg-yellow-900/30 border-2 border-yellow-600 text-yellow-400 font-bold uppercase transition-colors disabled:opacity-50"
            >
              {isRolling ? "Rolling..." : `Roll d${backlashes.length} Backlash`}
            </button>
          </div>

          {/* Result Display */}
          {result && (
            <div className="bg-yellow-900/20 border-2 border-yellow-600 p-4 animate-pulse">
              <div className="text-sm font-bold text-yellow-400 uppercase mb-2">
                Backlash Result:
              </div>
              <div className="text-lg font-black text-yellow-300 mb-2">
                {result.label}
              </div>
              {result.description && (
                <div className="text-sm text-gray-300">
                  {result.description}
                </div>
              )}
            </div>
          )}

          {!result && !isRolling && (
            <div className="text-center text-gray-500 italic py-4">
              Click the button above to roll for a backlash
            </div>
          )}

          {/* Show All Options */}
          <div className="mt-4">
            <button
              onClick={() => setShowAllOptions(!showAllOptions)}
              className="w-full text-left px-3 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-400 text-xs uppercase transition-colors"
            >
              <div className="flex items-center justify-between">
                <span>View All Options (for manual dice)</span>
                <span>{showAllOptions ? '▼' : '▶'}</span>
              </div>
            </button>

            {showAllOptions && (
              <div className="mt-2 bg-black/30 border border-gray-800 p-3 max-h-96 overflow-y-auto">
                <div className="space-y-2">
                  {backlashes.map((backlash, index) => (
                    <div
                      key={index}
                      className="p-2 border-l-2 border-gray-700 bg-gray-900/50"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-mono text-gray-600 min-w-[2rem]">
                          [{index + 1}]
                        </span>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-yellow-400">
                            {backlash.label}
                          </div>
                          {backlash.description && (
                            <div className="text-xs text-gray-500 mt-1">
                              {backlash.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="mt-4 text-xs text-gray-500 bg-gray-900/30 border border-gray-800 p-3">
            Roll on this table when you fumble (roll a 1) while using an App.
          </div>
        </div>
      )}
    </div>
  );
}
