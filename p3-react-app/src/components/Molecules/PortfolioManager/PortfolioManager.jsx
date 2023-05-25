import { Button, Grid, Typography } from '@mui/material';
import Portfolio from './Portfolio';
import AddPortfolioDialog from '../Dialogs/AddPortfolioDialog';
import { dataService } from '../../../utils/dataService';
import { styles as stl } from './PortfolioManagerStyle';
import { v4 as uuid } from 'uuid';
import { useContext, useState } from 'react';
import { MyContext, actionTypes } from '../../../utils/MyContexProvider';

function PortfolioManager() {
  const { state, dispatch } = useContext(MyContext);
  const [open, setOpen] = useState(false);

  const removePortfolio = async (portfolioName) => {
    await dataService.removePortfolio(portfolioName);
    const updatedPortfolios = await dataService.getPortfolios();
    dispatch({ type: actionTypes.UPDATE_PORTFOLIOS, portfolios: updatedPortfolios });
  };

  const createPortfolio = async (portfolioName) => {
    setOpen(false)
    await dataService.addPortfolio(portfolioName);
    const updatedPortfolios = await dataService.getPortfolios();
    dispatch({ type: actionTypes.UPDATE_PORTFOLIOS, portfolios: updatedPortfolios });
  };

  const addWallet = async (portfolioAlias, walletAlias, walletAddress) => {
    await dataService.addWallet(portfolioAlias, walletAlias, walletAddress);
    const updatedPortfolios = await dataService.getPortfolios();
    dispatch({ type: actionTypes.UPDATE_PORTFOLIOS, portfolios: updatedPortfolios });
  };

  const removeWallet = async (portfolioAlias, walletAlias) => {
    await dataService.removeWallet(portfolioAlias, walletAlias);
    const updatedPortfolios = await dataService.getPortfolios();
    dispatch({ type: actionTypes.UPDATE_PORTFOLIOS, portfolios: updatedPortfolios });
  };

  const setPreferredPortfolio = async (portfolioName) => {
    const preferredPortfolio = await dataService.setPreferredPortfolio(portfolioName)
    dispatch({type: actionTypes.SET_PREFERRED_PORTFOLIO, preferredPortfolio:preferredPortfolio})
  }

  return (
    <Grid container sx={stl.portfolioManagerContainer}>
      <Grid item>
        <Button onClick={() => setOpen(true)}><Typography variant='h6medium'>Add a new portfolio</Typography></Button>
      </Grid>
      <Grid item>
        <AddPortfolioDialog create={createPortfolio} open={open} onClose={setOpen} />
      </Grid>
      {state.portfolios != null &&
        state.portfolios.map( portfolio => {
          return (
            <Grid item key={uuid()}>
              <Portfolio 
              destroy={removePortfolio} 
              createWallet={addWallet} 
              removeWallet={removeWallet} 
              portfolio={portfolio} 
              key={uuid()} 
              setPreferred= {setPreferredPortfolio}
              isPreferred = {state.preferredPortfolio?.alias == portfolio.alias}
              />
            </Grid>
          );
        })}
    </Grid>
  );
}

export default PortfolioManager;
