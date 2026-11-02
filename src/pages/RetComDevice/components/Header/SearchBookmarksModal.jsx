import { useState } from 'react';
import Modal from '@components/Modal/Modal';
import { SearchInput } from '@components/Layout/Layout';
import { searchIndex_filter } from '@utils/commands';

import SearchResultRow from './SearchResultRow';
import { Layout, ListArea, ListLabel, Rows, Empty } from './SearchBookmarks.styles';

// Search field on top (no autofocus, so the keyboard stays down when
// you're after a bookmark). Empty field: your bookmarks. Typing: results,
// in the same spot, right under the field.
export default function SearchBookmarksModal({
  open,
  onClose,
  searchIndex = [],
  bookmarks = {},
  onNavigate,
  onToggleBookmark,
}) {
  const [query, setQuery] = useState('');

  const trimmed = query.trim();
  const bookmarkedEntries = searchIndex.filter((entry) => bookmarks[entry.path]);
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
