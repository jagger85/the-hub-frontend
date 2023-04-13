import React from "react";
import { useState, createContext } from "react";
import MainLayout from "../layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Games from "./Games";
import Inventory from "./Inventory";
import Collections from "./Collections/Collections";
import Marketplace from "./Marketplace/Marketplace";
import Settings from "./Settings";

export const AppContext = createContext();
// wallets  aa1aa2af3ql4 ,

const App = () => {
  const [endpoint, setEndpoint] = useState("http://ultra.api.eosnation.io");
  const [network, setNetwork] = useState("mainnet");
  const [wallet, setWallet] = useState("aa1aa2af3cs4");
  return (
    <AppContext.Provider value={{ wallet, network, endpoint }}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/games" element={<Games />} />
          <Route path="/collections" element={<Collections />} />
          <Route
            path="/settings"
            element={
              <Settings
                network={network}
                setNetwork={setNetwork}
                endpoint={endpoint}
                setEndpoint={setEndpoint}
              />
            }
          />
        </Routes>
      </MainLayout>
    </AppContext.Provider>
  );
};
export default App;
