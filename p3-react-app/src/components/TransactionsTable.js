import React from "react";
import Transaction from "./Transaction";
const transactions = [];

function TransactionsTable(props) {
  return (
    <div>
      {props.transactions.map((e, i) => {
        return <Transaction transaction={e} />;
      })}
    </div>
  );
}

export default TransactionsTable;
