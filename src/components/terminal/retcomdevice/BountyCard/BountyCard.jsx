import { useState, useEffect } from 'react';
import { Line, Divider } from '@terminal/TerminalComponents';
import Extractable from '../Extractable/Extractable';
import { formatCredits } from '@utils/general';
import { RETCOM_EXTRACTED_KEY } from '@utils/localStorage';
import './BountyCard.css';

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
      const extracted = JSON.parse(localStorage.getItem(RETCOM_EXTRACTED_KEY) || '{}');
      return extracted[id] === true;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const checkClaimed = () => {
      try {
        const extracted = JSON.parse(localStorage.getItem(RETCOM_EXTRACTED_KEY) || '{}');
        setIsClaimed(extracted[id] === true);
      } catch {
        setIsClaimed(false);
      }
    };
    window.addEventListener('storage', checkClaimed);
    return () => window.removeEventListener('storage', checkClaimed);
  }, [id]);

  const getDurabilityAssessment = () => {
    if (hp <= 4) return { tier: 'FRAGILE', intel: 'Easy takedown. One good hit should do it.', color: 'rgb(34, 197, 94)' };
    if (hp <= 8) return { tier: 'STANDARD', intel: 'Average resilience. Took a broken bottle to the ribs and kept moving.', color: 'rgb(251, 191, 36)' };
    if (hp <= 12) return { tier: 'REINFORCED', intel: 'Survived three-story fall through synthglass roof. Walked away.', color: 'rgb(249, 115, 22)' };
    if (hp <= 16) return { tier: 'FORTIFIED', intel: "Team of four couldn't put them down. Heavy chrome or just tough as hell.", color: 'rgb(239, 68, 68)' };
    return { tier: 'APEX', intel: "Walked through pulse rifle fire. Bring everything you've got.", color: 'rgb(220, 38, 38)' };
  };

  const getThreatLevel = () => {
    if (threat) return threat;
    if (hp <= 6) return 'LOW';
    if (hp <= 10) return 'MEDIUM';
    if (hp <= 14) return 'HIGH';
    return 'CRITICAL';
  };

  const getThreatColor = () => {
    switch (getThreatLevel()) {
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
    <div className={`bounty-card ${isClaimed ? 'bounty-card-claimed' : ''}`}>

      {/* Header */}
      <div className="bounty-header">
        <div className="bounty-header-left">
          <div className="bounty-title">BOUNTY LISTING</div>
          <div className="bounty-id">[ID: {id}]</div>
        </div>
        <div className="bounty-header-right">
          <div
            className="bounty-status"
            style={{
              borderColor: isClaimed ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)',
              color: isClaimed ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)',
              backgroundColor: isClaimed ? 'rgba(148,163,184,0.1)' : 'rgba(34,197,94,0.1)',
            }}
          >
            <div
              className="bounty-status-dot"
              style={{
                backgroundColor: isClaimed ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)',
                boxShadow: `0 0 8px ${isClaimed ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)'}`,
              }}
            />
            {isClaimed ? 'CLAIMED' : 'ACTIVE'}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bounty-content">

        {/* Left — main info */}
        <div className="bounty-main">

          {/* Name */}
          <div className="bounty-name-section">
            <div
              className="bounty-name"
              style={{
                color: isClaimed ? 'rgb(148, 163, 184)' : 'rgb(226, 232, 240)',
                textDecoration: isClaimed ? 'line-through' : 'none',
              }}
            >
              {name}
            </div>
            {alias && <div className="bounty-alias">"{alias}"</div>}
          </div>

          {/* Payment */}
          <div className="bounty-payment-section">
            <div className="bounty-amount">
              <div className="bounty-amount-label">BOUNTY</div>
              <div
                className="bounty-amount-value"
                style={{ color: isClaimed ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)' }}
              >
                {formatCredits(credits)}
              </div>
            </div>
            <div className="bounty-meta">
              <div className="bounty-meta-item">
                <span className="bounty-meta-label">SPONSOR:</span>
                <span className="bounty-meta-value" style={{ color: 'rgb(79, 209, 197)' }}>{sponsor}</span>
              </div>
              <div className="bounty-meta-item">
                <span className="bounty-meta-label">THREAT:</span>
                <span className="bounty-meta-value" style={{ color: threatColor, fontWeight: 'bold' }}>{threatLevel}</span>
              </div>
              {lastSeen && (
                <div className="bounty-meta-item">
                  <span className="bounty-meta-label">LAST SEEN:</span>
                  <span className="bounty-meta-value" style={{ color: 'rgb(250, 204, 21)' }}>{lastSeen}</span>
                </div>
              )}
            </div>
          </div>

          {/* Durability */}
          <div
            className="bounty-durability"
            style={{ borderColor: durability.color }}
          >
            <div className="bounty-durability-tier" style={{ color: durability.color }}>
              {durability.tier}
            </div>
            <div className="bounty-durability-intel">{durability.intel}</div>
          </div>

          {/* Notes */}
          {notes && notes.length > 0 && (
            <div className="bounty-intel-notes">
              {notes.map((note, i) => (
                <div key={i}>{i > 0 && <br />}• {note}</div>
              ))}
            </div>
          )}

          {/* Extractable */}
          <Extractable
            id={`${id}-bounty-extractable`}
            digitalItems={[{
              id: `${id}-bounty-credits-item`,
              label: 'Bounty Payment',
              description: `Proof of capture - ${sponsor}`,
              value: credits,
              isCredits: true,
            }]}
          />
        </div>

        {/* Right — image */}
        <div
          className="bounty-image-area"
          style={{ borderColor: threatColor, backgroundColor: `${threatColor}15` }}
        >
          <div className="bounty-image-container">
            {imageSource ? (
              <img src={imageSource} alt={name} className="bounty-image" />
            ) : (
              <div className="bounty-silhouette">
                <div className="silhouette-head" />
                <div className="silhouette-shoulders" />
              </div>
            )}
            <div className="bounty-scanlines" />
            <div className="bounty-scan-line" />
          </div>

          {/* Threat badge */}
          <div
            className="bounty-threat-badge"
            style={{ backgroundColor: `${threatColor}15` }}
          >
            <div className="threat-label">THREAT LEVEL</div>
            <div className="threat-value" style={{ color: threatColor }}>{threatLevel}</div>
          </div>
        </div>
      </div>

      {Boolean(children) && (
        <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.5)', borderRadius: '6px' }}>
          {children}
        </div>
      )}

      {/* Footer */}
      <div className="bounty-footer">
        <div className="bounty-footer-warning">
          ARMED AND DANGEROUS - EXTREME CAUTION ADVISED
        </div>
      </div>
    </div>
  );
}
