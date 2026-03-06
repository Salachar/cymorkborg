import { useState, useEffect, useRef } from 'react';
import './iceBreaker.css';
import './iceBreakerGun.css';
import './iceBreakerShield.css';
import './iceBreakerBeam.css';

const DIFFICULTY_PRESETS = {
  easy: {
    gapSize: 75,
    rotationSpeed: 1,
  },
  medium: {
    gapSize: 60,
    rotationSpeed: 2,
  },
  hard: {
    gapSize: 45,
    rotationSpeed: 3,
  },
  expert: {
    gapSize: 30,
    rotationSpeed: 4,
  },
  corporate: {
    gapSize: 20,
    rotationSpeed: 5,
  },
};

/**
 * IceBreaker - Shield breaker hacking minigame
 *
 * Player must time their shot to fire through the rotating shield's gaps
 * to breach the corporate vault.
 *
 * Props:
 * - config.gapSize: Number (degrees, 30-90) - size of the gap in the shield
 * - config.rotationSpeed: Number (1-5) - speed multiplier for shield rotation
 * - onSuccess: Function - called when vault is successfully breached
 */
export default function IceBreaker({
  command,
  commandDef,
  difficulty,
  gapSize,
  rotationSpeed,
  onSuccess = () => {},
}) {
  const preset = difficulty ? DIFFICULTY_PRESETS[difficulty] : {};
  const config = {
    gapSize: gapSize ?? preset.gapSize ?? 60,
    rotationSpeed: rotationSpeed ?? preset.rotationSpeed ?? 2,
  };

  // Timing constants (all in ms)
  const TIMING = {
    charge: 1500,        // Gun charge time
    cooldown: 2000,      // Total cooldown before next shot
    shieldResume: 800,   // Shield starts spinning after this
    beamDuration: 300,   // How long beam is visible
  };

  // State
  const [shieldRotation, setShieldRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(true);
  const [gunState, setGunState] = useState('ready'); // 'ready', 'charging', 'cooling'
  const [isPaused, setIsPaused] = useState(false);
  const [showBeam, setShowBeam] = useState(false);
  const [beamState, setBeamState] = useState(null); // null, 'hit', 'miss'
  const [isSuccess, setIsSuccess] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(Date.now());
  const shieldRef = useRef(null);
  const beamAreaRef = useRef(null);

  // Initialize time reference on mount
  useEffect(() => {
    lastTimeRef.current = Date.now();
  }, []);

  // Calculate shield position for CSS variable
  useEffect(() => {
    const updateShieldOffset = () => {
      if (shieldRef.current && beamAreaRef.current) {
        const shieldRect = shieldRef.current.getBoundingClientRect();
        const beamRect = beamAreaRef.current.getBoundingClientRect();
        const shieldOffset = shieldRect.left - beamRect.left;
        const offsetPercent = (shieldOffset / beamRect.width) * 100;

        document.documentElement.style.setProperty('--shield-offset', `${offsetPercent}%`);
      }
    };

    updateShieldOffset();
    window.addEventListener('resize', updateShieldOffset);

    return () => window.removeEventListener('resize', updateShieldOffset);
  }, []);

  // Shield rotation animation
  useEffect(() => {
    if (!isSpinning || isPaused || isSuccess) {
      // Cancel animation when stopped
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    // Reset time reference when starting animation
    lastTimeRef.current = Date.now();

    const animate = () => {
      const now = Date.now();
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      // Let rotation increment indefinitely, don't reset
      setShieldRotation(prev => prev + (delta * config.rotationSpeed * 0.1));
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isSpinning, isPaused, config.rotationSpeed, isSuccess]);

  // Fire the shot
  const handleFire = () => {
    if (gunState !== 'ready' || isPaused || isSuccess) return;

    // Freeze everything
    setIsSpinning(false);
    setGunState('charging');

    // Charge for TIMING.charge ms, then shoot
    setTimeout(() => {
      // Show beam and check hit
      setShowBeam(true);
      const hit = checkHit();
      setBeamState(hit ? 'hit' : 'miss');

      // Hide beam after duration
      setTimeout(() => {
        setShowBeam(false);
        setBeamState(null);
      }, TIMING.beamDuration);

      if (hit) {
        // Success!
        setIsSuccess(true);
        setGunState('ready')
        setTimeout(() => {
          if (onSuccess) onSuccess(command, commandDef);
        }, TIMING.beamDuration + 200);
        setTimeout(() => {
          setIsComplete(true);
        }, 2000)
      } else {
        // Miss - start cooldown
        setGunState('cooling');

        // Resume shield spinning partway through cooldown
        setTimeout(() => {
          setIsSpinning(true);
        }, TIMING.shieldResume);

        // Gun ready again after full cooldown
        setTimeout(() => {
          setGunState('ready');
        }, TIMING.cooldown);
      }
    }, TIMING.charge);
  };

  // Check if shot hits the gap
  const checkHit = () => {
    // conic-gradient with 'from 0deg' starts at TOP (not right like standard CSS angles)
    // So 0° = top, 90° = right, 180° = bottom, 270° = left
    // Gap spans from (360 - config.gapSize) to 360 degrees in the gradient
    // Gun fires from the LEFT which is now at 270° in conic-gradient coords

    // Normalize rotation to 0-360
    const normalizedRotation = shieldRotation % 360;

    // Gap center in shield coordinates: (360 - config.gapSize/2)
    const gapCenterInShield = 360 - (config.gapSize / 2);

    // Gap position in world after rotation
    const gapWorldPosition = (gapCenterInShield + normalizedRotation) % 360;

    // Firing line is at 270° (left side in conic-gradient coords)
    const firingAngle = 270;

    // Calculate angular difference
    let diff = Math.abs(gapWorldPosition - firingAngle);
    // Handle wraparound
    if (diff > 180) diff = 360 - diff;

    const gapHalfSize = config.gapSize / 2;
    const hit = diff <= gapHalfSize;

    return hit;
  };

  // Toggle pause
  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  // Click anywhere to fire
  const handleContainerClick = (e) => {
    // Don't fire if clicking on buttons
    if (e.target.tagName === 'BUTTON') return;
    handleFire();
  };

  return (
    <div
      className={`icebreaker-container ${isComplete ? 'ice-cracked' : ''}`}
      onClick={handleContainerClick}
    >
      {/* Header */}
      <div className="icebreaker-header">
        <span className="icebreaker-title">ICEBREAKER v2.1</span>
        {isSuccess && <span className="icebreaker-success">ICE CRACKED</span>}
      </div>

      {/* Main area */}
      <div className="icebreaker-main">
        {/* Gun - Punk aesthetic */}
        <div className="icebreaker-gun">
          <div className="gun-garbage-top">
            <div className="gun-garbage-1" />
            <div className="gun-garbage-3" />
            <div className="gun-garbage-5" />
            <div className="gun-garbage-2" />
          </div>
          <div className={`gun-integrated ${gunState}`}>
            <div className="gun-housing">
              <div className="gun-vent" />
              <div className="gun-vent" />
              <div className="gun-vent" />
            </div>
            <div className="gun-chamber" />
            <div className="gun-barrel" />
            <div className="gun-emitter" />
          </div>

          <div className="gun-garbage-bottom">
            <div className="gun-garbage-2" />
            <div className="gun-garbage-1" />
            <div className="gun-garbage-6" />
            <div className="gun-garbage-7" />
          </div>
        </div>

        {/* Beam section */}
        <div className="icebreaker-beam-area" ref={beamAreaRef}>
          {showBeam && (
            <>
              {/* Main beam */}
              <div className={`beam ${beamState === 'hit' ? 'beam-hit' : 'beam-miss'}`}>
                <div className="beam-core"></div>
                <div className="beam-glow"></div>

                {/* Impact effect on miss */}
                {beamState === 'miss' && <div className="beam-impact" />}

                {/* Spark effects on hit (at both gaps) */}
                {beamState === 'hit' && (
                  <>
                    <div className="beam-spark spark-left" />
                    <div className="beam-spark spark-right" />
                  </>
                )}
              </div>
            </>
          )}
        </div>

        {/* Shield section */}
        <div className="icebreaker-shield" ref={shieldRef}>
          <div className="shield-container">
            {/* Corporate lock/tech core in center */}
            <div className={`shield-core ${isSuccess ? 'cracked' : ''}`}>
              {/* Lock body */}
              <div className="shield-lock-body"></div>
              {/* Lock shackle */}
              <div className="shield-lock-shackle"></div>
              {/* Access indicator */}
              <div className="shield-lock-indicator"></div>
            </div>

            {/* Shield ring with single gap */}
            <div
              className={`shield-ring ${isSuccess ? 'cracked' : ''}`}
              style={{
                transform: `rotate(${shieldRotation}deg)`,
                background: `conic-gradient(
                  from 0deg,
                  rgb(79, 209, 197) 0deg,
                  rgb(79, 209, 197) ${360 - config.gapSize}deg,
                  transparent ${360 - config.gapSize}deg,
                  transparent 360deg
                )`
              }}
            />

            {/* Inner ring for hollow effect */}
            <div className="shield-ring-inner" />

            {/* Shield flash on miss */}
            {showBeam && beamState === 'miss' && (
              <div className="shield-impact-flash" />
            )}
          </div>
        </div>
      </div>

      {/* Help */}
      <div style={{ marginBottom: '0.5rem' }}>
        <button
          onClick={() => setShowHelp(v => !v)}
          className="icebreaker-button"
          style={{ width: '100%', textAlign: 'left', opacity: 0.6 }}
        >
          {showHelp ? '[▲ HIDE INSTRUCTIONS]' : '[▼ HOW TO PLAY]'}
        </button>

        {showHelp && (
          <div style={{
            marginTop: '0.5rem',
            padding: '0.75rem',
            border: '1px solid rgba(79, 209, 197, 0.3)',
            borderRadius: '4px',
            backgroundColor: 'rgba(19, 23, 34, 0.8)',
            color: 'rgb(148, 163, 184)',
            fontFamily: 'monospace',
            fontSize: '0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
          }}>
            <div style={{ color: 'rgb(79, 209, 197)', fontWeight: 'bold', marginBottom: '0.25rem' }}>ICEBREAKER v2.1 — INSTRUCTIONS</div>
            <div>→ The shield rotates around the corporate vault. Your gun fires from the <span style={{ color: 'rgb(251, 191, 36)' }}>left</span>.</div>
            <div>→ The shield has a <span style={{ color: 'rgb(251, 191, 36)' }}>gap</span>. You must fire through it to breach the vault.</div>
            <div>→ Press <span style={{ color: 'rgb(79, 209, 197)' }}>[FIRE]</span> or tap anywhere to charge and shoot. The shot fires after a short delay — time it early.</div>
            <div>→ If you miss, the gun cools down before you can fire again. The shield keeps spinning.</div>
            <div>→ Hit the gap to crack the ICE and unlock access.</div>
            <div style={{ color: 'rgba(252, 129, 129, 0.8)', marginTop: '0.25rem' }}>Higher difficulties = smaller gap + faster rotation.</div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="icebreaker-controls">
        <button
          onClick={handleFire}
          disabled={gunState !== 'ready' || isPaused || isSuccess}
          className="icebreaker-button fire-button"
        >
          {gunState === 'ready' && '[FIRE]'}
          {gunState === 'charging' && '[FIRING...]'}
          {gunState === 'cooling' && '[COOLDOWN...]'}
          {gunState === 'shutdown' && '[SHUTDOWN]'}
        </button>

        <button
          onClick={handlePause}
          disabled={isSuccess}
          className="icebreaker-button pause-button"
        >
          {isPaused ? '[RESUME]' : '[PAUSE]'}
        </button>
      </div>
    </div>
  );
}
