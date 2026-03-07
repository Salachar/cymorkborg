import React from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const C = {
  teal: 'rgb(79, 209, 197)',
  tealDim: 'rgba(79, 209, 197, 0.12)',
  tealBorder: 'rgba(79, 209, 197, 0.35)',
  yellow: 'rgb(251, 191, 36)',
  yellowDim: 'rgba(251, 191, 36, 0.08)',
  yellowBorder: 'rgba(251, 191, 36, 0.35)',
  border: 'rgba(77, 167, 188, 0.25)',
  bg: 'rgba(29, 35, 50, 0.4)',
  textMuted: 'rgba(148, 163, 184, 0.4)',
};

function Favicon({ favicon }) {
  if (!favicon) return null;

  if (typeof favicon === 'object' && React.isValidElement(favicon)) {
    return (
      <span style={{ width: '22px', height: '22px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {favicon}
      </span>
    );
  }

  if (typeof favicon === 'string' && (favicon.startsWith('/') || favicon.startsWith('http'))) {
    return (
      <img src={favicon} alt="" style={{ width: '22px', height: '22px', flexShrink: 0, objectFit: 'contain', borderRadius: '2px' }} />
    );
  }

  return (
    <span style={{ fontSize: '1.1rem', flexShrink: 0, lineHeight: 1, width: '22px', textAlign: 'center' }}>
      {favicon}
    </span>
  );
}

function ToggleBtn({
  label,
  active,
  accentColor,
  accentBorder,
  accentDim,
  onClick,
  style,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.2rem 0.55rem',
        fontSize: '0.62rem',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        border: `1px solid ${active ? accentBorder : 'rgba(148, 163, 184, 0.25)'}`,
        borderRadius: '2px',
        backgroundColor: active ? accentDim : 'transparent',
        color: active ? accentColor : C.textMuted,
        cursor: 'pointer',
        flexShrink: 0,
        ...style,
      }}
    >
      {label}
    </button>
  );
}

export default function CommandRow({
  path = '',
  displayName,
  favicon = null,
  preview = null,
  isLocked = false,
  isBypassed = false,
  hasBlocker = false,
  bypassLabel = 'PW',
  bypassValue = null,
  isExpanded = false,
  isExpandable = true,
  hasChildren = false,
  childCount = 0,
  depth = 0,
  hasContent = false,
  contentSize = 'full',   // 'partial' | 'full' | 'hidden'
  onToggleVisibility,        // toggles hidden ↔ last visible size
  onToggleSize,              // toggles partial ↔ full
  onClick,
  style = {},
}) {
  const accentColor = isLocked ? C.yellow : C.teal;
  const accentBorder = isLocked ? C.yellowBorder : C.tealBorder;
  const accentDim = isLocked ? C.yellowDim : C.tealDim;

  const isVisible = contentSize !== 'hidden';
  const fontSize = depth === 0 ? '0.92rem' : '0.84rem';

  const stopProp = (fn) => (e) => { e.stopPropagation(); fn?.(); };

  const breadcrumb = depth > 0 ? (() => {
    const parts = path.split('/');
    const parents = parts.slice(0, -1).slice(-2); // last two parents
    return parents.join(' → ');
  })() : null;

  return (
    <div
      style={{
        borderRadius: '4px',
        border: `1px solid ${accentBorder}`,
        backgroundColor: isExpanded ? accentDim : C.bg,
        overflow: 'hidden',
        transition: 'background-color 0.15s',
        ...style,
      }}
    >
      <div
        className="flex flex-row justify-between"
        style={{
          padding: '0.2rem 0.5rem 0 0.5rem',
        }}
      >
        {breadcrumb && (
          <div style={{
            fontSize: '0.6rem',
            color: C.textMuted,
            fontFamily: 'monospace',
            letterSpacing: '0.04em',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {breadcrumb.split(' → ').map((part, i, arr) => (
              <span key={i}>
                {i > 0 && <span style={{ color: 'rgba(79, 209, 197, 0.25)' }}> → </span>}
                <span style={{
                  color: i === arr.length - 1 ? C.teal : 'rgba(79, 209, 197, 0.35)',
                }}>
                  {part}
                </span>
              </span>
            ))}
          </div>
        )}

        {!isLocked && hasChildren && childCount > 0 && (
          <span
            style={{
              fontSize: '0.65rem',
              color: C.teal,
              fontFamily: 'monospace',
              flexShrink: 0,
            }}
          >
            ({childCount} nodes)
          </span>
        )}
      </div>

      {/* ── Header strip ── */}
      <div
        onClick={onClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: depth === 0 ? '0.8rem 1rem' : '0.5rem 1rem 0.75rem 1rem',
          cursor: isExpandable ? 'pointer' : 'default',
          userSelect: 'none',
          // minHeight: depth === 0 ? '3.5rem' : '3rem',
        }}
      >
        {favicon && <Favicon favicon={favicon} />}

        {hasChildren ? (
          <ChevronRightIcon
            style={{
              fontSize: 18,
              color: accentColor,
              flexShrink: 0,
              transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.15s',
              height: '1rem',
            }}
          />
        ) : (
          <span style={{ width: '18px', flexShrink: 0 }} />
        )}

        <span style={{
          flex: 1, color: accentColor, fontWeight: 'bold',
          fontSize, letterSpacing: '0.05em', fontFamily: 'monospace',
        }}>
          {displayName}
        </span>

        {hasBlocker && (
          <span style={{
            fontSize: '0.62rem', fontWeight: 'bold', letterSpacing: '0.08em',
            color: isBypassed ? C.teal : C.yellow,
            border: `1px solid ${isBypassed ? C.tealBorder : C.yellowBorder}`,
            backgroundColor: isBypassed ? C.tealDim : C.yellowDim,
            padding: '0.2rem 0.5rem', borderRadius: '2px', flexShrink: 0,
          }}>
            {isBypassed
              ? `${bypassLabel}${bypassValue && bypassValue !== 'UNLOCKED' && bypassValue !== 'CRACKED' ? `:${bypassValue}` : ''}`
              : bypassLabel}
          </span>
        )}

        {hasContent && (
          <div style={{ display: 'flex', gap: '0.3rem', flexShrink: 0 }}>
            <button
              onClick={stopProp(onToggleVisibility)}
              style={{
                padding: '0.25rem',
                border: `1px solid ${accentBorder}`,
                borderRadius: '2px',
                backgroundColor: accentDim,
                color: accentColor,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {isVisible
                ? <VisibilityOffIcon style={{ fontSize: 14 }} />
                : <VisibilityIcon style={{ fontSize: 14 }} />
              }
            </button>
            {/* <button
              onClick={stopProp(onToggleSize)}
              style={{
                padding: '0.25rem',
                border: `1px solid ${accentBorder}`,
                borderRadius: '2px',
                backgroundColor: accentDim,
                color: accentColor,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {contentSize === 'full'
                ? <CloseFullscreenIcon style={{ fontSize: 14 }} />
                : <OpenInFullIcon style={{ fontSize: 14 }} />
              }
            </button> */}
          </div>
        )}
      </div>

      {/* ── Preview — always visible when present ── */}
      {preview && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            padding: depth === 0 ? '0 1rem 0.8rem' : '0 0.9rem 0.65rem',
            borderTop: `1px solid ${accentBorder}`,
            paddingTop: '0.65rem',
          }}
        >
          {preview}
        </div>
      )}
    </div>
  );
}
