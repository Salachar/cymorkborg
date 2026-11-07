// Terminal Wallet dialog, in the app's styling. Sections sit directly in
// the dialog body (no inner panel), so the body scrolls like any dialog.

import styled from '@emotion/styled';

export const Balance = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  padding: 0.75rem 0.9rem;
  background-color: var(--cy-yellow-bg);
  border: 1px solid var(--cy-yellow-border);
  border-radius: var(--cy-radius);
`;

export const BalanceLabel = styled.div`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-text-muted);
`;

export const BalanceValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--cy-yellow);
`;

export const GroupTitle = styled.h4`
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-text-muted);
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0.75rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);

  &[data-active='true'] {
    border-color: var(--cy-yellow-border);
    border-left: 2px solid var(--cy-yellow);
  }
`;

export const RowMain = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.3rem 0.5rem;
`;

export const ItemName = styled.span`
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--cy-text);
`;

export const Meta = styled.span`
  font-size: 0.75rem;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text-dim);
`;

export const Description = styled.div`
  margin-top: 0.2rem;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;

export const Worth = styled.div`
  margin-top: 0.2rem;
  font-size: 0.75rem;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text-muted);
`;

export const CharClass = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const CharName = styled.div`
  margin-top: 0.1rem;
  overflow: hidden;
  font-size: 0.88rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--cy-text);
`;

export const Muted = styled.p`
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;

export const ClearRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--cy-hairline);
`;
