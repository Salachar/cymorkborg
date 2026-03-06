import { useState, useEffect } from 'react';
import { Line, Divider, DataTable } from '@terminal/TerminalComponents';

export default function FacilityPortal({
  companyName,
  facilityId,
  tagline,
  location,
  owner,
  function: facilityFunction,
  personnel,
  networkStatus,
  securityLevel = 'MEDIUM',
  warnings = [],
  theme = 'corporate',
  children,
}) {
  const [signalStrength, setSignalStrength] = useState(3);

  // Theme configurations
  const themeConfig = {
    corporate: {
      primary: 'rgb(79, 209, 197)',
      secondary: 'rgb(133, 175, 231)',
      accent: 'rgb(251, 191, 36)',
      bg: 'rgba(29, 35, 50, 0.8)',
    },
    industrial: {
      primary: 'rgb(251, 191, 36)',
      secondary: 'rgb(148, 163, 184)',
      accent: 'rgb(251, 146, 60)',
      bg: 'rgba(45, 35, 25, 0.8)',
    },
    retail: {
      primary: 'rgb(168, 85, 247)',
      secondary: 'rgb(133, 175, 231)',
      accent: 'rgb(236, 72, 153)',
      bg: 'rgba(35, 25, 45, 0.8)',
    },
    secure: {
      primary: 'rgb(239, 68, 68)',
      secondary: 'rgb(148, 163, 184)',
      accent: 'rgb(251, 191, 36)',
      bg: 'rgba(40, 25, 25, 0.8)',
    },
  };

  const colors = themeConfig[theme];

  // Security level colors
  const getSecurityColor = () => {
    const levels = {
      'LOW': 'rgb(34, 197, 94)',
      'MEDIUM': 'rgb(251, 191, 36)',
      'HIGH': 'rgb(251, 146, 60)',
      'MAXIMUM': 'rgb(239, 68, 68)',
    };
    return levels[securityLevel] || 'rgb(148, 163, 184)';
  };

  // Signal strength fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(Math.floor(Math.random() * 2) + 2); // 2-3 bars
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        border: `2px solid ${colors.primary}`,
        borderRadius: '6px',
        backgroundColor: colors.bg,
        overflow: 'hidden',
        boxShadow: `0 0 20px ${colors.primary}40`,
      }}
    >
      {/* Header banner */}
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.primary}30 0%, ${colors.secondary}20 100%)`,
          borderBottom: `2px solid ${colors.primary}`,
          padding: '1.25rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated background lines */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `repeating-linear-gradient(
              90deg,
              ${colors.primary}10 0px,
              ${colors.primary}10 1px,
              transparent 1px,
              transparent 40px
            )`,
            animation: 'slide 20s linear infinite',
          }}
        />

        {/* Company name */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: colors.primary,
              fontFamily: 'monospace',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
              textShadow: `0 0 10px ${colors.primary}80`,
            }}
          >
            {companyName}
          </div>

          {facilityId && (
            <div
              style={{
                fontSize: '0.875rem',
                color: colors.secondary,
                fontFamily: 'monospace',
                marginBottom: '0.5rem',
              }}
            >
              FACILITY: {facilityId}
            </div>
          )}

          <div
            style={{
              fontSize: '0.875rem',
              color: colors.accent,
              fontFamily: 'monospace',
              fontStyle: 'italic',
            }}
          >
            {tagline}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div style={{ padding: '1rem' }}>
        <div
          style={{
            padding: '0.75rem',
            backgroundColor: `${colors.primary}10`,
            border: `1px solid ${colors.primary}`,
            borderRadius: '4px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Line cyan bold style={{ margin: 0, fontSize: '0.875rem' }}>
            NETWORK DETECTED
          </Line>

          {/* Signal strength indicator */}
          <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end' }}>
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                style={{
                  width: '6px',
                  height: `${bar * 5}px`,
                  backgroundColor: bar <= signalStrength ? colors.primary : 'rgba(100, 100, 100, 0.3)',
                  transition: 'background-color 0.3s',
                  boxShadow: bar <= signalStrength ? `0 0 6px ${colors.primary}` : 'none',
                }}
              />
            ))}
          </div>
        </div>

        <Divider color="cyan" />

        {/* Facility information grid */}
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <DataTable
            data={[
              { label: 'LOCATION', value: location },
              { label: 'OWNER', value: owner },
              { label: 'FUNCTION', value: facilityFunction },
              ...(personnel ? [{ label: 'PERSONNEL', value: personnel }] : []),
              { label: 'NETWORK', value: networkStatus },
            ]}
          />
        </div>

        <Divider color="cyan" />

        {/* Security status */}
        <div
          style={{
            padding: '0.75rem',
            backgroundColor: `${getSecurityColor()}15`,
            border: `1px solid ${getSecurityColor()}`,
            borderRadius: '4px',
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontSize: '0.7rem',
                color: colors.secondary,
                fontFamily: 'monospace',
              }}
            >
              SECURITY LEVEL:
            </span>
            <span
              style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: getSecurityColor(),
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
              }}
            >
              {securityLevel}
            </span>
          </div>
        </div>

        {/* Warnings */}
        {warnings.length > 0 && (
          <>
            <Divider color="yellow" />
            <div
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                border: '1px solid rgba(251, 191, 36, 0.4)',
                borderRadius: '4px',
              }}
            >
              {warnings.map((warning, i) => (
                <Line
                  key={i}
                  yellow
                  style={{
                    fontSize: '0.8rem',
                    margin: 0,
                    marginBottom: i < warnings.length - 1 ? '0.5rem' : 0,
                  }}
                >
                  {warning}
                </Line>
              ))}
            </div>
          </>
        )}

        {Boolean(children) && (
          <div style={{
            margin: '1rem 0',
          }}>
            {children }
          </div>
        )}

        {/* Footer */}
        <Divider color="cyan" />
        <div
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            fontSize: '0.7rem',
            color: colors.secondary,
            fontFamily: 'monospace',
            opacity: 0.7,
          }}
        >
          Authorized access only - All connections logged
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(40px); }
        }
      `}</style>
    </div>
  );
}
