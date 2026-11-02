// Home-only styled components. Shared pieces live in @components/Layout.

import styled from '@emotion/styled';
import { mq } from '@styles/media';

/* ---- The sign ("Everyone…" lines) ---------------------------------------- */

// The four mantra lines as a lit sign: pink-framed panel, yellow lines.
// Paired with the title, this is the page's one loud moment.
export const Sign = styled.div`
  max-width: calc(70ch + 3rem);
  margin: 0 0 3.5rem;
  padding: 1.25rem 1.5rem;
  background-color: var(--cy-bg-elevated);
  border: 1px solid var(--cy-pink-border);
  border-radius: var(--cy-radius);
  box-shadow:
    0 0 24px var(--cy-pink-faint),
    inset 0 0 24px var(--cy-pink-bg);
`;

export const SignLine = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.8;
  color: var(--cy-yellow);
  text-shadow: 0 0 10px var(--cy-pink-glow);

  ${mq.md} {
    font-size: 1.1rem;
  }
`;

/* ---- Megacorps: dossiers ------------------------------------------------- */

export const DossierGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  ${mq.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// A flagged file: pink top edge marks it as a target. The detail line
// is intel, so it takes the cyan aside treatment below a dashed rule.
export const Dossier = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.25rem 1.1rem;
  background-color: var(--cy-bg-panel-solid);
  border: 1px solid var(--cy-hairline);
  border-top: 2px solid var(--cy-pink-border);
  border-radius: var(--cy-radius);
`;

export const DossierName = styled.h3`
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--cy-text);
`;

export const DossierTagline = styled.p`
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--cy-text-muted);
`;

export const DossierIntel = styled.p`
  margin: auto 0 0;
  padding-top: 0.7rem;
  border-top: 1px dashed var(--cy-hairline);
  font-size: 0.85rem;
  font-style: italic;
  line-height: 1.55;
  color: var(--cy-cyan);
`;
