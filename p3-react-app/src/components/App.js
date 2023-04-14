import React from "react";
import { useState, createContext } from "react";
import MainLayout from "../layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Games from "./Games/Games";
import Inventory from "./Inventory/Inventory";
import Collections from "./Collections/Collections";
import Marketplace from "./Marketplace/Marketplace";
import Settings from "./Settings";

export const AppContext = createContext();
// wallets  aa1aa2af3ql4 ,

const App = () => {
  const [wallet, setWallet] = useState("aa1aa2af3cs4");
  return (
    <AppContext.Provider value={{ wallet }}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/games" element={<Games />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </MainLayout>
    </AppContext.Provider>
  );
};
export default App;
