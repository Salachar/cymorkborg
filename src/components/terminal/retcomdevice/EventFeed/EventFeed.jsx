import { useState } from 'react';
import { Line, Divider } from '@terminal/TerminalComponents';
import { EVENT_FEED, getEventsByType, getRecentEvents } from '@data/random/eventFeed';

export default function EventFeed({
  id = "event-feed",
  limit = 15,
  showFilters = true,
  defaultFilter = "ALL",
}) {
  const [selectedFilter, setSelectedFilter] = useState(defaultFilter);

  // Get filtered events
  const getDisplayEvents = () => {
    if (selectedFilter === "ALL") {
      return getRecentEvents(limit);
    }
    return getEventsByType(selectedFilter).slice(0, limit);
  };

  const displayEvents = getDisplayEvents();

  // Event type color mapping
  const getEventColor = (type) => {
    const colorMap = {
      'CORP_NEWS': { text: 'rgb(59, 130, 246)', bg: 'rgba(59, 130, 246, 0.1)', label: 'blue' }, // blue
      'STREET_INTEL': { text: 'rgb(250, 204, 21)', bg: 'rgba(250, 204, 21, 0.1)', label: 'yellow' }, // yellow
      'GANG_CHATTER': { text: 'rgb(239, 68, 68)', bg: 'rgba(239, 68, 68, 0.1)', label: 'red' }, // red
      'SEC_OPS': { text: 'rgb(168, 85, 247)', bg: 'rgba(168, 85, 247, 0.1)', label: 'purple' }, // purple
      'SYSTEM': { text: 'rgb(79, 209, 197)', bg: 'rgba(79, 209, 197, 0.1)', label: 'cyan' }, // cyan
    };
    return colorMap[type] || colorMap.SYSTEM;
  };

  // Filter buttons
  const filters = [
    { id: 'ALL', label: 'ALL FEEDS' },
    { id: 'CORP_NEWS', label: 'CORP NEWS' },
    { id: 'STREET_INTEL', label: 'STREET INTEL' },
    { id: 'GANG_CHATTER', label: 'GANG CHATTER' },
    { id: 'SEC_OPS', label: 'SEC OPS' },
    { id: 'SYSTEM', label: 'SYSTEM' },
  ];

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          border: '2px solid rgb(77, 167, 188)',
          borderRadius: '4px',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          padding: '1rem',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          {/* CSS Feed/Broadcast Icon */}
          <div style={{ position: 'relative', width: '24px', height: '20px', flexShrink: 0 }}>
            {/* Signal waves */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '6px',
                height: '6px',
                backgroundColor: 'rgb(239, 68, 68)',
                borderRadius: '50%',
                animation: 'blink 2s infinite',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '14px',
                height: '14px',
                border: '2px solid rgb(239, 68, 68)',
                borderRadius: '50%',
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '22px',
                height: '22px',
                border: '2px solid rgb(239, 68, 68)',
                borderRadius: '50%',
                opacity: 0.3,
              }}
            />
          </div>

          <Line smoke large bold style={{ margin: 0, flex: 1 }}>
            [LIVE EVENT FEED]
          </Line>

          {/* Live indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: 'rgb(239, 68, 68)',
                borderRadius: '50%',
                animation: 'blink 2s infinite',
              }}
            />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: 'rgb(239, 68, 68)',
                fontFamily: 'monospace',
              }}
            >
              LIVE
            </span>
          </div>
        </div>

        <Line cyan style={{ fontSize: '0.75rem' }}>
          Real-time intelligence from across the city
        </Line>
        <Divider />

        {/* Filter buttons */}
        {showFilters && (
          <>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '1rem',
                marginBottom: '1rem',
              }}
            >
              {filters.map((filter) => {
                const isSelected = selectedFilter === filter.id;
                const eventTypeColor = getEventColor(filter.id);

                return (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      backgroundColor: isSelected
                        ? (filter.id === 'ALL' ? 'rgba(79, 209, 197, 0.2)' : eventTypeColor.bg)
                        : 'rgba(51, 65, 85, 0.3)',
                      border: isSelected
                        ? `1px solid ${filter.id === 'ALL' ? 'rgb(79, 209, 197)' : eventTypeColor.text}`
                        : '1px solid rgb(71, 85, 105)',
                      borderRadius: '3px',
                      color: isSelected
                        ? (filter.id === 'ALL' ? 'rgb(79, 209, 197)' : eventTypeColor.text)
                        : 'rgb(148, 163, 184)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontFamily: 'monospace',
                    }}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
            <Divider />
          </>
        )}

        {/* Event feed */}
        <div
          style={{
            marginTop: '1rem',
            maxHeight: '500px',
            overflowY: 'auto',
            paddingRight: '0.5rem',
          }}
        >
          {displayEvents.length > 0 ? (
            displayEvents.map((event) => {
              const eventColor = getEventColor(event.type);

              return (
                <div
                  key={event.id}
                  style={{
                    marginBottom: '1rem',
                    padding: '0.75rem',
                    backgroundColor: eventColor.bg,
                    border: `1px solid ${eventColor.text}40`,
                    borderLeft: `3px solid ${eventColor.text}`,
                    borderRadius: '3px',
                  }}
                >
                  {/* Event header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        color: eventColor.text,
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                      }}
                    >
                      [{event.type.replace('_', ' ')}]
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: 'rgb(148, 163, 184)',
                        fontFamily: 'monospace',
                      }}
                    >
                      {event.timestamp}
                    </span>
                  </div>

                  {/* Event text */}
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgb(203, 213, 225)',
                      lineHeight: '1.5',
                    }}
                  >
                    {event.text}
                  </div>
                </div>
              );
            })
          ) : (
            <Line yellow>No events found for selected filter.</Line>
          )}
        </div>

        {/* Footer info */}
        <Divider />
        <Line smoke style={{ fontSize: '0.7rem', fontStyle: 'italic' }}>
          Displaying {displayEvents.length} of {EVENT_FEED.length} total events
        </Line>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
