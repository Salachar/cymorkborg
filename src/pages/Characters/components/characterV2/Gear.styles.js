import styled from '@emotion/styled';

// "Also carried" label between class gear and Inventory items.
export const SubLabel = styled.div`
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

// Skinhard: natural armor, a row in the Armor section.
export const Natural = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  padding: 0.6rem 0.8rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

export const NaturalText = styled.div`
  font-size: 0.85rem;
  color: var(--cy-text-muted);

  strong {
    color: var(--cy-text);
  }
`;
