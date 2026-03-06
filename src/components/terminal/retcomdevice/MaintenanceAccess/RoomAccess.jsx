import { Line, Divider, InsetBox } from '@terminal/TerminalComponents';

/**
 * RoomAccess - Residential smart home room panel
 *
 * A styled header/shell for room entries. Cleaner than MaintenanceAccess,
 * more home-appropriate. Optional ambient stats give rooms personality
 * without requiring children to carry all the weight.
 *
 * Props:
 * - title:       String  — room name (e.g. "MASTER BEDROOM")
 * - network:     String  — network label shown above title (e.g. "JACKHAMMER_HOME")
 * - status:      String  — room state (OPERATIONAL | ACTIVE | OCCUPIED | EMPTY | etc.)
 * - stats:       Object  — optional ambient room data:
 *     - temp:       String  (e.g. "24°C")
 *     - noise:      String  (e.g. "HIGH" | "85 dB")
 *     - power:      String  (e.g. "HIGH" | "1.2 kW")
 *     - occupancy:  String  (e.g. "4 guests" | "EMPTY")
 * - children:    ReactNode
 *
 * Usage:
 *   <RoomAccess
 *     title="MASTER BEDROOM"
 *     network="JACKHAMMER_HOME"
 *     status="OPERATIONAL"
 *     stats={{ temp: "22°C", occupancy: "Empty", noise: "LOW" }}
 *   >
 *     <InsetBox title="ROOM FEATURES:">
 *       <Line cyan>Soundproofed walls</Line>
 *     </InsetBox>
 *   </RoomAccess>
 */
export default function RoomAccess({
  title = "ROOM",
  network = "SMART HOME",
  status = "OPERATIONAL",
  stats = {},
  children,
}) {
  const statusColors = {
    OPERATIONAL:          'rgb(34, 197, 94)',
    ACTIVE:               'rgb(34, 197, 94)',
    OCCUPIED:             'rgb(34, 197, 94)',
    MONITORING:           'rgb(34, 197, 94)',
    STANDBY:              'rgb(148, 163, 184)',
    EMPTY:                'rgb(100, 116, 139)',
    UNUSED:               'rgb(100, 116, 139)',
    STRUGGLING:           'rgb(251, 191, 36)',
    DEGRADED:             'rgb(251, 191, 36)',
    'HIGH TRAFFIC':       'rgb(251, 191, 36)',
    'PARTY MODE ACTIVE':  'rgb(167, 139, 250)',
    STEAMY:               'rgb(125, 211, 252)',
    ERROR:                'rgb(239, 68, 68)',
  };

  const statusColor = statusColors[status] || 'rgb(148, 163, 184)';
  const displayTitle = title.replace(/^\[|\]$/g, '');

  const statLabels = {
    temp:      'TEMP',
    noise:     'NOISE',
    power:     'POWER',
    occupancy: 'OCCUPANCY',
  };

  const statEntries = Object.entries(stats).filter(([, v]) => v != null && v !== '');

  return (
    <div
      style={{
        border: '1px solid rgba(148, 163, 184, 0.2)',
        borderRadius: '10px',
        backgroundColor: 'rgba(15, 23, 42, 0.45)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98))',
          padding: '0.9rem 1.15rem',
          borderBottom: statEntries.length > 0 || children
            ? '1px solid rgba(148, 163, 184, 0.1)'
            : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div>
          <div style={{
            color: 'rgba(148, 163, 184, 0.35)',
            fontSize: '0.58rem',
            letterSpacing: '0.22em',
            fontFamily: 'monospace',
            marginBottom: '0.25rem',
          }}>
            {network}
          </div>
          <div style={{
            color: 'rgb(226, 232, 240)',
            fontSize: '0.88rem',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            letterSpacing: '0.05em',
          }}>
            {displayTitle}
          </div>
        </div>

        {/* Status pill */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          backgroundColor: `${statusColor}12`,
          border: `1px solid ${statusColor}30`,
          borderRadius: '20px',
          padding: '0.2rem 0.7rem',
          flexShrink: 0,
        }}>
          <div style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            backgroundColor: statusColor,
            boxShadow: `0 0 5px ${statusColor}`,
          }} />
          <span style={{
            color: statusColor,
            fontSize: '0.6rem',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            letterSpacing: '0.1em',
          }}>
            {status}
          </span>
        </div>
      </div>

      {/* Ambient stats strip */}
      {statEntries.length > 0 && (
        <div style={{
          display: 'flex',
          borderBottom: children ? '1px solid rgba(148, 163, 184, 0.08)' : 'none',
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
        }}>
          {statEntries.map(([key, value], i) => (
            <div
              key={key}
              style={{
                flex: 1,
                padding: '0.5rem 1rem',
                borderRight: i < statEntries.length - 1
                  ? '1px solid rgba(148, 163, 184, 0.08)'
                  : 'none',
              }}
            >
              <div style={{
                color: 'rgba(148, 163, 184, 0.35)',
                fontSize: '0.55rem',
                letterSpacing: '0.18em',
                fontFamily: 'monospace',
                marginBottom: '0.15rem',
              }}>
                {statLabels[key] || key.toUpperCase()}
              </div>
              <div style={{
                color: 'rgb(148, 163, 184)',
                fontSize: '0.75rem',
                fontFamily: 'monospace',
                fontWeight: '500',
              }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Children */}
      {Boolean(children) && (
        <div style={{ padding: '0.9rem 1.15rem' }}>
          {children}
        </div>
      )}

    </div>
  );
}
