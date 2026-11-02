// SegmentedDice: | ROLL → 4 + 3 + 6 + 2 = 15 |  [HIT]
//
// The operators sit on "seams": zero-width elements between segments with
// the glyph centered on the boundary. No offset math, and the track is
// isolated so nothing inside it can stack over the rest of the page.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

const SEGMENT_HEIGHT = '3rem';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Label = styled.div`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-muted);
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
`;

export const Track = styled.div`
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: stretch;
  max-width: fit-content;
  background-color: var(--cy-bg-black);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
`;

const segment = `
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: ${SEGMENT_HEIGHT};
  border: 0;
  border-right: 1px solid var(--cy-hairline);
  font-family: var(--cy-font);
`;

// The action: yellow label, like a primary button.
export const RollButton = styled.button`
  ${segment}
  width: 4.5rem;
  background-color: var(--cy-bg-elevated);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-yellow);
  cursor: pointer;
  transition: background-color 0.15s ease;

  ${mq.hover} {
    &:hover:not(:disabled) {
      background-color: var(--cy-yellow-bg);
    }
  }

  &:disabled {
    cursor: default;
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: -2px;
  }
`;

export const DieButton = styled.button`
  ${segment}
  width: 3rem;
  background-color: transparent;
  font-size: 1.25rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text);
  cursor: pointer;
  transition: background-color 0.15s ease;

  ${mq.hover} {
    &:hover:not(:disabled) {
      background-color: var(--cy-bg-panel);
    }
  }

  &:disabled {
    cursor: default;
  }

  &[data-dropped='true'] {
    color: var(--cy-text-dim);
    text-decoration: line-through;
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: -2px;
  }
`;

// "d6" before the first roll.
export const DiePlaceholder = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--cy-text-dim);
`;

// Modifier and multiplier.
export const ValueBox = styled.div`
  ${segment}
  min-width: 3rem;
  padding: 0 0.75rem;
  font-size: 0.95rem;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text-muted);

  &[data-rolled='false'] {
    color: var(--cy-text-dim);
  }
`;

// The result: yellow voice.
export const Total = styled.div`
  ${segment}
  width: 5rem;
  border-right: 0;
  background-color: var(--cy-bg-elevated);
  font-size: 1.5rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--cy-yellow);
`;

export const Seam = styled.span`
  position: relative;
  z-index: 1;
  flex: none;
  width: 0;
`;

export const SeamGlyph = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  padding: 0 0.2rem;
  background-color: var(--cy-bg-black);
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1;
  color: var(--cy-text-dim);
  pointer-events: none;

  &[data-big='true'] {
    font-size: 1.1rem;
  }
`;

// Hit/crit read as success (yellow); miss/fumble as failure (quiet).
// The label says which; no per-outcome colors.
export const Outcome = styled.div`
  display: flex;
  align-items: center;
  height: ${SEGMENT_HEIGHT};
  padding: 0 0.8rem;
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-muted);

  &[data-result='success'] {
    background-color: var(--cy-yellow-bg);
    border-color: var(--cy-yellow-border);
    color: var(--cy-yellow);
  }
`;

export const Info = styled.div`
  font-size: 0.7rem;
  color: var(--cy-text-dim);
`;
