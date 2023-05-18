import React from "react";
import { Typography, Grid } from "@mui/material";
import TransactionsTable from "../Molecules/Transactions/TransactionsTable";
import WalletInfo from "../Molecules/WalletInfo/WalletInfo";
import { styles as stl } from "./PagesStyle";
import { dataService } from "../../scripts/dataService";
import NoData from "../Atoms/NoData";
function Dashboard() {
  return (
      <Grid container sx={stl.container}>
        <Grid item xs={12} sx={stl.titleContainer}>
          <Typography variant="h3">
            Dashboard
          </Typography>
        </Grid>
        <Grid item xs={5} sx={stl.section}>
          <WalletInfo />
        </Grid>
        <Grid item xs={12} sx={stl.section}>

        {dataService.portfolios[0].wallets ?
          dataService.portfolios[0].wallets.map( x => {
            return <TransactionsTable wallet={x.address} alias={x.alias} />
          }):
          <NoData/>
        }
        </Grid>
      </Grid>
  );
}

export default Dashboard;