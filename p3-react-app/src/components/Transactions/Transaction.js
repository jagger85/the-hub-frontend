import React from "react";
import { Paper, Typography } from "@mui/material";
import { styles } from "./TransactionStyle";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Transaction(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div >
      {props.transaction.lifecycle.execution_trace.action_traces.map((e) => {
        switch (e.act.name) {
          case "resell":
            return (
              <Accordion
              sx={styles.transactionContainer}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    {e.act.name}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    I am an accordion
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Type : {e.act.name}</Typography>
                  <Typography>
                    Token id : {e.act.data.resell.token_id}
                  </Typography>
                  <Typography>Sell price: {e.act.data.resell.price}</Typography>
                  <Typography>
                    Promoter basis point:{" "}
                    {e.act.data.resell.promoter_basis_point}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
            {
              /**  */
            }
          case "cancelresell":
            return (
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={styles.transactionContainer}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {e.act.name}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    I am an accordion
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>Type : {e.act.name}</Typography>
                  <Typography>
                    Token id : {e.act.data.cancelresell.token_id}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );

          case "buy":
            return (
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={styles.transactionContainer}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {e.act.name}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    I am an accordion
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
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
                </AccordionDetails>
              </Accordion>
            );

          case "transfer":
            return (
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={styles.transactionContainer}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {e.act.name}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    I am an accordion
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>Type : {e.act.name}</Typography>
                  <Typography>From : {e.act.data.from}</Typography>
                  <Typography>To : {e.act.data.to}</Typography>
                  <Typography>Amount : {e.act.data.quantity}</Typography>
                </AccordionDetails>
              </Accordion>
            );

          default:
            return (
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={styles.transactionContainer}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    General settings
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    I am an accordion
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Type : {e.act.name}</Typography>
                </AccordionDetails>
              </Accordion>
            );
        }
      })}
    </div>
  );
}
export default Transaction;
