import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Bar, Fill, BarButton, Readout, Current, Slash, Max } from './ResourceBar.styles';

/**
 * − current / max + bar, shared by Health and Glitches.
 *
 *   level   "high" | "mid" | "low"   health coloring (thirds)
 *   tone    "glitch"                 cyan
 *   min     lowest current allowed (omit for no floor, e.g. negative HP)
 *   unit    for accessible labels, e.g. "HP", "glitch"
 */
export default function ResourceBar({
  current = 0,
  max = 0,
  min = -Infinity,
  onChange,
  level,
  tone,
  unit = '',
}) {
  const percent = max > 0 ? Math.max(0, Math.min(100, (current / max) * 100)) : 0;

  return (
    <Bar data-level={level || undefined} data-tone={tone || undefined}>
      <Fill style={{ width: `${percent}%` }} data-empty={percent === 0 || undefined} />

      <BarButton
        type="button"
        onClick={() => onChange?.(current - 1)}
        disabled={current <= min}
        aria-label={`Lose 1 ${unit}`.trim()}
      >
        <RemoveIcon style={{ fontSize: 24 }} />
      </BarButton>

      <Readout aria-label={`${current} of ${max} ${unit}`.trim()}>
        <Current>{current}</Current>
        <Slash>/</Slash>
        <Max>{max}</Max>
      </Readout>

      <BarButton
        type="button"
        onClick={() => onChange?.(current + 1)}
        disabled={current >= max}
        aria-label={`Gain 1 ${unit}`.trim()}
      >
        <AddIcon style={{ fontSize: 24 }} />
      </BarButton>
    </Bar>
  );
}
