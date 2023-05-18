import React from "react";
import { Button, Grid } from "@mui/material";
import { useReducer } from "react";
import Portfolio from './Portfolio'
import AddPortfolioDialog from "../Dialogs/AddPortfolioDialog";
import { dataService } from "../../../scripts/dataService";
import { styles as stl } from "./PortfolioManagerStyle";
import { v4 as uuid } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    
    case "init":
      return { ...state, portfolios: dataService.portfolios}

    case "openDialog":
      return { ...state, dialog: true };

    case "closeDialog":
      return { ...state, portfolios: dataService.portfolios, dialog: false };

    default:
      console.log(`${action.type} this action is not supported`);
      break;
  }
};

function PortfolioManager() {
  const [state, dispatch] = useReducer(reducer, {
    portfolios: dataService.portfolios,
    dialog: false,
  });

  return (
    <Grid container sx={stl.portfolioManagerContainer}>
      <Grid item>
        <Button onClick={() => dispatch({ type: "openDialog" })}>
          Add a new portfolio
        </Button>
      </Grid>
      <Grid item>
        <AddPortfolioDialog
          close={() => dispatch({ type: "closeDialog" })}
          open={state.dialog}
        />
      </Grid>
      {state.portfolios != null &&
        state.portfolios.map( x  => {
          return(
          <Grid item key={uuid()}>
          <Portfolio name={x.name} key={uuid()} reset={()=> dispatch({type: 'init'})}/>
          </Grid>)
        })}
    </Grid>
  );
}

export default PortfolioManager;
