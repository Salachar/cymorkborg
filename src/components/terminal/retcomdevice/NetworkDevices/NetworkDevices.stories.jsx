import NetworkDevices from './NetworkDevices';

export default {
  title: 'Terminal/NetworkDevices',
  component: NetworkDevices,
};

export const BlankProps = () => (
  <NetworkDevices />
);

// Basic office network
export const OfficeNetwork = () => (
  <NetworkDevices
    title="CONNECTED DEVICES"
    subtitle="Office network scan - 192.168.1.x"
    devices={[
      { name: "Smart Coffee Maker (Break Room)", model: "BrewTech Auto-3000", status: "Online" },
      { name: "Security Camera (Front Desk)", model: "WatchEye Pro", status: "Online" },
      { name: "Smart TV (Conference Room)", model: "NeoScreen 65\"", status: "Standby" },
      { name: "Printer (Marketing)", model: "PrintPro X500", status: "Online" },
      { name: "Smart Lock (Server Room)", model: "SecureTech SL-9", status: "Online" },
    ]}
    footer="⚠ Corporate network - Unauthorized access prohibited"
  />
);

// Gang hideout
export const GangHideout = () => (
  <NetworkDevices
    title="NETWORK DEVICES"
    subtitle="Local scan complete"
    devices={[
      { name: "Burner Phone #1", model: "DisposaTalk 2G", status: "Online" },
      { name: "Burner Phone #2", model: "DisposaTalk 2G", status: "Offline" },
      { name: "Security Camera (Alley)", model: "StreetEye Basic", status: "Online" },
      { name: "Smart Fridge (Main Room)", model: "CoolBox 400", status: "Standby" },
      { name: "Gaming Console", model: "NeoStation 6", status: "Online" },
    ]}
    footer="⚠ Stone Eels territory - Keep it quiet"
  />
);

// Luxury apartment
export const LuxuryApartment = () => (
  <NetworkDevices
    title="SMART HOME DEVICES"
    subtitle="Residential network - 10.0.0.x"
    devices={[
      { name: "Smart Fridge (Kitchen)", model: "LuxCool Premium", status: "Online" },
      { name: "Smart TV (Living Room)", model: "UltraView 85\"", status: "Online" },
      { name: "Smart TV (Bedroom)", model: "UltraView 55\"", status: "Standby" },
      { name: "Thermostat (Central)", model: "ClimateControl Pro", status: "Online" },
      { name: "Smart Bulbs (x8)", model: "LightWave RGB", status: "Online" },
      { name: "Security System", model: "HomeSafe Elite", status: "Online" },
      { name: "Voice Assistant", model: "TalkBox Premium", status: "Online" },
      { name: "Robot Vacuum", model: "CleanBot 3000", status: "Standby" },
    ]}
    footer="Premium smart home package - Fully integrated"
  />
);

// Minimal network
export const MinimalNetwork = () => (
  <NetworkDevices
    title="DETECTED DEVICES"
    devices={[
      { name: "Router", model: "NetLink Basic" },
      { name: "Security Camera (Front)", status: "Online" },
    ]}
  />
);

// Empty network
export const NoDevices = () => (
  <NetworkDevices
    title="NETWORK SCAN"
    subtitle="Searching for devices..."
    devices={[]}
  />
);
