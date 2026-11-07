import Extractable from '../Extractable/Extractable';

/**
 * RCDAlert - Jailbroken RCD injecting tactical intel
 *
 * Sits visually apart from native terminal UI — foreign insert feel.
 * Purple = standard intel.
 *
 * It can also flag a drop: loot the punk's jailbroken RCD detected that
 * nobody else would notice (cash behind a dryer filter, an item under an
 * offering plate, credits on a forgotten account). Give the node a mundane
 * name ("Dryer #3") so search can't find it; the alert is the discovery.
 *
 * Props:
 * - message: String — main alert text
 * - details: Array of strings — secondary info lines
 * - children: ReactNode (optional)
 *
 * Loot (all optional; any of them makes this a drop):
 * - id: String — required with loot; unique, remembers what's been taken
 * - cash: Number — physical cash / credchip, goes to the wallet's credits
 * - physical: Array — physical items, same shape as Safe's `physical`
 * - credits: Number — digital credits, claimable remotely
 * - digital: Array — digital items, claimable remotely
 */

export default function RCDAlert({
  message,
  title,
  details,
  notes,
  children,
  id,
  cash = 0,
  physical = [],
  credits = 0,
  digital = [],
}) {
  const color    = 'rgb(168, 85, 247)';
  const colorDim = 'rgba(168, 85, 247, 0.3)';
  const glow     = 'rgba(168, 85, 247, 0.25)';

  const alert_title = title || message;
  const alert_notes = notes || details || [];

  // Physical cash rides with the physical items as a credits entry
  // (Extractable adds isCredits entries to the wallet's credits).
  const physicalItems = [
    ...physical,
    ...(cash ? [{ id: `${id}_cash`, label: 'Cash', value: cash, isCredits: true }] : []),
  ];

  const hasLoot = Boolean(id) && (physicalItems.length > 0 || digital.length > 0 || credits > 0);

  return (
    <div style={{
      fontFamily: "'Courier New', Courier, monospace",
      backgroundColor: 'rgb(12, 8, 18)',
      border: `1px solid ${colorDim}`,
      borderLeft: `5px solid ${color}`,
      borderRadius: '0 4px 4px 0',
      padding: '0.65rem 0.9rem',
      boxShadow: `0 0 18px ${glow}, 0 2px 8px rgba(0,0,0,0.6)`,
    }}>

      {/* Header row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.5rem',
        marginBottom: '0.45rem',
      }}>
        <span style={{
          color,
          fontSize: '0.65rem',
          fontWeight: 'bold',
          letterSpacing: '0.12em',
          textShadow: `0 0 8px ${color}`,
        }}>
          ◈ RCD-7_INTEL.SYS
        </span>

        {hasLoot && (
          <span style={{
            color: 'rgb(79, 209, 197)',
            fontSize: '0.6rem',
            fontWeight: 'bold',
            letterSpacing: '0.12em',
            border: '1px solid rgba(79, 209, 197, 0.4)',
            borderRadius: '2px',
            padding: '0.05rem 0.35rem',
          }}>
            DROP DETECTED
          </span>
        )}
      </div>

      {/* Divider */}
      <div style={{
        borderTop: `1px solid ${colorDim}`,
        marginBottom: '0.5rem',
      }} />

      {/* Message */}
      {alert_title && (
        <div style={{
          display: 'flex',
          gap: '0.4rem',
          marginBottom: alert_notes.length > 0 || children || hasLoot ? '0.45rem' : 0,
        }}>
          <span style={{
            color,
            fontSize: '0.85rem',
            fontWeight: 'bold',
            flexShrink: 0,
            textShadow: `0 0 6px ${color}`,
          }}>›</span>
          <span style={{
            color: 'rgb(255, 255, 255)',
            fontSize: '0.82rem',
            lineHeight: '1.5',
          }}>
            {alert_title}
          </span>
        </div>
      )}

      {/* Details */}
      {alert_notes.length > 0 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem',
          marginBottom: children || hasLoot ? '0.5rem' : 0,
          paddingLeft: '0.75rem',
        }}>
          {alert_notes.map((alert_note, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
              <span style={{
                color: 'rgb(79, 209, 197)',
                fontSize: '0.72rem',
                flexShrink: 0,
                marginTop: '0.1rem',
              }}>─</span>
              <span style={{
                color: 'rgb(203, 213, 225)',
                fontSize: '0.75rem',
                lineHeight: '1.5',
              }}>{alert_note}</span>
            </div>
          ))}
        </div>
      )}

      {/* Drop contents */}
      {hasLoot && (
        <div style={{
          marginTop: '0.5rem',
          paddingTop: '0.5rem',
          borderTop: `1px dashed ${colorDim}`,
        }}>
          <Extractable
            id={`${id}-rcd-drop`}
            physicalItems={physicalItems}
            digitalItems={digital}
            credits={credits}
          />
        </div>
      )}

      {/* Children */}
      {children && (
        <div style={{
          marginTop: '0.5rem',
          paddingTop: '0.5rem',
          borderTop: `1px dashed ${colorDim}`,
        }}>
          {children}
        </div>
      )}

    </div>
  );
}
