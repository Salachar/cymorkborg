// The storefront sign at the top of the Market page: what a character
// sees when the shop loads on their RCD. Same lit-sign language as the
// Home page's mantra panel. No animation.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

export const Banner = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 5.5rem;
  margin-bottom: 1.25rem;
  padding: 0.9rem 1.25rem 1.15rem;
  overflow: hidden;
  background:
    radial-gradient(ellipse 70% 120% at 0% 0%, var(--cy-purple-mist), transparent 70%),
    var(--cy-bg-elevated);
  border: 1px solid var(--cy-pink-border);
  border-radius: var(--cy-radius);
  box-shadow:
    0 0 24px var(--cy-pink-faint),
    inset 0 0 28px var(--cy-pink-bg);

  /* Striped awning edge along the bottom, like a shopfront. */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5px;
    background: repeating-linear-gradient(
      -45deg,
      var(--cy-pink-border) 0 6px,
      transparent 6px 12px
    );
    pointer-events: none;
  }

  ${mq.md} {
    min-height: 6.25rem;
    padding: 1rem 1.75rem 1.25rem;
  }
`;

export const Brand = styled.div`
  min-width: 0;
`;

// Small system line above the name: who runs the store. A readout, so cyan.
export const Kicker = styled.div`
  margin-bottom: 0.3rem;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--cy-cyan);
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cy-yellow);
  text-shadow:
    0 0 6px var(--cy-pink-faint),
    0 0 20px var(--cy-pink-glow);

  ${mq.md} {
    font-size: 2rem;
  }
`;

export const Tagline = styled.div`
  margin-top: 0.35rem;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  color: var(--cy-text-muted);
`;

// Corporate fine print, right side. Tablet and up only.
export const FinePrint = styled.div`
  display: none;
  flex-shrink: 0;
  max-width: 15rem;
  text-align: right;
  font-size: 0.58rem;
  line-height: 1.6;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cy-text-dim);

  ${mq.md} {
    display: block;
  }
`;
