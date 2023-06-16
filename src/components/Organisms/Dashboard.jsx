import { Typography, Grid } from '@mui/material';
import TransactionsTable from '../Molecules/Transactions/TransactionsTable';
import WalletInfo from '../Molecules/WalletInfo/WalletInfo';
import { styles as stl } from './PagesStyle';
import NoData from '../Atoms/NoData';
import { MyContext } from '../../utils/MyContexProvider';
import { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { Navigate } from 'react-router-dom';
import { colors } from '../../theme';
import LineChart from '../Molecules/Charts/LineChart';
function Dashboard() {
  
  if (!sessionStorage.getItem('token')) {
    return <Navigate to='/login' />;
  } else {
    const { getPortfolio } = useContext(MyContext);
    return (
      <Grid container sx={stl.container}>
        <Grid item xs={12} sx={stl.titleContainer}>
          <Typography variant='h3medium' color={colors.background[400]}>Dashboard</Typography>
        </Grid>
          <Grid item xs={12} sx={{display:'flex', justifyContent:'space-between'}}>
          <Grid item xs={4} sx={[stl.section,{marginRight:3}]}>
          {getPortfolio() ? <WalletInfo portfolio={getPortfolio()} /> : <NoData />}
          </Grid>
          <Grid item xs={8} sx={stl.section}>
          <LineChart/>
          </Grid>
          </Grid>
        <Grid item xs={12} sx={stl.section}>
          {getPortfolio() ? (
            getPortfolio().wallets.map((x) => {
              return <TransactionsTable key={uuid()} wallet={x.address} alias={x.alias} />;
            })
          ) : (
            <NoData />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default Dashboard;
