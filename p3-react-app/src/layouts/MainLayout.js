import React from "react";
import { Drawer, Typography, AppBar, Toolbar} from "@mui/material";
const drawerWidth = 240;

const styles = {
  drawer: {
    width: drawerWidth,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      }
  },
  root: {
    display : 'flex'
  }
};

function MainLayout({ children }) {
  return (
    <div style={styles.root}>
      <Drawer sx={styles.drawer} variant="permanent" anchor="left">
        <Typography variant="h5">THE HUB</Typography>
      </Drawer>
      <AppBar 
      position='fixed'
      elevation={0}>
      <Toolbar>
        <Typography>THE HUB</Typography>
      </Toolbar>
      </AppBar>
      <Toolbar/> {/** empty toolbar so the content does not hide beneath */}
   
    <div>
      {children}
      </div>
    </div>
  );
}

export default MainLayout;
