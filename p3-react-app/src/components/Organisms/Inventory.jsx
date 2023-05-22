import React, { useEffect, useState } from 'react';
import { apiCalls } from '../../utils/apicalls';
import { Typography, Grid } from '@mui/material';
import Gallery from '../Molecules/Gallery/Gallery';
import { styles as stl } from './PagesStyle';
import NoData from '../Atoms/NoData';
import { MyContext } from '../../utils/MyContexProvider';
import { useContext } from 'react';
import { v4 as uuid } from 'uuid';

function Inventory() {
  const { state, getPortfolio } = useContext(MyContext);

  const [inventories, setInventories] = useState(null);

  useEffect(() => {
    const init = async () => {
      let uniqs = [];
      for (let wallets of getPortfolio().wallets) {
        const collection = await apiCalls.getWalletUniqs(wallets.address);
        uniqs.push({ collection: collection, alias: wallets.alias });
      }
      setInventories(uniqs);
    };
    if (getPortfolio()) init();
  }, [state]);

  return (
    <Grid container sx={stl.container}>
      <Grid item xs={12} sx={stl.titleContainer}>
        <Typography variant='h3'>Inventory</Typography>
      </Grid>

      {inventories != null ? (
        inventories.map((x) => {
          return (
            <Grid key={uuid()} item xs={12} sx={stl.section}>
              <Gallery title={x.alias} amount={10} array={x.collection} type={'uniqsOwned'} />
            </Grid>
          );
        })
      ) : (
        <Grid item xs={12} sx={stl.section}>
          <NoData text={inventories == null ? 'No wallet connected' : 'No Uniqs holded'} />
        </Grid>
      )}
    </Grid>
  );
}

export default Inventory;
