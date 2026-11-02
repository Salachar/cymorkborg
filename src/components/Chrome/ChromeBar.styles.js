// ChromeBar: the bar under the nav, rendered by each page above its Page.
// Rows, top to bottom: main strip, connected players, character, the
// page's extension (children), jumps.
//
// Status colors follow the palette's roles: connected = cyan (live system
// state), connecting = yellow, error = red, offline = dim. Set with
// data-status="connected|connecting|disconnected|error".

import styled from '@emotion/styled';
import { Button } from '@components/Layout/Layout';
import { mq } from '@styles/media';

export const statusColors = `
  &[data-status='connected'] {
    color: var(--cy-cyan);
    border-color: var(--cy-cyan-dim);
  }
  &[data-status='connecting'] {
    color: var(--cy-yellow);
    border-color: var(--cy-yellow-border);
  }
  &[data-status='error'] {
    color: var(--cy-red);
    border-color: var(--cy-red-border);
  }
`;

/* ---- Strip --------------------------------------------------------------- */

// Same surface as the nav, so nav and bar read as one block of chrome.
export const Bar = styled.div`
  flex-shrink: 0;
  background-color: var(--cy-bg-elevated);
  border-bottom: 1px solid var(--cy-hairline);
  font-family: var(--cy-font);
`;

export const StripRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 1rem;
`;

// Slimmer than the standard button so the strip stays thin.
export const StripButton = styled(Button)`
  min-height: 1.85rem;
  padding: 0 0.55rem;
  gap: 0.3rem;
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  ${statusColors}

  &[data-square='true'] {
    width: 1.85rem;
    padding: 0;
  }
`;

export const LastMessage = styled.div`
  display: flex;
  flex: 1;
  align-items: baseline;
  gap: 0.4rem;
  min-width: 0;
  overflow: hidden;
`;

// One style for every message type; the label text says which it is.
export const MessageLabel = styled.span`
  flex-shrink: 0;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--cy-cyan);
`;

export const MessageText = styled.span`
  font-size: 0.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--cy-text-muted);
`;

export const MessageEmpty = styled.span`
  font-size: 0.68rem;
  font-style: italic;
  color: var(--cy-text-dim);
`;

export const ClientsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  padding: 0.2rem 1rem 0.3rem;
  border-top: 1px solid var(--cy-hairline);
`;

export const Client = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.62rem;
  letter-spacing: 0.04em;
  color: var(--cy-text-muted);
`;

export const ClientDot = styled.span`
  flex-shrink: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--cy-cyan);
`;

/* ---- Character row ------------------------------------------------------- */

// Second strip row: the selected character at a glance, lock at the far
// right. Wraps onto two lines on phones.
export const CharacterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem 1rem;
  padding: 0.25rem 1rem 0.35rem;
  border-top: 1px solid var(--cy-hairline);
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.25rem 1rem;
  min-width: 0;
  font-size: 0.72rem;
  font-variant-numeric: tabular-nums;
`;

export const CharacterName = styled.span`
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--cy-text);
`;

export const Readout = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  white-space: nowrap;
`;

export const ReadoutLabel = styled.span`
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--cy-text-dim);
`;

export const ReadoutValue = styled.span`
  font-weight: 700;
  color: var(--cy-text);
`;

// HP value in thirds. The number is always shown; color is a second cue.
export const HealthValue = styled(ReadoutValue)`
  &[data-level='high'] {
    color: var(--cy-green);
  }
  &[data-level='mid'] {
    color: var(--cy-yellow);
  }
  &[data-level='low'] {
    color: var(--cy-red);
  }
`;

export const Stats = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.2rem 0.6rem;
`;

// Lock label hides on phones; the icon stays.
export const LockLabel = styled.span`
  display: none;

  ${mq.md} {
    display: inline;
  }
`;

/* ---- Extension ----------------------------------------------------------- */

// Wraps whatever the page passes as children. No padding of its own: a
// full header (RetCom) brings its own; simple controls use ChromeToolbar.
export const Extension = styled.div`
  border-top: 1px solid var(--cy-hairline);
`;

// Padded row for simple page controls (e.g. Market's search).
export const ChromeToolbar = styled.div`
  padding: 0.45rem 1rem;
`;

/* ---- Jumps --------------------------------------------------------------- */

export const JumpRow = styled.nav`
  border-top: 1px solid var(--cy-hairline);
`;

export const JumpList = styled.div`
  display: flex;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const JumpButton = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.4rem;
  min-height: 2.25rem;
  padding: 0 0.75rem;
  background-color: transparent;
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  font-family: var(--cy-font);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  white-space: nowrap;
  color: var(--cy-text-muted);
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease;

  ${mq.hover} {
    &:hover {
      color: var(--cy-text);
      border-color: var(--cy-yellow-dim);
    }
  }

  &:active {
    background-color: var(--cy-yellow-bg);
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 2px;
  }
`;

export const JumpNumber = styled.span`
  color: var(--cy-yellow);
`;

// Shown in the character row while jacked in: +2DR to all non-App actions,
// so it's worth seeing on every tab.
export const JackedIn = styled.span`
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  white-space: nowrap;
  color: var(--cy-cyan);
`;
