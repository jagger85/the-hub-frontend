import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import { styles } from "./UniqOnSaleStyle";
import img from '../../assets/uniqtest.png'
function UniqOnSale(props) {
  return (
    <Paper sx={styles.uniq}>
      {props.uniq.lifecycle.execution_trace.action_traces.map((e) => {
        return (
          <div>
            <Box
              component="img"
              sx={styles.uniqImage}
              alt="Uniq on sale"
              src={img}
            />
            <Typography>Token id:{e.act.data.resell.token_id}</Typography>
            <Typography>Seller: {e.act.data.resell.seller} </Typography>
            <Typography>Price: {e.act.data.resell.price}</Typography>
            <Typography>
              Promoter basis point: {e.act.data.resell.promoter_basis_point}
            </Typography>
            <Button variant="outlined">Buy</Button>
          </div>
        );
      })}
    </Paper>
  );
}

export default UniqOnSale;
