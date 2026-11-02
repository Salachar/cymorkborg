import { useCallback, useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Roll against a list of `count` entries.
 *
 *   const { roll, rolling, highlight } = useTableRoll(count, (index) => ...);
 *
 * While rolling, `highlight` tumbles through random indexes, then settles
 * and `onResult(index)` fires once with the final pick. With reduced
 * motion the result lands immediately. The caller decides what a result
 * means; it should *set* the selection, never toggle it.
 *
 * Shared so every roll-from-a-table spot behaves the same.
 */
export default function useTableRoll(count, onResult, { duration = 500, interval = 50 } = {}) {
  const [rolling, setRolling] = useState(false);
  const [highlight, setHighlight] = useState(null);
  const intervalRef = useRef(null);
  const onResultRef = useRef(onResult);
  onResultRef.current = onResult;

  useEffect(() => () => clearInterval(intervalRef.current), []);

  const roll = useCallback(() => {
    if (rolling || !count) return;

    const final = Math.floor(Math.random() * count);

    if (prefersReducedMotion()) {
      onResultRef.current?.(final);
      return;
    }

    setRolling(true);
    let elapsed = 0;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      elapsed += interval;
      setHighlight(Math.floor(Math.random() * count));

      if (elapsed >= duration) {
        clearInterval(intervalRef.current);
        setHighlight(null);
        setRolling(false);
        onResultRef.current?.(final);
      }
    }, interval);
  }, [rolling, count, duration, interval]);

  return { roll, rolling, highlight };
}
