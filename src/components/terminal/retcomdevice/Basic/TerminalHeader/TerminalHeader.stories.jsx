import TerminalHeader from './TerminalHeader';

export default {
  title: 'Terminal/TerminalHeader',
  component: TerminalHeader,
};

// Default header with some progress
export const WithProgress = () => (
  <TerminalHeader
    discoveredCount={12}
    passwordsCount={3}
    creditsExtracted={450}
    onHelp={() => console.log('Help clicked')}
    onList={() => console.log('List clicked')}
    onClear={() => console.log('Clear clicked')}
  />
);

// Fresh start (no progress)
export const FreshStart = () => (
  <TerminalHeader
    discoveredCount={0}
    passwordsCount={0}
    creditsExtracted={0}
    onHelp={() => console.log('Help clicked')}
    onList={() => console.log('List clicked')}
    onClear={() => console.log('Clear clicked')}
  />
);
