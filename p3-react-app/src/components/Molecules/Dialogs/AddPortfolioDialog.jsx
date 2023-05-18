import React, { useState } from "react";
import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Button, Typography } from "@mui/material";
import CustomInput from "../../Atoms/CustomInput";
import { dataService } from "../../../scripts/dataService";
import { styles as stl } from "./DialogStyle";
/**
 * @component - A dialog for setting the wallet to track
 * @param {boolean} props.close - To close the dialog
 * @param {boolean} props.open - To open the dialog
 * @returns
 */
function AddPortfolioDialog(props) {
  const [portfolioName, setPortfolioName] = useState("");

  const portfolioNameChanged = (e) => {
    setPortfolioName(e.target.value);
  };

  const setPortfolio = () => {
    dataService.addPortfolio(portfolioName)
    props.close()
  }

  function isValid() {
    return portfolioName != "";
  }

  return (
    <Dialog onClose={props.close} open={props.open}>
      <Grid container sx={stl.container}>
        <Grid item sx={[stl.item,stl.title]}>
          <Typography variant="h5">Add new portafolio</Typography>
        </Grid>
        <Grid item sx={stl.item}>
          <CustomInput
            text={true}
            placeholder="Add your portfolio name"
            getValue={portfolioNameChanged}
          />
        </Grid>
        <Grid item sx={stl.item}>
          <Button onClick={setPortfolio} disabled={!isValid()}>
            <Typography>Add portfolio</Typography>
          </Button>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Dialog>
  );
}

export default AddPortfolioDialog;
