import styled from '@emotion/styled';
import { IconButton } from '@components/Layout/Layout';

export const Composer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const SendButton = styled(IconButton)`
  width: 2.75rem;
  height: 2.75rem;
  min-height: 2.75rem;
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Empty = styled.p`
  margin: 0;
  padding: 2rem 0;
  font-size: 0.9rem;
  color: var(--cy-text-dim);
`;
