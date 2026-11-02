import { useState } from 'react';

import { Page, SearchInput } from '@components/Layout/Layout';
import ChromeBar, { ChromeToolbar } from '@components/Chrome/ChromeBar';
import { GEAR_SECTIONS } from '@data/tables';
import { useCharacterContext } from '@context/CharacterContext';

import MarketBanner from './components/MarketBanner';
import Services from './components/Services';
import Shop, { filterSections, sectionAnchor } from './components/Shop';

import { ServicesSlot, NoCharacter } from './Market.styles';

// Banner, the price reference (always available), and the shop (needs a
// selected character). The search and jump index live in the ChromeBar.
export default function MarketPage() {
  const { selectedCharacter, touch } = useCharacterContext();
  const [searchQuery, setSearchQuery] = useState('');

  // While searching, the jump row lists only sections with matches.
  const jumps = selectedCharacter
    ? [
        { id: 'market-services', label: 'Services' },
        ...filterSections(GEAR_SECTIONS, searchQuery).map((section) => ({
          id: sectionAnchor(section.name),
          label: section.label,
        })),
      ]
    : null;

  return (
    <>
      <ChromeBar character jumps={jumps}>
        {selectedCharacter && (
          <ChromeToolbar>
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search items…"
              label="Search items"
            />
          </ChromeToolbar>
        )}
      </ChromeBar>

      <Page compact>
        <MarketBanner />

        <ServicesSlot id="market-services">
          <Services />
        </ServicesSlot>

        {selectedCharacter ? (
          <Shop
            character={selectedCharacter}
            sections={GEAR_SECTIONS}
            searchQuery={searchQuery}
            onUpdate={touch}
          />
        ) : (
          <NoCharacter>Select a character on the Characters tab to shop.</NoCharacter>
        )}
      </Page>
    </>
  );
}
