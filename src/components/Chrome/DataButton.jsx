import ImportExportIcon from '@mui/icons-material/ImportExport';

import { StripButton } from './ChromeBar.styles';

export default function DataButton({ onClick, style }) {
  return (
    <StripButton
      type="button"
      data-square="true"
      onClick={onClick}
      aria-label="App data"
      title="App data — export, import, send to device"
      style={style}
    >
      <ImportExportIcon style={{ fontSize: 14 }} />
    </StripButton>
  );
}
