// Cyberdeck: the one showy section. A framed device with a status light,
// a rack of cartridge bays, and the Backlash table. Cyan = live system
// state, so the deck lights up cyan only while jacked in.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

/* ---- Header status ------------------------------------------------------- */

export const JackedTag = styled.span`
  padding: 0.1rem 0.45rem;
  border: 1px solid var(--cy-cyan-dim);
  border-radius: var(--cy-radius);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-cyan);
`;

/* ---- Device panel -------------------------------------------------------- */

export const Device = styled.div`
  position: relative;
  padding: 1rem 1.1rem;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &[data-live='true'] {
    border-color: var(--cy-cyan-dim);
    box-shadow:
      0 0 24px var(--cy-cyan-bg),
      inset 0 0 24px var(--cy-cyan-bg);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// HUD corner brackets, like the Name card; cyan while jacked in.
export const Corner = styled.span`
  position: absolute;
  width: 1.1rem;
  height: 1.1rem;
  border: 0 solid var(--cy-border);
  pointer-events: none;

  [data-live='true'] > & {
    border-color: var(--cy-cyan);
  }

  &[data-corner='tl'] { top: -1px; left: -1px; border-top-width: 2px; border-left-width: 2px; }
  &[data-corner='tr'] { top: -1px; right: -1px; border-top-width: 2px; border-right-width: 2px; }
  &[data-corner='bl'] { bottom: -1px; left: -1px; border-bottom-width: 2px; border-left-width: 2px; }
  &[data-corner='br'] { bottom: -1px; right: -1px; border-bottom-width: 2px; border-right-width: 2px; }
`;

export const DeviceRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;

  & + & {
    margin-top: 0.85rem;
    padding-top: 0.85rem;
    border-top: 1px solid var(--cy-hairline);
  }
`;

export const Status = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.6rem;
  min-width: 0;
`;

export const Light = styled.span`
  flex-shrink: 0;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: var(--cy-text-dim);

  [data-live='true'] & {
    background-color: var(--cy-cyan);
    box-shadow: 0 0 8px var(--cy-cyan);
  }
`;

export const StatusText = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-muted);

  [data-live='true'] & {
    color: var(--cy-cyan);
  }
`;

export const StatusNote = styled.div`
  margin-top: 0.15rem;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
  color: var(--cy-text-muted);
`;

// Big on/off switch. Cyan when it will jack in; quiet when it will jack out.
export const JackSwitch = styled.button`
  min-height: 2.75rem;
  padding: 0 1.25rem;
  background-color: var(--cy-cyan-bg);
  border: 1px solid var(--cy-cyan-dim);
  border-radius: var(--cy-radius);
  font-family: var(--cy-font);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-cyan);
  cursor: pointer;

  &[data-live='true'] {
    background-color: transparent;
    border-color: var(--cy-border);
    color: var(--cy-text-muted);
  }

  ${mq.hover} {
    &:hover {
      border-color: var(--cy-cyan);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 2px;
  }
`;

export const Readout = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.25rem 0.75rem;
  min-width: 0;
`;

export const ReadoutLabel = styled.span`
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const ReadoutValue = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text);
`;

export const ReadoutHint = styled.span`
  font-size: 0.75rem;
  color: var(--cy-text-muted);
`;

/* ---- Slot rack ----------------------------------------------------------- */

export const Rack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

// A cartridge bay: number strip on the left, contents on the right.
export const Bay = styled.div`
  display: grid;
  grid-template-columns: 2.75rem 1fr;
  background-color: var(--cy-bg-black);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  overflow: hidden;

  &[data-empty='true'] {
    border-style: dashed;
    background-color: transparent;
  }
`;

export const BayNumber = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 0.75rem;
  background-color: var(--cy-bg-elevated);
  border-right: 1px solid var(--cy-hairline);
  font-size: 0.8rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text-dim);

  [data-empty='false'] > & {
    color: var(--cy-cyan);
  }

  [data-empty='true'] > & {
    background-color: transparent;
    align-items: center;
    padding-top: 0;
  }
`;

export const BayBody = styled.div`
  min-width: 0;
  padding: 0.65rem 0.8rem 0.75rem;

  & > * + * {
    margin-top: 0.55rem;
  }
`;

export const BayHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const CartName = styled.div`
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--cy-text);
`;

export const CartDescription = styled.div`
  margin-top: 0.2rem;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;

export const RollerLabel = styled.div`
  margin-bottom: 0.3rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const Rollers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
`;

export const EmptyBay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--cy-text-dim);
`;

/* ---- Backlash ------------------------------------------------------------ */

export const Panel = styled.div`
  margin-top: 1.25rem;
  padding: 0.85rem 1rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);

  & > * + * {
    margin-top: 0.75rem;
  }
`;

export const PanelHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
`;

export const PanelTitle = styled.h4`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text);
`;

export const PanelActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Result = styled.div`
  padding: 0.65rem 0.8rem;
  background-color: var(--cy-bg-black);
  border: 1px solid var(--cy-yellow-border);
  border-left: 3px solid var(--cy-yellow);
  border-radius: var(--cy-radius);
`;

export const ResultLabel = styled.div`
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--cy-yellow);
`;

export const Hint = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: var(--cy-text-muted);
`;

export const RulesBlock = styled.div`
  margin-top: 1.25rem;
`;

export const Muted = styled.p`
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;
