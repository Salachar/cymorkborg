import { useEffect, useRef, useState } from 'react';

import { TextInput } from '@components/Layout/Layout';

const show = (value) => (value === null || value === undefined ? '' : String(value));

/**
 * Whole-number field. Keeps its own text while you type (so clearing it
 * doesn't snap to 0), reports every valid number through onChange, and
 * shows the real value again on blur or when it changes elsewhere.
 *
 * allowEmpty: value may be null (shown blank), and clearing the field
 * reports null. Used where "not entered yet" differs from 0.
 */
export default function AmountInput({ value = 0, onChange, label, width = '9rem', allowEmpty = false, ...rest }) {
  const [text, setText] = useState(show(value));
  const focused = useRef(false);

  useEffect(() => {
    if (!focused.current) setText(show(value));
  }, [value]);

  return (
    <TextInput
      type="text"
      inputMode="numeric"
      aria-label={label}
      value={text}
      style={{ width, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}
      onFocus={() => {
        focused.current = true;
      }}
      onBlur={() => {
        focused.current = false;
        setText(show(value));
      }}
      onChange={(e) => {
        const next = e.target.value.replace(/[^\d-]/g, '');
        setText(next);
        if (next === '' && allowEmpty) {
          onChange?.(null);
          return;
        }
        const n = parseInt(next, 10);
        if (!Number.isNaN(n)) onChange?.(n);
      }}
      {...rest}
    />
  );
}
