import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CLASSES } from "../data/builder";
import BuilderManager from "../data/builder";

import ClassButtons from "../components/ClassButtons";
import CharacterTabs from "../components/CharacterTabs";
import CharacterTemplate from "../components/CharacterTemplate";
import AppDataExportImport from "../components/CharacterExportImport";

import { NavExtraContext } from "../App";

const setClassColor = (classData) => {
  let data = classData;
  if (classData.instance) classData = classData.instance;
  if (!classData.color) return;
  document.documentElement.style.setProperty('--color-class', classData.color);
};

// Lock button rendered in the nav
function NavLockButton({ character, onUpdate }) {
  if (!character?.toggleLock) return null;

  return (
    <button
      type="button"
      onClick={() => {
        character.toggleLock();
        onUpdate();
      }}
      className="
        h-8 px-3
        bg-gray-800
        border border-cy-cyan
        text-cy-cyan font-bold uppercase text-xs
        transition-all
      "
    >
      {character.locked ? 'Locked' : 'Unlocked'}
    </button>
  );
}

export default function Classes() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { setNavExtra } = useContext(NavExtraContext);

  const [tabIndex, setTabIndex] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [isBuilder, setIsBuilder] = useState(false);
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    checkCharacters(null, slug);
  }, []);

  // Keep nav lock button in sync with current character and lock state
  useEffect(() => {
    if (isBuilder && currentCharacter?.toggleLock) {
      setNavExtra(
        <NavLockButton
          key={timestamp} // re-renders on update so locked label stays current
          character={currentCharacter}
          onUpdate={onUpdate}
        />
      );
    } else {
      setNavExtra(null);
    }

    return () => setNavExtra(null);
  }, [isBuilder, currentCharacter, timestamp]);

  const setCharAndColor = (character) => {
    setCurrentCharacter(character);
    setClassColor(character);
  };

  const checkCharacters = (currentCharacterOverride, slug) => {
    let currChar = currentCharacter;
    if (currentCharacterOverride !== undefined) {
      currChar = currentCharacterOverride;
    }

    if (slug) {
      for (let i = 0; i < CLASSES.length; ++i) {
        const class_data = CLASSES[i];
        if (class_data.id === slug) {
          setIsBuilder(false);
          setTabIndex(i);
          setCharAndColor(class_data.instance);
          return;
        }
      }
    }

    const chars = BuilderManager.characters;
    const char_keys = Object.keys(chars);

    if (!char_keys.length) {
      setIsBuilder(false);
      setTabIndex(0);
      setCharAndColor(CLASSES[0].instance);
      return;
    }

    if (slug) {
      for (let i = 0; i < char_keys.length; ++i) {
        const char_key = char_keys[i];
        if (char_key === slug) {
          setIsBuilder(true);
          setTabIndex(null);
          setCharAndColor(chars[char_key]);
          BuilderManager.setLastSelected(char_key);
          return;
        }
      }
    }

    const lastSelectedId = BuilderManager.lastSelectedId;
    if (lastSelectedId && chars[lastSelectedId]) {
      setIsBuilder(true);
      setTabIndex(null);
      setCharAndColor(chars[lastSelectedId]);
      return;
    }

    const firstChar = chars[char_keys[0]];
    if (!currChar && firstChar && firstChar.id) {
      setIsBuilder(true);
      setTabIndex(null);
      setCharAndColor(firstChar);
      BuilderManager.setLastSelected(firstChar.id);
    }
  };

  const onUpdate = () => {
    BuilderManager.save();
    setTimestamp(Date.now());
  };

  const hasCharacters = Object.keys(BuilderManager.characters).length > 0;

  return (
    <>
      <ClassButtons
        currentIndex={tabIndex}
        onClick={({ instance, index }) => {
          setTabIndex(index);
          setCharAndColor(instance);
          setIsBuilder(false);
          navigate(`/classes/${instance.class_id}`);
        }}
        onAdd={({ constructor }) => {
          const new_character = new constructor();
          BuilderManager.addCharacter(new_character);
          setTabIndex(null);
          setCharAndColor(new_character);
          setIsBuilder(true);
          navigate(`/classes/${new_character.id}`);
        }}
      />

      <div className="px-6 pt-6 pb-16 md:px-12 md:pt-8 md:pb-20">
        {hasCharacters && (
          <div className="mb-6">
            <CharacterTabs
              currentCharacter={currentCharacter}
              onSelect={(character) => {
                setTabIndex(null);
                setCharAndColor(character);
                setIsBuilder(true);
                BuilderManager.setLastSelected(character.id);
                navigate(`/classes/${character.id}`);
              }}
              onClose={(character, id) => {
                if (currentCharacter && id === currentCharacter?.id) {
                  setCurrentCharacter(null);
                  navigate(`/classes`);
                }
                BuilderManager.deleteCharacter(id);
                checkCharacters(null);
                onUpdate();
              }}
            />
            {isBuilder && (
              <AppDataExportImport
                character={currentCharacter}
                onUpdate={onUpdate}
              />
            )}
          </div>
        )}

        {currentCharacter && (
          <CharacterTemplate
            builder={isBuilder}
            character={currentCharacter}
            onUpdate={onUpdate}
          />
        )}
      </div>
    </>
  );
}
