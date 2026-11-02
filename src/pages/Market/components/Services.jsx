import { Collapsible, SubHeading, Tag } from '@components/Layout/Layout';
import { SERVICES, TRANSPORT, HOUSING, FOOD } from '@data/tables/services';

import {
  Categories,
  Category,
  TableWrap,
  PriceTable,
  HeadCell,
  NameCell,
  Detail,
  PriceCell,
  Footnote,
} from './Services.styles';

// Price reference. Doesn't need a character, and its open/closed state is
// app-wide (no character passed to Collapsible).
export default function Services() {
  const vehicles = TRANSPORT.filter((t) => !t.flatFare);
  const flatFares = TRANSPORT.filter((t) => t.flatFare);

  return (
    <Collapsible title="Services & Prices" sectionKey="market_services" defaultOpen={false}>
      <Categories>
        <Category>
          <SubHeading>Transport</SubHeading>
          <MultiPriceTable
            columns={['One trip', 'Monthly', 'Own it']}
            rows={vehicles.map((t) => ({ name: t.label, prices: [t.oneTrip, t.monthly, t.own] }))}
          />
          <SinglePriceTable
            rows={flatFares.map((t) => ({ name: t.label, price: t.oneTrip, detail: 'one trip only' }))}
          />
        </Category>

        <Category>
          <SubHeading>Housing</SubHeading>
          <MultiPriceTable
            columns={['One night', 'Monthly', 'Own it']}
            rows={HOUSING.map((h) => ({ name: h.label, prices: [h.oneNight, h.monthly, h.own] }))}
          />
        </Category>

        <Category>
          <SubHeading>Food</SubHeading>
          <SinglePriceTable rows={FOOD.map((f) => ({ name: f.label, price: f.price }))} />
        </Category>

        <Category>
          <SubHeading>Other services</SubHeading>
          <SinglePriceTable
            rows={SERVICES.map((s) => ({ name: s.label, price: s.price, illegal: s.illegal }))}
          />
        </Category>

        <Footnote>Prices are estimates and vary by district, vendor, and circumstance.</Footnote>
      </Categories>
    </Collapsible>
  );
}

const isEmpty = (value) => !value || value === '—';

function Price({ value }) {
  const empty = isEmpty(value);
  return <PriceCell data-empty={empty || undefined}>{empty ? '—' : value}</PriceCell>;
}

function MultiPriceTable({ columns, rows }) {
  return (
    <TableWrap>
      <PriceTable>
        <thead>
          <tr>
            <HeadCell scope="col">Service</HeadCell>
            {columns.map((col) => (
              <HeadCell key={col} scope="col">{col}</HeadCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <NameCell>{row.name}</NameCell>
              {row.prices.map((price, i) => (
                <Price key={i} value={price} />
              ))}
            </tr>
          ))}
        </tbody>
      </PriceTable>
    </TableWrap>
  );
}

function SinglePriceTable({ rows }) {
  if (!rows.length) return null;
  return (
    <TableWrap>
      <PriceTable>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <NameCell>
                {row.name}
                {row.detail && <Detail>({row.detail})</Detail>}
                {row.illegal && <Tag data-tone="highlight">Illegal</Tag>}
              </NameCell>
              <Price value={row.price} />
            </tr>
          ))}
        </tbody>
      </PriceTable>
    </TableWrap>
  );
}
