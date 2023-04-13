import React from "react";
import { Paper, Typography } from "@mui/material";

function UniqOnSale(props) {
  return (
    <Paper sx={{ margin: 1, padding: 1 }}>
      {props.uniq.lifecycle.execution_trace.action_traces.map((e) => {
        return (
          <div>
            <Typography>Token id:{e.act.data.resell.token_id}</Typography>
            <Typography>Seller: {e.act.data.resell.seller} </Typography>
            <Typography>Price: {e.act.data.resell.price}</Typography>
            <Typography>Promoter basis point: {e.act.data.resell.promoter_basis_point}</Typography>
          </div>
        );
      })}
    </Paper>
  );
}

export default UniqOnSale;
