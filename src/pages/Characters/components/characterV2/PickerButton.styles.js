// Labeled button that shows a table choice and opens a TablePicker:
// small category label on top, the chosen value (or "Choose…") below.
// Used by the Name card's flavor and by Creds & Debt.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  min-width: 7rem;
  max-width: 16rem;

  /* Fills its column (e.g. side by side in a dialog). */
  &[data-wide='true'] {
    max-width: none;
    width: 100%;
  }
  padding: 0.5rem 0.85rem 0.55rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  font-family: var(--cy-font);
  text-align: center;
  cursor: pointer;
  transition: border-color 0.15s ease;

  ${mq.hover} {
    &:hover {
      border-color: var(--cy-yellow-dim);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 2px;
  }
`;

export const Label = styled.span`
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const Value = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.3;
  overflow-wrap: anywhere;
  color: var(--cy-text);

  &[data-empty='true'] {
    font-weight: 400;
    font-style: italic;
    color: var(--cy-text-muted);
  }
`;
