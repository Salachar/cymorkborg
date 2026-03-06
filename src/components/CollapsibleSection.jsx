import React, { useEffect } from "react";

// Helper functions for collapse state management
const COLLAPSE_STORAGE_KEY = "cyborg_collapse_states";

function getCollapseStates() {
  try {
    const stored = localStorage.getItem(COLLAPSE_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    console.error("Error reading collapse states:", e);
    return {};
  }
}

function setCollapseState(characterId, sectionKey, isOpen) {
  try {
    const states = getCollapseStates();
    if (!states[characterId]) {
      states[characterId] = {};
    }
    states[characterId][sectionKey] = isOpen;
    localStorage.setItem(COLLAPSE_STORAGE_KEY, JSON.stringify(states));
  } catch (e) {
    console.error("Error saving collapse state:", e);
  }
}

function getCollapseState(characterId, sectionKey, defaultState = false) {
  const states = getCollapseStates();
  return states[characterId]?.[sectionKey] ?? defaultState;
}

export default function CollapsibleSectionWithState({
  title = "Section Title",
  character = null,
  headerClass = "",
  headerTextClass = "",
  headerChildrenEnabled = false,
  headerChildren,
  children,
  defaultOpen = false,
}) {
  const characterId = character?.id || "default";
  const sectionKey = title.trim().replace(/ /g, "");

  const [isOpen, setIsOpen] = React.useState(() => {
    return getCollapseState(characterId, sectionKey, defaultOpen);
  });

  useEffect(() => {
    const savedState = getCollapseState(characterId, sectionKey, defaultOpen);
    setIsOpen(savedState);
  }, [characterId, sectionKey, defaultOpen]);

  const handleToggle = (e) => {
    if (e.defaultPrevented) return;
    const newState = !isOpen;
    setIsOpen(newState);
    setCollapseState(characterId, sectionKey, newState);
  };

  return (
    <div className="mb-8">
      <div
        className={`cursor-pointer hover:opacity-80 transition-opacity ${headerClass}`}
        onClick={handleToggle}
      >
        <div className="flex items-center justify-between">
          <h2 className={`text-2xl font-black uppercase tracking-wider ${headerTextClass}`}>
            {title}
          </h2>

          <div className="text-center px-4">
            <div className="text-xs text-gray-500 uppercase">
              {isOpen ? 'Tap to Close' : 'Tap to Open'}
            </div>
          </div>

          {isOpen && headerChildrenEnabled && headerChildren && (
            <div onClick={(e) => e.stopPropagation()}>
              {headerChildren}
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <>
          {children}
        </>
      )}
    </div>
  );
}
