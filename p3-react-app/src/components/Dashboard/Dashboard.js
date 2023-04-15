import React from "react";
import { Typography } from "@mui/material";
import TransactionsTable from "../Transactions/TransactionsTable";
import WalletInfo from "./WalletInfo";
function Dashboard() {

  return (
    
      <div>
        <h1>Dashboard</h1>
        <WalletInfo/>
        <Typography>TRANSACTIONS:</Typography>
        <TransactionsTable/>
      </div>
    
  );
}

export default Dashboard;
