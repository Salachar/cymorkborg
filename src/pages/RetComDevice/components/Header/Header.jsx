import { useState } from 'react';

import CollapseIcon from '@mui/icons-material/UnfoldLess';
import SearchIcon from '@mui/icons-material/Search';

import { Button, IconButton, SegmentedControl } from '@components/Layout/Layout';
import { useCyborgSocket } from '@hooks/useCyborgSocket';
import { EVENT_FEED } from '@data/random/eventFeed';

import { NewsTicker } from './NewsTicker';
import SearchBookmarksModal from './SearchBookmarksModal';

import {
  Bar,
  BarRow,
  Logo,
  LogoName,
  LogoSub,
  Status,
  StatusTime,
  StatusLines,
  StatusLine,
  StatusLabel,
  Controls,
  ControlDivider,
  WideOnly,
} from './Header.styles';

const INDENT_OPTIONS = [{ value: 0 }, { value: 1 }, { value: 1.5 }];

export default function Header({
  indent = 1,
  searchIndex = [],
  bookmarks = {},
  onEvent = () => {},
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const { gmStatus } = useCyborgSocket();

  return (
    <Bar>
      <BarRow>
        <Logo>
          <LogoName>RCD-7</LogoName>
          <LogoSub>Ret Com Device</LogoSub>
        </Logo>

        <GmStatus time={gmStatus?.time} activity={gmStatus?.activity} note={gmStatus?.note} />

        <Controls>
          <SegmentedControl
            label="Indent"
            options={INDENT_OPTIONS}
            value={indent}
            onChange={(value) => onEvent({ type: 'indent_change', value })}
          />

          <ControlDivider />

          <Button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search and bookmarks"
            title="Search & Bookmarks"
          >
            <SearchIcon style={{ fontSize: 16 }} />
            <WideOnly>Search &amp; Bookmarks</WideOnly>
          </Button>

          <IconButton
            type="button"
            onClick={() => onEvent({ type: 'reset_tree' })}
            aria-label="Collapse all"
            title="Collapse all"
          >
            <CollapseIcon style={{ fontSize: 18 }} />
          </IconButton>
        </Controls>
      </BarRow>

      {EVENT_FEED.length > 0 && <NewsTicker feed={EVENT_FEED} />}

      <SearchBookmarksModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        searchIndex={searchIndex}
        bookmarks={bookmarks}
        onNavigate={(path) => onEvent({ type: 'navigate_to', path })}
        onToggleBookmark={(path) => onEvent({ type: 'toggle_bookmark', path })}
      />
    </Bar>
  );
}

// GM-pushed time, activity and note. Renders an empty spacer when the GM
// hasn't sent anything, so the controls stay right-aligned.
function GmStatus({ time, activity, note }) {
  return (
    <Status>
      {time && <StatusTime title={time}>{time}</StatusTime>}

      {(activity || note) && (
        <StatusLines>
          {activity && (
            <StatusLine title={`Activity: ${activity}`}>
              <StatusLabel>Activity: </StatusLabel>
              {activity}
            </StatusLine>
          )}
          {note && <StatusLine title={note}>{note}</StatusLine>}
        </StatusLines>
      )}
    </Status>
  );
}
