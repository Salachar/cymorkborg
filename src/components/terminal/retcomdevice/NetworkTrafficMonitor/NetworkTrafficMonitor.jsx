import { Line, Divider, DataTable, Section } from '@terminal/TerminalComponents';

export default function NetworkTrafficMonitor({
  id,
  systemName = "NETWORK TRAFFIC MONITOR",
  location,
  bandwidth = "N/A",
  activeConnections = 0,
  transfers = [],
}) {
  // Count transfers by status
  const activeTransfers = transfers.filter(t => t.status === 'ACTIVE').length;
  const completedTransfers = transfers.filter(t => t.status === 'COMPLETE').length;
  const failedTransfers = transfers.filter(t => t.status === 'FAILED').length;

  return (
    <div style={{ position: 'relative' }}>
      {/* Main container */}
      <div
        style={{
          border: '2px solid rgb(79, 209, 197)',
          borderRadius: '4px',
          padding: '1rem',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          position: 'relative',
        }}
      >
        {/* Header with network icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {/* CSS Network/Data Transfer Icon */}
          <div style={{ position: 'relative', width: '24px', height: '20px', flexShrink: 0 }}>
            {/* Server/terminal boxes */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '8px',
                height: '8px',
                border: '2px solid rgb(79, 209, 197)',
                borderRadius: '2px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '8px',
                height: '8px',
                border: '2px solid rgb(79, 209, 197)',
                borderRadius: '2px',
              }}
            />
            {/* Connection lines */}
            <div
              style={{
                position: 'absolute',
                top: '4px',
                left: '8px',
                width: '8px',
                height: '1px',
                backgroundColor: 'rgb(79, 209, 197)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '4px',
                left: '8px',
                width: '8px',
                height: '1px',
                backgroundColor: 'rgb(79, 209, 197)',
              }}
            />
            {/* Data packet indicators */}
            <div
              style={{
                position: 'absolute',
                top: '2px',
                left: '10px',
                width: '3px',
                height: '3px',
                backgroundColor: 'rgb(0, 170, 40)',
                borderRadius: '50%',
                animation: 'pulse 2s infinite',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '2px',
                left: '12px',
                width: '3px',
                height: '3px',
                backgroundColor: 'rgb(250, 204, 21)',
                borderRadius: '50%',
                animation: 'pulse 2s infinite 0.5s',
              }}
            />
          </div>

          <Line smoke large bold style={{ margin: 0, flex: 1 }}>
            [{systemName}]
          </Line>

          {/* Active indicator */}
          {activeTransfers > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'rgb(0, 170, 40)',
                  borderRadius: '50%',
                  animation: 'blink 1.5s infinite',
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  color: 'rgb(0, 170, 40)',
                  fontFamily: 'monospace',
                }}
              >
                ACTIVE
              </span>
            </div>
          )}
        </div>

        <Line cyan>{location}</Line>
        <Divider />

        {/* Network stats */}
        <DataTable
          data={[
            { label: 'Bandwidth Usage', value: bandwidth },
            { label: 'Active Connections', value: activeConnections.toString() },
            { label: 'Active Transfers', value: activeTransfers.toString() },
            { label: 'Completed (24h)', value: completedTransfers.toString() },
            { label: 'Failed (24h)', value: failedTransfers.toString() },
          ]}
        />

        {/* Transfer logs */}
        {transfers.length > 0 && (
          <>
            <Divider />
            <Section title="DATA TRANSFER LOG:" color="cyan">
              {transfers.map((transfer, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: '1rem',
                    padding: '0.75rem',
                    backgroundColor:
                      transfer.status === 'ACTIVE'
                        ? 'rgba(0, 170, 40, 0.1)'
                        : transfer.status === 'COMPLETE'
                        ? 'rgba(79, 209, 197, 0.05)'
                        : transfer.status === 'QUEUED'
                        ? 'rgba(250, 204, 21, 0.1)'
                        : 'rgba(239, 68, 68, 0.1)',
                    border: `1px solid ${
                      transfer.status === 'ACTIVE'
                        ? 'rgba(0, 170, 40, 0.3)'
                        : transfer.status === 'COMPLETE'
                        ? 'rgba(79, 209, 197, 0.2)'
                        : transfer.status === 'QUEUED'
                        ? 'rgba(250, 204, 21, 0.3)'
                        : 'rgba(239, 68, 68, 0.3)'
                    }`,
                    borderRadius: '3px',
                    position: 'relative',
                  }}
                >
                  {/* Timestamp and status */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Line smoke bold>
                      {transfer.timestamp}
                    </Line>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color:
                          transfer.status === 'ACTIVE'
                            ? 'rgb(0, 170, 40)'
                            : transfer.status === 'COMPLETE'
                            ? 'rgb(79, 209, 197)'
                            : transfer.status === 'QUEUED'
                            ? 'rgb(250, 204, 21)'
                            : 'rgb(239, 68, 68)',
                        fontFamily: 'monospace',
                      }}
                    >
                      [{transfer.status}]
                    </span>
                  </div>

                  {/* Filename (encrypted/obscured) */}
                  <Line yellow style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                    {`>>`} {transfer.filename}
                  </Line>

                  {/* Transfer details */}
                  <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                    <Line smoke>Size: {transfer.size}</Line>
                    {transfer.source && <Line smoke>Source: {transfer.source}</Line>}
                    <Line cyan>Destination: {transfer.destination}</Line>
                    {transfer.protocol && (
                      <Line neon={transfer.protocol.includes('ENCRYPTED')}>Protocol: {transfer.protocol}</Line>
                    )}
                  </div>

                  {/* Progress bar for active transfers */}
                  {transfer.status === 'ACTIVE' && transfer.progress !== undefined && (
                    <div style={{ marginTop: '0.75rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: '0.25rem',
                        }}
                      >
                        <span style={{ fontSize: '0.75rem', color: 'rgb(148, 163, 184)' }}>Progress:</span>
                        <span style={{ fontSize: '0.75rem', color: 'rgb(0, 170, 40)', fontWeight: 'bold' }}>
                          {transfer.progress}%
                        </span>
                      </div>
                      <div
                        style={{
                          width: '100%',
                          height: '8px',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          borderRadius: '4px',
                          overflow: 'hidden',
                          border: '1px solid rgba(0, 170, 40, 0.3)',
                        }}
                      >
                        <div
                          style={{
                            width: `${transfer.progress}%`,
                            height: '100%',
                            backgroundColor: 'rgb(0, 170, 40)',
                            transition: 'width 0.3s',
                            animation: transfer.progress < 100 ? 'progressPulse 1.5s infinite' : 'none',
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Notes about unusual characteristics */}
                  {transfer.notes && (
                    <Line
                      red={transfer.notes.includes('ALERT') || transfer.notes.includes('UNAUTHORIZED')}
                      yellow={
                        !transfer.notes.includes('ALERT') &&
                        !transfer.notes.includes('UNAUTHORIZED') &&
                        (transfer.notes.includes('UNUSUAL') || transfer.notes.includes('LARGE'))
                      }
                      cyan={
                        !transfer.notes.includes('ALERT') &&
                        !transfer.notes.includes('UNAUTHORIZED') &&
                        !transfer.notes.includes('UNUSUAL') &&
                        !transfer.notes.includes('LARGE')
                      }
                      style={{ fontSize: '0.875rem', marginTop: '0.5rem', fontStyle: 'italic' }}
                    >
                      Notes: {transfer.notes}
                    </Line>
                  )}
                </div>
              ))}
            </Section>
          </>
        )}

        {transfers.length === 0 && (
          <>
            <Divider />
            <Line yellow>No recent data transfers detected.</Line>
          </>
        )}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        @keyframes progressPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
