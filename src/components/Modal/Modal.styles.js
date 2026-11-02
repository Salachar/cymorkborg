// Shared dialog frame. Replaces modal.css.

import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem calc(1rem + var(--cy-safe-bottom));
  background-color: var(--cy-backdrop);
`;

// max-height keeps the dialog inside the visible screen; long bodies
// scroll inside instead. Width and height can be set per use (props).
export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 26rem;
  max-height: 100%;
  overflow: hidden;
  background-color: var(--cy-bg-base);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  box-shadow: 0 0 40px var(--cy-purple-mist);
  font-family: var(--cy-font);
  color: var(--cy-text);
`;

export const DialogHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.6rem 0.75rem 0.6rem 1rem;
  background-color: var(--cy-bg-elevated);
  border-bottom: 1px solid var(--cy-hairline);
`;

export const HeaderText = styled.div`
  min-width: 0;
`;

export const DialogTitle = styled.h2`
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-yellow);
`;

export const DialogSubtitle = styled.div`
  margin-top: 0.2rem;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  color: var(--cy-text-muted);
`;

export const DialogBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 0;
  padding: 1rem;
  overflow-y: auto;
`;

// pre-line keeps the \n\n breaks some callers put in messages.
export const DialogMessage = styled.div`
  font-size: 0.85rem;
  line-height: 1.55;
  white-space: pre-line;
  color: var(--cy-text);
`;
