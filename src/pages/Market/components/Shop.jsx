import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Button, IconButton, Roll, Tag } from '@components/Layout/Layout';
import { cyberEffects } from '@utils/cybertech';

import MarketCart from './MarketCart';
import {
  ShopLayout,
  ShopMain,
  CartColumn,
  NoResults,
  ShopSection,
  SectionHead,
  SectionTitle,
  SectionMeta,
  SectionNote,
  Items,
  Item,
  ItemMain,
  ItemTitle,
  ItemName,
  ItemDescription,
  ItemSide,
  ItemCost,
  Stepper,
  Quantity,
} from './Shop.styles';

// Descriptions can be strings or React nodes; search needs their text.
function extractText(node) {
  if (!node) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (React.isValidElement(node)) return extractText(node.props.children);
  if (Array.isArray(node)) return node.map(extractText).join(' ');
  return '';
}

function matches(entry, query) {
  return (
    entry.label?.toLowerCase().includes(query) ||
    extractText(entry.description).toLowerCase().includes(query) ||
    entry.tags?.some((tag) => tag.toLowerCase().includes(query))
  );
}

// Sections with the entries matching the query (all entries when the query
// is empty). Sections with no matches are dropped. The Market page uses this
// too, to build its jump list from the same result.
export function filterSections(sections = [], searchQuery = '') {
  const query = searchQuery.trim().toLowerCase();
  if (!query) return sections.map((section) => ({ ...section, shown: section.entries }));
  return sections
    .map((section) => ({ ...section, shown: section.entries.filter((e) => matches(e, query)) }))
    .filter((section) => section.shown.length > 0);
}

export const sectionAnchor = (name) => `market-${name}`;

// The search field lives in the page's ChromeBar; the query comes in as a
// prop. Sections are plain (not collapsible); the ChromeBar's jump row is
// the index.
export default function Shop({ character = null, sections = [], searchQuery = '', onUpdate = () => {} }) {
  if (!character || !sections.length) return null;

  const searching = searchQuery.trim().length > 0;
  const { smartjack } = cyberEffects(character);

  const allEntries = {};
  sections.forEach((section) => {
    allEntries[section.name] = section.entries;
  });

  const setQuantity = (sectionName, entry, quantity) => {
    character.updateCartQuantity(sectionName, entry, quantity);
    onUpdate();
  };

  const addToCart = (sectionName, entry) => {
    const id = entry.id || entry.label;
    const cartItem = character.shop_cart[sectionName]?.[id];
    if (cartItem) {
      character.updateCartQuantity(sectionName, entry, cartItem.quantity + 1);
    } else {
      character.addToCart(sectionName, entry, 1);
    }
    onUpdate();
  };

  const removeFromCart = (sectionName, entry) => {
    character.removeFromCart(sectionName, entry);
    onUpdate();
  };

  const handleCheckout = () => {
    if (character.checkout(allEntries)) onUpdate();
  };

  const handleAddFree = () => {
    character.addFreeToInventory();
    onUpdate();
  };

  const handleClear = () => {
    character.clearCart();
    onUpdate();
  };

  const visibleSections = filterSections(sections, searchQuery);

  return (
    <ShopLayout>
      <ShopMain>
        {visibleSections.length === 0 ? (
          <NoResults>No items match "{searchQuery.trim()}".</NoResults>
        ) : (
          visibleSections.map((section) => {
            const cartSection = character.shop_cart[section.name] || {};
            const count = section.shown.length;

            return (
              <ShopSection key={section.name} id={sectionAnchor(section.name)}>
                <SectionHead>
                  <SectionTitle>{section.label}</SectionTitle>
                  {searching && <SectionMeta>{count} match{count === 1 ? '' : 'es'}</SectionMeta>}
                </SectionHead>

                {section.note && <SectionNote>{section.note}</SectionNote>}

                <Items>
                  {section.shown.map((entry, index) => {
                    const id = entry.id || entry.label;
                    const quantity = cartSection[id]?.quantity ?? 0;

                    return (
                      <ShopItem
                        key={`${section.name}_${id}_${index}`}
                        entry={entry}
                        quantity={quantity}
                        onAdd={() => addToCart(section.name, entry)}
                        onSetQuantity={(q) => setQuantity(section.name, entry, q)}
                        smartLinked={smartjack}
                      />
                    );
                  })}
                </Items>
              </ShopSection>
            );
          })
        )}
      </ShopMain>

      <CartColumn>
        <MarketCart
          character={character}
          allEntries={allEntries}
          onCheckout={handleCheckout}
          onAddFree={handleAddFree}
          onClear={handleClear}
          onRemoveItem={removeFromCart}
        />
      </CartColumn>
    </ShopLayout>
  );
}

// smartLinked: the shopper has a SmartJack installed.
function ShopItem({ entry, quantity, onAdd, onSetQuantity, smartLinked = false }) {
  const inCart = quantity > 0;

  return (
    <Item data-in-cart={inCart || undefined}>
      <ItemMain>
        <ItemTitle>
          <ItemName>{entry.label}</ItemName>
          {entry.die && <Roll>{entry.die}</Roll>}
          {entry.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
          {entry.smartjack && (
            <Tag
              data-tone={smartLinked ? 'highlight' : undefined}
              title={smartLinked ? 'Your SmartJack links this weapon' : 'Smart™ weapon: needs a SmartJack for its full potential'}
            >
              {smartLinked ? 'Smart · linked' : 'Smart'}
            </Tag>
          )}
        </ItemTitle>
        {entry.description && <ItemDescription>{entry.description}</ItemDescription>}
      </ItemMain>

      <ItemSide>
        <ItemCost>{entry.cost || '0¤'}</ItemCost>

        {inCart ? (
          <Stepper>
            <IconButton
              type="button"
              onClick={() => onSetQuantity(quantity - 1)}
              aria-label={`Remove one ${entry.label}`}
            >
              <RemoveIcon style={{ fontSize: 16 }} />
            </IconButton>
            <Quantity aria-label={`${quantity} in cart`}>{quantity}</Quantity>
            <IconButton
              type="button"
              onClick={() => onSetQuantity(quantity + 1)}
              aria-label={`Add one ${entry.label}`}
            >
              <AddIcon style={{ fontSize: 16 }} />
            </IconButton>
          </Stepper>
        ) : (
          <Button type="button" onClick={onAdd}>
            Add
          </Button>
        )}
      </ItemSide>
    </Item>
  );
}
