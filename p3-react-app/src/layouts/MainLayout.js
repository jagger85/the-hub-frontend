import React from "react";
import { Drawer, Typography, AppBar, Toolbar} from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
import CollectionsIcon from '@mui/icons-material/Collections';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SettingsIcon from '@mui/icons-material/Settings';
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

    const menuItems = [
        {
            text : 'Dashboard',
            icon : <DashboardIcon color='black'/>,
            path : '/'
            
        },
        {
            text : 'Inventory',
            icon : <InventoryIcon color='black'/>,
            path : '/'
            
        },
        {
            text : 'Marketplace',
            icon : <StoreIcon color='black'/>,
            path : '/'
            
        },
        {
            text : 'Collections',
            icon : <CollectionsIcon color='black'/>,
            path : '/'
            
        },
        {
            text : 'Games',
            icon : <SportsEsportsIcon color='black'/>,
            path : '/'
            
        },
        {
            text : 'Settings',
            icon : <SettingsIcon color='black'/>,
            path : '/'
            
        },
    ]

  return (
    <div style={styles.root}>
      <Drawer sx={styles.drawer} variant="permanent" anchor="left">
        <Typography variant="h5">THE HUB</Typography>
        <List>
        {menuItems.map(item => (
            <ListItem key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
            </ListItem>
        ))}
        </List>
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
