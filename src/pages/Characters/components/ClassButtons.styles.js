import styled from '@emotion/styled';
import { mq } from '@styles/media';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

// One thin card per class: the preview button fills the row, "New" sits
// at the end as its own button (siblings, not nested).
export const Row = styled.div`
  display: flex;
  align-items: stretch;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-left: 2px solid var(--cy-hairline);
  border-radius: var(--cy-radius);

  &[data-active='true'] {
    border-left-color: var(--cy-yellow);
    background-color: var(--cy-yellow-bg);
  }
`;

export const Preview = styled.button`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.15rem 0.85rem;
  min-width: 0;
  padding: 0.6rem 0.85rem;
  background: transparent;
  border: 0;
  font-family: var(--cy-font);
  text-align: left;
  cursor: pointer;

  ${mq.hover} {
    &:hover > span:first-of-type {
      color: var(--cy-text);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: -2px;
  }
`;

export const ClassName = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--cy-text-muted);

  [data-active='true'] & {
    color: var(--cy-yellow);
  }
`;

export const Tagline = styled.span`
  font-size: 0.78rem;
  line-height: 1.4;
  color: var(--cy-text-dim);
`;

export const NewSlot = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 0 0.45rem;
`;
