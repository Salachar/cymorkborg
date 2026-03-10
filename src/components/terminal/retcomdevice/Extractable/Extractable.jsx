import { useState } from 'react';
import { Line, Divider } from '@terminal/TerminalComponents';
import { getExtracted, saveExtracted, getWallet, saveWallet } from '@utils/localStorage';

/**
 * Extractable - Reusable item extraction interface
 *
 * Props:
 * - id: Unique identifier (e.g., "safe-master-bedroom")
 * - credits: Number — shorthand for a digital credits item
 * - physicalItems: Array<{ id, label, description?, die?, cost?, value?, isCredits? }>
 * - digitalItems: Array (same schema)
 * - disabled: Disable all extraction (default: false)
 * - onExtract: Callback(items, totalValue, 'physical' | 'digital') (optional)
 */
export default function Extractable({
  id,
  credits = 0,
  physicalItems = [],
  digitalItems = [],
  disabled = false,
  onExtract,
}) {
  const useDigitalItems = [
    ...digitalItems,
    ...(credits ? [{
      id: `${id}_basic_credits`,
      label: 'Available Credits',
      description: '',
      value: credits,
      isCredits: true,
    }] : []),
  ];

  // ─── State ────────────────────────────────────────────────────────────────

  const [extractedPhysicalIds, setExtractedPhysicalIds] = useState(() =>
    new Set(getExtracted()[`${id}-physical-ids`] || [])
  );

  const [extractedDigitalIds, setExtractedDigitalIds] = useState(() =>
    new Set(getExtracted()[`${id}-digital-ids`] || [])
  );

  const allPhysicalTaken = physicalItems.length > 0 && physicalItems.every(i => extractedPhysicalIds.has(i.id));
  const allDigitalTaken  = useDigitalItems.length > 0 && useDigitalItems.every(i => extractedDigitalIds.has(i.id));

  // ─── Persistence ──────────────────────────────────────────────────────────

  const persistIds = (sectionKey, ids) => {
    const extracted = getExtracted();
    extracted[sectionKey] = [...ids];
    saveExtracted(extracted);
  };

  const addToWallet = (items) => {
    const wallet = getWallet();
    items.forEach(item => {
      if (item.isCredits) {
        wallet.credits += item.value || 0;
      } else {
        wallet.items.push({
          id: item.id,
          label: item.label,
          description: item.description,
          die: item.die,
          cost: item.cost,
          value: item.value,
          quantity: item.quantity || 1,
          section: item.section || null,
        });
      }
    });
    saveWallet(wallet);
  };

  // ─── Handlers ─────────────────────────────────────────────────────────────

  const extractItem = (item, ids, setIds, sectionKey) => {
    if (disabled || ids.has(item.id)) return;
    const next = new Set([...ids, item.id]);
    setIds(next);
    persistIds(sectionKey, next);
    addToWallet([item]);
  };

  const extractAll = (items, ids, setIds, sectionKey, type) => {
    if (disabled) return;
    const remaining = items.filter(i => !ids.has(i.id));
    if (!remaining.length) return;
    const next = new Set(items.map(i => i.id));
    setIds(next);
    persistIds(sectionKey, next);
    addToWallet(remaining);
    if (onExtract) {
      const value = remaining.reduce((sum, i) => sum + (i.value || 0), 0);
      onExtract(remaining, value, type);
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {physicalItems.length > 0 && (
        <ItemSection
          label="PHYSICAL ITEMS"
          sublabel="Physical presence required"
          accentColor="rgb(251, 191, 36)"
          buttonLabel="TAKE"
          buttonLabelPast="TAKEN"
          items={physicalItems}
          extractedIds={extractedPhysicalIds}
          allTaken={allPhysicalTaken}
          disabled={disabled}
          onExtractItem={(item) => extractItem(item, extractedPhysicalIds, setExtractedPhysicalIds, `${id}-physical-ids`)}
          onExtractAll={() => extractAll(physicalItems, extractedPhysicalIds, setExtractedPhysicalIds, `${id}-physical-ids`, 'physical')}
        />
      )}

      {useDigitalItems.length > 0 && (
        <ItemSection
          label="DIGITAL ITEMS"
          sublabel="Extractable remotely via network connection"
          accentColor="rgb(79, 209, 197)"
          buttonLabel="CLAIM"
          buttonLabelPast="CLAIMED"
          items={useDigitalItems}
          extractedIds={extractedDigitalIds}
          allTaken={allDigitalTaken}
          disabled={disabled}
          onExtractItem={(item) => extractItem(item, extractedDigitalIds, setExtractedDigitalIds, `${id}-digital-ids`)}
          onExtractAll={() => extractAll(useDigitalItems, extractedDigitalIds, setExtractedDigitalIds, `${id}-digital-ids`, 'digital')}
        />
      )}
    </div>
  );
}

// ─── ItemSection ─────────────────────────────────────────────────────────────

function ItemSection({
  label, sublabel, accentColor,
  buttonLabel, buttonLabelPast,
  items, extractedIds, allTaken, disabled,
  onExtractItem, onExtractAll,
}) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid rgb(71, 85, 105)',
        borderRadius: '3px',
        padding: '0.75rem',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <div style={{ flex: 1 }}>
          <Line style={{ margin: 0, color: accentColor, fontSize: '0.875rem', fontWeight: 'bold' }}>
            {label}
          </Line>
          {!allTaken && (
            <Line smoke style={{ fontSize: '0.7rem', margin: 0, marginTop: '0.25rem' }}>
              {sublabel}
            </Line>
          )}
        </div>

        <ActionButton
          label={allTaken ? `✓ ${buttonLabelPast}` : buttonLabel}
          done={allTaken}
          disabled={disabled}
          color={accentColor}
          onClick={onExtractAll}
        />
      </div>

      <Divider />

      {/* Items list */}
      <div style={{ marginTop: '0.75rem' }}>
        {items.map((item, i) => {
          const taken = extractedIds.has(item.id);
          return (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                marginBottom: i < items.length - 1 ? '0.5rem' : 0,
                opacity: taken ? 0.6 : 1,
              }}
            >
              <span style={{ color: taken ? 'rgb(148, 163, 184)' : accentColor, fontSize: '0.875rem', flexShrink: 0 }}>
                {taken ? '✓' : '→'}
              </span>

              <div style={{ flex: 1 }}>
                <Line style={{ margin: 0, color: taken ? 'rgb(148, 163, 184)' : accentColor, fontSize: '0.875rem' }}>
                  <strong>{item.label}</strong>
                  {item.quantity > 1 && (
                    <span style={{ fontWeight: 'normal', opacity: 0.7, marginLeft: '0.4rem' }}>×{item.quantity}</span>
                  )}
                  {item.description && <span>: {item.description}</span>}
                  {item.value && item.isCredits && (
                    <span style={{ color: taken ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)', marginLeft: '0.5rem', fontWeight: 'bold' }}>
                      [{item.value.toLocaleString()}¤]
                    </span>
                  )}
                </Line>
              </div>

              {!taken && (
                <ActionButton
                  label={buttonLabel}
                  done={false}
                  disabled={disabled}
                  color={accentColor}
                  small
                  onClick={() => onExtractItem(item)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── ActionButton ─────────────────────────────────────────────────────────────

function ActionButton({ label, done, disabled, color, small, onClick }) {
  const inactive = done || disabled;
  return (
    <button
      onClick={onClick}
      disabled={inactive}
      style={{
        padding: small ? '0.2rem 0.5rem' : '0.5rem 1rem',
        fontSize: small ? '0.65rem' : '0.75rem',
        fontWeight: 'bold',
        backgroundColor: inactive
          ? (small ? 'transparent' : 'rgb(45, 53, 72)')
          : small
            ? `${color}26`
            : color,
        color: inactive ? 'rgb(148, 163, 184)' : small ? color : 'rgb(19, 23, 34)',
        border: small ? `1px solid ${inactive ? 'transparent' : color}66` : 'none',
        borderRadius: '3px',
        cursor: inactive ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        fontFamily: 'monospace',
        flexShrink: 0,
      }}
    >
      {label}
    </button>
  );
}
