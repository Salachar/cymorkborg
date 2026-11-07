// Advancement: the lit "Advance" button on the Name card, its count, and
// the dialog that walks through the three steps.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

/* ---- Name card button ---------------------------------------------------- */

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  margin-top: 1.4rem;
`;

// The card's one flashy control: same lit-sign language as the name.
export const AdvanceButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.5rem;
  padding: 0 1.4rem;
  background-color: var(--cy-yellow-bg);
  border: 1px solid var(--cy-yellow-border);
  border-radius: var(--cy-radius);
  box-shadow: 0 0 16px var(--cy-pink-faint);
  font-family: var(--cy-font);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--cy-yellow);
  text-shadow: 0 0 8px var(--cy-pink-glow);
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  ${mq.hover} {
    &:hover {
      border-color: var(--cy-yellow);
      box-shadow: 0 0 22px var(--cy-pink-glow);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 3px;
  }
`;

export const Count = styled.div`
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

/* ---- Dialog -------------------------------------------------------------- */

export const Intro = styled.p`
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;

export const Step = styled.section`
  padding-top: 0.9rem;
  border-top: 1px solid var(--cy-hairline);

  & > * + * {
    margin-top: 0.6rem;
  }
`;

export const StepTitle = styled.h4`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-yellow);
`;

export const StepRule = styled.p`
  margin: 0.2rem 0 0;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--cy-text-dim);
`;

// Input + roll button + result, on one line.
export const Line = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
`;

export const LineLabel = styled.span`
  min-width: 6.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cy-text-muted);
`;

// One row per ability: name | faces + roll | result.
export const AbilityRow = styled.div`
  display: grid;
  grid-template-columns: 6.5rem auto 1fr;
  align-items: center;
  gap: 0.75rem;
`;

export const Result = styled.span`
  font-size: 0.85rem;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text-dim);

  & > strong {
    color: var(--cy-text);
  }

  &[data-tone='up'] > strong {
    color: var(--cy-yellow);
  }
`;

export const Outcome = styled.p`
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--cy-text-muted);

  & > strong {
    color: var(--cy-text);
  }
`;

export const Summary = styled.div`
  padding: 0.7rem 0.85rem;
  background-color: var(--cy-bg-black);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  font-size: 0.8rem;
  line-height: 1.6;
  color: var(--cy-text-muted);
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--cy-hairline);
`;
