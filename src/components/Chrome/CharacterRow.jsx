import { STAT_LABELS, formatModifier, healthLevel } from '@utils/character';

import {
  CharacterRow as Row,
  CharacterInfo,
  CharacterName,
  CharacterClass,
  Readout,
  ReadoutLabel,
  ReadoutValue,
  HealthValue,
  Stats,
  JackedIn,
} from './ChromeBar.styles';

// The selected character at a glance: name, HP, glitches, stats, credits,
// and the edit lock. Rendered by ChromeBar when the page asks for it and a
// character is selected.
export default function CharacterRow({ character, onUpdate }) {
  const level = healthLevel(character.current_health, character.max_health);

  return (
    <Row>
      <CharacterInfo>
        <CharacterName>{character.name || 'Unnamed'}</CharacterName>
        <CharacterClass>[{character.class || ''}]</CharacterClass>

        <Readout>
          <ReadoutLabel>HP</ReadoutLabel>
          <HealthValue data-level={level || undefined}>
            {character.current_health ?? '—'}/{character.max_health ?? '—'}
          </HealthValue>
        </Readout>

        <Readout>
          <ReadoutLabel>GLITCHES</ReadoutLabel>
          <ReadoutValue>
            {character.glitches ?? '—'}/{character.max_glitches ?? '—'}
          </ReadoutValue>
        </Readout>

        {character._cyberdeck?.unlocked && character._cyberdeck?.jacked_in && (
          <JackedIn title="Jacked in: +2DR to all non-App actions">⚡ JACKED IN</JackedIn>
        )}

        <Stats>
          {Object.entries(STAT_LABELS).map(([key, label]) => (
            <Readout key={key} title={label}>
              <ReadoutLabel>{key}</ReadoutLabel>
              <ReadoutValue>{formatModifier(character.stats?.[key]) ?? '—'}</ReadoutValue>
            </Readout>
          ))}
        </Stats>

        {typeof character.credits === 'number' && (
          <Readout>
            <ReadoutValue>{character.credits}¤</ReadoutValue>
          </Readout>
        )}
      </CharacterInfo>
    </Row>
  );
}
