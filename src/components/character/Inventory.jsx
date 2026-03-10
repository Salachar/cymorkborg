import React, { useState } from "react";

import SegmentedDice from "../SegmentedDice";
import CollapsibleSection from '../CollapsibleSection';

import {
  STARTING_ITEMS_1,
  STARTING_ITEMS_2,
  STARTING_ITEMS_3,
  searchAllItems,
} from "../../data/tables";

// Category definitions with colors
const CATEGORIES = {
  weapons: { label: "WEAPON", color: "text-red-400", border: "border-red-700", bg: "bg-red-900/20" },
  equipment: { label: "EQUIPMENT", color: "text-yellow-400", border: "border-yellow-700", bg: "bg-yellow-900/20" },
  armor: { label: "ARMOR", color: "text-blue-400", border: "border-blue-700", bg: "bg-blue-900/20" },
  cybertech: { label: "CYBERTECH", color: "text-cy-cyan", border: "border-cy-cyan", bg: "bg-cy-cyan/20" },
  drugs: { label: "DRUG", color: "text-cy-pink", border: "border-cy-pink", bg: "bg-cy-pink/20" },
  ammo: { label: "AMMO", color: "text-green-400", border: "border-green-700", bg: "bg-green-900/20" },
  extracted: { label: "EXTRACTED", color: "text-teal-400", border: "border-teal-700", bg: "bg-teal-900/20" },
  custom: { label: "MISC", color: "text-purple-400", border: "border-purple-700", bg: "bg-purple-900/20" },
};

const CATEGORY_ORDER = ["weapons", "ammo", "armor", "equipment", "cybertech", "drugs", "extracted", "custom"];

export default function Inventory({
  character = null,
  sections = [],
  onUpdate = () => {},
}) {
  const [newItemName, setNewItemName] = useState("");
  const [newItemDesc, setNewItemDesc] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  if (!character) return null;

  // Initialize custom_items if it doesn't exist
  if (!character._custom_items) {
    character._custom_items = [];
  }

  const allEntries = {};
  sections.forEach(section => {
    allEntries[section.name] = section.entries;
  });

  // Get starting items if locked
  const startingItems = [];
  if (character.locked && character._starting_items) {
    const startingItemTables = {
      d8: STARTING_ITEMS_1,
      d12_1: STARTING_ITEMS_2,
      d12_2: STARTING_ITEMS_3,
    };

    Object.keys(character._starting_items).forEach(tableName => {
      const table = startingItemTables[tableName];
      const selections = character._starting_items[tableName];

      if (table && selections) {
        Object.keys(selections).forEach(itemId => {
          if (selections[itemId]) {
            const entry = table.find(e => (e.id || e.label) === itemId);
            if (entry) {
              startingItems.push(entry);
            }
          }
        });
      }
    });
  }

  // Gather all inventory items (from market sections)
  const inventoryItems = [];

  Object.keys(character.gear).forEach(section => {
    Object.keys(character.gear[section]).forEach(itemId => {
      const gearItem = character.gear[section][itemId];
      const found = searchAllItems(itemId);

      const entry = found?.entry ?? {
        label: gearItem.label || itemId,
        description: gearItem.description,
        die: gearItem.die,
        cost: gearItem.cost,
      };

      const resolvedSection = found?.section ?? section;

      inventoryItems.push({
        section: resolvedSection,
        itemId,
        quantity: gearItem.quantity,
        entry,
        isCustom: false,
      });
    });
  });

  // Add custom items
  character._custom_items.forEach((customItem, index) => {
    inventoryItems.push({
      section: 'custom',
      itemId: `custom_${index}`,
      quantity: customItem.quantity || 1,
      entry: {
        label: customItem.label,
        description: customItem.description,
      },
      isCustom: true,
      customIndex: index,
    });
  });

  // Sort by category order
  inventoryItems.sort((a, b) => {
    const aIndex = CATEGORY_ORDER.indexOf(a.section);
    const bIndex = CATEGORY_ORDER.indexOf(b.section);
    return aIndex - bIndex;
  });

  const formatCost = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M¤`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k¤`;
    } else {
      return `${value}¤`;
    }
  };

  const getItemCost = (entry) => {
    const costStr = entry.cost || "0¤";
    const match = costStr.match(/^(\d+(?:\.\d+)?[kM]?)¤/);

    if (match) {
      let value = match[1];
      if (value.includes('k')) {
        return parseFloat(value) * 1000;
      } else if (value.includes('M')) {
        return parseFloat(value) * 1000000;
      } else {
        return parseFloat(value);
      }
    }
    return 0;
  };

  const handleDecrement = (section, itemId, isCustom, customIndex) => {
    if (isCustom) {
      const customItem = character._custom_items[customIndex];
      if (customItem.quantity <= 1) {
        // Remove custom item
        character._custom_items.splice(customIndex, 1);
      } else {
        customItem.quantity -= 1;
      }
    } else {
      const gearItem = character.gear[section][itemId];
      if (gearItem.quantity <= 1) {
        // Remove item completely
        delete character.gear[section][itemId];
        // Clean up empty sections
        if (Object.keys(character.gear[section]).length === 0) {
          delete character.gear[section];
        }
      } else {
        // Decrement quantity
        gearItem.quantity -= 1;
      }
    }
    onUpdate();
  };

  const handleIncrement = (section, itemId, isCustom, customIndex) => {
    if (isCustom) {
      const customItem = character._custom_items[customIndex];
      customItem.quantity += 1;
    } else {
      const gearItem = character.gear[section][itemId];
      gearItem.quantity += 1;
    }
    onUpdate();
  };

  const handleRemove = (section, itemId, isCustom, customIndex) => {
    if (isCustom) {
      character._custom_items.splice(customIndex, 1);
    } else {
      delete character.gear[section][itemId];
      // Clean up empty sections
      if (Object.keys(character.gear[section]).length === 0) {
        delete character.gear[section];
      }
    }
    onUpdate();
  };

  const handleAddCustomItem = () => {
    if (!newItemName.trim()) return;

    character._custom_items.push({
      label: newItemName.trim(),
      description: newItemDesc.trim(),
      quantity: 1,
    });

    setNewItemName("");
    setNewItemDesc("");
    setShowAddForm(false);
    onUpdate();
  };

  return (
    <CollapsibleSection
      title="Inventory"
      character={character}
      headerClass="bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-700 p-4 mb-4"
      headerTextClass="text-gray-400"
      headerChildren={(
        <div className="text-right">
          <div className="text-xs text-gray-500 uppercase mb-1">Total Items</div>
          <div className="text-xl font-bold text-gray-400">
            {inventoryItems.reduce((sum, item) => sum + item.quantity, 0)}
          </div>
        </div>
      )}
      defaultOpen
    >
      {/* Starting Items - Compact Display */}
      {character.locked && startingItems.length > 0 && (
        <div className="mb-4 pb-3 border-b border-orange-700/30">
          <h3 className="text-xs font-bold text-orange-400/70 uppercase tracking-wide mb-2">
            Starting Equipment
          </h3>
          <div className="space-y-1">
            {startingItems.map((item, index) => (
              <div
                key={`starting_${index}`}
                className="flex items-start gap-2 text-sm py-1 px-2 bg-orange-900/10 border-l-2 border-orange-700/50"
              >
                <span className="font-bold text-orange-400/90 whitespace-nowrap">
                  {item.label}
                </span>
                {item.description && (
                  <span className="text-gray-500">— {item.description}</span>
                )}
                {item.die && (
                  <span className="text-orange-400/70 ml-auto whitespace-nowrap font-mono text-xs">
                    [{item.die}]
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Custom Item Button */}
      <div className="mb-4">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="
            w-full px-4 py-2
            bg-purple-900/20 hover:bg-purple-900/30
            border-2 border-purple-700
            text-purple-400 font-bold uppercase text-sm
            transition-all
          "
        >
          {showAddForm ? "− Cancel" : "+ Add Custom Item"}
        </button>

        {/* Add Item Form */}
        {showAddForm && (
          <div className="mt-2 p-4 bg-gray-900/50 border border-purple-700 space-y-3">
            <div>
              <label className="block text-xs text-gray-400 uppercase mb-1">
                Item Name
              </label>
              <input
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="e.g., Mysterious USB Stick"
                className="
                  w-full px-3 py-2
                  bg-black border border-gray-700
                  focus:border-purple-400
                  text-white placeholder-gray-600
                  text-sm
                  outline-none
                "
                autoFocus
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 uppercase mb-1">
                Description (optional)
              </label>
              <textarea
                value={newItemDesc}
                onChange={(e) => setNewItemDesc(e.target.value)}
                placeholder="e.g., Found in Lucky Flight basement. Has 'ZOLA' scratched on it."
                rows={3}
                className="
                  w-full px-3 py-2
                  bg-black border border-gray-700
                  focus:border-purple-400
                  text-white placeholder-gray-600
                  text-sm
                  outline-none
                  resize-none
                "
              />
            </div>

            <button
              onClick={handleAddCustomItem}
              disabled={!newItemName.trim()}
              className="
                w-full px-4 py-2
                bg-purple-700 hover:bg-purple-600
                disabled:bg-gray-800 disabled:text-gray-600
                text-white font-bold uppercase text-sm
                transition-all
              "
            >
              Add to Inventory
            </button>
          </div>
        )}
      </div>

      {inventoryItems.length === 0 && (
        <div className="text-center py-12 text-gray-500 italic border border-gray-800 bg-gray-900/20">
          No items in inventory
        </div>
      )}

      {inventoryItems.length > 0 && (
        <div className="space-y-2">
          {inventoryItems.map(({ section, itemId, quantity, entry, isCustom, customIndex }) => {
            const category = CATEGORIES[section] || CATEGORIES.equipment;
            const itemCost = isCustom ? 0 : getItemCost(entry);
            const totalValue = itemCost * quantity;

            return (
              <div
                key={`${section}_${itemId}`}
                className="p-3 border-l-2 border-y border-r bg-gray-900/20 border-gray-800"
                style={{ borderLeftColor: category.border.replace('border-', '') }}
              >
                {/* Top Row: Category Tag + Name + Total Value */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 border ${category.border} ${category.bg} ${category.color} font-bold uppercase`}>
                      {category.label}
                    </span>
                    <span className="font-bold text-cy-cyan">
                      {entry.label}
                    </span>
                    <span className="text-sm text-gray-500">
                      ×{quantity}
                    </span>
                  </div>
                  {!isCustom && totalValue > 0 && (
                    <div className="text-sm text-gray-400 font-mono">
                      {formatCost(totalValue)}
                    </div>
                  )}
                </div>

                {/* Description */}
                {entry.description && (
                  <div className="text-sm text-gray-400 mb-3">
                    {entry.description}
                  </div>
                )}

                {/* Action Row */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-800">
                  {/* Dice Roller (if applicable) */}
                  <div className="flex-1">
                    {entry.die && (
                      <SegmentedDice
                        dice={entry.die}
                        rollable={true}
                        character_id={character.id}
                      />
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleIncrement(section, itemId, isCustom, customIndex)}
                      className="px-3 py-1 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300 font-bold text-sm transition-colors"
                      title="Use one / Decrement"
                    >
                      +1
                    </button>
                    <button
                      onClick={() => handleDecrement(section, itemId, isCustom, customIndex)}
                      className="px-3 py-1 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300 font-bold text-sm transition-colors"
                      title="Use one / Decrement"
                    >
                      −1
                    </button>
                    <button
                      onClick={() => handleRemove(section, itemId, isCustom, customIndex)}
                      className="px-3 py-1 bg-red-900/20 hover:bg-red-900/30 border border-red-700 text-red-400 font-bold text-sm transition-colors"
                      title="Remove all"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </CollapsibleSection>
  );
}
