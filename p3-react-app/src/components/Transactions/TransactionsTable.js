import React from "react";
import Transaction from "./Transaction";

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
