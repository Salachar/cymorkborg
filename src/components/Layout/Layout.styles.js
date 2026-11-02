// Shared page building blocks for the new design system. Replaces
// PageComponents.jsx page by page; old pages keep importing the old file
// until they're converted.
//
// Spacing rule: containers space their children with "& > * + *" rather
// than styling p/h3 directly. That keeps every child component's own
// styles in charge of itself, with no specificity fights.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

/* ---- Page ---------------------------------------------------------------- */

// The page owns its background, so only converted pages get the new
// surface and smog. Two soft purple patches, no blur filters.
// The page's scroll container. Fills the space under the nav and the
// page's ChromeBar; only this scrolls, so nothing in the content needs to
// be sticky.
export const PageScroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const PageShell = styled.div`
  min-height: 100%;
  background:
    radial-gradient(ellipse 80% 45% at 10% 0%, var(--cy-purple-mist), transparent 70%),
    radial-gradient(ellipse 60% 40% at 95% 40%, var(--cy-purple-faint), transparent 70%),
    var(--cy-bg-base);
  color: var(--cy-text);
  font-family: var(--cy-font);
`;

export const PageInner = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 2rem 1.25rem calc(3rem + var(--cy-safe-bottom));

  /* Tool pages (data-compact) start close to the top. */
  &[data-compact='true'] {
    padding-top: 1.25rem;
  }

  ${mq.md} {
    padding: 3rem 2.5rem calc(4rem + var(--cy-safe-bottom));

    &[data-compact='true'] {
      padding-top: 1.5rem;
    }
  }
`;

/* ---- Prose --------------------------------------------------------------- */

// Body text column. Capped near 70 characters so monospace stays readable
// on wide tablets; grids and cards elsewhere use the full width.
export const Prose = styled.div`
  max-width: 70ch;
  font-size: 1rem;
  line-height: 1.7;

  & > * + * {
    margin-top: 1rem;
  }
`;

// A standout line: section opener or a mid-section statement.
export const Lead = styled.p`
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.5;
  color: var(--cy-text);
`;

// The one inline emphasis style. Replaces every colored span.
export const Em = styled.strong`
  font-weight: 700;
  color: var(--cy-yellow);
`;

// Rumors, whispers, asides. Cyan's only job.
export const Intel = styled.div`
  padding: 0.1rem 0 0.1rem 0.9rem;
  border-left: 2px solid var(--cy-cyan-dim);
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.6;
  color: var(--cy-cyan);

  & > * + * {
    margin-top: 0.6rem;
  }
`;

/* ---- Page header --------------------------------------------------------- */

export const Header = styled.header`
  margin-bottom: 2.5rem;

  &[data-compact='true'] {
    margin-bottom: 1.25rem;
  }

  & > * + * {
    margin-top: 1.25rem;
  }
`;

// The page's one loud element: yellow sign text with a pink glow.
export const Title = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 1.25rem + 3vw, 3.25rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  overflow-wrap: anywhere;
  color: var(--cy-yellow);
  text-shadow:
    0 0 6px var(--cy-pink-faint),
    0 0 24px var(--cy-pink-glow);
`;

// Small one-line title for tool pages (Combat, Net Log), sized like the
// RetCom device label. The nav tab already names the page, so this is
// orientation, not a headline.
export const CompactTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-yellow);
`;

// Title on the left, page-level actions (buttons) on the right.
export const HeaderTop = styled.div`
  display: flex;
  min-height: 2.5rem; /* same height with or without actions */
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1rem;
`;

export const HeaderActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--cy-text-muted);
`;

/* ---- Sections ------------------------------------------------------------ */

export const SectionBlock = styled.section`
  margin-bottom: 3.5rem;
  scroll-margin-top: 1rem; /* jump targets land just below the top */
`;

// Yellow title over a hairline, with a short lit pink segment at the
// left end, like a single neon tube. Same for every section.
export const SectionTitle = styled.h2`
  position: relative;
  margin: 0 0 1.5rem;
  padding-bottom: 0.6rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--cy-yellow);
  border-bottom: 1px solid var(--cy-hairline);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 4rem;
    height: 2px;
    background-color: var(--cy-pink);
    box-shadow: 0 0 8px var(--cy-pink-glow);
  }

  ${mq.md} {
    font-size: 1.75rem;
  }
`;

/* ---- Inset panel --------------------------------------------------------- */

// A sub-topic nested inside a section (e.g. Tomb Towns).
export const Inset = styled.div`
  padding: 1rem 1.25rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--cy-text-muted);
`;

export const InsetTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cy-text);
`;

/* ---- Callout (posted notice) --------------------------------------------- */

// Double frame: solid yellow border plus a fainter outer ring with a gap
// between. The ring is a ::before so the title tag can sit on top of it.
export const Notice = styled.section`
  position: relative;
  isolation: isolate;
  max-width: calc(70ch + 3rem);
  margin: 1.5rem 0 3.5rem;
  padding: 2rem 1.5rem 1.5rem;
  background-color: var(--cy-bg-elevated);
  border: 1px solid var(--cy-yellow-border);
  border-radius: var(--cy-radius);

  &::before {
    content: '';
    position: absolute;
    inset: -6px;
    z-index: -1;
    border: 1px solid var(--cy-yellow-dim);
    border-radius: var(--cy-radius);
    pointer-events: none;
  }
`;

// Inverted label straddling the top edge, like a stamped tag.
export const NoticeTag = styled.span`
  position: absolute;
  top: 0;
  left: 1.25rem;
  transform: translateY(-50%);
  padding: 0.25rem 0.65rem;
  background-color: var(--cy-yellow);
  color: var(--cy-bg-black);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: var(--cy-radius);
`;

/* ---- Stack --------------------------------------------------------------- */

// General vertical spacing for mixed content (panels, tables, paragraphs).
// Only the gap and the paragraph width are set here; children style
// themselves. $gap overrides the default spacing.
export const Stack = styled.div`
  line-height: 1.65;

  & > * + * {
    margin-top: ${(p) => p.$gap || '1rem'};
  }

  & > p {
    max-width: 70ch;
  }
`;

/* ---- Small type pieces --------------------------------------------------- */

// Heading inside a section: quieter than SectionTitle, no color.
export const SubHeading = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cy-text);
`;

// Inline token for dice and DR values ("d20 ± ability", "DR12", "d4 HP").
// Same look everywhere, so mechanics are scannable without color.
export const Roll = styled.span`
  display: inline-block;
  padding: 0 0.4em;
  background-color: var(--cy-bg-black);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  font-size: 0.95em;
  font-weight: 700;
  line-height: 1.5;
  white-space: nowrap;
  color: var(--cy-text);
`;

// A character's modifier shown after a test, e.g. "(+2)".
export const Modifier = styled.span`
  margin-left: 0.35rem;
  font-weight: 400;
  color: var(--cy-text-muted);
`;

/* ---- Directory (term / detail pairs) ------------------------------------- */

// Label column width can be set per use with the --dir-label-width
// variable (the Directory component does this from a prop).
export const DirectoryList = styled.dl`
  margin: 0;
  border-top: 1px solid var(--cy-hairline);
`;

export const DirectoryRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.3rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--cy-hairline);

  ${mq.md} {
    grid-template-columns: var(--dir-label-width, 12rem) 1fr;
    gap: 1.5rem;
    align-items: baseline;
  }
`;

export const DirectoryTerm = styled.dt`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cy-text);
`;

export const DirectoryDetail = styled.dd`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--cy-text-muted);

  & > * + * {
    margin-top: 0.6rem;
  }
`;

/* ---- Scale (ordered steps: DR ladder, armor tiers) ----------------------- */

// Cells sit on a hairline-colored background with a 1px gap, which draws
// the dividers without per-cell borders, however the row wraps.
export const ScaleStrip = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr));
  gap: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: var(--cy-hairline);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  overflow: hidden;
`;

export const ScaleStep = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.65rem 0.75rem;
  background-color: var(--cy-bg-panel-solid);
`;

export const ScaleValue = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--cy-text);
`;

export const ScaleLabel = styled.span`
  font-size: 0.8rem;
  line-height: 1.4;
  color: var(--cy-text-muted);
`;

/* ---- Roll table ---------------------------------------------------------- */

// Roll column on the left, sized to its content; result and detail
// stacked on the right. Works the same at every width.
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  border-top: 1px solid var(--cy-hairline);
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid var(--cy-hairline);
`;

export const RollCell = styled.th`
  width: 1%;
  padding: 0.7rem 1.25rem 0.7rem 0;
  vertical-align: top;
  white-space: nowrap;
  text-align: left;
  font-weight: 700;
  color: var(--cy-yellow);
`;

export const ResultCell = styled.td`
  padding: 0.7rem 0;
  vertical-align: top;
`;

export const ResultName = styled.span`
  display: block;
  font-weight: 700;
  color: var(--cy-text);
`;

export const ResultDetail = styled.span`
  display: block;
  margin-top: 0.15rem;
  line-height: 1.55;
  color: var(--cy-text-muted);
`;

/* ---- Optional / alternate rule ------------------------------------------- */

// Dashed frame = "optional" everywhere on the site.
export const OptionalPanel = styled.div`
  padding: 0.9rem 1.1rem 1rem;
  border: 1px dashed var(--cy-border);
  border-radius: var(--cy-radius);
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--cy-text-muted);

  & > * + * {
    margin-top: 0.7rem;
  }
`;

export const OptionalHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4rem 0.6rem;
`;

export const OptionalTag = styled.span`
  padding: 0.05rem 0.4rem;
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const OptionalTitle = styled.h4`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--cy-text);
`;

/* ---- Tip ----------------------------------------------------------------- */

// Small marked aside. The marker is neutral by default; data-tone="glitch"
// makes it cyan (Glitches are the system misbehaving, cyan's territory).
export const TipBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.6rem 0.8rem;
  background-color: var(--cy-bg-panel);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
  font-size: 0.875rem;
  line-height: 1.55;
  color: var(--cy-text-muted);
`;

export const TipMarker = styled.span`
  flex-shrink: 0;
  padding: 0.05rem 0.4rem;
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-muted);

  &[data-tone='glitch'] {
    color: var(--cy-cyan);
    border-color: var(--cy-cyan-dim);
  }
`;

/* ---- Buttons ------------------------------------------------------------- */

// One button, three looks via data-variant:
//   (none)   quiet outline, for secondary actions
//   primary  yellow, for the main action on a page or panel
//   danger   red, for deletes only
// data-state="done" gives brief confirmation (e.g. "Shared").
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-height: 2.5rem;
  padding: 0 0.9rem;
  background-color: transparent;
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  font-family: var(--cy-font);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--cy-text-muted);
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;

  &[data-variant='primary'] {
    background-color: var(--cy-yellow-bg);
    border-color: var(--cy-yellow-border);
    color: var(--cy-yellow);
  }

  &[data-variant='danger'] {
    background-color: var(--cy-red-bg);
    border-color: var(--cy-red-border);
    color: var(--cy-red);
  }

  &[data-state='done'] {
    border-color: var(--cy-yellow-border);
    color: var(--cy-yellow);
  }

  ${mq.hover} {
    &:hover:not(:disabled) {
      color: var(--cy-text);
      border-color: var(--cy-text-dim);
    }
    &[data-variant='primary']:hover:not(:disabled) {
      color: var(--cy-yellow-bright);
      border-color: var(--cy-yellow);
    }
    &[data-variant='danger']:hover:not(:disabled) {
      color: var(--cy-red);
      border-color: var(--cy-red);
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: 2px;
  }
`;

// Square icon-only version. Always pass an aria-label.
export const IconButton = styled(Button)`
  width: 2.25rem;
  min-height: 2.25rem;
  height: 2.25rem;
  padding: 0;
`;

/* ---- Form fields --------------------------------------------------------- */

// Shared by TextArea and TextInput. Fields are selectable even though the
// app disables text selection globally.
const fieldBase = `
  display: block;
  width: 100%;
  background-color: var(--cy-bg-black);
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  font-family: var(--cy-font);
  font-size: 0.9rem;
  color: var(--cy-text);
  outline: none;
  -webkit-user-select: text;
  user-select: text;
  transition: border-color 0.15s ease;

  &:focus {
    border-color: var(--cy-yellow-dim);
  }

  &::placeholder {
    color: var(--cy-text-dim);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const TextArea = styled.textarea`
  ${fieldBase}
  min-height: 5.5rem;
  padding: 0.6rem 0.75rem;
  line-height: 1.5;
  resize: vertical;
`;

export const TextInput = styled.input`
  ${fieldBase}
  min-height: 2.5rem;
  padding: 0 0.75rem;
`;

/* ---- Segmented control --------------------------------------------------- */

// A small labeled row of mutually exclusive options. The active segment
// is marked with aria-pressed, which also drives its style.
export const SegmentGroup = styled.div`
  display: inline-flex;
  align-items: stretch;
  flex-shrink: 0;
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  overflow: hidden;
`;

export const SegmentLabel = styled.span`
  display: flex;
  align-items: center;
  padding: 0 0.55rem;
  background-color: var(--cy-bg-black);
  border-right: 1px solid var(--cy-hairline);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cy-text-dim);
`;

export const Segment = styled.button`
  min-height: 2.25rem;
  padding: 0 0.65rem;
  background-color: transparent;
  border: 0;
  border-left: 1px solid var(--cy-hairline);
  font-family: var(--cy-font);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--cy-text-muted);
  cursor: pointer;
  transition: color 0.15s ease, background-color 0.15s ease;

  &:first-of-type {
    border-left: 0;
  }

  &[aria-pressed='true'] {
    background-color: var(--cy-yellow-bg);
    color: var(--cy-yellow);
  }

  ${mq.hover} {
    &[aria-pressed='false']:hover {
      color: var(--cy-text);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: -2px;
  }
`;

/* ---- Tag ----------------------------------------------------------------- */

// Small outlined label (item tags, ILLEGAL). data-tone="highlight" makes
// it pink.
export const Tag = styled.span`
  display: inline-block;
  padding: 0.05rem 0.4rem;
  border: 1px solid var(--cy-border);
  border-radius: var(--cy-radius);
  font-size: 0.62rem;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--cy-text-muted);

  &[data-tone='highlight'] {
    color: var(--cy-pink);
    border-color: var(--cy-pink-border);
  }
`;

/* ---- Search input -------------------------------------------------------- */

export const SearchWrap = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: 50%;
    left: 0.65rem;
    transform: translateY(-50%);
    color: var(--cy-text-dim);
    pointer-events: none;
  }

  & > input {
    padding-left: 2.1rem;
    padding-right: 2.75rem;
  }

  & > button {
    position: absolute;
    top: 50%;
    right: 0.15rem;
    transform: translateY(-50%);
    border-color: transparent;
  }
`;

/* ---- Collapsible --------------------------------------------------------- */

export const CollapsibleBlock = styled.section`
  & + & {
    margin-top: 0.75rem;
  }
`;

// Quiet bar. The toggle is a real button; actions sit beside it (not
// inside), so tapping an action never toggles the section.
export const CollapsibleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-radius: var(--cy-radius);
`;

// Open sections get a yellow title (same "active" signal as the nav).
export const CollapsibleToggle = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.6rem;
  min-width: 0;
  min-height: 2.75rem;
  padding: 0.5rem 0.85rem;
  background: transparent;
  border: 0;
  font-family: var(--cy-font);
  text-align: left;
  color: var(--cy-text);
  cursor: pointer;
  transition: color 0.15s ease;

  & > svg {
    flex-shrink: 0;
    color: var(--cy-text-dim);
    transform: rotate(-90deg);
    transition: transform 0.15s ease;
  }

  &[aria-expanded='true'] {
    color: var(--cy-yellow);

    & > svg {
      transform: rotate(0deg);
    }
  }

  ${mq.hover} {
    &[aria-expanded='false']:hover {
      color: var(--cy-yellow-bright);
    }
  }

  &:focus-visible {
    outline: 1px solid var(--cy-yellow-dim);
    outline-offset: -2px;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    & > svg {
      transition: none;
    }
  }
`;

export const CollapsibleTitle = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const CollapsibleMeta = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.02em;
  color: var(--cy-text-dim);
`;

export const CollapsibleActions = styled.div`
  flex-shrink: 0;
  padding-right: 0.5rem;
`;

export const CollapsibleBody = styled.div`
  margin-top: 0.75rem;
`;

/* ---- Number stepper ------------------------------------------------------ */

export const StepperWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StepperValue = styled.div`
  min-width: 3rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--cy-yellow);

  &[data-size='lg'] {
    min-width: 4rem;
    font-size: 2.25rem;
  }

  &[data-size='sm'] {
    min-width: 2rem;
    font-size: 1rem;
    color: var(--cy-text);
  }
`;
