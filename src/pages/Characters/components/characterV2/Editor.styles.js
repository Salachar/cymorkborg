// Shared layout for character edit dialogs (inside EditDialog).

import styled from '@emotion/styled';

export const Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
`;

export const FieldLabel = styled.div`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-muted);
`;

export const Note = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--cy-text-dim);
`;

export const Divider = styled.div`
  height: 1px;
  background-color: var(--cy-hairline);
`;
