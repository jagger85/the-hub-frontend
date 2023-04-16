import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import TransactionsTable from "../Molecules/Transactions/TransactionsTable";
import WalletInfo from "../Dashboard/WalletInfo";
import { sectionStyle as stl } from "./SectionStyle";
function Dashboard() {
  return (
    <Box>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={stl.sectionTitle}>Dashboard</Typography>
        </Grid>
        <Grid item xs={5}>
          <WalletInfo />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={12}>
          <TransactionsTable />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
