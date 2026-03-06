import EventFeed from './EventFeed';

export default {
  title: 'Terminal/EventFeed',
  component: EventFeed,
};

export const BlankProps = {
  args: {},
};

// Default - all feeds
export const AllFeeds = {
  args: {
    id: 'event-feed-all',
    limit: 15,
    showFilters: true,
    defaultFilter: 'ALL',
  },
};

// Corp news only
export const CorpNewsOnly = {
  args: {
    id: 'event-feed-corp',
    limit: 10,
    showFilters: true,
    defaultFilter: 'CORP_NEWS',
  },
};

// Street intel only
export const StreetIntelOnly = {
  args: {
    id: 'event-feed-street',
    limit: 10,
    showFilters: true,
    defaultFilter: 'STREET_INTEL',
  },
};

// Gang chatter only
export const GangChatterOnly = {
  args: {
    id: 'event-feed-gang',
    limit: 10,
    showFilters: true,
    defaultFilter: 'GANG_CHATTER',
  },
};

// SecOps only
export const SecOpsOnly = {
  args: {
    id: 'event-feed-secops',
    limit: 10,
    showFilters: true,
    defaultFilter: 'SEC_OPS',
  },
};

// Recent events (limited)
export const RecentEventsOnly = {
  args: {
    id: 'event-feed-recent',
    limit: 5,
    showFilters: true,
    defaultFilter: 'ALL',
  },
};

// No filters (compact view)
export const NoFilters = {
  args: {
    id: 'event-feed-compact',
    limit: 10,
    showFilters: false,
    defaultFilter: 'ALL',
  },
};

// Large feed
export const LargeFeed = {
  args: {
    id: 'event-feed-large',
    limit: 25,
    showFilters: true,
    defaultFilter: 'ALL',
  },
};

// Stone Eels terminal (gang perspective)
export const StoneEelsTerminal = {
  args: {
    id: 'stone-eels-feed',
    limit: 12,
    showFilters: true,
    defaultFilter: 'GANG_CHATTER',
  },
};

// Corporate terminal
export const CorporateTerminal = {
  args: {
    id: 'corp-terminal-feed',
    limit: 12,
    showFilters: true,
    defaultFilter: 'CORP_NEWS',
  },
};

// Street-level terminal
export const StreetTerminal = {
  args: {
    id: 'street-terminal-feed',
    limit: 15,
    showFilters: true,
    defaultFilter: 'STREET_INTEL',
  },
};

// Public access terminal
export const PublicAccess = {
  args: {
    id: 'public-feed',
    limit: 8,
    showFilters: false,
    defaultFilter: 'CORP_NEWS',
  },
};
