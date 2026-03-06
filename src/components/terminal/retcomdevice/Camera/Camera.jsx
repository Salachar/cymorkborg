import { Line, Section, InsetBox, Spacer } from '@terminal/TerminalComponents';

export default function Camera({
  id = "",
  location = "Not Set",
  status = 'ACTIVE',
  recording = true,
  storage = 'Local server',
  timeline = [],
  lastService,
  cameraId,
  coverage,
  details = [],
  alerts = [],
  children,
}) {
  const displayId = cameraId || id;
  const isOnline = status === 'ACTIVE' || status === 'RECORDING' || status.includes('ACTIVE');

  const getStatusColor = () => {
    if (status.includes('ACTIVE') || status === 'RECORDING') return 'rgb(79, 209, 197)';
    if (status.includes('OFFLINE')) return 'rgb(252, 129, 129)';
    if (status.includes('MAINTENANCE')) return 'rgb(251, 191, 36)';
    return 'rgb(148, 163, 184)';
  };

  const statusColor = getStatusColor();

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          border: '2px solid rgb(77, 167, 188)',
          borderTop: '4px solid rgb(79, 209, 197)',
          borderRadius: '6px',
          padding: '1.25rem',
          backgroundColor: 'rgba(29, 35, 50, 0.4)',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', gap: '0.75rem' }}>

          {/* Left: animated icon + ID */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>

            {/* Camera icon — styled like TerminalHeader eye */}
            <div style={{ position: 'relative', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {/* Outer spinning ring */}
              <div style={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                border: '2px solid rgb(77, 167, 188)',
                borderRadius: '50%',
                animation: isOnline ? 'cam-spin 12s linear infinite' : 'none',
              }}>
                <div style={{ position: 'absolute', top: '-2px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '6px', backgroundColor: 'rgb(79, 209, 197)' }} />
                <div style={{ position: 'absolute', bottom: '-2px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '6px', backgroundColor: 'rgb(79, 209, 197)' }} />
                <div style={{ position: 'absolute', left: '-2px', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '2px', backgroundColor: 'rgb(79, 209, 197)' }} />
                <div style={{ position: 'absolute', right: '-2px', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '2px', backgroundColor: 'rgb(79, 209, 197)' }} />
              </div>
              {/* Inner lens */}
              <div style={{
                width: '20px',
                height: '20px',
                border: '2px solid rgb(79, 209, 197)',
                borderRadius: '50%',
                backgroundColor: 'rgba(79, 209, 197, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Pupil / recording dot */}
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: isOnline ? (recording ? 'rgb(252, 129, 129)' : 'rgb(79, 209, 197)') : 'rgb(148, 163, 184)',
                  borderRadius: '50%',
                  boxShadow: isOnline ? `0 0 8px ${recording ? 'rgb(252, 129, 129)' : 'rgb(79, 209, 197)'}` : 'none',
                  animation: isOnline && recording ? 'cam-blink 3s ease-in-out infinite' : 'none',
                }} />
              </div>
            </div>

            <div>
              <Line smoke large bold style={{ margin: 0 }}>
                {displayId.toUpperCase()}
              </Line>
              <Line cyan style={{ fontSize: '0.875rem', margin: 0, marginTop: '0.15rem' }}>
                {location}
              </Line>
            </div>
          </div>

          {/* Right: status badge only */}
          <div style={{
            padding: '0.35rem 0.75rem',
            backgroundColor: isOnline ? 'rgba(79, 209, 197, 0.15)' : 'rgba(252, 129, 129, 0.15)',
            border: `1px solid ${statusColor}`,
            borderRadius: '4px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexShrink: 0,
          }}>
            <div style={{
              width: '7px', height: '7px',
              backgroundColor: statusColor,
              borderRadius: '50%',
              animation: isOnline ? 'cam-pulse 2s infinite' : 'none',
            }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: statusColor, fontFamily: 'monospace', letterSpacing: '0.05em' }}>
              {status}
            </span>
          </div>
        </div>

        {/* Info bar — coverage + recording + maintenance merged */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: coverage ? '1fr auto' : '1fr',
          gap: '0.75rem',
          padding: '0.65rem 0.75rem',
          backgroundColor: 'rgba(79, 209, 197, 0.05)',
          border: '1px solid rgba(79, 209, 197, 0.15)',
          borderRadius: '4px',
          marginBottom: '0.75rem',
          alignItems: 'start',
        }}>
          {coverage && (
            <Line neon style={{ margin: 0, fontSize: '0.875rem' }}>{coverage}</Line>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textAlign: coverage ? 'right' : 'left' }}>
            <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: recording ? 'rgb(252, 129, 129)' : 'rgb(148, 163, 184)' }}>
              {recording ? `● REC — ${storage}` : `○ NOT RECORDING`}
            </span>
            {lastService && (
              <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'rgb(100, 116, 139)' }}>
                SVC: {lastService}
              </span>
            )}
          </div>
        </div>

        {/* Specs */}
        {details.length > 0 && (
          <Section title="SPECIFICATIONS">
            <div style={{ display: 'grid', gap: '0.4rem' }}>
              {details.map((detail, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.5rem', backgroundColor: 'rgba(79, 209, 197, 0.05)', borderLeft: '2px solid rgb(79, 209, 197)', borderRadius: '2px' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: 'rgb(79, 209, 197)', borderRadius: '50%', flexShrink: 0 }} />
                  <Line smoke style={{ margin: 0, fontSize: '0.875rem' }}>{detail}</Line>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Timeline */}
        {timeline.length > 0 && (
          <InsetBox title="FOOTAGE TIMELINE:">
            {timeline.map((event, i) => (
              <Line
                key={i}
                neon={!event.includes('LOST') && !event.includes('offline')}
                red={event.includes('LOST') || event.includes('offline') || event.includes('shattered')}
                yellow={event.includes('suspicious') || event.includes('⚠')}
              >
                {event}
              </Line>
            ))}
          </InsetBox>
        )}

        {/* Alerts */}
        {alerts.length > 0 && (
          <>
            <Spacer />
            <Section title="RECENT ACTIVITY">
              {alerts.map((alert, i) => (
                <div key={i} style={{
                  padding: '0.65rem 0.75rem',
                  marginBottom: i < alerts.length - 1 ? '0.4rem' : 0,
                  backgroundColor: 'rgba(251, 191, 36, 0.07)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  borderLeft: '3px solid rgb(251, 191, 36)',
                  borderRadius: '3px',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'baseline',
                }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'rgb(251, 191, 36)', fontFamily: 'monospace', flexShrink: 0 }}>{alert.time}</span>
                  <Line smoke style={{ margin: 0, fontSize: '0.875rem' }}>{alert.message}</Line>
                </div>
              ))}
            </Section>
          </>
        )}

        {Boolean(children) && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '6px', borderLeft: '3px solid rgb(250, 204, 21)' }}>
            {children}
          </div>
        )}
      </div>

      <style>{`
        @keyframes cam-blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.2; }
        }
        @keyframes cam-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 4px currentColor; }
          50% { opacity: 0.6; box-shadow: 0 0 8px currentColor; }
        }
        @keyframes cam-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
