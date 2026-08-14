import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@retcom/RetComComponents';

import {
  Node,
} from "@retcom";

import Wallet from '@pages/RetComDevice/components/Wallet';
import GamesBanner from '@retcom/Games/GamesBanner/GamesBanner';
import MinesweeperGame from '@retcom/Games/MinesweeperGame/MinesweeperGame';
import MemoryGame from '@retcom/Games/MemoryGame/MemoryGame';
import CyberPoker from '@retcom/Games/CyberPoker/CyberPoker';

import { CY_CITY_NETWORK } from './cy_public';

import BRIEFINGS_COMMANDS from './briefings';

import G0_COMMANDS from '../districts/g0/g0';
import NORTH_CENTRAL_COMMANDS from '../districts/north_central/north_central';
import PORTS_COMMANDS from "../districts/ports/ports";
import SOUTH_CENTRAL_COMMANDS from '../districts/south_central/south_central';
import THE_HILLS_COMMANDS from '../districts/the_hills/the_hills';
import THE_INBETWEENS_COMMANDS from '../districts/the_inbetweens/the_inbetweens';
import THE_INDUSTRIES_COMMANDS from '../districts/the_industries/the_industries';
import THE_SLUMS_COMMANDS from '../districts/the_slums/the_slums';
import UNDERSJON_COMMANDS from '../districts/undersjon/undersjon';
import WATERWAYS_COMMANDS from '../districts/waterways/waterways';

export const CY_CITY_PORTAL = {
  ...BRIEFINGS_COMMANDS,
  "Wallet": {
    favicon: <Icons.Wallet />,
    preview: (
      <NodePreview>
        <Line smoke> · Keeps track of all collected credits and items in the RetComDevice</Line>
        <Line smoke> · Extracted credits/items are transferable to characters here</Line>
      </NodePreview>
    ),
    content: <Wallet />,
  },
  "Cy City District Network": {
    favicon: <Icons.Map />,
    preview: (
      <NodePreview>
        <Line smoke> · Population 2.8M official, 4M+ estimated · Pre-Incident ruins. Corporate glass. Slum fires.</Line>
        <Line smoke> · City district access. Each district contains local networks, facilities, and secured nodes.</Line>
      </NodePreview>
    ),
    related_commands: {
      ...NORTH_CENTRAL_COMMANDS,
      ...SOUTH_CENTRAL_COMMANDS,
      ...PORTS_COMMANDS,
      ...THE_INBETWEENS_COMMANDS,
      ...THE_SLUMS_COMMANDS,
      ...THE_HILLS_COMMANDS,
      ...THE_INDUSTRIES_COMMANDS,
      ...UNDERSJON_COMMANDS,
      ...WATERWAYS_COMMANDS,
      ...G0_COMMANDS,
    },
  },
  "Cy Public": {
    favicon: <Icons.City />,
    preview: (
      <NodePreview>
        <Line smoke> · Public access terminal. City news, weather, corp announcements.</Line>
      </NodePreview>
    ),
    content: (
      <div
        style={{
          border: '1.5px solid rgba(239,68,68,0.4)',
          borderRadius: 'var(--border-radius-lg)',
          overflow: 'hidden',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: 'var(--color-background-secondary)',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid rgba(239,68,68,0.3)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(2rem, 8vw, 3rem)',
                fontWeight: 500,
                color: 'rgb(239,68,68)',
                letterSpacing: '0.1em',
              }}
            >
              CY
            </div>
            <div style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontSize: '11px',
                  color: 'var(--color-text-tertiary)',
                  marginBottom: '2px',
                }}
              >
                POPULATION
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--color-text-primary)',
                }}
              >
                2.8M official · 4M+ estimated
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)',
              fontStyle: 'italic',
              marginTop: '0.25rem',
            }}
          >
            "A city of limitless opportunity."
          </div>
        </div>

        {/* Permanent advisories */}
        <div
          style={{
            padding: '0.85rem 1.25rem',
            borderBottom: '0.5px solid var(--color-border-tertiary)',
          }}
        >
          <div
            style={{
              fontSize: '10px',
              color: 'var(--color-text-tertiary)',
              letterSpacing: '0.1em',
              marginBottom: '0.5rem',
            }}
          >
            PERMANENT ADVISORIES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div style={{ fontSize: '0.75rem', color: 'rgb(251,191,36)' }}>
              • WATER — Potability varies by district. Cynergy filtered tiers recommended. Canal water not suitable for consumption.
            </div>
            <div style={{ fontSize: '0.75rem', color: 'rgb(251,191,36)' }}>
              • AIR — Respirator use advised in Mosscroft and surrounding industrial zones at all times.
            </div>
            <div style={{ fontSize: '0.75rem', color: 'rgb(239,68,68)' }}>
              • G0 PERIMETER — Permanent quarantine zone. Do not approach the wall. Trespassers will not be recovered.
            </div>
          </div>
        </div>
      </div>
    ),
    related_commands: {
      ...CY_CITY_NETWORK,
    },
  },
  "Cy Games": {
    favicon: <Icons.Games />,
    preview: (
      <NodePreview>
        <Line smoke> · 3 games available — Nanobomb Defusal, Netrunner Memory Deck, and Cyber Poker.</Line>
        <Line smoke> · Games are not small tablet/phone friendly at the moment</Line>
      </NodePreview>
    ),
    content: (
      <GamesBanner />
    ),
    related_commands: {
      "Play Nanobomb Defusal": {
        type: "component",
        content: <MinesweeperGame width={20} height={10} tileSize={2} />,
        preview: (
          <NodePreview>
            <Line smoke> · Minesweeper</Line>
          </NodePreview>
        ),
      },

      "Play Netrunner Memory Deck": {
        type: "component",
        content: <MemoryGame gridSize={4} tileSize={4} />,
        preview: (
          <NodePreview>
            <Line smoke> · Memory match </Line>
          </NodePreview>
        ),
      },

      "Play Netrunner Memory Deck (Hard)": {
        type: "component",
        content: <MemoryGame gridSize={6} tileSize={3.5} />,
      },

      "Play Cyber Poker": {
        type: "component",
        content: <CyberPoker />,
        preview: (
          <NodePreview>
            <Line smoke> · Luigi Picture Poker clone</Line>
          </NodePreview>
        ),
      },
    }
  },
  "Help": {
    favicon: <Icons.Help />,
    preview: (
      <NodePreview>
        <Line smoke> · Tips and guidance for using the RetCom Device</Line>
      </NodePreview>
    ),
    content: (
      <Node
        title="RCD-7 - QUICK REFERENCE"
        subtitle="RetCom Device User Guide"
      >
        <InsetBox title="NAVIGATION">
          <Line cyan>• Tap any node to expand or collapse it</Line>
          <Line cyan>• Nodes with ▶ contain sub-nodes inside</Line>
          <Line cyan>• Eye icon toggles content visibility without closing</Line>
          <Line cyan>• Double-tap any content panel to expand from partial to full</Line>
        </InsetBox>
        <InsetBox title="WALLET">
          <Line yellow>• Tracks all extracted credits and items</Line>
          <Line yellow>• TAKE / CLAIM items individually or use the section button for all</Line>
          <Line yellow>• Open Wallet and TRANSFER to move assets into a character's inventory</Line>
          <Line yellow>• CLEAR wipes the wallet without transferring</Line>
        </InsetBox>
      </Node>
    ),
  },
};

export default CY_CITY_PORTAL;
