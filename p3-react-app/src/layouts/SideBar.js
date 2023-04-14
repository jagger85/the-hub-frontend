import React from "react";
import { Drawer, Typography } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import CollectionsIcon from "@mui/icons-material/Collections";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { styles } from "./MainLayoutStyle";


function SideBar() {
  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon/>,
      path: "/",
    },
    {
      text: "Inventory",
      icon: <InventoryIcon/>,
      path: "/inventory",
    },
    {
      text: "Marketplace",
      icon: <StoreIcon/>,
      path: "/marketplace",
    },
    {
      text: "Collections",
      icon: <CollectionsIcon/>,
      path: "/collections",
    },
    {
      text: "Games",
      icon: <SportsEsportsIcon/>,
      path: "/games",
    },
    {
      text: "Settings",
      icon: <SettingsIcon/>,
      path: "/settings",
    },
  ];

  return (
    <Drawer sx={styles.drawer} variant="permanent" anchor="left">
      <Typography variant="h5">THE HUB</Typography>
      <List>
        {menuItems.map((item) => (
        <Link to={item.path} key={'link ' + item.text}>  <ListItem key={item.text}>
            <ListItemIcon key={'icon ' + item.text}>{item.icon}</ListItemIcon>
            <ListItemText key={'text' + item.text} primary={item.text} />
          </ListItem>
        </Link>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
