/**
 * Event Data for EventFeed Component
 *
 * Events are categorized by source type and can be filtered/displayed accordingly.
 * Each event has a timestamp (relative or absolute) and type for color coding.
 *
 * Event Types:
 * - CORP_NEWS: Corporate press releases and official statements
 * - STREET_INTEL: Rumors, tips, underground information
 * - GANG_CHATTER: Gang activity, territorial disputes
 * - SEC_OPS: Security forces, law enforcement
 * - SYSTEM: Terminal system messages, warnings
 */

export const EVENT_FEED = [
  // Recent events (minutes/hours ago)
  {
    id: 'event-001',
    type: 'CORP_NEWS',
    timestamp: '15 min ago',
    text: 'Alliansen Inc. reports "minor security incident" at Ports warehouse. No details released.',
  },
  {
    id: 'event-002',
    type: 'STREET_INTEL',
    timestamp: '45 min ago',
    text: 'Stone Eels muscle spotted moving through docks. Something big going down tonight.',
  },
  {
    id: 'event-003',
    type: 'GANG_CHATTER',
    timestamp: '1 hour ago',
    text: 'Virid Vipers recruiting for crew. High pay, high risk. Contact usual channels.',
  },
  {
    id: 'event-004',
    type: 'CORP_NEWS',
    timestamp: '2 hours ago',
    text: 'SecOps announces increased patrols in Ports district following spike in theft.',
  },
  {
    id: 'event-005',
    type: 'STREET_INTEL',
    timestamp: '3 hours ago',
    text: 'Word on the street: UCS agent operating in the city. Corps paying top dollar for intel.',
  },
  {
    id: 'event-006',
    type: 'GANG_CHATTER',
    timestamp: '4 hours ago',
    text: 'Stone Eels and Virid Vipers spotted in same territory. Ceasefire holding... for now.',
  },
  {
    id: 'event-007',
    type: 'SEC_OPS',
    timestamp: '5 hours ago',
    text: 'Multiple reports of unauthorized network access in corporate sector. Investigation ongoing.',
  },
  {
    id: 'event-008',
    type: 'CORP_NEWS',
    timestamp: '6 hours ago',
    text: 'Lucky Flight Casino announces record profits. Expansion plans in development.',
  },
  {
    id: 'event-009',
    type: 'STREET_INTEL',
    timestamp: '8 hours ago',
    text: 'Black market credchip exchange rates fluctuating. Buyers beware.',
  },
  {
    id: 'event-010',
    type: 'GANG_CHATTER',
    timestamp: '10 hours ago',
    text: 'Cave Club hosting underground fight night. Heavy betting expected.',
  },
  {
    id: 'event-011',
    type: 'CORP_NEWS',
    timestamp: '12 hours ago',
    text: 'Alliansen R&D division announces breakthrough in neural implant technology.',
  },
  {
    id: 'event-012',
    type: 'STREET_INTEL',
    timestamp: '14 hours ago',
    text: 'Rumor: Major shipment hitting the docks tonight. Security will be tight.',
  },
  {
    id: 'event-013',
    type: 'SEC_OPS',
    timestamp: '16 hours ago',
    text: 'SecOps raid on suspected chop shop in industrial district. Three arrests made.',
  },
  {
    id: 'event-014',
    type: 'GANG_CHATTER',
    timestamp: '18 hours ago',
    text: 'Stone Eels putting out feelers for skilled netrunner. Discrete inquiries only.',
  },
  {
    id: 'event-015',
    type: 'STREET_INTEL',
    timestamp: '20 hours ago',
    text: 'Food prices up 15% in Ports district. Residents getting desperate.',
  },
  {
    id: 'event-016',
    type: 'CORP_NEWS',
    timestamp: '1 day ago',
    text: 'Corporate merger announced: Alliansen acquires smaller rival. Stock prices soar.',
  },
  {
    id: 'event-017',
    type: 'STREET_INTEL',
    timestamp: '1 day ago',
    text: 'Anonymous tip: Alliansen moving sensitive data through Ports warehouse this week.',
  },
  {
    id: 'event-018',
    type: 'GANG_CHATTER',
    timestamp: '1 day ago',
    text: 'Virid Vipers lieutenant found dead in canal. Gang war brewing?',
  },
  {
    id: 'event-019',
    type: 'SEC_OPS',
    timestamp: '2 days ago',
    text: 'New facial recognition scanners deployed in downtown. Privacy advocates protest.',
  },
  {
    id: 'event-020',
    type: 'CORP_NEWS',
    timestamp: '2 days ago',
    text: 'Lucky Flight Casino denies allegations of rigged games. "All systems audited and certified."',
  },
  {
    id: 'event-021',
    type: 'STREET_INTEL',
    timestamp: '2 days ago',
    text: 'Street doc "Fingers" arrested. Underground medical scene scrambling for alternatives.',
  },
  {
    id: 'event-022',
    type: 'GANG_CHATTER',
    timestamp: '3 days ago',
    text: 'Stone Eels expanding territory into neutral zone. Other gangs watching closely.',
  },
  {
    id: 'event-023',
    type: 'SYSTEM',
    timestamp: '3 days ago',
    text: 'SYSTEM ALERT: Encrypted traffic detected on local network. Source unknown.',
  },
  {
    id: 'event-024',
    type: 'CORP_NEWS',
    timestamp: '3 days ago',
    text: 'Alliansen CEO promises "new era of prosperity" in quarterly earnings call.',
  },
  {
    id: 'event-025',
    type: 'STREET_INTEL',
    timestamp: '4 days ago',
    text: 'Ports residents organizing against casino expansion. Meeting at Batu\'s Bodega tonight.',
  },
];

// Helper function to get events by type
export const getEventsByType = (type) => {
  return EVENT_FEED.filter(event => event.type === type);
};

// Helper function to get recent events (last N events)
export const getRecentEvents = (limit = 10) => {
  return EVENT_FEED.slice(0, limit);
};

// Helper function to get all event types
export const getEventTypes = () => {
  return [...new Set(EVENT_FEED.map(event => event.type))];
};
