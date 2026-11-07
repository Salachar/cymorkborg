import styled from '@emotion/styled';

/* ---- Play view (single column) ------------------------------------------- */

// Thin credits banner: balance on the left, Pay down debt on the right.
export const CreditsBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  padding: 0.6rem 0.75rem 0.6rem 1rem;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

export const CreditsReadout = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
`;

export const PanelLabel = styled.div`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

// Money is the yellow voice.
export const CreditsAmount = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
  color: var(--cy-yellow);
`;

// Debt gets the full width below, so the descriptions have room.
export const DebtBlock = styled.div`
  margin-top: 0.75rem;
  padding: 0.85rem 1rem;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

// Owing isn't UI danger, so the amount is plain.
export const DebtAmount = styled.div`
  margin-top: 0.3rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text);

  &[data-empty='true'] {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    color: var(--cy-text-muted);
  }
`;

export const DebtDetails = styled.dl`
  margin: 0.75rem 0 0;
  font-size: 0.82rem;
  line-height: 1.5;

  & > div + div {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid var(--cy-hairline);
  }
`;

export const DebtTerm = styled.dt`
  display: inline;
  margin-right: 0.4rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const DebtValue = styled.dd`
  display: inline;
  margin: 0;
  font-weight: 700;
  color: var(--cy-text);
`;

export const DebtDescription = styled.span`
  display: block;
  margin-top: 0.1rem;
  font-weight: 400;
  color: var(--cy-text-muted);
`;

/* ---- Pay down debt dialog ------------------------------------------------ */

// Before → after, updating as you type.
export const Preview = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.4rem 1rem;
  margin: 0;
  padding: 0.75rem 0.9rem;
  background-color: var(--cy-bg-black);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  font-variant-numeric: tabular-nums;
`;

export const PreviewTerm = styled.dt`
  align-self: center;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const PreviewValue = styled.dd`
  margin: 0;
  font-size: 0.95rem;
  color: var(--cy-text-muted);

  & > strong {
    color: var(--cy-text);
  }
`;

export const DialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--cy-hairline);
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

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

export const QuickAdjust = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.35rem;

  & > button {
    padding: 0;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0;
  }
`;

export const Pickers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
`;
