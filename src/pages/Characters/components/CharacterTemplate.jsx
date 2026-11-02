import ClassUniques from "./characterV2/ClassUniques";
import ClassSection from "./characterV2/ClassSection";
import ClassArtwork from "./ClassArtwork";

import { Prose } from "@components/Layout/Layout";
import { Sheet, Anchor, Description } from "./CharacterTemplate.styles";

import Stats from "./characterV2/Stats";
import HealthBar from "./characterV2/HealthBar";
import Name from "./characterV2/Name";
import CredsDebt from "./characterV2/CredsDebt";
import Glitches from "./characterV2/Glitches";
import Inventory from "./characterV2/Inventory";
import NanoPowers from "./characterV2/NanoPowers";
import Infestations from "./characterV2/Infestations";
import Apps from "./characterV2/Apps";
import Cyberware from "./characterV2/Cyberware";
import Cyberdeck from "./characterV2/Cyberdeck";


// Jump items for a real character's sheet (the page passes them to its
// ChromeBar). Ids match the Anchors below.
export function getSheetJumps(character) {
  if (!character) return null;
  const hasClassComponents = Boolean(character.constructor.components?.length);
  return [
    { id: "sheet-name", label: "Name" },
    { id: "sheet-uniques", label: "Uniques" },
    { id: "sheet-stats", label: "Stats" },
    { id: "sheet-health", label: "Health" },
    { id: "sheet-glitches", label: "Glitches" },
    { id: "sheet-creds", label: "Creds & Debt" },
    hasClassComponents && { id: "sheet-class", label: "Class" },
    { id: "sheet-inventory", label: "Inventory" },
    { id: "sheet-nano", label: "Nano" },
    { id: "sheet-infestations", label: "Infestations" },
    { id: "sheet-apps", label: "Apps" },
    { id: "sheet-cyberdeck", label: "Deck" },
    { id: "sheet-cybertech", label: "Cybertech" },
  ].filter(Boolean);
}

export default function CharacterTemplate({
  builder = false,
  character = null,
  onUpdate = () => {},
}) {
  if (!character) return null;


  return (
    <Sheet>
      {!builder && (
        <>
          <Description>
            <Prose>
              {character.description.map((paragraph, index) => (
                <p key={`${character.class}_desc_${index}`}>{paragraph}</p>
              ))}
            </Prose>
          </Description>
          <ClassArtwork character={character} />
        </>
      )}

      <Anchor id="sheet-name">
        <Name
          character={character}
          builder={builder}
          onUpdate={onUpdate}
        />
      </Anchor>

      <ClassUniques character={character} />

      {builder && (
        <>
          <Stats character={character} onUpdate={onUpdate} />
          <HealthBar character={character} onUpdate={onUpdate} />
          <Glitches character={character} onUpdate={onUpdate} />
          <CredsDebt character={character} onUpdate={onUpdate} />
        </>
      )}

      <ClassSection character={character} builder={builder} onUpdate={onUpdate} />

      {builder && (
        <>
          <Inventory character={character} onUpdate={onUpdate} />
          <NanoPowers character={character} onUpdate={onUpdate} />
          <Infestations character={character} onUpdate={onUpdate} />
          <Apps character={character} onUpdate={onUpdate} />
          <Cyberdeck character={character} onUpdate={onUpdate} />
          <Cyberware character={character} onUpdate={onUpdate} />
        </>
      )}
    </Sheet>
  );
}
