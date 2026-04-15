export default function LiveCameraFeed({
  location = "Not Set",
}) {
  return (
    <div
      style={{
        border: '2px solid rgb(79, 209, 197)',
        borderRadius: '6px',
        backgroundColor: 'rgba(19, 23, 34, 0.95)',
        overflow: 'hidden',
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          backgroundColor: 'rgba(79, 209, 197, 0.15)',
          borderBottom: '1px solid rgb(79, 209, 197)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: 'rgb(252, 129, 129)',
              borderRadius: '50%',
              boxShadow: '0 0 8px rgba(252, 129, 129, 0.8)',
            }}
          />
          <span
            style={{
              fontSize: '0.875rem',
              fontWeight: 'bold',
              color: 'rgb(79, 209, 197)',
              fontFamily: 'monospace',
              letterSpacing: '0.05em',
            }}
          >
            LIVE FEED - {location.toUpperCase()}
          </span>
        </div>
      </div>

      {/* GM Note */}
      <div
        style={{
          padding: '2rem 1.5rem',
          backgroundColor: 'rgb(19, 23, 34)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(79, 209, 197, 0.3)',
        }}
      >
        <span
          style={{
            fontSize: '0.875rem',
            color: 'rgba(79, 209, 197, 0.6)',
            fontFamily: 'monospace',
            fontStyle: 'italic',
            textAlign: 'center',
            letterSpacing: '0.05em',
          }}
        >
          [ Ask the GM what your character sees ]
        </span>
      </div>

      {/* Status indicators */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem',
          padding: '1rem',
          backgroundColor: 'rgba(19, 23, 34, 0.8)',
          borderBottom: '1px solid rgba(79, 209, 197, 0.3)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', backgroundColor: 'rgba(79, 209, 197, 0.1)', border: '1px solid rgba(79, 209, 197, 0.3)', borderRadius: '3px' }}>
          <div style={{ width: '6px', height: '6px', backgroundColor: 'rgb(79, 209, 197)', borderRadius: '50%' }} />
          <span style={{ fontSize: '0.75rem', color: 'rgb(79, 209, 197)', fontFamily: 'monospace', fontWeight: 'bold' }}>MOTION: ACTIVE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', backgroundColor: 'rgba(79, 209, 197, 0.1)', border: '1px solid rgba(79, 209, 197, 0.3)', borderRadius: '3px' }}>
          <div style={{ width: '6px', height: '6px', backgroundColor: 'rgb(79, 209, 197)', borderRadius: '50%' }} />
          <span style={{ fontSize: '0.75rem', color: 'rgb(79, 209, 197)', fontFamily: 'monospace', fontWeight: 'bold' }}>SIGNAL: STRONG</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', backgroundColor: 'rgba(148, 163, 184, 0.1)', border: '1px solid rgba(148, 163, 184, 0.3)', borderRadius: '3px' }}>
          <div style={{ width: '6px', height: '6px', backgroundColor: 'rgb(148, 163, 184)', borderRadius: '50%' }} />
          <span style={{ fontSize: '0.75rem', color: 'rgb(148, 163, 184)', fontFamily: 'monospace', fontWeight: 'bold' }}>AUDIO: DISABLED</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', backgroundColor: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', borderRadius: '3px' }}>
          <div style={{ width: '6px', height: '6px', backgroundColor: 'rgb(251, 191, 36)', borderRadius: '50%' }} />
          <span style={{ fontSize: '0.75rem', color: 'rgb(251, 191, 36)', fontFamily: 'monospace', fontWeight: 'bold' }}>ENCRYPTION: NONE</span>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          backgroundColor: 'rgba(79, 209, 197, 0.1)',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'rgb(79, 209, 197)', fontFamily: 'monospace', fontWeight: 'bold' }}>CONNECTION STABLE</span>
        <span style={{ fontSize: '0.75rem', color: 'rgb(79, 209, 197)', fontFamily: 'monospace', fontWeight: 'bold' }}>UNDETECTED</span>
      </div>
    </div>
  );
}
