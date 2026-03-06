import { useState } from "react";
import { CLASSES } from "../data/builder";
import { CLASS_BUTTONS_STORAGE_KEY } from '@utils/localStorage';

function getOpen() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved !== null ? JSON.parse(saved) : true;
  } catch (e) {
    return true;
  }
}

function saveOpen(value) {
  try {
    localStorage.setItem(CLASS_BUTTONS_STORAGE_KEY, JSON.stringify(value));
  } catch (e) {}
}

export default function ClassButtons({
  currentIndex = null,
  onClick = () => {},
  onAdd = () => {},
}) {
  const [isOpen, setIsOpen] = useState(() => getOpen());

  const handleToggle = () => {
    const next = !isOpen;
    setIsOpen(next);
    saveOpen(next);
  };

  return (
    <div className="border-b border-gray-800">
      {/* Subtle toggle header */}
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-4 py-2 text-left"
        style={{ backgroundColor: 'transparent' }}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-gray-600">
          Classes
        </span>
        <span className="text-xs text-gray-700">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {/* Collapsible content */}
      {isOpen && (
        <div className="px-4 pb-4">
          <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
            {CLASSES.map((character_class, index) => {
              const ci = character_class.instance;
              const isActive = currentIndex === index;

              return (
                <div key={`class_${index}`} className="relative group">
                  {/* Main Class Button */}
                  <button
                    onClick={() => onClick({ ...character_class, index })}
                    className="relative w-full h-20 flex flex-col items-center justify-center border-2 transition-all duration-200 overflow-hidden"
                    style={{
                      backgroundColor: isActive ? `${ci.color}15` : 'rgb(17, 17, 17)',
                      borderColor: isActive ? ci.color : 'rgb(40, 40, 40)',
                      opacity: typeof currentIndex === "number" ? (isActive ? 1 : 0.55) : 0.75,
                      boxShadow: isActive ? `0 0 16px ${ci.color}30` : 'none',
                    }}
                  >
                    {/* Background pattern */}
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, ${ci.color} 0, ${ci.color} 2px, transparent 2px, transparent 10px)`,
                      }}
                    />

                    {/* Class Name */}
                    <span
                      className="relative z-10 text-xs font-bold uppercase tracking-wider text-center px-1"
                      style={{
                        color: isActive ? ci.color : '#6b7280',
                        textShadow: isActive ? `0 0 8px ${ci.color}60` : 'none',
                      }}
                    >
                      {ci.class}
                    </span>

                    {/* Active Indicator */}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ backgroundColor: ci.color }}
                      />
                    )}
                  </button>

                  {/* Add Character Button */}
                  <button
                    onClick={() => onAdd({ ...character_class, index })}
                    className="absolute -top-2 -right-2 z-20 w-6 h-6 flex items-center justify-center bg-gray-900 border border-gray-700 text-gray-500 font-bold text-sm rounded-full transition-all duration-200 shadow-lg hover:border-cy-green hover:text-cy-green"
                    title={`Create new ${ci.class}`}
                  >
                    +
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
