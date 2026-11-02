// Styles for NoteCard and SharedNoteCard. Replaces noteCard.css and
// sharedNoteCard.css.

import styled from '@emotion/styled';

// Personal notes are solid panels. Shared notes (data-kind="shared")
// drop the fill and get a pink left edge: incoming from someone else.
export const Card = styled.article`
  padding: 0.6rem 0.9rem 0.85rem;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);

  &[data-kind='shared'] {
    background-color: transparent;
    border-left: 2px solid var(--cy-pink-border);
  }
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-height: 2.25rem;
  margin-bottom: 0.4rem;
`;

export const MetaText = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.2rem 0.6rem;
  min-width: 0;
  font-size: 0.75rem;
  letter-spacing: 0.03em;
  color: var(--cy-text-dim);
`;

export const From = styled.span`
  font-weight: 700;
  color: var(--cy-text);

  &[data-anon='true'] {
    font-weight: 400;
    font-style: italic;
    color: var(--cy-text-dim);
  }
`;

export const Edited = styled.span`
  font-style: italic;
`;

export const Controls = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 0.35rem;
`;

// Selectable, unlike most of the app, so notes can be copied.
export const Body = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  color: var(--cy-text);
  -webkit-user-select: text;
  user-select: text;
`;
