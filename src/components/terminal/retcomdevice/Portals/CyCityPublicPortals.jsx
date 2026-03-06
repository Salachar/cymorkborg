import React from 'react';

export function CyCityPublicPortals() {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#0a0e27', // Deep navy/black
      border: '3px solid #00d9ff', // Cyan accent
      borderRadius: '4px',
      padding: '1.5rem 2.5rem',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0, 217, 255, 0.2)',
      maxWidth: '100%',
    }}>
      {/* Hex grid pattern background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.08,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300d9ff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z'/%3E%3C/g%3E%3C/svg%3E")`,
        pointerEvents: 'none',
      }} />

      {/* Top and bottom accent bars */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #00d9ff 20%, #00d9ff 80%, transparent)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #00d9ff 20%, #00d9ff 80%, transparent)',
      }} />

      {/* Left side accent */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '4px',
        background: '#00d9ff',
      }} />

      {/* Content container - horizontal layout */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
      }}>
        {/* Left side - City icon */}
        <div style={{
          flexShrink: 0,
        }}>
          <CityIcon />
        </div>

        {/* Center - Main content */}
        <div style={{
          flex: 1,
          textAlign: 'center',
        }}>
          {/* Main title */}
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 900,
            color: '#00d9ff',
            marginBottom: '0.25rem',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            textShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
            lineHeight: 1,
          }}>
            CY CITY PUBLIC ACCESS
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: '0.75rem',
            color: '#6b7d8f',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            Official Municipal Network Portal
          </p>

          {/* Service badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <ServiceBadge text="NEWS" />
            <ServiceBadge text="TRAFFIC" />
            <ServiceBadge text="ALERTS" />
            <ServiceBadge text="SERVICES" />
          </div>
        </div>

        {/* Right side - Status indicator */}
        <div style={{
          flexShrink: 0,
        }}>
          <StatusIndicator />
        </div>
      </div>

      {/* Corner tech details */}
      <CornerBracket style={{ top: '8px', right: '8px', transform: 'scaleX(-1)' }} />
      <CornerBracket style={{ bottom: '8px', left: '8px', transform: 'scaleY(-1)' }} />
    </div>
  );
}

// City skyline icon (simplified, geometric)
function CityIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" style={{
      filter: 'drop-shadow(0 0 6px rgba(0, 217, 255, 0.4))',
    }}>
      {/* Grid base */}
      <rect x="5" y="40" width="50" height="2" fill="#00d9ff" opacity="0.5" />

      {/* Buildings - geometric shapes */}
      {/* Left building */}
      <rect x="8" y="25" width="10" height="15" fill="#00d9ff" opacity="0.8" />
      <rect x="10" y="27" width="2" height="2" fill="#0a0e27" />
      <rect x="14" y="27" width="2" height="2" fill="#0a0e27" />
      <rect x="10" y="31" width="2" height="2" fill="#0a0e27" />
      <rect x="14" y="31" width="2" height="2" fill="#0a0e27" />
      <rect x="10" y="35" width="2" height="2" fill="#0a0e27" />
      <rect x="14" y="35" width="2" height="2" fill="#0a0e27" />

      {/* Center building (tallest) */}
      <rect x="22" y="15" width="16" height="25" fill="#00d9ff" />
      <rect x="24" y="17" width="3" height="3" fill="#0a0e27" />
      <rect x="28" y="17" width="3" height="3" fill="#0a0e27" />
      <rect x="33" y="17" width="3" height="3" fill="#0a0e27" />
      <rect x="24" y="22" width="3" height="3" fill="#0a0e27" />
      <rect x="28" y="22" width="3" height="3" fill="#0a0e27" />
      <rect x="33" y="22" width="3" height="3" fill="#0a0e27" />
      <rect x="24" y="27" width="3" height="3" fill="#0a0e27" />
      <rect x="28" y="27" width="3" height="3" fill="#0a0e27" />
      <rect x="33" y="27" width="3" height="3" fill="#0a0e27" />
      <rect x="24" y="32" width="3" height="3" fill="#0a0e27" />
      <rect x="28" y="32" width="3" height="3" fill="#0a0e27" />
      <rect x="33" y="32" width="3" height="3" fill="#0a0e27" />

      {/* Antenna on top */}
      <line x1="30" y1="15" x2="30" y2="8" stroke="#00d9ff" strokeWidth="2" />
      <circle cx="30" cy="8" r="2" fill="#00d9ff" />

      {/* Right building */}
      <rect x="42" y="28" width="10" height="12" fill="#00d9ff" opacity="0.8" />
      <rect x="44" y="30" width="2" height="2" fill="#0a0e27" />
      <rect x="48" y="30" width="2" height="2" fill="#0a0e27" />
      <rect x="44" y="34" width="2" height="2" fill="#0a0e27" />
      <rect x="48" y="34" width="2" height="2" fill="#0a0e27" />
    </svg>
  );
}

// Status indicator (shows system online)
function StatusIndicator() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
    }}>
      {/* Circular indicator */}
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '3px solid #00d9ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        {/* Pulsing center dot */}
        <div style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#00ff88',
          boxShadow: '0 0 8px #00ff88',
        }} />

        {/* Orbital ring */}
        <div style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '2px dashed #00d9ff',
          opacity: 0.3,
        }} />
      </div>

      {/* Status text */}
      <div style={{
        fontSize: '0.625rem',
        color: '#00ff88',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
      }}>
        ONLINE
      </div>
    </div>
  );
}

// Service badge component
function ServiceBadge({ text }) {
  return (
    <div style={{
      padding: '0.25rem 0.75rem',
      backgroundColor: 'rgba(0, 217, 255, 0.1)',
      border: '1px solid #00d9ff',
      borderRadius: '2px',
      fontSize: '0.625rem',
      color: '#00d9ff',
      letterSpacing: '1px',
      fontWeight: 'bold',
    }}>
      {text}
    </div>
  );
}

// Corner bracket decoration
function CornerBracket({ style }) {
  return (
    <div style={{
      position: 'absolute',
      width: '20px',
      height: '20px',
      ...style,
    }}>
      {/* L-shaped bracket */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: '#00d9ff',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '2px',
        height: '100%',
        backgroundColor: '#00d9ff',
      }} />

      {/* Small accent square */}
      <div style={{
        position: 'absolute',
        top: '6px',
        left: '6px',
        width: '3px',
        height: '3px',
        backgroundColor: '#00d9ff',
      }} />
    </div>
  );
}

// ============================================================================
// Alternative: Compact version (even shorter)
// ============================================================================

export function CyCityPublicAccessCompact() {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#0a0e27',
      border: '2px solid #00d9ff',
      borderRadius: '3px',
      padding: '1rem 2rem',
      overflow: 'hidden',
      boxShadow: '0 2px 6px rgba(0, 217, 255, 0.2)',
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
        background: '#00d9ff',
      }} />

      {/* Icon */}
      <div style={{ flexShrink: 0 }}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="5" y="15" width="8" height="15" fill="#00d9ff" opacity="0.7" />
          <rect x="16" y="8" width="8" height="22" fill="#00d9ff" />
          <rect x="27" y="18" width="8" height="12" fill="#00d9ff" opacity="0.7" />
          <line x1="20" y1="8" x2="20" y2="3" stroke="#00d9ff" strokeWidth="2" />
          <circle cx="20" cy="3" r="1.5" fill="#00d9ff" />
        </svg>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          color: '#00d9ff',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '0.25rem',
          lineHeight: 1,
        }}>
          CY CITY PUBLIC ACCESS
        </h3>
        <p style={{
          fontSize: '0.625rem',
          color: '#6b7d8f',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}>
          Official Network Portal • News • Traffic • Services
        </p>
      </div>

      {/* Status */}
      <div style={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#00ff88',
          boxShadow: '0 0 6px #00ff88',
        }} />
        <span style={{
          fontSize: '0.625rem',
          color: '#00ff88',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }}>
          ONLINE
        </span>
      </div>
    </div>
  );
}

export default CyCityPublicPortals;
