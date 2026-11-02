import { Button, Label, Value } from './PickerButton.styles';

/**
 * Shows a table choice; tapping opens whatever picker the caller wires up.
 *   label   category, e.g. "Quirk", "Who you owe"
 *   value   chosen entry's label, or empty
 */
export default function PickerButton({ label, value, onClick, wide = false }) {
  return (
    <Button
      type="button"
      onClick={onClick}
      data-wide={wide || undefined}
      aria-label={`${label}: ${value || 'not chosen'}. Change`}
    >
      <Label>{label}</Label>
      <Value data-empty={!value || undefined}>{value || 'Choose…'}</Value>
    </Button>
  );
}
