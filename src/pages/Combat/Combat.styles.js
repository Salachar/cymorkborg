// Combat-only styled components. Shared pieces live in @components/Layout.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

/* ---- Quick reference ----------------------------------------------------- */

export const QuickGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;
  border-top: 1px solid var(--cy-hairline);

  ${mq.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const QuickRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.65rem 0;
  border-bottom: 1px solid var(--cy-hairline);
  font-size: 0.9rem;
`;

export const QuickAction = styled.span`
  font-weight: 700;
  color: var(--cy-text);
`;

export const QuickTest = styled.span`
  white-space: nowrap;
`;

/* ---- Steps --------------------------------------------------------------- */

// The flow is a real sequence, so steps are numbered. A thin rail runs
// down from each number through its step's content.
export const StepBlock = styled.section`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 3rem;
  scroll-margin-top: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 2.75rem;
    bottom: 0;
    left: calc(1.125rem - 0.5px);
    width: 1px;
    background-color: var(--cy-hairline);
  }

  ${mq.md} {
    padding-left: 3.75rem;
  }
`;

export const StepNumber = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  background-color: var(--cy-bg-elevated);
  border: 1px solid var(--cy-yellow-border);
  border-radius: var(--cy-radius);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--cy-yellow);
`;

export const StepTitle = styled.h2`
  margin: 0 0 1.25rem;
  padding-top: 0.35rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--cy-yellow);

  ${mq.md} {
    font-size: 1.4rem;
  }
`;

/* ---- Actions ------------------------------------------------------------- */

// Solid frame for standard actions; optional ones use the same dashed
// frame as optional rules.
export const ActionCard = styled.article`
  padding: 0.9rem 1rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);

  &[data-optional='true'] {
    background-color: transparent;
    border-style: dashed;
    border-color: var(--cy-border);
  }

  & > * + * {
    margin-top: 0.5rem;
  }
`;

export const ActionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.4rem 1rem;
`;

export const ActionName = styled.h3`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4rem 0.6rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: var(--cy-text);
`;

export const ActionTest = styled.span`
  font-size: 0.85rem;
  white-space: nowrap;
  color: var(--cy-text-muted);
`;

export const ActionText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--cy-text-muted);
`;

// Fumble/failure consequence. A marked line, not a warning color.
export const ActionRisk = styled.p`
  margin: 0;
  padding-left: 0.6rem;
  border-left: 2px solid var(--cy-border);
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--cy-text-muted);

  strong {
    color: var(--cy-text);
  }
`;

// Extra detail lines under an action (e.g. cover types).
export const ActionDetails = styled.div`
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--cy-text-muted);

  & > * + * {
    margin-top: 0.35rem;
  }
`;

/* ---- Dice ---------------------------------------------------------------- */

// Wraps SegmentedDice (unchanged, still Tailwind inside).
export const RollerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-end;

  &[data-align='start'] {
    justify-content: flex-start;
  }
`;
