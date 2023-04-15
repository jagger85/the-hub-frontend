import React, { useState } from "react";
import Transaction from "./Transaction";
import Button from "@mui/material/Button";
import { useReducer, useEffect } from "react";
import { apiCalls } from "../../scripts/apicalls";
import { Typography, Grid, Divider } from "@mui/material";
import { styles } from './TransactionsTableStyle'

const pages = []

const reducer = (page, action) => {
  switch (action.type) {
    case 'increment':
      return {count: page.count +1}
    case "decrement":
      return {count: page.count -1}
    default:
      console.log(action.type + " this action is not supported");
  }
};

function TransactionsTable() {

  const wallet = localStorage.getItem('wallet');
  const [page, dispatch] = useReducer(reducer, { count : 0 });
  const [loading , setLoading] = useState(true)
  
  useEffect(()=>{
    const getTransactions = async() =>{
      const data = await apiCalls.getWalletTransactions(wallet)
      for(let i=0; i < data.transactions.length / 5; i++){
        pages[i] = data.transactions.slice(i * 5, i * 5 + 5 )
      }
      setLoading(false)
    }
    getTransactions()
  },[])
  return (

    
    !loading && (
      <Grid container spacing={2}>
      <Grid item xs={12} >
      <Typography variant="h5">Transactions</Typography>
      </Grid>
      <Grid item xs={12}>
      {pages[page.count].map((e, i) => {
        return <Transaction transaction={e} />;
      })}
      </Grid>
      <Grid item xs={12} sx={styles.galleryButtonContainer}>
      <Button 
      sx={styles.galleryButton}
      variant="outlined" 
      onClick={() =>{dispatch({ type: "decrement"})}}
      disabled={page.count == 0}
      >
      back
      </Button>
      <Button 
      sx={styles.galleryButton}
      variant="outlined" 
      onClick={() => {dispatch({ type: "increment" })}}
      disabled={page.count == pages.length -1}>
      forward
      </Button>
      </Grid>
      </Grid>
    )
  );
}

export default TransactionsTable;
