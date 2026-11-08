// CommandRow: one node in the RetCom tree. In-universe teal styling,
// unchanged from commandRow.css.

import styled from '@emotion/styled';
import LockIcon from '@mui/icons-material/Lock';

const TEAL = 'rgb(79, 209, 197)';
const TEAL_BORDER = 'rgba(79, 209, 197, 0.35)';
const TEAL_FILL = 'rgba(79, 209, 197, 0.12)';

export const Root = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: rgba(29, 35, 50, 0.4);
  border: 1px solid ${TEAL_BORDER};
`;

// Sits on the row's left edge. `&&` beats MUI's own icon sizing (the CSS
// version used !important).
export const LockIndicator = styled(LockIcon)`
  && {
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    transform: translateY(-50%) translateX(-50%);
    color: rgb(251, 191, 36);
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2rem 0.5rem 0 0.5rem;
`;

export const Breadcrumb = styled.div`
  overflow: hidden;
  font-family: monospace;
  font-size: 0.6rem;
  letter-spacing: 0.04em;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: 0.5;
`;

export const BreadcrumbSep = styled.span`
  color: rgba(79, 209, 197, 0.25);
`;

// The last two parents read in full and bright; older ones as initials.
export const BreadcrumbPart = styled.span`
  color: rgba(79, 209, 197, 0.35);

  &[data-near='true'] {
    color: ${TEAL};
  }
`;

export const ChildCount = styled.span`
  flex-shrink: 0;
  font-family: monospace;
  font-size: 0.65rem;
  color: ${TEAL};
`;

// Left side of the meta row (marker + breadcrumb).
export const MetaStart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
`;

// Themes are styled in the app version only; here the marker is plain.
export const RcdMarker = styled.span`
  flex-shrink: 0;
  font-family: monospace;
  font-size: 0.6rem;
  font-weight: bold;
  letter-spacing: 0.12em;
  color: rgb(168, 85, 247);
`;

export const Strip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem 0.75rem 1rem;
  user-select: none;
`;

export const Name = styled.span`
  flex: 1;
  padding-left: 0.5rem;
  font-family: monospace;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: ${TEAL};
`;

export const BypassBadge = styled.span`
  flex-shrink: 0;
  padding: 0.2rem 0.5rem;
  border: 1px solid ${TEAL_BORDER};
  border-radius: 2px;
  background-color: ${TEAL_FILL};
  font-size: 0.62rem;
  font-weight: bold;
  letter-spacing: 0.08em;
  color: ${TEAL};
`;

export const Controls = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 0.3rem;
`;

export const ControlButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: 1px solid ${TEAL_BORDER};
  border-radius: 2px;
  background-color: ${TEAL_FILL};
  color: ${TEAL};
  cursor: pointer;
`;

export const Preview = styled.div`
  padding: 0 1rem 0.8rem 1rem;
`;
