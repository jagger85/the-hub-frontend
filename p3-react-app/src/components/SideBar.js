import React from "react";
import { Drawer, Typography } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import CollectionsIcon from "@mui/icons-material/Collections";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

const styles = {
  drawer: {
    width: drawerWidth,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
    },
  },
};

function SideBar() {
  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/",
    },
    {
      text: "Inventory",
      icon: <InventoryIcon />,
      path: "/",
    },
    {
      text: "Marketplace",
      icon: <StoreIcon />,
      path: "/",
    },
    {
      text: "Collections",
      icon: <CollectionsIcon />,
      path: "/",
    },
    {
      text: "Games",
      icon: <SportsEsportsIcon />,
      path: "/",
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
      path: "/",
    },
  ];

  return (
    <Drawer sx={styles.drawer} variant="permanent" anchor="left">
      <Typography variant="h5">THE HUB</Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
