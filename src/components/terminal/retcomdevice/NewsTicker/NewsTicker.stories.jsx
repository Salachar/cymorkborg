import NewsTicker from './NewsTicker';

export default {
  title: 'Terminal/NewsTicker',
  component: NewsTicker,
};

export const BlankProps = {
  args: {},
};

// Default ticker - all events, auto-scrolling
export const Default = {
  args: {
    interval: 5000,
    filterType: 'ALL',
    showTypeLabel: true,
    autoScroll: true,
  },
};

// Fast ticker
export const FastTicker = {
  args: {
    interval: 3000,
    filterType: 'ALL',
    showTypeLabel: true,
    autoScroll: true,
  },
};

// Slow ticker
export const SlowTicker = {
  args: {
    interval: 8000,
    filterType: 'ALL',
    showTypeLabel: true,
    autoScroll: true,
  },
};

// Manual control (no auto-scroll)
export const ManualControl = {
  args: {
    interval: 5000,
    filterType: 'ALL',
    showTypeLabel: true,
    autoScroll: false,
  },
};

// Corp news only
export const CorpNewsOnly = {
  args: {
    interval: 5000,
    filterType: 'CORP_NEWS',
    showTypeLabel: true,
    autoScroll: true,
  },
};

// Street intel only
export const StreetIntelOnly = {
  args: {
    interval: 5000,
    filterType: 'STREET_INTEL',
    showTypeLabel: true,
    autoScroll: true,
  },
};

// Gang chatter only
export const GangChatterOnly = {
  args: {
    interval: 5000,
    filterType: 'GANG_CHATTER',
    showTypeLabel: true,
    autoScroll: true,
  },
};

// SecOps only
export const SecOpsOnly = {
  args: {
    interval: 5000,
    filterType: 'SEC_OPS',
    showTypeLabel: true,
    autoScroll: true,
  },
};

// System messages only
export const SystemOnly = {
  args: {
    interval: 5000,
    filterType: 'SYSTEM',
    showTypeLabel: true,
    autoScroll: true,
  },
};

// Minimal (no type label)
export const MinimalTicker = {
  args: {
    interval: 5000,
    filterType: 'ALL',
    showTypeLabel: false,
    autoScroll: true,
  },
};

// Corporate terminal ticker
export const CorporateTerminal = {
  args: {
    interval: 6000,
    filterType: 'CORP_NEWS',
    showTypeLabel: false,
    autoScroll: true,
  },
};

// Street terminal ticker
export const StreetTerminal = {
  args: {
    interval: 4000,
    filterType: 'STREET_INTEL',
    showTypeLabel: true,
    autoScroll: true,
  },
};

// Gang headquarters ticker
export const GangHQTicker = {
  args: {
    interval: 5000,
    filterType: 'GANG_CHATTER',
    showTypeLabel: false,
    autoScroll: true,
  },
};
