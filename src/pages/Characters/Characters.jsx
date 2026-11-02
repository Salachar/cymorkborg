import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CLASSES } from "@data/builder";
import BuilderManager from "@data/builder";

import ClassButtons from "./components/ClassButtons";
import CharacterTabs from "./components/CharacterTabs";
import CharacterTemplate, { getSheetJumps } from "./components/CharacterTemplate";

import ChromeBar from "@components/Chrome/ChromeBar";
import ConfirmationModal from "@components/ConfirmationModal/ConfirmationModal";
import { Page, Collapsible } from "@components/Layout/Layout";

import { useCharacterContext } from "@context/CharacterContext";

import { Pickers, NoPunks } from "./Characters.styles";

export default function Characters() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { selectedCharacter, selectCharacter, touch } = useCharacterContext();

  const [tabIndex, setTabIndex] = useState(null);
  // Only for previewing a class before any character exists for it — these
  // are the shared CLASSES[i].instance rules-preview objects, not real saved
  // characters, so they stay page-local rather than going into context.
  const [previewCharacter, setPreviewCharacter] = useState(null);
  const [isBuilder, setIsBuilder] = useState(false);
  // Character waiting on delete confirmation: { character, id } or null.
  const [pendingDelete, setPendingDelete] = useState(null);

  useEffect(() => {
    checkCharacters(slug);
  }, []);

  // The character actually being rendered — either the globally selected
  // real character (builder mode) or a local rules-preview instance.
  const currentCharacter = isBuilder ? selectedCharacter : previewCharacter;

  const setBuilderCharacter = (character) => {
    selectCharacter(character?.id || null);
    setPreviewCharacter(null);
  };

  const setPreview = (classData) => {
    setPreviewCharacter(classData.instance || classData);
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

  // touch() bumps the character context, which re-renders this page and
  // the strip's character row (the lock lives there now).
  const onUpdate = () => {
    touch();
  };

  const deleteCharacter = (id) => {
    if (selectedCharacter && id === selectedCharacter?.id) {
      selectCharacter(null);
      navigate(`/punks`);
    }
    BuilderManager.deleteCharacter(id);
    checkCharacters(null);
    onUpdate();
  };

  const characterCount = Object.keys(BuilderManager.characters).length;

  // Jumps only for a real character's sheet, not a class preview.
  const jumps = isBuilder ? getSheetJumps(currentCharacter) : null;

  return (
    <>
      <ChromeBar character jumps={jumps} />
      {/* Scroll memory off here, as before: switching characters reuses
          this page, and each sheet should start at the top. */}
      <Page compact rememberScroll={false}>
      {/* Collapse both while playing and the punk's name card sits at the top. */}
      <Pickers>
        <Collapsible
          title="Your Punks"
          sectionKey="your_punks"
          defaultOpen
          meta={characterCount > 0 ? String(characterCount) : null}
        >
          {characterCount > 0 ? (
              <CharacterTabs
                currentCharacter={isBuilder ? selectedCharacter : null}
                onSelect={(character) => {
                  setTabIndex(null);
                  setIsBuilder(true);
                  setBuilderCharacter(character);
                  navigate(`/punks/${character.id}`);
                }}
                onClose={(character, id) => setPendingDelete({ character, id })}
              />
          ) : (
            <NoPunks>No punks yet. Start one from a class below.</NoPunks>
          )}
        </Collapsible>

        <ClassButtons
          currentIndex={tabIndex}
          onClick={({ instance, index }) => {
            setTabIndex(index);
            setIsBuilder(false);
            setPreview(instance);
            navigate(`/punks/${instance.class_id}`);
          }}
          onAdd={({ constructor }) => {
            const new_character = new constructor();
            BuilderManager.addCharacter(new_character);
            setTabIndex(null);
            setIsBuilder(true);
            setBuilderCharacter(new_character);
            navigate(`/punks/${new_character.id}`);
          }}
        />
      </Pickers>

      {currentCharacter && (
        <CharacterTemplate
          builder={isBuilder}
          character={currentCharacter}
          onUpdate={onUpdate}
        />
      )}

      <ConfirmationModal
        open={Boolean(pendingDelete)}
        title="Delete Character"
        message={`Delete ${pendingDelete?.character?.name || "this character"}? This cannot be undone.`}
        confirmLabel="Delete"
        onConfirm={() => {
          const id = pendingDelete?.id;
          setPendingDelete(null);
          if (id) deleteCharacter(id);
        }}
        onCancel={() => setPendingDelete(null)}
      />
      </Page>
    </>
  );
}
