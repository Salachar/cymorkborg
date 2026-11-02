// Shared card and edit-list styles for collection sections (Nano Powers,
// Infestations, Apps, Cybertech), so they all look alike.

import styled from '@emotion/styled';

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Card = styled.article`
  padding: 0.8rem 0.95rem;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

// Name plus any small tags beside it (e.g. "Loaded").
export const CardTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.3rem 0.6rem;
`;

export const CardName = styled.h4`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--cy-text);
`;

export const Description = styled.div`
  margin-top: 0.3rem;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;

export const Roller = styled.div`
  margin-top: 0.65rem;
`;

export const Muted = styled.p`
  margin: 0;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--cy-text-muted);
`;

export const Footnote = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--cy-text-dim);
`;

/* ---- Edit dialog --------------------------------------------------------- */

export const EditList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const EditItem = styled.div`
  padding: 0.6rem 0.75rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);

  & > * + * {
    margin-top: 0.5rem;
  }
`;

export const EditHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const EditName = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--cy-text);
`;
