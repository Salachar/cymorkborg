import EditDialog from '@components/EditDialog/EditDialog';
import { SegmentedControl } from '@components/Layout/Layout';

import { Setting, SettingText, SettingName, SettingHint } from './Header.styles';

// How far each tree level is indented (rem per depth).
const INDENT_OPTIONS = [
  { value: 0, label: 'Flat' },
  { value: 1, label: 'Normal' },
  { value: 1.5, label: 'Wide' },
];

/**
 * RetCom device settings, opened from the header's gear button. Changes
 * apply immediately (the EditDialog pattern); Done closes.
 */
export default function RetComSettings({ open, onClose, indent = 1, onEvent = () => {} }) {
  return (
    <EditDialog open={open} title="RetCom Settings" onClose={onClose}>
      <Setting>
        <SettingText>
          <SettingName>Tree indent</SettingName>
          <SettingHint>How far nested nodes step in from their parent.</SettingHint>
        </SettingText>
        <SegmentedControl
          options={INDENT_OPTIONS}
          value={indent}
          onChange={(value) => onEvent({ type: 'indent_change', value })}
        />
      </Setting>
    </EditDialog>
  );
}
