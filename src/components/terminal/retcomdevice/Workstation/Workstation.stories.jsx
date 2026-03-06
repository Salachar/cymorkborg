import Workstation from './Workstation';

export default {
  title: 'Terminal/Workstation',
  component: Workstation,
};

// Active worker - productive
export const ProductiveEmployee = {
  args: {
    owner: 'Sarah Chen',
    role: 'Senior Data Analyst',
    status: 'ACTIVE',
    lastActivity: '2 minutes ago',
    openTabs: [
      { title: 'Quarterly Report Analysis - Excel', type: 'work' },
      { title: 'Dashboard Metrics - Analytics Platform', type: 'work' },
      { title: 'Team Meeting Notes - Confluence', type: 'work' },
      { title: 'SQL Query Builder', type: 'work' },
    ],
    recentFiles: [
      { name: 'Q4_Revenue_Analysis.xlsx', timestamp: '10:45 AM' },
      { name: 'Customer_Segmentation.pptx', timestamp: '10:22 AM' },
      { name: 'Database_Export_2024.csv', timestamp: '09:58 AM' },
    ],
    emails: 12,
    productivity: 89,
  },
};

// Slacker - browsing personal sites
export const SlackerEmployee = {
  args: {
    owner: 'Alex Rodriguez',
    role: 'Customer Service Rep',
    status: 'IDLE',
    lastActivity: '45 minutes ago',
    openTabs: [
      { title: 'Reddit - r/gaming', type: 'personal' },
      { title: 'YouTube - Game Reviews', type: 'personal' },
      { title: 'Twitter Feed', type: 'personal' },
      { title: 'CRM Dashboard (minimized)', type: 'work' },
      { title: 'Facebook Messenger', type: 'personal' },
    ],
    recentFiles: [
      { name: 'Vacation_Plans.docx', timestamp: '2:15 PM' },
      { name: 'Resume_Updated.pdf', timestamp: '1:30 PM' },
    ],
    emails: 47,
    productivity: 23,
  },
};

// Suspicious activity
export const SuspiciousEmployee = {
  args: {
    owner: 'James Park',
    role: 'Warehouse Guard',
    status: 'ACTIVE',
    lastActivity: '5 minutes ago',
    openTabs: [
      { title: 'Stone Eels - Private Forum', type: 'suspicious' },
      { title: 'Encrypted Chat - Signal', type: 'suspicious' },
      { title: 'Container Manifest 7B - Internal', type: 'work' },
      { title: 'Guard Schedule - This Week', type: 'work' },
      { title: 'Cryptocurrency Exchange', type: 'suspicious' },
    ],
    recentFiles: [
      { name: 'CONFIDENTIAL_Routes.pdf', timestamp: '11:30 PM' },
      { name: 'Guard_Rotations_COPY.xlsx', timestamp: '11:15 PM' },
      { name: 'Security_Codes_Backup.txt', timestamp: '10:45 PM' },
    ],
    emails: 3,
    productivity: 42,
  },
};

// Executive workstation
export const ExecutiveWorkstation = {
  args: {
    owner: 'Victoria Sterling',
    role: 'Vice President of Operations',
    status: 'ACTIVE',
    lastActivity: '1 minute ago',
    openTabs: [
      { title: 'Board Meeting Presentation', type: 'work' },
      { title: 'M&A Target Analysis - Confidential', type: 'work' },
      { title: 'Executive Email - Outlook', type: 'work' },
      { title: 'Stock Portfolio - Private', type: 'personal' },
      { title: 'Bloomberg Terminal', type: 'work' },
    ],
    recentFiles: [
      { name: 'Merger_Proposal_DRAFT.pptx', timestamp: '3:20 PM' },
      { name: 'Executive_Compensation.xlsx', timestamp: '2:45 PM' },
      { name: 'Strategic_Plan_2025.docx', timestamp: '1:30 PM' },
    ],
    emails: 89,
    productivity: 94,
  },
};

// Away from desk - suspicious productivity
export const MouseJigglerDetected = {
  args: {
    owner: 'Michael Torres',
    role: 'Floor Manager',
    status: 'AWAY',
    lastActivity: '3 hours ago',
    openTabs: [
      { title: 'Production Dashboard', type: 'work' },
      { title: 'Email - Inbox (0 new)', type: 'work' },
    ],
    recentFiles: [
      { name: 'Daily_Report.xlsx', timestamp: '8:05 AM' },
    ],
    emails: 2,
    productivity: 95, // High productivity while away = mouse jiggler detected
  },
};

// IT administrator
export const ITAdminWorkstation = {
  args: {
    owner: 'Kevin Zhang',
    role: 'Systems Administrator',
    status: 'ACTIVE',
    lastActivity: '30 seconds ago',
    openTabs: [
      { title: 'Server Monitoring Dashboard', type: 'work' },
      { title: 'Ticket Queue - ServiceNow', type: 'work' },
      { title: 'SSH Terminal - Production Server', type: 'work' },
      { title: 'Stack Overflow - Python Error', type: 'work' },
      { title: 'Documentation - Linux Admin', type: 'work' },
    ],
    recentFiles: [
      { name: 'backup_script.sh', timestamp: '4:12 PM' },
      { name: 'server_config.yaml', timestamp: '3:55 PM' },
      { name: 'incident_report_20250122.md', timestamp: '2:30 PM' },
    ],
    emails: 34,
    productivity: 76,
  },
};

// Locked workstation
export const LockedWorkstation = {
  args: {
    owner: 'Marcus Webb',
    role: 'Night Supervisor',
    status: 'LOCKED',
    lastActivity: '20 minutes ago',
    openTabs: [],
    recentFiles: [],
    emails: 8,
    productivity: 65,
  },
};

// Overworked employee
export const OverworkedEmployee = {
  args: {
    owner: 'Lisa Morgan',
    role: 'Network Engineer',
    status: 'ACTIVE',
    lastActivity: 'Just now',
    openTabs: [
      { title: 'Critical Outage - Incident #4782', type: 'work' },
      { title: 'Network Diagram - Visio', type: 'work' },
      { title: 'Router Config - Emergency', type: 'work' },
      { title: 'Slack - #incidents (47 unread)', type: 'work' },
      { title: 'Coffee Shop Delivery - UberEats', type: 'personal' },
      { title: 'Energy Drink Store', type: 'personal' },
    ],
    recentFiles: [
      { name: 'EMERGENCY_FIX_v7.cfg', timestamp: '11:45 PM' },
      { name: 'Outage_Timeline.xlsx', timestamp: '11:22 PM' },
      { name: 'Network_Backup_PreCrash.zip', timestamp: '10:15 PM' },
    ],
    emails: 156,
    productivity: 112, // Over 100 = working overtime
  },
};

// New employee
export const NewEmployee = {
  args: {
    owner: 'Sophia Nguyen',
    role: 'Marketing Intern',
    status: 'ACTIVE',
    lastActivity: '5 minutes ago',
    openTabs: [
      { title: 'New Employee Orientation - Day 2', type: 'work' },
      { title: 'Company Policies - HR Portal', type: 'work' },
      { title: 'Social Media Basics Tutorial', type: 'work' },
      { title: 'Team Directory', type: 'work' },
    ],
    recentFiles: [
      { name: 'Onboarding_Checklist.pdf', timestamp: '10:30 AM' },
      { name: 'First_Draft_Post.docx', timestamp: '11:15 AM' },
    ],
    emails: 23,
    productivity: 58,
  },
};

// Remote worker
export const RemoteWorker = {
  args: {
    owner: 'Brian Foster',
    role: 'Senior UX Designer',
    status: 'ACTIVE',
    lastActivity: '10 minutes ago',
    openTabs: [
      { title: 'Figma - Mobile App Redesign', type: 'work' },
      { title: 'Zoom - Team Standup', type: 'work' },
      { title: 'Slack - #design-team', type: 'work' },
      { title: 'Spotify - Focus Playlist', type: 'personal' },
      { title: 'Weather - Local Forecast', type: 'personal' },
    ],
    recentFiles: [
      { name: 'App_Mockups_v3.fig', timestamp: '2:45 PM' },
      { name: 'User_Research_Notes.md', timestamp: '1:20 PM' },
      { name: 'Design_System_Update.pdf', timestamp: '11:30 AM' },
    ],
    emails: 19,
    productivity: 82,
  },
};

// Job hunting employee
export const JobHunter = {
  args: {
    owner: 'Rachel Kim',
    role: 'Marketing Coordinator',
    status: 'IDLE',
    lastActivity: '1 hour ago',
    openTabs: [
      { title: 'LinkedIn - Job Search', type: 'suspicious' },
      { title: 'Indeed - Marketing Jobs', type: 'suspicious' },
      { title: 'My Resume - Google Docs', type: 'suspicious' },
      { title: 'Marketing Campaign Draft (untouched)', type: 'work' },
      { title: 'Glassdoor - Company Reviews', type: 'suspicious' },
    ],
    recentFiles: [
      { name: 'Resume_2025_FINAL.pdf', timestamp: '3:30 PM' },
      { name: 'Cover_Letter_Template.docx', timestamp: '2:15 PM' },
      { name: 'Portfolio_Update.pdf', timestamp: '1:45 PM' },
    ],
    emails: 67,
    productivity: 15,
  },
};

// Casino employee
export const CasinoManager = {
  args: {
    owner: 'Frank Stone',
    role: 'Casino Floor Manager',
    status: 'ACTIVE',
    lastActivity: '8 minutes ago',
    openTabs: [
      { title: 'Security Camera Feed - Live', type: 'work' },
      { title: 'Table Performance - Tonight', type: 'work' },
      { title: 'Employee Schedule - This Week', type: 'work' },
      { title: 'VIP Guest List', type: 'work' },
    ],
    recentFiles: [
      { name: 'Nightly_Revenue_Report.xlsx', timestamp: '11:45 PM' },
      { name: 'Incident_Log_Jan22.docx', timestamp: '10:30 PM' },
      { name: 'Dealer_Performance.xlsx', timestamp: '9:15 PM' },
    ],
    emails: 14,
    productivity: 71,
  },
};

// Medical professional
export const DoctorWorkstation = {
  args: {
    owner: 'Dr. Patricia Lewis',
    role: 'Chief Medical Officer',
    status: 'ACTIVE',
    lastActivity: '15 minutes ago',
    openTabs: [
      { title: 'Electronic Health Records - Patient Dashboard', type: 'work' },
      { title: 'Lab Results - Pending Review', type: 'work' },
      { title: 'Medical Journal - Latest Research', type: 'work' },
      { title: 'Staff Meeting Agenda', type: 'work' },
    ],
    recentFiles: [
      { name: 'Patient_Chart_Updates.pdf', timestamp: '4:20 PM' },
      { name: 'Medical_Protocols_Jan2025.docx', timestamp: '2:10 PM' },
      { name: 'Monthly_Statistics.xlsx', timestamp: '11:45 AM' },
    ],
    emails: 42,
    productivity: 86,
  },
};

// Minimal workstation
export const MinimalWorkstation = {
  args: {
    owner: 'John Doe',
    role: 'Employee',
    status: 'IDLE',
    lastActivity: '30 minutes ago',
    openTabs: [
      { title: 'Email', type: 'work' },
    ],
    recentFiles: [],
    emails: 5,
    productivity: 50,
  },
};

// End of day cleanup
export const EndOfDay = {
  args: {
    owner: 'Dorothy Martinez',
    role: 'Senior Accountant',
    status: 'ACTIVE',
    lastActivity: '2 minutes ago',
    openTabs: [
      { title: 'End of Day Reconciliation', type: 'work' },
      { title: 'Timesheet - Submit', type: 'work' },
      { title: 'Tomorrow\'s Calendar', type: 'work' },
    ],
    recentFiles: [
      { name: 'Daily_Closing_Jan22.xlsx', timestamp: '5:45 PM' },
      { name: 'Expense_Report_January.pdf', timestamp: '5:20 PM' },
      { name: 'Budget_Review_Q1.xlsx', timestamp: '4:30 PM' },
    ],
    emails: 3,
    productivity: 78,
  },
};
