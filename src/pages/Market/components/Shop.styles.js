// Shop list, item rows, and the shop/cart layout.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

// Phones: cart stacked above the list. Tablet and up: list + sticky cart
// sidebar.
export const ShopLayout = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1.25rem;

  ${mq.md} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ShopMain = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CartColumn = styled.aside`
  ${mq.md} {
    position: sticky;
    top: 0.75rem;
    flex-shrink: 0;
    width: 16rem;
  }
`;

export const NoResults = styled.p`
  margin: 0;
  padding: 2.5rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: var(--cy-text-muted);
`;

// Plain section (no collapsing). Scroll target for the jump row.
export const ShopSection = styled.section`
  scroll-margin-top: 1rem;

  & + & {
    margin-top: 2rem;
  }
`;

export const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--cy-hairline);
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cy-yellow);
`;

export const SectionMeta = styled.span`
  font-size: 0.7rem;
  color: var(--cy-text-dim);
`;

export const SectionNote = styled.div`
  margin-bottom: 0.6rem;
  padding: 0.55rem 0.75rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  font-size: 0.825rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

/* ---- Item row ------------------------------------------------------------ */

// Not clickable as a whole (avoids accidental adds while thumb-scrolling).
// In-cart items get a yellow left edge.
export const Item = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.7rem 0.85rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-left: 2px solid var(--cy-hairline);
  border-radius: var(--cy-radius);

  &[data-in-cart='true'] {
    border-left-color: var(--cy-yellow);
  }
`;

export const ItemMain = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.5rem;
`;

export const ItemName = styled.h4`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--cy-text);
`;

export const ItemDescription = styled.div`
  margin-top: 0.3rem;
  font-size: 0.825rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;

export const ItemSide = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

export const ItemCost = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: var(--cy-text);
`;

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

export const Quantity = styled.span`
  min-width: 2ch;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--cy-yellow);
`;
