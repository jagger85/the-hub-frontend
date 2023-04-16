import React, { useState } from "react";
import Gallery from "../Gallery/Gallery";
import { useEffect } from "react";
import { apiCalls } from "../../../scripts/apicalls";

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
