export default function Message({
  title,
  subtitle, //  = "INTERNAL SYSTEMS",
  message, // "EMPLOYEE ACCESS GRANTED",
  note,
  children,
  theme = 'corporate',
}) {
  const themeConfig = {
    corporate: {
      borderColor: 'rgb(79, 209, 197)',
      headerBg: 'rgba(79, 209, 197, 0.1)',
      accentColor: 'rgb(79, 209, 197)',
    },
    casual: {
      borderColor: 'rgb(251, 191, 36)',
      headerBg: 'rgba(251, 191, 36, 0.1)',
      accentColor: 'rgb(251, 191, 36)',
    },
    secure: {
      borderColor: 'rgb(239, 68, 68)',
      headerBg: 'rgba(239, 68, 68, 0.1)',
      accentColor: 'rgb(239, 68, 68)',
    },
  };

  const config = themeConfig[theme];

  return (
    <div
      style={{
        border: `2px solid ${config.borderColor}`,
        borderRadius: '4px',
        backgroundColor: 'rgba(29, 35, 50, 0.3)',
        overflow: 'hidden',
        marginBottom: '1rem',
      }}
    >
      {/* Header section */}
      <div
        style={{
          backgroundColor: config.headerBg,
          padding: '1rem',
          borderBottom: `1px solid ${config.borderColor}`,
        }}
      >
        <div
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'rgb(148, 163, 184)',
            fontFamily: 'monospace',
            marginBottom: message ? '0.5rem' : '0',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {title}{subtitle && ` - ${subtitle}`}
        </div>
        {message && (
          <div
            style={{
              color: config.accentColor,
              fontSize: '0.875rem',
              fontWeight: 'bold',
              fontFamily: 'monospace',
            }}
          >
            {message}
          </div>
        )}
      </div>

      {Boolean(children) && (
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '1rem',
        }}>
          {children }
        </div>
      )}

      {note && (
        <div
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: 'rgba(51, 65, 85, 0.3)',
            borderTop: `1px solid rgba(${config.borderColor}, 0.3)`,
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              color: 'rgb(251, 191, 36)',
              fontFamily: 'monospace',
            }}
          >
            {note}
          </span>
        </div>
      )}
    </div>
  );
}
