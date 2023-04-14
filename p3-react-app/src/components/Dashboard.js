import React, { useContext } from "react";
import { AppContext } from "./App";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import TransactionsTable from "./Transactions/TransactionsTable";
import { apiCalls } from "../scripts/apicalls";

function Dashboard() {
  const { wallet } = useContext(AppContext);
  const [info, setInfo] = useState(null);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const data = await apiCalls.getWalletInfo(wallet);
      setInfo(data);
    };
    const getTransactions = async () => {
      const data = await apiCalls.getWalletTransactions(wallet);
      setTransactions(data);
    };

    getInfo();
    getTransactions();
  }, []);

  return (
    info != null &&
    transactions != null && (
      <div>
        <h1>Dashboard</h1>
        <Typography>Wallet : {info.account_name}</Typography>
        <Typography>Balance : {info.core_liquid_balance}</Typography>
        <Typography>Account created : {info.created}</Typography>
        <Typography>TRANSACTIONS:</Typography>
        <TransactionsTable transactions={transactions.transactions} />
      </div>
    )
  );
}

export default Dashboard;
