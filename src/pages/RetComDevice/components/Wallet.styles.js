// Terminal Wallet. Same look as before (amber frame, slate header, green
// sell/transfer, red clear); only the inline styles moved here.

import styled from '@emotion/styled';

const AMBER = 'rgb(251, 191, 36)';
const GREEN = 'rgb(34, 197, 94)';
const RED = 'rgb(239, 68, 68)';
const SLATE_BORDER = 'rgb(71, 85, 105)';
const MUTED = 'rgb(148, 163, 184)';
const SMOKE = 'rgb(133, 175, 231)';

export const Panel = styled.div`
  overflow: hidden;
  background-color: rgba(30, 41, 59, 0.5);
  border: 2px solid ${AMBER};
  border-radius: 4px;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: rgb(51, 65, 85);
  border-bottom: 1px solid ${AMBER};
`;

export const CreditsBox = styled.div`
  flex-shrink: 0;
  padding: 0.35rem 0.75rem;
  text-align: center;
  background-color: rgba(251, 191, 36, 0.2);
  border: 1px solid ${AMBER};
  border-radius: 3px;
`;

export const CreditsLabel = styled.div`
  margin-bottom: 0.15rem;
  font-size: 0.7rem;
  color: ${MUTED};
`;

export const CreditsValue = styled.div`
  font-family: monospace;
  font-size: clamp(1rem, 4vw, 1.5rem);
  font-weight: 700;
  color: ${AMBER};
`;

export const Body = styled.div`
  padding: 1rem;
`;

export const Empty = styled.div`
  padding: 3rem 1rem;
  text-align: center;
  background-color: rgba(15, 23, 42, 0.6);
  border: 1px solid ${SLATE_BORDER};
  border-radius: 3px;
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $tight }) => ($tight ? '0.4rem' : '0.5rem')};
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: rgba(15, 23, 42, 0.6);
  border: 1px solid ${SLATE_BORDER};
  border-radius: 3px;
`;

export const Arrow = styled.span`
  flex-shrink: 0;
  font-size: 0.875rem;
  color: rgb(79, 209, 197);
`;

export const Grow = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Quantity = styled.span`
  margin-left: 0.4rem;
  font-weight: 400;
  color: ${MUTED};
`;

export const Die = styled.span`
  margin-left: 0.4rem;
  font-family: monospace;
  font-weight: 400;
  opacity: 0.8;
`;

export const Cost = styled.span`
  margin-left: 0.4rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: ${GREEN};
`;

const smallButton = `
  flex-shrink: 0;
  font-family: monospace;
  font-weight: 700;
  white-space: nowrap;
  border-radius: 3px;
  cursor: pointer;
`;

export const SellButton = styled.button`
  ${smallButton}
  padding: 0.2rem 0.5rem;
  font-size: 0.62rem;
  background-color: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: ${GREEN};
`;

export const CharRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  background-color: rgba(15, 23, 42, 0.4);
  border: 1px solid ${SLATE_BORDER};
  border-radius: 3px;

  &[data-active='true'] {
    background-color: rgba(34, 197, 94, 0.07);
    border-color: rgba(34, 197, 94, 0.3);
  }
`;

// Was the character's class color; class colors are gone, so smoke.
export const CharClass = styled.div`
  font-family: monospace;
  font-size: 0.6rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${SMOKE};
`;

export const ActiveMark = styled.span`
  margin-left: 0.4rem;
  color: ${GREEN};
`;

export const CharName = styled.div`
  overflow: hidden;
  font-size: 0.875rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(226, 232, 240);
`;

export const TransferSlot = styled.div`
  flex-shrink: 0;
  min-width: 150px;
`;

export const TransferButton = styled.button`
  ${smallButton}
  width: 100%;
  padding: 0.35rem 0.5rem;
  font-size: 0.65rem;
  background-color: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.35);
  color: ${GREEN};
`;

export const ClearRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ClearButton = styled.button`
  ${smallButton}
  padding: 0.35rem 0.5rem;
  font-size: 0.65rem;
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.35);
  color: ${RED};
`;
