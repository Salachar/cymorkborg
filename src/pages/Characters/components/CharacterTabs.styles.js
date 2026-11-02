import styled from '@emotion/styled';
import { mq } from '@styles/media';

export const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

// Tab plus (when active) its delete button, side by side.
export const TabSlot = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.35rem;
`;

export const Tab = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  min-height: 2.75rem;
  padding: 0.45rem 0.9rem 0.4rem;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-bottom: 2px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  font-family: var(--cy-font);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s ease;

  &[aria-current='true'] {
    border-bottom-color: var(--cy-yellow);
  }

  ${mq.hover} {
    &[aria-current='false']:hover {
      border-bottom-color: var(--cy-yellow-dim);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 2px;
  }
`;

export const TabClass = styled.span`
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-dim);

  [aria-current='true'] > & {
    color: var(--cy-yellow);
  }
`;

export const TabName = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--cy-text-muted);

  [aria-current='true'] > & {
    color: var(--cy-text);
  }
`;
