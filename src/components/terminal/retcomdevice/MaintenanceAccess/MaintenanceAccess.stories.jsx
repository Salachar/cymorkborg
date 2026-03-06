import MaintenanceAccess from './MaintenanceAccess';

export default {
  title: 'Terminal/MaintenanceAccess',
  component: MaintenanceAccess,
};

export const BlankProps = {
  args: {},
};

// Vending machine
export const VendingMachine = {
  args: {
    deviceModel: 'QuickDrinx 2000',
    deviceId: 'QD-45782-B',
    firmwareVersion: 'v2.4.1',
    systemStatus: 'OPERATIONAL',
    uptime: '14 days, 7 hours',
  },
};

export const VendingMachineNote = {
  args: {
    title: "[VENDING MAINTENANCE]",
    deviceModel: 'QuickDrinx 2000',
    deviceId: 'QD-45782-B',
    firmwareVersion: 'v2.4.1',
    systemStatus: 'OPERATIONAL',
    uptime: '14 days, 7 hours',
    notes: [
      "Promoted to manager position in 2065 after 2 years as supervisor",
      "Completed advanced logistics certification",
      "Team lead for new inventory management system implementation"
    ]
  },
};

// ATM machine
export const ATMMachine = {
  args: {
    deviceModel: 'ATM-500 SecureBank',
    deviceId: 'ATM-SB-00892',
    firmwareVersion: 'v3.1.8',
    systemStatus: 'OPERATIONAL',
    uptime: '42 days, 3 hours',
  },
};

// Security camera system
export const SecuritySystem = {
  args: {
    deviceModel: 'SecureView NVR-16',
    deviceId: 'SV-NVR-2847',
    firmwareVersion: 'v4.2.0',
    systemStatus: 'OPERATIONAL',
    uptime: '127 days, 18 hours',
  },
};

// Industrial equipment
export const IndustrialEquipment = {
  args: {
    deviceModel: 'AutoFab 3000 CNC',
    deviceId: 'AF-CNC-1142',
    firmwareVersion: 'v5.0.3',
    systemStatus: 'OPERATIONAL',
    uptime: '6 days, 14 hours',
  },
};

// HVAC system
export const HVACSystem = {
  args: {
    deviceModel: 'ClimateControl Pro 800',
    deviceId: 'CC-PRO-0334',
    firmwareVersion: 'v3.7.2',
    systemStatus: 'OPERATIONAL',
    uptime: '89 days, 11 hours',
  },
};

// Network router
export const NetworkRouter = {
  args: {
    deviceModel: 'NetCore R9000',
    deviceId: 'NC-R9K-7721',
    firmwareVersion: 'v7.8.4',
    systemStatus: 'OPERATIONAL',
    uptime: '201 days, 5 hours',
  },
};

// Degraded system
export const DegradedSystem = {
  args: {
    deviceModel: 'QuickDrinx 2000',
    deviceId: 'QD-19283-C',
    firmwareVersion: 'v2.3.7',
    systemStatus: 'DEGRADED',
    uptime: '3 days, 2 hours',
  },
};

// Error state
export const ErrorState = {
  args: {
    deviceModel: 'ATM-500 SecureBank',
    deviceId: 'ATM-SB-00445',
    firmwareVersion: 'v3.1.8',
    systemStatus: 'ERROR',
    uptime: '0 days, 2 hours',
  },
};

// Printer/copier
export const PrinterCopier = {
  args: {
    deviceModel: 'PrintMax 5000',
    deviceId: 'PM-5K-8834',
    firmwareVersion: 'v2.9.1',
    systemStatus: 'OPERATIONAL',
    uptime: '28 days, 9 hours',
  },
};

// POS system
export const POSSystem = {
  args: {
    deviceModel: 'RetailPoint 400',
    deviceId: 'RP-400-2291',
    firmwareVersion: 'v6.3.0',
    systemStatus: 'OPERATIONAL',
    uptime: '18 days, 4 hours',
  },
};

// Elevator system
export const ElevatorSystem = {
  args: {
    deviceModel: 'VertiLift 2000',
    deviceId: 'VL-2K-0487',
    firmwareVersion: 'v4.5.6',
    systemStatus: 'OPERATIONAL',
    uptime: '312 days, 22 hours',
  },
};

// Access control system
export const AccessControl = {
  args: {
    deviceModel: 'SecureEntry Pro',
    deviceId: 'SE-PRO-1156',
    firmwareVersion: 'v5.2.3',
    systemStatus: 'OPERATIONAL',
    uptime: '67 days, 15 hours',
  },
};

// Minimal maintenance panel
export const MinimalPanel = {
  args: {
    deviceModel: 'Basic System',
    firmwareVersion: 'v1.0.0',
    systemStatus: 'OPERATIONAL',
  },
};

// Parking meter
export const ParkingMeter = {
  args: {
    deviceModel: 'ParkPay 300',
    deviceId: 'PP-300-9472',
    firmwareVersion: 'v2.1.4',
    systemStatus: 'OPERATIONAL',
    uptime: '45 days, 6 hours',
  },
};

// Smart thermostat
export const SmartThermostat = {
  args: {
    deviceModel: 'TempSmart Home',
    deviceId: 'TS-HOME-3321',
    firmwareVersion: 'v3.4.2',
    systemStatus: 'OPERATIONAL',
    uptime: '156 days, 10 hours',
  },
};
