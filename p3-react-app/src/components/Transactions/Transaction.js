import React from "react";
import { Paper, Typography } from "@mui/material";

function Transaction(props) {
  return (
    <Paper sx={{ margin: 1, padding: 1, minHeight: 120 }}>
      {props.transaction.lifecycle.execution_trace.action_traces.map((e) => {
        switch (e.act.name) {
          case "resell":
            return (
              <div>
                <Typography>Type : {e.act.name}</Typography>
                <Typography>Token id : {e.act.data.resell.token_id}</Typography>
                <Typography>Sell price: {e.act.data.resell.price}</Typography>
                <Typography>
                  Promoter basis point: {e.act.data.resell.promoter_basis_point}
                </Typography>
              </div>
            );

          case "cancelresell":
            return (
              <div>
                <Typography>Type : {e.act.name}</Typography>
                <Typography>
                  Token id : {e.act.data.cancelresell.token_id}
                </Typography>
              </div>
            );

          case "buy":
            return (
              <div>
                <Typography>Type : {e.act.name}</Typography>
                <Typography>Token id : {e.act.data.buy.token_id}</Typography>

                {/** 
              <Typography>Buyer : {e.act.data.buy.buyer}</Typography>
               */}

                <Typography>Receiver : {e.act.data.buy.receiver}</Typography>
                <Typography>Price : {e.act.data.buy.max_price}</Typography>
                {/** 
               <Typography> Promoter id : {e.act.data.buy.promoter_id}
               </Typography>
              */}
              </div>
            );

          case "transfer":
            return (
              <div>
                <Typography>Type : {e.act.name}</Typography>
                <Typography>From : {e.act.data.from}</Typography>
                <Typography>To : {e.act.data.to}</Typography>
                <Typography>Amount : {e.act.data.quantity}</Typography>
              </div>
            );

          default:
            return (
              <div>
                <Typography>Type : {e.act.name}</Typography>
              </div>
            );
        }
      })}
    </Paper>
  );
}
export default Transaction;
