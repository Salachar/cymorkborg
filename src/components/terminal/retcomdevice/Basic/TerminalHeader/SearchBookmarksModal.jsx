import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import SearchResultRow from './SearchResultRow';
import { searchIndex_filter } from '@utils/commands';

import './searchBookmarksModal.css';

export default function SearchBookmarksModal({
  open,
  onClose,
  searchIndex = [],
  bookmarks = {},
  onNavigate,
  onToggleBookmark,
}) {
  const [query, setQuery] = useState('');

  if (!open) return null;

  const bookmarkedEntries = searchIndex.filter(entry => bookmarks[entry.path]);

  const results = query.trim() ? searchIndex_filter(searchIndex, query, 20) : [];

  const handleNavigate = (path) => {
    onNavigate?.(path);
    onClose?.();
  };

  const handleClose = () => {
    setQuery('');
    onClose?.();
  };

  return (
    <div className="sbm-overlay" onClick={handleClose}>
      <div className="sbm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sbm-header">
          <span className="sbm-title">SEARCH &amp; BOOKMARKS</span>
          <button className="sbm-close-btn" onClick={handleClose}>
            <CloseIcon style={{ fontSize: 18 }} />
          </button>
        </div>

        <div className="sbm-body">
          {/* Bookmarks */}
          <div className="sbm-section-label">BOOKMARKS</div>
          {bookmarkedEntries.length === 0 ? (
            <div className="sbm-empty">No bookmarks yet — tap the star on a command to save it here.</div>
          ) : (
            <div className="sbm-results">
              {bookmarkedEntries.map(entry => (
                <SearchResultRow
                  key={entry.path}
                  entry={entry}
                  isBookmarked={true}
                  onNavigate={handleNavigate}
                  onToggleBookmark={() => onToggleBookmark?.(entry.path)}
                />
              ))}
            </div>
          )}

          <div className="sbm-divider" />

          {/* Search */}
          <div className="sbm-section-label">SEARCH</div>
          <div className="sbm-search-input-wrap">
            <SearchIcon style={{ fontSize: 16, color: 'rgba(79, 209, 197, 0.6)' }} />
            <input
              autoFocus
              className="sbm-search-input"
              type="text"
              placeholder="Search commands..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {query.trim() && (
            <div className="sbm-results" style={{ marginTop: '0.5rem' }}>
              {results.length === 0 ? (
                <div className="sbm-empty">No results.</div>
              ) : (
                results.map(entry => (
                  <SearchResultRow
                    key={entry.path}
                    entry={entry}
                    isBookmarked={Boolean(bookmarks[entry.path])}
                    onNavigate={handleNavigate}
                    onToggleBookmark={() => onToggleBookmark?.(entry.path)}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
