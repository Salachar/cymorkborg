import { useState } from 'react';

import { Button, Roll } from '@components/Layout/Layout';
import { GLITCHES } from '@data/tables';

import ResourceBar from './ResourceBar';
import {
  Panel,
  Uses,
  Use,
  UseText,
  UseName,
  UseDescription,
  SpendButton,
  Spent,
  Empty,
} from './GlitchPanel.styles';

/**
 * Glitches at a glance: the bar, then what they can be spent on, each with
 * a Spend button (−1 Glitch). The last spend can be undone, so a mis-tap
 * mid-fight is harmless. Used by the Punks sheet and the Combat tab.
 *
 * Without a character, shows the uses read-only (no bar, no Spend).
 */
export default function GlitchPanel({ character = null, onUpdate = () => {} }) {
  const [lastSpent, setLastSpent] = useState(null); // a GLITCHES entry

  if (!character) {
    return (
      <Panel>
        <UseList />
      </Panel>
    );
  }

  const glitches = character.glitches;

  const setGlitches = (value) => {
    character.glitches = value;
    onUpdate();
  };

  const spend = (use) => {
    if (glitches <= 0) return;
    setGlitches(glitches - 1);
    setLastSpent(use);
  };

  const undo = () => {
    setGlitches(glitches + 1);
    setLastSpent(null);
  };

  return (
    <Panel>
      <ResourceBar
        current={glitches}
        max={character.max_glitches}
        min={0}
        tone="glitch"
        unit="glitch"
        onChange={(value) => {
          setGlitches(value);
          setLastSpent(null);
        }}
      />

      {lastSpent && (
        <Spent>
          <span>
            Spent 1 on <strong>{lastSpent.label}</strong>.
          </span>
          <Button type="button" onClick={undo}>
            Undo
          </Button>
        </Spent>
      )}

      <UseList
        canSpend={glitches > 0}
        onSpend={spend}
      />

      {glitches <= 0 && (
        <Empty>Out of Glitches. Once you've spent them all and rested, roll your die to regain them.</Empty>
      )}
    </Panel>
  );
}

function UseList({ canSpend = false, onSpend = null }) {
  return (
    <Uses>
      {GLITCHES.map((use) => (
        <Use key={use.id}>
          <UseText>
            <UseName>
              {use.label}
              {use.die && <Roll style={{ marginLeft: '0.4rem' }}>{use.die}</Roll>}
            </UseName>
            <UseDescription>{use.description}</UseDescription>
          </UseText>
          {onSpend && (
            <SpendButton
              type="button"
              disabled={!canSpend}
              onClick={() => onSpend(use)}
              aria-label={`Spend a Glitch: ${use.label}`}
            >
              Spend
            </SpendButton>
          )}
        </Use>
      ))}
    </Uses>
  );
}
