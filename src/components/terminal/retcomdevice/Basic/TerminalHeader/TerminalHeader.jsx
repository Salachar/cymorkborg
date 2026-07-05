import React, { useState, useEffect } from 'react';

import CollapseIcon from '@mui/icons-material/UnfoldLess';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import SearchIcon from '@mui/icons-material/Search';

import { NewsTicker } from './NewsTicker';
import SearchBookmarksModal from './SearchBookmarksModal';

import { EVENT_FEED } from '@data/random/eventFeed';

const BG = 'rgb(27, 36, 58)';
const BORDER = 'rgb(77, 167, 188)';
const TEAL = 'rgb(79, 209, 197)';
const GREEN = 'rgb(0, 255, 65)';
const YELLOW = 'rgb(251, 191, 36)';
const DIM = 'rgb(148, 163, 184)';

export default function TerminalHeader({
  indent = 1,
  searchIndex = [],
  bookmarks = {},
  // onClear = () => {},
  // onIndent = () => {},
  onEvent = () => {},
}) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div style={{
      backgroundColor: BG,
      borderBottom: `1px solid ${BORDER}`,
      flexShrink: 0,
      fontFamily: 'monospace',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.6rem 1rem',
      }}>
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: TEAL, letterSpacing: '0.1em', textShadow: `0 0 8px rgba(79, 209, 197, 0.4)`, lineHeight: 1 }}>
            RCD-7
          </div>
          <div style={{ fontSize: '0.55rem', color: DIM, marginTop: '0.15rem', letterSpacing: '0.08em' }}>
            RET COM DEVICE
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '32px', backgroundColor: BORDER, opacity: 0.4, flexShrink: 0 }} />

        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '0.25rem',
          marginBottom: '0.25rem',
          width: '100%',
        }}>
          <span style={{
            fontSize: '0.65rem',
            color: 'rgba(79, 209, 197, 0.5)',
            fontFamily: 'monospace',
            marginRight: '0.25rem' }}
          >INDENT</span>

          {[0, 1, 1.5].map(val => (
            <button
              key={val}
              onClick={() => onEvent({
                type: 'indent_change',
                value: val,
              })}
              style={{
                padding: '0.15rem 0.4rem',
                fontSize: '0.65rem',
                fontFamily: 'monospace',
                backgroundColor: indent === val ? 'rgba(79, 209, 197, 0.2)' : 'transparent',
                color: indent === val ? 'rgb(79, 209, 197)' : 'rgba(79, 209, 197, 0.35)',
                border: `1px solid ${indent === val ? 'rgba(79, 209, 197, 0.4)' : 'rgba(79, 209, 197, 0.15)'}`,
                borderRadius: '2px',
                cursor: 'pointer',
              }}
            >
              {val}
            </button>
          ))}
        </div>

        <button
          onClick={() => setSearchOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.35rem 0.5rem',
            backgroundColor: 'rgba(79, 209, 197, 0.2)',
            color: 'rgb(79, 209, 197)',
            border: '1px solid rgba(79, 209, 197, 0.4)',
            borderRadius: '2px',
            cursor: 'pointer',
            fontFamily: 'monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
          }}
        >
          <SearchIcon style={{ fontSize: 14, color: TEAL }} />
          Search &amp; Bookmarks
        </button>

        <button
          onClick={() => onEvent({ type: 'reset_tree' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.35rem',
            backgroundColor: 'rgba(79, 209, 197, 0.2)',
            color: 'rgb(79, 209, 197)',
            border: '1px solid rgba(79, 209, 197, 0.4)',
            borderRadius: '2px',
            cursor: 'pointer',
          }}
        >
          <CollapseIcon style={{ fontSize: 16, color: TEAL }} />
        </button>
      </div>

      {EVENT_FEED.length > 0 && <NewsTicker feed={EVENT_FEED} />}

      <SearchBookmarksModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        searchIndex={searchIndex}
        bookmarks={bookmarks}
        onNavigate={(path) => onEvent({ type: 'navigate_to', path })}
        onToggleBookmark={(path) => onEvent({ type: 'toggle_bookmark', path })}
      />
    </div>
  );
}

// import React, { useState, useEffect } from 'react';

// import CollapseIcon from '@mui/icons-material/UnfoldLess';
// import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
// import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';

// import { NewsTicker } from './NewsTicker';

// import { EVENT_FEED } from '@data/random/eventFeed';

// const BG = 'rgb(27, 36, 58)';
// const BORDER = 'rgb(77, 167, 188)';
// const TEAL = 'rgb(79, 209, 197)';
// const GREEN = 'rgb(0, 255, 65)';
// const YELLOW = 'rgb(251, 191, 36)';
// const DIM = 'rgb(148, 163, 184)';

// export default function TerminalHeader({
//   indent = 1,
//   // onClear = () => {},
//   // onIndent = () => {},
//   onEvent = () => {},
// }) {
//   return (
//     <div style={{
//       backgroundColor: BG,
//       borderBottom: `1px solid ${BORDER}`,
//       flexShrink: 0,
//       fontFamily: 'monospace',
//     }}>
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '1rem',
//         padding: '0.6rem 1rem',
//       }}>
//         <div style={{ flexShrink: 0 }}>
//           <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: TEAL, letterSpacing: '0.1em', textShadow: `0 0 8px rgba(79, 209, 197, 0.4)`, lineHeight: 1 }}>
//             RCD-7
//           </div>
//           <div style={{ fontSize: '0.55rem', color: DIM, marginTop: '0.15rem', letterSpacing: '0.08em' }}>
//             RET COM DEVICE
//           </div>
//         </div>

//         {/* Divider */}
//         <div style={{ width: '1px', height: '32px', backgroundColor: BORDER, opacity: 0.4, flexShrink: 0 }} />

//         <div style={{
//           display: 'flex',
//           justifyContent: 'flex-end',
//           alignItems: 'center',
//           gap: '0.25rem',
//           marginBottom: '0.25rem',
//           width: '100%',
//         }}>
//           <span style={{
//             fontSize: '0.65rem',
//             color: 'rgba(79, 209, 197, 0.5)',
//             fontFamily: 'monospace',
//             marginRight: '0.25rem' }}
//           >INDENT</span>

//           {[0, 1, 1.5].map(val => (
//             <button
//               key={val}
//               onClick={() => onEvent({
//                 type: 'indent_change',
//                 value: val,
//               })}
//               style={{
//                 padding: '0.15rem 0.4rem',
//                 fontSize: '0.65rem',
//                 fontFamily: 'monospace',
//                 backgroundColor: indent === val ? 'rgba(79, 209, 197, 0.2)' : 'transparent',
//                 color: indent === val ? 'rgb(79, 209, 197)' : 'rgba(79, 209, 197, 0.35)',
//                 border: `1px solid ${indent === val ? 'rgba(79, 209, 197, 0.4)' : 'rgba(79, 209, 197, 0.15)'}`,
//                 borderRadius: '2px',
//                 cursor: 'pointer',
//               }}
//             >
//               {val}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={() => onEvent({ type: 'reset_tree' })}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginLeft: 'auto',
//             padding: '0.35rem',
//             backgroundColor: 'rgba(79, 209, 197, 0.2)',
//             color: 'rgb(79, 209, 197)',
//             border: '1px solid rgba(79, 209, 197, 0.4)',
//             borderRadius: '2px',
//             cursor: 'pointer',
//           }}
//         >
//           <CollapseIcon style={{ fontSize: 16, color: TEAL }} />
//         </button>
//       </div>

//       {EVENT_FEED.length > 0 && <NewsTicker feed={EVENT_FEED} />}
//     </div>
//   );
// }
