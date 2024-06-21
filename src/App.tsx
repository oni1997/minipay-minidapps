import React, { useState } from 'react';
import WalletConnection from './dApps/WalletConnection';
import CurrentTime from './dApps/CurrentTime';
import CUSDTransfer from './dApps/TransferCUSD';
import './App.css';

const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="app">
      <header>
        <CurrentTime />
        <WalletConnection isConnected={isConnected} setIsConnected={setIsConnected} />
      </header>
      {isConnected && <CUSDTransfer />}
    </div>
  );
};

export default App;
