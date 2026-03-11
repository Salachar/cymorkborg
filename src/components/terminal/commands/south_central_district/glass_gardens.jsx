import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
} from '@terminal/TerminalComponents';

import {
  CCTV,
  MaintenanceAccess,
  Menu,
  PrivatePortal,
  VIPList,
} from '@terminal/retcomdevice';

import glass_gardens_camera_image from '@images/locations/glass_gardens_camera.png';

function GlassGardensPortal() {
  return (
    <div style={{
      border: '1px solid rgb(251, 191, 36)',
      backgroundColor: 'rgba(15, 12, 8, 0.95)',
      padding: '2rem',
      fontFamily: 'monospace',
    }}>

      {/* Header */}
      <div style={{
        borderBottom: '1px solid rgba(251, 191, 36, 0.3)',
        paddingBottom: '1.5rem',
        marginBottom: '1.5rem',
        textAlign: 'center',
      }}>
        <div style={{
          color: 'rgb(251, 191, 36)',
          fontSize: '0.6rem',
          letterSpacing: '0.4em',
          marginBottom: '0.75rem',
          opacity: 0.6,
        }}>
          GARDENS_PRIVATE
        </div>
        <div style={{
          color: 'rgb(251, 191, 36)',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          letterSpacing: '0.2em',
        }}>
          THE GLASS GARDENS
        </div>
        <div style={{
          color: 'rgba(251, 191, 36, 0.5)',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          marginTop: '0.4rem',
        }}>
          CENTRAL PLAZA TOWER — ROOFTOP
        </div>
      </div>

      {/* Hours */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1.5rem',
        borderBottom: '1px solid rgba(251, 191, 36, 0.15)',
        paddingBottom: '1.5rem',
      }}>
        <div style={{ color: 'rgba(251, 191, 36, 0.5)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          TUESDAY — SATURDAY
        </div>
        <div style={{ color: 'rgb(251, 191, 36)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          17:00 — 23:00
        </div>
      </div>

      {/* Body */}
      <div style={{
        color: 'rgba(251, 191, 36, 0.6)',
        fontSize: '0.75rem',
        lineHeight: '1.8',
        letterSpacing: '0.05em',
        marginBottom: '1.5rem',
      }}>
        <div>Reservations are required and subject to availability.</div>
        <div>We do not accept walk-ins.</div>
        <div style={{ marginTop: '0.75rem' }}>Formal attire is expected.</div>
      </div>

      {/* Reservation contact */}
      <div style={{
        borderTop: '1px solid rgba(251, 191, 36, 0.15)',
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
        <div>
          <div style={{ color: 'rgba(251, 191, 36, 0.4)', fontSize: '0.65rem', letterSpacing: '0.2em', marginBottom: '0.3rem' }}>
            RESERVATIONS
          </div>
          <div style={{ color: 'rgb(251, 191, 36)', fontSize: '0.75rem' }}>
            +67-801-GARDENS
          </div>
        </div>
        <div style={{
          color: 'rgba(251, 191, 36, 0.3)',
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
        }}>
          CURRENT WAIT — 14 DAYS
        </div>
      </div>

    </div>
  );
}

export const GLASS_GARDENS_COMMANDS = {
  "The Glass Gardens": {
    favicon: <Icons.GoldDeck />,
    content: (
      <GlassGardensPortal />
    ),
    related_commands: {
      "Glass Gardens CityCam": {
        favicon: <Icons.Camera />,
        content: (
          <CCTV
            src={glass_gardens_camera_image}
            cameraId="CAM-GG-FOYER"
            location="Entrance"
            theme="amber"
            height={500}
          />
        ),
      },
      "Menu": {
        favicon: <Icons.Menu />,
        content: (
          <Menu
            title="THE GLASS GARDENS"
            subtitle="Rooftop Fine Dining - Central Plaza Tower"
            signType="cocktail"
            categories={[
              {
                name: "APPETIZERS",
                items: [
                  { name: "Oysters Rockefeller", price: "80¤" },
                  { name: "Foie Gras Terrine", price: "120¤" },
                  { name: "Truffle Carpaccio", price: "95¤" },
                  { name: "Lobster Bisque", price: "75¤" },
                ]
              },
              {
                name: "ENTREES",
                items: [
                  { name: "Wagyu Beef (synth, premium grade)", price: "450¤" },
                  { name: "Pan-Seared Salmon", price: "380¤" },
                  { name: "Duck Confit", price: "420¤" },
                  { name: "Vegetarian Tasting Menu", price: "350¤" },
                ]
              },
              {
                name: "DESSERTS",
                items: [
                  { name: "Chocolate Soufflé", price: "65¤" },
                  { name: "Crème Brûlée", price: "55¤" },
                  { name: "Seasonal Tart", price: "60¤" },
                ]
              },
            ]}
            footer="Wine pairings available. Gratuity not included. Priority seating: 5,000¤."
          />
        ),
      },

      "Reservation System": {
        favicon: <Icons.Computer />,
        content: (
          <MaintenanceAccess
            title="[RESERVATION SYSTEM]"
            deviceModel="TableMaster Pro"
            deviceId="GLASS-GARDENS-RES"
            firmwareVersion="v2.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Covers tonight: 17 (5 parties)",
              "Cancellations today: 1 (19:00 slot reallocated)",
            ]}
          />
        ),
      },

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "crystalchalice",
          hint: "You can see through it and drink from it",
        },
        content: (
          <MaintenanceAccess
            title="[GLASS GARDENS — INTERNAL ACCESS]"
            deviceModel="Staff Network"
            deviceId="GLASS-GARDENS-INT"
            firmwareVersion="v3.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Staff and management access only",
              "All access logged",
            ]}
          />
        ),
        related_commands: {
          "VIP Guest List": {
            favicon: <Icons.Group />,
            content: (
              <VIPList
                eventName="Glass Gardens — Tonight"
                location="Central Plaza Tower, Rooftop"
                vips={[
                  {
                    name: "Mr. & Mrs. Sterling",
                    status: "EXPECTED",
                    notes: "Regular. Table 4, window seat on file.",
                    arrivalTime: "17:30",
                  },
                  {
                    name: "Alliansen Inc.",
                    alias: "Executive Dinner",
                    status: "ARRIVED",
                    notes: "4 covers. Corporate account. Private room requested.",
                    clearance: "CORPORATE",
                    arrivalTime: "18:02",
                  },
                  {
                    name: "Reyes Family",
                    status: "EXPECTED",
                    notes: "Anniversary. Cake arranged with kitchen.",
                    arrivalTime: "19:00",
                  },
                  {
                    name: "[WITHHELD]",
                    status: "ARRIVED",
                    notes: "Priority fee. No further details on file.",
                    clearance: "VIP",
                    arrivalTime: "19:54",
                  },
                  {
                    name: "[WITHHELD]",
                    status: "EXPECTED",
                    notes: "Priority fee. Killmatch affiliation noted.",
                    clearance: "VIP",
                    arrivalTime: "21:00",
                  },
                ]}
              />
            ),
          },
        },
      },

      "Crystal Lattice": {
        favicon: <Icons.Nightlife />,
        content: (
          <PrivatePortal
            networkId="CRYSTAL_LATTICE"
            name="Crystal Lattice"
            location="The Glass Gardens — Central Plaza Tower"
            theme="crystal"
            members={[
              "OBSIDIAN",
              "V.STERLING",
              "NIGHTSHADE",
              "ARBITER_7",
              "PALE HAND",
            ]}
            tickers={[
              "ALLIANSEN INC +2.4%",
              "SPECTRAL FT +0.8%",
              "TG LABS -1.2%",
              "CYNERGY WATER +3.1%",
              "GARGOYLE vs JACKHAMMER -340",
              "WATER SHARES (CY) +0.4%",
            ]}
            notices={[
              "Quarterly window opens 00:01 Thursday.",
              "Member PALE HAND requests introductions — vouched by OBSIDIAN.",
              "Previous notice regarding Mosscroft contracts has been withdrawn.",
            ]}
          />
        ),
        related_commands: {
          // VIP list, EncryptedMessages, etc. hang here
        },
      },
    },
  },
}

export default GLASS_GARDENS_COMMANDS;
