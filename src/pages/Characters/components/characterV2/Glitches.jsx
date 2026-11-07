import SegmentedDice from '@components/SegmentedDice';
import SheetSection from '@components/SheetSection/SheetSection';
import { NumberStepper } from '@components/Layout/Layout';

import GlitchPanel from './GlitchPanel';
import { Field, FieldLabel, Note, Divider } from './Editor.styles';

/**
 * Glitches, as a SheetSection. Same bar as Health, in cyan.
 *   play   GlitchPanel: the bar (0 to max), then the five uses, each with
 *          Spend (−1) and an Undo for the last spend
 *   edit   regain roll (class die): sets both max and current to the
 *          result, per the rules; plus a max stepper for corrections
 */
export default function Glitches({ character = null, onUpdate = () => {} }) {
  if (!character) return null;

  return (
    <SheetSection
      id="sheet-glitches"
      title="Glitches"
      edit={<GlitchesEditor character={character} onUpdate={onUpdate} />}
    >
      <GlitchPanel character={character} onUpdate={onUpdate} />
    </SheetSection>
  );
}

function GlitchesEditor({ character, onUpdate }) {
  const die = character.constructor.die?.glitches || 'd2';

  // The rules: once you've spent them all and rested, roll your die again.
  // The result is how many you have, and the new max.
  const handleRoll = (total) => {
    character.max_glitches = total;
    character.glitches = total;
    onUpdate();
  };

  return (
    <>
      <div>
        <FieldLabel>Roll {die} to regain</FieldLabel>
        <div style={{ marginTop: '0.4rem' }}>
          <SegmentedDice character_id={character.id} dice={`1${die}`} onRollComplete={handleRoll} />
        </div>
        <Note style={{ marginTop: '0.4rem' }}>
          After spending all your Glitches and resting, roll again. The result sets both your Glitches and your max.
        </Note>
      </div>

      <Divider />

      <Field>
        <FieldLabel>Max Glitches</FieldLabel>
        <NumberStepper
          value={character.max_glitches}
          min={0}
          label="max glitches"
          size="lg"
          onChange={(value) => {
            character.max_glitches = value;
            onUpdate();
          }}
        />
      </Field>
      <Note>For corrections. Lowering the max brings current Glitches down with it.</Note>
    </>
  );
}
