import styled from '@emotion/styled';

export const Group = styled.div`
  & + & {
    margin-top: 1.5rem;
  }
`;

// Category headings replace the old per-category colors.
export const GroupHeading = styled.h4`
  margin: 0 0 0.5rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

// data-out: quantity 0. Still listed, dimmed, until explicitly deleted.
export const Item = styled.article`
  padding: 0.65rem 0.85rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);

  &[data-out='true'] > :first-of-type {
    opacity: 0.5;
  }
`;

export const ItemTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const ItemMain = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.3rem 0.6rem;
`;

export const ItemName = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--cy-text);
`;

export const ItemValue = styled.span`
  font-size: 0.75rem;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text-dim);
`;

export const ItemDescription = styled.div`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;

export const ItemSide = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.6rem;
`;

export const ItemRoller = styled.div`
  margin-top: 0.6rem;
`;

export const Empty = styled.p`
  margin: 0;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--cy-text-muted);
`;

/* ---- Edit dialog --------------------------------------------------------- */

export const GroupTitle = styled.h4`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-yellow);
`;

export const Pickers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
`;

export const AddForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
