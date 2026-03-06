import React from 'react';

export function CyCityCorpPortals() {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#0f0f0f', // Near black
      border: '3px solid #gold',
      borderImage: 'linear-gradient(90deg, #c9a961 0%, #ffffff 50%, #c9a961 100%) 1',
      borderRadius: '4px',
      padding: '1.75rem 2.5rem',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(201, 169, 97, 0.15)',
    }}>
      {/* Geometric pattern background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            #c9a961 20px,
            #c9a961 21px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            #c9a961 20px,
            #c9a961 21px
          )
        `,
        pointerEvents: 'none',
      }} />

      {/* Top premium bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #c9a961 30%, #ffffff 50%, #c9a961 70%, transparent)',
      }} />

      {/* Content - horizontal layout */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '2.5rem',
      }}>
        {/* Left - Corporate icon */}
        <div style={{ flexShrink: 0 }}>
          <CorporateIcon />
        </div>

        {/* Center - Main content */}
        <div style={{ flex: 1 }}>
          {/* Main title */}
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 900,
            background: 'linear-gradient(90deg, #c9a961, #ffffff, #c9a961)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.35rem',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            lineHeight: 1,
            textShadow: '0 2px 8px rgba(201, 169, 97, 0.3)',
          }}>
            CORPORATE PORTALS
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: '0.75rem',
            color: '#888',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            CY Major Corporation Public Interfaces
          </p>

          {/* Corp tier badges */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}>
            <TierBadge text="MEGACORPS" color="#c9a961" />
            <TierBadge text="HOLDINGS" color="#888" />
            <TierBadge text="SUBSIDIARIES" color="#666" />
          </div>
        </div>

        {/* Right - Power indicator */}
        <div style={{ flexShrink: 0 }}>
          <PowerIndicator />
        </div>
      </div>

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '20%',
        right: '20%',
        height: '2px',
        background: '#c9a961',
        opacity: 0.5,
      }} />

      {/* Side accent markers */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '4px',
        height: '60%',
        background: 'linear-gradient(180deg, transparent, #c9a961, transparent)',
      }} />
      <div style={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '4px',
        height: '60%',
        background: 'linear-gradient(180deg, transparent, #c9a961, transparent)',
      }} />

      {/* Corner brackets */}
      <CorpBracket style={{ top: '10px', left: '10px' }} />
      <CorpBracket style={{ top: '10px', right: '10px', transform: 'scaleX(-1)' }} />
      <CorpBracket style={{ bottom: '10px', left: '10px', transform: 'scaleY(-1)' }} />
      <CorpBracket style={{ bottom: '10px', right: '10px', transform: 'scale(-1)' }} />
    </div>
  );
}

// Corporate tower/building icon
function CorporateIcon() {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" style={{
      filter: 'drop-shadow(0 2px 6px rgba(201, 169, 97, 0.4))',
    }}>
      {/* Base platform */}
      <rect x="10" y="58" width="50" height="3" fill="#c9a961" opacity="0.5" />

      {/* Three towers representing major corps */}
      {/* Left tower */}
      <rect x="12" y="35" width="12" height="23" fill="#c9a961" opacity="0.7" />
      <rect x="14" y="37" width="2" height="2" fill="#0f0f0f" />
      <rect x="18" y="37" width="2" height="2" fill="#0f0f0f" />
      <rect x="14" y="41" width="2" height="2" fill="#0f0f0f" />
      <rect x="18" y="41" width="2" height="2" fill="#0f0f0f" />
      <rect x="14" y="45" width="2" height="2" fill="#0f0f0f" />
      <rect x="18" y="45" width="2" height="2" fill="#0f0f0f" />
      <rect x="14" y="49" width="2" height="2" fill="#0f0f0f" />
      <rect x="18" y="49" width="2" height="2" fill="#0f0f0f" />
      <rect x="14" y="53" width="2" height="2" fill="#0f0f0f" />
      <rect x="18" y="53" width="2" height="2" fill="#0f0f0f" />

      {/* Center tower (tallest - dominance) */}
      <rect x="29" y="18" width="12" height="40" fill="#ffffff" opacity="0.9" />
      <rect x="31" y="20" width="2" height="2" fill="#0f0f0f" />
      <rect x="35" y="20" width="2" height="2" fill="#0f0f0f" />
      <rect x="31" y="24" width="2" height="2" fill="#0f0f0f" />
      <rect x="35" y="24" width="2" height="2" fill="#0f0f0f" />
      <rect x="31" y="28" width="2" height="2" fill="#0f0f0f" />
      <rect x="35" y="28" width="2" height="2" fill="#0f0f0f" />
      <rect x="31" y="32" width="2" height="2" fill="#0f0f0f" />
      <rect x="35" y="32" width="2" height="2" fill="#0f0f0f" />
      <rect x="31" y="36" width="2" height="2" fill="#0f0f0f" />
      <rect x="35" y="36" width="2" height="2" fill="#0f0f0f" />
      <rect x="31" y="40" width="2" height="2" fill="#0f0f0f" />
      <rect x="35" y="40" width="2" height="2" fill="#0f0f0f" />
      <rect x="31" y="44" width="2" height="2" fill="#0f0f0f" />
      <rect x="35" y="44" width="2" height="2" fill="#0f0f0f" />
      <rect x="31" y="48" width="2" height="2" fill="#0f0f0f" />
      <rect x="35" y="48" width="2" height="2" fill="#0f0f0f" />
      <rect x="31" y="52" width="2" height="2" fill="#0f0f0f" />
      <rect x="35" y="52" width="2" height="2" fill="#0f0f0f" />

      {/* Spire on center */}
      <rect x="34" y="13" width="2" height="5" fill="#c9a961" />
      <polygon points="35,8 33,13 37,13" fill="#c9a961" />

      {/* Right tower */}
      <rect x="46" y="38" width="12" height="20" fill="#c9a961" opacity="0.7" />
      <rect x="48" y="40" width="2" height="2" fill="#0f0f0f" />
      <rect x="52" y="40" width="2" height="2" fill="#0f0f0f" />
      <rect x="48" y="44" width="2" height="2" fill="#0f0f0f" />
      <rect x="52" y="44" width="2" height="2" fill="#0f0f0f" />
      <rect x="48" y="48" width="2" height="2" fill="#0f0f0f" />
      <rect x="52" y="48" width="2" height="2" fill="#0f0f0f" />
      <rect x="48" y="52" width="2" height="2" fill="#0f0f0f" />
      <rect x="52" y="52" width="2" height="2" fill="#0f0f0f" />

      {/* Connection lines (corporate network) */}
      <line x1="24" y1="46" x2="29" y2="38" stroke="#c9a961" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
      <line x1="41" y1="38" x2="46" y2="48" stroke="#c9a961" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
    </svg>
  );
}

// Power/influence indicator
function PowerIndicator() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
    }}>
      {/* Hexagonal indicator */}
      <div style={{
        width: '45px',
        height: '45px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Hexagon border */}
        <svg width="45" height="45" viewBox="0 0 45 45" style={{
          position: 'absolute',
        }}>
          <polygon
            points="22.5,2 38,12 38,32 22.5,42 7,32 7,12"
            fill="none"
            stroke="#c9a961"
            strokeWidth="2.5"
          />
          <polygon
            points="22.5,8 33,15 33,29 22.5,36 12,29 12,15"
            fill="none"
            stroke="#c9a961"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>

        {/* Center symbol */}
        <div style={{
          width: '16px',
          height: '16px',
          position: 'relative',
        }}>
          {/* Power symbol */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '10px',
            height: '10px',
            backgroundColor: '#c9a961',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }} />
        </div>
      </div>

      {/* Status bars */}
      <div style={{
        display: 'flex',
        gap: '3px',
      }}>
        {[1, 2, 3, 4, 5].map((bar) => (
          <div
            key={bar}
            style={{
              width: '4px',
              height: bar <= 4 ? `${bar * 3 + 4}px` : '16px',
              backgroundColor: bar <= 4 ? '#c9a961' : '#333',
              opacity: bar <= 4 ? 1 : 0.3,
            }}
          />
        ))}
      </div>

      {/* Label */}
      <div style={{
        fontSize: '0.5rem',
        color: '#c9a961',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
      }}>
        ACCESS
      </div>
    </div>
  );
}

// Tier badge
function TierBadge({ text, color }) {
  return (
    <div style={{
      padding: '0.25rem 0.65rem',
      border: `1px solid ${color}`,
      borderRadius: '2px',
      fontSize: '0.625rem',
      color: color,
      letterSpacing: '1px',
      fontWeight: 'bold',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }}>
      {text}
    </div>
  );
}

// Corner bracket
function CorpBracket({ style }) {
  return (
    <div style={{
      position: 'absolute',
      width: '25px',
      height: '25px',
      ...style,
    }}>
      {/* Outer L */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: '#c9a961',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '2px',
        height: '100%',
        backgroundColor: '#c9a961',
      }} />

      {/* Inner accent */}
      <div style={{
        position: 'absolute',
        top: '5px',
        left: '5px',
        width: '12px',
        height: '1px',
        backgroundColor: '#c9a961',
        opacity: 0.5,
      }} />
      <div style={{
        position: 'absolute',
        top: '5px',
        left: '5px',
        width: '1px',
        height: '12px',
        backgroundColor: '#c9a961',
        opacity: 0.5,
      }} />
    </div>
  );
}

// ============================================================================
// Alternative: Compact version
// ============================================================================

export function CyCityCorporatePortalsCompact() {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#0f0f0f',
      border: '2px solid #c9a961',
      borderRadius: '3px',
      padding: '1rem 2rem',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem',
    }}>
      {/* Left accent */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '3px',
        background: 'linear-gradient(180deg, transparent, #c9a961, transparent)',
      }} />

      {/* Icon */}
      <div style={{ flexShrink: 0 }}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="8" y="20" width="6" height="15" fill="#c9a961" opacity="0.7" />
          <rect x="17" y="10" width="6" height="25" fill="#ffffff" opacity="0.9" />
          <polygon points="20,5 18,10 22,10" fill="#c9a961" />
          <rect x="26" y="22" width="6" height="13" fill="#c9a961" opacity="0.7" />
        </svg>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          background: 'linear-gradient(90deg, #c9a961, #ffffff, #c9a961)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '0.25rem',
          lineHeight: 1,
        }}>
          CORPORATE PORTALS
        </h3>
        <p style={{
          fontSize: '0.625rem',
          color: '#888',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}>
          Major Corporation Public Interfaces
        </p>
      </div>

      {/* Status */}
      <div style={{
        flexShrink: 0,
        display: 'flex',
        gap: '2px',
      }}>
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            style={{
              width: '3px',
              height: `${bar * 3 + 6}px`,
              backgroundColor: '#c9a961',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CyCityCorpPortals;
