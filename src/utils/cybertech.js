// Cybertech that the app integrates. Only INSTALLED tech counts: the
// Cybertech section (character._cyberware). Inventory's Cybertech category
// is carried, not installed (bought, looted, or pulled), until Install.
//
// Components ask for effects (cyberEffects), never item ids, so adding
// another integration is one line here.

const GEAR_SECTION = 'cybertech'; // Inventory's storage section for cybertech

export const hasCybertech = (character, id) =>
  Boolean(character?._cyberware?.[id]);

/**
 * Effects of installed cybertech:
 *   armorDie        natural armor die (Skinhard: 'd2'), or null
 *   extraAppSlots   extra deck App slots (Skinslot: 1)
 *   maxHpBonus      added to max HP (Skeleplating: 10)
 *   smartjack       Smart™ weapons are linked (SmartJack)
 */
export function cyberEffects(character) {
  return {
    armorDie: hasCybertech(character, 'skinhard') ? 'd2' : null,
    extraAppSlots: hasCybertech(character, 'skinslot') ? 1 : 0,
    maxHpBonus: hasCybertech(character, 'skeleplating') ? 10 : 0,
    smartjack: hasCybertech(character, 'smartjack'),
  };
}

// Inventory → installed. Takes one from the gear stack (it stays listed at
// 0, like any used-up item) and installs it. No-op if already installed.
export function installCybertech(character, itemId, storageSection = GEAR_SECTION) {
  if (hasCybertech(character, itemId)) return false;
  const stack = character.gear?.[storageSection]?.[itemId];
  if (!stack || (stack.quantity ?? 0) <= 0) return false;
  stack.quantity -= 1;
  if (!character._cyberware) character._cyberware = {};
  character._cyberware[itemId] = true;
  return true;
}

// Installed → Inventory (to sell, swap, or keep). Use the Cybertech
// section's delete for tech that's destroyed instead.
export function uninstallCybertech(character, itemId) {
  if (!hasCybertech(character, itemId)) return false;
  delete character._cyberware[itemId];
  if (!character.gear[GEAR_SECTION]) character.gear[GEAR_SECTION] = {};
  const stack = character.gear[GEAR_SECTION][itemId];
  if (stack) stack.quantity = (stack.quantity ?? 0) + 1;
  else character.gear[GEAR_SECTION][itemId] = { quantity: 1 };
  return true;
}
