// Artwork-only styled components: thumbnail grid and fullscreen viewer.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

/* ---- Grid ---------------------------------------------------------------- */

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  ${mq.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mq.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Real buttons, so they're keyboard-reachable. Hover is a border change
// only, and only on pointer devices.
export const Thumb = styled.button`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1;
  padding: 0;
  overflow: hidden;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
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

export const ThumbImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Missing = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

/* ---- Viewer -------------------------------------------------------------- */

// Clicking anywhere on the scrim closes. Side padding leaves room for
// the arrows on tablet and up; on phones they overlap the image edges.
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem calc(1rem + var(--cy-safe-bottom));
  background-color: var(--cy-scrim);
  outline: none;

  ${mq.md} {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }
`;

export const ViewerImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: calc(100dvh - 2rem);
  object-fit: contain;
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  box-shadow: 0 0 48px var(--cy-purple-mist);
`;

export const ViewerMissing = styled.div`
  padding: 3rem;
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  background-color: var(--cy-bg-panel-solid);
  font-size: 0.85rem;
  color: var(--cy-text-muted);
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  padding: 0;
  background-color: var(--cy-bg-elevated);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  color: var(--cy-text);
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease;

  &[data-side='prev'] {
    left: 1rem;
  }
  &[data-side='next'] {
    right: 1rem;
  }

  ${mq.hover} {
    &:hover {
      color: var(--cy-yellow);
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
