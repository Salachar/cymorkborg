import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  Extractable,
  HoursBanner,
  Node,
  Nodes,
  PublicPortal,
  RCDAlert,
  Safe,
} from "@retcom";

import justscrapnby_cctv from '@images/locations/justscrapnby_cctv.png';

export const JUST_SCRAPN_BY_COMMANDS = {
  "Just Scrap'n By": {
    favicon: <Icons.Wrench />,
    preview: (
      <NodePreview>
        <Line span smoke> · Vehicle customization. Burnchurch Hex. By appointment or just show up.</Line>
      </NodePreview>
    ),
    content: (
      <PublicPortal
        name="JUST SCRAP'N BY"
        tagline="Custom builds. Salvage. No questions about the parts."
        network="SCRAPNBY_OPEN"
        signalStrength="weak"
        status="OPEN"
        statusColor="neon"
        theme="casual"
        notes={[
          "Burnchurch Hex — southwest industrial waste site",
          "Vehicle customization, salvage, and parts",
          "3D printing capability on site",
          "Walk-ins welcome — bring something to trade",
        ]}
      >
        <InsetBox title="SERVICES:">
          <Line neon bullet>Custom vehicle builds and modifications</Line>
          <Line neon bullet>Salvage and scrap — rotating stock</Line>
          <Line neon bullet>3D printed components — most formats</Line>
          <Line neon bullet>Parts sourced on request</Line>
          <Line yellow bullet>Consultation available — ask for Donny</Line>
        </InsetBox>
        <HoursBanner
          hours="Whenever"
          days="Most days"
          location="Burnchurch Hex — southwest, follow the noise"
          note="If nobody answers, wait. They'll come back."
        />
        <RCDAlert
          message="Crash Kids front operation — roadrunner clan, established"
          details={[
            "Just Scrap'n By is the public face of the Crash Kids roadrunner clan",
            "Leadership on site most days — Donny, Minny, Kayla, Fat Elliot",
          ]}
        />
      </PublicPortal>
    ),
    related_commands: {
      "CityCam": {
        favicon: <Icons.Camera />,
        content: (
          <Nodes.Camera
            location="JUST SCRAP'N BY CCTV"
            cctv={justscrapnby_cctv}
          />
        ),
      },

      "Front Lot": {
        favicon: <Icons.Room />,
        content: (
          <Node
            title="JUST SCRAP'N BY — FRONT LOT"
            subtitle="Customer reception"
            notes={[
              "Open lot — customer parking and walk-in access",
              "Staff on site during operating hours",
            ]}
          />
        ),
        related_commands: {
          "Fat Elliot's Synthesizers": {
            favicon: <Icons.Music />,
            content: (
              <Nodes.Jukebox
                title="FAT ELLIOT'S RECURSIVE SYNTHESIZER ARRAY"
                nowPlaying="White Noise Suite No. 7 — ongoing"
                note="Do not touch the knobs."
              />
            ),
          },
          "Lot Vending": {
            content: <Nodes.VendingMachine />,
          },
          "Lot Bin": {
            content: (
              <Nodes.SmartBin
                id="scrapnby_lot_bin"
                location="Front lot"
                status="OVERFLOW"
                items={[
                  'lighter',
                  'energy_drink',
                  'earplugs',
                  'cable_ties',
                ]}
              />
            ),
          },
        },
      },

      "Staff": {
        favicon: <Icons.Group />,
        content: (
          <Node
            title="JUST SCRAP'N BY — STAFF"
            subtitle="Vehicle Customization Experts"
            table={{
              proprietor: "Donny",
              territory: "Burnchurch Hex — southwest",
              staff: "4 senior, 8 rotating",
            }}
          />
        ),
        related_commands: {

          "Donny": {
            favicon: <Icons.Person />,
            content: (
              <Nodes.PersonnelFile
                employeeId="JSB-001"
                name="Donny"
                position="Proprietor"
                department="Just Scrap'n By"
                district="Burnchurch Hex"
                notes={[
                  "Primary contact for custom builds and consultations",
                  "Glitterskin — chrome finish, custom work",
                ]}
                status="ACTIVE"
              />
            ),
            related_commands: {
              "Donny's Shitcruiser": {
                favicon: <Icons.CarRepair />,
                content: (
                  <Node
                    title="DONNY'S SHITCRUISER"
                    subtitle="Personal vehicle — not for sale"
                    table={{
                      armor: "Industrial plating — d6",
                      weapons: "2x Shrapnel Hoser",
                      paint: "Glitter — full body",
                    }}
                    notes={[
                      "Two shotgun mounts on the hood",
                      "Shrapnel Hosers — shredding rounds strip vehicle armor on hit",
                    ]}
                  >
                    <RCDAlert
                      message="Jackpoint detected — legacy signal present"
                    />
                  </Node>
                ),
              },
            },
          },

          "Minny": {
            favicon: <Icons.Person />,
            content: (
              <Nodes.PersonnelFile
                employeeId="JSB-002"
                name="Minny"
                position="Demolitions Consultant"
                department="Just Scrap'n By"
                district="Burnchurch Hex"
                notes={[
                  "Specialist in explosive components and grenade platform installation",
                ]}
                status="ACTIVE"
              />
            ),
            related_commands: {
              "Minny's Mighty": {
                favicon: <Icons.CarRepair />,
                content: (
                  <Node
                    title="MINNY'S MIGHTY"
                    subtitle="Personal vehicle — not for sale"
                    table={{
                      armor: "Skittering buggy — d4",
                      weapons: "2x Grenade Launcher",
                      build: "Industrial waste and salvage",
                    }}
                    notes={[
                      "Grenade launcher platforms welded to both sides",
                      "K.A.B.O.O.M rounds — additional explosive damage to vehicles on hit",
                    ]}
                  />
                ),
              },
            },
          },

          "Kayla": {
            favicon: <Icons.Person />,
            content: (
              <Nodes.PersonnelFile
                employeeId="JSB-003"
                name="Kayla"
                position="Parts Specialist"
                department="Just Scrap'n By"
                district="Burnchurch Hex"
                notes={[
                  "Parts sourcing and identification",
                  "Monosword on person at all times — occupational preference",
                ]}
                status="ACTIVE"
              />
            ),
            related_commands: {
              "Kayla's Exc4lib0r": {
                favicon: <Icons.CarRepair />,
                content: (
                  <Node
                    title="KAYLA'S EXC4LIB0R"
                    subtitle="Personal vehicle — not for sale"
                    table={{
                      armor: "Industrial plating — d6",
                      weapons: "Lots of Sharp Objects",
                    }}
                    notes={[
                      "Sharp objects — tire poppers, vehicles halt after d8 rounds on hit",
                    ]}
                  />
                ),
              },
            },
          },

          "Fat Elliot": {
            favicon: <Icons.Person />,
            content: (
              <Nodes.PersonnelFile
                employeeId="JSB-004"
                name="Fat Elliot"
                position="Workshop Lead"
                department="Just Scrap'n By"
                district="Burnchurch Hex"
                notes={[
                  "Workshop operations and installation",
                ]}
                status="ACTIVE"
              />
            ),
            related_commands: {
              "Fat Elliot's Fat Truck": {
                favicon: <Icons.CarRepair />,
                content: (
                  <Node
                    title="FAT ELLIOT'S FAT TRUCK"
                    subtitle="Personal vehicle — not for sale"
                    table={{
                      armor: "Excess material — d4",
                      weapons: "Flamethrower",
                    }}
                    notes={[
                      "Reinforced eighteen-wheeler",
                      "Engine block doubles as a flamethrower",
                      "Ignite — vehicles burn for ongoing damage, morale drops by 2",
                    ]}
                  />
                ),
              },
            },
          },

        },
      },

      "3D Printer Reservoir": {
        favicon: <Icons.Factory />,
        content: (
          <Node
            title="JUST SCRAP'N BY — 3D PRINTER RESERVOIR"
            subtitle="Industrial additive manufacturing"
            table={{
              printers: "14 active units",
              materials: "Polymer, metal alloy, composite",
              output: "Continuous",
            }}
            notes={[
              "Vehicle parts, custom components, and general fabrication",
              "Large-format jobs available — lead time required",
              "Print queue managed on site",
            ]}
          >
            <RCDAlert
              message="Manufacturing capacity exceeds standard independent operator profile"
              details={[
                "Output volume and material sourcing inconsistent with registered business size",
                "Several large-format jobs in current queue — contents unlisted",
              ]}
            />
          </Node>
        ),
        related_commands: {
          "Print Queue Output": {
            favicon: <Icons.Inventory />,
            content: (
              <Extractable
                id="scrapnby_printer_output"
                physicalItems={[
                  {
                    id: "printed_multitool",
                    label: "Printed Multitool",
                    description: "Polymer composite.",
                    value: 10,
                    section: "equipment",
                  },
                  {
                    id: "printed_grip",
                    label: "Printed Weapon Grip",
                    description: "Custom ergonomic fit. Most handguns.",
                    value: 15,
                    section: "equipment",
                  },
                  {
                    id: "printed_flask",
                    label: "Printed Hip Flask",
                    description: "Skull motif. Holds liquid.",
                    value: 5,
                    section: "equipment",
                  },
                ]}
              />
            ),
          },
        },
      },

      "The Yard": {
        favicon: <Icons.Wrench />,
        content: (
          <Node
            title="JUST SCRAP'N BY — THE YARD"
            subtitle="Salvage lot"
            notes={[
              "Industrial salvage and scrap — rotating availability",
              "Visitor access by arrangement",
              "Claimed material is marked — unmarked stock is available",
            ]}
          />
        ),
        related_commands: {

          "Scrap Bins": {
            favicon: <Icons.Trash />,
            content: (
              <Nodes.SmartBin
                id="scrapnby_yard_bin"
                location="The Yard — west section"
                status="FULL"
                items={[
                  'duct_tape',
                  'multi_tool',
                  'flashlight',
                  'rubber_gloves',
                  'batteries',
                  'zip_ties',
                ]}
              />
            ),
          },

          "Buried Cache": {
            favicon: <Icons.Lock />,
            password: {
              pw: "buried",
              hint: "Where you find it",
              lockType: 'safe',
            },
            content: (
              <Safe
                id="scrapnby_buried_cache"
                location="The Yard — east section, under collapsed stack"
                security="PIN"
                physical={[
                  {
                    id: "cache_credstick",
                    label: "Credstick",
                    description: "120¤ — old format, still valid",
                    value: 120,
                    isCredits: true,
                  },
                  {
                    id: "cache_photo",
                    label: "Waterproof photograph",
                    description: "A vehicle — custom paint job.",
                  },
                  {
                    id: "superglue",
                    label: "Superglue (x3)",
                    description: "Sealed. Still good.",
                    value: 9,
                  },
                ]}
              />
            ),
          },

          "Salvaged Drone": {
            favicon: <Icons.Hub />,
            content: (
              <Node
                title="SALVAGED SURVEILLANCE DRONE"
                subtitle="MilCorp origin — available for parts"
                notes={[
                  "Camera array intact — pending teardown",
                  "Available components listed below",
                ]}
              >
                <Extractable
                  id="scrapnby_dead_drone"
                  physicalItems={[
                    {
                      id: "drone_battery",
                      label: "Drone battery pack",
                      description: "High capacity. Compatible with several RCD models.",
                      value: 35,
                      section: "equipment",
                    },
                    {
                      id: "drone_optics",
                      label: "Zoom optic lens",
                      description: "Camera array salvage. Good glass.",
                      value: 40,
                      section: "equipment",
                    },
                  ]}
                />
              </Node>
            ),
          },

        },
      },

      "D3ATH M4CHINE Workshop": {
        favicon: <Icons.Garage />,
        content: (
          <Node
            title="D3ATH M4CHINE WORKSHOP"
            subtitle="Custom vehicle build bay"
            table={{
              chassis: "Basic — 12 hardpoints",
              hardpointsUsed: "0 / 12",
              status: "AWAITING BUILD",
            }}
            notes={[
              "Crash Kids tech crew on standby — they install, players scavenge",
              "Seven hours to build before the convoy window",
              "Items can be swapped freely until end of hour 7",
              "Common scrap grafts directly to chassis — adds HP, no hardpoints used",
              "Unwanted items convert to 1 piece of common scrap",
              "Final armor value rounds down",
              "Sani delivers a 3D-printed railgun at end of hour 7 — 4 hardpoints, 1-in-6 breakdown chance",
            ]}
          >
            <InsetBox title="SCAVENGING RESULTS — TRACK HERE:">
              <Line smoke>Record installed components during build</Line>
              <Line smoke>HP: 1 (base chassis)</Line>
              <Line smoke>Armor: —</Line>
              <Line smoke>Hardpoints used: 0 / 12</Line>
            </InsetBox>
          </Node>
        ),
      },

    },
  },
};

export default JUST_SCRAPN_BY_COMMANDS;
