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
  const statusColors = {
    OPERATIONAL: 'rgb(34, 197, 94)',
    DEGRADED: 'rgb(251, 191, 36)',
    ERROR: 'rgb(239, 68, 68)',
  };

  const statusColor = statusColors[systemStatus] || statusColors.OPERATIONAL;

  return (
    <div style={{ position: 'relative' }}>
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
            borderBottom: '1px solid rgb(100, 116, 139)',
          }}
          className="px-3 py-2 md:px-4 md:py-3"
        >
          <Line smoke bold className="text-sm md:text-base" style={{ margin: 0 }}>
            {title}
          </Line>
        </div>

        {/* Main content */}
        <div className="p-2 md:p-4">

          {/* System info */}
          <div
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgb(71, 85, 105)',
              borderRadius: '3px',
            }}
            className="p-2 md:p-3 mb-3"
          >
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <Line cyan bold className="text-xs md:text-sm" style={{ margin: 0 }}>
                SYSTEM INFORMATION
              </Line>
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: '8px', height: '8px',
                    borderRadius: '50%',
                    backgroundColor: statusColor,
                    boxShadow: `0 0 8px ${statusColor}`,
                    flexShrink: 0,
                  }}
                />
                <span className="text-xs font-bold font-mono" style={{ color: statusColor }}>
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

          {/* Notes */}
          {notes.length > 0 && (
            <div
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgb(71, 85, 105)',
                borderRadius: '3px',
              }}
              className="p-2 md:p-3 mb-3"
            >
              <Line cyan bold className="text-xs md:text-sm" style={{ margin: 0, marginBottom: '0.5rem' }}>
                NOTES
              </Line>
              {notes.map((note, i) => (
                <div
                  key={i}
                  className="flex gap-2 mt-2 pl-2"
                  style={{ borderLeft: '2px solid rgb(251, 191, 36)' }}
                >
                  <span className="text-xs shrink-0" style={{ color: 'rgb(251, 191, 36)' }}>•</span>
                  <Line yellow className="text-xs md:text-sm" style={{ margin: 0 }}>
                    {note}
                  </Line>
                </div>
              ))}
            </div>
          )}

          {Boolean(children) && (
            <div className="my-3">
              {children}
            </div>
          )}

          {/* Footer */}
          <div className="mt-3">
            <Line yellow className="text-xs" style={{ opacity: 0.7 }}>
              ⚠ Authorized personnel only - All actions logged
            </Line>
          </div>
        </div>
      </div>
    </div>
  );
}
