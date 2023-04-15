import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { apiCalls } from "../../scripts/apicalls";
import { Paper, Typography } from '@mui/material';
import { AppContext } from "../App";
import { styles } from './WalletInfoStyle'

function WalletInfo() {
    
    const { wallet } = useContext(AppContext);
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
      <Paper style={styles.paper}>
      <Typography>Wallet : {info.account_name}</Typography>
      <Typography>Balance : {info.core_liquid_balance}</Typography>
      <Typography>Joined : {info.created}</Typography>
      </Paper>  
     )
  )
}

export default WalletInfo