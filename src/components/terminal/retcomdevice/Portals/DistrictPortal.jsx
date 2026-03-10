import React from 'react';
import { Line, Spacer } from '@terminal/TerminalComponents';

export default function DistrictPortal({
  districtName,
  districtId,
  tagline,
  region,
  population,
  corporatePresence,
  crimeThreat = 'MEDIUM',
  securityResponse = 'STANDARD',
  accessPoints = [],
  warnings = [],
  atmosphere,
  theme = 'district',
  children,
}) {
  // Theme configurations for different district types
  const themeConfig = {
    district: {
      primary: 'rgb(79, 209, 197)',
      secondary: 'rgb(133, 175, 231)',
      accent: 'rgb(251, 191, 36)',
      bg: 'rgba(20, 25, 35, 0.85)',
      glow: 'rgba(79, 209, 197, 0.3)',
    },
    slums: {
      primary: 'rgb(251, 146, 60)',
      secondary: 'rgb(239, 68, 68)',
      accent: 'rgb(251, 191, 36)',
      bg: 'rgba(25, 20, 20, 0.85)',
      glow: 'rgba(251, 146, 60, 0.3)',
    },
    corporate: {
      primary: 'rgb(79, 209, 197)',
      secondary: 'rgb(168, 85, 247)',
      accent: 'rgb(236, 72, 153)',
      bg: 'rgba(20, 25, 35, 0.85)',
      glow: 'rgba(79, 209, 197, 0.3)',
    },
    industrial: {
      primary: 'rgb(251, 191, 36)',
      secondary: 'rgb(148, 163, 184)',
      accent: 'rgb(251, 146, 60)',
      bg: 'rgba(30, 25, 20, 0.85)',
      glow: 'rgba(251, 191, 36, 0.3)',
    },
  };

  const colors = themeConfig[theme] || themeConfig.district;

  // Threat level colors
  const getThreatColor = () => {
    const levels = {
      'LOW': 'rgb(34, 197, 94)',
      'MEDIUM': 'rgb(251, 191, 36)',
      'HIGH': 'rgb(251, 146, 60)',
      'EXTREME': 'rgb(239, 68, 68)',
      'CRITICAL': 'rgb(220, 38, 38)',
    };
    return levels[crimeThreat] || 'rgb(251, 191, 36)';
  };

  return (
    <div
      style={{
        border: `3px solid ${colors.primary}`,
        borderRadius: '8px',
        backgroundColor: colors.bg,
        overflow: 'hidden',
        boxShadow: `0 0 30px ${colors.glow}, inset 0 0 20px rgba(0, 0, 0, 0.5)`,
        position: 'relative',
      }}
    >
      {/* Header banner with grid pattern */}
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.primary}40 0%, ${colors.secondary}30 100%)`,
          borderBottom: `3px solid ${colors.primary}`,
          padding: 'clamp(0.75rem, 3vw, 1.5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(${colors.primary}15 1px, transparent 1px),
              linear-gradient(90deg, ${colors.primary}15 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            opacity: 0.3,
          }}
        />

        {/* District header */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontSize: '0.75rem',
              color: colors.secondary,
              fontFamily: 'monospace',
              letterSpacing: '0.2em',
              marginBottom: '0.5rem',
            }}
          >
            CY CITY DISTRICT ACCESS
          </div>

          <div
            style={{
              fontSize: 'clamp(1.1rem, 5vw, 2rem)',
              fontWeight: 'bold',
              color: colors.primary,
              fontFamily: 'monospace',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
              textShadow: `0 0 15px ${colors.primary}, 0 0 30px ${colors.primary}60`,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>▂▃▅▇</span>
            <span>{districtName}</span>
            <span>▇▅▃▂</span>
          </div>

          {districtId && (
            <div
              style={{
                fontSize: '0.875rem',
                color: colors.secondary,
                fontFamily: 'monospace',
                marginBottom: '0.5rem',
                opacity: 0.8,
              }}
            >
              ID: {districtId}
            </div>
          )}

          <div
            style={{
              fontSize: '1rem',
              color: colors.accent,
              fontFamily: 'monospace',
              fontStyle: 'italic',
            }}
          >
            "{tagline}"
          </div>
        </div>
      </div>

      {/* Content area */}
      <div style={{ padding: 'clamp(0.75rem, 3vw, 1.5rem)' }}>
        {/* District info grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {/* Region info */}
          <div
            style={{
              padding: '0.75rem',
              backgroundColor: `${colors.primary}10`,
              border: `1px solid ${colors.primary}40`,
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                fontSize: '0.7rem',
                color: colors.secondary,
                opacity: 0.8,
              }}
            >
              REGION
            </div>
            <div
              style={{
                fontSize: '1rem',
                color: colors.primary,
                fontWeight: 'bold',
                fontFamily: 'monospace',
              }}
            >
              {region}
            </div>
          </div>

          {/* Population */}
          {population && (
            <div
              style={{
                padding: '0.75rem',
                backgroundColor: `${colors.primary}10`,
                border: `1px solid ${colors.primary}40`,
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  fontSize: '0.7rem',
                  color: colors.secondary,
                  opacity: 0.8,
                }}
              >
                POPULATION
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  color: colors.primary,
                  fontWeight: 'bold',
                  fontFamily: 'monospace',
                }}
              >
                {population}
              </div>
            </div>
          )}

          {/* Corporate presence */}
          {corporatePresence && (
            <div
              style={{
                padding: '0.75rem',
                backgroundColor: `${colors.primary}10`,
                border: `1px solid ${colors.primary}40`,
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  fontSize: '0.7rem',
                  color: colors.secondary,
                  opacity: 0.8,
                }}
              >
                CORPORATE
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  color: colors.primary,
                  fontWeight: 'bold',
                  fontFamily: 'monospace',
                }}
              >
                {corporatePresence}
              </div>
            </div>
          )}
        </div>

        <Spacer />

        {/* Threat assessment */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
          }}
        >
          <div
            style={{
              padding: '0.75rem',
              backgroundColor: `${getThreatColor()}15`,
              border: `2px solid ${getThreatColor()}`,
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                fontSize: '0.7rem',
                color: colors.secondary,
              }}
            >
              THREAT LEVEL
            </div>
            <div
              style={{
                fontSize: 'clamp(0.875rem, 3vw, 1rem)',
                fontWeight: 'bold',
                color: getThreatColor(),
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
              }}
            >
              {crimeThreat}
            </div>
          </div>

          <div
            style={{
              padding: '0.75rem',
              backgroundColor: `${colors.accent}15`,
              border: `2px solid ${colors.accent}`,
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                fontSize: '0.7rem',
                color: colors.secondary,
              }}
            >
              SECURITY
            </div>
            <div
              style={{
                fontSize: 'clamp(0.875rem, 3vw, 1rem)',
                fontWeight: 'bold',
                color: colors.accent,
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
              }}
            >
              {securityResponse}
            </div>
          </div>
        </div>

        <Spacer />

        {/* Atmosphere */}
        {atmosphere && (
          <>
            <Spacer />
            <Line
              cyan
              bold
              style={{
                margin: 0,
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
              }}
            >
              DISTRICT ATMOSPHERE:
            </Line>
            <div
              style={{
                padding: '0.75rem',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                border: `1px solid ${colors.secondary}40`,
                borderLeft: `3px solid ${colors.accent}`,
                borderRadius: '3px',
              }}
            >
              <Line
                style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: colors.secondary,
                  fontStyle: 'italic',
                }}
              >
                {atmosphere}
              </Line>
            </div>
          </>
        )}

        {/* Warnings */}
        {warnings.length > 0 && (
          <>
            <Spacer />
            <div
              style={{
                padding: '0.75rem',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '2px solid rgba(239, 68, 68, 0.4)',
                borderRadius: '4px',
              }}
            >
              <Line
                red
                bold
                style={{
                  margin: 0,
                  marginBottom: '0.5rem',
                  fontSize: '0.875rem',
                }}
              >
                ⚠ DISTRICT WARNINGS:
              </Line>
              {warnings.map((warning, i) => (
                <Line
                  key={i}
                  yellow
                  style={{
                    fontSize: '0.8rem',
                    margin: 0,
                    marginBottom: i < warnings.length - 1 ? '0.35rem' : 0,
                    paddingLeft: '1rem',
                  }}
                >
                  • {warning}
                </Line>
              ))}
            </div>
          </>
        )}

        {/* Access points */}
        {accessPoints.length > 0 && (
          <>
            <Spacer />
            <Line
              neon
              bold
              style={{
                margin: 0,
                marginBottom: '0.75rem',
                fontSize: '1rem',
                textShadow: `0 0 10px ${colors.primary}`,
              }}
            >
              AVAILABLE ACCESS POINTS:
            </Line>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {accessPoints.map((point, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: `${colors.primary}10`,
                    border: `1px solid ${colors.primary}`,
                    borderLeft: `4px solid ${colors.accent}`,
                    borderRadius: '3px',
                    transition: 'all 0.2s',
                  }}
                >
                  <Line
                    neon
                    style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                    }}
                  >
                    ▸ {point}
                  </Line>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Children content */}
        {Boolean(children) && (
          <>
            {children}
          </>
        )}

        {/* Footer */}
        <Spacer />
        <div
          style={{
            textAlign: 'center',
            fontSize: '0.7rem',
            color: colors.secondary,
            fontFamily: 'monospace',
            opacity: 0.6,
          }}
        >
          CY_NET DISTRICT PORTAL v2.4.1 | All transmissions monitored
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes district-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
