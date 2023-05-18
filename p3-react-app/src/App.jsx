import React from "react";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Organisms/Dashboard";
import TestArea from "./components/TestArea/TestArea";
import Inventory from "./components/Organisms/Inventory";
import Collections from "./components/Organisms/Collections";
import CollectionInfo from './components/Organisms/CollectionInfo';
import Marketplace from "./components/Organisms/Marketplace";
import Settings from "./components/Organisms/Settings";
import { ThemeProvider } from "@mui/material";
import {  theme } from "./theme";

// wallets  aa1aa2af3ql4 ,

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/test" element={<TestArea />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collection/:id" element={<CollectionInfo />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
};
export default App;
