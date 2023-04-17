import React from "react";
import { Paper, Typography, Box, Button, Grid } from "@mui/material";
import { v4 as uuid } from 'uuid';
import { styles } from "./UniqOnSaleStyle";
import img from "../../../assets/uniqtest.png";

/**
 * @param {Object.json} props.uniq - The uniq to display 
 * @returns A MUI Grid that displays the corresponding data 
 */
function UniqOnSale(props) {
  return (
    <Paper sx={styles.uniqContainer}>
      {props.uniq.lifecycle.execution_trace.action_traces.map((e) => {
        return (
          <Grid container sx={styles.uniqContainerIn} key={uuid()}>
            <Grid item xs={12} sx={styles.imgContainer}>
              <Box
                component="img"
                sx={styles.uniqImage}
                alt="Uniq on sale"
                src={img}
              />
            </Grid>

            <Grid item sx={styles.infoContainer} xs={12}>
              <Typography>Collection</Typography>
              <Typography>Name {e.act.data.resell.token_id}</Typography>
              <Typography>Unit</Typography>
              <Typography>Price {e.act.data.resell.price}</Typography>
            </Grid>
            <Grid item sx={styles.buttonContainer} xs={12}>
              <Button variant="outlined">Buy</Button>
            </Grid>
          </Grid>
        );
      })}
    </Paper>
  );
}

export default UniqOnSale;
// <Typography>Token id:{e.act.data.resell.token_id}</Typography>
// <Typography>Seller: {e.act.data.resell.seller} </Typography>
// <Typography>Price: {e.act.data.resell.price}</Typography>
// <Typography>
// Promoter basis point: {e.act.data.resell.promoter_basis_point}
// </Typography>
