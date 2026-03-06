import BuilderManager from "../data/builder";

export default function CharacterTabs({
  currentCharacter,
  onSelect = () => {},
  onClose = () => {},
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {Object.keys(BuilderManager.characters).map((id) => {
        const character = BuilderManager.characters[id];
        const isActive = currentCharacter && currentCharacter.id === id;

        return (
          <div
            key={`character_tab_${id}`}
            onClick={() => onSelect(character)}
            className={`
              relative group
              flex items-center gap-2
              px-4 py-2
              bg-gray-900
              border-b-4
              cursor-pointer
              transition-all duration-200
              ${isActive
                ? 'opacity-100 shadow-lg'
                : 'opacity-50 hover:opacity-75'
              }
            `}
            style={{
              borderColor: isActive ? character.color : '#1f2937',
              boxShadow: isActive ? `0 0 15px ${character.color}30` : 'none',
            }}
          >
            {/* Class Name & Character Name */}
            <div className="flex flex-col">
              <div
                className="text-xs font-bold uppercase tracking-wider"
                style={{
                  color: isActive ? character.color : '#6b7280',
                }}
              >
                {character.class}
              </div>
              <div className="text-sm font-bold text-white">
                {character.name || "No Name"}
              </div>
            </div>

            {/* Close Button - Only show when active */}
            {isActive && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose(character, id);
                }}
                className="
                  w-6 h-6
                  flex items-center justify-center
                  bg-red-600 hover:bg-red-700
                  text-white text-sm font-bold
                  rounded
                  transition-colors
                  opacity-50 hover:opacity-100
                  ml-2
                "
                title="Delete character"
              >
                ×
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
