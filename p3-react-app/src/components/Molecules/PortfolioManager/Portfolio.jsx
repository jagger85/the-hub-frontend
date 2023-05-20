import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { AccordionDetails, AccordionSummary, Grid, Typography, Box } from '@mui/material';
import { styles as stl } from './PortfolioManagerStyle';
import CustomInput from '../../Atoms/CustomInput';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import PortfolioWallet from './PortfolioWallet';
import { CustomAccordion } from './CustomAccordion';
import { rules } from '../../../utils/validationRules';
import { v4 as uuid } from 'uuid';
import { dataService } from '../../../utils/dataService';
import StarIcon from '@mui/icons-material/Star';

const reducer = (state, action) => {
  switch (action.type) {
    case 'expand':
      const expand = state.expanded ? false : true;
      return { ...state, expanded: expand };
    case 'setWallets':
      return { ...state, walletAlias: '', walletAdress: '', wallets: action.wallets };

    case 'setNewPortfolioName':
      return { ...state, portfolioAlias: action.name.e.target.value };

    case 'setNewWallet':
      return { ...state, newWallet: action.newWallet.e.target.value };

    case 'setNewAlias':
      return { ...state, newAlias: action.newAlias.e.target.value };

    default:
      console.log(action.type + ' this action is not supported');
  }
};
function Portfolio(props) {
  const [state, dispatch] = useReducer(reducer, {
    wallets: [],
    newWallet: '',
    newAlias: '',
    expanded: false,
    portfolioAlias: props.name,
  });

  const removeWallet = async (walletAlias) => {
    await dataService.removeWallet(state.portfolioAlias, walletAlias);
    const wallets = await dataService.getPortfolioWallets(state.portfolioAlias);
    dispatch({ type: 'setWallets', wallets: wallets });
  };

  const addWallet = async () => {
    await dataService.addWallet(state.portfolioAlias, state.newAlias, state.newWallet);
    const wallets = await dataService.getPortfolioWallets(state.portfolioAlias);

    dispatch({ type: 'setWallets', wallets: wallets });
  };

  useEffect(() => {
    const init = async () => {
      const wallets = await dataService.getPortfolioWallets(state.portfolioAlias);
      dispatch({ type: 'setWallets', wallets: wallets });
    };
    init();
  }, []);

  return (
    <Box sx={stl.wrapper}>
      <CustomAccordion sx={stl.accordionContainer} expanded={state.expanded}>
        <AccordionSummary aria-controls='panel1bh-content' id='panel1bh-header'>
          <Box
            sx={{
              width: '100%',
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            {state.expanded ? (
              <CustomInput
                placeholder={state.portfolioAlias}
                text='true'
                getValue={(e) => dispatch({ type: 'setNewPortfolioName', name: { e } })}
              />
            ) : (
              <Typography> {state.portfolioAlias} </Typography>
            )}
            <Box>
              {state.expanded ? (
                <DeleteIcon sx={stl.icon} onClick={() => props.destroy(state.portfolioAlias)} />
              ) : (
                <StarIcon sx={stl.icon} />
              )}
              <MoreVertIcon
                onClick={() => {
                  dispatch({ type: 'expand' });
                }}
                sx={stl.expandIcon}
              />
            </Box>
          </Box>
        </AccordionSummary>

        <AccordionDetails sx={stl.accordionDetails}>
          <Grid container sx={stl.addWallet}>
            <Grid item sx={{ marginRight: 1 }}>
              <CustomInput
                placeholder='Alias'
                text={true}
                getValue={(e) => dispatch({ type: 'setNewAlias', newAlias: { e } })}
              />
            </Grid>
            <Grid item sx={{ marginRight: 1 }}>
              <CustomInput
                placeholder='Wallet'
                text={true}
                getValue={(e) => dispatch({ type: 'setNewWallet', newWallet: { e } })}
              />
            </Grid>
            <Grid item>
              <AddCircleIcon
                sx={
                  rules.every((element) => element.rule.test(state.newWallet)) & (state.newAlias != '')
                    ? stl.addIcon
                    : stl.addIconBad
                }
                onClick={(e) => addWallet()}
                onMouseEnter={() => {
                  if (rules.every((element) => element.rule.test(state.newWallet)) & (state.newAlias != '')) {
                  }
                }}
                onMouseLeave={() => {}}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </CustomAccordion>

      {state.wallets.length != 0 && (
        <Box sx={stl.walletsContainer}>
          {state.wallets.map((wallet) => (
            <PortfolioWallet
              key={uuid()}
              alias={wallet.alias}
              wallet={wallet.address}
              editable={state.expanded}
              onClick={(walletAlias) => removeWallet(walletAlias)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Portfolio;
