import { Routes, Route, Navigate } from 'react-router-dom';
import { AppShell, PageArea } from './App.styles';

import CyCity from './pages/CyCity/CyCity';
import Combat from './pages/Combat/Combat';
import Characters from './pages/Characters/Characters';
import Market from './pages/Market/Market';
import RetComDevice from './pages/RetComDevice/RetComDevice';
import Artwork from './pages/Artwork/Artwork';
import NetLog from './pages/NetLog/NetLog';

import { CyborgSocketProvider } from '@hooks/useCyborgSocket';
import { GameMessagesProvider } from '@context/GameMessagesContext';
import { CharacterProvider } from '@context/CharacterContext';
import TransferReceiver from '@components/TransferReceiver';
import NavBar from '@components/Nav/NavBar';

export default function App() {
  return (
    <CyborgSocketProvider>
      <GameMessagesProvider>
        <CharacterProvider>
          <AppShell>
            <NavBar />
            <PageArea>
              <Routes>
                <Route path="/" element={<CyCity />} />
                <Route path="/rules" element={<Navigate to="/combat" replace />} />
                <Route path="/combat" element={<Combat />} />
                <Route path="/punks/:slug?" element={<Characters />} />
                <Route path="/characters/*" element={<Navigate to="/punks" replace />} />
                <Route path="/market" element={<Market />} />
                <Route path="/artwork" element={<Artwork />} />
                <Route path="/retcom" element={<RetComDevice />} />
                <Route path="/netlog" element={<NetLog />} />
              </Routes>
            </PageArea>
          </AppShell>
          {/* Global — listens for incoming device transfers on any page */}
          <TransferReceiver />
        </CharacterProvider>
      </GameMessagesProvider>
    </CyborgSocketProvider>
  );
}
