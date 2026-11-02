import AddIcon from '@mui/icons-material/Add';

import { CLASSES } from '@data/builder';
import { Collapsible, Button } from '@components/Layout/Layout';

import { List, Row, Preview, ClassName, Tagline, NewSlot } from './ClassButtons.styles';

/**
 * Class picker, in a "Classes" Collapsible (open/closed is app-wide).
 * One thin card per class: tap the card to preview the class, "New" to
 * start a character of it. The previewed class is marked yellow.
 *
 * Taglines come from each class's `static tagline`; a class without one
 * just shows its name.
 */
export default function ClassButtons({
  currentIndex = null,
  onClick = () => {},
  onAdd = () => {},
}) {
  return (
    <Collapsible title="Classes" sectionKey="class_picker" defaultOpen>
      <List>
        {CLASSES.map((character_class, index) => {
          const name = character_class.instance.class;
          const tagline = character_class.constructor.tagline;
          const isActive = currentIndex === index;

          return (
            <Row key={character_class.id || name} data-active={isActive}>
              <Preview
                type="button"
                aria-current={isActive}
                onClick={() => onClick({ ...character_class, index })}
              >
                <ClassName>{name}</ClassName>
                {tagline && <Tagline>{tagline}</Tagline>}
              </Preview>

              <NewSlot>
                <Button
                  type="button"
                  onClick={() => onAdd({ ...character_class, index })}
                  aria-label={`Create a new ${name}`}
                  title={`Create a new ${name}`}
                >
                  <AddIcon style={{ fontSize: 16 }} />
                  New
                </Button>
              </NewSlot>
            </Row>
          );
        })}
      </List>
    </Collapsible>
  );
}
