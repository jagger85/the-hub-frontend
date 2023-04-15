import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { apiCalls } from "../../scripts/apicalls";
import { Paper, Typography, Grid } from '@mui/material';

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
      <div>
      <Typography variant='h5'>Info</Typography>
      <Grid container xs={12}>
      <Grid item xs={5}>
      <Paper sx={styles.paper}>
      <Typography>Wallet : {info.account_name}</Typography>
      <Typography>Balance : {info.core_liquid_balance}</Typography>
      <Typography>Joined : {info.created}</Typography>
      </Paper>  
      </Grid>
      </Grid>
      </div>
      )
  )
}

export default WalletInfo