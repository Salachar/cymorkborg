import Message from './Message';

export default {
  title: 'Terminal/Message',
  component: Message,
};

export const BlankProps = {
  args: {},
};

// Small business - bodega
export const BodegaAccess = {
  args: {
    name: 'LUCKY STAR BODEGA',
    message: 'EMPLOYEE ACCESS GRANTED',
    networkInfo: 'Network: BODEGA-STAFF-01 | Connected to POS system',
    theme: 'casual',
  },
};

// Casino internal
export const CasinoAccess = {
  args: {
    name: 'LUCKY FLIGHT CASINO',
    message: 'STAFF NETWORK ACCESS APPROVED',
    networkInfo: 'Security Level: HIGH | All activity monitored',
    theme: 'corporate',
  },
};

// Warehouse system
export const WarehouseAccess = {
  args: {
    name: 'SECURECARGO WAREHOUSE',
    message: 'LOGISTICS SYSTEM ONLINE',
    networkInfo: 'Connected to inventory management | Shift: NIGHT',
    theme: 'corporate',
  },
};

// Corporate HQ
export const CorporateAccess = {
  args: {
    name: 'BIGMOSSE CORPORATE',
    message: 'AUTHORIZED PERSONNEL ONLY',
    networkInfo: 'Encrypted connection | VPN active | Building: TOWER A',
    theme: 'secure',
  },
};

// Nightclub
export const NightclubAccess = {
  args: {
    name: 'CAVE CLUB',
    message: 'STAFF ACCESS GRANTED',
    networkInfo: 'Sound system network | Lighting controls | Bar POS',
    theme: 'casual',
  },
};

// Medical facility
export const MedicalAccess = {
  args: {
    name: 'VITALCORP CLINIC',
    message: 'MEDICAL STAFF ACCESS',
    networkInfo: 'HIPAA-compliant network | Patient records accessible',
    theme: 'corporate',
  },
};

// Restaurant/bar
export const RestaurantAccess = {
  args: {
    name: 'NEON BISTRO',
    message: 'KITCHEN & FRONT OF HOUSE ACCESS',
    networkInfo: 'POS system | Reservation system | Inventory',
    theme: 'casual',
  },
};

// Security company
export const SecurityAccess = {
  args: {
    name: 'SECOPS HQ',
    message: 'SECURITY PERSONNEL AUTHORIZED',
    networkInfo: 'CRITICAL: All communications encrypted | Emergency protocols active',
    theme: 'secure',
  },
};

// Data center
export const DataCenterAccess = {
  args: {
    name: 'DATAVAULT SYSTEMS',
    message: 'TECHNICIAN ACCESS VERIFIED',
    networkInfo: 'Server monitoring | Climate controls | Power management',
    theme: 'secure',
  },
};

// Manufacturing
export const ManufacturingAccess = {
  args: {
    name: 'APEX MANUFACTURING',
    message: 'FLOOR SUPERVISOR ACCESS',
    networkInfo: 'Production line controls | Quality metrics | Safety systems',
    theme: 'corporate',
  },
};

// Retail store
export const RetailAccess = {
  args: {
    name: 'TECHMART ELECTRONICS',
    message: 'EMPLOYEE DASHBOARD',
    networkInfo: 'Inventory system | Customer lookup | Returns processing',
    theme: 'casual',
  },
};

// Hotel
export const HotelAccess = {
  args: {
    name: 'SKYLINE GRAND HOTEL',
    message: 'FRONT DESK & CONCIERGE ACCESS',
    networkInfo: 'Reservations | Guest services | Housekeeping coordination',
    theme: 'corporate',
  },
};

// Gym/fitness center
export const GymAccess = {
  args: {
    name: 'POWER FITNESS CENTER',
    message: 'STAFF & TRAINER ACCESS',
    networkInfo: 'Member database | Class schedules | Equipment tracking',
    theme: 'casual',
  },
};

// Underground/gang front
export const UndergroundAccess = {
  args: {
    name: 'STONE EELS - SECURE CHANNEL',
    message: 'VERIFIED MEMBER - WELCOME',
    networkInfo: '⚠ Encrypted communication only | No logs | Trust no one',
    theme: 'secure',
  },
};

// Government office
export const GovernmentAccess = {
  args: {
    name: 'CITIZEN SERVICES PORTAL',
    message: 'CIVIL SERVANT ACCESS APPROVED',
    networkInfo: 'Official use only | All transactions logged for audit',
    theme: 'secure',
  },
};

// Library
export const LibraryAccess = {
  args: {
    name: 'CITY PUBLIC LIBRARY',
    message: 'LIBRARIAN WORKSTATION',
    networkInfo: 'Catalog system | Circulation desk | Digital archives',
    theme: 'casual',
  },
};

// Gas station
export const GasStationAccess = {
  args: {
    name: 'QUICKFUEL STATION',
    message: 'ATTENDANT ACCESS',
    networkInfo: 'Pump controls | Register system | Inventory alerts',
    theme: 'casual',
  },
};

// Bank branch
export const BankAccess = {
  args: {
    name: 'QUANTUM FINANCIAL',
    message: 'TELLER STATION AUTHENTICATED',
    networkInfo: 'CRITICAL: Customer data encrypted | Transaction monitoring active',
    theme: 'secure',
  },
};

// School/university
export const SchoolAccess = {
  args: {
    name: 'TECH UNIVERSITY',
    message: 'FACULTY & STAFF ACCESS',
    networkInfo: 'Student records | Grading system | Resource booking',
    theme: 'corporate',
  },
};

// Minimal (no network info)
export const MinimalAccess = {
  args: {
    name: 'LOCAL SHOP',
    message: 'ACCESS GRANTED',
    theme: 'casual',
  },
};

// High security facility
export const MaxSecurityAccess = {
  args: {
    name: 'CLASSIFIED FACILITY',
    message: 'LEVEL 7 CLEARANCE VERIFIED',
    networkInfo: '⚠ CRITICAL: Quantum encryption active | Biometric auth confirmed | Zero-trust protocol',
    theme: 'secure',
  },
};

// Hacker/underground network
export const HackerAccess = {
  args: {
    name: 'PHANTOM NETWORK',
    message: 'ANONYMOUS NODE CONNECTED',
    networkInfo: 'TOR routing active | No logs | Encrypted traffic only | Exit at will',
    theme: 'secure',
  },
};

// Pharmacy
export const PharmacyAccess = {
  args: {
    name: 'MEDIPLUS PHARMACY',
    message: 'PHARMACIST WORKSTATION',
    networkInfo: 'Prescription database | Insurance verification | Controlled substance tracking',
    theme: 'corporate',
  },
};

// Auto repair shop
export const AutoShopAccess = {
  args: {
    name: 'CHROME CUSTOMS GARAGE',
    message: 'MECHANIC TERMINAL',
    networkInfo: 'Work orders | Parts inventory | Diagnostic tools',
    theme: 'casual',
  },
};

// TV/radio station
export const MediaAccess = {
  args: {
    name: 'NEON CITY BROADCASTING',
    message: 'PRODUCTION TEAM ACCESS',
    networkInfo: 'Live feed controls | Archive system | Scheduling dashboard',
    theme: 'corporate',
  },
};
