import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CollapseIcon from '@mui/icons-material/UnfoldLess';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

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
  bypassValue = null,
  isExpanded = false,
  isExpandable = true,
  hasChildren = false,
  childCount = 0,
  depth = 0,
  hasContent = false,
  contentSize = 'full',
  onToggleSize,
  onClick,
  onCollapse,
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

  return (
    <div
      onClick={onClick}
      className='cr-root'
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

        {/* {!isLocked && hasChildren && childCount > 0 && (
          <span className="cr-child-count">({childCount} nodes)</span>
        )} */}
      </div>

      <div className="cr-strip">
        {favicon && <Favicon favicon={favicon} />}

        <span className={`cr-name pl-2`}>
          {displayName}
        </span>

        {isBypassed && bypassValue && (
          <span className="cr-badge cr-badge-bypassed">
            PW:{bypassValue}
          </span>
        )}

        <div className="cr-controls">
          {isExpanded && hasChildren && (
            <button
              onClick={stopProp(onCollapse)}
              className="cr-vis-btn"
              title="Collapse all"
            >
              <CollapseIcon style={{ fontSize: 14 }} />
            </button>
          )}
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
