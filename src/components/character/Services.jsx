import React from "react";

import CollapsibleSection from '../CollapsibleSection';

export default function Services({ character = null }) {
  if (!character) return null;

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
          {/* Table Header */}
          <div className="py-2 px-3 bg-gray-800/50 border-b-2 border-cy-cyan/50 mb-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold text-gray-400 uppercase flex-1">Service</span>
              <div className="flex gap-6 text-xs font-bold text-gray-400 uppercase">
                <div className="text-right min-w-[80px]">One Trip</div>
                <div className="text-right min-w-[80px]">Monthly</div>
                <div className="text-right min-w-[100px]">Own It</div>
              </div>
            </div>
          </div>

          <ServiceItemMultiPrice
            name="Old-school motorcycle"
            oneTrip="15¤"
            monthly="300¤"
            ownIt="3k-9k¤"
          />
          <ServiceItemMultiPrice
            name="Cyberbike"
            oneTrip="20¤"
            monthly="400-1k¤"
            ownIt="5k-20k¤"
          />
          <ServiceItemMultiPrice
            name="Car"
            oneTrip="10¤"
            monthly="200-1k¤"
            ownIt="3k-15k¤"
          />
          <ServiceItemMultiPrice
            name="Van"
            oneTrip="15¤"
            monthly="300-600¤"
            ownIt="4k-12k¤"
          />
          <ServiceItemMultiPrice
            name="Armored car"
            oneTrip="100¤"
            monthly="2k-10k¤"
            ownIt="25k-100k¤"
          />
          <ServiceItemMultiPrice
            name="Armed and armored van"
            oneTrip="250¤"
            monthly="5k-25k¤"
            ownIt="50k-200k¤"
          />
          <ServiceItemMultiPrice
            name="Octocopter"
            oneTrip="150¤"
            monthly="3k-10k¤"
            ownIt="50k-75k¤"
          />
          <ServiceItemMultiPrice
            name="Small hovercraft"
            oneTrip="50¤"
            monthly="1k-5k¤"
            ownIt="15k-40k¤"
          />
          <ServiceItemMultiPrice
            name="Submersible"
            oneTrip="200-500¤"
            monthly="4k-10k¤"
            ownIt="100k¤+"
          />
          <ServiceItemMultiPrice
            name="Fishing boat"
            oneTrip="100¤"
            monthly="2k-5k¤"
            ownIt="25k-50k¤"
          />

          <div className="mt-3 pt-3 border-t border-gray-800">
            <ServiceItem name="Pod pickup" price="3¤" detail="One trip only" />
            <ServiceItem name="Taxi service" price="5¤" detail="One trip only" />
            <ServiceItem name="Maglev/tram/subway ticket" price="1¤" detail="One trip only" />
          </div>
        </ServiceCategory>

        {/* Housing */}
        <ServiceCategory title="Housing" color="yellow">
          {/* Table Header */}
          <div className="py-2 px-3 bg-gray-800/50 border-b-2 border-cy-yellow/50 mb-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold text-gray-400 uppercase flex-1">Service</span>
              <div className="flex gap-6 text-xs font-bold text-gray-400 uppercase">
                <div className="text-right min-w-[80px]">One Night</div>
                <div className="text-right min-w-[80px]">Monthly</div>
                <div className="text-right min-w-[100px]">Own It</div>
              </div>
            </div>
          </div>

          <ServiceItemMultiPrice
            name="Coffin hotel"
            oneNight="7¤"
            monthly="—"
            ownIt="-"
          />
          <ServiceItemMultiPrice
            name="Hotel room"
            oneNight="25¤"
            monthly="500¤"
            ownIt="—"
          />
          <ServiceItemMultiPrice
            name="Hotel suite"
            oneNight="50¤+"
            monthly="1k¤+"
            ownIt="—"
          />
          <ServiceItemMultiPrice
            name="Slums apartment"
            oneNight="—"
            monthly="100-300¤"
            ownIt="100k-3M¤"
          />
          <ServiceItemMultiPrice
            name="Inbetweens apartment"
            oneNight="—"
            monthly="500-3k¤"
            ownIt="500k-3M¤"
          />
          <ServiceItemMultiPrice
            name="Hills apartment or villa"
            oneNight="—"
            monthly="2M¤+"
            ownIt="Forget it"
          />
          <ServiceItemMultiPrice
            name="Arc apartment"
            oneNight="—"
            monthly="—"
            ownIt="100M¤+"
          />
        </ServiceCategory>

        {/* Food */}
        <ServiceCategory title="Food" color="pink">
          <ServiceItem
            name="Maker-made street food and off-brand powder beer"
            price="1¤"
          />
          <ServiceItem
            name="Sit in or take away food court meal with/without added nutrition"
            price="5/2¤"
          />
          <ServiceItem
            name="Fine dining with soil grown, organic* veggies"
            price="10–50¤"
          />
          <ServiceItem
            name="VIP chef restaurant with real meat"
            price="40¤+"
          />
        </ServiceCategory>

        {/* Other Services */}
        <ServiceCategory title="Other Services" color="purple">
          <ServiceItem name="Gear repair" price="50% of original price"  />
          <ServiceItem name="Credchip laundering" price="30-60% of amount" illegal />
          <ServiceItem name="Facial reconstruction" price="1k-10k¤" />
          <ServiceItem name="Body modification" price="250-5k¤" />
          <ServiceItem name="Full body reshape" price="3k-50k¤" />
          <ServiceItem name="Cybertech jailbreak" price="25% of original price" illegal />
          <ServiceItem name="Ad blocking" price="100¤/day" illegal />
          <ServiceItem name="Doxing" price="500-15k¤" illegal />
          <ServiceItem name="Complete identity fabrication" price="5k¤+" illegal />
          <ServiceItem name="Memory reset" price="15k¤" />
          <ServiceItem name="Crime scene cleanup" price="1k–5k¤" illegal />
        </ServiceCategory>

        {/* Footer Note */}
        <div className="text-xs text-gray-500 italic text-center">
          Prices are estimates and may vary by district, vendor, and circumstance
        </div>
      </div>
    </CollapsibleSection>
  );
}

// Component: Service Category
function ServiceCategory({ title, color, children }) {
  const colorMap = {
    cyan: "border-cy-cyan text-cy-cyan",
    yellow: "border-cy-yellow text-cy-yellow",
    pink: "border-cy-pink text-cy-pink",
    purple: "border-purple-500 text-purple-400",
  };

  return (
    <div>
      <div className={`border-l-4 ${colorMap[color]} pl-4 py-2 mb-3`}>
        <h3 className="text-xl font-black uppercase tracking-wide">
          {title}
        </h3>
      </div>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}

// Component: Service Item with Multiple Prices
function ServiceItemMultiPrice({ name, oneTrip, oneNight, monthly, ownIt }) {
  const firstCol = oneTrip || oneNight;

  return (
    <div className="py-2 px-3 bg-gray-900/20 hover:bg-gray-800/40 border-b border-gray-800/50 transition-colors">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-gray-300 flex-1">{name}</span>
        <div className="flex gap-6 text-sm font-mono tabular-nums">
          <div className="text-right min-w-[80px]">
            {firstCol && firstCol !== "—" ? (
              <span className="text-green-400 font-bold">{firstCol}</span>
            ) : (
              <span className="text-gray-700">—</span>
            )}
          </div>
          <div className="text-right min-w-[80px]">
            {monthly && monthly !== "—" ? (
              <span className="text-cy-yellow font-bold">{monthly}</span>
            ) : (
              <span className="text-gray-700">—</span>
            )}
          </div>
          <div className="text-right min-w-[100px]">
            {ownIt && ownIt !== "—" ? (
              <span className="text-cy-cyan font-bold">{ownIt}</span>
            ) : (
              <span className="text-gray-700">—</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Component: Service Item
function ServiceItem({ name, price, detail, illegal }) {
  return (
    <div className="flex items-start justify-between py-2 px-3 bg-gray-900/20 hover:bg-gray-900/40 border-l-2 border-transparent hover:border-gray-700 transition-all">
      <div className="flex-1">
        <span className="text-sm text-gray-300">{name}</span>
        {detail && (
          <span className="ml-2 text-xs text-gray-500 italic">({detail})</span>
        )}
        {illegal && (
          <span className="ml-2 text-xs text-cy-pink italic">ILLEGAL</span>
        )}
      </div>
      <span className="text-sm font-mono font-bold text-green-400 ml-4 whitespace-nowrap">
        {price}
      </span>
    </div>
  );
}
