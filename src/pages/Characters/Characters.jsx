import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CLASSES } from "@data/builder";
import BuilderManager from "@data/builder";

import ClassButtons from "@components/ClassButtons";
import CharacterTabs from "@components/CharacterTabs";
import CharacterTemplate from "@components/CharacterTemplate";

import { NavExtraContext } from "../../App";
import { useCharacterContext } from "@context/CharacterContext";

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

export default function Characters() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { setNavExtra } = useContext(NavExtraContext);
  const { selectedCharacter, selectCharacter, touch } = useCharacterContext();

  const [tabIndex, setTabIndex] = useState(null);
  // Only for previewing a class before any character exists for it — these
  // are the shared CLASSES[i].instance rules-preview objects, not real saved
  // characters, so they stay page-local rather than going into context.
  const [previewCharacter, setPreviewCharacter] = useState(null);
  const [isBuilder, setIsBuilder] = useState(false);
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    checkCharacters(slug);
  }, []);

  // The character actually being rendered — either the globally selected
  // real character (builder mode) or a local rules-preview instance.
  const currentCharacter = isBuilder ? selectedCharacter : previewCharacter;

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

  const setBuilderCharacter = (character) => {
    selectCharacter(character?.id || null);
    setPreviewCharacter(null);
    setClassColor(character);
  };

  const setPreview = (classData) => {
    setPreviewCharacter(classData.instance || classData);
    setClassColor(classData);
  };

  const checkCharacters = (slug) => {
    if (slug) {
      for (let i = 0; i < CLASSES.length; ++i) {
        const class_data = CLASSES[i];
        if (class_data.id === slug) {
          setIsBuilder(false);
          setTabIndex(i);
          setPreview(class_data);
          return;
        }
      }
    }

    const chars = BuilderManager.characters;
    const char_keys = Object.keys(chars);

    if (!char_keys.length) {
      setIsBuilder(false);
      setTabIndex(0);
      setPreview(CLASSES[0]);
      return;
    }

    if (slug) {
      for (let i = 0; i < char_keys.length; ++i) {
        const char_key = char_keys[i];
        if (char_key === slug) {
          setIsBuilder(true);
          setTabIndex(null);
          setBuilderCharacter(chars[char_key]);
          return;
        }
      }
    }

    const lastSelectedId = BuilderManager.lastSelectedId;
    if (lastSelectedId && chars[lastSelectedId]) {
      setIsBuilder(true);
      setTabIndex(null);
      setBuilderCharacter(chars[lastSelectedId]);
      return;
    }

    const firstChar = chars[char_keys[0]];
    if (firstChar && firstChar.id) {
      setIsBuilder(true);
      setTabIndex(null);
      setBuilderCharacter(firstChar);
    }
  };

  const onUpdate = () => {
    touch();
    setTimestamp(Date.now());
  };

  const hasCharacters = Object.keys(BuilderManager.characters).length > 0;

  return (
    <>
      <ClassButtons
        currentIndex={tabIndex}
        onClick={({ instance, index }) => {
          setTabIndex(index);
          setIsBuilder(false);
          setPreview(instance);
          navigate(`/characters/${instance.class_id}`);
        }}
        onAdd={({ constructor }) => {
          const new_character = new constructor();
          BuilderManager.addCharacter(new_character);
          setTabIndex(null);
          setIsBuilder(true);
          setBuilderCharacter(new_character);
          navigate(`/characters/${new_character.id}`);
        }}
      />

      <div className="px-6 pt-6 pb-16 md:px-12 md:pt-8 md:pb-20">
        {hasCharacters && (
          <div className="mb-6">
            <CharacterTabs
              currentCharacter={isBuilder ? selectedCharacter : null}
              onSelect={(character) => {
                setTabIndex(null);
                setIsBuilder(true);
                setBuilderCharacter(character);
                navigate(`/characters/${character.id}`);
              }}
              onClose={(character, id) => {
                if (selectedCharacter && id === selectedCharacter?.id) {
                  selectCharacter(null);
                  navigate(`/characters`);
                }
                BuilderManager.deleteCharacter(id);
                checkCharacters(null);
                onUpdate();
              }}
            />
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
