import { Button, Grid } from '@mui/material';
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

  return (
    <Grid container sx={stl.portfolioManagerContainer}>
      <Grid item>
        <Button onClick={() => setOpen(true)}>Add a new portfolio</Button>
      </Grid>
      <Grid item>
        <AddPortfolioDialog create={createPortfolio} open={open} onClose={setOpen} />
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
