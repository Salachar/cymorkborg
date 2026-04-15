import React from 'react';

import {
  PublicPortal,
} from "@terminal/retcomdevice"

export function StoneEelsAd() {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#1a1a1a',
      border: '4px solid #00ff41',
      borderRadius: '4px',
      padding: '2.5rem',
      overflow: 'hidden',
      boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        background: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 20px,
            #00ff41 20px,
            #00ff41 21px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 20px,
            #00ff41 20px,
            #00ff41 21px
          )
        `,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '6px',
        background: '#00ff41',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '6px',
        background: '#00ff41',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}>
          <EelIcon />
        </div>

        <h2 style={{
          fontSize: '2.75rem',
          fontWeight: 900,
          color: '#00ff41',
          textAlign: 'center',
          marginBottom: '0.25rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          textShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
        }}>
          CAVE CLUB
        </h2>

        <p style={{
          fontSize: '0.875rem',
          color: '#666',
          textAlign: 'center',
          marginBottom: '1rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          Stone Eels Territory
        </p>

        <p style={{
          fontSize: '1.25rem',
          color: '#fff',
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontStyle: 'italic',
        }}>
          "Underground. Literally."
        </p>

        <div style={{
          height: '2px',
          background: '#00ff41',
          margin: '1.5rem auto',
          width: '70%',
        }} />

        <div style={{ marginBottom: '1.5rem' }}>
          <StoneFeature text="Live Music Every Night" />
          <StoneFeature text="Neutral Ground - No Drama" />
          <StoneFeature text="No Corps. No Cops. No Questions." />
        </div>

        <PublicPortal
          network="CAVE_CLUB_GUEST"
          signalStrength="medium"
          status="✓ OPEN (20:00-06:00)"
          statusColor="neon"
          nowPlaying="Underground beats - Ports hardcore mix"
          notes={[
            "Stone Eels territory - Neutral ground, no drama",
            "Weapon check at door (non-negotiable)",
          ]}
          theme="limeade"
        />
      </div>

      <TechCorner style={{ top: '12px', left: '12px' }} />
      <TechCorner style={{ top: '12px', right: '12px', transform: 'scaleX(-1)' }} />
      <TechCorner style={{ bottom: '12px', left: '12px', transform: 'scaleY(-1)' }} />
      <TechCorner style={{ bottom: '12px', right: '12px', transform: 'scale(-1)' }} />
    </div>
  );
}

// CSS Eel icon
function EelIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" style={{
      filter: 'drop-shadow(0 0 8px rgba(0, 255, 65, 0.5))',
    }}>
      {/* Eel body - serpentine curve */}
      <path
        d="M 10 40 Q 20 25, 30 40 T 50 40 T 70 40"
        stroke="#00ff41"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Eel head */}
      <circle cx="70" cy="40" r="6" fill="#00ff41" />
      {/* Eye */}
      <circle cx="72" cy="38" r="2" fill="#1a1a1a" />
      {/* Tail */}
      <path
        d="M 10 40 L 5 35 L 10 40 L 5 45 Z"
        fill="#00ff41"
      />
    </svg>
  );
}

function StoneFeature({ text }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '0.75rem',
      color: '#ddd',
    }}>
      <span style={{
        fontSize: '1rem',
        color: '#00ff41',
        fontWeight: 'bold',
      }}>●</span>
      <span style={{ fontSize: '0.95rem' }}>{text}</span>
    </div>
  );
}

function TechCorner({ style }) {
  return (
    <div style={{
      position: 'absolute',
      width: '20px',
      height: '20px',
      ...style,
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: '#00ff41',
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '2px',
        height: '100%',
        background: '#00ff41',
      }} />
      <div style={{
        position: 'absolute',
        top: '6px',
        left: '6px',
        width: '4px',
        height: '4px',
        background: '#00ff41',
      }} />
    </div>
  );
}

export default StoneEelsAd;
