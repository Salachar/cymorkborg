import styled from '@emotion/styled';
import { mq } from '@styles/media';

// Shared bar for current / max resources (Health, Glitches): − on the
// left, current / max in the middle, + on the right. The fill and the
// current value share one color, set by:
//   data-level="high|mid|low"   health thirds (green / yellow / red)
//   data-tone="glitch"          cyan
export const Bar = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  height: 3.5rem;
  overflow: hidden;
  background-color: var(--cy-bg-black);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);

  --level: var(--cy-text-dim);
  &[data-level='high'] { --level: var(--cy-green); }
  &[data-level='mid'] { --level: var(--cy-yellow); }
  &[data-level='low'] { --level: var(--cy-red); }
  &[data-tone='glitch'] { --level: var(--cy-cyan); }
`;

export const Fill = styled.div`
  position: absolute;
  inset: 0 auto 0 0;
  border-right: 2px solid var(--level);
  transition: width 0.3s ease;
  pointer-events: none;

  /* Tint of the level color behind the numbers. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--level);
    opacity: 0.18;
  }

  &[data-empty='true'] {
    border-right: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const BarButton = styled.button`
  position: relative;
  z-index: 1;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 4rem;
  background: transparent;
  border: 0;
  color: var(--cy-text-muted);
  cursor: pointer;
  transition: color 0.15s ease, background-color 0.15s ease;

  ${mq.hover} {
    &:hover:not(:disabled) {
      color: var(--cy-text);
    }
  }

  &:active:not(:disabled) {
    background-color: var(--cy-bg-panel);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: -2px;
  }
`;

export const Readout = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  align-items: baseline;
  justify-content: center;
  gap: 0.4rem;
  align-self: center;
  font-variant-numeric: tabular-nums;
`;

export const Current = styled.span`
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 1;
  color: var(--level);
`;

export const Slash = styled.span`
  font-size: 1.25rem;
  color: var(--cy-text-dim);
`;

export const Max = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--cy-text-muted);
`;
