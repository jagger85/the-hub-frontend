import React, { useState } from "react";
import Gallery from "../Gallery/Gallery";
import { useEffect } from "react";
import { apiCalls } from "../../../scripts/apicalls";
import CustomSelect from "../../Atoms/CustomSelect";
import { Box, Grid, Typography } from "@mui/material";
import { styles as stl } from "./TransactionsTableStyle";
import NoData from "../../Atoms/NoData";
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
  }, [filteredResults]);

  function filter(value) {
    value != "all"
      ? setFilteredResults(transactions.filter((t, i) => t.lifecycle.transaction.actions[0].name == value))
      : setFilteredResults(transactions);
  }

  return (
    <Grid container>
    <Grid item xs={12}>
    <Box sx={stl.header}>
    <Typography variant="h5">Transactions</Typography>
    <CustomSelect onChange={filter} menuItems={filterValues} label='filter' width={{'width':200}}/>
    </Box>
    </Grid>
    {transactions != null ? (
          <Grid item xs={12}>
            <Gallery amount={5} array={filteredResults ?? transactions} type="transactions"/>
            </Grid>
            ) : <NoData text='No data'/>}
        </Grid>
  );
}

export default TransactionsTable;
