import styled from '@emotion/styled';

export const Blocks = styled.div`
  & > * + * {
    margin-top: 1.5rem;
  }
`;

export const BlockLabel = styled.h4`
  margin: 0 0 0.5rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

// The chosen entry for a rollable.
export const Choice = styled.div`
  padding: 0.65rem 0.85rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

export const ChoiceName = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--cy-text);
`;

export const ChoiceDescription = styled.div`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;

export const ChoiceRoller = styled.div`
  margin-top: 0.6rem;
`;

export const NothingChosen = styled.p`
  margin: 0;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--cy-text-muted);
`;

/* ---- Edit dialog --------------------------------------------------------- */

export const EditBlocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EditBlock = styled.div`
  & > * + * {
    margin-top: 0.4rem;
  }
`;
