// RetCom's building blocks. Same exports and props as before; styling moved
// from inline styles and Tailwind classes to Emotion (RetComComponents.styles.js).
// className and style are still accepted wherever they were.

import {
  COLOR_MAP,
  TEXT,
  LineEl,
  SpacerEl,
  NodePreviewEl,
  SectionEl,
  SectionTitle,
  BoxEl,
  InsetOuter,
  InsetInner,
  InsetTitle,
  InsetBody,
  DividerEl,
  ListItemEl,
  WarningEl,
  HeaderEl,
  DataTableEl,
  DataRow,
  DataLabel,
  DataValue,
  ProgressEl,
  ProgressLabel,
  KeyValueEl,
  KVLabel,
  KVValue,
} from './RetComComponents.styles';

export { COLOR_MAP };

export const Spacer = () => <SpacerEl />;

// Text styling. `pulse` is accepted but no longer animates.
export const Line = ({
  className = '',
  styles = {},
  inline,
  cyan = false,
  smoke = false,
  neon = false,
  yellow = false,
  pink = false,
  red = false,
  teal = false,
  top = false,
  bottom = false,
  left = false,
  bold = false,
  xsmall = false,
  small = false,
  large = false,
  color = '',
  pulse, // eslint-disable-line no-unused-vars
  loading = false,
  style = {},
  span = false,
  br = false,
  bullet = false,
  children,
}) => {
  // Computed from props, in the same order as before.
  const css = {};

  if (inline) css.display = 'inline-block';

  if (color && COLOR_MAP[color]) {
    css.color = COLOR_MAP[color];
  } else {
    if (cyan) css.color = COLOR_MAP.cyan;
    if (smoke) css.color = COLOR_MAP.smoke;
    if (neon) css.color = COLOR_MAP.neon;
    if (yellow) css.color = COLOR_MAP.yellow;
    if (pink) css.color = COLOR_MAP.pink;
    if (red) css.color = COLOR_MAP.red;
    if (teal) css.color = COLOR_MAP.teal;
  }

  if (top) css.marginTop = '0.5rem';
  if (bottom) css.marginBottom = '0.5rem';
  if (left) css.marginLeft = '0.5rem';

  if (bold) css.fontWeight = 700;
  if (xsmall) Object.assign(css, TEXT.xs);
  if (small) Object.assign(css, TEXT.sm);
  if (large) Object.assign(css, TEXT.lg);

  // Caller-provided style stays inline, as before.
  const inlineStyle = { ...styles, ...style };

  return (
    <>
      <LineEl
        as={span ? 'span' : 'div'}
        className={className || undefined}
        style={inlineStyle}
        $css={css}
      >
        {bullet && ' · '}
        {children}
        {loading ? '...' : ''}
      </LineEl>
      {br && <br />}
    </>
  );
};

export const NodePreview = ({ children }) => <NodePreviewEl>{children}</NodePreviewEl>;

export const Section = ({ title, center = false, children, color = 'yellow' }) => (
  <SectionEl data-center={center || undefined}>
    <SectionTitle $color={color}>{title}</SectionTitle>
    {children}
  </SectionEl>
);

export const Box = ({ children, color = 'cyan', className = '' }) => (
  <BoxEl className={className || undefined} $color={color}>
    {children}
  </BoxEl>
);

export const InsetBox = ({ children, title, color = 'cyan', className = '', style = {} }) => (
  <InsetOuter className={className || undefined} style={style}>
    <InsetInner>
      {Boolean(title) && <InsetTitle $color={color}>{title}</InsetTitle>}
      <InsetBody>{children}</InsetBody>
    </InsetInner>
  </InsetOuter>
);

export const Divider = ({ color = 'cyan', style }) => <DividerEl $color={color} style={style} />;

export const ListItem = ({ children, indent = false }) => (
  <ListItemEl data-indent={indent || undefined}>→ {children}</ListItemEl>
);

export const Warning = ({ children }) => <WarningEl>⚠ {children}</WarningEl>;

export const Header = ({ children, color = 'cyan' }) => <HeaderEl $color={color}>{children}</HeaderEl>;

export const DataTable = ({ data }) => (
  <DataTableEl>
    {data.map((row, index) => (
      <DataRow key={index}>
        <DataLabel>{row.label}:</DataLabel>
        <DataValue>{row.value}</DataValue>
      </DataRow>
    ))}
  </DataTableEl>
);

export const ProgressBar = ({ percent = 100, label = '' }) => {
  const filled = Math.round(percent / 4);
  const empty = 25 - filled;

  return (
    <ProgressEl>
      {label && <ProgressLabel>{label}: </ProgressLabel>}
      [{'█'.repeat(filled)}{'░'.repeat(empty)}] {percent}%
    </ProgressEl>
  );
};

export const KeyValue = ({ label, value, valueColor = 'neon' }) => (
  <KeyValueEl>
    <KVLabel>{label}:</KVLabel>
    <KVValue $color={valueColor}>{value}</KVValue>
  </KeyValueEl>
);
