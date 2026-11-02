import styled from '@emotion/styled';
import { Button } from '@components/Layout/Layout';

export const CartStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Panel = styled.div`
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.65rem 0.9rem;
  background-color: var(--cy-bg-elevated);
  border-bottom: 1px solid var(--cy-hairline);
`;

export const PanelTitle = styled.h3`
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-yellow);
`;

export const Count = styled.span`
  font-size: 0.7rem;
  color: var(--cy-text-dim);
`;

export const PanelBody = styled.div`
  padding: 0.85rem 0.9rem 0.9rem;
`;

export const Empty = styled.p`
  margin: 0;
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--cy-text-dim);
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.85rem;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.45rem 0.25rem 0.45rem 0.6rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

export const CartItemMain = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CartItemName = styled.div`
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--cy-text);
`;

export const CartItemMeta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.2rem;
  font-size: 0.75rem;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text-muted);
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--cy-border);
`;

export const TotalLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-muted);
`;

export const TotalValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--cy-yellow);
`;

export const Shortfall = styled.div`
  margin-top: 0.5rem;
  padding: 0.4rem 0.6rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  font-size: 0.75rem;
  color: var(--cy-text-muted);

  strong {
    color: var(--cy-text);
  }
`;

export const CartActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.9rem;
`;

export const FullButton = styled(Button)`
  width: 100%;
`;

export const Credits = styled.div`
  padding: 0.65rem 0.9rem;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
`;

export const CreditsLabel = styled.div`
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const CreditsValue = styled.div`
  margin-top: 0.2rem;
  font-size: 1.25rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text);
`;
