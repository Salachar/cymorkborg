export default function Definitions({
  definitions = [],
  h3 = "",
  before = null,
  after = null,
  builder = false,
}) {
  if (!definitions.length) return null;

  return (
    <>
      {before && before}
      {h3 && <h3 className="text-xl font-bold text-cy-pink mb-3">{h3}</h3>}
      <div className="flex flex-col gap-3 my-2">
        {definitions.map((definition, index) => {
          const {
            id = "",
            name = "",
            label = "",
            die = "",
            cost = "",
            description = "",
            applied = false,
          } = definition || {};

          const displayLabel = label || name;

          return (
            <div
              key={`def_${index}`}
              className="flex flex-col gap-1 pl-3 border-l-2 border-gray-800"
            >
              {/* Label with die and cost */}
              <div className="font-bold text-cy-cyan text-sm">
                <span>{displayLabel}</span>
                {die && (
                  <span className="text-cy-yellow opacity-90 ml-1">
                    ({die})
                  </span>
                )}
                {cost && (
                  <span className="text-yellow-400 opacity-90 ml-1">
                    [{cost}]
                  </span>
                )}
                {builder && applied && (
                  <span className="text-cy-yellow opacity-90 ml-1">
                    (APPLIED)
                  </span>
                )}
                :
              </div>

              {/* Description */}
              <div className="text-gray-300 text-sm leading-relaxed pl-2">
                {description}
              </div>
            </div>
          );
        })}
      </div>
      {after && after}
    </>
  );
}
