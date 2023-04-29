import React from "react";
import { Box, Grid } from "@mui/material";
import SideBar from "../components/Molecules/SideBar";
import { styles } from "./MainLayoutStyle";
import ConnectionButton from "../components/Atoms/ConnectionButton";


function MainLayout({ children }) {
  return (
    <Box sx={styles.root}>
    <ConnectionButton/>
    <SideBar style={styles.sidebar}/>
    <Grid container sx={styles.content}>
    {children}
    </Grid>
    </Box>
    
  );
}

export default MainLayout;
