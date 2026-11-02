// Search & Bookmarks dialog and its result rows. Replaces
// searchBookmarksModal.css and searchResultRow.css.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

/* ---- Dialog contents ----------------------------------------------------- */

// Fills the dialog body: field fixed on top, list scrolls below it.
export const Layout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 0;
`;

// The only scrolling part. Negative margins let it reach the dialog
// edges so the scrollbar sits at the side, not inside the padding.
export const ListArea = styled.div`
  flex: 1;
  min-height: 0;
  margin: 0 -1rem -1rem;
  padding: 0 1rem 1rem;
  overflow-y: auto;
`;

export const ListLabel = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Empty = styled.p`
  margin: 0;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;

/* ---- Result row ---------------------------------------------------------- */

// Whole row navigates; the star inside it toggles the bookmark.
export const Row = styled.div`
  padding: 0.5rem 0.6rem 0.55rem 0.7rem;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  cursor: pointer;
  transition: border-color 0.15s ease;

  ${mq.hover} {
    &:hover {
      border-color: var(--cy-yellow-dim);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 2px;
  }
`;

export const Strip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Name = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--cy-text);
`;

export const Lock = styled.span`
  display: flex;
  color: var(--cy-yellow);
`;

// Star turns yellow when bookmarked.
export const StarButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  background: transparent;
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  color: var(--cy-text-dim);
  cursor: pointer;

  &[aria-pressed='true'] {
    color: var(--cy-yellow);
    border-color: var(--cy-yellow-border);
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 2px;
  }
`;

export const Breadcrumb = styled.div`
  margin-top: 0.2rem;
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--cy-text-dim);
`;

export const CrumbNear = styled.span`
  color: var(--cy-text-muted);
`;

export const CrumbSep = styled.span`
  color: var(--cy-text-dim);
`;

// Node preview content: still the tree's own (teal) styling inside.
export const Preview = styled.div`
  margin-top: 0.4rem;
`;
