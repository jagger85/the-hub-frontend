import { Grid, Typography } from "@mui/material";
import React from "react";
import NetworkSettings from "../Molecules/NetworkSettings/NetworkSettings";
import Portfolio from "../Molecules/PortfolioManager/Portfolio";
import { styles as stl } from "./PagesStyle";
import PortfolioManager from "../Molecules/PortfolioManager/PortfolioManager";
import { colors } from "../../theme";

function Settings() {
  return (
    <Grid container sx={[stl.container,{display:'flex',flexDirection:'row'}]}>
      <Grid item xs={12} sx={stl.titleContainer}>
        <Typography variant="h3medium" color={colors.background[200]}>Settings</Typography>
      </Grid>
      <Grid item xs={12} sx={stl.section}>
        <NetworkSettings />
      </Grid>
      <Grid item sx={stl.section}>
      <PortfolioManager/>
      </Grid>
    </Grid>
  );
}

export default Settings;
