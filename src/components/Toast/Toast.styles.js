// App-level toasts. Tone by type, from the palette's roles:
//   share / unlock  cyan (system)       note  pink (incoming, like shared notes)
//   summary         yellow (the voice)  info  neutral

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { mq } from '@styles/media';

const countdown = keyframes`
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
`;

export const Stack = styled.div`
  position: fixed;
  top: calc(0.75rem + env(safe-area-inset-top, 0px));
  left: 50%;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: min(28rem, calc(100vw - 2rem));
  transform: translateX(-50%);
  pointer-events: none;
`;

export const Card = styled.div`
  --tone: var(--cy-text-muted);

  &[data-type='share'],
  &[data-type='unlock'] { --tone: var(--cy-cyan); }
  &[data-type='note'] { --tone: var(--cy-pink); }
  &[data-type='summary'] { --tone: var(--cy-yellow); }

  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  overflow: hidden;
  background-color: var(--cy-bg-elevated);
  border: 1px solid var(--cy-border);
  border-left: 3px solid var(--tone);
  border-radius: var(--cy-radius);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
  font-family: var(--cy-font);
  pointer-events: auto;
`;

// The body is the tap target: follows the link, or just dismisses.
export const Body = styled.button`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
  padding: 0.75rem 0.5rem 0.85rem 0.9rem;
  background: transparent;
  border: 0;
  font-family: var(--cy-font);
  text-align: left;
  cursor: pointer;

  ${mq.hover} {
    &:hover {
      background-color: var(--cy-bg-panel);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: -2px;
  }
`;

export const Label = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--tone);
`;

export const Message = styled.span`
  font-size: 0.88rem;
  line-height: 1.4;
  overflow-wrap: anywhere;
  color: var(--cy-text);
`;

export const Hint = styled.span`
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  color: var(--cy-text-dim);
`;

export const Dismiss = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: center;
  width: 2.5rem;
  padding-top: 0.7rem;
  background: transparent;
  border: 0;
  border-left: 1px solid var(--cy-hairline);
  color: var(--cy-text-dim);
  cursor: pointer;

  ${mq.hover} {
    &:hover {
      color: var(--cy-text);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: -2px;
  }
`;

// Time left before it dismisses itself. Hidden with reduced motion.
export const Countdown = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--tone);
  opacity: 0.7;
  transform-origin: left center;
  animation: ${countdown} linear forwards;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;
