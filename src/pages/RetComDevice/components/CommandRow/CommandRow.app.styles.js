// CommandRow in the main app's styling, for comparison with the in-universe
// teal version (CommandRow.styles.js). Same export names: swap the import
// in CommandRow.jsx to try it.
//
// Palette roles: neutral panel rows, yellow for the open (expanded) row and
// for locks, cyan for the bypass readout (system state). Touch-first: no
// hover styles, 44px tap targets.
//
// theme 'rcda' (data-theme): a node only the jailbroken RCD can see. Same
// purple scheme as RCDAlert. Applies to that node only (no inheritance).

import styled from '@emotion/styled';
import LockIcon from '@mui/icons-material/Lock';

// RCDAlert's purple.
const RCD = 'rgb(168, 85, 247)';
const RCD_DIM = 'rgba(168, 85, 247, 0.3)';
const RCD_GLOW = 'rgba(168, 85, 247, 0.25)';

export const Root = styled.div`
  position: relative;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-left: 2px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  font-family: var(--cy-font);

  &[data-expanded='true'] {
    border-left-color: var(--cy-yellow);
  }

  &[data-locked='true'] {
    border-left-color: var(--cy-yellow-dim);
  }

  /* After the state rules, so the purple edge wins over locked/open. */
  &[data-theme='rcda'] {
    background-color: rgb(27, 18, 41);
    border-color: ${RCD_DIM};
    border-left: 5px solid ${RCD};
    /* box-shadow: 0 0 18px ${RCD_GLOW}, 0 2px 8px rgba(0, 0, 0, 0.6); */
  }

  &[data-theme='rcda'][data-expanded='true'] {
    box-shadow: 0 0 26px rgba(168, 85, 247, 0.4), 0 2px 8px rgba(0, 0, 0, 0.6);
  }
`;

// A plain lock on the left edge, a little larger than the teal version's.
// "&&" beats MUI's own icon sizing.
export const LockIndicator = styled(LockIcon)`
  && {
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 2;
    width: 1.25rem;
    height: 1.25rem;
    transform: translate(-50%, -50%);
    color: var(--cy-yellow);
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.35rem 0.75rem 0 0.75rem;
`;

export const Breadcrumb = styled.div`
  overflow: hidden;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const BreadcrumbSep = styled.span`
  color: var(--cy-text-dim);
  opacity: 0.6;
`;

export const BreadcrumbPart = styled.span`
  color: var(--cy-text-dim);

  &[data-near='true'] {
    color: var(--cy-text-muted);
  }

  [data-theme='rcda'] & {
    color: rgba(203, 213, 225, 0.6);
  }
`;

export const ChildCount = styled.span`
  flex-shrink: 0;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text-dim);
`;

// Left side of the meta row (marker + breadcrumb).
export const MetaStart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
`;

// "◈ RCD": why this row is here at all.
export const RcdMarker = styled.span`
  flex-shrink: 0;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: ${RCD};
  text-shadow: 0 0 8px ${RCD};
`;

export const Strip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.35rem 0.5rem 0.5rem 0.9rem;
  user-select: none;
  color: var(--cy-text-muted);
`;

export const Name = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--cy-text);

  [data-expanded='true'] & {
    color: var(--cy-yellow);
  }

  [data-theme='rcda'] &,
  [data-theme='rcda'][data-expanded='true'] & {
    color: rgb(255, 255, 255);
    text-shadow: 0 0 6px ${RCD};
  }
`;

// Cracked passwords: a live readout, so cyan.
export const BypassBadge = styled.span`
  flex-shrink: 0;
  padding: 0.15rem 0.45rem;
  border: 1px solid var(--cy-cyan-dim);
  border-radius: var(--cy-radius);
  background-color: var(--cy-cyan-bg);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  font-variant-numeric: tabular-nums;
  color: var(--cy-cyan);
`;

export const Controls = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 0.5rem;
`;

// 44px tap targets; icons sized up from the 14px set inline in the JSX
// (width/height beat the inline font-size).
export const ControlButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  color: var(--cy-text-muted);
  cursor: pointer;

  & svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  [data-theme='rcda'] & {
    background-color: rgba(168, 85, 247, 0.08);
    border-color: ${RCD_DIM};
    color: rgb(196, 160, 255);
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 2px;
  }
`;

export const Preview = styled.div`
  padding: 0 0.9rem 0.7rem 0.9rem;
  font-size: 0.8rem;
  color: var(--cy-text-muted);
`;
