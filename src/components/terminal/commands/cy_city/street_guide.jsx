import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
  Divider,
} from '@terminal/TerminalComponents';

import { Message } from "@terminal/retcomdevice";

import {
  WEAPONS_FOR_SALE,
  AMMO_BOOSTERS,
  DRUGS,
  CYBERTECH,
} from '@data/tables';

import {
  ARMOR_TABLE,
} from '@data/tables/sharedTables';

const SERVICES = [
  { label: "Gear repair", price: "50% of original" },
  { label: "Credchip laundering ⚠", price: "30–60% of amount" },
  { label: "Facial reconstruction", price: "1k–10k¤" },
  { label: "Body modification", price: "250–5k¤" },
  { label: "Full body reshape", price: "3k–50k¤" },
  { label: "Cybertech jailbreak ⚠", price: "25% of original" },
  { label: "Ad blocking ⚠", price: "100¤/day" },
  { label: "Doxing ⚠", price: "500–15k¤" },
  { label: "Complete identity fabrication ⚠", price: "5k¤+" },
  { label: "Memory reset", price: "15k¤" },
  { label: "Crime scene cleanup ⚠", price: "1k–5k¤" },
];

const TRANSPORT = [
  { label: "Old-school motorcycle", rental: "300¤", monthly: "3k–9k¤", own: "15¤/mo" },
  { label: "Cyberbike", rental: "400–1k¤", monthly: "5k–20k¤", own: "20¤/mo" },
  { label: "Car", rental: "200–1k¤", monthly: "3k–15k¤", own: "10¤/mo" },
  { label: "Van", rental: "300–600¤", monthly: "4k–12k¤", own: "15¤/mo" },
  { label: "Armored car", rental: "2k–10k¤", monthly: "25k–100k¤", own: "100¤/mo" },
  { label: "Armed & armored van", rental: "5k–25k¤", monthly: "50k–200k¤", own: "250¤/mo" },
  { label: "Octocopter", rental: "3k–10k¤", monthly: "50k–75k¤", own: "150¤/mo" },
  { label: "Small hovercraft", rental: "1k–5k¤", monthly: "15k–40k¤", own: "50¤/mo" },
  { label: "Submersible", rental: "4k–10k¤", monthly: "100k¤+", own: "200–500¤/mo" },
  { label: "Fishing boat", rental: "2k–5k¤", monthly: "25k–50k¤", own: "100¤/mo" },
  { label: "Pod pickup", rental: "3¤", monthly: "—", own: "—" },
  { label: "Taxi service", rental: "5¤", monthly: "—", own: "—" },
  { label: "Maglev/tram/subway", rental: "1¤", monthly: "25¤", own: "—" },
];

function Table({ headers, rows }) {
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                textAlign: i === 0 ? 'left' : 'right',
                padding: '0.35rem 0.5rem',
                color: 'var(--color-text-tertiary)',
                borderBottom: '1px solid var(--color-border-tertiary)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                whiteSpace: 'nowrap',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '0.5px solid var(--color-border-tertiary)' }}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  textAlign: j === 0 ? 'left' : 'right',
                  padding: '0.35rem 0.5rem',
                  color: j === 0 ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  whiteSpace: j === 0 ? 'normal' : 'nowrap',
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const STREET_GUIDE_COMMANDS = {
  "Street Guide": {
    favicon: <Icons.Files />,
    preview: (
      <NodePreview>
        <Line span smoke> · Weapons. Drugs. Chrome. Services. Everything you need, priced to survive.</Line>
      </NodePreview>
    ),
    content: (
      <Message
        title="STREET GUIDE"
        subtitle="Pirated fixer doc — circulating on the Net"
        message="KNOW YOUR PRICES. KNOW YOUR OPTIONS."
        theme="casual"
      />
    ),
    related_commands: {

      "Weapons": {
        favicon: <Icons.Weapons />,
        content: (
          <Message
            title="WEAPONS"
            subtitle="⚠ = Illegal / requires SecOps license. Without it, SecOps shoot to kill."
            theme="casual"
          >
            <Divider />
            <Line cyan bold>MELEE</Line>
            <Table
              headers={["WEAPON", "DMG", "COST"]}
              rows={WEAPONS_FOR_SALE
                .filter(w => !['9mm_pistol','ancient_revolver','smartgun','small_smgs','assault_rifle','grenade_launcher','shotgun','sniper_rifle','pulse_rifle','nailgun','laser_turret','rocket_launcher','flashbang','hand_grenade','epulse_grenade'].includes(w.id))
                .map(w => [
                  `${w.label}${w.special?.includes('illegal') ? ' ⚠' : ''}`,
                  w.die || '—',
                  w.cost,
                ])}
            />
            <Divider />
            <Line cyan bold>RANGED</Line>
            <Table
              headers={["WEAPON", "DMG", "COST"]}
              rows={['9mm_pistol','ancient_revolver','smartgun','small_smgs','assault_rifle','shotgun','sniper_rifle','pulse_rifle','nailgun','laser_turret','rocket_launcher'].map(id => {
                const w = WEAPONS_FOR_SALE.find(x => x.id === id);
                return [
                  `${w.label}${w.special?.includes('illegal') ? ' ⚠' : ''}`,
                  w.die || '—',
                  w.cost,
                ];
              })}
            />
            <Divider />
            <Line cyan bold>EXPLOSIVES ⚠</Line>
            <Table
              headers={["WEAPON", "DMG", "COST"]}
              rows={['flashbang','hand_grenade','epulse_grenade','grenade_launcher'].map(id => {
                const w = WEAPONS_FOR_SALE.find(x => x.id === id);
                return [w.label, w.die || '—', w.cost];
              })}
            />
            <Line smoke small>a = capable of autofire</Line>
          </Message>
        ),
      },

      "Armor": {
        favicon: <Icons.Shield />,
        content: (
          <Message title="ARMOR" theme="casual">
            <Table
              headers={["ARMOR", "TIER", "PROTECTION", "COST", "NOTES"]}
              rows={ARMOR_TABLE.map(a => [
                a.label,
                a.tier || '—',
                a.die ? `-d${a.die}` : '—',
                a.cost || '—',
                a.description,
              ])}
            />
          </Message>
        ),
      },

      "Ammo & Boosters": {
        favicon: <Icons.Warehouse />,
        content: (
          <Message
            title="AMMO & BOOSTERS"
            subtitle="Single-use booster mods modify one shot. Can be used with most modern firearms."
            theme="casual"
          >
            <Line smoke small>After combat: roll d8 per fired weapon (d6 if autofire). 1–3 = out of ammo. Regular ammo = 10% of weapon price.</Line>
            <Divider />
            <Table
              headers={["BOOSTER", "COST", "EFFECT"]}
              rows={AMMO_BOOSTERS.map(a => [a.label, a.cost, a.description])}
            />
          </Message>
        ),
      },

      "Drugs": {
        favicon: <Icons.Drugs />,
        content: (
          <Message
            title="DRUGS"
            subtitle="Price format: Full dose / Weaker recreational dose"
            theme="casual"
          >
            <Table
              headers={["DRUG", "COST", "EFFECT"]}
              rows={DRUGS.map(d => [d.label, d.cost, d.description])}
            />
          </Message>
        ),
      },

      "Cybertech": {
        favicon: <Icons.Tech />,
        content: (
          <Message
            title="CYBERTECH"
            subtitle="Implants and body modifications. Installation requires a clinic."
            theme="casual"
          >
            <Table
              headers={["IMPLANT", "DMG", "COST", "EFFECT"]}
              rows={CYBERTECH.map(c => [c.label, c.die || '—', c.cost, c.description])}
            />
          </Message>
        ),
      },

      "Services & Transportation": {
        favicon: <Icons.Bulletin />,
        content: (
          <Message
            title="SERVICES & PRICES"
            subtitle="⚠ = Illegal. Prices vary by district and vendor."
            theme="casual"
          >
            <Line cyan bold>PROFESSIONAL SERVICES</Line>
            <Table
              headers={["SERVICE", "PRICE"]}
              rows={SERVICES.map(s => [s.label, s.price])}
            />
            <Divider />
            <Line cyan bold>TRANSPORT — RENTAL / MONTHLY / OWN</Line>
            <Table
              headers={["VEHICLE", "RENTAL", "MONTHLY", "OWN"]}
              rows={TRANSPORT.map(t => [t.label, t.rental, t.monthly, t.own])}
            />
            <Divider />
            <Line cyan bold>FOOD</Line>
            <Table
              headers={["FOOD", "PRICE"]}
              rows={[
                ["Street food & off-brand powder beer", "1¤"],
                ["Food court meal (with/without nutrition)", "5¤ / 2¤"],
                ["Fine dining, soil-grown organic veg", "10–50¤"],
                ["VIP chef restaurant, real meat", "40¤+"],
              ]}
            />
          </Message>
        ),
      },

      "Housing": {
        favicon: <Icons.House />,
        content: (
          <Message
            title="HOUSING"
            subtitle="One night / Monthly / Own it"
            theme="casual"
          >
            <Table
              headers={["TYPE", "ONE NIGHT", "MONTHLY", "OWN IT"]}
              rows={[
                ["Coffin hotel", "7¤", "—", "—"],
                ["Hotel room", "25¤", "—", "—"],
                ["Hotel suite", "50¤+", "—", "—"],
                ["Slums apartment", "—", "500¤", "100–300k¤"],
                ["Inbetweens apartment", "—", "1k¤", "500k–3M¤"],
                ["Hills apartment or villa", "—", "1k¤+", "Forget it / 100M¤+"],
                ["Arc apartment", "—", "100–300¤", "—"],
              ]}
            />
            <Line smoke small style={{ marginTop: '0.5rem' }}>
              The higher you live, the longer you survive. The lower you live, the cheaper it is to die there.
            </Line>
          </Message>
        ),
      },

    },
  },
};

export default STREET_GUIDE_COMMANDS;
