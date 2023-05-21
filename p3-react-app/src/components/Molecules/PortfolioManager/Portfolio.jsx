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
import StarIcon from '@mui/icons-material/Star';

const reducer = (state, action) => {
  switch (action.type) {
    case 'expand':
      const expand = state.expanded ? false : true;
      return { ...state, expanded: expand };

    case 'setNewPortfolioalias':
      return { ...state, portfolioAlias: action.alias.e.target.value };

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
    newWallet: '',
    newAlias: '',
    expanded: false,
  });

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
                placeholder={props.portfolio.alias}
                text='true'
                getValue={(e) => dispatch({ type: 'setNewPortfolioalias', alias: { e } })}
              />
            ) : (
              <Typography> {props.portfolio.alias} </Typography>
            )}
            <Box>
              {state.expanded ? (
                <DeleteIcon sx={stl.icon} onClick={() => props.destroy(props.portfolio.alias)} />
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
                onClick={(e) => props.createWallet(props.portfolio.alias, state.newAlias, state.newWallet)}
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

      {props.portfolio.wallets.length != 0 && (
        <Box sx={stl.walletsContainer}>
          {props.portfolio.wallets.map((wallet) => (
            <PortfolioWallet
              key={uuid()}
              alias={wallet.alias}
              wallet={wallet.address}
              editable={state.expanded}
              onClick={(walletAlias) => props.removeWallet(props.portfolio.alias, walletAlias)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Portfolio;
