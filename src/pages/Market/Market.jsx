import { Page } from "@components/PageComponents";

import CharacterStrip from "@components/CharacterStrip";
import Services from "@components/character/Services";
import MarketShop from "@components/character/Market";
import { GEAR_SECTIONS } from "@data/tables";

import { useCharacterContext } from "@context/CharacterContext";

export default function MarketPage() {
  const { selectedCharacter, touch } = useCharacterContext();

  return (
    <Page>
      <CharacterStrip
        character={selectedCharacter}
        emptyMessage="No character selected. Pick one on the Characters tab to shop for them."
      />

      {selectedCharacter && (
        <>
          {/* Services defaults to collapsed via its own CollapsibleSection */}
          <Services character={selectedCharacter} />

          <MarketShop
            character={selectedCharacter}
            sections={GEAR_SECTIONS}
            onUpdate={touch}
          />
        </>
      )}
    </Page>
  );
}
