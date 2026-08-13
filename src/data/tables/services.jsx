// Shared pricing data — used by both the character sheet's Services panel
// (components/CharacterSheet/Services.jsx) and the terminal's Street Guide
// (STREET_GUIDE_COMMANDS). Keeping one source means updating a price here
// updates it everywhere it's displayed.

export const SERVICES = [
  { label: "Gear repair", price: "50% of original price" },
  { label: "Credchip laundering", price: "30–60% of amount", illegal: true },
  { label: "Facial reconstruction", price: "1k–10k¤" },
  { label: "Body modification", price: "250–5k¤" },
  { label: "Full body reshape", price: "3k–50k¤" },
  { label: "Cybertech jailbreak", price: "25% of original price", illegal: true },
  { label: "Ad blocking", price: "100¤/day", illegal: true },
  { label: "Doxing", price: "500–15k¤", illegal: true },
  { label: "Complete identity fabrication", price: "5k¤+", illegal: true },
  { label: "Memory reset", price: "15k¤" },
  { label: "Crime scene cleanup", price: "1k–5k¤", illegal: true },
];

// oneTrip / monthly / own — flatFare rows (pod pickup, taxi, maglev) have
// no monthly/own option, only a per-ride price.
export const TRANSPORT = [
  { label: "Old-school motorcycle", oneTrip: "15¤", monthly: "300¤", own: "3k–9k¤" },
  { label: "Cyberbike", oneTrip: "20¤", monthly: "400–1k¤", own: "5k–20k¤" },
  { label: "Car", oneTrip: "10¤", monthly: "200–1k¤", own: "3k–15k¤" },
  { label: "Van", oneTrip: "15¤", monthly: "300–600¤", own: "4k–12k¤" },
  { label: "Armored car", oneTrip: "100¤", monthly: "2k–10k¤", own: "25k–100k¤" },
  { label: "Armed and armored van", oneTrip: "250¤", monthly: "5k–25k¤", own: "50k–200k¤" },
  { label: "Octocopter", oneTrip: "150¤", monthly: "3k–10k¤", own: "50k–75k¤" },
  { label: "Small hovercraft", oneTrip: "50¤", monthly: "1k–5k¤", own: "15k–40k¤" },
  { label: "Submersible", oneTrip: "200–500¤", monthly: "4k–10k¤", own: "100k¤+" },
  { label: "Fishing boat", oneTrip: "100¤", monthly: "2k–5k¤", own: "25k–50k¤" },
  { label: "Pod pickup", oneTrip: "3¤", monthly: "—", own: "—", flatFare: true },
  { label: "Taxi service", oneTrip: "5¤", monthly: "—", own: "—", flatFare: true },
  { label: "Maglev/tram/subway ticket", oneTrip: "1¤", monthly: "—", own: "—", flatFare: true },
];

// oneNight / monthly / own
export const HOUSING = [
  { label: "Coffin hotel", oneNight: "7¤", monthly: "—", own: "—" },
  { label: "Hotel room", oneNight: "25¤", monthly: "500¤", own: "—" },
  { label: "Hotel suite", oneNight: "50¤+", monthly: "1k¤+", own: "—" },
  { label: "Slums apartment", oneNight: "—", monthly: "100–300¤", own: "100k–3M¤" },
  { label: "Inbetweens apartment", oneNight: "—", monthly: "500¤–3k¤", own: "500k–3M¤" },
  { label: "Hills apartment or villa", oneNight: "—", monthly: "2M¤+", own: "Forget it" },
  { label: "Arc apartment", oneNight: "—", monthly: "—", own: "100M¤+" },
];

export const FOOD = [
  { label: "Maker-made street food and off-brand powder beer", price: "1¤" },
  { label: "Sit in or take away food court meal with/without added nutrition", price: "5¤ / 2¤" },
  { label: "Fine dining with soil grown, organic* veggies", price: "10–50¤" },
  { label: "VIP chef restaurant with real meat", price: "40¤+" },
];
