import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState, createContext } from 'react';

import Home from './pages/Home';
import Rules from './pages/Rules';
import Combat from './pages/Combat';
import Classes from './pages/Classes';
import RetComDevice from './pages/RetComDevice';
import Artwork from './pages/Artwork';

// Scroll position storage
const scrollPositions = {};

export const NavExtraContext = createContext({ setNavExtra: () => {} });

export default function App() {
  const location = useLocation();
  const contentRef = useRef(null);
  const [navExtra, setNavExtra] = useState(null);

  // Save scroll position before route changes
  useEffect(() => {
    const currentPath = location.pathname;

    const isRetComDevice = currentPath === '/retcomdevice';
    const isClasses = currentPath.startsWith('/classes');

    if (isRetComDevice || isClasses) return;

    if (contentRef.current && scrollPositions[currentPath] !== undefined) {
      requestAnimationFrame(() => {
        if (contentRef.current) {
          contentRef.current.scrollTop = scrollPositions[currentPath];
        }
      });
    }

    return () => {
      if (contentRef.current && !isRetComDevice && !isClasses) {
        scrollPositions[currentPath] = contentRef.current.scrollTop;
      }
    };
  }, [location.pathname]);

  return (
    <NavExtraContext.Provider value={{ setNavExtra }}>
      <div className="flex flex-col h-screen overflow-hidden">
        {/* Fixed Cyberpunk Nav */}
        <nav className="relative bg-black border-b border-cy-cyan/30 overflow-hidden flex-shrink-0">
          {/* Background grid pattern */}
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

          <div className="relative flex items-center h-16 px-4">
            <CyNavLink to="/" label="Home" color="cyan" end />
            <CyNavLink to="/artwork" label="Artwork" color="yellow" />
            <CyNavLink to="/rules" label="Rules" color="yellow" />
            <CyNavLink to="/combat" label="Combat" color="pink" />
            <CyNavLink to="/classes" label="Classes" color="pink" />
            <CyNavLink to="/retcomdevice" label="RetComDevice" color="green" />

            {/* Nav extra slot — right side */}
            {navExtra && (
              <div className="ml-auto flex-shrink-0">
                {navExtra}
              </div>
            )}
          </div>

          {/* Bottom glowing line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cy-cyan to-transparent" />
        </nav>

        {/* Scrollable content area */}
        {location.pathname === '/retcomdevice' ? (
          <Routes>
            <Route path="/retcomdevice" element={<RetComDevice />} />
          </Routes>
        ) : (
          <div ref={contentRef} className="flex-1 overflow-y-auto overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/combat" element={<Combat />} />
              <Route path="/classes/:slug?" element={<Classes />} />
              <Route path="/artwork" element={<Artwork />} />
            </Routes>
          </div>
        )}
      </div>
    </NavExtraContext.Provider>
  );
}

// Reusable CY_BORG nav link component
function CyNavLink({ to, label, color, end = false }) {
  const colorMap = {
    cyan: {
      active: 'text-cy-cyan',
      bg: 'from-cy-cyan/20 to-cy-cyan/10',
      border: 'border-cy-cyan/50',
      shadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)'
    },
    pink: {
      active: 'text-cy-pink',
      bg: 'from-cy-pink/20 to-cy-pink/10',
      border: 'border-cy-pink/50',
      shadow: '0 0 20px rgba(255, 0, 128, 0.3), inset 0 0 20px rgba(255, 0, 128, 0.1)'
    },
    yellow: {
      active: 'text-cy-yellow',
      bg: 'from-cy-yellow/20 to-cy-yellow/10',
      border: 'border-cy-yellow/50',
      shadow: '0 0 20px rgba(255, 255, 0, 0.3), inset 0 0 20px rgba(255, 255, 0, 0.1)'
    },
    green: {
      active: 'text-cy-green',
      bg: 'from-cy-green/20 to-cy-green/10',
      border: 'border-cy-green/50',
      shadow: '0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.1)'
    }
  };

  const colors = colorMap[color];

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
