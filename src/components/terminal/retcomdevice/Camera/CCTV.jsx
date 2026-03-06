import React from 'react';

import RetComImage from '../Images/RetComImage';
import { Line } from '@terminal/TerminalComponents';

/**
 * CCTV - Live security camera feed display
 *
 * Wraps RetComImage with camera UI overlays: timestamp, camera ID, recording indicator,
 * signal strength,
 *
 * Props:
 * - src: String (image URL). Required.
 * - cameraId: String (e.g., "CAM-47-A", "LOBBY-01"). Displayed in top-left.
 * - location: String (e.g., "Main Entrance", "Floor 42 Hallway"). Optional subtitle.
 * - theme: 'green' | 'cyan' | 'amber' | 'red' | 'purple' (inherits from RetComImage)
 * - recording: Boolean (default true) - shows REC indicator
 * - signalStrength: Number 0-4 (default 4) - shows signal bars
 * - timestamp: Boolean (default true) - shows live updating timestamp
 * - height: Number (default 400) - container height in px
 * - style: Object - extra styles for outer container
 */

export default function CCTV({
  src,
  cameraId = "CAM-##",
  location,
  theme = 'green',
  recording = true,
  signalStrength = 4,
  height = 400,
  style = {},
}) {
  const getThemeColor = (theme) => {
    const colors = {
      green: 'rgb(0, 255, 136)',
      cyan: 'rgb(79, 209, 197)',
      amber: 'rgb(251, 191, 36)',
      red: 'rgb(239, 68, 68)',
      purple: 'rgb(168, 85, 247)',
    };
    return colors[theme] || colors.green;
  };

  const themeColor = getThemeColor(theme);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: `${height}px`,
        ...style,
      }}
    >
      {/* RetComImage base */}
      <RetComImage
        src={src}
        theme={theme}
        style={{
          height: '100%',
        }}
      />

      {/* Top-left: Camera ID + Location */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '6px 12px',
          borderRadius: '3px',
          border: `1px solid ${themeColor}`,
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          zIndex: 10,
        }}
      >
        <div
          style={{
            color: themeColor,
            fontWeight: 'bold',
            marginBottom: location ? '2px' : '0',
          }}
        >
          {cameraId}
        </div>
        {location && (
          <div
            style={{
              color: 'rgb(148, 163, 184)',
              fontSize: '0.75rem',
            }}
          >
            {location}
          </div>
        )}
      </div>

      {/* Top-right: REC indicator + Signal strength */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 10,
        }}
      >
        {/* Signal strength bars */}
        <div
          style={{
            display: 'flex',
            gap: '2px',
            alignItems: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '6px 8px',
            borderRadius: '3px',
            border: `1px solid ${themeColor}`,
          }}
        >
          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              style={{
                width: '4px',
                height: `${bar * 4}px`,
                backgroundColor: bar <= signalStrength ? themeColor : 'rgba(100, 100, 100, 0.3)',
                transition: 'background-color 0.3s',
              }}
            />
          ))}
        </div>

        {/* REC indicator */}
        {recording && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: '6px 10px',
              borderRadius: '3px',
              border: '1px solid rgb(239, 68, 68)',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: 'rgb(239, 68, 68)',
                borderRadius: '50%',
                animation: 'cctv-blink 2s infinite',
              }}
            />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: 'rgb(239, 68, 68)',
                fontFamily: 'monospace',
              }}
            >
              REC
            </span>
          </div>
        )}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '6px 12px',
          borderRadius: '3px',
          border: `1px solid ${themeColor}`,
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: themeColor,
          zIndex: 10,
        }}
      >
        CityCam images are for reference only — not an exact representation
      </div>

      {/* Corner brackets (aesthetic) */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '30px',
          height: '30px',
          borderTop: `3px solid ${themeColor}`,
          borderLeft: `3px solid ${themeColor}`,
          opacity: 0.6,
          zIndex: 5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '30px',
          height: '30px',
          borderTop: `3px solid ${themeColor}`,
          borderRight: `3px solid ${themeColor}`,
          opacity: 0.6,
          zIndex: 5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '30px',
          height: '30px',
          borderBottom: `3px solid ${themeColor}`,
          borderLeft: `3px solid ${themeColor}`,
          opacity: 0.6,
          zIndex: 5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '30px',
          height: '30px',
          borderBottom: `3px solid ${themeColor}`,
          borderRight: `3px solid ${themeColor}`,
          opacity: 0.6,
          zIndex: 5,
        }}
      />

      {/* CSS Animations */}
      <style>{`
        @keyframes cctv-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
