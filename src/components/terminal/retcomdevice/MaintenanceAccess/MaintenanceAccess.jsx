import { Line, Divider, DataTable } from '@terminal/TerminalComponents';

export default function MaintenanceAccess({
  title = "[MAINTENANCE INTERFACE]",
  deviceModel = "NOT SET BY ADMINISTRATOR",
  deviceId = "UNREGISTERED",
  firmwareVersion = "v2.4.1",
  systemStatus = "OPERATIONAL",
  uptime = "14 days, 7 hours",
  notes = [],
  children,
}) {
  // Status color mapping
  const statusColors = {
    OPERATIONAL: 'rgb(34, 197, 94)', // green
    DEGRADED: 'rgb(251, 191, 36)',    // yellow
    ERROR: 'rgb(239, 68, 68)',         // red
  };

  const statusColor = statusColors[systemStatus] || statusColors.OPERATIONAL;

  return (
    <div style={{ position: 'relative' }}>
      {/* Container with enterprise blue-gray styling */}
      <div
        style={{
          border: '2px solid rgb(100, 116, 139)',
          borderRadius: '4px',
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          overflow: 'hidden',
        }}
      >
        {/* Header bar - enterprise style */}
        <div
          style={{
            backgroundColor: 'rgb(51, 65, 85)',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid rgb(100, 116, 139)',
          }}
        >
          <Line smoke large bold style={{ margin: 0 }}>
            {title}
          </Line>
        </div>

        {/* Main content area */}
        <div style={{ padding: '1rem' }}>
          {/* System info section */}
          <div
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgb(71, 85, 105)',
              borderRadius: '3px',
              padding: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <Line cyan bold style={{ margin: 0, fontSize: '0.95rem' }}>
                SYSTEM INFORMATION
              </Line>

              {/* Status indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: statusColor,
                    boxShadow: `0 0 8px ${statusColor}`,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: statusColor,
                    fontFamily: 'monospace',
                  }}
                >
                  {systemStatus}
                </span>
              </div>
            </div>

            <Divider />

            <DataTable
              data={[
                { label: 'Device Model', value: deviceModel },
                ...(deviceId ? [{ label: 'Serial/ID', value: deviceId }] : []),
                { label: 'Firmware', value: firmwareVersion },
                ...(uptime ? [{ label: 'Uptime', value: uptime }] : []),
              ]}
            />
          </div>

          {notes.length > 0 && (
            <div
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgb(71, 85, 105)',
                borderRadius: '3px',
                padding: '0.75rem',
              }}
            >
              <Line cyan bold style={{ margin: 0, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                NOTES
              </Line>
              {notes.map((note, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginTop: '0.5rem',
                    paddingLeft: '0.5rem',
                    borderLeft: '2px solid rgb(251, 191, 36)',
                  }}
                >
                  <span style={{ color: 'rgb(251, 191, 36)', fontSize: '0.75rem', flexShrink: 0 }}>
                    •
                  </span>
                  <Line yellow style={{ margin: 0, fontSize: '0.875rem' }}>
                    {note}
                  </Line>
                </div>
              ))}
            </div>
          )}

          {Boolean(children) && (
            <div style={{
              margin: '1rem 0',
            }}>
              {children }
            </div>
          )}

          {/* Footer info */}
          <div style={{ marginTop: '1rem' }}>
            <Line yellow style={{ fontSize: '0.7rem' }}>
              ⚠ Authorized personnel only - All actions logged
            </Line>
          </div>
        </div>
      </div>
    </div>
  );
}
