import React from "react";
import { useReducer, useState } from "react";
import {
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { styles as stl } from "./PortfolioManagerStyle";
import CustomInput from "../../Atoms/CustomInput";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from '@mui/icons-material/Delete';
import PortfolioWallet from "./PortfolioWallet";
import { CustomAccordion } from "./CustomAccordion";
import { rules } from "../../../scripts/validationRules";
import { v4 as uuid } from "uuid";
import { dataService } from "../../../scripts/dataService";

import StarIcon from "@mui/icons-material/Star";

const reducer = (state, action) => {
  switch (action.type) {

    case "setNewPortfolioName":
      return { ...state, portfolioName: action.name.e.target.value };

    case "removePortfolio":
      dataService.removePortfolio( action.portfolioName )
      action.reset()
      return 

    case "setNewWallet":
      return { ...state, newWallet: action.newWallet.e.target.value };

    case "setNewAlias":
      return { ...state, newAlias: action.newAlias.e.target.value };

    case "addWallet":
        dataService.addWallet(action.portfolioName,state.newAlias,state.newWallet)
        return { ...state };

    case "deleteWallet":
      dataService.removeWallet(action.portfolioName, action.alias)
      return { ...state, wallets: dataService.getPortfolioWallets(action.portfolioName)};

    case "setPages":
      return { ...state };

    default:
      console.log(action.type + " this action is not supported");
  }
};
function Portfolio(props) {
  const [expanded, setExpanded] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    wallets: dataService.getPortfolioWallets(props.name),
    newWallet: "",
    newAlias: "",
  });

  return (
    <Box sx={stl.wrapper} >
      <CustomAccordion sx={stl.accordionContainer} expanded={expanded}>
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <Box
            sx={{
              width: "100%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {expanded ? (
              <CustomInput
                placeholder={props.name}
                text="true"
                getValue={(e) =>
                  dispatch({ type: "setNewPortfolioName", name: { e } })
                }
              />
            ) : (
              <Typography> {props.name} </Typography>
            )}
            <Box>
            {expanded ? 
            <DeleteIcon sx={stl.icon} onClick={() =>dispatch({type: 'removePortfolio', portfolioName: props.name, reset: props.reset})}/>:
            <StarIcon sx={stl.icon}/>
            }
              <MoreVertIcon
                onClick={() => {
                  setExpanded(expanded ? false : true)
                }}
                sx={stl.expandIcon}
              />
            </Box>
          </Box>
        </AccordionSummary>

        <AccordionDetails sx={stl.accordionDetails}>
          <Grid container sx={stl.addWallet}>
            <Grid item sx={{marginRight: 1}}>
              <CustomInput
                placeholder="Alias"
                text={true}
                getValue={(e) =>
                  dispatch({ type: "setNewAlias", newAlias: { e } })
                }
              />
            </Grid>
            <Grid item sx={{marginRight: 1}}>
              <CustomInput
                placeholder="Wallet"
                text={true}
                getValue={(e) =>
                  dispatch({ type: "setNewWallet", newWallet: { e } })
                }
              />
            </Grid>
            <Grid item>
              <AddCircleIcon
                sx={
                  rules.every((element) => element.rule.test(state.newWallet)) &
                  (state.newAlias != "")
                    ? stl.addIcon
                    : stl.addIconBad
                }
                onClick={(e) => dispatch({ type: "addWallet" , portfolioName: props.name })}
                onMouseEnter={() => {
                  if (
                    rules.every((element) =>
                      element.rule.test(state.newWallet)
                    ) &
                    (state.newAlias != "")
                  ) {
                  } 
                }}
                onMouseLeave={() => {}}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </CustomAccordion>

      {dataService.getPortfolioWallets(props.name) != 0 && (
        <Box sx={stl.walletsContainer}>
          {dataService.getPortfolioWallets(props.name).map((wallet) => (
            <PortfolioWallet
              key={uuid()}
              alias={wallet.alias}
              wallet={wallet.address}
              editable={expanded}
              onClick={(value) =>
                dispatch({ type: "deleteWallet", portfolioName: props.name, alias: wallet.alias })
              }
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Portfolio;
