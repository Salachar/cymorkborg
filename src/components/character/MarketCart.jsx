import React from "react";

export default function MarketCart({
  character = null,
  allEntries = {}, // { section_name: [entries] }
  onCheckout = () => {},
  onAddFree = () => {},
  onClear = () => {},
  onRemoveItem = () => {},
}) {
  if (!character) return null;

  const cartItems = character.getCartItems();
  const total = character.getCartTotal(allEntries);
  const canAfford = character.credits >= total;

  const formatCost = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M¤`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k¤`;
    } else {
      return `${value}¤`;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Cart */}
      <div className="bg-gray-900 border-2 border-yellow-600/50 shadow-lg shadow-yellow-900/20">
        {/* Cart Header */}
        <div className="bg-gradient-to-r from-yellow-900/30 to-gray-900 border-b-2 border-yellow-600/50 px-4 py-3">
          <h3 className="text-xl font-black text-yellow-400 uppercase tracking-wider">
            Cart
          </h3>
        </div>

        <div className="p-4">
          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="text-sm text-gray-500 italic py-8 text-center">
              Cart is empty
            </div>
          ) : (
            <div className="space-y-3 mb-4">
              {cartItems.map(({ section, itemId, quantity }) => {
                const sectionEntries = allEntries[section] || [];
                const entry = sectionEntries.find(e => (e.id || e.label) === itemId);

                if (!entry) return null;

                const label = entry.label || itemId;
                const costStr = entry.cost || "0¤";
                const match = costStr.match(/^(\d+(?:\.\d+)?[kM]?)¤/);

                let itemCost = 0;
                if (match) {
                  let value = match[1];
                  if (value.includes('k')) {
                    value = parseFloat(value) * 1000;
                  } else if (value.includes('M')) {
                    value = parseFloat(value) * 1000000;
                  } else {
                    value = parseFloat(value);
                  }
                  itemCost = value * quantity;
                }

                return (
                  <div key={`${section}_${itemId}`} className="bg-gray-800/50 border border-gray-700 p-2">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex-1">
                        <div className="text-sm text-cy-cyan font-bold leading-tight">
                          {label}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          ×{quantity}
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(section, entry)}
                        className="text-red-400 hover:text-red-300 text-xl leading-none w-6 h-6 flex items-center justify-center hover:bg-red-900/20 transition-colors"
                        title="Remove from cart"
                      >
                        ×
                      </button>
                    </div>
                    <div className="text-sm text-yellow-400 font-mono font-bold">
                      {formatCost(itemCost)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Total */}
          <div className="border-t-2 border-yellow-600/50 pt-3 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-gray-400 uppercase">Total:</span>
              <span className="text-2xl font-black text-yellow-400 font-mono">
                {formatCost(total)}
              </span>
            </div>
            {!canAfford && cartItems.length > 0 && (
              <div className="text-xs text-red-400 bg-red-900/20 border border-red-900/50 px-2 py-1">
                Need {formatCost(total - character.credits)} more
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              onClick={onCheckout}
              disabled={!canAfford || cartItems.length === 0}
              className="
                w-full py-3 px-4
                bg-green-900 hover:bg-green-800
                disabled:bg-gray-800 disabled:text-gray-600
                border-2 border-green-700 disabled:border-gray-700
                text-green-300 disabled:cursor-not-allowed
                font-bold uppercase text-sm
                transition-colors
                shadow-lg disabled:shadow-none
              "
            >
              Checkout
            </button>

            <button
              onClick={onAddFree}
              disabled={cartItems.length === 0}
              className="
                w-full py-3 px-4
                bg-cy-cyan/20 hover:bg-cy-cyan/30
                disabled:bg-gray-800 disabled:text-gray-600
                border-2 border-cy-cyan disabled:border-gray-700
                text-cy-cyan disabled:cursor-not-allowed
                font-bold uppercase text-sm
                transition-colors
              "
            >
              Add Free
            </button>

            <button
              onClick={onClear}
              disabled={cartItems.length === 0}
              className="
                w-full py-2 px-4
                bg-red-900/20 hover:bg-red-900/30
                disabled:bg-gray-800 disabled:text-gray-600
                border border-red-700 disabled:border-gray-700
                text-red-400 disabled:cursor-not-allowed
                font-bold uppercase text-xs
                transition-colors
              "
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>

      {/* Current Credits Display */}
      <div className="bg-gray-900 border-2 border-cy-cyan/50 p-3">
        <div className="text-xs text-gray-500 uppercase mb-1">Available Credits</div>
        <div className="text-2xl font-black text-cy-cyan font-mono">
          {formatCost(character.credits)}
        </div>
      </div>
    </div>
  );
}
