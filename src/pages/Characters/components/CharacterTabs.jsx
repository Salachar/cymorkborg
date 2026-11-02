import DeleteIcon from '@mui/icons-material/Delete';

import BuilderManager from '@data/builder';
import { IconButton } from '@components/Layout/Layout';

import { Tabs, TabSlot, Tab, TabClass, TabName } from './CharacterTabs.styles';

// One tab per saved character. The active one shows a delete button beside
// it; onClose is called when it's pressed (the page confirms first).
export default function CharacterTabs({
  currentCharacter,
  onSelect = () => {},
  onClose = () => {},
}) {
  return (
    <Tabs>
      {Object.keys(BuilderManager.characters).map((id) => {
        const character = BuilderManager.characters[id];
        const isActive = Boolean(currentCharacter && currentCharacter.id === id);

        return (
          <TabSlot key={`character_tab_${id}`}>
            <Tab type="button" aria-current={isActive} onClick={() => onSelect(character)}>
              <TabClass>{character.class}</TabClass>
              <TabName>{character.name || 'No Name'}</TabName>
            </Tab>

            {isActive && (
              <IconButton
                type="button"
                data-variant="danger"
                onClick={() => onClose(character, id)}
                aria-label={`Delete ${character.name || 'character'}`}
                title="Delete character"
                style={{ height: 'auto', minHeight: '2.75rem' }}
              >
                <DeleteIcon style={{ fontSize: 16 }} />
              </IconButton>
            )}
          </TabSlot>
        );
      })}
    </Tabs>
  );
}
