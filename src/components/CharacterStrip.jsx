import { Link } from "react-router-dom";

export const STAT_LABELS = {
  AGI: "Agility",
  KNO: "Knowledge",
  PRE: "Presence",
  STR: "Strength",
  TOU: "Toughness",
};

export function formatModifier(value) {
  if (typeof value !== "number") return null;
  return value > 0 ? `+${value}` : `${value}`;
}

// Compact strip showing who a page is acting on behalf of. Selection is
// managed on the Characters tab — this just reflects it, with a link back
// there when nothing is selected.
export default function CharacterStrip({ character, emptyMessage = "No character selected." }) {
  if (!character) {
    return (
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2 bg-gray-900/50 border border-gray-700 p-3 rounded text-sm">
        <span className="text-gray-400">{emptyMessage}</span>
        <Link
          to="/characters"
          className="text-cy-cyan hover:underline font-bold uppercase text-xs"
        >
          Select on Characters tab
        </Link>
      </div>
    );
  }

  return (
    <div
      className="mb-6 flex flex-wrap items-center gap-4 bg-gray-900/50 border p-3 rounded text-sm"
      style={{ borderColor: character.color || "#374151" }}
    >
      <div>
        <span className="text-gray-500 uppercase text-xs mr-2">Selected</span>
        <span className="font-bold" style={{ color: character.color }}>
          {character.name || "Unnamed"}
        </span>
        <span className="text-gray-500 ml-1">({character.class})</span>
      </div>
      <div className="flex gap-3 font-mono">
        {Object.entries(STAT_LABELS).map(([key, label]) => (
          <span key={key} className="text-gray-400" title={label}>
            {key} <span className="text-cy-yellow font-bold">{formatModifier(character.stats?.[key]) ?? "—"}</span>
          </span>
        ))}
      </div>
      {typeof character.credits === "number" && (
        <div className="ml-auto text-yellow-400 font-mono font-bold">
          {character.credits}¤
        </div>
      )}
    </div>
  );
}
