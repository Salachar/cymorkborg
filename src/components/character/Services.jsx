import React from "react";

import CollapsibleSection from '../CollapsibleSection';
import { SERVICES, TRANSPORT, HOUSING, FOOD } from '@data/tables/services';
import {
  ServiceCategory,
  ServiceTableHeader,
  ServiceItemMultiPrice,
  ServiceItem,
} from '@components/Services/ServicesComponents';

export default function Services({ character = null }) {
  if (!character) return null;

  const vehicles = TRANSPORT.filter(t => !t.flatFare);
  const flatFareTransport = TRANSPORT.filter(t => t.flatFare);

  return (
    <CollapsibleSection
      title="Services & Prices"
      sectionKey="services"
      character={character}
      headerClass="bg-gradient-to-r from-green-900/20 via-gray-900 to-green-900/20 border-2 border-green-600/50 p-4 mb-4 cursor-pointer hover:border-green-600/70 transition-colors"
      headerTextClass="text-green-400"
      defaultOpen={false}
    >
      <div className="space-y-6">
        {/* Transport */}
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

        {/* Housing */}
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

        {/* Food */}
        <ServiceCategory title="Food" color="pink">
          {FOOD.map(f => (
            <ServiceItem key={f.label} name={f.label} price={f.price} />
          ))}
        </ServiceCategory>

        {/* Other Services */}
        <ServiceCategory title="Other Services" color="purple">
          {SERVICES.map(s => (
            <ServiceItem key={s.label} name={s.label} price={s.price} illegal={s.illegal} />
          ))}
        </ServiceCategory>

        {/* Footer Note */}
        <div className="text-xs text-gray-500 italic text-center">
          Prices are estimates and may vary by district, vendor, and circumstance
        </div>
      </div>
    </CollapsibleSection>
  );
}
