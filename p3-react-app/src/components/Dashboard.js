import React, { useContext } from "react";
import { AppContext } from "./App";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import TransactionsTable from "./Transactions/TransactionsTable";

function Dashboard() {
  const { wallet, network, endpoint } = useContext(AppContext);
  const [info, setInfo] = useState(null);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    getAccountInfo();
    getTransactions();
  }, []);

  function getAccountInfo() {
    fetch(`${endpoint}/v1/chain/get_account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `{ "account_name": "${wallet}" }`,
    })
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => console.log("error", error));
  }

  function getTransactions() {
    var raw = "";

    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://api.mainnet.ultra.io/v0/search/transactions?q=(auth:${wallet} OR receiver:${wallet})&sort=desc&limit=100&block_count=5000000&start_block=0&limit=5&cursor&with_reversible=true`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setTransactions(result);
      })
      .catch((error) => console.log("error", error));
  }

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
