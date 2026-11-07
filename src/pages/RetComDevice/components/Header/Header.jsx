import { useEffect, useState } from 'react';

import CollapseIcon from '@mui/icons-material/UnfoldLess';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { Button, IconButton } from '@components/Layout/Layout';
import { useCyborgSocket } from '@hooks/useCyborgSocket';
import { EVENT_FEED } from '@data/random/eventFeed';
import { getWallet } from '@utils/localStorage';
import { formatCredits } from '@utils/general';

import { NewsTicker } from './NewsTicker';
import SearchBookmarksModal from './SearchBookmarksModal';
import RetComSettings from './RetComSettings';
import WalletDialog from './WalletDialog';

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
  WideOnly,
} from './Header.styles';

export default function Header({
  indent = 1,
  searchIndex = [],
  bookmarkEntries = [],
  bookmarks = {},
  onEvent = () => {},
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const wallet = useWalletSummary(walletOpen);
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
          <Button
            type="button"
            onClick={() => setWalletOpen(true)}
            aria-label={`Terminal wallet: ${formatCredits(wallet.credits)}${wallet.items ? `, ${wallet.items} items` : ''}`}
            title="Terminal Wallet"
            style={{
              color: 'var(--cy-yellow)',
            }}
          >
            <WalletIcon style={{ fontSize: 16 }} />
            {formatCredits(wallet.credits)}
            {wallet.items > 0 && <WideOnly>· {wallet.items}</WideOnly>}
          </Button>

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

          <IconButton
            type="button"
            onClick={() => setSettingsOpen(true)}
            aria-label="RetCom settings"
            title="Settings"
          >
            <SettingsIcon style={{ fontSize: 18 }} />
          </IconButton>
        </Controls>
      </BarRow>

      {EVENT_FEED.length > 0 && <NewsTicker feed={EVENT_FEED} />}

      <SearchBookmarksModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        searchIndex={searchIndex}
        bookmarkEntries={bookmarkEntries}
        bookmarks={bookmarks}
        onNavigate={(path) => onEvent({ type: 'navigate_to', path })}
        onToggleBookmark={(path) => onEvent({ type: 'toggle_bookmark', path })}
      />

      <WalletDialog open={walletOpen} onClose={() => setWalletOpen(false)} />

      <RetComSettings
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        indent={indent}
        onEvent={onEvent}
      />
    </Bar>
  );
}

// Wallet balance and item count for the header button. Refreshes when
// something is extracted ('walletUpdated') and whenever the wallet dialog
// closes (selling or transferring inside it updates storage directly).
function useWalletSummary(walletOpen) {
  const read = () => {
    try {
      const w = getWallet();
      return { credits: w.credits || 0, items: (w.items || []).length };
    } catch {
      return { credits: 0, items: 0 };
    }
  };

  const [summary, setSummary] = useState(read);

  useEffect(() => {
    const refresh = () => setSummary(read());
    window.addEventListener('walletUpdated', refresh);
    return () => window.removeEventListener('walletUpdated', refresh);
  }, []);

  useEffect(() => {
    if (!walletOpen) setSummary(read());
  }, [walletOpen]);

  return summary;
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
