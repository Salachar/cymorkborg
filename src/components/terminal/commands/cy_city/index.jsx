import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import CityPortal from './CityPortal';

import BIGMOSSE_PORTS_COMMANDS from "../bigmosse_ports/bigmosse_ports";
import THE_INBETWEENS_DISTRICT from '../the_inbetweens/the_inbetweens';
import CENTRAL_DISTRICT from '../central_district/central_district';
import SOUTH_CENTRAL_DISTRICT_COMMANDS from '../south_central_district/south_central_district';

import TerminalWallet from '@terminal/retcomdevice/Basic/TerminalWallet/TerminalWallet';
import GamesBanner from '@terminal/retcomdevice/Games/GamesBanner/GamesBanner';
import MinesweeperGame from '@terminal/retcomdevice/Games/MinesweeperGame/MinesweeperGame';
import MemoryGame from '@terminal/retcomdevice/Games/MemoryGame/MemoryGame';
import CyberPoker from '@terminal/retcomdevice/Games/CyberPoker/CyberPoker';

import { CY_CITY_NETWORK } from "./cy_public";

// Central District - <Line span cyan> · Corporate towers. White collar crime. SecCorps on every corner.</Line>
// The Inbetweens - <Line span smoke> · Endless tenements. Cubicle zombies. Ads on every surface.</Line>
// Bigmosse - <Line span red> · Gang wars. Cult activity. G0 scars that never healed.</Line>
// Ports - <Line span yellow> · Black market. Hedonism. Gunfights drowned out by bass.</Line>
// The Hills / Galgbacken - <Line span cyan> · Gated villas. Old money. The people who built this mess.</Line>
// Mosscroft / Industrial - <Line span smoke> · Toxic smog. Factory drones. Industry feeding Cy's consumption.</Line>
// The Fringe - <Line span red> · Unregistered. Unmapped. Where the city bleeds into wasteland.</Line>
// South Central - <Line span yellow> · Alliansen territory. Corporate law. Chrome and concrete.</Line>
// The 55 - <Line span cyan> · Vertical city within a city. 55 floors of everything.</Line>

export const CY_CITY_PORTAL = {
  "Wallet": {
    favicon: <Icons.Wallet />,
    preview: (
      <NodePreview>
        <span style={{ color: 'rgb(251, 191, 36)' }}>★</span> Keeps track of all collected credits and items in the RetComDevice
      </NodePreview>
    ),
    content: <TerminalWallet />,
  },
  "Cy Public": {
    favicon: <Icons.City />,
    preview: (
      <NodePreview>
        <Line red span bold>THREAT: CRITICAL</Line>
        {' · '}Population 2.8M official, 4M+ estimated
        {' · '}Pre-Incident ruins. Corporate glass. Slum fires.
        <Line top>
          Public access terminal. City news, weather, corp announcements.{' '}
          <Line span style={{ opacity: 0.6 }}>No secured nodes — just what they want you to know.</Line>
        </Line>
      </NodePreview>
    ),
    content: (
      <CityPortal
        cityName="CY"
        cityId="MEGACITY-SE-EUR-01"
        tagline="The city that shouldn't exist. But it does. And it's consuming everything."
        population="2.8 million (official) / 4+ million (estimated)"
        yearFounded="Pre-Incident (exact date lost)"
        threatLevel="CRITICAL"
        majorThreats={[
          "G0 - Nanomantic plague zone. Quarantine failing. Infection spreading.",
          "Corporate warfare - Megacorps fight proxy wars through gangs, SecCorps, and market manipulation",
          "Gang conflicts - Virid Vipers, Heirs of Kergoz, Stone Eels, and dozens more in endless violence",
          "Infrastructure collapse - Pre-Incident systems failing. No one knows how to fix them.",
          "The Incident aftermath - Radiation, nano-contamination, reality distortions. The city remembers.",
        ]}
        atmosphere="Cy shouldn't exist. The Incident should have killed it. Instead, it metastasized.
        Pre-Incident ruins tower over post-Incident brutalism. Corporate glass reflects slum fires.
        The rich ascend into climate-controlled penthouses while the poor drown in nanomold-infested basements.
        It's a vertical hierarchy made literal: the higher you live, the longer you survive.
        The city consumes everything - hope, humanity, history - and excretes chrome, concrete, and corpses.
        Welcome to Cy. You were born here. You'll die here. There is no escape."
      >
        <InsetBox title="THE INCIDENT (Year Zero):">
          <Line red bold>Nobody knows what happened.</Line>
          <Line smoke>
            Official story: Industrial accident at Cy Labs. Nanomantic containment breach.
            Localized disaster. City quarantined. Rebuilt. Success story.
          </Line>
          <Line yellow style={{ marginTop: '0.5rem' }}>
            Unofficial story: Reality tore open. Something came through. The Incident wasn't an accident - it was an arrival.
            G0 isn't contamination - it's occupied territory. The city survived, but it's not the same city anymore.
          </Line>
          <Line red style={{ marginTop: '0.5rem' }}>
            What really happened: [DATA CORRUPTED - SECTOR CLEARANCE REQUIRED]
          </Line>
        </InsetBox>

        <InsetBox title="ECONOMIC STRATIFICATION:">
          <Line neon bold>The Higher You Live, The Longer You Survive</Line>
          <Line cyan>• THE PEAKS (Ultra-wealthy): Pre-Incident villas, penthouse clouds. Climate controlled. Private security. Immortality research.</Line>
          <Line cyan>• THE HEIGHTS (Corporate): Executive suites, corporate towers. Clean air. Premium healthcare. Genetic optimization.</Line>
          <Line yellow>• THE MIDDLE (Salary workers): Mid-rise apartments, The 55's upper floors. Filtered air. Basic healthcare. Chrome loans.</Line>
          <Line yellow>• THE LOWS (Service workers): Capsule coffins, basement levels. Recycled air. Street clinics. Survival mode.</Line>
          <Line red>• THE DEPTHS (The expendable): Slums, underground, fringe camps. Toxic air. No healthcare. Life expectancy: 35.</Line>
        </InsetBox>

        <InsetBox title="CORPORATE DOMINANCE:">
          <Line neon>The megacorps don't just own Cy - they ARE Cy.</Line>
          <Line cyan>• Alliansen Inc. - Manufacturing, weapons, chrome, real estate. Everywhere.</Line>
          <Line cyan>• TG Labs - Research, biotech, AI, nanomantic containment (allegedly). The Enemy.</Line>
          <Line cyan>• Spectral FT Banks - Finance, insurance, debt collection. They own your debt. They own you.</Line>
          <Line cyan>• Cynergy Water & Power - Utilities monopoly. Turn off your water. Turn off your life.</Line>
          <Line cyan>• And 200+ others fighting for dominance in an endless corporate war.</Line>
        </InsetBox>

        <InsetBox title="SURVIVAL GUIDE:">
          <Line yellow>1. Don't go to G0. Ever. No exceptions. No heroics. Just death.</Line>
          <Line yellow>2. Pay your protection money. Gang, SecCorps, building manager - doesn't matter. Pay or die.</Line>
          <Line yellow>3. Chrome is survival. But chrome is debt. But debt is death. Choose carefully.</Line>
          <Line yellow>4. Trust no one. Especially people offering help. Especially people with money.</Line>
          <Line yellow>5. The higher floors have cleaner air but higher rent. The lower floors have cheaper rent but toxic air. Pick your poison.</Line>
          <Line yellow>6. If the Heirs of Kergoz invite you to something, RUN. Cult recruiters don't take no for an answer.</Line>
          <Line yellow>7. The feeds lie. The corps lie. The government lies. Reality itself might be lying. Believe nothing.</Line>
          <Line yellow>8. There is no escape. The city won't let you leave. Accept it or break trying.</Line>
        </InsetBox>

        <Line smoke small style={{ fontStyle: 'italic', textAlign: 'center' }}>
          "Cy is a wound that won't heal. We're all just maggots feeding on the rot."
          - Unknown street preacher, found dead shortly after broadcast
        </Line>
      </CityPortal>
    ),
    related_commands: {
      ...CY_CITY_NETWORK,
    },
  },
  "Cy City Network": {
    favicon: <Icons.Map />,
    preview: (
      <NodePreview>
        <Line>
          <Line teal span bold>7 districts · 40+ nodes</Line>
          {' '}— corps, gangs, black markets, and worse.
        </Line>
        <Line top>
          Expand a district to find locations. Locations have{' '}
          <Line yellow span>secured nodes</Line>
          {' '}— hack smart systems, crack safes, access cameras, find hidden credits and items. Some are password locked. Some need ICE broken first.
        </Line>
        <Line teal top>Pick a district and start digging. Everything useful is behind something.</Line>
      </NodePreview>
    ),
    content: (
      <CityPortal
        cityName="Districts"
        cityId="MEGACITY-SE-EUR-01"
        districts={[
          {
            name: "Central District",
            description: "Where money lives and chrome shines. Corporate towers, penthouses, and SecCorps on every corner.",
            population: "~200,000"
          },
          {
            name: "The Inbetweens",
            description: "Mid-tier sprawl. The 55 dominates. Endless tenements, hyperlocal gentrification, and desperate commerce.",
            population: "~800,000"
          },
          {
            name: "The Slums (Bigmosse & Others)",
            description: "G0 scars. Gang wars. Cult activity. Where the Incident hit hardest and never healed.",
            population: "~600,000"
          },
          {
            name: "Ports District",
            description: "Black market paradise. Hedonism meets desperation. Where goods and bodies are trafficked freely.",
            population: "~400,000"
          },
          {
            name: "The Hills (Galgbacken)",
            description: "Pre-Incident villas. Ultra-wealthy enclaves. Where Cy's true elite hide from the city they created.",
            population: "~50,000"
          },
          {
            name: "Industrial Zones",
            description: "Automated factories, data centers, corporate campuses. More machines than people.",
            population: "~100,000 workers"
          },
          {
            name: "The Fringe",
            description: "Unregistered settlements. Squatter camps. Where the city bleeds into the wasteland.",
            population: "Unknown (estimates 500k+)"
          },
        ]}
      >
        <InsetBox title="ACCESS MAJOR DISTRICTS:">
          <Line neon>→ Central District - Where money rules</Line>
          <Line neon>→ The Inbetweens - Where most people survive</Line>
          <Line neon>→ Bigmosse & Ports - Where danger thrives</Line>
          <Line neon>→ The 55 (Stack #95563) - Vertical city within a city</Line>
          <Line smoke small style={{ marginTop: '0.75rem' }}>
            Select a district to access detailed information, locations, and navigation.
          </Line>
        </InsetBox>
      </CityPortal>
    ),
    related_commands: {
      ...BIGMOSSE_PORTS_COMMANDS,
      ...SOUTH_CENTRAL_DISTRICT_COMMANDS,
      ...THE_INBETWEENS_DISTRICT,
      ...CENTRAL_DISTRICT,
    },
  },
  "Cy Games": {
    favicon: <Icons.Games />,
    preview: (
      <NodePreview>
        <span style={{ color: 'rgb(0, 255, 65)' }}>3 games</span>
        {' '}available — Nanobomb Defusal, Netrunner Memory Deck, and Cyber Poker.
        <Line red top>* Games are not small tablet/phone friendly at the moment</Line>
      </NodePreview>
    ),
    content: (
      <GamesBanner />
    ),
    related_commands: {
      "Play Nanobomb Defusal": {
        type: "component",
        content: <MinesweeperGame width={20} height={10} tileSize={2} />,
      },

      "Play Netrunner Memory Deck": {
        type: "component",
        content: <MemoryGame gridSize={4} tileSize={4} />,
      },

      "Play Netrunner Memory Deck (Hard)": {
        type: "component",
        content: <MemoryGame gridSize={6} tileSize={3.5} />,
      },

      "Play Cyber Poker": {
        type: "component",
        content: <CyberPoker />,
      },
    }
  },
};

export default CY_CITY_PORTAL;
