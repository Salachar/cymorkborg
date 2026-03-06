import React, { useState, useEffect } from 'react';

const BG = 'rgb(27, 36, 58)';
const BORDER = 'rgb(77, 167, 188)';
const TEAL = 'rgb(79, 209, 197)';
const GREEN = 'rgb(0, 255, 65)';
const YELLOW = 'rgb(251, 191, 36)';
const DIM = 'rgb(148, 163, 184)';

export default function TerminalHeader({ onClear }) {
  const [adsBlocked, setAdsBlocked] = useState(47);
  const [packetsRouted, setPacketsRouted] = useState(1247);

  useEffect(() => {
    const adInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setAdsBlocked(prev => prev + Math.floor(Math.random() * 5) + 1);
      }
    }, 8000);

    const packetInterval = setInterval(() => {
      setPacketsRouted(prev => prev + Math.floor(Math.random() * 20) + 5);
    }, 3000);

    return () => {
      clearInterval(adInterval);
      clearInterval(packetInterval);
    };
  }, []);

  return (
    <div
      style={{
        // width: '100%',
        backgroundColor: BG,
        borderLeft: `1px solid ${BORDER}`,
        borderRight: `1px solid ${BORDER}`,
        borderBottom: `1px solid ${BORDER}`,
        borderTop: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.6rem 1rem',
        flexShrink: 0,
        fontFamily: 'monospace',
        margin: '0 2rem',
      }}
    >
      {/* Spinning eye — identity piece */}
      <div style={{ position: 'relative', width: '36px', height: '36px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute',
          width: '36px',
          height: '36px',
          border: `2px solid ${BORDER}`,
          borderRadius: '50%',
          animation: 'rcd-spin 8s linear infinite',
        }}>
          <div style={{ position: 'absolute', top: '-2px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '5px', backgroundColor: TEAL }} />
          <div style={{ position: 'absolute', bottom: '-2px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '5px', backgroundColor: TEAL }} />
          <div style={{ position: 'absolute', left: '-2px', top: '50%', transform: 'translateY(-50%)', width: '5px', height: '2px', backgroundColor: TEAL }} />
          <div style={{ position: 'absolute', right: '-2px', top: '50%', transform: 'translateY(-50%)', width: '5px', height: '2px', backgroundColor: TEAL }} />
        </div>
        <div style={{
          width: '18px', height: '18px',
          border: `2px solid ${TEAL}`,
          borderRadius: '50%',
          backgroundColor: `rgba(79, 209, 197, 0.08)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'rcd-pulse 2s ease-in-out infinite',
        }}>
          <div style={{
            width: '7px', height: '7px',
            backgroundColor: GREEN,
            borderRadius: '50%',
            boxShadow: `0 0 8px ${GREEN}`,
            animation: 'rcd-blink 3s ease-in-out infinite',
          }} />
        </div>
      </div>

      {/* Device ID */}
      <div style={{ flexShrink: 0 }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: TEAL, letterSpacing: '0.1em', textShadow: `0 0 8px rgba(79, 209, 197, 0.4)`, lineHeight: 1 }}>
          RCD-7
        </div>
        <div style={{ fontSize: '0.55rem', color: DIM, marginTop: '0.15rem', letterSpacing: '0.08em' }}>
          RET COM DEVICE
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: '1px', height: '32px', backgroundColor: BORDER, opacity: 0.4, flexShrink: 0 }} />

      {/* Live stats ticker */}
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flex: 1 }}>
        <Stat label="ADS BLOCKED" value={adsBlocked.toLocaleString()} color={GREEN} />
        <Stat label="PACKETS" value={packetsRouted.toLocaleString()} color={TEAL} />
      </div>

      {onClear && (
        <button
          onClick={onClear}
          style={{
            marginLeft: 'auto',
            padding: '0.25rem 0.5rem',
            border: `1px solid rgba(251, 191, 36, 0.4)`,
            borderRadius: '3px',
            backgroundColor: 'rgba(251, 191, 36, 0.06)',
            color: YELLOW,
            fontSize: '0.75rem',
            cursor: 'pointer',
            fontFamily: 'monospace',
          }}
        >
          Collapse all
        </button>
      )}
    </div>
  );
}

function Stat({ label, value, color }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
      <span style={{ fontSize: '0.55rem', color: DIM, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {label}
      </span>
      <span style={{ fontSize: '0.95rem', fontWeight: 'bold', color, letterSpacing: '0.05em', lineHeight: 1 }}>
        {value}
      </span>
    </div>
  );
}
