import React from "react";
import { Typography, AppBar, Toolbar} from "@mui/material";
import SideBar from "../components/SideBar";
import { Box } from "@mui/material";
const styles = {
  root: {
    display : 'flex'
  },
  content: {
    width : '100%',
    background : '#f9f9f9'
  }, 
  header: {
    display : 'flex',
    flexDirection: 'column'
  }
};

function MainLayout({ children }) {


  return (
    <div style={styles.root}>
        <SideBar/>
        <div style={styles.header}>


   {/**   <AppBar 
    position="fixed"
      elevation={0}>
      <Toolbar>
        <Typography>THE HUB</Typography>
      </Toolbar>
      </AppBar>
      <Toolbar/> {/** empty toolbar so the content does not hide beneath */}
      </div>
    <div style={styles.content}>
      {children}
    </div>
    </div>
  );
}

export default MainLayout;
