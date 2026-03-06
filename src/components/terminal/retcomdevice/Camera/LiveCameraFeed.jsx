import { Line } from '@terminal/TerminalComponents';
import { useEffect, useState } from 'react';

export default function LiveCameraFeed({
  location = "Not Set",
}) {
  const [time, setTime] = useState(new Date());
  const [elapsed, setElapsed] = useState(0);
  const [pings, setPings] = useState([]);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate random radar pings
  useEffect(() => {
    const pingInterval = setInterval(() => {
      // Add new ping at random position
      const newPing = {
        id: Math.random(),
        x: Math.random() * 200 + 50, // Random x between 50-250
        y: Math.random() * 120 + 40, // Random y between 40-160
        opacity: 1,
      };

      setPings((prev) => [...prev, newPing]);

      // Remove ping after fade out
      setTimeout(() => {
        setPings((prev) => prev.filter((p) => p.id !== newPing.id));
      }, 2000);
    }, 800);

    return () => clearInterval(pingInterval);
  }, []);

  // Format time
  const timestamp = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}:${String(time.getSeconds()).padStart(2, '0')}`;

  // Format elapsed time
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  const elapsedStr = `${minutes}:${String(seconds).padStart(2, '0')}`;

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
          {/* Live indicator */}
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: 'rgb(252, 129, 129)',
              borderRadius: '50%',
              animation: 'blink 1.5s infinite',
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
        <span
          style={{
            fontSize: '0.875rem',
            fontWeight: 'bold',
            color: 'rgb(79, 209, 197)',
            fontFamily: 'monospace',
          }}
        >
          {timestamp}
        </span>
      </div>

      {/* Main radar display */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          backgroundColor: 'rgb(19, 23, 34)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Scanline effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(79, 209, 197, 0.03) 2px, rgba(79, 209, 197, 0.03) 4px)',
            animation: 'scanline 10s linear infinite',
            pointerEvents: 'none',
          }}
        />

        {/* Static noise overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.02,
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
            pointerEvents: 'none',
          }}
        />

        {/* Radar container */}
        <div style={{ position: 'relative', width: '300px', height: '200px' }}>
          {/* SVG Radar */}
          <svg
            width="300"
            height="200"
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            {/* Grid lines */}
            <g stroke="rgba(79, 209, 197, 0.2)" strokeWidth="1">
              {/* Circles */}
              <circle cx="150" cy="100" r="30" fill="none" />
              <circle cx="150" cy="100" r="60" fill="none" />
              <circle cx="150" cy="100" r="90" fill="none" />
              {/* Cross lines */}
              <line x1="150" y1="10" x2="150" y2="190" />
              <line x1="60" y1="100" x2="240" y2="100" />
            </g>

            {/* Center point */}
            <circle
              cx="150"
              cy="100"
              r="4"
              fill="rgb(79, 209, 197)"
              opacity="0.9"
            />

            {/* Rotating sweep line */}
            <line
              x1="150"
              y1="100"
              x2="150"
              y2="10"
              stroke="rgb(79, 209, 197)"
              strokeWidth="2"
              opacity="0.8"
              style={{
                transformOrigin: '150px 100px',
                animation: 'radar-sweep 4s linear infinite',
              }}
            >
              {/* Gradient for fade effect */}
              <animate
                attributeName="opacity"
                values="0.8;0.3;0.8"
                dur="4s"
                repeatCount="indefinite"
              />
            </line>

            {/* Sweep gradient trail */}
            <defs>
              <radialGradient id="sweep-gradient">
                <stop offset="0%" stopColor="rgb(79, 209, 197)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(79, 209, 197)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle
              cx="150"
              cy="100"
              r="90"
              fill="url(#sweep-gradient)"
              style={{
                transformOrigin: '150px 100px',
                animation: 'fade-sweep 4s linear infinite',
              }}
            />

            {/* Random pings */}
            {pings.map((ping) => (
              <g key={ping.id}>
                <circle
                  cx={ping.x}
                  cy={ping.y}
                  r="3"
                  fill="rgb(251, 191, 36)"
                  style={{
                    animation: 'ping-fade 2s ease-out forwards',
                  }}
                />
                <circle
                  cx={ping.x}
                  cy={ping.y}
                  r="8"
                  fill="none"
                  stroke="rgb(251, 191, 36)"
                  strokeWidth="1"
                  style={{
                    animation: 'ping-expand 2s ease-out forwards',
                  }}
                />
              </g>
            ))}
          </svg>

          {/* Center label */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          >
            <Line cyan style={{ fontSize: '0.75rem', textAlign: 'center', margin: 0 }}>
              MONITORING
            </Line>
          </div>
        </div>
      </div>

      {/* Status indicators */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem',
          padding: '1rem',
          backgroundColor: 'rgba(19, 23, 34, 0.8)',
          borderTop: '1px solid rgba(79, 209, 197, 0.3)',
          borderBottom: '1px solid rgba(79, 209, 197, 0.3)',
        }}
      >
        {/* Motion indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem',
            backgroundColor: 'rgba(79, 209, 197, 0.1)',
            border: '1px solid rgba(79, 209, 197, 0.3)',
            borderRadius: '3px',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'rgb(79, 209, 197)',
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              fontSize: '0.75rem',
              color: 'rgb(79, 209, 197)',
              fontFamily: 'monospace',
              fontWeight: 'bold',
            }}
          >
            MOTION: ACTIVE
          </span>
        </div>

        {/* Signal strength */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem',
            backgroundColor: 'rgba(79, 209, 197, 0.1)',
            border: '1px solid rgba(79, 209, 197, 0.3)',
            borderRadius: '3px',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'rgb(79, 209, 197)',
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              fontSize: '0.75rem',
              color: 'rgb(79, 209, 197)',
              fontFamily: 'monospace',
              fontWeight: 'bold',
            }}
          >
            SIGNAL: STRONG
          </span>
        </div>

        {/* Audio status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem',
            backgroundColor: 'rgba(148, 163, 184, 0.1)',
            border: '1px solid rgba(148, 163, 184, 0.3)',
            borderRadius: '3px',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'rgb(148, 163, 184)',
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              fontSize: '0.75rem',
              color: 'rgb(148, 163, 184)',
              fontFamily: 'monospace',
              fontWeight: 'bold',
            }}
          >
            AUDIO: DISABLED
          </span>
        </div>

        {/* Encryption status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem',
            backgroundColor: 'rgba(251, 191, 36, 0.1)',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            borderRadius: '3px',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'rgb(251, 191, 36)',
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              fontSize: '0.75rem',
              color: 'rgb(251, 191, 36)',
              fontFamily: 'monospace',
              fontWeight: 'bold',
            }}
          >
            ENCRYPTION: NONE
          </span>
        </div>
      </div>

      {/* Footer status bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          backgroundColor: 'rgba(79, 209, 197, 0.1)',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            color: 'rgb(79, 209, 197)',
            fontFamily: 'monospace',
            fontWeight: 'bold',
          }}
        >
          CONNECTION STABLE
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            color: 'rgb(79, 209, 197)',
            fontFamily: 'monospace',
            fontWeight: 'bold',
          }}
        >
          UNDETECTED
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            color: 'rgb(79, 209, 197)',
            fontFamily: 'monospace',
            fontWeight: 'bold',
          }}
        >
          {elapsedStr} ELAPSED
        </span>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes radar-sweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fade-sweep {
          0% { opacity: 0.3; transform: rotate(0deg); }
          100% { opacity: 0.1; transform: rotate(360deg); }
        }

        @keyframes ping-fade {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes ping-expand {
          0% { r: 3; opacity: 0.8; }
          100% { r: 15; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
