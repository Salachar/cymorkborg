import styled from '@emotion/styled';

// Play hint when down.
export const Down = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.8rem;
  color: var(--cy-text-muted);

  strong {
    color: var(--cy-red);
  }
`;

// Skinhard: natural armor, with its roller.
export const Armor = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-top: 0.75rem;
  padding: 0.5rem 0.75rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

export const ArmorText = styled.span`
  font-size: 0.82rem;
  color: var(--cy-text-muted);

  strong {
    color: var(--cy-text);
  }
`;
