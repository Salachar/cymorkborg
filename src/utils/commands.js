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

/**
 * Recursively walk the command tree, building a flat list of searchable
 * entries. Search only finds what a player could reach without cracking
 * anything:
 *   - a locked node (password, not bypassed) is left out, with everything
 *     under it; once unlocked (cracked or shared), it and its subtree are in
 *   - a node with `searchable: false` is left out, with everything under
 *     it, whether locked or not (for secrets that have no password)
 */
export function buildSearchIndex(tree, discoveredPasswords = {}, basePath = '', depth = 0) {
  let results = [];

  for (const [id, def] of Object.entries(tree)) {
    const path = basePath ? `${basePath}/${id}` : id;
    const hasBlocker = Boolean(def.password);
    const isBypassed = Boolean(discoveredPasswords[path]);

    if (def.searchable === false) continue;
    if (hasBlocker && !isBypassed) continue;

    results.push({
      id,
      path,
      depth,
      preview: def.preview ?? null,
      favicon: def.favicon ?? null,
      hasBlocker,
      isBypassed,
    });

    if (def.related_commands && Object.keys(def.related_commands).length > 0) {
      results = results.concat(
        buildSearchIndex(def.related_commands, discoveredPasswords, path, depth + 1)
      );
    }
  }

  return results;
}

/**
 * Entries for bookmarked paths, in tree order. Unlike search, this ignores
 * locks and `searchable`: a bookmarked lock should stay in Bookmarks so the
 * player can come back to crack it. Same entry shape as buildSearchIndex.
 */
export function buildBookmarkEntries(tree, bookmarks = {}, discoveredPasswords = {}, basePath = '', depth = 0) {
  let results = [];

  for (const [id, def] of Object.entries(tree)) {
    const path = basePath ? `${basePath}/${id}` : id;

    if (bookmarks[path]) {
      results.push({
        id,
        path,
        depth,
        preview: def.preview ?? null,
        favicon: def.favicon ?? null,
        hasBlocker: Boolean(def.password),
        isBypassed: Boolean(discoveredPasswords[path]),
      });
    }

    if (def.related_commands && Object.keys(def.related_commands).length > 0) {
      results = results.concat(
        buildBookmarkEntries(def.related_commands, bookmarks, discoveredPasswords, path, depth + 1)
      );
    }
  }

  return results;
}

/**
 * Normalize a string for fuzzy-ish matching: lowercase, strip common
 * punctuation, trim whitespace.
 */
function normalize(str) {
  return String(str)
    .toLowerCase()
    .replace(/['’"`.,!?]/g, '')
    .trim();
}

/** Normalize and also strip all whitespace. */
function normalizeNoSpace(str) {
  return normalize(str).replace(/\s+/g, '');
}

/**
 * Filter a search index by query string. Matches against the entry's
 * display name (id) only, with normalization for punctuation/whitespace.
 * Returns up to `limit` results, best matches first.
 */
export function searchIndex_filter(index, query, limit = 20) {
  const q = normalize(query);
  if (!q) return [];

  const qNoSpace = normalizeNoSpace(query);

  const scored = [];
  for (const entry of index) {
    const name = normalize(entry.id);
    const nameNoSpace = normalizeNoSpace(entry.id);

    let score;
    if (name === q) score = 0;
    else if (name.startsWith(q)) score = 1;
    else if (name.includes(q)) score = 2;
    else if (qNoSpace && nameNoSpace.includes(qNoSpace)) score = 3;
    else score = -1;

    if (score >= 0) scored.push({ entry, score });
  }

  scored.sort((a, b) => a.score - b.score || a.entry.id.localeCompare(b.entry.id));

  return scored.slice(0, limit).map(x => x.entry);
}

/**
 * Given a full path like "a/b/c", return all ancestor paths plus the
 * path itself, in order from root to leaf:
 * ["a", "a/b", "a/b/c"]
 */
export function getAncestorPaths(path) {
  const parts = path.split('/');
  const result = [];
  for (let i = 0; i < parts.length; i++) {
    result.push(parts.slice(0, i + 1).join('/'));
  }
  return result;
}

/**
 * Look up a node's definition by its path ("a/b/c"), walking
 * related_commands one segment at a time. Returns null if any segment is
 * missing (e.g. the node was renamed since it was shared).
 */
export function findCommand(tree, path) {
  if (!tree || !path) return null;
  let level = tree;
  let def = null;
  for (const segment of path.split('/')) {
    def = level?.[segment];
    if (!def) return null;
    level = def.related_commands || {};
  }
  return def;
}

/**
 * What a shared node unlocks for the receiver, as { path: password }.
 *
 * A sender can only see a node if every node above it is unlocked, so the
 * ancestors with passwords always unlock. The node itself unlocks only if
 * the sender had unlocked it (`unlocked`). Passwords come from the
 * receiver's own tree, so they never travel over the wire.
 *
 * If part of the path no longer exists, whatever resolved is returned.
 */
export function resolveShare(tree, path, unlocked = false) {
  const result = {};
  if (!tree || !path) return result;

  const paths = getAncestorPaths(path);
  paths.forEach((p, i) => {
    const isTarget = i === paths.length - 1;
    const def = findCommand(tree, p);
    if (!def?.password) return;
    if (isTarget && !unlocked) return;
    result[p] = def.password.pw || 'UNLOCKED';
  });

  return result;
}
