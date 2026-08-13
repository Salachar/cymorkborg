import Icons from '@utils/icons';

import {
  Line,
  NodePreview,
  KeyValue,
  COLOR_MAP,
} from '@terminal/TerminalComponents';

import {
  Node,
} from "@terminal/retcomdevice";

import {
  WEAPONS_FOR_SALE,
  AMMO_BOOSTERS,
  DRUGS,
  CYBERTECH,
} from '@data/tables';

import {
  ARMOR_TABLE,
} from '@data/tables/sharedTables';

import {
  SERVICES,
  TRANSPORT,
  HOUSING,
  FOOD,
} from '@data/tables/services';

import {
  ServiceCategory,
  ServiceTableHeader,
  ServiceItemMultiPrice,
  ServiceItem,
} from '@components/Services/ServicesComponents';

// Renders each row as a stacked card instead of a <table>: first column
// becomes the row's title, remaining columns render as KeyValue pairs
// underneath. Used for item-attribute tables (weapons, armor, drugs, etc.)
// where a price-comparison layout doesn't fit.
function Table({ title, headers, rows }) {
  const [, ...restHeaders] = headers;

  return (
    <>
      {title && (
        <Line cyan bold large top bottom>{title}</Line>
      )}
      <div className="flex flex-col gap-2">
        {rows.map((row, i) => {
          const [primaryCell, ...restCells] = row;
          return (
            <div
              key={i}
              style={{
                border: `1px solid ${COLOR_MAP.smoke}`,
                borderRadius: '3px',
                padding: '0.5rem 0.65rem',
              }}
            >
              <div className="text-sm font-bold" style={{ color: COLOR_MAP.cyan }}>
                {primaryCell}
              </div>
              {restCells.length > 0 && (
                <div className="flex flex-col gap-0.5 mt-1">
                  {restCells.map((cell, j) => (
                    <KeyValue key={j} label={restHeaders[j]} value={cell} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

const vehicles = TRANSPORT.filter(t => !t.flatFare);
const flatFareTransport = TRANSPORT.filter(t => t.flatFare);

export const STREET_GUIDE_COMMANDS = {
  "Street Guide": {
    favicon: <Icons.Files />,
    preview: (
      <NodePreview>
        <Line span smoke> · Weapons. Drugs. Chrome. Services. Everything you need, priced to survive.</Line>
      </NodePreview>
    ),
    content: (
      <Node
        title="STREET GUIDE"
        subtitle="Pirated fixer doc — circulating on the Net"
      />
    ),
    related_commands: {

      "Weapons": {
        favicon: <Icons.Weapons />,
        content: (
          <Node
            title="WEAPONS"
            subtitle="⚠ = Illegal / requires SecOps license. Without it, SecOps shoot to kill."
          >
            <Table
              headers={["WEAPON", "DMG", "COST"]}
              rows={WEAPONS_FOR_SALE
                .map(w => [
                  `${w.label}${w.special?.includes('illegal') ? ' ⚠' : ''}`,
                  w.die || '—',
                  w.cost,
                ])}
            />
            <Line smoke small>a = capable of autofire</Line>
          </Node>
        ),
      },

      "Armor": {
        favicon: <Icons.Shield />,
        content: (
          <Node title="ARMOR">
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
          </Node>
        ),
      },

      "Ammo & Boosters": {
        favicon: <Icons.Warehouse />,
        content: (
          <Node
            title="AMMO & BOOSTERS"
            subtitle="Single-use booster mods modify one shot. Can be used with most modern firearms."
          >
            <Table
              headers={["BOOSTER", "COST", "EFFECT"]}
              rows={AMMO_BOOSTERS.map(a => [a.label, a.cost, a.description])}
            />
          </Node>
        ),
      },

      "Drugs": {
        favicon: <Icons.Drugs />,
        content: (
          <Node
            title="DRUGS"
            subtitle="Price format: Full dose / Weaker recreational dose"
          >
            <Table
              headers={["DRUG", "COST", "EFFECT"]}
              rows={DRUGS.map(d => [d.label, d.cost, d.description])}
            />
          </Node>
        ),
      },

      "Cybertech": {
        favicon: <Icons.Tech />,
        content: (
          <Node
            title="CYBERTECH"
            subtitle="Implants and body modifications. Installation requires a clinic."
          >
            <Table
              headers={["IMPLANT", "DMG", "COST", "EFFECT"]}
              rows={CYBERTECH.map(c => [c.label, c.die || '—', c.cost, c.description])}
            />
          </Node>
        ),
      },

      "Services & Transportation": {
        favicon: <Icons.Bulletin />,
        content: (
          <Node
            title="SERVICES & PRICES"
            subtitle="⚠ = Illegal. Prices vary by district and vendor."
          >
            <ServiceCategory title="Professional Services" color="purple">
              {SERVICES.map(s => (
                <ServiceItem key={s.label} name={s.label} price={s.price} illegal={s.illegal} />
              ))}
            </ServiceCategory>

            <ServiceCategory title="Transport" color="cyan">
              <ServiceTableHeader
                col1Label="One Trip"
                col2Label="Monthly"
                col3Label="Own It"
                color="cyan"
              />

              {vehicles.map(t => (
                <ServiceItemMultiPrice
                  key={t.label}
                  name={t.label}
                  col1={t.oneTrip}
                  col2={t.monthly}
                  col3={t.own}
                />
              ))}

              <div className="mt-3 pt-3 border-t border-gray-800">
                {flatFareTransport.map(t => (
                  <ServiceItem
                    key={t.label}
                    name={t.label}
                    price={t.oneTrip}
                    detail="One trip only"
                  />
                ))}
              </div>
            </ServiceCategory>

            <ServiceCategory title="Food" color="pink">
              {FOOD.map(f => (
                <ServiceItem key={f.label} name={f.label} price={f.price} />
              ))}
            </ServiceCategory>
          </Node>
        ),
      },

      "Housing": {
        favicon: <Icons.House />,
        content: (
          <Node
            title="HOUSING"
            subtitle="One night / Monthly / Own it"
          >
            <ServiceCategory title="Housing" color="yellow">
              <ServiceTableHeader
                col1Label="One Night"
                col2Label="Monthly"
                col3Label="Own It"
                color="yellow"
              />

              {HOUSING.map(h => (
                <ServiceItemMultiPrice
                  key={h.label}
                  name={h.label}
                  col1={h.oneNight}
                  col2={h.monthly}
                  col3={h.own}
                />
              ))}
            </ServiceCategory>

            <Line smoke small style={{ marginTop: '0.5rem' }}>
              The higher you live, the longer you survive. The lower you live, the cheaper it is to die there.
            </Line>
          </Node>
        ),
      },

    },
  },
};

export default STREET_GUIDE_COMMANDS;
