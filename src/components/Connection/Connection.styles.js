// Connection, history and data dialogs. The bar they open from lives in
// components/Chrome.

import styled from '@emotion/styled';
import { Button } from '@components/Layout/Layout';
import { statusColors, MessageLabel, ClientDot } from '@components/Chrome/ChromeBar.styles';

export { ClientDot };

/* ---- Connection dialog --------------------------------------------------- */

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border: 0;
  color: var(--cy-text-dim);
  ${statusColors}
`;

export const FieldRow = styled.label`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const FieldLabel = styled.span`
  flex-shrink: 0;
  width: 4.5rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-muted);
`;

export const QuickFillRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`;

export const QuickFillList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.3rem;
`;

// Address shortcuts: quiet, lowercase, left-aligned.
export const QuickFillButton = styled(Button)`
  justify-content: flex-start;
  min-height: 2.1rem;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-transform: none;
`;

export const Hint = styled.div`
  padding: 0.55rem 0.7rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--cy-text-muted);
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const ClientsBlock = styled.div`
  padding-top: 0.75rem;
  border-top: 1px solid var(--cy-hairline);
`;

export const BlockLabel = styled.div`
  margin-bottom: 0.4rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-muted);
`;

export const ClientRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.2rem 0;
  font-size: 0.8rem;
  color: var(--cy-text);
`;

export const Muted = styled.div`
  font-size: 0.78rem;
  line-height: 1.5;
  color: var(--cy-text-dim);
`;

/* ---- Message history dialog ---------------------------------------------- */

export const HistoryRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  padding: 0.45rem 0;
  border-bottom: 1px solid var(--cy-hairline);

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const HistoryLabel = styled(MessageLabel)`
  min-width: 4rem;
`;

export const HistoryMessage = styled.span`
  flex: 1;
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--cy-text);
`;

export const HistoryTime = styled.span`
  flex-shrink: 0;
  font-size: 0.62rem;
  color: var(--cy-text-dim);
`;

/* ---- Data dialog --------------------------------------------------------- */

export const ActionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FullButton = styled(Button)`
  width: 100%;
`;

// Result of an import. data-tone="success" | "error".
export const StatusPanel = styled.div`
  padding: 0.75rem 0.9rem;
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--cy-text-muted);

  & > strong {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.85rem;
  }

  &[data-tone='success'] {
    background-color: var(--cy-yellow-bg);
    border-color: var(--cy-yellow-border);
    & > strong { color: var(--cy-yellow); }
  }

  &[data-tone='error'] {
    background-color: var(--cy-red-bg);
    border-color: var(--cy-red-border);
    & > strong { color: var(--cy-red); }
  }
`;

export const RecipientList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

// Pick-one list; the chosen device is marked with aria-pressed.
export const RecipientButton = styled(Button)`
  justify-content: flex-start;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-transform: none;

  &[aria-pressed='true'] {
    background-color: var(--cy-yellow-bg);
    border-color: var(--cy-yellow-border);
    color: var(--cy-yellow);
  }
`;
