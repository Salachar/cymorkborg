export function filterCommands(commands, query) {
  if (!query.trim()) return commands;
  const q = query.toLowerCase();

  const filterEntries = (entries) => {
    const result = {};
    for (const [id, def] of Object.entries(entries)) {
      const titleMatch = id.toLowerCase().includes(q);
      const filteredChildren = def.related_commands
        ? filterEntries(def.related_commands)
        : {};
      const hasMatchingChildren = Object.keys(filteredChildren).length > 0;

      if (titleMatch || hasMatchingChildren) {
        result[id] = {
          ...def,
          related_commands: hasMatchingChildren ? filteredChildren : def.related_commands,
        };
      }
    }
    return result;
  };

  return filterEntries(commands);
}

export function deriveExpandedFromFilter(commands, prefix = '') {
  const expanded = {};
  for (const [id, def] of Object.entries(commands)) {
    const path = prefix ? `${prefix}/${id}` : id;
    expanded[path] = true;
    if (def.related_commands) {
      Object.assign(expanded, deriveExpandedFromFilter(def.related_commands, path));
    }
  }
  return expanded;
}

export function collapseSubtree(expandedRows, path) {
  const next = { ...expandedRows };
  for (const key of Object.keys(next)) {
    if (key === path || key.startsWith(path + '/')) {
      delete next[key];
    }
  }
  return next;
}
