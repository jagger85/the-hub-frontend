import React from 'react';
import { Box } from '@mui/material';
import { styles } from './TransactionStyle';
import Buy from './Buy';
import Transfer from './Transfer';
import Resell from './Resell';
import CancellResell from './CancellResell';
import DefaultTransaction from './DefaultTransaction';
import { v4 as uuid } from 'uuid';


function renderSwitch(e){
  switch (e.act.name) {
    case 'resell':
      return <Resell transaction={e} key={uuid()}/>;
    case 'cancelresell':
      return <CancellResell transaction={e} key={uuid()}/>;
    case 'buy':
      return <Buy transaction={e} key={uuid()}/>;
    case 'transfer':
      return <Transfer transaction={e} key={uuid()}/>;
    default:
      return <DefaultTransaction transaction={e} key={uuid()}/>;
  }
}

/**
 * @component - Supports 4 diferent types of transactions, "resell", "cancellresell", "buy", "transfer"
 * @param {*} props.transaction - The transaction to display
 * @returns An accordion with the appropiate transaction
 */
function Transaction(props) {

  return (
    <Box sx={styles.container} key={uuid()}>
        {renderSwitch(props.transaction.lifecycle.execution_trace.action_traces[0])}
    </Box>
  );
}
export default Transaction;
//props.transaction.lifecycle.execution_trace.action_traces.map((e) => {