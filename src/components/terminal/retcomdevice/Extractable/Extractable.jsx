import { useState } from 'react';
import { Line, Divider } from '@terminal/TerminalComponents';

import {
  RETCOM_EXTRACTED_KEY,
  RETCOM_WALLET_KEY,
} from '@utils/localStorage';

/**
 * Extractable Component - Reusable item extraction interface
 *
 * Generic component for taking items (stealing, claiming, retrieving, etc.)
 * Tracks extraction state in localStorage under unified key.
 * Physical and digital items can be extracted independently.
 * NOW SAVES TO WALLET: Items and credits are saved to the terminal wallet.
 *
 * Props:
 * - id: Unique identifier (e.g., "safe-master-bedroom")
 * - physicalItems: Array of item objects with schema:
 *     {
 *       id: "filament_knife",
 *       label: "Filament Knife",
 *       description: "Monomolecular edge cuts through most materials",
 *       die: "d6", (optional)
 *       cost: "300¤", (optional)
 *       value: 300, (optional, for credits)
 *       isCredits: true (optional, flags as credits vs item)
 *     }
 * - digitalItems: Array of item objects (same schema as physicalItems)
 * - disabled: Disable extraction (default: false)
 * - onExtract: Callback function when extracted (optional)
 */

export default function Extractable({
  id,
  credits = 0,
  physicalItems = [],
  digitalItems = [],
  disabled = false,
  onExtract,
}) {
  let useDigitalItems = [...digitalItems];
  if (credits) {
    useDigitalItems.push({
      id: `${id}_basic_credits`,
      label: 'Available Credits',
      description: '',
      value: credits,
      isCredits: true,
    })
  }

  const [extractedPhysical, setExtractedPhysical] = useState(() => {
    try {
      const extracted = JSON.parse(localStorage.getItem(RETCOM_EXTRACTED_KEY) || '{}');
      return extracted[`${id}-physical`] === true;
    } catch {
      return false;
    }
  });

  const [extractedDigital, setExtractedDigital] = useState(() => {
    try {
      const extracted = JSON.parse(localStorage.getItem(RETCOM_EXTRACTED_KEY) || '{}');
      return extracted[`${id}-digital`] === true;
    } catch {
      return false;
    }
  });

  const saveToWallet = (items) => {
    try {
      const wallet = JSON.parse(localStorage.getItem(RETCOM_WALLET_KEY) || '{"credits":0,"items":[]}');

      items.forEach(item => {
        if (item.isCredits) {
          // Add to credits total
          wallet.credits += item.value || 0;
        } else {
          // Add to items array (using standard schema)
          wallet.items.push({
            id: item.id,
            label: item.label,
            description: item.description,
            die: item.die,
            cost: item.cost,
            value: item.value,
          });
        }
      });

      localStorage.setItem(RETCOM_WALLET_KEY, JSON.stringify(wallet));
      // Dispatch custom event so TerminalWallet can update
      window.dispatchEvent(new Event('walletUpdated'));
    } catch (error) {
      console.error('Failed to save to wallet:', error);
    }
  };

  const handleExtractPhysical = () => {
    if (disabled || extractedPhysical) return;

    try {
      const extracted = JSON.parse(localStorage.getItem(RETCOM_EXTRACTED_KEY) || '{}');
      extracted[`${id}-physical`] = true;
      localStorage.setItem(RETCOM_EXTRACTED_KEY, JSON.stringify(extracted));
      setExtractedPhysical(true);

      // Save to wallet
      saveToWallet(physicalItems);

      if (onExtract) {
        const value = physicalItems.reduce((sum, item) => sum + (item.value || 0), 0);
        onExtract(physicalItems, value, 'physical');
      }
    } catch (error) {
      console.error('Failed to save extraction state:', error);
    }
  };

  const handleExtractDigital = () => {
    if (disabled || extractedDigital) return;

    try {
      const extracted = JSON.parse(localStorage.getItem(RETCOM_EXTRACTED_KEY) || '{}');
      extracted[`${id}-digital`] = true;
      localStorage.setItem(RETCOM_EXTRACTED_KEY, JSON.stringify(extracted));
      setExtractedDigital(true);

      // Save to wallet
      saveToWallet(useDigitalItems);

      if (onExtract) {
        const value = useDigitalItems.reduce((sum, item) => sum + (item.value || 0), 0);
        onExtract(useDigitalItems, value, 'digital');
      }
    } catch (error) {
      console.error('Failed to save extraction state:', error);
    }
  };

  const hasPhysical = physicalItems.length > 0;
  const hasDigital = useDigitalItems.length > 0;

  const labels = {
    physical: { label: 'PHYSICAL ITEMS', button: 'TAKE', buttonPast: 'TAKEN' },
    digital: { label: 'DIGITAL ITEMS', button: 'CLAIM', buttonPast: 'CLAIMED' },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Physical Items Section */}
      {hasPhysical && (
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgb(71, 85, 105)',
            borderRadius: '3px',
            padding: '0.75rem',
          }}
        >
          {/* Header with button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
            }}
          >
            <div style={{ flex: 1 }}>
              <Line
                style={{
                  margin: 0,
                  color: 'rgb(251, 191, 36)',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                }}
              >
                {labels.physical.label}
              </Line>

              {!extractedPhysical && (
                <Line smoke style={{ fontSize: '0.7rem', margin: 0, marginTop: '0.25rem' }}>
                  Physical presence required
                </Line>
              )}
            </div>

            {/* Extract button */}
            <button
              onClick={handleExtractPhysical}
              disabled={extractedPhysical || disabled}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                backgroundColor: extractedPhysical
                  ? 'rgb(45, 53, 72)'
                  : disabled
                    ? 'rgb(45, 53, 72)'
                    : 'rgb(251, 191, 36)',
                color: extractedPhysical
                  ? 'rgb(148, 163, 184)'
                  : disabled
                    ? 'rgb(148, 163, 184)'
                    : 'rgb(19, 23, 34)',
                border: 'none',
                borderRadius: '3px',
                cursor: (extractedPhysical || disabled) ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'monospace',
                flexShrink: 0,
              }}
            >
              {extractedPhysical ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ✓ {labels.physical.buttonPast}
                </span>
              ) : (
                labels.physical.button
              )}
            </button>
          </div>

          <Divider />

          {/* Items list */}
          <div style={{ marginTop: '0.75rem' }}>
            {physicalItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: i < physicalItems.length - 1 ? '0.5rem' : '0',
                  opacity: extractedPhysical ? 0.6 : 1,
                }}
              >
                <span style={{
                  color: extractedPhysical ? 'rgb(148, 163, 184)' : 'rgb(251, 191, 36)',
                  fontSize: '0.875rem',
                  flexShrink: 0
                }}>
                  {extractedPhysical ? '✓' : '→'}
                </span>
                <div style={{ flex: 1 }}>
                  <Line
                    style={{
                      margin: 0,
                      color: extractedPhysical ? 'rgb(148, 163, 184)' : 'rgb(251, 191, 36)',
                      fontSize: '0.875rem',
                    }}
                  >
                    <strong>{item.label}</strong>
                    {item.description && <span>: {item.description}</span>}
                    {item.value && item.isCredits && (
                      <span style={{
                        color: extractedPhysical ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)',
                        marginLeft: '0.5rem',
                        fontWeight: 'bold',
                      }}>
                        [{item.value.toLocaleString()}¤]
                      </span>
                    )}
                  </Line>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Digital Items Section */}
      {hasDigital && (
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgb(71, 85, 105)',
            borderRadius: '3px',
            padding: '0.75rem',
          }}
        >
          {/* Header with button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
            }}
          >
            <div style={{ flex: 1 }}>
              <Line
                style={{
                  margin: 0,
                  color: 'rgb(79, 209, 197)',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                }}
              >
                {labels.digital.label}
              </Line>
              {!extractedDigital && (
                <Line smoke style={{ fontSize: '0.7rem', margin: 0, marginTop: '0.25rem' }}>
                  Extractable remotely via network connection
                </Line>
              )}
            </div>

            {/* Extract button */}
            <button
              onClick={handleExtractDigital}
              disabled={extractedDigital || disabled}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                backgroundColor: extractedDigital
                  ? 'rgb(45, 53, 72)'
                  : disabled
                    ? 'rgb(45, 53, 72)'
                    : 'rgb(79, 209, 197)',
                color: extractedDigital
                  ? 'rgb(148, 163, 184)'
                  : disabled
                    ? 'rgb(148, 163, 184)'
                    : 'rgb(19, 23, 34)',
                border: 'none',
                borderRadius: '3px',
                cursor: (extractedDigital || disabled) ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'monospace',
                flexShrink: 0,
              }}
            >
              {extractedDigital ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ✓ {labels.digital.buttonPast}
                </span>
              ) : (
                labels.digital.button
              )}
            </button>
          </div>

          <Divider />

          {/* Items list */}
          <div style={{ marginTop: '0.75rem' }}>
            {useDigitalItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: i < useDigitalItems.length - 1 ? '0.5rem' : '0',
                  opacity: extractedDigital ? 0.6 : 1,
                }}
              >
                <span style={{
                  color: extractedDigital ? 'rgb(148, 163, 184)' : 'rgb(79, 209, 197)',
                  fontSize: '0.875rem',
                  flexShrink: 0
                }}>
                  {extractedDigital ? '✓' : '→'}
                </span>
                <div style={{ flex: 1 }}>
                  <Line
                    style={{
                      margin: 0,
                      color: extractedDigital ? 'rgb(148, 163, 184)' : 'rgb(79, 209, 197)',
                      fontSize: '0.875rem',
                    }}
                  >
                    <strong>{item.label}</strong>
                    {item.description && <span>: {item.description}</span>}
                    {item.value && item.isCredits && (
                      <span style={{
                        color: extractedDigital ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)',
                        marginLeft: '0.5rem',
                        fontWeight: 'bold',
                      }}>
                        [{item.value.toLocaleString()}¤]
                      </span>
                    )}
                  </Line>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
