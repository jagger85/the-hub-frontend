import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Organisms/Dashboard";
import TestArea from "./TestArea/TestArea";
import Inventory from "./Organisms/Inventory";
import Collections from "./Organisms/Collections";
import CollectionInfo from './Organisms/CollectionInfo';
import Marketplace from "./Organisms/Marketplace";
import Settings from "./Organisms/Settings";
import { CssBaseline } from "@mui/material";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material";
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import { colors } from "../theme";


// wallets  aa1aa2af3ql4 ,

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <CssVarsProvider>
    <CssBaseline/>
    <GlobalStyles styles={{
      html: {
        // ...
      },
      body: {
        backgroundColor: colors.background[900],
      },
    }}/>
    </CssVarsProvider>
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
