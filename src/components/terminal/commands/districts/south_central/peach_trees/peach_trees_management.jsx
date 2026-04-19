import Icons from '@utils/icons';

import {
  Line,
  Divider,
  InsetBox,
} from '@terminal/TerminalComponents';

import {
  Camera,
  NetworkActivity,
  Node,
  BuildingAccess,
  BuildingServices,
  RetComImage,
} from '@terminal/retcomdevice';

import penthouseBlueprint from '@images/blueprints/steel_penthouse_2.png';

export const TOWER_MANAGEMENT_COMMANDS = {
  "Tower Management": {
    favicon: <Icons.LAN />,
    content: (
      <Node
        title="[TOWER MANAGEMENT — FLOOR 51]"
        notes={[
          "Management and services level",
          "Restricted access — management and authorized staff only",
          "Central maintenance and security coordination",
        ]}
      >
        <InsetBox title="FLOOR 51 FACILITIES:">
          <Line neon>• Building management offices</Line>
          <Line neon>• Security control center (monitors all 48 cameras)</Line>
          <Line neon>• HVAC and building systems hub</Line>
          <Line neon>• Service keycard administration</Line>
          <Line neon>• Roof access (helipad + Glass Gardens service entry)</Line>
        </InsetBox>
      </Node>
    ),
    related_commands: {

      "Camera Grid": {
        favicon: <Icons.Camera />,
        content: (
          <NetworkActivity
            title="TOWER_CCTV"
            environment={{ total: "48 cameras", offline: "1 (roof)" }}
            devices={[
              { name: "Atrium Ground Floor", location: "Lobby" },
              { name: "Atrium Second Floor", location: "ChromeLux" },
              { name: "Elevator Banks x8", location: "All floors" },
              { name: "Penthouse Hallways x20", location: "Floors 40–50" },
              { name: "Service Areas x6", location: "Various" },
              { name: "Parking Garage x5", location: "B1–B3" },
              { name: "Glass Gardens x3", location: "Roof" },
              { name: "Roof Access Door", status: "OFFLINE — weather damage, 2-day repair" },
            ]}
          />
        ),
        related_commands: {
          "Floor 42 — Penthouse Hallway": {
            favicon: <Icons.Camera />,
            content: (
              <Camera
                id="cam-fl42-hall-a"
                location="Floor 42 — Penthouse Hallway"
                coverage="Full hallway view including Unit 4201 entrance"
                live
                timeline={[
                  "14:32 → Three guests entered Unit 4201 (party traffic)",
                  "14:28 → One guest left, stumbling drunk",
                  "14:25 → Food delivery, guards checked bags briefly",
                  "14:20 → Guards swapped out for break rotation",
                ]}
                alerts={[
                  "Two private security guards on door — relaxed, not heavily vigilant",
                  "Party guests entering and leaving continuously",
                  "Guards checking for heavy weapons — lenient with anyone who looks like a party guest",
                  "Hallway: empty bottles, takeout boxes, general chaos",
                ]}
              />
            ),
          },

          "Service Entrance Camera": {
            favicon: <Icons.Camera />,
            content: (
              <Camera
                id="cam-service-ent"
                location="Service Entrance — East Side"
                coverage="Service entrance door and loading area"
                live
                timeline={[
                  "Today, 14:10 → Delivery truck departed",
                  "Today, 13:45 → Delivery arrival (building supplies)",
                  "Today, 11:20 → Maintenance worker entered (HVAC repair)",
                  "Today, 08:30 → Cleaning crew arrived",
                ]}
                alerts={[
                  "Unguarded — monitored remotely only",
                  "Service elevator from here reaches all floors including penthouses",
                  "Bypasses lobby weapon scanners entirely",
                ]}
              />
            ),
          },

          "Roof Access Camera": {
            favicon: <Icons.Camera />,
            content: (
              <Node
                title="[CAM-ROOF — OFFLINE]"
                notes={[
                  "Status: OFFLINE — weather damage",
                  "Offline since: 12:00 today",
                  "Estimated repair: 2 days",
                  "Covers: Roof access door and helipad approach",
                ]}
              >
                <InsetBox title="⚠ SECURITY BLIND SPOT:">
                  <Line red bold>Roof access currently unmonitored</Line>
                  <Line yellow>Door locked (keycard required) but no visual confirmation possible</Line>
                  <Line yellow>Helipad and Glass Gardens service access from this level</Line>
                  <Line yellow>Penthouse balconies approx. 9 floors below</Line>
                </InsetBox>
              </Node>
            ),
          },
        },
      },

      "Building Access": {
        favicon: <Icons.Lock />,
        content: (
          <BuildingAccess
            title="BUILDING ACCESS CONTROL"
            points={[
              {
                location: "Main Elevators (4 units)",
                access: ["Keycard — floors 40+", "All residents + authorized guests"],
                notes: ["Destination approval required for penthouse floors"],
              },
              {
                location: "Service Elevator",
                access: ["Staff keycard — all floors", "Maintenance, delivery, ChromeLux staff"],
                notes: ["Direct penthouse access without front desk", "Bypasses lobby"],
              },
              {
                location: "Service Entrance — East Side",
                access: ["Keycard — maintenance staff only"],
                notes: ["No physical guard — remote camera monitoring only"],
              },
              {
                location: "Roof Access — Floor 51",
                access: ["Keycard — maintenance + Glass Gardens staff"],
                notes: ["Camera offline for 2 days", "Helipad and Glass Gardens accessible from here"],
              },
              {
                location: "Parking Garage (B1–B3)",
                access: ["Resident keycard only"],
              },
              {
                location: "Emergency Stairwell — Penthouse Level",
                access: ["One-way exit only (fire code)"],
                notes: ["Cannot enter penthouse level from stairwell side"],
              },
            ]}
          />
        ),
      },

      "Building Network": {
        favicon: <Icons.LAN />,
        content: (
          <NetworkActivity
            title="TOWER_INTERNAL"
            devices={[
              { name: "Security Console" },
              { name: "Camera Grid Hub" },
              { name: "Elevator Control" },
              { name: "Door Lock System" },
              { name: "HVAC Main Control" },
              { name: "Fire Suppression" },
              { name: "Lobby ATM" },
              { name: "Parking Gate Control" },
              { name: "Glass Gardens Systems" },
              { name: "Resident Unit Networks", status: "ISOLATED" },
              { name: "JACKHAMMER_HOME (Unit 4201)", status: "ISOLATED" },
              { name: "CHROMELUX_INTERNAL", status: "ISOLATED" },
            ]}
          />
        ),
        related_commands: {
          "Service Keycard Database": {
            favicon: <Icons.Database />,
            content: (
              <Node
                title="[SERVICE KEYCARD DATABASE]"
                notes={[
                  "Cards can be cloned with appropriate equipment",
                ]}
              >
                <InsetBox title="ACTIVE ROLES:">
                  <Line yellow>Building maintenance — all floors</Line>
                  <Line yellow>HVAC specialist — all floors</Line>
                  <Line yellow>Cleaning supervisor — floors 3–39</Line>
                  <Line yellow>Rotating delivery personnel — ground + service lift</Line>
                  <Line yellow>Glass Gardens staff — Floor 51 + roof</Line>
                  <Line yellow>Fire/Emergency services — all floors (always active)</Line>
                </InsetBox>
                <InsetBox title="ACCESS TIERS:">
                  <Line cyan>MAINT — Service elevator (all floors), service entrance, roof</Line>
                  <Line cyan>DELIV — Service entrance, service elevator (delivery floors only)</Line>
                  <Line cyan>ROOF — Floor 51 stairwell, roof access door</Line>
                  <Line smoke small>ChromeLux staff: CHROMELUX-tier (atrium only)</Line>
                </InsetBox>
              </Node>
            ),
          },
        },
      },

      "Building Services": {
        favicon: <Icons.Maintenance />,
        content: (
          <BuildingServices
            title="TOWER MANAGEMENT — BUILDING SYSTEMS"
            sections={[
              {
                title: "HVAC & Climate",
                notes: [
                  "Building average: 21°C — Mode: Auto",
                  "Air quality: Good (except Floor 42 — elevated CO2, party ongoing day 3)",
                  "Zones: Atrium, Residential (3–39), Penthouse (40–50), Management (51), Parking",
                  "Individual units have local thermostats (limited override available)",
                  "Pending: Filter replacement in 3 weeks",
                ],
              },
              {
                title: "Maintenance Log",
                notes: [
                  "Last full service: Nov 10, 2067 — Next scheduled: Dec 1, 2067",
                  "MEDIUM — Roof camera offline (weather damage, 2-day repair window)",
                  "LOW — HVAC filter replacement overdue, Floor 3–15 zone",
                  "LOW — Elevator 3 bearing noise, inspection pending, safe to use",
                ],
              },
            ]}
          />
        ),
      },

      "Facility Information": {
        favicon: <Icons.Files />,
        content: (
          <Node
            title="[BUILDING SPECIFICATIONS]"
            notes={[
              "Address: 2847 Central Plaza, South Central District",
              "Height: 51 floors (218 meters)",
              "Completed: 2051 — Management: Central District Properties Inc.",
              "Security Rating: Class-A — ChromeLux contract (atrium + lobby supplement)",
            ]}
          >
            <InsetBox title="FLOOR PLAN:">
              <Line smoke>Ground + Floor 2: Open atrium (Lobby, ChromeLux)</Line>
              <Line smoke>Floors 3–39: Residential (198 units)</Line>
              <Line smoke>Floors 40–50: Penthouse level (12 units)</Line>
              <Line smoke>Floor 51: Management + Glass Gardens service</Line>
              <Line smoke>Roof: The Glass Gardens restaurant + helipad</Line>
            </InsetBox>
            <InsetBox title="SECURITY:">
              <Line red>Visitor log at desk — all guests signed in</Line>
              <Line red>Weapon scanners at main atrium entrance</Line>
              <Line red>Floors 40+ require keycard + approval</Line>
              <Line red>Penthouse residents employ private security</Line>
              <Line red>ChromeLux staff armed — operate throughout atrium</Line>
            </InsetBox>
          </Node>
        ),
        related_commands: {
          "Penthouse Blueprint": {
            favicon: <Icons.Files />,
            content: (
              <Node
                title="[UNIT 4201 — MAINTENANCE FILE]"
                notes={[
                  "Unit 4201 — Floor 42, Southeast corner",
                  "3-bedroom penthouse suite",
                  "Tenant: Jackhammer (Alliansen Inc. lease)",
                  "Last inspection: Aug 2067",
                ]}
              >
                <RetComImage
                  theme="blue"
                  src={penthouseBlueprint}
                  alt="Steel Jackhammer Penthouse Layout"
                />
                <InsetBox title="STANDARD AMENITIES:">
                  <Line neon>Master bedroom (soundproofed)</Line>
                  <Line neon>Open kitchen with Smart™ appliance suite</Line>
                  <Line neon>Holo space (multi-projector, 4 units)</Line>
                  <Line neon>Dining room · Spa (hot tub + sauna) · Gym</Line>
                  <Line neon>Guest room · Balcony (full perimeter, southeast)</Line>
                </InsetBox>
                <InsetBox title="TENANT MODIFICATIONS (PERMITTED):">
                  <Line yellow>Balcony glazing — bulletproof replacement (Nov 2066)</Line>
                  <Line yellow>Dining room — structural cage installation (Jan 2067)</Line>
                  <Line yellow>Gym — cydroid anchor points, reinforced flooring (Mar 2067)</Line>
                  <Line yellow>Spa annex — sensory deprivation chamber wet room (Jun 2067)</Line>
                </InsetBox>
                <InsetBox title="OPEN MAINTENANCE ITEMS:">
                  <Line red>Dining room cage — inspection overdue (tenant unresponsive)</Line>
                  <Line red>Balcony floor — stress fracture reported (under review)</Line>
                  <Line smoke small>Tenant contact: Alliansen Inc. management only</Line>
                </InsetBox>
              </Node>
            ),
          },
        },
      },
    },
  },
};

export default TOWER_MANAGEMENT_COMMANDS;
