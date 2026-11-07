// Weapons and armor: item `category` values that get their own sheet
// sections (Weapons, Armor) instead of appearing in Inventory. Set by hand
// on table items, Market items and class components.
export const GEAR_KINDS = new Set(['weapon', 'armor']);

/**
 * A die string as the sheet should roll and label it, or null if there's
 * nothing to roll ("0" for No Armor, or no die at all).
 *   "d10a" → { dice: "1d10", autofire: true }
 *   "2d10" → { dice: "2d10", autofire: false }
 */
export function dieInfo(die) {
  if (!die || typeof die !== 'string') return null;
  const trimmed = die.trim();
  if (!trimmed.includes('d')) return null; // "0", plain numbers
  const autofire = /a$/i.test(trimmed);
  const core = trimmed.replace(/a$/i, '');
  return { dice: core.startsWith('d') ? `1${core}` : core, autofire };
}
