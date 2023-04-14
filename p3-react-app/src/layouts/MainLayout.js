import React from "react";
import { Typography, AppBar, Toolbar } from "@mui/material";
import SideBar from "./SideBar";
import { Box } from "@mui/material";
import { styles } from "./MainLayoutStyle";

function MainLayout({ children }) {
  return (
    <div style={styles.root}>
      <SideBar style={styles.sidebar} />
      <div>
        <AppBar elevation={0} style={styles.header}>
          <Toolbar position='fixed'>
            <Typography>THE HUB</Typography>
          </Toolbar>
        </AppBar>
        </div>
        <div style={styles.content}>
        <Toolbar /> {/** empty toolbar so the content does not hide beneath */}
      {children}</div>
    </div>
  );
}

export default MainLayout;
