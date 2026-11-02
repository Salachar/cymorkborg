import styled from '@emotion/styled';

// Nano-only: the linked infestation block. Cards come from
// Collection.styles.js.

// Set apart under a dashed rule. Neutral colors: bad news in the story,
// not a UI danger.
export const Linked = styled.div`
  margin-top: 0.8rem;
  padding-top: 0.65rem;
  border-top: 1px dashed var(--cy-border);
`;

export const LinkedLabel = styled.div`
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const LinkedName = styled.div`
  margin-top: 0.2rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--cy-text);
`;
