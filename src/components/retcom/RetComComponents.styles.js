// Styles for RetComComponents. RetCom keeps its own colors (COLOR_MAP),
// not the app palette. Sizes and spacing match the old Tailwind classes
// exactly (text-xs/sm/lg including their line heights, p-2/md:p-3, ...).

import styled from '@emotion/styled';
import { mq } from '@styles/media';

export const COLOR_MAP = {
  cyan: 'rgb(0, 255, 255)',
  smoke: 'rgb(133, 175, 231)',
  neon: 'rgb(0, 170, 40)',
  yellow: 'rgb(250, 204, 21)',
  pink: 'rgb(255, 0, 128)',
  red: 'rgb(239, 68, 68)',
  teal: 'rgb(79, 209, 197)',
};

const colorOf = (name) => COLOR_MAP[name] || undefined;

// Tailwind text sizes, with their line heights.
export const TEXT = {
  xs: { fontSize: '0.75rem', lineHeight: '1rem' },
  sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
  lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },
};

// Line computes its styles in JS (it has many boolean props, some of which
// are also HTML attribute names), then passes them here as one object.
export const LineEl = styled.div(({ $css }) => $css);

export const SpacerEl = styled.div`
  height: 1rem;
`;

export const NodePreviewEl = styled.div`
  font-family: monospace;
  font-size: 0.72rem;
  color: rgb(148, 163, 184);
`;

export const SectionEl = styled.div`
  margin-top: 0.5rem;

  &[data-center='true'] {
    text-align: center;
  }
`;

export const SectionTitle = styled.div`
  font-weight: 700;
  color: ${({ $color }) => colorOf($color)};
`;

export const BoxEl = styled.div`
  padding: 1rem;
  border: 2px solid ${({ $color }) => colorOf($color)};
`;

export const InsetOuter = styled.div`
  margin: 0.75rem 0;
  background-color: rgba(15, 23, 42, 0.6);
  border: 1px solid rgb(71, 85, 105);
  border-radius: 3px;
`;

export const InsetInner = styled.div`
  padding: 0.5rem;

  ${mq.md} {
    padding: 0.75rem;
  }
`;

export const InsetTitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: ${TEXT.sm.fontSize};
  line-height: ${TEXT.sm.lineHeight};
  font-weight: 700;
  color: ${({ $color }) => colorOf($color)};
`;

export const InsetBody = styled.div`
  font-size: ${TEXT.sm.fontSize};
  line-height: ${TEXT.sm.lineHeight};
`;

export const DividerEl = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-top: 1px solid ${({ $color }) => colorOf($color)};
`;

export const ListItemEl = styled.div`
  color: ${COLOR_MAP.neon};

  &[data-indent='true'] {
    margin-left: 1rem;
  }
`;

export const WarningEl = styled.div`
  margin-top: 0.5rem;
  font-weight: 700;
  color: ${COLOR_MAP.red};
`;

export const HeaderEl = styled.div`
  font-weight: 700;
  color: ${({ $color }) => colorOf($color)};
`;

// Responsive label/value text used by DataTable, ProgressBar, KeyValue.
const smallText = `
  font-size: ${TEXT.xs.fontSize};
  line-height: ${TEXT.xs.lineHeight};

  ${mq.md} {
    font-size: ${TEXT.sm.fontSize};
    line-height: ${TEXT.sm.lineHeight};
  }
`;

export const DataTableEl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DataRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.125rem;
`;

export const DataLabel = styled.span`
  ${smallText}
  flex-shrink: 0;
  min-width: 80px;
  color: ${COLOR_MAP.yellow};
`;

export const DataValue = styled.span`
  ${smallText}
  color: ${COLOR_MAP.neon};
`;

export const ProgressEl = styled.div`
  ${smallText}
  overflow: hidden;
  word-break: break-all;
  color: ${COLOR_MAP.neon};
`;

export const ProgressLabel = styled.span`
  color: ${COLOR_MAP.yellow};
`;

export const KeyValueEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 0.125rem;
`;

export const KVLabel = styled.span`
  ${smallText}
  flex-shrink: 0;
  color: ${COLOR_MAP.yellow};
`;

export const KVValue = styled.span`
  ${smallText}
  color: ${({ $color }) => colorOf($color)};
`;
