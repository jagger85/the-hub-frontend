import React from "react";
import { Drawer, Typography, Box, Divider, Grid, Chip } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import CollectionsIcon from "@mui/icons-material/Collections";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { styles } from "./MainLayoutStyle";
import img from "../assets/uniqtest.png";

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
      path: "/inventory",
    },
    {
      text: "Marketplace",
      icon: <StoreIcon />,
      path: "/marketplace",
    },
    {
      text: "Collections",
      icon: <CollectionsIcon />,
      path: "/collections",
    },
    {
      text: "Games",
      icon: <SportsEsportsIcon />,
      path: "/games",
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
      path: "/settings",
    },
  ];

  return (
    <Drawer sx={styles.drawer} variant="permanent" anchor="left">
      <Grid container>
        <Grid item sx={[styles.gridSection, styles.gridLogo]} xs={12}>
          <Typography variant="h5">THE HUB</Typography>
        </Grid>
        <Grid item sx={styles.gridSection} xs={12}>
          <Divider />
        </Grid>
        <Grid item sx={[styles.gridSection, styles.gridAvatar]} xs={12}>
          <Box
            component="img"
            sx={styles.avatar}
            alt="Uniq on sale"
            src={img}
          />
        </Grid>
        <Grid item sx={styles.gridSection} xs={12}>
          <Divider>
            <Chip label="USER" />
          </Divider>
        </Grid>
        <Grid item sx={styles.gridSection} xs={12}>
          <List>
            {menuItems.map((item) => (
              <Link
                style={{ textDecoration: "none" }}
                to={item.path}
                key={"link " + item.text}
                sx={styles.sidebarLink}
              >
                <ListItem key={item.text}>
                  <ListItemIcon key={"icon " + item.text} sx={styles.listItemIcon}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText key={"text" + item.text} sx={styles.listItemText} >
                
                    {item.text}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </Grid>
      </Grid>
    </Drawer>
  );
}

export default SideBar;
