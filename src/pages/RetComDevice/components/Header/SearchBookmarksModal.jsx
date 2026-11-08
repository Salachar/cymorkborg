import { useState } from 'react';
import Modal from '@components/Modal/Modal';
import { SearchInput } from '@components/Layout/Layout';
import { searchIndex_filter } from '@utils/commands';

import SearchResultRow from './SearchResultRow';
import {
  Layout,
  ListArea,
  ListLabel,
  Rows,
  Empty,
  Note,
  NoteList,
} from './SearchBookmarks.styles';

// What search can't find. Shown under the results while typing, so it's
// in view at the moment someone wonders why a node isn't there. The last
// entry is deliberately vague.
//   - Locked nodes and anything behind them: not in the index (see buildSearchIndex)
//   - Nodes marked private: searchable: false
const SEARCH_BLIND_SPOTS = [
  'Locked nodes',
  'Anything behind a locked node',
  'Nodes marked private',
  'Other secrets',
];

// Search field on top (no autofocus, so the keyboard stays down when
// you're after a bookmark). Empty field: your bookmarks. Typing: results,
// in the same spot, right under the field.
//
// Search only finds unlocked, searchable nodes (see buildSearchIndex);
// bookmarks show regardless. The note under the results says so.
export default function SearchBookmarksModal({
  open,
  onClose,
  searchIndex = [],
  bookmarkEntries = [],
  bookmarks = {},
  onNavigate,
  onToggleBookmark,
}) {
  const [query, setQuery] = useState('');

  const trimmed = query.trim();
  // Bookmarks come resolved by path, not from the search index, so locked
  // and unsearchable bookmarks still appear.
  const bookmarkedEntries = bookmarkEntries;
  const results = trimmed ? searchIndex_filter(searchIndex, query, 20) : [];

  const handleClose = () => {
    setQuery('');
    onClose?.();
  };

  const handleNavigate = (path) => {
    onNavigate?.(path);
    handleClose();
  };

  const renderRows = (entries) => (
    <Rows>
      {entries.map((entry) => (
        <SearchResultRow
          key={entry.path}
          entry={entry}
          isBookmarked={Boolean(bookmarks[entry.path])}
          onNavigate={handleNavigate}
          onToggleBookmark={() => onToggleBookmark?.(entry.path)}
        />
      ))}
    </Rows>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Search & Bookmarks"
      maxWidth="40rem"
      height="min(80dvh, 44rem)"
    >
      <Layout>
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search commands…"
          label="Search commands"
        />

        <ListArea>
          {trimmed ? (
            <>
              <ListLabel>Results</ListLabel>
              {results.length === 0 ? <Empty>No results.</Empty> : renderRows(results)}
              <Note>
                <p>Search won't find everything. These stay hidden:</p>
                <NoteList>
                  {SEARCH_BLIND_SPOTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </NoteList>
              </Note>
            </>
          ) : (
            <>
              <ListLabel>Bookmarks</ListLabel>
              {bookmarkedEntries.length === 0 ? (
                <Empty>No bookmarks yet. Tap the star on a command to save it here.</Empty>
              ) : (
                renderRows(bookmarkedEntries)
              )}
            </>
          )}
        </ListArea>
      </Layout>
    </Modal>
  );
}
