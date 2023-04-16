import React from 'react';
import { useEffect, useState } from 'react'
import { apiCalls } from "../../../scripts/apicalls";
import { Paper, Typography, Grid, Divider } from '@mui/material';
import { styles } from './WalletInfoStyle'

function WalletInfo() {
    
    const  wallet  = localStorage.getItem('wallet');
    const [info, setInfo] =  useState(null)

    useEffect(() => {
        const getInfo = async () => {
          const data = await apiCalls.getWalletInfo(wallet);
          setInfo(data);
        };
        getInfo();
      }, []);

    return (
     info != null && (
      
      <Paper sx={styles.paper}>
      <Grid container xs={12}>
      <Grid item xs={12}>
      <Typography variant='h5'>Balance</Typography>
      <Divider/>
      </Grid>
      <Grid item xs={5}>
      <Typography>Wallet : {info.account_name}</Typography>
      <Typography>Balance : {info.core_liquid_balance}</Typography>
      <Typography>Joined : {info.created}</Typography>
      </Grid>
      </Grid>
      </Paper>  
      
      )
  )
}

export default WalletInfo