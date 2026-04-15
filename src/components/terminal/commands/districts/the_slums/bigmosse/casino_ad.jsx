import React from 'react';

import {
  PublicPortal,
} from "@terminal/retcomdevice"

export function LuckyFlightAd() {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#0d3d2d',
      border: '3px solid #8b0000',
      borderRadius: '8px',
      padding: '2.5rem',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            rgba(218, 165, 32, 0.1) 60px,
            rgba(218, 165, 32, 0.1) 80px
          )
        `,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '8px',
        background: '#8b0000',
      }} />

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '8px',
        background: '#daa520',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}>
          <Dice />
        </div>

        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 900,
          color: '#daa520',
          textAlign: 'center',
          marginBottom: '0.5rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
        }}>
          Lucky Flight Casino
        </h2>

        <p style={{
          fontSize: '1.125rem',
          color: '#90ee90',
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontStyle: 'italic',
        }}>
          "Where Fortune Takes Flight"
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <Feature text="100+ Slot Machines" />
          <Feature text="Live Entertainment Nightly" />
          <Feature text="VIP Gaming Pods" />
        </div>

        <PublicPortal
          network="LUCKY_FLIGHT_GUEST"
          signalStrength="strong"
          status="✓ OPEN NOW - Live Music Tonight!"
          statusColor="neon"
          nowPlaying="PHASER/MOB (blackened chromecore)"
          notes={[
            "Water taxi service available to canal pier!",
          ]}
          theme="fancy"
        />
      </div>

      <div style={{
        position: 'absolute',
        top: '12px',
        left: '12px',
        width: '30px',
        height: '30px',
        borderTop: '3px solid #daa520',
        borderLeft: '3px solid #daa520',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '12px',
        right: '12px',
        width: '30px',
        height: '30px',
        borderBottom: '3px solid #daa520',
        borderRight: '3px solid #daa520',
      }} />
    </div>
  );
}

function Dice() {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
    }}>
      {/* Die 1 - showing 6 */}
      <div style={{
        width: '60px',
        height: '60px',
        backgroundColor: '#f5f5f5',
        border: '3px solid #8b0000',
        borderRadius: '8px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        padding: '6px',
        gap: '4px',
        transform: 'rotate(-5deg)',
      }}>
        <Pip />
        <div />
        <Pip />
        <Pip />
        <div />
        <Pip />
        <Pip />
        <div />
        <Pip />
      </div>

      {/* Die 2 - showing 5 */}
      <div style={{
        width: '60px',
        height: '60px',
        backgroundColor: '#f5f5f5',
        border: '3px solid #8b0000',
        borderRadius: '8px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        padding: '6px',
        gap: '4px',
        transform: 'rotate(8deg)',
      }}>
        <Pip />
        <div />
        <Pip />
        <div />
        <Pip />
        <div />
        <Pip />
        <div />
        <Pip />
      </div>
    </div>
  );
}

function Pip() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#1a1a1a',
      borderRadius: '50%',
    }} />
  );
}

function Feature({ text }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '0.75rem',
      color: '#90ee90',
    }}>
      <span style={{
        fontSize: '1.25rem',
        color: '#daa520',
        fontWeight: 'bold',
      }}>▸</span>
      <span style={{ fontSize: '1rem' }}>{text}</span>
    </div>
  );
}

export default LuckyFlightAd;
