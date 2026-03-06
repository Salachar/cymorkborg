import { Line, Divider } from '@terminal/TerminalComponents';

/**
 * NetworkDevices - Shows connected devices on local network
 *
 * Props:
 * - networkName: String (e.g., "TOWER_INTERNAL")
 * - devices: Array of device objects
 *   - name: String
 *   - ip: String
 *   - type: String
 *   - status: String ("ONLINE" | "OFFLINE" | "STANDBY")
 *   - lastSeen: String (optional)
 */
export default function NetworkDevices({
  networkName = "LOCAL_NETWORK",
  devices = [],
}) {
  const statusColors = {
    ONLINE:  'rgb(34, 197, 94)',
    STANDBY: 'rgb(251, 191, 36)',
    OFFLINE: 'rgb(100, 116, 139)',
  };

  return (
    <div
      style={{
        border: '2px solid rgb(100, 116, 139)',
        borderRadius: '4px',
        backgroundColor: 'rgba(30, 41, 59, 0.5)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: 'rgb(51, 65, 85)',
          padding: '0.75rem 1rem',
          borderBottom: '1px solid rgb(100, 116, 139)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Line smoke large bold style={{ margin: 0 }}>
          [NETWORK DEVICES — {networkName}]
        </Line>
        <span style={{
          color: 'rgb(100, 116, 139)',
          fontSize: '0.7rem',
          fontFamily: 'monospace',
        }}>
          {devices.length} devices
        </span>
      </div>

      {/* Device list */}
      {devices.length === 0 ? (
        <div style={{ padding: '1.5rem 1rem', textAlign: 'center' }}>
          <Line smoke style={{ fontStyle: 'italic' }}>No devices detected</Line>
        </div>
      ) : (
        <div style={{ padding: '0.5rem 0' }}>
          {devices.map((device, idx) => {
            const {
              name = "Unknown",
              ip = "",
              type = "",
              status = "ONLINE",
              lastSeen = "Active",
            } = device;

            const statusColor = statusColors[status] || statusColors.OFFLINE;
            const isLast = idx === devices.length - 1;

            return (
              <div key={idx}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto auto',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.4rem 1rem',
                  }}
                >
                  {/* Name + meta */}
                  <div>
                    <span style={{
                      color: 'rgb(148, 163, 184)',
                      fontSize: '0.8rem',
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                    }}>
                      {name}
                    </span>
                    {(ip || type) && (
                      <span style={{
                        color: 'rgb(78, 130, 106)',
                        fontSize: '0.7rem',
                        fontFamily: 'monospace',
                        marginLeft: '0.5rem',
                      }}>
                        {[ip, type].filter(Boolean).join(' · ')}
                      </span>
                    )}
                  </div>

                  {/* Last seen */}
                  {lastSeen && (
                    <span style={{
                      color: 'rgb(78, 130, 106)',
                      fontSize: '0.65rem',
                      fontFamily: 'monospace',
                      whiteSpace: 'nowrap',
                    }}>
                      {lastSeen}
                    </span>
                  )}

                  {/* Status dot */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <div style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: statusColor,
                      boxShadow: `0 0 4px ${statusColor}`,
                      flexShrink: 0,
                    }} />
                    <span style={{
                      color: statusColor,
                      fontSize: '0.65rem',
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                    }}>
                      {status}
                    </span>
                  </div>
                </div>

                {!isLast && (
                  <div style={{
                    borderBottom: '1px solid rgba(71, 85, 105, 0.3)',
                    margin: '0 1rem',
                  }} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
