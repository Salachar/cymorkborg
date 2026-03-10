import Icons from '@utils/icons';

import {
  InsetBox,
  Line,
  Box,
  Divider,
  DataTable,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  ATM,
  CCTV,
  VendingMachine,
  Menu,
  Message,
  RetComImage,
  PersonnelFile,
  HoursBanner,
  EventLineup,
  DigitalWallet,
  NetworkDevices,
  VIPList,
  IncidentLog,
  MaintenanceAccess,
  NetworkTrafficMonitor,
  SecureAccessControl,
  Locked,
} from "@terminal/retcomdevice"

import LuckyFlightAd from './casino_ad'

import lfc_cctv from '@images/locations/lfc_cctv.png';
import basementImage from '@images/blueprints/lucky_flight_basement.png';
import floor1Image from '@images/blueprints/lucky_flight_floor_1.png';
import floor2Image from '@images/blueprints/lucky_flight_floor_2.png';

export const LUCKY_FLIGHT_CASINO = {
  "Lucky Flight Casino!": {
    favicon: <Icons.Casino />,
    preview: (
      <NodePreview>
        <Line span neon> · Your favorite 24/7 neighborhood casino!</Line>
      </NodePreview>
    ),
    content: (
      <LuckyFlightAd />
    ),
    related_commands: {
      "Lucky Flight CityCam": {
        favicon: <Icons.Camera />,
        content: (
          <CCTV
            src={lfc_cctv}
            cameraId="CAM-FL42-HALL-A"
            location="Lobby"
            theme="amber"
            height={500}
          />
        ),
      },
      "Lobby ATM": {
        favicon: <Icons.ATM />,
        password: {
          pw: "liquidity",
          hint: "You don't need more money. You need to move it.",
        },
        content: (
          <ATM
            id="lfc-lobby-atm"
            model="ATM-700X"
            location="Lucky Flight Casino - Main lobby (near entrance)"
            network="CasinoBlizzFunds Network"
            credits={30}
            lastService="Yesterday"
            transactions={[
              "2 hours ago → Withdrawal: 200¤",
              "3 hours ago → Withdrawal: 500¤",
              "4 hours ago → Failed transaction (insufficient funds)",
              "5 hours ago → Withdrawal: 100¤",
              "6 hours ago → Withdrawal: 1,000¤",
            ]}
          />
        ),
      },

      "Happy Hour Specials!": {
        favicon: <Icons.Food />,
        content: (
          <Menu
            title="HAPPY HOUR"
            subtitle="Every night 18:00-22:00"
            signType="cocktail"
            categories={[
              {
                name: "BAR SPECIALS:",
                items: [
                  { name: "Synth-Whiskey", price: "5¤" },
                  { name: "NeoVodka Shots", price: "3¤" },
                  { name: "Chrome-Tini", price: "8¤" },
                  { name: "Energy Drink Combo", price: "6¤" },
                ],
              },
              {
                name: "FOOD MENU:",
                items: [
                  { name: "Synth-Burger Basket", price: "12¤" },
                  { name: "Noodle Bowl", price: "8¤" },
                  { name: "Fried Protein Sticks", price: "6¤" },
                  { name: "Vat-Grown Wings", price: "10¤" },
                ],
              },
            ]}
            footer="★ VIP members get 20% off all night! ★"
          />
        ),
      },

      "Hours of Operation": {
        favicon: <Icons.Time />,
        content: (
          <HoursBanner
            name="Lucky Strike Casino"
            hours="10:00 AM - 7:00 AM"
            days="Daily"
            status="CLOSED"
            statusColor="closed"
            note="Maintenance window: 7:00 AM - 10:00 AM"
          >
            <Line yellow pulse>Casino Monitoring Increased</Line>
            <Line cyan>Please do not disturb the maintenance crew</Line>
          </HoursBanner>
        ),
      },

      "Entertainment Lineup": {
        favicon: <Icons.Entertainment />,
        content: (
          <EventLineup
            venueName="Cave Club"
            date="Tonight"
            updateFrequency="Updated hourly"
            theme="club"
            performances={[
              { time: "20:00", artist: "PHASER/MOB", genre: "Synthwave" },
              { time: "21:30", artist: "G_-.-", genre: "Industrial" },
              { time: "23:00", artist: "HeCcc", genre: "Darkwave" },
              { time: "01:00", artist: "I must leave", genre: "Ambient" },
              { time: "02:30", artist: "Sirius Last Light", genre: "Post-Punk" },
            ]}
            entry={{
              notes: "Stage: Floor 1, Room 3 • Band entrance: Canal pier"
            }}
            tagline="Loud music = noise cover"
          />
        ),
      },

      "Available Transportation": {
        favicon: <Icons.Taxi />,
        content: (
          <Message
            title="LUCKY FLIGHT CASINO"
            subtitle="TRANSPORT OPTIONS"
            message="Multiple arrival options available — pre-approval required for water taxi"
            theme="corporate"
          >
            <InsetBox title="MAIN ENTRANCE:">
              <Line neon>Car bridge or broken escalators</Line>
            </InsetBox>
            <InsetBox title="WATER TAXI:">
              <Line cyan>Recommended for patrons wanting a more discrete arrival</Line>
              <Line neon>Cost: 200¤ to canal pier</Line>
              <Line neon>Docks at basement level (Green Room)</Line>
              <Line yellow pulse>Must be pre-approved with security</Line>
            </InsetBox>
          </Message>
        ),
      },

      "NukaCola Vending Machine": {
        favicon: <Icons.Vending />,
        content: (
          <VendingMachine
            id="lfc-lobby-nuka"
            model="NukaCola Dispenser 3000"
            location="Lucky Flight Casino - Main lobby"
            drinks={[
              { name: 'NUKA COLA', pattern: 'circles', color: 'red', available: true },
              { name: 'NUKA CHERRY', pattern: 'dots', color: 'red', available: true },
              { name: 'NUKA ORANGE', pattern: 'circles', color: 'orange', available: true },
              { name: 'NUKA QUANTUM', pattern: 'waves', color: 'blue', available: false }, // Sold out
              { name: 'NUKA GRAPE', pattern: 'blocks', color: 'purple', available: true },
              { name: 'WATER', pattern: 'lines', color: 'blue', available: true },
            ]}
          />
        ),
        related_commands: {
          "Maintenance Access": {
            favicon: <Icons.Vending />,
            password: {
              pw: "quantum",
              hint: "Top selling soda",
            },
            content: (
             <MaintenanceAccess
                title="[NUKACOLA DISPENSER 3000 - MAINTENANCE]"
                deviceModel="NukaCola Dispenser 3000"
                deviceId="LFC-VEND-LOBBY-01"
                firmwareVersion="v4.1.0"
                systemStatus="OPERATIONAL"
                uptime="47 days, 3 hours"
                notes={[
                  "Last restocked: 3 days ago",
                  "No faults logged",
                ]}
              />
             ),
            related_commands: {
              "VendWallet": {
                favicon: <Icons.Wallet />,
                content: (
                  <DigitalWallet
                    id="bodega-vending-machine-wallet"
                    accountHolder="Beverage Corp (vending division)"
                    credits={15}
                  />
                ),
              },
              "DebugMode": {
                favicon: <Icons.Debug />,
                content: (
                  <Message
                    title="VENDING MACHINE"
                    message="DEBUG MODE ACTIVATED"
                    note="Dispense drinks via main interface - no charge"
                    theme="corporate"
                  >
                    <Line yellow large>FREE VEND MODE ENABLED</Line>
                    <Line cyan>All payment verification disabled</Line>
                  </Message>
                ),
              },
            },
          },
        },
      },

      "Internal Network": {
        favicon: <Icons.LAN />,
        password: {
          pw: "loaded dice",
          hint: "Better not get caught",
          decoyLetters: 'y,z',
        },
        content: (
          <MaintenanceAccess
            title="[CASINO INTERNAL NETWORK]"
            deviceModel="Lucky Flight Systems Gateway"
            deviceId="NET-GATEWAY-MAIN"
            firmwareVersion="v2.7.3"
            systemStatus="OPERATIONAL"
            uptime="42 days, 11 hours"
            notes={[
              "Access Level: Peripheral systems only",
              "Camera feeds, operations data, and public terminals accessible",
              "Vault, power core, and security office require elevated access"
            ]}
          />
        ),
        related_commands: {
          "Facility Files": {
            favicon: <Icons.Files />,
            password: {
              pw: "architecture",
              hint: "What blueprints are a form of",
            },
            content: (
              <MaintenanceAccess
                title="[LUCKY FLIGHT CASINO — FACILITY FILES]"
                deviceModel="Architectural Database System"
                deviceId="LFC-ARCH-DB-01"
                firmwareVersion="v2.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "3 floors on record: Basement, Floor 1, Floor 2",
                  "Last updated: 20X2.08.14",
                  "Author: [REDACTED]",
                  "Security clearance 3 required for full access",
                ]}
              >
                <InsetBox title="AVAILABLE BLUEPRINTS:">
                  <Line neon>Basement — mechanical, storage</Line>
                  <Line neon>Floor 1 — casino floor, gaming</Line>
                  <Line neon>Floor 2 — VIP, management, vault</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Blueprint: Basement": {
                favicon: <Icons.Files />,
                content: (
                  <Message
                    title="LUCKY FLIGHT CASINO - BASEMENT BLUEPRINT"
                    subtitle="CLASSIFIED // SECURITY CLEARANCE 3"
                    message="Basement Layout and Intel"
                    theme="corporate"
                  >
                    <RetComImage
                      src={basementImage}
                      alt="Lucky Flight Casino Basement"
                      style={{ marginTop: "1rem", width: "100%" }}
                    />
                    <Line neon xsmall style={{ marginTop: "1rem", textAlign: "center" }}>
                      FILE ID: LFC_BASEMENT_V1.2 | LAST UPDATED: 20X2.08.14 | AUTHOR: [REDACTED]
                    </Line>
                    <InsetBox title="KEY LOCATIONS">
                      <Line neon>• Security Office</Line>
                      <Line neon>• Locker Room</Line>
                      <Line neon>• Green Room</Line>
                      <Line neon>• Maintenance</Line>
                      <Line neon>• Power Core</Line>
                    </InsetBox>
                    <Line yellow>⚠ Power Core presents explosion risk if tampered with</Line>
                  </Message>
                ),
              },

              "Blueprint: Floor 1": {
                favicon: <Icons.Files />,
                content: (
                  <Message
                    title="LUCKY FLIGHT CASINO - FLOOR 1 BLUEPRINT"
                    subtitle="CLASSIFIED // SECURITY CLEARANCE 3"
                    message="Floor 1 Layout and Intel"
                    theme="corporate"
                  >
                    <RetComImage
                      src={floor1Image}
                      alt="Lucky Flight Casino Floor 1"
                      style={{ marginTop: "1rem", width: "100%" }}
                    />
                    <Line neon xsmall style={{ marginTop: "1rem", textAlign: "center" }}>
                      FILE ID: LFC_FLOOR_01_V1.2 | LAST UPDATED: 20X2.08.14 | AUTHOR: [REDACTED]
                    </Line>
                    <InsetBox title="KEY LOCATIONS">
                      <Line neon>• Main entrance</Line>
                      <Line neon>• Casino floor</Line>
                      <Line neon>• Live stage</Line>
                      <Line neon>• Bathrooms</Line>
                      <Line neon>• VIP access</Line>
                    </InsetBox>
                    <Line red>Full camera coverage on this floor</Line>
                    <Line yellow>Cleaning drones active 07:00-10:00 (closed hours)</Line>
                  </Message>
                ),
              },
              "Blueprint: Floor 2": {
                favicon: <Icons.Files />,
                content: (
                  <Message
                    title="LUCKY FLIGHT CASINO - FLOOR 2 BLUEPRINT"
                    subtitle="CLASSIFIED // SECURITY CLEARANCE 3"
                    message="Floor 2 Layout and Intel"
                    theme="corporate"
                  >
                    <RetComImage
                      src={floor2Image}
                      alt="Lucky Flight Casino Floor 2"
                      style={{ marginTop: "1rem", width: "100%" }}
                    />
                    <Line neon xsmall style={{ marginTop: "1rem", textAlign: "center" }}>
                      FILE ID: LFC_FLOOR_02_V1.2 | LAST UPDATED: 20X2.08.14 | AUTHOR: [REDACTED]
                    </Line>
                    <Divider />
                    <InsetBox title="KEY LOCATIONS">
                      <Line neon>• VIP lounge</Line>
                      <Line neon>• Office space</Line>
                      <Line neon>• Vaska's Office</Line>
                      <Line neon>• Tech room</Line>
                      <Line red pulse bod>REDACTED</Line>
                    </InsetBox>
                    <Line red pulse bod>REDACTED</Line>
                    <Line red pulse bod>REDACTED</Line>
                    <Line red pulse bod>REDACTED</Line>
                  </Message>
                ),
              },
            },
          },
          "Personnel Files": {
            favicon: <Icons.Person />,
            password: {
              pw: "slevin",
              hint: "Lucky number Kelevra",
            },
            content: (
              <MaintenanceAccess
                title="[HR DATABASE]"
                deviceModel="Personnel Management System"
                deviceId="HR-DB-MAIN"
                firmwareVersion="v4.1.2"
                systemStatus="OPERATIONAL"
                uptime="89 days, 4 hours"
                notes={[
                  "Access Level: Standard HR queries",
                  "Management: 2 active employees",
                  "Security Personnel: 5 active employees",
                  "Floor Staff: 18 active employees",
                  "Special Assets: 1 classified (Executive access only)",
                  "Last database update: 6 hours ago"
                ]}
              />
            ),
            related_commands: {
              "Wingus Drey": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="LFC-SEC-2891"
                    name="Wingus Drey"
                    age={29}
                    position="Entrance Security (Bouncer)"
                    department="Security Division"
                    supervisor="Wattana"
                    clearanceLevel={1}
                    district="Ports (Torres Apartments, Unit 4B)"
                    emergencyContact="Dingus Marks (work partner) - on-site"
                    email="w.drey@luckyflightcasino.cy"
                    performance={60}
                    notes={[
                      "Shift: Evening/Night (18:00-04:00, 6 days/week)",
                      "Training: Basic security protocols, conflict de-escalation",
                      "Outstanding debt: 1,200¤ — Spectral FT Banks (current, 3 months consecutive)",
                      "Equipment: Security vest, shockstick (permit #SEC-2891), encrypted comms earpiece",
                      "Lives with Dingus Marks (shared apartment)",
                    ]}
                  />
                ),
              },
              "Dingus Marks": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="LFC-SEC-2892"
                    name="Dingus Marks"
                    age={31}
                    position="Entrance Security (Bouncer)"
                    department="Security Division"
                    supervisor="Wattana Kovit (Head of Security)"
                    clearanceLevel={1}
                    district="Ports (Torres Apartments, Unit 4B)"
                    emergencyContact="Wingus Drey (work partner) - on-site"
                    email="d.marks@luckyflightcasino.cy"
                    performance={62}
                    notes={[
                      "Shift: Evening/Night (18:00-04:00, 6 days/week)",
                      "Partners with Wingus Drey (entrance team)",
                      "Training: Basic security, first aid certified",
                      "Outstanding debt: 2,100¤ — CasinoBlizzFunds (behind 1 month, collection warning issued)",
                    ]}
                  />
                ),
              },
              "Adilet Nurlan": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="LFC-SEC-3104"
                    name="Adilet Nurlan"
                    age={26}
                    position="Guest Enjoyment Officer (Floor Security)"
                    department="Security Division - Floor Operations"
                    supervisor="Wattana Kovit (Head of Security)"
                    clearanceLevel={2}
                    district="Ports (Cascade Heights, Unit 12F)"
                    emergencyContact="Kamila Nurlan (sister)"
                    email="a.nurlan@luckyflightcasino.cy"
                    salary="580¤/month"
                    performance={78}
                    notes={[
                      "Shift: Rotating (covers all casino floor shifts)",
                      "Responsibilities: Guest assistance, floor monitoring, incident response",
                      "2 commendations for guest satisfaction",
                      "Training: Advanced security, customer service, conflict resolution",
                      "Languages: Fluent in Cy-Standard, Kazakh, Russian",
                      "Equipment: Security vest, shockstick (permit #SEC-3104), encrypted comms + translation app, Level 2 access card",
                      "Yesterday: Assisted intoxicated patron to exit (no incident)",
                      "3 days ago: Translated for foreign VIP guest",
                      "1 week ago: Commendation — prevented potential brawl on casino floor",
                      "Considered for promotion to floor supervisor",
                    ]}
                  />
                ),
              },
              "Vaska Jordan": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="LFC-MGT-0001"
                    name="Vaska Jordan"
                    age={44}
                    position="Casino Manager"
                    department="Management"
                    supervisor="CasinoBlizzFunds (Alliansen Inc. subsidiary)"
                    clearanceLevel={4}
                    emergencyContact="None listed"
                    email="v.jordan@luckyflightcasino.cy (rarely responds)"
                    performance={65}
                    notes={[
                      "Office: Floor 2, Northwest corner (private)",
                      "Responsibilities: Daily operations, staff management, financial oversight",
                      "Last bonus: 1,500¤ (quarterly target met)",
                      "Attendance irregular — frequently off-site for 'business meetings'",
                      "2 days ago: Off-site (claimed corporate meeting)",
                      "4 days ago: On-site 3 hours (office only)",
                      "2 weeks ago: Complaint filed by employee (dismissed, lack of evidence)",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
              "Wattana Kovit": {
                favicon: <Icons.Person />,
                content: (
                  <PersonnelFile
                    employeeId="LFC-SEC-ALPHA"
                    name="Wattana Kovit"
                    age={38}
                    position="Head of Security"
                    department="Security Division"
                    supervisor="Vaska Jordan (Casino Manager)"
                    clearanceLevel={5}
                    email="w.kovit@luckyflightcasino.cy"
                    performance={88}
                  />
                ),
              },
              "UNNAMED ENTRY": {
                favicon: <Icons.Person />,
                password: {
                  pw: "database",
                  hint: "Please help! I've been turned into a living...",
                },
                content: (
                  <Box color="pink">
                    <Line pink large bold>[CLASSIFIED FILE: ZOLA]</Line>
                    <Divider color="pink" />
                    <Line red pulse>[ACCESS RESTRICTED]</Line>
                    <Line red pulse>[EXECUTIVE CLEARANCE REQUIRED]</Line>
                    <Line red pulse>[FILE PARTIALLY CORRUPTED]</Line>
                    <Divider color="pink" />
                    <DataTable data={[
                      { label: "Full Name", value: "[REDACTED]" },
                      { label: "Age", value: "Unknown" },
                      { label: "Position", value: "Special Asset - Accounting" },
                      { label: "Status", value: "ACTIVE (confined)" },
                    ]} />
                    <InsetBox title="PROJECT DESIGNATION:">
                      <Line red>Code Name: ZOLA</Line>
                      <Line red>Classification: Living Database</Line>
                      <Line red>Location: Vault & Prison (Room 11, Floor 2)</Line>
                      <Line red>Function: Real-time accounting, debt calculation, balance sheet</Line>
                    </InsetBox>
                    <InsetBox title="CAPABILITIES:">
                      <Line yellow>Perfect numerical recall (unlimited capacity)</Line>
                      <Line yellow>Real-time data processing via cerebral jack</Line>
                      <Line yellow>All casino financial data stored in biological memory</Line>
                      <Line red>⚠ CRITICAL: Offline backup - no network connection</Line>
                    </InsetBox>
                    <Line red pulse>[FURTHER DATA CORRUPTED OR RESTRICTED]</Line>
                    <Line red pulse>[MEDICAL RECORDS: ACCESS DENIED]</Line>
                    <Line red pulse>[ACQUISITION DETAILS: ACCESS DENIED]</Line>
                    <Divider color="pink" />
                    <Line pink pulse bold>If you can read this, get me out. -Z</Line>
                  </Box>
                ),
              },
            },
          },
          "Security Coverage": {
            favicon: <Icons.Security />,
            password: {
              pw: "surveillance",
              hint: "What cameras are used for",
            },
            content: (
              <MaintenanceAccess
                title="[LUCKY FLIGHT CASINO — SECURITY DATABASE]"
                deviceModel="Security Management System"
                deviceId="LFC-SEC-DB-01"
                firmwareVersion="v3.2.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Camera coverage and blind spots",
                  "Patrol schedules and rotation times",
                  "Alarm protocols and trigger conditions",
                  "Lock systems and access points",
                  "Entry point assessment",
                ]}
              />
            ),
            related_commands: {
              "Access Control System": {
                favicon: <Icons.Maintenance />,
                password: {
                  pw: "keycard",
                  hint: "What employees swipe to get in",
                  content: <Locked theme="terminal" title="ACCESS CONTROL" />
                },
                content: (
                  <SecureAccessControl
                    systemName="ACCESS CONTROL SYSTEM"
                    location="Lucky Flight Casino"
                    systemVersion="v4.2.1"
                    lastUpdate="2 weeks ago"
                    accessPoints={[
                      {
                        name: "Vault (Floor 2)",
                        status: "SEALED",
                        security: "BIOMETRIC + RETINAL SCAN + DUAL KEY",
                        lastAccess: "3 days ago (Vaska Jordan)",
                        accessCount: 2,
                        flags: ["ENHANCED SECURITY", "DATABASE DETAINED"],
                      },
                      {
                        name: "Manager's Office (Vaska, Floor 2)",
                        status: "UNLOCKED",
                        security: "KEYCARD",
                        authorized: "Management",
                        lastAccess: "4 hours ago (Vaska Jordan)",
                        accessCount: 8
                      },
                    ]}
                  />
                )
              },
              "Camera Coverage - Floor 1": {
                favicon: <Icons.Camera />,
                content: (
                  <NetworkDevices
                    networkName="CCTV_FLOOR_1"
                    devices={[
                      { name: "Entrance", ip: "10.0.1.101", type: "Security Camera" },
                      { name: "Plant 1", ip: "10.0.1.102", type: "Security Camera" },
                      { name: "Plant 2", ip: "10.0.1.103", type: "Security Camera" },
                      { name: "Vending Machine", ip: "10.0.1.104", type: "Security Camera" },
                      { name: "Holo Games 1", ip: "10.0.1.105", type: "Security Camera" },
                      { name: "Holo Games 2", ip: "10.0.1.106", type: "Security Camera" },
                      { name: "Bathroom", ip: "10.0.1.107", type: "Security Camera" },
                      { name: "Stage Left", ip: "10.0.1.108", type: "Security Camera" },
                      { name: "Stage Right", ip: "10.0.1.109", type: "Security Camera" },
                    ]}
                  />
                ),
              },

              "Camera Coverage - Floor 2": {
                favicon: <Icons.Camera />,
                content: (
                  <NetworkDevices
                    networkName="CCTV_FLOOR_2"
                    devices={[
                      { name: "Tech 1", ip: "10.0.2.201", type: "Security Camera" },
                      { name: "Tech 2", ip: "10.0.2.202", type: "Security Camera" },
                      { name: "Vending Machine", ip: "10.0.2.203", type: "Security Camera" },
                      { name: "Aquarium 1", ip: "10.0.2.204", type: "Security Camera" },
                      { name: "Office 1", ip: "10.0.2.205", type: "Security Camera" },
                      { name: "Office 2", ip: "10.0.2.206", type: "Security Camera" },
                      { name: "Office 3", ip: "10.0.2.207", type: "Security Camera" },
                      { name: "Balcony", ip: "10.0.2.208", type: "Security Camera" },
                      { name: "VIP", ip: "10.0.2.209", type: "Security Camera" },
                    ]}
                  />
                ),
              },

              "Camera Coverage - Basement": {
                favicon: <Icons.Camera />,
                content: (
                  <>
                    <NetworkDevices
                      networkName="CCTV_BASEMENT"
                      devices={[]}
                    />
                    <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgb(239, 68, 68)', borderRadius: '4px' }}>
                      <Line red pulse bold>ERROR: DIRECT NETWORK ACCESS REQUIRED</Line>
                      <Line smoke style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
                        Basement CCTV operates on isolated subnet. Physical connection needed.
                      </Line>
                    </div>
                  </>
                ),
              },
            },
          },
          "Financial Records": {
            favicon: <Icons.Files />,
            password: {
              pw: "debt",
              hint: "What casino uses to control neighborhood",
            },
            content: (
              <MaintenanceAccess
                title="[LUCKY FLIGHT CASINO — FINANCIAL DATABASE]"
                deviceModel="Financial Records System"
                deviceId="LFC-FIN-DB-01"
                firmwareVersion="v3.1.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Neighborhood debt ledger on file",
                  "High roller stats and transaction history",
                  "Vault inventory records",
                  "Corporate structure documentation",
                ]}
              />
            ),
            related_commands: {
              "Debt Ledger": {
                favicon: <Icons.Files />,
                content: (
                  <Message
                    title="DEBT LEDGER"
                    subtitle="FINANCIAL RECORDS"
                    message="MISSION TARGET - DESTROY TO COMPLETE OBJECTIVE"
                    theme="secure"
                    note="Backup status: None (offline database)"
                  >
                    <DataTable data={[
                      { label: "Total Owed", value: "2,847,350¤" },
                      { label: "Accounts", value: "247 residents" },
                      { label: "Default Rate", value: "89%" },
                    ]} />
                  </Message>
                ),
              },
              "High Roller List": {
                favicon: <Icons.Files />,
                content: (
                  <VIPList
                    eventName="High Rollers - Tonight"
                    location="Lucky Flight Casino"
                    vips={[
                      {
                        name: "Gibos",
                        alias: "cyborg grandpa",
                        status: "ARRIVED",
                        notes: "Won 84,200¤ this month. Legs glitching, seated at slots.",
                        clearance: "VIP"
                      },
                      {
                        name: "Saša",
                        alias: "Stone Eels leader",
                        status: "ARRIVED",
                        notes: "With 3 bodyguards. AVOID CONFRONTATION.",
                        clearance: "VIP"
                      },
                    ]}
                  />
                ),
              },
            },
          },
          "Network Traffic Monitor": {
            favicon: <Icons.LAN />,
            password: {
              pw: "packets",
              hint: "What travels across a network",
              content: <Locked theme="terminal" title="NETWORK MONITOR" />
            },
            content: (
              <NetworkTrafficMonitor
                systemName="CASINO NETWORK TRAFFIC"
                location="Lucky Flight Casino - IT Infrastructure"
                bandwidth="847 MB/s (High)"
                activeConnections={142}
                transfers={[
                  {
                    timestamp: "23:47",
                    filename: "debt_ledger_backup_ENCRYPTED.db",
                    size: "2.4 GB",
                    source: "10.0.2.205 (Office 2)",
                    destination: "INTERNAL - 192.168.45.12",
                    protocol: "ENCRYPTED - TLS 1.3",
                    status: "ACTIVE",
                    progress: 67,
                  },
                ]}
              />
            )
          },
          "Operations": {
            favicon: <Icons.Files />,
            content: (
              <MaintenanceAccess
                title="[OPERATIONS DASHBOARD]"
                deviceModel="Security Operations Terminal"
                deviceId="SEC-OPS-MAIN"
                firmwareVersion="v3.1.4"
                systemStatus="OPERATIONAL"
                uptime="6 days, 2 hours"
                notes={[
                  "Last login: Wattana (Security Chief) - 2 hours ago",
                  "Active alerts: 3 pending review",
                  "Next patrol rotation: 02:00",
                  "Cross-reference with camera feeds for full situational awareness"
                ]}
              />
            ),
            related_commands: {
              "Incident Log": {
                favicon: <Icons.Files />,
                password: {
                  pw: "chaos",
                  hint: "Casino's natural state",
                },
                content: (
                  <IncidentLog
                    title="RECENT INCIDENTS"
                    timeframe="Last 24 hours"
                    incidents={[
                      {
                        timestamp: "23:47",
                        type: "Medical Alert",
                        details: {
                          Description: "Patron vomiting black tar",
                          Location: "Slots section",
                        }
                      },
                      {
                        timestamp: "22:15",
                        type: "Theft",
                        details: {
                          Description: "Pickpocket at slots",
                          Location: "Near high roller area",
                        }
                      },
                      {
                        timestamp: "21:30",
                        type: "Dispute",
                        details: {
                          Description: "Band contract dispute",
                          Location: "Green room",
                        }
                      },
                      {
                        timestamp: "20:05",
                        type: "Violence",
                        details: {
                          Description: "Brawl on casino floor",
                          Location: "Bar area",
                          Status: "4 patrons ejected"
                        }
                      },
                    ]}
                  />
                ),
              },
              "Power Core Status": {
                favicon: <Icons.Query />,
                password: {
                  pw: "unstable",
                  hint: "Condition of Room 16",
                },
                content: (
                  <MaintenanceAccess
                    title="[POWER CORE - ROOM 16]"
                    deviceModel="Military-Grade Power Node (Modified)"
                    deviceId="PWR-CORE-B1-016"
                    firmwareVersion="v1.8.2-CUSTOM"
                    systemStatus="ERROR"
                    uptime="127 days, 14 hours"
                    notes={[
                      "CRITICAL LOAD: 99% capacity",
                      "Illegal modifications detected",
                      "Safety protocols DISABLED",
                      "Startup failsafe DELETED",
                      "Tampering risk: Catastrophic explosion",
                    ]}
                  >
                    <div
                      style={{
                        marginTop: '1rem',
                        padding: '1rem',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        border: '2px solid rgb(239, 68, 68)',
                        borderRadius: '4px',
                      }}
                    >
                      <Line red bold pulse style={{ textAlign: 'center' }}>
                        EXTREME HAZARD - AUTHORIZED PERSONNEL ONLY
                      </Line>
                    </div>
                  </MaintenanceAccess>
                ),
              },
            },
          },
        },
      },
    }
  },
};

export default LUCKY_FLIGHT_CASINO;
