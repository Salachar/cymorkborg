import NetworkTrafficMonitor from './NetworkTrafficMonitor';

export default {
  title: 'Terminal/NetworkTrafficMonitor',
  component: NetworkTrafficMonitor,
};

export const BlankProps = {
  args: {},
};

// Cave Club - Charlie Sand interrogation data
export const CharlieInterrogation = {
  args: {
    id: 'cave-club-netmon',
    systemName: 'NETWORK TRAFFIC MONITOR',
    location: 'Cave Club - Internal Network',
    bandwidth: '67% utilized',
    activeConnections: 8,
    transfers: [
      {
        timestamp: '19:45:23',
        status: 'COMPLETE',
        filename: 'interrogation_transcript_sand_c.dat',
        size: '2.3MB',
        source: 'Back Room Terminal',
        destination: 'UCS_RELAY_NODE_47.onion',
        protocol: 'ENCRYPTED (TLS 1.3)',
        notes: 'Subject uncooperative - incomplete data',
      },
      {
        timestamp: '20:15:47',
        status: 'QUEUED',
        filename: 'followup_session_scheduled.dat',
        size: '124KB',
        source: 'Security Terminal',
        destination: 'UCS_RELAY_NODE_47.onion',
        protocol: 'ENCRYPTED',
        notes: 'Next attempt: 23:00 (scheduled)',
      },
      {
        timestamp: '21:05:12',
        status: 'ACTIVE',
        filename: 'security_camera_feed_07.stream',
        size: '547MB',
        source: 'Camera 07',
        destination: 'Local Storage - Encrypted',
        protocol: 'ENCRYPTED',
        progress: 73,
      },
      {
        timestamp: '22:30:05',
        status: 'COMPLETE',
        filename: 'nightly_revenue_report.xlsx',
        size: '1.8MB',
        source: 'Point of Sale System',
        destination: 'Stone Eels Financial Server',
        protocol: 'VPN (Secured)',
      },
    ],
  },
};

// Corporate espionage - suspicious transfers
export const CorporateEspionage = {
  args: {
    id: 'alliansen-netmon',
    systemName: 'ALLIANSEN NETWORK SECURITY',
    location: 'Alliansen Warehouse - Network Operations',
    bandwidth: '89% utilized',
    activeConnections: 14,
    transfers: [
      {
        timestamp: '02:15:33',
        status: 'ACTIVE',
        filename: 'classified_research_data_batch_47.enc',
        size: '12.4GB',
        source: 'R&D Server - Lab 3',
        destination: 'UNKNOWN_IP_47.23.88.142',
        protocol: 'ENCRYPTED (Unknown)',
        progress: 45,
        notes: 'ALERT - Unusual transfer size and destination',
      },
      {
        timestamp: '02:47:11',
        status: 'COMPLETE',
        filename: 'employee_records_full_dump.db',
        size: '3.7GB',
        source: 'HR Database',
        destination: 'External Server (Unverified)',
        protocol: 'ENCRYPTED',
        notes: 'UNAUTHORIZED - Security breach detected',
      },
      {
        timestamp: '03:12:05',
        status: 'FAILED',
        filename: 'financial_ledger_2025.xlsx',
        size: '2.1GB',
        source: 'Finance Terminal',
        destination: 'Dark Web Node',
        protocol: 'Blocked by Firewall',
        notes: 'Transfer blocked - Intrusion attempt logged',
      },
    ],
  },
};

// Normal office activity
export const NormalOfficeActivity = {
  args: {
    id: 'office-netmon',
    systemName: 'OFFICE NETWORK MONITOR',
    location: 'Generic Office Building - Floor 5',
    bandwidth: '34% utilized',
    activeConnections: 23,
    transfers: [
      {
        timestamp: '09:23:15',
        status: 'COMPLETE',
        filename: 'quarterly_report_draft_v3.docx',
        size: '4.2MB',
        source: 'Workstation 12',
        destination: 'Corporate SharePoint',
        protocol: 'HTTPS',
      },
      {
        timestamp: '10:15:42',
        status: 'COMPLETE',
        filename: 'marketing_presentation.pptx',
        size: '23.5MB',
        source: 'Workstation 07',
        destination: 'Cloud Storage (Approved)',
        protocol: 'HTTPS',
      },
      {
        timestamp: '11:05:33',
        status: 'ACTIVE',
        filename: 'database_backup_daily.zip',
        size: '1.2GB',
        source: 'Database Server',
        destination: 'Backup Server (Local)',
        protocol: 'Secured Transfer',
        progress: 67,
      },
      {
        timestamp: '11:47:18',
        status: 'COMPLETE',
        filename: 'employee_photos_batch.zip',
        size: '156MB',
        source: 'HR Workstation',
        destination: 'Personnel Database',
        protocol: 'Internal Network',
      },
    ],
  },
};

// Heavy data transfer - active uploads
export const HeavyDataTransfer = {
  args: {
    id: 'research-netmon',
    systemName: 'RESEARCH FACILITY NETWORK',
    location: 'Tech Research Lab - Data Center',
    bandwidth: '94% utilized',
    activeConnections: 6,
    transfers: [
      {
        timestamp: '14:23:15',
        status: 'ACTIVE',
        filename: 'neural_network_training_data_v12.dat',
        size: '47.8GB',
        source: 'AI Research Lab',
        destination: 'Cloud Computing Cluster',
        protocol: 'ENCRYPTED (Military Grade)',
        progress: 89,
        notes: 'LARGE - High bandwidth consumption',
      },
      {
        timestamp: '15:05:42',
        status: 'ACTIVE',
        filename: 'simulation_results_batch_334.csv',
        size: '8.9GB',
        source: 'Simulation Server',
        destination: 'Analysis Server',
        protocol: 'ENCRYPTED',
        progress: 23,
      },
      {
        timestamp: '15:47:33',
        status: 'QUEUED',
        filename: 'prototype_schematics_classified.cad',
        size: '3.4GB',
        source: 'Engineering Terminal',
        destination: 'Secure Archive',
        protocol: 'ENCRYPTED',
        notes: 'Awaiting bandwidth availability',
      },
    ],
  },
};

// Quiet network - minimal activity
export const QuietNetwork = {
  args: {
    id: 'quiet-netmon',
    systemName: 'SMALL BUSINESS NETWORK',
    location: 'Local Shop - Back Office',
    bandwidth: '12% utilized',
    activeConnections: 3,
    transfers: [
      {
        timestamp: '16:23:11',
        status: 'COMPLETE',
        filename: 'daily_sales_log.csv',
        size: '87KB',
        source: 'POS Terminal',
        destination: 'Accounting Software',
        protocol: 'HTTPS',
      },
    ],
  },
};

// No transfers
export const NoActivity = {
  args: {
    id: 'idle-netmon',
    systemName: 'NETWORK TRAFFIC MONITOR',
    location: 'Maintenance Mode - System Idle',
    bandwidth: '0% utilized',
    activeConnections: 0,
    transfers: [],
  },
};

// Underground data exchange
export const UndergroundDataExchange = {
  args: {
    id: 'underground-netmon',
    systemName: 'ANONYMOUS NETWORK NODE',
    location: 'Unknown Location - Dark Web Gateway',
    bandwidth: '78% utilized',
    activeConnections: 42,
    transfers: [
      {
        timestamp: '03:15:22',
        status: 'ACTIVE',
        filename: 'stolen_credentials_database.enc',
        size: '5.6GB',
        source: 'Anonymous Source',
        destination: 'Tor Hidden Service',
        protocol: 'ENCRYPTED (Multi-layer)',
        progress: 56,
        notes: 'UNUSUAL - High security protocols detected',
      },
      {
        timestamp: '03:47:11',
        status: 'COMPLETE',
        filename: 'corporate_secrets_bundle.7z',
        size: '2.1GB',
        source: 'Compromised Server',
        destination: 'Buyer Network Node',
        protocol: 'ENCRYPTED',
        notes: 'Payment received in cryptocurrency',
      },
      {
        timestamp: '04:12:33',
        status: 'ACTIVE',
        filename: 'malware_toolkit_v7.exe',
        size: '456MB',
        source: 'Development Server',
        destination: 'Distribution Network',
        protocol: 'ENCRYPTED',
        progress: 91,
        notes: 'ALERT - Malicious content detected',
      },
      {
        timestamp: '04:45:18',
        status: 'QUEUED',
        filename: 'identity_package_batch_89.zip',
        size: '1.8GB',
        source: 'Data Broker',
        destination: 'Multiple Recipients',
        protocol: 'ENCRYPTED',
        notes: 'Scheduled distribution',
      },
    ],
  },
};
