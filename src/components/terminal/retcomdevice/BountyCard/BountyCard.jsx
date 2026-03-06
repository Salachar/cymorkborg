import { useState, useEffect } from 'react';
import { Line, Divider } from '@terminal/TerminalComponents';
import Extractable from '../Extractable/Extractable';

import { formatCredits } from '@utils/general';

import IMAGE_01 from "@images/profile_images/1.png";
import IMAGE_02 from "@images/profile_images/2.png";
import IMAGE_03 from "@images/profile_images/3.png";
import IMAGE_04 from "@images/profile_images/4.png";
import IMAGE_05 from "@images/profile_images/5.png";
import IMAGE_06 from "@images/profile_images/6.png";
import IMAGE_07 from "@images/profile_images/7.png";
import IMAGE_08 from "@images/profile_images/8.png";
import IMAGE_09 from "@images/profile_images/9.png";
import IMAGE_10 from "@images/profile_images/10.png";
import IMAGE_11 from "@images/profile_images/11.png";
import IMAGE_12 from "@images/profile_images/12.png";
import IMAGE_13 from "@images/profile_images/13.png";

const IMAGES_ARRAY = [
  IMAGE_01, IMAGE_02, IMAGE_03, IMAGE_04, IMAGE_05, IMAGE_06, IMAGE_07,
  IMAGE_08, IMAGE_09, IMAGE_10, IMAGE_11, IMAGE_12, IMAGE_13,
];

/**
 * BountyCard - Wanted bounty listing
 *
 * Props:
 * - id: String (unique bounty ID, required for Extractable)
 * - name: String (target name)
 * - alias: String (optional, nickname/callsign)
 * - image: String or Number (photo URL or IMAGES_ARRAY index)
 * - bounty: String (payment amount, e.g., "5,000¤")
 * - sponsor: String (who's paying)
 * - hp: Number (used to calculate durability tier, default: 10)
 * - lastSeen: String (optional, location)
 * - notes: String (optional, additional intel)
 * - threat: String (optional, LOW/MEDIUM/HIGH/CRITICAL, auto-calculated from HP if not provided)
 */
export default function BountyCard({
  id,
  name,
  alias,
  image = null,
  credits = 0,
  sponsor,
  hp = 10,
  lastSeen,
  notes,
  threat,
  children,
}) {
  let imageSource = image;
  if (typeof image === "number" && IMAGES_ARRAY[image]) {
    imageSource = IMAGES_ARRAY[image];
  }

  const [isClaimed, setIsClaimed] = useState(() => {
    try {
      const extracted = JSON.parse(localStorage.getItem('cyborg_retcom_extracted') || '{}');
      return extracted[id] === true;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const checkClaimed = () => {
      try {
        const extracted = JSON.parse(localStorage.getItem('cyborg_retcom_extracted') || '{}');
        setIsClaimed(extracted[id] === true);
      } catch {
        setIsClaimed(false);
      }
    };

    window.addEventListener('storage', checkClaimed);
    return () => window.removeEventListener('storage', checkClaimed);
  }, [id]);

  // Calculate durability assessment from HP
  const getDurabilityAssessment = () => {
    if (hp <= 4) return {
      tier: 'FRAGILE',
      intel: 'Easy takedown. One good hit should do it.',
      color: 'rgb(34, 197, 94)'
    };
    if (hp <= 8) return {
      tier: 'STANDARD',
      intel: 'Average resilience. Took a broken bottle to the ribs and kept moving.',
      color: 'rgb(251, 191, 36)'
    };
    if (hp <= 12) return {
      tier: 'REINFORCED',
      intel: 'Survived three-story fall through synthglass roof. Walked away.',
      color: 'rgb(249, 115, 22)'
    };
    if (hp <= 16) return {
      tier: 'FORTIFIED',
      intel: 'Team of four couldn\'t put them down. Heavy chrome or just tough as hell.',
      color: 'rgb(239, 68, 68)'
    };
    return {
      tier: 'APEX',
      intel: 'Walked through pulse rifle fire. Bring everything you\'ve got.',
      color: 'rgb(220, 38, 38)'
    };
  };

  // Auto-calculate threat level if not provided
  const getThreatLevel = () => {
    if (threat) return threat;
    if (hp <= 6) return 'LOW';
    if (hp <= 10) return 'MEDIUM';
    if (hp <= 14) return 'HIGH';
    return 'CRITICAL';
  };

  const getThreatColor = () => {
    const level = getThreatLevel();
    switch(level) {
      case 'LOW': return 'rgb(34, 197, 94)';
      case 'MEDIUM': return 'rgb(251, 191, 36)';
      case 'HIGH': return 'rgb(249, 115, 22)';
      case 'CRITICAL': return 'rgb(239, 68, 68)';
      default: return 'rgb(148, 163, 184)';
    }
  };

  const durability = getDurabilityAssessment();
  const threatLevel = getThreatLevel();
  const threatColor = getThreatColor();

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          border: `2px solid ${isClaimed ? 'rgb(100, 116, 139)' : 'rgba(239, 68, 68, 0.5)'}`,
          borderRadius: '4px',
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          overflow: 'hidden',
          opacity: isClaimed ? 0.6 : 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: 'rgb(51, 65, 85)',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid rgb(100, 116, 139)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ flex: 1 }}>
            <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
              BOUNTY LISTING
            </Line>
            <Line smoke large bold style={{ margin: 0 }}>
              [ID: {id}]
            </Line>
          </div>

          {/* Status indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: isClaimed ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)',
                boxShadow: `0 0 8px ${isClaimed ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)'}`,
              }}
            />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: isClaimed ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)',
                fontFamily: 'monospace',
              }}
            >
              {isClaimed ? 'CLAIMED' : 'ACTIVE'}
            </span>
          </div>
        </div>

        <div style={{ padding: '1rem' }}>
          {/* Main content - side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '1rem', marginBottom: '1rem' }}>
            {/* Left: Target info */}
            <div>
              {/* Name */}
              <Line
                style={{
                  margin: 0,
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: isClaimed ? 'rgb(148, 163, 184)' : 'rgb(226, 232, 240)',
                  textDecoration: isClaimed ? 'line-through' : 'none',
                  marginBottom: '0.25rem',
                }}
              >
                {name}
              </Line>
              {alias && (
                <Line smoke style={{ margin: 0, fontSize: '0.875rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                  "{alias}"
                </Line>
              )}

              {/* Target details grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '0.5rem 1rem',
                  marginTop: '1rem',
                }}
              >
                <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
                  BOUNTY:
                </Line>
                <Line
                  style={{
                    margin: 0,
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: isClaimed ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)',
                    fontFamily: 'monospace',
                  }}
                >
                  {formatCredits(credits)}
                </Line>

                <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
                  SPONSOR:
                </Line>
                <Line cyan style={{ margin: 0, fontSize: '0.875rem', fontWeight: 500 }}>
                  {sponsor}
                </Line>

                <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
                  THREAT:
                </Line>
                <Line style={{ margin: 0, fontSize: '0.875rem', fontWeight: 'bold', color: threatColor }}>
                  {threatLevel}
                </Line>

                {lastSeen && (
                  <>
                    <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
                      LAST SEEN:
                    </Line>
                    <Line yellow style={{ margin: 0, fontSize: '0.875rem', fontWeight: 500 }}>
                      {lastSeen}
                    </Line>
                  </>
                )}
              </div>

              {/* Durability assessment */}
              <div
                style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  border: `1px solid ${durability.color}`,
                  borderLeft: `3px solid ${durability.color}`,
                  borderRadius: '3px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
                    DURABILITY:
                  </Line>
                  <Line style={{ margin: 0, fontSize: '0.875rem', fontWeight: 'bold', color: durability.color }}>
                    {durability.tier}
                  </Line>
                </div>
                <Line smoke style={{ margin: 0, fontSize: '0.8rem', fontStyle: 'italic', lineHeight: 1.3 }}>
                  {durability.intel}
                </Line>
              </div>

              {/* Notes */}
              {notes && notes.length > 0 && (
                <div
                  style={{
                    marginTop: '1rem',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(251, 191, 36, 0.1)',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    borderRadius: '3px',
                  }}
                >
                  {notes.map((note, i) => (
                    <Line
                      key={i}
                      yellow
                      style={{
                        margin: 0,
                        fontSize: '0.875rem',
                        marginBottom: i < notes.length - 1 ? '0.5rem' : '0'
                      }}
                    >
                      • {note}
                    </Line>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Image with effects */}
            <div
              style={{
                border: `2px solid ${threatColor}`,
                borderRadius: '4px',
                backgroundColor: `${threatColor}15`,
                overflow: 'hidden',
                position: 'relative',
                height: '300px',
              }}
            >
              {/* Image container */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}
              >
                {imageSource ? (
                  <img
                    src={imageSource}
                    alt={name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'sepia(0.2) hue-rotate(160deg) saturate(1.2)',
                    }}
                  />
                ) : (
                  // Silhouette fallback
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem',
                      opacity: 0.3,
                    }}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgb(148, 163, 184)',
                        borderRadius: '50%',
                      }}
                    />
                    <div
                      style={{
                        width: '100px',
                        height: '80px',
                        backgroundColor: 'rgb(148, 163, 184)',
                        borderRadius: '50% 50% 0 0',
                      }}
                    />
                  </div>
                )}

                {/* Scanline overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `repeating-linear-gradient(
                      0deg,
                      rgba(0, 255, 136, 0.03) 0px,
                      transparent 1px,
                      transparent 2px,
                      rgba(0, 255, 136, 0.03) 3px
                    )`,
                    pointerEvents: 'none',
                  }}
                />

                {/* Moving scan line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.8), transparent)',
                    boxShadow: '0 0 8px rgba(0, 255, 136, 0.6)',
                    animation: 'scan-move 3s linear infinite',
                    pointerEvents: 'none',
                  }}
                />

                {/* Green tint */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 255, 136, 0.08)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Extractable */}
          <Extractable
            id={`${id}-bounty-extractable`}
            digitalItems={[
              {
                id: `${id}-bounty-credits-item`,
                label: 'Bounty Payment',
                description: `Proof of capture - ${sponsor}`,
                value: credits,
                isCredits: true,
              }
            ]}
          />
        </div>

        {Boolean(children) && (
          <div style={{
            padding: '1rem',
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '6px',
          }}>
            {children}
          </div>
        )}

        {/* Footer warning */}
        <div
          style={{
            padding: '0.75rem 1rem',
            borderTop: '1px solid rgb(100, 116, 139)',
            backgroundColor: 'rgb(51, 65, 85)',
            textAlign: 'center',
          }}
        >
          <Line red style={{ fontSize: '0.7rem', margin: 0, fontWeight: 'bold', letterSpacing: '0.1em' }}>
            ARMED AND DANGEROUS - EXTREME CAUTION ADVISED
          </Line>
        </div>
      </div>

      {/* CSS animation */}
      <style>{`
        @keyframes scan-move {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(300px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
