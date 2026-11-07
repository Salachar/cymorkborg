import styled from '@emotion/styled';

// Jump target (id) for the ChromeBar's jump row.
export const Section = styled.section`
  scroll-margin-top: 1rem;
`;

// Same look as the Market's section headers, so sheet and shop match.
export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 2.25rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.4rem;
  /* border-bottom: 1px solid var(--cy-hairline); */
`;

export const Title = styled.h3`
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cy-yellow);
`;

export const HeadActions = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.5rem;
`;
