import styled from '@emotion/styled';
import { mq } from '@styles/media';

export const Panel = styled.div`
  & > * + * {
    margin-top: 0.75rem;
  }
`;

export const Uses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Use = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0.6rem 0.55rem 0.85rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

export const UseText = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UseName = styled.div`
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--cy-text);
`;

export const UseDescription = styled.div`
  margin-top: 0.15rem;
  font-size: 0.78rem;
  line-height: 1.45;
  color: var(--cy-text-muted);
`;

// Cyan: Glitches are the system misbehaving (matches the bar and tips).
export const SpendButton = styled.button`
  flex-shrink: 0;
  min-height: 2.25rem;
  padding: 0 0.85rem;
  background-color: var(--cy-cyan-bg);
  border: 1px solid var(--cy-cyan-dim);
  border-radius: var(--cy-radius);
  font-family: var(--cy-font);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-cyan);
  cursor: pointer;

  ${mq.hover} {
    &:hover:not(:disabled) {
      border-color: var(--cy-cyan);
    }
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 2px;
  }
`;

export const Spent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.45rem 0.6rem 0.45rem 0.85rem;
  background-color: var(--cy-bg-black);
  border: 1px solid var(--cy-cyan-dim);
  border-radius: var(--cy-radius);
  font-size: 0.8rem;
  color: var(--cy-text-muted);

  strong {
    color: var(--cy-cyan);
  }
`;

export const Empty = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: var(--cy-text-dim);
`;
