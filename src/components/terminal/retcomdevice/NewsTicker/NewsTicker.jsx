import { useState, useEffect } from 'react';
import { EVENT_FEED } from '@data/random/eventFeed';

/**
 * NewsTicker Component - Slim scrolling news ticker
 *
 * Cycles through events from eventData in a compact ticker format.
 * Perfect for terminal headers or sidebars.
 *
 * Props:
 * - interval: How long to display each event in ms (default: 5000)
 * - filterType: Filter by event type ("ALL", "CORP_NEWS", etc.) (default: "ALL")
 * - showTypeLabel: Show the event type badge (default: true)
 */
export default function NewsTicker({
  interval = 5000,
  filterType = "ALL",
  showTypeLabel = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // Force re-render of animation

  // Filter events based on type
  const filteredEvents = filterType === "ALL"
    ? EVENT_FEED
    : EVENT_FEED.filter(event => event.type === filterType);

  const currentEvent = filteredEvents[currentIndex] || EVENT_FEED[0];

  // Auto-advance ticker (always on)
  useEffect(() => {
    if (filteredEvents.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredEvents.length);
      setKey(prev => prev + 1); // Restart animation
    }, interval);

    return () => clearInterval(timer);
  }, [interval, filteredEvents.length]);

  // Event type color mapping
  const getEventColor = (type) => {
    const colorMap = {
      'CORP_NEWS': 'rgb(59, 130, 246)', // blue
      'STREET_INTEL': 'rgb(250, 204, 21)', // yellow
      'GANG_CHATTER': 'rgb(239, 68, 68)', // red
      'SEC_OPS': 'rgb(168, 85, 247)', // purple
      'SYSTEM': 'rgb(79, 209, 197)', // cyan
    };
    return colorMap[type] || 'rgb(79, 209, 197)';
  };

  const eventColor = getEventColor(currentEvent.type);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        border: '1px solid rgb(71, 85, 105)',
        borderRadius: '3px',
        padding: '0.5rem 0.75rem',
        fontFamily: 'monospace',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background timer - fills from left to right */}
      <div
        key={key}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: eventColor.replace('rgb', 'rgba').replace(')', ', 0.08)'),
          animation: `fillTimer ${interval}ms linear`,
          transformOrigin: 'left',
          zIndex: 0,
        }}
      />

      {/* Live indicator */}
      <div
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: 'rgb(239, 68, 68)',
          borderRadius: '50%',
          animation: 'blink 2s infinite',
          flexShrink: 0,
          position: 'relative',
          zIndex: 1,
        }}
      />

      {/* Event type badge */}
      {showTypeLabel && (
        <div
          style={{
            fontSize: '0.65rem',
            fontWeight: 'bold',
            color: eventColor,
            padding: '0.15rem 0.4rem',
            backgroundColor: `${eventColor}20`,
            border: `1px solid ${eventColor}60`,
            borderRadius: '2px',
            textTransform: 'uppercase',
            flexShrink: 0,
            letterSpacing: '0.05em',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {currentEvent.type.replace('_', ' ')}
        </div>
      )}

      {/* Ticker text */}
      <div
        style={{
          flex: 1,
          fontSize: '0.75rem',
          color: 'rgb(203, 213, 225)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {currentEvent.text}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes fillTimer {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
