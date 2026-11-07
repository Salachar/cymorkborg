// NetLog-only styled components.

import styled from '@emotion/styled';
import { IconButton, TextArea } from '@components/Layout/Layout';

// The composer row, rendered inside the ChromeBar (ChromeToolbar).
export const Composer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
`;

// Three rows minimum (back to three after sending); grows with its text up
// to most of the screen so tall things like ASCII art fit, then scrolls.
// Height is set from JS, see NetLog.jsx.
export const ComposerField = styled(TextArea)`
  flex: 1;
  min-height: 5.25rem;
  max-height: 60vh;
  resize: none;
  overflow-y: auto;
`;

// Add & share above Add, stacked to the right of the field.
export const ComposerButtons = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 0.35rem;
`;

export const SendButton = styled(IconButton)`
  width: 2.5rem;
  height: 2.45rem;
  min-height: 2.45rem;
`;

// Cyan, the color shares use everywhere else.
export const ShareSendButton = styled(SendButton)`
  background-color: var(--cy-cyan-bg);
  border-color: var(--cy-cyan-dim);
  color: var(--cy-cyan);

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:disabled) {
      border-color: var(--cy-cyan);
      color: var(--cy-cyan);
    }
  }
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Empty = styled.p`
  margin: 0;
  padding: 1rem 0;
  font-size: 0.9rem;
  color: var(--cy-text-dim);
`;

// Rare housekeeping, at the end of the feed rather than in the chrome.
export const ClearRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--cy-hairline);
`;
