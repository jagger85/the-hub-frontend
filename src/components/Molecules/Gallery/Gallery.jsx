import React from 'react';
import { useReducer, useEffect, useState } from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import UniqOnSale from '../Uniqs/UniqOnSale';
import Transaction from '../Transactions/Transaction';
import UniqOwned from '../../Inventory/UniqOwned';
import Collection from '../CollectionUniq';
import { styles } from './GalleryStyle';
import { v4 as uuid } from 'uuid';
import CyberButton from '../../Atoms/CyberButton';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };

    case 'decrement':
      return { ...state, count: state.count - 1 };

    case 'setPages':
      state.pages = [];
      state.count = 0;
      for (let i = 0; i < action.data.length / action.amount; i++) {
        state.pages[i] = action.data.slice(
          // Slice the data to create a new array with the sum of the desired object per page
          i * action.amount,
          i * action.amount + action.amount
        );
      }
      return { ...state };

    default:
      console.log(action.type + ' this action is not supported');
  }
};
/**
 * @param {String} props.title - The desired title for the gallery
 * @param {Integer} props.amount - The amount of items to display per page
 * @param {Array} props.array - An array containing the objects to display
 * @param {String} props.type - Supports 4 types of galleries, 'transactions','uniqsOnSale','UniqsOwned','collections',
 * @returns A MUI Grid container with a gallery and the corresponding buttons to move accross
 */
function Gallery(props) {
  const [state, dispatch] = useReducer(reducer, { count: 0, pages: [], data: [], amount: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: 'setPages', data: props.array, amount: props.amount });
    setLoading(false);
  }, [props.array]);

  return (
    !loading && (
      <Grid container spacing={2} sx={styles.container}>
        <Grid item xs={12}>
          <Typography variant='h5medium' sx={styles.title}>
            {props.title}
          </Typography>
        </Grid>
        {state.pages[state.count].map((e, i) => {
          switch (props.type) {
            case 'transactions':
              return (
                <Grid item xs={12} key={uuid()}>
                  <Transaction transaction={e} key={uuid()} />
                </Grid>
              );
            case 'uniqsOnSale':
              return (
                <Grid item xs={12} sm={8} md={5} lg={4} xl={3} key={uuid()}>
                  <UniqOnSale uniq={e} />
                </Grid>
              );
            case 'uniqsOwned':
              return (
                <Grid item xs={12} sm={8} md={6} lg={4} xl={2} key={uuid()}>
                  <UniqOwned uniq={e} key={uuid()} />
                </Grid>
              );
            case 'collections':
              return (
                <Grid item xs={12} sm={8} md={6} lg={4} xl={2} key={uuid()}>
                  <Collection collection={e} key={uuid()} />
                </Grid>
              );
            default:
              console.log(`${props.type} not supported by gallery component`);
          }
        })}
        <Grid item xs={12}>
          <Box sx={styles.navigationContainer}>
            <CyberButton
              onClick={() => dispatch({ type: 'decrement' })}
              disabled={state.count == 0}
              right={false}
              text='Backward'
              textVariant='h7bold'
            />

            <Box sx={styles.pagesDisplay}>
              <Typography variant='h7bold'>{state.count + 1}</Typography>
              <Typography variant='h7bold'>&nbsp;&nbsp; / &nbsp;&nbsp;</Typography>
              <Typography variant='h7bold'>{state.pages.length}</Typography>
            </Box>

            <CyberButton
              onClick={() => dispatch({ type: 'increment' })}
              disabled={state.count == state.pages.length - 1}
              right={true}
              text='Forward&nbsp;'
              textVariant='h7bold'
              
            />
          </Box>
        </Grid>
      </Grid>
    )
  );
}

export default Gallery;
