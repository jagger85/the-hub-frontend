import React from "react";
import { Typography, AppBar, Toolbar} from "@mui/material";
import SideBar from "../components/SideBar";

const styles = {
  root: {
    display : 'flex'
  }
};

function MainLayout({ children }) {


  return (
    <div style={styles.root}>
        <SideBar/>
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
