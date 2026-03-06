import SecureAccessControl from './SecureAccessControl';

export default {
  title: 'Terminal/SecureAccessControl',
  component: SecureAccessControl,
};

export const Basic = {
  args: {
    systemName: 'BASIC ACCESS CONTROL',
    location: "Batu's Bodega — Security System",
    systemVersion: 'v2.1.0',
    lastUpdate: '1 year ago',
    accessPoints: [
      {
        name: 'Main Entrance',
        status: 'UNLOCKED',
        security: 'STANDARD',
        authorized: 'Public',
        lastAccess: '2 minutes ago',
        accessCount: 234,
      },
      {
        name: 'Back Office',
        status: 'LOCKED',
        security: 'KEYPAD CODE',
        authorized: 'Owner + Manager',
        lastAccess: '3 hours ago',
        accessCount: 5,
      },
    ],
  },
};

export const HighSecurity = {
  args: {
    systemName: 'CAVE CLUB — ACCESS CONTROL',
    location: 'Cave Club — Stone Eels Territory',
    systemVersion: 'v4.2.1',
    lastUpdate: '2 weeks ago',
    accessPoints: [
      {
        name: 'Main Entrance',
        status: 'UNLOCKED',
        security: 'KEYCARD + FACE RECOGNITION',
        authorized: 'All Patrons (ID Check)',
        lastAccess: '2 minutes ago',
        accessCount: 147,
      },
      {
        name: 'VIP Booth 3',
        status: 'LOCKED',
        security: 'RETINAL SCAN REQUIRED',
        authorized: 'Saša Only',
        lastAccess: '3 hours ago',
        accessCount: 2,
        flags: ['ENHANCED SECURITY', 'ADDITIONAL ENCRYPTION'],
        notes: 'High-priority security — Manual override disabled',
      },
      {
        name: 'Back Room (Office Complex)',
        status: 'SEALED',
        security: 'BIOMETRIC LOCK',
        authorized: 'Saša + Senior Security',
        lastAccess: '30 minutes ago',
        accessCount: 4,
        flags: ['ENHANCED SECURITY PROTOCOL ACTIVE', 'RECENT OVERRIDE'],
        notes: 'CAUTION — Holding area active, 2x guards assigned',
      },
    ],
  },
};

export const Compromised = {
  args: {
    systemName: 'SECURITY SYSTEM (COMPROMISED)',
    location: 'Office Building — Floor 7',
    systemVersion: 'v3.8.2',
    lastUpdate: '6 months ago',
    accessPoints: [
      {
        name: 'Executive Suite',
        status: 'OVERRIDE',
        security: 'BIOMETRIC LOCK',
        authorized: 'C-Level Executives',
        lastAccess: '23 minutes ago',
        accessCount: 1,
        flags: ['RECENT OVERRIDE', 'UNAUTHORIZED ACCESS DETECTED'],
        notes: 'WARNING — Manual override from unknown source',
      },
      {
        name: 'Server Room',
        status: 'OVERRIDE',
        security: 'KEYCARD + PIN',
        authorized: 'IT Staff',
        lastAccess: '45 minutes ago',
        accessCount: 2,
        flags: ['RECENT OVERRIDE'],
        notes: 'ALERT — Security logs show unusual access pattern',
      },
    ],
  },
};

export const Biometric = {
  args: {
    systemName: 'BIOMETRIC RECOGNITION SYSTEM',
    location: 'Central Plaza Tower — Main Atrium',
    systemVersion: 'v4.2.1',
    lastUpdate: '2 weeks ago',
    confidence: '85%',
    scans: [
      {
        timestamp: '14:32',
        result: 'MATCHED',
        source: 'CAM-CPT-FOYER',
        name: 'Dr. Y. Nakamura',
        confidence: 97,
        notes: 'Resident — cleared',
      },
      {
        timestamp: '14:28',
        result: 'FAILED',
        source: 'CAM-CPT-FOYER',
        confidence: 31,
        details: 'Face obscured — hood/mask',
        notes: 'FLAGGED — Security notified',
      },
      {
        timestamp: '13:45',
        result: 'PARTIAL',
        source: 'CAM-CPT-FOYER',
        name: 'Unknown (possible match: T. Halverson)',
        confidence: 61,
        notes: 'Low confidence — logged for review',
      },
    ],
  },
};
