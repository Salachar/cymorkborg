import styled from '@emotion/styled';
import { mq } from '@styles/media';

// Even spacing between sheet sections (replaces the old .divider rules).
export const Sheet = styled.div`
  position: relative;

  & > * + * {
    margin-top: 2rem;
  }
`;

// Scroll target for the jump bar; clears the sticky bar when jumped to.
export const Anchor = styled.div`
  scroll-margin-top: 1rem;
`;

// Class description on the preview (no character yet).
export const Description = styled.div`
  padding: 1.1rem 1.25rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

export const TwoUp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  ${mq.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
