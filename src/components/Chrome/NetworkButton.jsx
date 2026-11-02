import WifiIcon from '@mui/icons-material/Wifi';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import SignalWifi1BarIcon from '@mui/icons-material/SignalWifi1Bar';

import { useCyborgSocket } from '@hooks/useCyborgSocket';
import { StripButton } from './ChromeBar.styles';

const ICON = { fontSize: 14 };

const STATUS_ICON = {
  connected: <WifiIcon style={ICON} />,
  connecting: <SignalWifi1BarIcon style={ICON} />,
  disconnected: <WifiOffIcon style={ICON} />,
  error: <WifiOffIcon style={ICON} />,
};

const STATUS_LABEL = {
  connected: 'Online',
  connecting: 'Connecting…',
  disconnected: 'Offline',
  error: 'Error',
};

// Status colors come from data-status (see Connection.styles.js).
export default function NetworkButton({ onClick, style }) {
  const { status } = useCyborgSocket();

  return (
    <StripButton
      type="button"
      data-status={status}
      onClick={onClick}
      title="Network connection"
      style={style}
    >
      {STATUS_ICON[status]}
      <span>{STATUS_LABEL[status]}</span>
    </StripButton>
  );
}
