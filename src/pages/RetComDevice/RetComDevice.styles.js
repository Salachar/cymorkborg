// RetCom page shell. Uses the shared page background but not Page's
// width cap: the tree gets the full content width.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

// Side gutters double as a safe strip for thumb-scrolling on tablets
// without tapping (and expanding) a row. They also leave room for the
// lock badge that sits half outside each row's left edge.
export const Tree = styled.div`
  padding: 1rem 1rem calc(2rem + var(--cy-safe-bottom));

  ${mq.md} {
    padding: 1.25rem 2rem calc(3rem + var(--cy-safe-bottom));
  }
`;
