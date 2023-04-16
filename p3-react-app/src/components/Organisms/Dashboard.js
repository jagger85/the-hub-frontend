import React from "react";
import { Typography, Grid } from "@mui/material";
import TransactionsTable from "../Molecules/Transactions/TransactionsTable";
import WalletInfo from "../Molecules/WalletInfo/WalletInfo";
import { styles as stl } from "./PagesStyle";

function Dashboard() {
  return (
      <Grid container xs={12} sx={stl.container}>
        <Grid item xs={12} sx={stl.titleContainer}>
          <Typography variant="h3">
            Dashboard
          </Typography>
        </Grid>
        <Grid item xs={5} sx={stl.section}>
          <WalletInfo />
        </Grid>
        <Grid item xs={12} sx={stl.section}>
          <TransactionsTable />
        </Grid>
      </Grid>
  );
}

export default Dashboard;
