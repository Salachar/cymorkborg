// Abilities: one card per stat in a single column. The value is static and
// the roller is for play. Editing is the section's "Edit Abilities" dialog.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Card = styled.article`
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0.9rem;
  background-color: var(--cy-bg-elevated);
  border-bottom: 1px solid var(--cy-hairline);
`;

export const HeaderText = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.2rem 1rem;
  min-width: 0;
`;

export const StatName = styled.div`
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cy-text);
`;

export const Abbr = styled.span`
  margin-left: 0.4rem;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--cy-text-dim);
`;

export const Description = styled.div`
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--cy-text-muted);
`;

export const ClassBonus = styled.div`
  font-size: 0.7rem;
  color: var(--cy-text-dim);
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.25rem;
  padding: 0.85rem 0.9rem;
`;

// The ability modifier: the number you read during play.
export const Value = styled.div`
  flex-shrink: 0;
  min-width: 4.5rem;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--cy-text);

  ${mq.md} {
    font-size: 2.5rem;
  }
`;

export const Roller = styled.div`
  flex: 1;
  min-width: 0;
`;

/* ---- Edit dialog --------------------------------------------------------- */

export const DialogLabel = styled.div`
  margin-bottom: 0.4rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-muted);
`;

export const EditRows = styled.div`
  border-top: 1px solid var(--cy-hairline);
`;

// One stat per row: name | stepper | 3d6 roller.
export const EditRow = styled.div`
  display: grid;
  grid-template-columns: 8.5rem auto 1fr;
  align-items: center;
  gap: 1rem;
  padding: 0.65rem 0;
  border-bottom: 1px solid var(--cy-hairline);
`;

export const EditName = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cy-text);
`;

export const EditBonus = styled.div`
  margin-top: 0.15rem;
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-transform: none;
  color: var(--cy-text-dim);
`;

export const Note = styled.div`
  font-size: 0.75rem;
  color: var(--cy-text-dim);
`;
