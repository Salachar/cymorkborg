import { useState } from 'react';

import CommandRow from '@terminal/retcomdevice/Basic/CommandRow/CommandRow';
import {
  PasswordPrompt,
  MastermindHack,
  IceBreaker,
} from '@terminal/retcomdevice';

import { COLLAPSED_CONTENT_STORAGE_KEY } from '@utils/localStorage';

const PARTIAL_HEIGHT = 200;
const CONTENT_BG = 'rgba(19, 23, 34, 0.6)';
const CONTENT_BORDER = 'rgba(77, 167, 188, 0.2)';
const FADE_COLOR = 'rgba(19, 23, 34, 0.95)';
const TREE_LINE_COLOR = 'rgba(77, 167, 188, 0.25)';
const INDENT = 1.5; // rem per depth level

// ============================================================================
// CONTENT PANEL
// ============================================================================

function ContentPanel({ children, size, onToggleSize, style = {} }) {
  const isPartial = size === 'partial';

  return (
    <div
      onDoubleClick={(e) => {
        if (e.target.closest('button, input, select, textarea, a')) return;
        if (e.defaultPrevented) return;
        e.stopPropagation();
        onToggleSize?.();
      }}
      style={{
        border: `1px solid ${CONTENT_BORDER}`,
        borderRadius: '4px',
        backgroundColor: CONTENT_BG,
        marginTop: '0.125rem',
        marginBottom: '0.125rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        ...style,
      }}
    >
      <div
        style={{
          padding: '0.75rem',
          maxHeight: isPartial ? `${PARTIAL_HEIGHT}px` : 'none',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>

      {isPartial && (
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '60px',
          background: `linear-gradient(to bottom, transparent, ${FADE_COLOR})`,
          pointerEvents: 'none',
        }} />
      )}
    </div>
  );
}

// ============================================================================
// RECURSIVE NODE
// ============================================================================

function CommandNode({
  id,
  def,
  path,
  depth,
  discoveredPasswords,
  expandedRows,
  contentSizes,
  onToggle,
  onUnlock,
  onSetContentSize,
}) {
  const isExpanded = Boolean(expandedRows[path]);
  const isBypassed = Boolean(discoveredPasswords[path]);
  const bypassValue = discoveredPasswords[path] ?? null;

  const contentSize = contentSizes[path] ?? 'full';

  const hasBlocker = Boolean(def.password || def.mastermind || def.icebreaker);
  const isLocked = hasBlocker && !isBypassed;

  const resolvedContent = typeof def.content === 'function'
    ? def.content()
    : def.content ?? null;

  const hasContent = Boolean(resolvedContent);
  const hasChildren = Boolean(
    def.related_commands && Object.keys(def.related_commands).length > 0
  );
  const childCount = hasChildren ? Object.keys(def.related_commands).length : 0;
  const isExpandable = isLocked || hasContent || hasChildren;

  const blockerType = def.mastermind
    ? 'mastermind'
    : def.icebreaker
    ? 'icebreaker'
    : def.password
    ? 'password'
    : null;

  const bypassLabel = blockerType === 'mastermind' || blockerType === 'icebreaker'
    ? 'ICE'
    : blockerType === 'password'
    ? 'PW'
    : null;

  const childEntries = hasChildren ? Object.entries(def.related_commands) : [];
  const showContentPanel = isExpanded && contentSize !== 'hidden' && (isLocked || hasContent);

  const handleToggleVisibility = () => {
    onSetContentSize(path, contentSize === 'hidden' ? 'partial' : 'hidden');
  };

  const handleToggleSize = () => {
    onSetContentSize(path, contentSize === 'full' ? 'partial' : 'full');
  };

  const renderBlocker = () => {
    if (blockerType === 'mastermind') {
      return (
        <MastermindHack
          command={path}
          commandDef={def}
          difficulty={def.mastermind.difficulty}
          onSuccess={(cmdPath, cmdDef, answer) => onUnlock(cmdPath, answer)}
        />
      );
    }
    if (blockerType === 'icebreaker') {
      return (
        <IceBreaker
          command={path}
          commandDef={def}
          difficulty={def.icebreaker.difficulty}
          onSuccess={(cmdPath) => onUnlock(cmdPath, 'CRACKED')}
        />
      );
    }
    if (blockerType === 'password') {
      return (
        <PasswordPrompt
          key={path}
          command={path}
          commandDef={def}
          password={def.password.pw}
          hint={def.password.hint}
          showCount={def.password.showCount}
          showFirst={def.password.showFirst}
          showFrequency={def.password.showFrequency}
          decoyLetters={def.password.decoyLetters}
          onSubmit={(cmdPath, cmdDef, password) => onUnlock(cmdPath, password)}
        >
          {def.password?.content ?? null}
        </PasswordPrompt>
      );
    }
    return null;
  };

  return (
    <div>
      <div>
        <CommandRow
          displayName={id}
          favicon={def.favicon ?? null}
          preview={def.preview ?? null}
          isLocked={isLocked}
          isBypassed={isBypassed}
          hasBlocker={hasBlocker}
          bypassLabel={bypassLabel}
          bypassValue={bypassValue}
          isExpanded={isExpanded}
          isExpandable={isExpandable}
          hasChildren={hasChildren}
          childCount={childCount}
          depth={depth}
          hasContent={isExpanded && (isLocked || hasContent)}
          contentSize={contentSize}
          onToggleVisibility={handleToggleVisibility}
          onToggleSize={handleToggleSize}
          onClick={() => isExpandable && onToggle(path)}
          style={{
            marginLeft: `${depth * INDENT}rem`
          }}
        />

        {/* Content panel — same width as row, not indented further */}
        {showContentPanel && (
          <ContentPanel
            size={contentSize}
            onToggleSize={handleToggleSize}
            style={{
              marginLeft: `${contentSize === 'partial' ? (depth * INDENT) + 'rem' : '0'}`
            }}
          >
            {isLocked ? renderBlocker() : resolvedContent}
          </ContentPanel>
        )}
      </div>

      {/* Children — line + padding only, depth scaling done by each child's own marginLeft */}
      {isExpanded && !isLocked && hasChildren && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            marginTop: '0.5rem',
          }}
        >
          {childEntries.map(([childId, childDef]) => {
            const childPath = `${path}/${childId}`;
            return (
              <CommandNode
                key={childPath}
                id={childId}
                def={childDef}
                path={childPath}
                depth={depth + 1}
                discoveredPasswords={discoveredPasswords}
                expandedRows={expandedRows}
                contentSizes={contentSizes}
                onToggle={onToggle}
                onUnlock={onUnlock}
                onSetContentSize={onSetContentSize}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// LIST
// ============================================================================

export default function List({
  campaignCommandList = [],
  discoveredPasswords = {},
  expandedRows = {},
  onToggle,
  onUnlock,
}) {
  const [contentSizes, setContentSizes] = useState(() => {
    try {
      const saved = localStorage.getItem(COLLAPSED_CONTENT_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const handleSetContentSize = (path, size) => {
    setContentSizes(prev => {
      const updated = { ...prev, [path]: size };
      try {
        localStorage.setItem(COLLAPSED_CONTENT_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save content sizes:', e);
      }
      return updated;
    });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }}>
      {campaignCommandList.map(({ id, ...def }) => (
        <CommandNode
          key={id}
          id={id}
          def={def}
          path={id}
          depth={0}
          discoveredPasswords={discoveredPasswords}
          expandedRows={expandedRows}
          contentSizes={contentSizes}
          onToggle={onToggle}
          onUnlock={onUnlock}
          onSetContentSize={handleSetContentSize}
        />
      ))}
    </div>
  );
}
