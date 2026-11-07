import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { CYBORG_COLLAPSED_SECTIONS_KEY } from '@utils/localStorage';

// New shared page components. Same names as PageComponents.jsx where
// they overlap, so converting a page is mostly an import-path change.

import {
  PageScroll,
  PageShell,
  PageInner,
  Prose,
  Header,
  Title,
  CompactTitle,
  HeaderTop,
  HeaderActions,
  Subtitle,
  SectionBlock,
  SectionTitle,
  Inset,
  InsetTitle,
  Notice,
  NoticeTag,
  DirectoryList,
  DirectoryRow,
  DirectoryTerm,
  DirectoryDetail,
  ScaleStrip,
  ScaleStep,
  ScaleValue,
  ScaleLabel,
  Table,
  TableRow,
  RollCell,
  ResultCell,
  ResultName,
  ResultDetail,
  OptionalPanel,
  OptionalHeader,
  OptionalTag,
  OptionalTitle,
  TipBox,
  TipMarker,
  SegmentGroup,
  SegmentLabel,
  Segment,
  TextInput as TextInputField,
  IconButton as IconButtonBase,
  SearchWrap,
  CollapsibleBlock,
  CollapsibleHeader,
  CollapsibleToggle,
  CollapsibleTitle,
  CollapsibleMeta,
  CollapsibleActions,
  CollapsibleBody,
  StepperWrap,
  StepperValue,
} from './Layout.styles';

// Inline and structural pieces used directly in page content.
export {
  PageShell,
  Prose,
  Lead,
  Em,
  Intel,
  Stack,
  SubHeading,
  Roll,
  Modifier,
  OptionalTag,
  Button,
  IconButton,
  TextArea,
  TextInput,
  Tag,
} from './Layout.styles';

/* ---- Page ---------------------------------------------------------------- */

// Scroll positions by route, kept for the session.
const scrollPositions = {};

// The page body and its scroll container. Pages render it after their
// ChromeBar:
//
//   <>
//     <ChromeBar ... />
//     <Page compact>...</Page>
//   </>
//
// compact        less top padding (tool pages)
// wide           no width cap or padding; the page lays itself out (RetCom)
// rememberScroll restore this route's scroll position on return
export function Page({ compact = false, wide = false, rememberScroll = true, children }) {
  const scrollRef = useRef(null);
  const { pathname } = useLocation();

  // Layout effect: restore before paint, and save in cleanup while the
  // element is still in the DOM.
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el || !rememberScroll) return;
    el.scrollTop = scrollPositions[pathname] || 0;
    return () => {
      scrollPositions[pathname] = el.scrollTop;
    };
  }, [pathname, rememberScroll]);

  return (
    <PageScroll ref={scrollRef}>
      <PageShell>
        {wide ? children : <PageInner data-compact={compact || undefined}>{children}</PageInner>}
      </PageShell>
    </PageScroll>
  );
}

// Children render as intro prose under the title. actions renders
// page-level buttons beside the title. compact swaps the big headline for
// a small one-line title (tool pages).
export function PageHeader({ title = '', subtitle = '', actions = null, compact = false, children }) {
  const TitleTag = compact ? CompactTitle : Title;

  return (
    <Header data-compact={compact || undefined}>
      {actions || compact ? (
        <HeaderTop>
          <TitleTag>{title}</TitleTag>
          {actions && <HeaderActions>{actions}</HeaderActions>}
        </HeaderTop>
      ) : (
        <Title>{title}</Title>
      )}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children && <Prose>{children}</Prose>}
    </Header>
  );
}

/* ---- Sections ------------------------------------------------------------ */

export function Section({ id, title, children }) {
  return (
    <SectionBlock id={id}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionBlock>
  );
}

// A section whose body is prose. Children can mix plain <p>, <Lead>,
// <Intel> and <InsetPanel>; spacing between them is handled for you.
export function LoreSection({ id, title, children }) {
  return (
    <Section id={id} title={title}>
      <Prose>{children}</Prose>
    </Section>
  );
}

export function InsetPanel({ title, children }) {
  return (
    <Inset>
      {title && <InsetTitle>{title}</InsetTitle>}
      {children}
    </Inset>
  );
}

// Posted-notice style for rules and must-reads.
export function Callout({ title = '', children }) {
  return (
    <Notice>
      {title && <NoticeTag>{title}</NoticeTag>}
      <Prose>{children}</Prose>
    </Notice>
  );
}

/* ---- Reference forms ----------------------------------------------------- */

// Term / detail pairs. items: [{ id?, label, description }]. Labels and
// descriptions can be JSX. labelWidth sets the term column on tablet and up.
export function Directory({ items = [], labelWidth }) {
  if (!items.length) return null;

  return (
    <DirectoryList style={labelWidth ? { '--dir-label-width': labelWidth } : undefined}>
      {items.map((item, index) => (
        <DirectoryRow key={item.id ?? (typeof item.label === 'string' ? item.label : index)}>
          <DirectoryTerm>{item.label}</DirectoryTerm>
          <DirectoryDetail>{item.description}</DirectoryDetail>
        </DirectoryRow>
      ))}
    </DirectoryList>
  );
}

// Ordered steps, low to high. steps: [{ value, label }]
export function Scale({ steps = [] }) {
  return (
    <ScaleStrip>
      {steps.map((step) => (
        <ScaleStep key={step.value}>
          <ScaleValue>{step.value}</ScaleValue>
          {step.label && <ScaleLabel>{step.label}</ScaleLabel>}
        </ScaleStep>
      ))}
    </ScaleStrip>
  );
}

// rows: [{ roll, result, detail }]. Details can be JSX.
export function RollTable({ rows = [] }) {
  return (
    <Table>
      <tbody>
        {rows.map((row) => (
          <TableRow key={row.roll}>
            <RollCell scope="row">{row.roll}</RollCell>
            <ResultCell>
              <ResultName>{row.result}</ResultName>
              {row.detail && <ResultDetail>{row.detail}</ResultDetail>}
            </ResultCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

// Dashed panel for optional and alternate rules.
export function OptionalRule({ tag = 'Optional', title, children }) {
  return (
    <OptionalPanel>
      <OptionalHeader>
        <OptionalTag>{tag}</OptionalTag>
        {title && <OptionalTitle>{title}</OptionalTitle>}
      </OptionalHeader>
      {children}
    </OptionalPanel>
  );
}

// Small marked aside. tone="glitch" for Glitch tips.
export function Tip({ label = 'Tip', tone, children }) {
  return (
    <TipBox>
      <TipMarker data-tone={tone}>{label}</TipMarker>
      <div>{children}</div>
    </TipBox>
  );
}

/* ---- Segmented control --------------------------------------------------- */

// options: [{ value, label? }]. label defaults to the value.
export function SegmentedControl({ label, options = [], value, onChange }) {
  return (
    <SegmentGroup role="group" aria-label={label}>
      {label && <SegmentLabel aria-hidden="true">{label}</SegmentLabel>}
      {options.map((option) => (
        <Segment
          key={option.value}
          type="button"
          aria-pressed={option.value === value}
          onClick={() => onChange?.(option.value)}
        >
          {option.label ?? option.value}
        </Segment>
      ))}
    </SegmentGroup>
  );
}

/* ---- Search input -------------------------------------------------------- */

// Text field with a search icon and a clear button. onChange receives the
// new string, not the event. No autofocus, by design.
export function SearchInput({ value = '', onChange, placeholder = 'Search…', label }) {
  return (
    <SearchWrap>
      <SearchIcon style={{ fontSize: 18 }} />
      <TextInputField
        type="text"
        enterKeyHint="search"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        aria-label={label || placeholder}
      />
      {value && (
        <IconButtonBase type="button" onClick={() => onChange?.('')} aria-label="Clear search" title="Clear">
          <CloseIcon style={{ fontSize: 16 }} />
        </IconButtonBase>
      )}
    </SearchWrap>
  );
}

/* ---- Collapsible --------------------------------------------------------- */

// Open/closed state is remembered in localStorage.
//   With a character: per character, in the same store and with the same
//   keys as the old CollapsibleSection, so saved states carry over when
//   the character sheet switches to this component.
//   Without one: app-wide, under storageKey.
const GLOBAL_COLLAPSE_KEY = 'cyborg_collapsible_sections';

function readStore(key) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    console.error('Error reading collapse states:', e);
    return {};
  }
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error saving collapse state:', e);
  }
}

function loadOpen({ storageKey, characterId, sectionKey, defaultOpen }) {
  if (characterId) {
    return readStore(CYBORG_COLLAPSED_SECTIONS_KEY)[characterId]?.[sectionKey] ?? defaultOpen;
  }
  return readStore(storageKey)[sectionKey] ?? defaultOpen;
}

function saveOpen({ storageKey, characterId, sectionKey, isOpen }) {
  if (characterId) {
    const states = readStore(CYBORG_COLLAPSED_SECTIONS_KEY);
    states[characterId] = { ...(states[characterId] || {}), [sectionKey]: isOpen };
    writeStore(CYBORG_COLLAPSED_SECTIONS_KEY, states);
    return;
  }
  const states = readStore(storageKey);
  states[sectionKey] = isOpen;
  writeStore(storageKey, states);
}

// Props match CollapsibleSection's (minus the color classes), plus:
//   sectionKey  stable id for saved state (defaults to the title)
//   storageKey  app-wide store to use when no character is passed
//   forceOpen   show open without saving it (e.g. while searching)
//   meta        small text after the title (e.g. match counts)
export function Collapsible({
  title = 'Section',
  sectionKey,
  character = null,
  storageKey = GLOBAL_COLLAPSE_KEY,
  defaultOpen = false,
  forceOpen = false,
  meta = null,
  headerChildren = null,
  headerChildrenEnabled = false,
  children,
}) {
  const characterId = character?.id || null;
  const key = sectionKey || title.trim().replace(/ /g, '');
  const scope = { storageKey, characterId, sectionKey: key };

  const [isOpen, setIsOpen] = useState(() => loadOpen({ ...scope, defaultOpen }));

  // Re-read when the character or key changes (character sheet).
  useEffect(() => {
    setIsOpen(loadOpen({ ...scope, defaultOpen }));
  }, [storageKey, characterId, key, defaultOpen]);

  // While forced open (searching), the header does nothing rather than
  // silently flipping the saved state underneath.
  const toggle = () => {
    if (forceOpen) return;
    const next = !isOpen;
    setIsOpen(next);
    saveOpen({ ...scope, isOpen: next });
  };

  const shown = forceOpen || isOpen;

  return (
    <CollapsibleBlock>
      <CollapsibleHeader>
        <CollapsibleToggle type="button" aria-expanded={shown} onClick={toggle}>
          <ExpandMoreIcon style={{ fontSize: 20 }} />
          <CollapsibleTitle>{title}</CollapsibleTitle>
          {meta && <CollapsibleMeta>{meta}</CollapsibleMeta>}
        </CollapsibleToggle>

        {shown && headerChildrenEnabled && headerChildren && (
          <CollapsibleActions>{headerChildren}</CollapsibleActions>
        )}
      </CollapsibleHeader>

      {shown && <CollapsibleBody>{children}</CollapsibleBody>}
    </CollapsibleBlock>
  );
}

/* ---- Number stepper ------------------------------------------------------ */

// − value + with limits. onChange gets the new number. The buttons disable
// at min/max so a limit is visible, not silently ignored. format controls
// how the value reads (e.g. formatModifier for "+2").
export function NumberStepper({
  value = 0,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  label = 'value',
  format = (v) => v,
  size,
}) {
  return (
    <StepperWrap>
      <IconButtonBase
        type="button"
        onClick={() => onChange?.(Math.max(min, value - step))}
        disabled={value <= min}
        aria-label={`Lower ${label}`}
      >
        <RemoveIcon style={{ fontSize: 18 }} />
      </IconButtonBase>
      <StepperValue data-size={size} aria-live="polite">{format(value)}</StepperValue>
      <IconButtonBase
        type="button"
        onClick={() => onChange?.(Math.min(max, value + step))}
        disabled={value >= max}
        aria-label={`Raise ${label}`}
      >
        <AddIcon style={{ fontSize: 18 }} />
      </IconButtonBase>
    </StepperWrap>
  );
}
