// Compact in-fight gear list (Combat tab): one row per weapon or armor,
// with its roller. No edit dialogs; those live on the Punks sheet.

import styled from '@emotion/styled';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;
  padding: 0.55rem 0.75rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

export const Main = styled.div`
  flex: 1;
  min-width: 12rem;
`;

export const Name = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--cy-text);
`;

export const Source = styled.span`
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const Description = styled.div`
  margin-top: 0.2rem;
  font-size: 0.78rem;
  line-height: 1.45;
  color: var(--cy-text-muted);
`;

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
`;

export const Empty = styled.p`
  margin: 0;
  font-size: 0.82rem;
  font-style: italic;
  color: var(--cy-text-dim);
`;
