import React, { useState } from "react";
import Transaction from "./Transaction";
import Gallery from "../Molecules/Gallery/Gallery";
import { useReducer, useEffect } from "react";
import { apiCalls } from "../../scripts/apicalls";

function TransactionsTable() {
  const wallet = localStorage.getItem("wallet");
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    const getTransactions = async () => {
      const data = await apiCalls.getWalletTransactions(wallet);
      setTransactions(data);
    };
    getTransactions();
  }, []);

  return (
    transactions != null && (
      <Gallery
        title="Transactions"
        amount={5}
        array={transactions}
        type="transactions"
      />
    )
  );
}

export default TransactionsTable;
