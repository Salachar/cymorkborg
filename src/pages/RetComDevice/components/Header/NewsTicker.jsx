import { useState, useEffect, useRef } from 'react';

import { Ticker, TickerTag, TickerText } from './Header.styles';

// Short tags per category. All categories share one style now; the tag
// text is what tells them apart.
const TYPE_LABELS = {
  CORP_NEWS: 'CORP',
  STREET_INTEL: 'INTEL',
  GANG_CHATTER: 'GANG',
  SEC_OPS: 'SECOPS',
  SYSTEM: 'SYS',
};

const FADE_MS = 600;

export function NewsTicker({ feed = [], interval = 8000 }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (feed.length <= 1) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const advance = () => setIndex((prev) => (prev + 1) % feed.length);

    // Fade out, swap, fade in. With reduced motion, just swap.
    const next = () => {
      if (reduceMotion) {
        advance();
        timeoutRef.current = setTimeout(next, interval);
        return;
      }
      setVisible(false);
      timeoutRef.current = setTimeout(() => {
        advance();
        setVisible(true);
        timeoutRef.current = setTimeout(next, interval);
      }, FADE_MS);
    };

    timeoutRef.current = setTimeout(next, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [feed.length, interval]);

  if (!feed.length) return null;

  const current = feed[index % feed.length];
  const label = TYPE_LABELS[current.type] || current.type;

  return (
    <Ticker>
      <TickerTag data-visible={visible}>[{label}]</TickerTag>
      <TickerText data-visible={visible}>{current.text}</TickerText>
    </Ticker>
  );
}
