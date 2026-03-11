import { useState, useEffect } from 'react';
import { Line, Section, Spacer, Divider } from '@terminal/TerminalComponents';
import { formatCredits } from '@utils/general';
import { getWallet, saveWallet } from '@utils/localStorage';
import { searchAllItems } from '@data/tables';
import BuilderManager from '@data/builder';

// ─── TransferConfirm ──────────────────────────────────────────────────────────

function TransferConfirm({ character, onTransfer }) {
  const [pending, setPending] = useState(false);

  if (pending) {
    return (
      <div style={{ display: 'flex', gap: '0.4rem' }}>
        <button
          onClick={() => setPending(false)}
          style={{
            flex: 1, padding: '0.35rem 0.5rem', fontSize: '0.65rem', fontWeight: 'bold',
            backgroundColor: 'rgba(71, 85, 105, 0.3)', color: 'rgb(148, 163, 184)',
            border: '1px solid rgb(71, 85, 105)', borderRadius: '3px',
            cursor: 'pointer', fontFamily: 'monospace',
          }}
        >
          CANCEL
        </button>
        <button
          onClick={() => { onTransfer(character); setPending(false); }}
          style={{
            flex: 1, padding: '0.35rem 0.5rem', fontSize: '0.65rem', fontWeight: 'bold',
            backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'rgb(34, 197, 94)',
            border: '1px solid rgb(34, 197, 94)', borderRadius: '3px',
            cursor: 'pointer', fontFamily: 'monospace',
          }}
        >
          CONFIRM
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '0.4rem' }}>
      <button
        onClick={() => setPending(true)}
        style={{
          flex: 1, padding: '0.35rem 0.5rem', fontSize: '0.65rem', fontWeight: 'bold',
          backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'rgb(34, 197, 94)',
          border: '1px solid rgba(34, 197, 94, 0.35)', borderRadius: '3px',
          cursor: 'pointer', fontFamily: 'monospace',
        }}
      >
        TRANSFER
      </button>
      <button
        disabled
        style={{
          flex: 1, padding: '0.35rem 0.5rem', fontSize: '0.65rem', fontWeight: 'bold',
          backgroundColor: 'transparent', color: 'rgb(55, 65, 81)',
          border: '1px solid rgb(55, 65, 81)', borderRadius: '3px',
          cursor: 'not-allowed', fontFamily: 'monospace',
        }}
      >
        CONFIRM
      </button>
    </div>
  );
}

// ─── TerminalWallet ───────────────────────────────────────────────────────────

export default function TerminalWallet() {
  const [wallet, setWallet] = useState(getWallet);

  useEffect(() => {
    const loadWallet = () => setWallet(getWallet());
    window.addEventListener('walletUpdated', loadWallet);
    return () => window.removeEventListener('walletUpdated', loadWallet);
  }, []);

  const handleTransfer = (character) => {
    wallet.items.forEach(item => character.addItemToGear(item));
    character.credits += wallet.credits;
    BuilderManager.save();
    saveWallet({ credits: 0, items: [] });
    setWallet({ credits: 0, items: [] });
  };

  const handleClearWallet = () => {
    if (window.confirm('Clear all extracted items and credits? This cannot be undone.')) {
      saveWallet({ credits: 0, items: [] });
      setWallet({ credits: 0, items: [] });
    }
  };

  const totalItems = wallet.items.length;
  const isEmpty = wallet.credits === 0 && totalItems === 0;

  const lastId = BuilderManager.lastSelectedId;
  const allChars = Object.values(BuilderManager.characters);
  const sortedChars = [
    ...allChars.filter(c => c.id === lastId),
    ...allChars.filter(c => c.id !== lastId),
  ];

  return (
    <div
      style={{
        border: '2px solid rgb(251, 191, 36)',
        borderRadius: '4px',
        backgroundColor: 'rgba(30, 41, 59, 0.5)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: 'rgb(51, 65, 85)',
          padding: '0.75rem 1rem',
          borderBottom: '1px solid rgb(251, 191, 36)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <div>
          <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>TERMINAL WALLET</Line>
          <Line yellow large bold style={{ margin: 0 }}>EXTRACTED ASSETS</Line>
        </div>
        <div
          style={{
            padding: '0.35rem 0.75rem', borderRadius: '3px',
            backgroundColor: 'rgba(251, 191, 36, 0.2)',
            border: '1px solid rgb(251, 191, 36)',
            textAlign: 'center', flexShrink: 0,
          }}
        >
          <div style={{ fontSize: '0.7rem', color: 'rgb(148, 163, 184)', marginBottom: '0.15rem' }}>TOTAL CREDITS</div>
          <div style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)', fontWeight: 'bold', color: 'rgb(251, 191, 36)', fontFamily: 'monospace' }}>
            {formatCredits(wallet.credits)}
          </div>
        </div>
      </div>

      <div style={{ padding: '1rem' }}>
        {isEmpty ? (
          <div
            style={{
              textAlign: 'center', padding: '3rem 1rem',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgb(71, 85, 105)', borderRadius: '3px',
            }}
          >
            <Line smoke style={{ margin: 0, fontSize: '1rem', opacity: 0.5 }}>No extracted items or credits</Line>
            <Line smoke style={{ margin: 0, fontSize: '0.875rem', opacity: 0.4, marginTop: '0.5rem' }}>
              Extract items from safes, wallets, and other devices
            </Line>
          </div>
        ) : (
          <>
            <Section title="CREDITS EXTRACTED:" color="yellow">
              <div
                style={{
                  display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
                  alignItems: 'center', gap: '0.25rem', padding: '0.75rem',
                  backgroundColor: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.3)', borderRadius: '3px',
                }}
              >
                <Line yellow style={{ margin: 0 }}>Digital currency (transferable)</Line>
                <Line yellow bold style={{ margin: 0, fontSize: '1.25rem' }}>{formatCredits(wallet.credits)}</Line>
              </div>
            </Section>

            <Spacer />

            <Section title={`ITEMS EXTRACTED: (${totalItems})`} color="cyan">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {wallet.items.map((item, i) => {
                  const found = searchAllItems(item.id);
                  const display = found ? { ...found.entry, quantity: item.quantity || 1 } : item;
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', padding: '0.5rem 0.75rem', backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgb(71, 85, 105)', borderRadius: '3px' }}>
                      <span style={{ color: 'rgb(79, 209, 197)', fontSize: '0.875rem', flexShrink: 0 }}>→</span>
                      <div style={{ flex: 1 }}>
                        <Line cyan bold style={{ margin: 0, fontSize: '0.875rem' }}>
                          {display.label}
                          {display.quantity > 1 && (
                            <span style={{ color: 'rgb(148, 163, 184)', fontWeight: 'normal', marginLeft: '0.4rem' }}>×{display.quantity}</span>
                          )}
                          {display.die && (
                            <span style={{ fontFamily: 'monospace', marginLeft: '0.4rem', opacity: 0.8, fontWeight: 'normal' }}>{display.die}</span>
                          )}
                          {display.cost && (
                            <span style={{ color: 'rgb(34, 197, 94)', marginLeft: '0.4rem', fontWeight: 'normal', fontSize: '0.8rem' }}>{display.cost}</span>
                          )}
                        </Line>
                        {display.description && (
                          <Line smoke style={{ margin: 0, fontSize: '0.8rem', marginTop: '0.15rem' }}>{display.description}</Line>
                        )}
                        {item.value && !found && (
                          <Line yellow style={{ margin: 0, fontSize: '0.8rem', marginTop: '0.15rem' }}>
                            ~{formatCredits(item.value)}
                          </Line>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Section>

            <Spacer />

            {/* Transfer targets */}
            <Section title="TRANSFER TO CHARACTER:" color="green">
              {sortedChars.length === 0 ? (
                <Line smoke style={{ margin: 0, fontSize: '0.8rem', opacity: 0.5 }}>No characters found</Line>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {sortedChars.map((character) => {
                    const isLast = character.id === lastId;
                    return (
                      <div
                        key={character.id}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.75rem',
                          padding: '0.5rem 0.75rem',
                          backgroundColor: isLast ? 'rgba(34, 197, 94, 0.07)' : 'rgba(15, 23, 42, 0.4)',
                          border: `1px solid ${isLast ? 'rgba(34, 197, 94, 0.3)' : 'rgb(71, 85, 105)'}`,
                          borderRadius: '3px',
                        }}
                      >
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: '0.6rem', color: character.color, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {character.class}
                            {isLast && <span style={{ color: 'rgb(34, 197, 94)', marginLeft: '0.4rem' }}>● ACTIVE</span>}
                          </div>
                          <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: 'rgb(226, 232, 240)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {character.name || 'No Name'}
                          </div>
                        </div>
                        <div style={{ flexShrink: 0, minWidth: '150px' }}>
                          <TransferConfirm character={character} onTransfer={handleTransfer} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </Section>

            <Divider />

            <button
              onClick={handleClearWallet}
              style={{
                width: '100%', padding: '0.6rem', fontSize: '0.75rem', fontWeight: 'bold',
                backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'rgb(239, 68, 68)',
                border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '3px',
                cursor: 'pointer', fontFamily: 'monospace', transition: 'all 0.2s',
              }}
            >
              CLEAR WALLET
            </button>
          </>
        )}
      </div>
    </div>
  );
}
