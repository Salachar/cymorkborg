import Icons from '@utils/icons';

import {
  Line,
  InsetBox,
  NodePreview,
} from '@terminal/TerminalComponents';

import {
  Message,
} from "@terminal/retcomdevice"


import TerminalWallet from '@terminal/retcomdevice/Basic/TerminalWallet/TerminalWallet';
import GamesBanner from '@terminal/retcomdevice/Games/GamesBanner/GamesBanner';
import MinesweeperGame from '@terminal/retcomdevice/Games/MinesweeperGame/MinesweeperGame';
import MemoryGame from '@terminal/retcomdevice/Games/MemoryGame/MemoryGame';
import CyberPoker from '@terminal/retcomdevice/Games/CyberPoker/CyberPoker';

import { CY_CITY_NETWORK } from './cy_public';
import { STREET_GUIDE_COMMANDS } from './street_guide';

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
        <Line yellow> · Keeps track of all collected credits and items in the RetComDevice</Line>
        <Line yellow> · Extracted credits/items are transferable to characters here</Line>
      </NodePreview>
    ),
    content: <TerminalWallet />,
  },
  "Cy City District Network": {
    favicon: <Icons.Map />,
    preview: (
      <NodePreview>
        <Line>
          City district access. Each district contains local networks, facilities, and secured nodes.
        </Line>
        <Line teal top>Select a district to begin.</Line>
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
        <Line red span bold>THREAT: CRITICAL</Line>
        <Line smoke span style={{ fontSize: '0.6rem' }}> · Population 2.8M official, 4M+ estimated · Pre-Incident ruins. Corporate glass. Slum fires.</Line>
        <Line top>
          Public access terminal. City news, weather, corp announcements.{' '}
          <Line span style={{ opacity: 0.6 }}>No secured nodes — just what they want you to know.</Line>
        </Line>
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
        preview: (
          <NodePreview>
            <Line pink> · Minesweeper</Line>
          </NodePreview>
        ),
      },

      "Play Netrunner Memory Deck": {
        type: "component",
        content: <MemoryGame gridSize={4} tileSize={4} />,
        preview: (
          <NodePreview>
            <Line pink> · Memory match </Line>
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
            <Line pink> · Luigi Picture Poker clone</Line>
          </NodePreview>
        ),
      },
    }
  },
  ...STREET_GUIDE_COMMANDS,
  "Help": {
    favicon: <Icons.Help />,
    preview: (
      <NodePreview>
        <Line smoke> · Tips and guidance for using the RetCom Device</Line>
      </NodePreview>
    ),
    content: (
      <Message
        title="RCD-7"
        subtitle="QUICK REFERENCE"
        message="RetCom Device User Guide"
        theme="casual"
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
        <InsetBox title="BATTERY SAVER">
          <Line neon>• Tap the battery icon in the header to toggle Battery Saver</Line>
          <Line neon>• Disables all animations site-wide — useful on older devices</Line>
          <Line neon>• Setting is saved and persists between sessions</Line>
        </InsetBox>
        <InsetBox title="PASSWORDS & ICE">
          <Line smoke>• PW nodes require a password — keyboard shows only valid characters</Line>
          <Line smoke>• Decoy keys are flagged when present</Line>
          <Line smoke>• ICE nodes use a hacking minigame — difficulty varies</Line>
          <Line smoke>• Bypassed nodes stay unlocked across sessions</Line>
        </InsetBox>
      </Message>
    ),
  },
};

export default CY_CITY_PORTAL;
