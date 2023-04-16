import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import SideBar from "../components/Molecules/SideBar";
import { styles } from "./MainLayoutStyle";
import ConnectionButton from "../components/Atoms/ConnectionButton";


function MainLayout({ children }) {
  return (
    <Box style={styles.root}>
      <SideBar style={styles.sidebar} />
      <Box height="100vh" >
        <AppBar elevation={0} sx={styles.header}>
          <Toolbar position='fixed' sx={styles.toolbar}>
            <ConnectionButton/>
          </Toolbar>
        </AppBar>
        </Box>
        <div style={styles.content}>
        <Toolbar /> {/** empty toolbar so the content does not hide beneath */}
      {children}</div>
    </Box>
  );
}

export default MainLayout;
