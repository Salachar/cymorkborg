import styled from '@emotion/styled';
import { mq } from '@styles/media';

/* ---- Play view ----------------------------------------------------------- */

export const Summary = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Panel = styled.div`
  padding: 0.85rem 1rem;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

export const PanelLabel = styled.div`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

// Money is the yellow voice; debt is plain (owing isn't UI danger).
export const Amount = styled.div`
  margin-top: 0.3rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text);

  &[data-tone='credits'] {
    color: var(--cy-yellow);
  }

  &[data-empty='true'] {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    color: var(--cy-text-muted);
  }
`;

export const DebtDetails = styled.dl`
  margin: 0.6rem 0 0;
  font-size: 0.8rem;
  line-height: 1.45;

  & > div + div {
    margin-top: 0.35rem;
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
  font-weight: 400;
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
