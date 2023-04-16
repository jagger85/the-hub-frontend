import React, { useState } from "react";
import Gallery from "../Gallery/Gallery";
import { useEffect } from "react";
import { apiCalls } from "../../../scripts/apicalls";
import FilterSelect from "../../Atoms/FilterSelect";
import { Box, Grid, Typography } from "@mui/material";
import { styles as stl } from "./TransactionsTableStyle";

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
    console.log(filteredResults)
  }, [filteredResults]);

  function filter(value) {
    value != 'all' ?
    setFilteredResults(transactions.filter((t, i) => {
    return t.lifecycle.transaction.actions[0].name == value})) :
    setFilteredResults(transactions);
  }

  return (
    transactions != null && (
      <Box sx={stl.container}>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={stl.header}>
              <Typography variant="h5">Transactions</Typography>
              <FilterSelect onChange={filter} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Gallery amount={5} array={filteredResults ?? transactions} type="transactions"/>
          </Grid>
        </Grid>
      </Box>
    )
  );
}

export default TransactionsTable;
