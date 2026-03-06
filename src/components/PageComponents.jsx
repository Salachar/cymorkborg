export const Page = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">{children}</div>
  )
}

export const PageHeader = ({
  title = "",
  subtitle = "",
}) => {
  return (
    <div className="mb-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cy-cyan/5 via-transparent to-cy-yellow/5 blur-3xl -z-10" />
      <h1 className="text-4xl font-black text-cy-cyan mb-3 tracking-tight uppercase glitch-text">{title}</h1>
      <p className="text-2xl text-cy-smoke font-bold">{subtitle}</p>
    </div>
  );
}

export const PageBox = ({
  title = "",
  children,
}) => {
  return (
    <section className="mb-12">
      <div className="bg-gradient-to-br from-gray-900/90 to-black border-2 border-cy-cyan/30 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cy-cyan/5 blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-cy-yellow mb-4 uppercase">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export const Callout = ({
  title = "",
  children,
}) => {
  return (
    <section className="mb-12">
      <div className="bg-gradient-to-r from-red-900/20 via-gray-900/20 to-red-900/20 border-l-4 border-red-500 p-6">
        <p className="text-xl font-black text-red-400 mb-2 uppercase tracking-wide">
          {title}
        </p>
        {children}
      </div>
    </section>
  );
}

export const DefinitionBox = ({
  title = "",
  definitions = [],
  children,
}) => {
  return (
    <div className="bg-gradient-to-br from-cy-cyan/10 to-transparent border-2 border-cy-cyan p-6 mt-8">
      <h2 className="text-2xl font-black text-cy-cyan mb-4 uppercase">{title}</h2>
      {children}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {definitions.map((def, i) => {
          return (
            <div key={i} className="bg-black/30 p-3 rounded">
              <p className="text-cy-cyan font-bold text-sm mb-1">{def.label}</p>
              <p className="text-gray-400 text-xs">{def.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export const ListBox = ({
  title = "",
  list = [],
}) => {
  return (
    <section className="mb-8">
      <div className="bg-cy-yellow/10 border-2 border-cy-yellow p-6 md:p-8">
        <h2 className="text-3xl font-black text-cy-yellow mb-6 uppercase">{title}</h2>
        <ol className="space-y-4 text-gray-300">
          {list.map((listItem, i) => {
            return (
              <li key={i} className="flex gap-4">
                {/* Number */}
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-cy-yellow/20 border border-cy-yellow/50 font-bold text-cy-yellow">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="font-bold text-cy-yellow mb-1 text-lg">
                    {listItem.label}
                  </div>
                  <div className="text-sm text-gray-400 leading-relaxed">
                    {listItem.description}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
