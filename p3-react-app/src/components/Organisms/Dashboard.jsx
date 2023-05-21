import { Typography, Grid } from '@mui/material';
import TransactionsTable from '../Molecules/Transactions/TransactionsTable';
import WalletInfo from '../Molecules/WalletInfo/WalletInfo';
import { styles as stl } from './PagesStyle';
import NoData from '../Atoms/NoData';
import { MyContext } from '../../utils/MyContexProvider'
import { useContext } from 'react';
import { v4 as uuid } from 'uuid';

function Dashboard() {

  const { state } = useContext(MyContext);

  return (
    <Grid container sx={stl.container}>
      <Grid item xs={12} sx={stl.titleContainer}>
        <Typography variant='h3'>Dashboard</Typography>
      </Grid>
      <Grid item xs={5} sx={stl.section}>
        <WalletInfo />
      </Grid>
      <Grid item xs={12} sx={stl.section}>
        {state.portfolios.length > 0 ? (
          state.portfolios[0].wallets.map((x) => {
            return <TransactionsTable key={uuid()} wallet={x.address} alias={x.alias} />;
          })
        ) : (
          <NoData />
        )}
      </Grid>
    </Grid>
  );
}

export default Dashboard;
