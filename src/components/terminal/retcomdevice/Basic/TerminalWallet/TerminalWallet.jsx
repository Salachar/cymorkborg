import { useState, useEffect } from 'react';
import { Line, Section, Spacer } from '@terminal/TerminalComponents';
import { formatCredits } from '@utils/general';
import { getWallet } from '@utils/localStorage';

/**
 * TerminalWallet - Tracks all extracted items and credits
 *
 * Props:
 * - onTransfer: Callback when transfer button is clicked (optional)
 *   Receives { credits: number, items: array }
 */
export default function TerminalWallet({ onTransfer }) {
  const [wallet, setWallet] = useState(getWallet);

  useEffect(() => {
    const loadWallet = () => setWallet(getWallet());
    window.addEventListener('walletUpdated', loadWallet);
    return () => window.removeEventListener('walletUpdated', loadWallet);
  }, []);

  // const handleTransfer = () => {
  //   if (onTransfer) onTransfer({ credits: wallet.credits, items: wallet.items });
  // };

  // const handleClearWallet = () => {
  //   if (window.confirm('Clear all extracted items and credits? This cannot be undone.')) {
  //     saveWallet({ credits: 0, items: [] });
  //     setWallet({ credits: 0, items: [] });
  //   }
  // };

  const totalItems = wallet.items.length;
  const isEmpty = wallet.credits === 0 && totalItems === 0;

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
            padding: '0.35rem 0.75rem',
            borderRadius: '3px',
            backgroundColor: 'rgba(251, 191, 36, 0.2)',
            border: '1px solid rgb(251, 191, 36)',
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          <div style={{ fontSize: '0.7rem', color: 'rgb(148, 163, 184)', marginBottom: '0.15rem' }}>
            TOTAL CREDITS
          </div>
          <div style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)', fontWeight: 'bold', color: 'rgb(251, 191, 36)', fontFamily: 'monospace' }}>
            {formatCredits(wallet.credits)}
          </div>
        </div>
      </div>

      <div style={{ padding: '1rem' }}>
        {isEmpty ? (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgb(71, 85, 105)',
              borderRadius: '3px',
            }}
          >
            <Line smoke style={{ margin: 0, fontSize: '1rem', opacity: 0.5 }}>
              No extracted items or credits
            </Line>
            <Line smoke style={{ margin: 0, fontSize: '0.875rem', opacity: 0.4, marginTop: '0.5rem' }}>
              Extract items from safes, wallets, and other devices
            </Line>
          </div>
        ) : (
          <>
            <Section title="CREDITS EXTRACTED:" color="yellow">
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  borderRadius: '3px',
                }}
              >
                <Line yellow style={{ margin: 0 }}>Digital currency (transferable)</Line>
                <Line yellow bold style={{ margin: 0, fontSize: '1.25rem' }}>{formatCredits(wallet.credits)}</Line>
              </div>
            </Section>

            <Spacer />

            <Section title={`ITEMS EXTRACTED: (${totalItems})`} color="cyan">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {wallet.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      padding: '0.5rem 0.75rem',
                      backgroundColor: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgb(71, 85, 105)',
                      borderRadius: '3px',
                    }}
                  >
                    <span style={{ color: 'rgb(79, 209, 197)', fontSize: '0.875rem', flexShrink: 0 }}>→</span>
                    <div style={{ flex: 1 }}>
                      <Line cyan bold style={{ margin: 0, fontSize: '0.875rem' }}>{item.label}</Line>
                      {item.description && (
                        <Line smoke style={{ margin: 0, fontSize: '0.8rem', marginTop: '0.25rem' }}>{item.description}</Line>
                      )}
                      {item.value && (
                        <Line yellow style={{ margin: 0, fontSize: '0.8rem', marginTop: '0.25rem' }}>
                          Estimated value: {formatCredits(item.value)}
                        </Line>
                      )}
                      {item.die && (
                        <Line yellow style={{ margin: 0, fontSize: '0.75rem', marginTop: '0.25rem', fontFamily: 'monospace' }}>
                          [{item.die}]
                        </Line>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* <Divider />
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button onClick={handleTransfer} disabled={true} style={{ flex: 1, padding: '0.75rem', fontSize: '0.875rem', fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'rgb(148, 163, 184)', border: '1px solid rgb(71, 85, 105)', borderRadius: '3px', cursor: 'not-allowed', fontFamily: 'monospace' }}>
                TRANSFER TO CHARACTER (Coming Soon)
              </button>
              <button onClick={handleClearWallet} style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', fontWeight: 'bold', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: 'rgb(239, 68, 68)', border: '1px solid rgb(239, 68, 68)', borderRadius: '3px', cursor: 'pointer', fontFamily: 'monospace', transition: 'all 0.2s' }}>
                CLEAR
              </button>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
}

// import { useState, useEffect } from 'react';
// import { Line, Section, Spacer } from '@terminal/TerminalComponents';
// import { formatCredits } from '@utils/general';
// import { WALLET_STORAGE_KEY } from '@utils/localStorage';

// /**
//  * TerminalWallet - Tracks all extracted items and credits
//  *
//  * Reads from localStorage to display everything the player has extracted.
//  * Shows items separately from credits with running total.
//  * Eventually will have "Transfer to Current Character" button.
//  *
//  * Props:
//  * - onTransfer: Callback function when transfer button is clicked (optional)
//  *   Receives { credits: number, items: array }
//  */
// export default function TerminalWallet({ onTransfer }) {
//   const [wallet, setWallet] = useState(() => {
//     try {
//       return JSON.parse(localStorage.getItem(WALLET_STORAGE_KEY) || '{"credits":0,"items":[]}');
//     } catch {
//       return { credits: 0, items: [] };
//     }
//   });

//   // Refresh wallet data on mount and when localStorage changes
//   useEffect(() => {
//     const loadWallet = () => {
//       try {
//         const data = JSON.parse(localStorage.getItem(WALLET_STORAGE_KEY) || '{"credits":0,"items":[]}');
//         setWallet(data);
//       } catch {
//         setWallet({ credits: 0, items: [] });
//       }
//     };

//     // Listen for custom event when wallet is updated
//     window.addEventListener('walletUpdated', loadWallet);
//     return () => window.removeEventListener('walletUpdated', loadWallet);
//   }, []);

//   // const handleTransfer = () => {
//   //   if (onTransfer) {
//   //     onTransfer({
//   //       credits: wallet.credits,
//   //       items: wallet.items,
//   //     });
//   //   }
//   // };

//   // const handleClearWallet = () => {
//   //   if (window.confirm('Clear all extracted items and credits? This cannot be undone.')) {
//   //     localStorage.setItem(WALLET_STORAGE_KEY, JSON.stringify({ credits: 0, items: [] }));
//   //     setWallet({ credits: 0, items: [] });
//   //     window.dispatchEvent(new Event('walletUpdated'));
//   //   }
//   // };

//   const totalItems = wallet.items.length;
//   const isEmpty = wallet.credits === 0 && totalItems === 0;

//   return (
//     <div
//       style={{
//         border: '2px solid rgb(251, 191, 36)',
//         borderRadius: '4px',
//         backgroundColor: 'rgba(30, 41, 59, 0.5)',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Header */}
//       <div
//         style={{
//           backgroundColor: 'rgb(51, 65, 85)',
//           padding: '0.75rem 1rem',
//           borderBottom: '1px solid rgb(251, 191, 36)',
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           gap: '0.5rem',
//         }}
//       >
//         <div>
//           <Line smoke style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>
//             TERMINAL WALLET
//           </Line>
//           <Line yellow large bold style={{ margin: 0 }}>
//             EXTRACTED ASSETS
//           </Line>
//         </div>

//         {/* Total credits display */}
//         <div
//           style={{
//             padding: '0.35rem 0.75rem',
//             borderRadius: '3px',
//             backgroundColor: 'rgba(251, 191, 36, 0.2)',
//             border: '1px solid rgb(251, 191, 36)',
//             textAlign: 'center',
//             flexShrink: 0,
//           }}
//         >
//           <div style={{ fontSize: '0.7rem', color: 'rgb(148, 163, 184)', marginBottom: '0.15rem' }}>
//             TOTAL CREDITS
//           </div>
//           <div
//             style={{
//               fontSize: 'clamp(1rem, 4vw, 1.5rem)',
//               fontWeight: 'bold',
//               color: 'rgb(251, 191, 36)',
//               fontFamily: 'monospace',
//             }}
//           >
//             {formatCredits(wallet.credits)}
//           </div>
//         </div>
//       </div>

//       <div style={{ padding: '1rem' }}>
//         {isEmpty ? (
//           /* Empty state */
//           <div
//             style={{
//               textAlign: 'center',
//               padding: '3rem 1rem',
//               backgroundColor: 'rgba(15, 23, 42, 0.6)',
//               border: '1px solid rgb(71, 85, 105)',
//               borderRadius: '3px',
//             }}
//           >
//             <Line smoke style={{ margin: 0, fontSize: '1rem', opacity: 0.5 }}>
//               No extracted items or credits
//             </Line>
//             <Line smoke style={{ margin: 0, fontSize: '0.875rem', opacity: 0.4, marginTop: '0.5rem' }}>
//               Extract items from safes, wallets, and other devices
//             </Line>
//           </div>
//         ) : (
//           <>
//             <Section title="CREDITS EXTRACTED:" color="yellow">
//               <div
//                 style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   gap: '0.25rem',
//                   padding: '0.75rem',
//                   backgroundColor: 'rgba(251, 191, 36, 0.1)',
//                   border: '1px solid rgba(251, 191, 36, 0.3)',
//                   borderRadius: '3px',
//                 }}
//               >
//                 <Line yellow style={{ margin: 0 }}>
//                   Digital currency (transferable)
//                 </Line>
//                 <Line yellow bold style={{ margin: 0, fontSize: '1.25rem' }}>
//                   {formatCredits(wallet.credits)}
//                 </Line>
//               </div>
//             </Section>

//             <Spacer />

//             <Section title={`ITEMS EXTRACTED: (${totalItems})`} color="cyan">
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//                 {wallet.items.map((item, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       gap: '0.5rem',
//                       padding: '0.5rem 0.75rem',
//                       backgroundColor: 'rgba(15, 23, 42, 0.6)',
//                       border: '1px solid rgb(71, 85, 105)',
//                       borderRadius: '3px',
//                     }}
//                   >
//                     <span
//                       style={{
//                         color: 'rgb(79, 209, 197)',
//                         fontSize: '0.875rem',
//                         flexShrink: 0,
//                       }}
//                     >
//                       →
//                     </span>
//                     <div style={{ flex: 1 }}>
//                       <Line
//                         cyan
//                         bold
//                         style={{
//                           margin: 0,
//                           fontSize: '0.875rem',
//                         }}
//                       >
//                         {item.label}
//                       </Line>
//                       {item.description && (
//                         <Line
//                           smoke
//                           style={{
//                             margin: 0,
//                             fontSize: '0.8rem',
//                             marginTop: '0.25rem',
//                           }}
//                         >
//                           {item.description}
//                         </Line>
//                       )}
//                       {item.value && (
//                         <Line
//                           yellow
//                           style={{
//                             margin: 0,
//                             fontSize: '0.8rem',
//                             marginTop: '0.25rem',
//                           }}
//                         >
//                           Estimated value: {formatCredits(item.value)}
//                         </Line>
//                       )}
//                       {item.die && (
//                         <Line
//                           yellow
//                           style={{
//                             margin: 0,
//                             fontSize: '0.75rem',
//                             marginTop: '0.25rem',
//                             fontFamily: 'monospace',
//                           }}
//                         >
//                           [{item.die}]
//                         </Line>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Section>

//             {/* <Divider />

//             <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
//               <button
//                 onClick={handleTransfer}
//                 disabled={true}
//                 style={{
//                   flex: 1,
//                   padding: '0.75rem',
//                   fontSize: '0.875rem',
//                   fontWeight: 'bold',
//                   backgroundColor: 'rgba(34, 197, 94, 0.2)',
//                   color: 'rgb(148, 163, 184)',
//                   border: '1px solid rgb(71, 85, 105)',
//                   borderRadius: '3px',
//                   cursor: 'not-allowed',
//                   fontFamily: 'monospace',
//                 }}
//               >
//                 TRANSFER TO CHARACTER (Coming Soon)
//               </button>

//               <button
//                 onClick={handleClearWallet}
//                 style={{
//                   padding: '0.75rem 1rem',
//                   fontSize: '0.875rem',
//                   fontWeight: 'bold',
//                   backgroundColor: 'rgba(239, 68, 68, 0.2)',
//                   color: 'rgb(239, 68, 68)',
//                   border: '1px solid rgb(239, 68, 68)',
//                   borderRadius: '3px',
//                   cursor: 'pointer',
//                   fontFamily: 'monospace',
//                   transition: 'all 0.2s',
//                 }}
//               >
//                 CLEAR
//               </button>
//             </div> */}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
