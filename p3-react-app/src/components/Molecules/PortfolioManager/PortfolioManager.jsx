import React, { useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import { useReducer } from 'react';
import Portfolio from './Portfolio';
import AddPortfolioDialog from '../Dialogs/AddPortfolioDialog';
import { dataService } from '../../../scripts/dataService';
import { styles as stl } from './PortfolioManagerStyle';
import { v4 as uuid } from 'uuid';
let counter = 0 

const reducer = (state, action) => {
  switch (action.type) {
    case 'setPortfolios':
      return { ...state, portfolios: action.portfolios };

    case 'openDialog':
      return { ...state, dialog: true };

    case 'closeDialog':
      return { ...state, dialog: false };

    default:
      console.log(`${action.type} this action is not supported`);
      break;
  }
};

function PortfolioManager() {
  
  const [state, dispatch] = useReducer(reducer, { dialog: false });
  
  const removePortfolio = async (portfolioName) => {
    await dataService.removePortfolio(portfolioName);
    const portfolios = await dataService.getPortfolios()
    dispatch({ type: 'setPortfolios', portfolios: portfolios });
  };

  useEffect(() => {
    counter++
     console.log(`manager: ${counter}`)

    const init = async () => {
      const portfolios = await dataService.getPortfolios();
      dispatch({ type: 'setPortfolios', portfolios: portfolios });
    };
    init();
  }, [state.dialog]);


  return (
    <Grid container sx={stl.portfolioManagerContainer}>
      <Grid item>
        <Button onClick={() => dispatch({ type: 'openDialog' })}>Add a new portfolio</Button>
      </Grid>
      <Grid item>
        <AddPortfolioDialog close={() => dispatch({ type: 'closeDialog' })} open={state.dialog} />
      </Grid>
      {state.portfolios != null &&
        state.portfolios.map((x) => {
          return (
            <Grid item key={uuid()}>
              <Portfolio destroy={removePortfolio} name={x.alias} key={uuid()} />
            </Grid>
          );
        })}
    </Grid>
  );
}

export default PortfolioManager;
