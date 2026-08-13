import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState, createContext } from 'react';

import CyCity from './pages/CyCity';
import Rules from './pages/Rules';
import Combat from './pages/Combat';
import Characters from './pages/Characters';
import RetComDevice from './pages/RetComDevice';
import Artwork from './pages/Artwork';
import NetLog from './pages/NetLog';

import { CyborgSocketProvider } from '@hooks/useCyborgSocket';
import { GameMessagesProvider } from '@context/GameMessagesContext';
import TransferReceiver from '@components/TransferReceiver';
import MessageSubheader from '@components/Connection/MessageSubheader';

const scrollPositions = {};
const FULL_SCREEN_ROUTES = ['/retcom', '/netlog'];

export const NavExtraContext = createContext({ setNavExtra: () => {} });

const COLOR_MAP = {
  cyan: {
    active: 'text-cy-cyan',
    bg: 'from-cy-cyan/20 to-cy-cyan/10',
    border: 'border-cy-cyan/50',
    shadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)',
  },
  pink: {
    active: 'text-cy-pink',
    bg: 'from-cy-pink/20 to-cy-pink/10',
    border: 'border-cy-pink/50',
    shadow: '0 0 20px rgba(255, 0, 128, 0.3), inset 0 0 20px rgba(255, 0, 128, 0.1)',
  },
  yellow: {
    active: 'text-cy-yellow',
    bg: 'from-cy-yellow/20 to-cy-yellow/10',
    border: 'border-cy-yellow/50',
    shadow: '0 0 20px rgba(255, 255, 0, 0.3), inset 0 0 20px rgba(255, 255, 0, 0.1)',
  },
  green: {
    active: 'text-cy-green',
    bg: 'from-cy-green/20 to-cy-green/10',
    border: 'border-cy-green/50',
    shadow: '0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.1)',
  },
};

export default function App() {
  const location = useLocation();
  const contentRef = useRef(null);
  const [navExtra, setNavExtra] = useState(null);

  const isFullScreen = FULL_SCREEN_ROUTES.includes(location.pathname);

  useEffect(() => {
    const currentPath = location.pathname;
    const isCharacters = currentPath.startsWith('/characters');
    if (isFullScreen || isCharacters) return;

    if (contentRef.current && scrollPositions[currentPath] !== undefined) {
      requestAnimationFrame(() => {
        if (contentRef.current) {
          contentRef.current.scrollTop = scrollPositions[currentPath];
        }
      });
    }

    return () => {
      if (contentRef.current && !isFullScreen && !isCharacters) {
        scrollPositions[currentPath] = contentRef.current.scrollTop;
      }
    };
  }, [location.pathname]);

  return (
    <CyborgSocketProvider>
      <GameMessagesProvider>
        <NavExtraContext.Provider value={{ setNavExtra }}>
          <div className="flex flex-col h-screen overflow-hidden">
            <nav className="relative bg-black border-b border-cy-cyan/30 overflow-hidden flex-shrink-0">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
              <div className="relative flex items-center h-16 px-4 overflow-scroll">
                <CyNavLink to="/" label="CY_" color="cyan" end />
                <CyNavLink to="/artwork" label="Artwork" color="yellow" />
                <CyNavLink to="/rules" label="Rules" color="yellow" />
                <CyNavLink to="/combat" label="Combat" color="pink" />
                <CyNavLink to="/characters" label="Characters" color="pink" />
                <CyNavLink to="/retcom" label="RetCom" color="green" />
                <CyNavLink to="/netlog" label="Net Log" color="green" />

                {navExtra && (
                  <div className="ml-auto flex-shrink-0">{navExtra}</div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cy-cyan to-transparent" />
            </nav>

            {/* Global message subheader — always visible */}
            <MessageSubheader />

            {isFullScreen ? (
              <Routes>
                <Route path="/retcom" element={<RetComDevice />} />
                <Route path="/netlog" element={<NetLog />} />
              </Routes>
            ) : (
              <div ref={contentRef} className="flex-1 overflow-y-auto overflow-x-hidden">
                <Routes>
                  <Route path="/" element={<CyCity />} />
                  <Route path="/rules" element={<Rules />} />
                  <Route path="/combat" element={<Combat />} />
                  <Route path="/characters/:slug?" element={<Characters />} />
                  <Route path="/artwork" element={<Artwork />} />
                </Routes>
              </div>
            )}
          </div>

          {/* Global — listens for incoming device transfers on any page */}
          <TransferReceiver />
        </NavExtraContext.Provider>
      </GameMessagesProvider>
    </CyborgSocketProvider>
  );
}

function CyNavLink({ to, label, color, end = false }) {
  const colors = COLOR_MAP[color];

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `
        relative px-6 py-3 mr-2
        font-bold uppercase tracking-wider text-sm
        transition-all duration-300
        ${isActive ? colors.active : 'text-gray-400 hover:text-gray-200'}
      `}
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <div
              className={`absolute inset-0 bg-gradient-to-r ${colors.bg} transform -skew-x-12 border ${colors.border}`}
              style={{ boxShadow: colors.shadow }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </>
      )}
    </NavLink>
  );
}
