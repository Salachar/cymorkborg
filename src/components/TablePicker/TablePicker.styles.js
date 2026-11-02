import styled from '@emotion/styled';
import { mq } from '@styles/media';

// Fills the dialog body: actions fixed on top, list scrolls below.
export const Layout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 0;
`;

export const Actions = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 0.5rem;
`;

export const ListArea = styled.div`
  flex: 1;
  min-height: 0;
  margin: 0 -1rem -1rem;
  padding: 0 1rem 1rem;
  overflow-y: auto;
`;

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

// Selected: yellow edge and tint. Rolling highlight: lighter border only.
export const Option = styled.button`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  width: 100%;
  padding: 0.6rem 0.75rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-left: 2px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  font-family: var(--cy-font);
  text-align: left;
  color: var(--cy-text);
  cursor: pointer;
  transition: border-color 0.1s ease, background-color 0.1s ease;

  &[data-highlight='true'] {
    border-color: var(--cy-yellow-dim);
    background-color: var(--cy-bg-panel-solid);
  }

  &[aria-pressed='true'] {
    background-color: var(--cy-yellow-bg);
    border-color: var(--cy-yellow-border);
    border-left-color: var(--cy-yellow);
  }

  ${mq.hover} {
    &:hover:not(:disabled) {
      border-color: var(--cy-yellow-dim);
    }
  }

  &:disabled {
    cursor: default;
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 2px;
  }
`;

// Die face for this entry, so a roll maps visibly to the list.
export const DieFace = styled.span`
  flex-shrink: 0;
  min-width: 2ch;
  text-align: right;
  font-size: 0.8rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--cy-yellow);
`;

export const Text = styled.span`
  min-width: 0;
`;

export const Label = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.35;
`;

export const Description = styled.span`
  display: block;
  margin-top: 0.2rem;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;
