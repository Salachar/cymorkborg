import styled from '@emotion/styled';

// Fills #root: the nav on top, the page area below.
export const AppShell = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

// Space under the nav. Doesn't scroll itself: each page renders its
// ChromeBar, then its Page (the scroll container).
export const PageArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
`;
