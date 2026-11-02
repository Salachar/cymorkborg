// Price tables for the Services reference. Replaces ServicesComponents'
// Tailwind styling.

import styled from '@emotion/styled';

export const Categories = styled.div`
  & > * + * {
    margin-top: 2rem;
  }
`;

export const Category = styled.div`
  & > * + * {
    margin-top: 0.6rem;
  }
`;

// Scrolls sideways on its own if a phone is too narrow for the columns.
export const TableWrap = styled.div`
  overflow-x: auto;
`;

export const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
`;

export const HeadCell = styled.th`
  padding: 0.4rem 0.5rem;
  border-bottom: 1px solid var(--cy-border);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: right;
  white-space: nowrap;
  color: var(--cy-text-dim);

  &:first-of-type {
    padding-left: 0;
    text-align: left;
  }
`;

export const NameCell = styled.td`
  padding: 0.55rem 0.5rem 0.55rem 0;
  border-bottom: 1px solid var(--cy-hairline);
  line-height: 1.4;
  color: var(--cy-text);

  & > * {
    margin-left: 0.5rem;
  }
`;

export const Detail = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  color: var(--cy-text-dim);
`;

// All price columns look the same; the column header says which is which.
export const PriceCell = styled.td`
  padding: 0.55rem 0.5rem;
  border-bottom: 1px solid var(--cy-hairline);
  text-align: right;
  white-space: nowrap;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text);

  &[data-empty='true'] {
    font-weight: 400;
    color: var(--cy-text-dim);
  }

  &:last-of-type {
    padding-right: 0;
  }
`;

export const Footnote = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-style: italic;
  color: var(--cy-text-dim);
`;
