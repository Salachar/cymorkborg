import Camera from './Camera';

export default {
  title: 'Terminal/Camera',
  component: Camera,
};

export const Basic = {
  args: {
    id: 'CAM-BODEGA-01',
    location: 'Lucky Star Bodega — Main Entrance',
    status: 'ACTIVE',
    recording: true,
    storage: 'Local server (basement office)',
    timeline: [
      '23:15 — Figure enters, face obscured by hood',
      '23:17 — Register drawer opened forcefully',
      '23:18 — ⚠ Glass shattered, partial struggle visible',
      '23:19 — Signal lost briefly',
      '23:21 — Signal restored, store empty',
    ],
    lastService: 'March 15, 2067',
  },
};

export const Offline = {
  args: {
    id: 'CAM-ALLEY-02',
    location: 'Stone Street Alley — North Entrance',
    status: 'OFFLINE',
    recording: false,
    storage: 'Local server (connection lost)',
    timeline: [
      '20:42 — ⚠ Feed becomes unstable',
      '20:45 — SIGNAL LOST',
    ],
    lastService: 'October 5, 2067',
  },
};

export const Commercial = {
  args: {
    cameraId: 'CAM-CPT-FOYER',
    location: 'Central Plaza Tower — Ground Floor Atrium',
    coverage: 'Main entrance, security desk, elevator bank',
    status: 'ACTIVE',
    recording: true,
    storage: 'Encrypted server (30-day retention)',
    details: [
      '4K resolution, 120° wide angle',
      'Night vision: Active',
      'Motion detection: Enabled',
    ],
    alerts: [
      { time: '14:32', message: 'High foot traffic — Unit 4201 party guests' },
      { time: '09:45', message: 'Delivery authorization logged — Unit 4201' },
    ],
    lastService: 'November 10, 2067',
  },
};
