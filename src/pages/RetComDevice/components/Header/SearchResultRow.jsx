import LockIcon from '@mui/icons-material/Lock';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import Icons from '@utils/icons';
import { getDefaultFavicon } from '@utils/favicon';

import {
  Row,
  Strip,
  Name,
  Lock,
  StarButton,
  Breadcrumb,
  CrumbNear,
  CrumbSep,
  Preview,
} from './SearchBookmarks.styles';

function Favicon({ favicon, displayName }) {
  if (favicon) return favicon;
  const resolved = getDefaultFavicon(displayName);
  if (resolved) return resolved;
  return <Icons.Hub />;
}

// Parent path, with all but the last two parts shortened to initials.
function buildBreadcrumb(path) {
  const parents = path.split('/').slice(0, -1);
  if (parents.length === 0) return null;
  return parents.map((part, i) => {
    const isNear = i >= parents.length - 2;
    return {
      text: isNear ? part : part.split(/\s+/).map((w) => w[0]?.toUpperCase() ?? '').join(''),
      isNear,
    };
  });
}

export default function SearchResultRow({
  entry,
  isBookmarked = false,
  onNavigate,
  onToggleBookmark,
}) {
  const { id, path, hasBlocker, isBypassed, preview, favicon } = entry;
  const breadcrumb = buildBreadcrumb(path);

  const navigate = () => onNavigate?.(path);

  // The row holds a button (the star), so it can't itself be a <button>.
  // role="button" plus Enter/Space keeps it keyboard-usable.
  const handleKeyDown = (e) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate();
    }
  };

  return (
    <Row role="button" tabIndex={0} onClick={navigate} onKeyDown={handleKeyDown}>
      <Strip>
        <Favicon favicon={favicon} displayName={id} />

        {hasBlocker && !isBypassed && (
          <Lock title="Locked">
            <LockIcon style={{ fontSize: 14 }} />
          </Lock>
        )}

        <Name>{id}</Name>

        <StarButton
          type="button"
          aria-pressed={isBookmarked}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark?.();
          }}
        >
          {isBookmarked ? <StarIcon style={{ fontSize: 16 }} /> : <StarBorderIcon style={{ fontSize: 16 }} />}
        </StarButton>
      </Strip>

      {breadcrumb && (
        <Breadcrumb>
          {breadcrumb.map((part, i) => (
            <span key={i}>
              {i > 0 && <CrumbSep> → </CrumbSep>}
              {part.isNear ? <CrumbNear>{part.text}</CrumbNear> : part.text}
            </span>
          ))}
        </Breadcrumb>
      )}

      {preview && <Preview>{preview}</Preview>}
    </Row>
  );
}
