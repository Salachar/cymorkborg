// RetCom device header: device label, GM status
// readout, and controls, plus the news ticker below.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

// Rendered inside the page's ChromeBar (as its extension), so it stays in
// view without being sticky. The bar draws the dividers around it.
export const Bar = styled.header`
  background-color: var(--cy-bg-elevated);
`;

// Same side padding as the other ChromeBar rows so edges line up.
export const BarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 1rem;
`;

/* ---- Device label -------------------------------------------------------- */

export const Logo = styled.div`
  flex-shrink: 0;
`;

export const LogoName = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.1em;
  color: var(--cy-yellow);
`;

export const LogoSub = styled.div`
  margin-top: 0.2rem;
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cy-text-muted);
`;

/* ---- GM status readout --------------------------------------------------- */

// Always rendered (even empty) so the controls stay pushed right.
export const Status = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 1rem;
  min-width: 0;
  margin-left: 0.5rem;
  overflow: hidden;
`;

// A live system readout: cyan's job.
export const StatusTime = styled.div`
  flex-shrink: 0;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: var(--cy-cyan);
`;

export const StatusLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
`;

export const StatusLine = styled.div`
  font-size: 0.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--cy-text);
`;

export const StatusLabel = styled.span`
  font-weight: 700;
  color: var(--cy-text-muted);
`;

/* ---- Controls ------------------------------------------------------------ */

export const Controls = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.6rem;
`;

export const ControlDivider = styled.div`
  width: 1px;
  height: 1.75rem;
  background-color: var(--cy-hairline);
`;

// Button text shows from tablet width up; phones get the icon only.
export const WideOnly = styled.span`
  display: none;

  ${mq.md} {
    display: inline;
  }
`;

/* ---- News ticker --------------------------------------------------------- */

export const Ticker = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  padding: 0.3rem 1rem;
  border-top: 1px solid var(--cy-hairline);
  overflow: hidden;
`;

// Tag and text fade together between items. data-visible drives it;
// reduced-motion users get an instant swap (handled in NewsTicker too).
const fade = `
  transition: opacity 0.6s ease;

  &[data-visible='false'] {
    opacity: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

// Every category shares one look; the [TAG] text tells them apart.
export const TickerTag = styled.span`
  flex-shrink: 0;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--cy-cyan);
  ${fade}
`;

export const TickerText = styled.span`
  min-width: 0;
  font-size: 0.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--cy-text-muted);
  ${fade}
`;
