import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Organisms/Dashboard";
import Games from "./Games/Games";
import Inventory from "./Organisms/Inventory";
import Collections from "./Organisms/Collections";
import CollectionInfo from "./Collections/CollectionInfo";
import Marketplace from "./Organisms/Marketplace";
import Settings from "./Organisms/Settings";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material";

// wallets  aa1aa2af3ql4 ,

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/games" element={<Games />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collection/:id" element={<CollectionInfo />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
};
export default App;
