import React from "react";
import { Typography } from "@mui/material";
import TransactionsTable from "../Transactions/TransactionsTable";
import WalletInfo from "./WalletInfo";
function Dashboard() {

  return (
    
      <div>
        <Typography variant="h3">Dashboard</Typography>
        <WalletInfo/>
        <TransactionsTable/>
      </div>
    
  );
}

export default Dashboard;
