import React, { useState } from 'react';
import Gallery from '../Gallery/Gallery';
import { useEffect, useMemo } from 'react';
import { apiCalls } from '../../../utils/apicalls';
import CustomSelect from '../../Atoms/CustomSelect';
import { Box, Grid, Typography } from '@mui/material';
import { styles as stl } from './TransactionsTableStyle';
import NoData from '../../Atoms/NoData';

/**
 * Suported transactions
 * This object is intended for sending it to @see CustomSelect for
 * showing the correspondig values
 */
const filterValues = [
  { text: 'All', value: 'all' },
  { text: 'Buys', value: 'buy' },
  { text: 'Transfers', value: 'transfer' },
  { text: 'Resell', value: 'resell' },
  { text: 'Cancel Resell', value: 'cancelresell' },
];
/**
 * @returns - A MUI Grid that contains the requested transactions with a select component to filter them
 */
function TransactionsTable(props) {

  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if(filter !='all'){
      apiCalls.getWalletTransactions({ wallet: props.wallet }).then(
        res => setTransactions(res.filter( t =>  t.lifecycle.transaction.actions[0].name == filter)))
    }else{
      apiCalls.getWalletTransactions({ wallet: props.wallet }).then( data => setTransactions(data)) 
    }
  }, [filter]);

  /**
   * @function - Filters an array to set up the corresponding transactions
   * Supports 4 types of transaction, "buy", "transfer", "resell", "cancellresell"
   * @param {string} value - A string to filter accross transactions
   * @returns - An array with the corresponding transactions
   */

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={stl.header}>
          <Typography variant='h5'>{props.alias}</Typography>
          <CustomSelect onChange={setFilter} menuItems={filterValues} label='filter' width={{ width: 200 }} />
        </Box>
      </Grid>
      {console.log(transactions.length)}
      {transactions.length != 0 ? (
        <Grid item xs={12}>
          <Gallery amount={5} array={transactions} type='transactions' />
        </Grid>
      ) : (
        <NoData text='No data' />
      )}
    </Grid>
  );
}

export default TransactionsTable;
