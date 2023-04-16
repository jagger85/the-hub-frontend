import React, { useState } from "react";
import Gallery from "../Gallery/Gallery";
import { useEffect } from "react";
import { apiCalls } from "../../../scripts/apicalls";
import CustomSelect from "../../Atoms/CustomSelect";
import { Box, Grid, Typography } from "@mui/material";
import { styles as stl } from "./TransactionsTableStyle";

const filterValues = [
  { text: "All", value: "all" },
  { text: "Buys", value: "buy" },
  { text: "Transfers", value: "transfer" },
  { text: "Resell", value: "resell" },
  { text: "Cancel Resell", value: "cancelresell" },
];

function TransactionsTable() {
  const wallet = localStorage.getItem("wallet");
  const [transactions, setTransactions] = useState(null);
  const [filteredResults, setFilteredResults] = useState(null);

  useEffect(() => {
    const getTransactions = async () => {
      const data = await apiCalls.getWalletTransactions(wallet);
      setTransactions(data);
    };
    getTransactions();
    console.log(filteredResults);
  }, [filteredResults]);

  function filter(value) {
    value != "all"
      ? setFilteredResults(
          transactions.filter((t, i) => {
            return t.lifecycle.transaction.actions[0].name == value;
          })
        )
      : setFilteredResults(transactions);
  }

  return (
    transactions != null && (
      <Grid container>
        <Grid item xs={12}>
          <Box sx={stl.header}>
            <Typography variant="h5">Transactions</Typography>
            <CustomSelect menuItems={filterValues} onChange={filter} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Gallery
            amount={5}
            array={filteredResults ?? transactions}
            type="transactions"
          />
        </Grid>
      </Grid>
    )
  );
}

export default TransactionsTable;
