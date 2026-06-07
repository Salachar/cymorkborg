import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  Node,
  Nodes,
} from "@terminal/retcomdevice";

export const IRON_VAULT_STORAGE_COMMANDS = {
  "Iron Vault Storage": {
    favicon: <Icons.Warehouse />,
    preview: (
      <NodePreview>
        <Line span smoke> · Self-storage facility. Ports District. 24/7 access.</Line>
      </NodePreview>
    ),
    content: (
      <Nodes.FacilityPortal
        companyName="IRON VAULT STORAGE"
        tagline="Secure. Discreet. Yours."
        location="Ports District"
        owner="Iron Vault Holdings — independent operator"
        theme="default"
        notes={[
          "24-hour keycard access",
          "Climate controlled units available",
          "No questions asked — contents are tenant business",
        ]}
      />
    ),
    related_commands: {

      "Mailroom": {
        favicon: <Icons.Room />,
        content: (
          <Node
            title="IRON VAULT STORAGE — MAILROOM"
            subtitle="Tenant Services & Mail Access"
            notes={[
              "Unit rental and renewal handled at front desk — hours 08:00-20:00",
              "After-hours access via keycard — perimeter gate and unit only",
              "Lost keycard replacement: 50¤ fee, ID required",
              "All overflow mail is burned, PICK UP YOUR FUCKING MAIL!",
            ]}
          />
        ),
        related_commands: {
          "Vending Machine": {
            content: <Nodes.VendingMachine />,
          },
          "Coffee Machine": {
            content: <Nodes.CoffeeMachine />,
          },
        },
      },

      "Storage Units": {
        content: (
          <Node
            title="IRON VAULT STORAGE — TENANT PORTAL"
            subtitle="Staff & Tenant Intranet"
            notes={[
              "Welcome, valued tenant",
              "Reminder: rent is due on the 1st of each month — late fees apply after 7 days",
              "Unit access logs are maintained for 90 days",
              "Noise complaints: contact management during business hours",
            ]}
          />
        ),
        related_commands: {
          "Block A — Small Units": {
            favicon: <Icons.Warehouse />,
            content: (
              <Node
                title="BLOCK A — SMALL UNITS"
                subtitle="Units A01–A20 · 2m × 3m"
                notes={[
                  "20 units total",
                  "Standard keycard access",
                  "No climate control",
                ]}
              />
            ),
          },

          "Block B — Medium Units": {
            favicon: <Icons.Warehouse />,
            content: (
              <Node
                title="BLOCK B — MEDIUM UNITS"
                subtitle="Units B01–B12 · 3m × 5m"
                notes={[
                  "12 units total",
                  "Standard keycard access",
                  "Climate control available — see management",
                ]}
              />
            ),
            related_commands: {

              "Unit B07": {
                favicon: <Icons.Room />,
                password: {
                  pw: "b07",
                  hint: "The unit number",
                  lockType: "terminal",
                },
                content: (
                  <Node
                    title="UNIT B07"
                    subtitle="Block B — Medium Unit · 3m × 5m"
                    table={{
                      tenant: "Registered — anonymous",
                      access: "Keycard only",
                      status: "ACTIVE",
                      climate: "Standard",
                    }}
                    notes={[
                      "Rent current",
                      "Last accessed: recent",
                    ]}
                  />
                ),
                related_commands: {
                  "Workstation": {
                    content: <Nodes.Workstation />,
                  },
                  "Smart Fridge": {
                    content: <Nodes.SmartFridge />,
                  },
                },
              },

            },
          },

          "Block C — Large Units": {
            favicon: <Icons.Warehouse />,
            content: (
              <Node
                title="BLOCK C — LARGE UNITS"
                subtitle="Units C01–C08 · 5m × 8m"
                notes={[
                  "8 units total",
                  "Heavy duty keycard access — reinforced doors",
                  "Climate control standard",
                  "Vehicle storage available in C06–C08",
                ]}
              />
            ),
          },
        },
      },

      "Internal Access": {
        favicon: <Icons.LAN />,
        password: {
          pw: "vaultkeeper",
          hint: "Who looks after the vault",
          lockType: "terminal",
        },
        content: (
          <Node
            title="IRON VAULT STORAGE — INTERNAL SYSTEMS"
            subtitle="Staff access only — all actions logged"
            notes={[
              "Tenant records maintained confidentially",
              "Access logs available to law enforcement with valid warrant only",
              "Management on site 08:00–20:00 daily",
            ]}
          >
            <Nodes.RCDAlert
              message="Tenant registry access restricted — unit contents not logged"
              details={[
                "Iron Vault operates a no-inspection policy — contents are tenant business",
                "Access logs show entry times only — no camera coverage inside units",
                "Unit B07 registered to a shell identity — no traceable owner",
              ]}
            />
          </Node>
        ),
        related_commands: {

          "Building Access": {
            favicon: <Icons.Lock />,
            content: (
              <Nodes.BuildingAccess
                title="IRON VAULT STORAGE — ACCESS CONTROL"
                points={[
                  {
                    location: "Perimeter Gate",
                    access: ["Tenant keycard — vehicle and pedestrian gate"],
                    notes: ["Automated 24/7 — no staff after 20:00"],
                  },
                  {
                    location: "Main Entrance",
                    access: ["Tenant keycard or staff access during business hours"],
                    notes: ["Reception open 08:00–20:00"],
                  },
                  {
                    location: "Individual Units",
                    access: ["Unit-specific keycard — tenant issued"],
                    notes: ["Lost keycards deactivated on request — 50¤ replacement fee"],
                  },
                  {
                    location: "Management Office",
                    access: ["Staff only"],
                    notes: ["Located adjacent to main entrance"],
                  },
                ]}
              />
            ),
          },

          "Facility Network": {
            favicon: <Icons.LAN />,
            content: (
              <Nodes.NetworkActivity
                title="IRONVAULT_LOCAL"
                environment={{
                  power: "ONLINE",
                  status: "OPERATIONAL",
                  coverage: "Perimeter and common areas only",
                }}
                devices={[
                  { name: "Perimeter Gate Controller", location: "Main entrance", status: "ACTIVE" },
                  { name: "Concierge Terminal", location: "Reception", status: "ACTIVE" },
                  { name: "Climate Control — Block B", location: "Block B", status: "ACTIVE" },
                  { name: "Climate Control — Block C", location: "Block C", status: "ACTIVE" },
                  { name: "Lighting Grid", location: "All blocks", status: "ACTIVE" },
                ]}
              />
            ),
          },

        },
      },

    },
  },
};

export default IRON_VAULT_STORAGE_COMMANDS;
