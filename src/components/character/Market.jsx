import React from "react";

import CollapsibleSection from '../CollapsibleSection';
import MarketCart from "./MarketCart";

// Helper functions for collapse state management
const COLLAPSE_STORAGE_KEY = "cy_borg_collapse_states";

function getCollapseStates() {
  try {
    const stored = localStorage.getItem(COLLAPSE_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    console.error("Error reading collapse states:", e);
    return {};
  }
}

function setCollapseState(characterId, sectionKey, isOpen) {
  try {
    const states = getCollapseStates();
    if (!states[characterId]) {
      states[characterId] = {};
    }
    states[characterId][sectionKey] = isOpen;
    localStorage.setItem(COLLAPSE_STORAGE_KEY, JSON.stringify(states));
  } catch (e) {
    console.error("Error saving collapse state:", e);
  }
}

function getCollapseState(characterId, sectionKey, defaultState = true) {
  const states = getCollapseStates();
  return states[characterId]?.[sectionKey] ?? defaultState;
}

export default function Market({
  character = null,
  sections = [],
  onUpdate = () => {},
}) {
  if (!character || !sections.length) return null;

  const characterId = character?.id || "default";

  const [searchQuery, setSearchQuery] = React.useState("");

  // Track collapse state for each section
  const [sectionStates, setSectionStates] = React.useState(() => {
    const initial = {};
    sections.forEach(section => {
      const key = `market_section_${section.name}`;
      initial[section.name] = getCollapseState(characterId, key, true);
    });
    return initial;
  });

  const toggleSection = (sectionName) => {
    const key = `market_section_${sectionName}`;
    const newState = !sectionStates[sectionName];
    setSectionStates(prev => ({ ...prev, [sectionName]: newState }));
    setCollapseState(characterId, key, newState);
  };

  const allEntries = {};
  sections.forEach(section => {
    allEntries[section.name] = section.entries;
  });

  const cartItems = character.getCartItems();

  const handleAddToCart = (section, entry) => {
    const entry_id = entry.id || entry.label;
    const cartItem = character.shop_cart[section]?.[entry_id];
    if (cartItem) {
      character.updateCartQuantity(section, entry, cartItem.quantity + 1);
    } else {
      character.addToCart(section, entry, 1);
    }
    onUpdate();
  };

  const handleRemoveFromCart = (section, entry) => {
    character.removeFromCart(section, entry);
    onUpdate();
  };

  const handleCheckout = () => {
    const success = character.checkout(allEntries);
    if (success) {
      onUpdate();
    }
  };

  const handleAddFree = () => {
    character.addFreeToInventory();
    onUpdate();
  };

  const handleClear = () => {
    character.clearCart();
    onUpdate();
  };

  // Add this helper function near the top of the file, after the collapse state functions

  function extractTextFromReactNode(node) {
    if (!node) return '';

    // If it's a string or number, return it directly
    if (typeof node === 'string' || typeof node === 'number') {
      return String(node);
    }

    // If it's a React element, extract children
    if (React.isValidElement(node)) {
      return extractTextFromReactNode(node.props.children);
    }

    // If it's an array, process each element
    if (Array.isArray(node)) {
      return node.map(extractTextFromReactNode).join(' ');
    }

    return '';
  }

  // Then update the filterEntries function:

  const filterEntries = (entries) => {
    if (!searchQuery.trim()) return entries;

    const query = searchQuery.toLowerCase();
    return entries.filter(entry => {
      const labelMatch = entry.label?.toLowerCase().includes(query);

      // Extract text from description (handles both strings and React components)
      const descText = extractTextFromReactNode(entry.description);
      const descMatch = descText.toLowerCase().includes(query);

      const tagsMatch = entry.tags?.some(tag => tag.toLowerCase().includes(query));
      return labelMatch || descMatch || tagsMatch;
    });
  };

  // Check if section has matching items
  const sectionHasMatches = (entries) => {
    if (!searchQuery.trim()) return true;
    return filterEntries(entries).length > 0;
  };

  return (
    <CollapsibleSection
      title="Market"
      sectionKey="market"
      character={character}
      headerClass="bg-gradient-to-r from-yellow-900/20 via-gray-900 to-yellow-900/20 border-2 border-yellow-600/50 p-4 mb-4 cursor-pointer hover:border-yellow-600/70 transition-colors"
      headerTextClass="text-yellow-400"
      headerChildrenEnabled={cartItems.length > 0}
      headerChildren={(
        <span className="text-sm text-gray-400">
          ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart)
        </span>
      )}
    >
      <div className="flex gap-4">
        {/* Main Shop Area */}
        <div className="flex-1">
          {/* Search Box */}
          <div className="mb-4 sticky top-0 z-10 bg-gray-950 pb-3">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search items..."
                className="
                  w-full h-12 px-4 pr-10
                  bg-black border-2 border-gray-700
                  focus:border-yellow-500 focus:shadow-[0_0_20px_rgba(234,179,8,0.2)]
                  text-white placeholder-gray-600
                  transition-all
                  outline-none
                "
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="
                    absolute right-2 top-1/2 -translate-y-1/2
                    w-8 h-8
                    flex items-center justify-center
                    text-gray-500 hover:text-gray-300
                    transition-colors
                  "
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="mt-2 text-xs text-gray-500">
                Showing results for "{searchQuery}"
              </div>
            )}
          </div>

          {sections.map((section, sectionIndex) => {
            const { name, label, note, entries } = section;
            const cartSection = character.shop_cart[name] || {};
            const isOpen = sectionStates[name] || false;
            const filteredEntries = filterEntries(entries);
            const hasMatches = sectionHasMatches(entries);

            // Hide section if no matches when searching
            if (!hasMatches) return null;

            return (
              <div key={`shop_section_${name}_${sectionIndex}`}>
                {sectionIndex > 0 && <div className="my-6 border-t border-gray-800" />}

                {/* Section Header - Collapsible */}
                <div
                  onClick={() => toggleSection(name)}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 border-l-4 border-yellow-500 px-4 py-3 mb-3 cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
                      {label}
                      {searchQuery && (
                        <span className="text-xs text-gray-500 ml-2 font-normal">
                          ({filteredEntries.length} match{filteredEntries.length !== 1 ? 'es' : ''})
                        </span>
                      )}
                    </h4>
                    <div className="text-xs text-gray-500 uppercase">
                      {isOpen ? '▼' : '▶'}
                    </div>
                  </div>
                </div>

                {note && isOpen && (
                  <div className="mb-3 px-4 py-2 bg-yellow-900/10 border border-yellow-900/30 text-sm text-gray-300">
                    {note}
                  </div>
                )}

                {/* Items List */}
                {isOpen && (
                  <div className="space-y-2">
                    {filteredEntries.length === 0 && searchQuery && (
                      <div className="p-4 text-center text-gray-500 italic">
                        No items match your search
                      </div>
                    )}
                    {filteredEntries.map((entry, index) => {
                      const entry_id = entry.id || entry.label;
                      const inCart = cartSection[entry_id];
                      const cartQuantity = inCart ? inCart.quantity : 0;

                      return (
                        <div
                          key={`${name}_item_${index}`}
                          onClick={() => {
                            if (!inCart) {
                              handleAddToCart(name, entry);
                            }
                          }}
                          className={`
                            p-3 border-l-2 transition-all
                            ${inCart
                              ? 'bg-gray-800/50 border-l-yellow-500 border-y border-r border-gray-700 cursor-default'
                              : 'bg-gray-900/20 border-l-gray-700 border-y border-r border-gray-800 hover:border-l-yellow-500 hover:bg-gray-800/30 cursor-pointer'
                            }
                          `}
                        >
                          {/* Top Row: Name + Price */}
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex gap-2">
                              <span className="font-bold text-cy-cyan">
                                {entry.label}
                                {entry.die && (
                                  <span className="text-cy-yellow ml-1">({entry.die})</span>
                                )}
                              </span>
                              {entry.tags && entry.tags.length > 0 && (
                                <div className="flex gap-2">
                                  {entry.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="text-xs px-2 py-1 text-cy-pink uppercase">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <span className="text-yellow-400 font-mono font-bold">
                              {entry.cost || "0¤"}
                            </span>
                          </div>

                          {/* Description */}
                          {entry.description && (
                            <div className="text-sm text-gray-400">
                              {entry.description}
                            </div>
                          )}

                          {/* Cart Controls (if in cart) */}
                          {inCart && (
                            <div className="flex items-center justify-between pt-2 border-t border-gray-700 mt-2">
                              <span className="text-xs text-gray-500 uppercase">In Cart:</span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    character.updateCartQuantity(name, entry, cartQuantity - 1);
                                    onUpdate();
                                  }}
                                  className="w-7 h-7 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-yellow-400 font-bold flex items-center justify-center transition-colors"
                                >
                                  −
                                </button>
                                <span className="font-mono font-bold text-yellow-400 min-w-[2ch] text-center text-lg">
                                  {cartQuantity}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    character.updateCartQuantity(name, entry, cartQuantity + 1);
                                    onUpdate();
                                  }}
                                  className="w-7 h-7 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-yellow-400 font-bold flex items-center justify-center transition-colors"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {searchQuery && sections.every(s => !sectionHasMatches(s.entries)) && (
            <div className="text-center py-12 text-gray-500">
              <div className="text-xl mb-2">No items found</div>
              <div className="text-sm">Try a different search term</div>
            </div>
          )}
        </div>

        {/* Sticky Cart Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-4">
            <MarketCart
              character={character}
              allEntries={allEntries}
              onCheckout={handleCheckout}
              onAddFree={handleAddFree}
              onClear={handleClear}
              onRemoveItem={handleRemoveFromCart}
            />
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}
