// Character name card: headline name (an input), "The Class", and the
// flavor buttons. One layout, always.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

export const Card = styled.section`
  position: relative;
  padding: 1.75rem 1.25rem 1.5rem;
  text-align: center;
  background:
    radial-gradient(ellipse 70% 90% at 50% 0%, var(--cy-purple-mist), transparent 70%),
    var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);

  ${mq.md} {
    padding: 2rem 2rem 1.75rem;
  }
`;

// HUD corner brackets. data-corner="tl|tr|bl|br".
export const Corner = styled.span`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  border: 0 solid var(--cy-yellow-dim);
  pointer-events: none;

  &[data-corner='tl'] { top: -1px; left: -1px; border-top-width: 2px; border-left-width: 2px; }
  &[data-corner='tr'] { top: -1px; right: -1px; border-top-width: 2px; border-right-width: 2px; }
  &[data-corner='bl'] { bottom: -1px; left: -1px; border-bottom-width: 2px; border-left-width: 2px; }
  &[data-corner='br'] { bottom: -1px; right: -1px; border-bottom-width: 2px; border-right-width: 2px; }
`;

const headline = `
  font-family: var(--cy-font);
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cy-yellow);
  text-shadow:
    0 0 6px var(--cy-pink-faint),
    0 0 24px var(--cy-pink-glow);

  ${mq.md} {
    font-size: 3rem;
  }
`;

// Reads as the headline; a hairline appears under it while editing.
export const NameInput = styled.input`
  ${headline}
  display: block;
  width: 100%;
  padding: 0.15rem 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid transparent;
  text-align: center;
  caret-color: var(--cy-yellow);
  outline: none;
  -webkit-user-select: text;
  user-select: text;
  transition: border-color 0.15s ease;

  &:focus {
    border-bottom-color: var(--cy-yellow-dim);
  }

  &::placeholder {
    color: var(--cy-text-dim);
    text-shadow: none;
  }
`;

// Class preview (no character yet): the class itself is the headline.
export const PreviewTitle = styled.h2`
  ${headline}
  margin: 0;
`;

export const ClassLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.6rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--cy-text-muted);

  &::before,
  &::after {
    content: '';
    width: 3rem;
    height: 1px;
    background-color: var(--cy-border);
  }
`;

export const ClassName = styled.span`
  color: var(--cy-text);
`;

export const FlavorRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.4rem;
`;
