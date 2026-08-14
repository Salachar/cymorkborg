import { createContext, useContext, useState, useCallback } from "react";
import BuilderManager from "../data/builder";

const CharacterContext = createContext(null);

export function CharacterProvider({ children }) {
  // Which character (by id) is globally "selected" — the one the Combat
  // tab and the Market tab will read from. Seeded from whatever
  // BuilderManager last persisted, same as Classes.jsx used to do locally.
  const [selectedCharacterId, setSelectedCharacterIdState] = useState(
    () => BuilderManager.lastSelectedId || null
  );

  // Bumped any time a mutation happens on the selected character (or the
  // character list itself), so consumers reading off BuilderManager's
  // mutable class instances know to re-render. Mirrors the `timestamp`
  // pattern that used to live in Classes.jsx, just hoisted up.
  const [version, setVersion] = useState(0);

  const selectCharacter = useCallback((id) => {
    setSelectedCharacterIdState(id || null);
    if (id) {
      BuilderManager.setLastSelected(id);
    }
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedCharacterIdState(null);
  }, []);

  // Call after mutating a character in place (character.credits = x, etc.)
  // or after add/delete. Persists to localStorage and triggers re-renders.
  const touch = useCallback(() => {
    BuilderManager.save();
    setVersion((v) => v + 1);
  }, []);

  const selectedCharacter =
    (selectedCharacterId && BuilderManager.characters[selectedCharacterId]) ||
    null;

  // If the selected id no longer resolves to a real character (deleted
  // elsewhere), fall back to null rather than a stale reference.
  const value = {
    selectedCharacter,
    selectedCharacterId: selectedCharacter ? selectedCharacterId : null,
    selectCharacter,
    clearSelection,
    touch,
    version,
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacterContext() {
  const ctx = useContext(CharacterContext);
  if (!ctx) {
    throw new Error("useCharacterContext must be used within a CharacterProvider");
  }
  return ctx;
}

// Convenience hook for consumers (Combat, Market) that just want to read
// the currently selected character reactively without pulling in the
// selection-mutation actions.
export function useSelectedCharacter() {
  return useCharacterContext().selectedCharacter;
}
