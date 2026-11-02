// Small character helpers shared across pages (were in CharacterStrip).

export const STAT_LABELS = {
  STR: 'Strength',
  AGI: 'Agility',
  PRE: 'Presence',
  TOU: 'Toughness',
  KNO: 'Knowledge',
};

// 2 -> "+2", -1 -> "-1", 0 -> "0". Non-numbers -> null.
export function formatModifier(value) {
  if (typeof value !== 'number') return null;
  return value > 0 ? `+${value}` : `${value}`;
}

// HP in thirds: "high" above 2/3, "mid" above 1/3, "low" at 1/3 or below
// (including 0 and negative). null when max HP isn't usable.
export function healthLevel(current, max) {
  if (typeof current !== 'number' || typeof max !== 'number' || max <= 0) return null;
  const ratio = current / max;
  if (ratio > 2 / 3) return 'high';
  if (ratio > 1 / 3) return 'mid';
  return 'low';
}
