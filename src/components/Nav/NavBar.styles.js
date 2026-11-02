// Styled components for the main nav. First piece of the Emotion
// migration. Uses the --cy-* tokens from index.css only; nothing here
// should reference the legacy --color-* variables or Tailwind classes.

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { mq } from '@styles/media';

// Faint purple mist over the elevated surface: smog lit from above.
// The bottom edge is a pink glow line instead of the old cyan rule.
export const Nav = styled.nav`
  position: relative;
  flex-shrink: 0;
  background:
    radial-gradient(ellipse 80% 140% at 50% 0%, var(--cy-purple-mist), transparent 70%),
    var(--cy-bg-elevated);
  border-bottom: 1px solid var(--cy-hairline);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cy-pink-border), transparent);
    pointer-events: none;
  }
`;

// Scrolls sideways on narrow screens. Scrollbar hidden: on touch it
// never shows anyway, and on desktop all tabs fit within the max width.
export const NavRow = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// NavLink adds the "active" class itself, so one &.active block
// replaces the old per-tab COLOR_MAP. Every tab gets the same treatment.
//
// The skewed plate is a ::before behind the text. isolation: isolate
// keeps its z-index: -1 inside the link instead of dropping behind the nav.
export const NavItem = styled(NavLink)`
  position: relative;
  isolation: isolate;
  flex-shrink: 0;
  padding: 0.75rem 1.5rem;
  margin-right: 0.5rem;
  font-family: var(--cy-font);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  color: var(--cy-text-muted);
  transition: color 0.2s ease, text-shadow 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    transform: skewX(-12deg);
    border: 1px solid transparent;
    border-radius: var(--cy-radius);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  ${mq.hover} {
    &:hover {
      color: var(--cy-text);
    }
  }

  &.active {
    color: var(--cy-yellow);
    text-shadow: 0 0 10px var(--cy-pink-glow);
  }

  &.active::before {
    opacity: 1;
    background-color: var(--cy-pink-bg);
    border-color: var(--cy-pink-border);
    box-shadow:
      0 0 16px var(--cy-pink-faint),
      inset 0 0 12px var(--cy-pink-bg);
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &::before {
      transition: none;
    }
  }
`;

// Short vertical hairline between the reading pages and the play tools.
export const NavDivider = styled.span`
  flex-shrink: 0;
  width: 1px;
  height: 1.5rem;
  margin: 0 1.25rem 0 0.75rem;
  background-color: var(--cy-border);
`;
