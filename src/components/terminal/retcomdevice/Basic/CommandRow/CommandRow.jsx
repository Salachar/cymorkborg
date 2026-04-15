import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './commandRow.css';

const FAVICON_SIZE = '12px';

function Favicon({ favicon }) {
  if (!favicon) return null;

  if (typeof favicon === 'object' && React.isValidElement(favicon)) {
    // return (
    //   <span style={{
    //     width: FAVICON_SIZE,
    //     height: FAVICON_SIZE,
    //     flexShrink: 0,
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     fontSize: '12px',
    //   }}>
    //     {favicon}
    //   </span>
    // );
    return favicon;
  }

  return (
    <span style={{
      fontSize: '1.1rem',
      flexShrink: 0,
      lineHeight: 1,
      width: FAVICON_SIZE,
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
  variant = 'default',       // 'default' | 'internal' | 'backdoor'
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
    `cr-variant-${variant}`,
    isExpanded ? 'cr-expanded' : '',
    isLocked ? 'cr-locked' : 'cr-unlocked',
  ].filter(Boolean).join(' ');

  // Breadcrumb colors stay inline — depend on array index, not practical in CSS
  const breadcrumbSepColor = variant === 'backdoor'
    ? 'rgba(168, 85, 247, 0.25)'
    : 'rgba(79, 209, 197, 0.25)';

  const breadcrumbColor = (i, arr) => {
    if (variant === 'backdoor') {
      return i >= arr.length - 2 ? 'rgba(168, 85, 247, 0.7)' : 'rgba(168, 85, 247, 0.35)';
    }
    return i >= arr.length - 2 ? 'rgb(79, 209, 197)' : 'rgba(79, 209, 197, 0.35)';
  };

  return (
    <div
      onClick={onClick}
      className={rootClass}
      style={{ cursor: isExpandable ? 'pointer' : 'default', ...style }}
    >
      {/* Meta row — breadcrumb + child count */}
      <div className="cr-meta">
        {breadcrumb ? (
          <div className="cr-breadcrumb">
            {breadcrumb.map((part, i, arr) => (
              <span key={i}>
                {i > 0 && <span style={{ color: breadcrumbSepColor }}> → </span>}
                <span style={{ color: breadcrumbColor(i, arr) }}>{part}</span>
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

        {/* {hasChildren ? (
          <ChevronRightIcon
            className={`cr-chevron ${isExpanded ? 'cr-chevron-expanded' : 'cr-chevron-collapsed'}`}
          />
        ) : (
          <span style={{ width: '18px', flexShrink: 0 }} />
        )} */}

        <span className={`cr-name cr-depth-${depth === 0 ? 0 : 1} pl-2`}>
          {displayName}
        </span>

        {hasBlocker && (
          <span className={`cr-badge ${isBypassed ? 'cr-badge-bypassed' : 'cr-badge-locked'}`}>
            {isBypassed
              ? `${bypassLabel}${bypassValue && bypassValue !== 'UNLOCKED' && bypassValue !== 'CRACKED' ? `:${bypassValue}` : ''}`
              : bypassLabel}
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
        <div
          // onClick={(e) => e.stopPropagation()}
          className={`cr-preview cr-preview-depth-${depth === 0 ? 0 : 1}`}
        >
          {preview}
        </div>
      )}
    </div>
  );
}
