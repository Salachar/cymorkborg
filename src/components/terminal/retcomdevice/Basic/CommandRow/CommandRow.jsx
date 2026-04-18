import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import './commandRow.css';

function Favicon({ favicon }) {
  if (!favicon) return null;

  if (typeof favicon === 'object' && React.isValidElement(favicon)) {
    return favicon;
  }

  return (
    <span style={{
      fontSize: '1.1rem',
      flexShrink: 0,
      lineHeight: 1,
      width: '12px',
      textAlign: 'center',
    }}>
      {favicon}
    </span>
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
  contentSize = 'full',
  onToggleVisibility,
  onToggleSize,
  onClick,
  style = {},
}) {
  const isVisible = contentSize !== 'hidden';
  const stopProp = (fn) => (e) => { e.stopPropagation(); fn?.(); };

  const breadcrumb = depth > 0 ? (() => {
    const parts = path.split('/');
    const parents = parts.slice(0, -1);
    return parents.map((part, i) => {
      const isRecent = i >= parents.length - 2;
      if (isRecent) return part;
      return part.split(/\s+/).map(word => word[0]?.toUpperCase() ?? '').join('');
    });
  })() : null;

  const rootClass = [
    'cr-root',
    isExpanded ? 'cr-expanded' : '',
    isLocked ? 'cr-locked' : 'cr-unlocked',
    isBypassed ? 'cr-bypassed' : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      onClick={onClick}
      className={rootClass}
      style={{ cursor: isExpandable ? 'pointer' : 'default', ...style }}
    >
      {(hasBlocker && !isBypassed) && (
        <LockIcon className="cr-lock-indicator" />
      )}

      {/* Meta row */}
      <div className="cr-meta">
        {breadcrumb ? (
          <div className="cr-breadcrumb">
            {breadcrumb.map((part, i, arr) => (
              <span key={i}>
                {i > 0 && <span className="cr-breadcrumb-sep"> → </span>}
                <span className={i >= arr.length - 2 ? 'cr-breadcrumb-near' : 'cr-breadcrumb-far'}>
                  {part}
                </span>
              </span>
            ))}
          </div>
        ) : <div />}

        {!isLocked && hasChildren && childCount > 0 && (
          <span className="cr-child-count">({childCount} nodes)</span>
        )}
      </div>

      {/* Main strip */}
      <div className="cr-strip">
        {favicon && <Favicon favicon={favicon} />}

        <span className={`cr-name cr-depth-${depth === 0 ? 0 : 1} pl-2`}>
          {displayName}
        </span>

        {/* Bypassed value label */}
        {isBypassed && bypassValue && bypassValue !== 'UNLOCKED' && bypassValue !== 'CRACKED' && (
          <span className="cr-badge cr-badge-bypassed">
            {bypassLabel}:{bypassValue}
          </span>
        )}

        <div className="cr-controls">
          <button
            onClick={stopProp(onToggleVisibility)}
            className="cr-vis-btn"
            style={{ visibility: hasContent ? 'visible' : 'hidden' }}
          >
            {isVisible
              ? <VisibilityOffIcon style={{ fontSize: 14 }} />
              : <VisibilityIcon style={{ fontSize: 14 }} />
            }
          </button>
        </div>
      </div>

      {preview && (
        <div className={`cr-preview cr-preview-depth-${depth === 0 ? 0 : 1}`}>
          {preview}
        </div>
      )}
    </div>
  );
}
