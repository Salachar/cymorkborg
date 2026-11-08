import CollapseIcon from '@mui/icons-material/UnfoldLess';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShareIcon from '@mui/icons-material/IosShare';

import Icons from '@utils/icons';
import { getDefaultFavicon } from '@utils/favicon';

import {
  Root,
  LockIndicator,
  Meta,
  Breadcrumb,
  BreadcrumbSep,
  BreadcrumbPart,
  ChildCount,
  MetaStart,
  RcdMarker,
  Strip,
  Name,
  BypassBadge,
  Controls,
  ControlButton,
  Preview,
} from './CommandRow.app.styles'; // or './CommandRow.app.styles' to try the app palette

function Favicon({ favicon, displayName }) {
  if (favicon) return favicon;
  const resolved = getDefaultFavicon(displayName);
  if (resolved) return resolved;
  return <Icons.Hub />;
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
  isBookmarked = false,
  isConnected = false,
  onClick,
  onCollapse,
  onToggleBookmark,
  onShareNode,
  theme = null, // 'rcda': only visible thanks to the jailbroken RCD
  style = {},
}) {
  const stopProp = (fn) => (e) => { e.stopPropagation(); fn?.(); };

  // Parents of this node; the last two in full, older ones as initials.
  const breadcrumb = depth > 0 ? (() => {
    const parents = path.split('/').slice(0, -1);
    return parents.map((part, i) => {
      const isRecent = i >= parents.length - 2;
      if (isRecent) return part;
      return part.split(/\s+/).map((word) => word[0]?.toUpperCase() ?? '').join('');
    });
  })() : null;

  return (
    <Root
      data-path={path}
      data-expanded={isExpanded || undefined}
      data-locked={(hasBlocker && !isBypassed) || undefined}
      data-theme={theme || undefined}
      onClick={onClick}
      style={{ cursor: isExpandable ? 'pointer' : 'default', ...style }}
    >
      {hasBlocker && !isBypassed && <LockIndicator />}

      {/* Meta row */}
      <Meta>
        <MetaStart>
          {theme === 'rcda' && <RcdMarker>◈ RCD</RcdMarker>}
          {breadcrumb && (
            <Breadcrumb>
              {breadcrumb.map((part, i, arr) => (
                <span key={i}>
                  {i > 0 && <BreadcrumbSep> → </BreadcrumbSep>}
                  <BreadcrumbPart data-near={i >= arr.length - 2}>{part}</BreadcrumbPart>
                </span>
              ))}
            </Breadcrumb>
          )}
        </MetaStart>

        {!isLocked && hasChildren && childCount > 0 && (
          <ChildCount>({childCount} nodes)</ChildCount>
        )}
      </Meta>

      <Strip>
        <Favicon favicon={favicon} displayName={displayName} />

        <Name>{displayName}</Name>

        {isBypassed && bypassValue && <BypassBadge>PW:{bypassValue}</BypassBadge>}

        <Controls>
          <ControlButton
            type="button"
            onClick={stopProp(onToggleBookmark)}
            title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            {isBookmarked
              ? <StarIcon style={{ fontSize: 14, color: 'rgb(250, 204, 21)' }} />
              : <StarBorderIcon style={{ fontSize: 14 }} />}
          </ControlButton>

          {isConnected && (
            <ControlButton
              type="button"
              onClick={stopProp(onShareNode)}
              title="Share with all players"
            >
              <ShareIcon style={{ fontSize: 14 }} />
            </ControlButton>
          )}

          {isExpanded && hasChildren && (
            <ControlButton
              type="button"
              onClick={stopProp(onCollapse)}
              title="Collapse all"
            >
              <CollapseIcon style={{ fontSize: 14 }} />
            </ControlButton>
          )}
        </Controls>
      </Strip>

      {preview && <Preview>{preview}</Preview>}
    </Root>
  );
}
