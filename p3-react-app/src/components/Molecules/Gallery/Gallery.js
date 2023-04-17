import React from "react";
import { useReducer, useEffect, useState } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import UniqOnSale from "../Uniqs/UniqOnSale";
import Transaction from "../Transactions/Transaction";
import UniqOwned from "../../Inventory/UniqOwned";
import Collection from "../CollectionUniq";
import { styles } from "./GalleryStyle";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, count: state.count + 1 };
    case "decrement":
      return {...state, count: state.count - 1 };
    case 'reset':
     console.log(state)
      return {count:0, pages: []}

    default:
      console.log(action.type + " this action is not supported");
  }
};
/**
 *
 * @param {*} props
 * title
 * amount
 * array
 * type
 * @returns
 */
function Gallery(props) {
  const [state, dispatch] = useReducer(reducer, { count: 0, pages : [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = []
    for (let i = 0; i < props.array.length / props.amount; i++) {
      data[i] = props.array.slice(
        i * props.amount,
        i * props.amount + props.amount
      );
    }
    state.pages = data
    setLoading(false);
  }, [props.array]);
  return (
    !loading && (
      <Grid container spacing={2} sx={styles.container}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={styles.title}>
            {props.title}
          </Typography>
        </Grid>
        {state.pages[state.count].map((e, i) => {
          switch (props.type) {
            case "transactions":
              return (
                <Grid item xs={12}>
                  <Transaction transaction={e} />
                </Grid>
              );
            case "uniqsOnSale":
              return (
                <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
                  <UniqOnSale uniq={e} />
                </Grid>
              );
            case "uniqsOwned":
              return (
                <Grid item xs={12} sm={8} md={6} lg={4} xl={2}>
                  <UniqOwned uniq={e} />
                </Grid>
              );
            case "collections":
              return (
                <Grid item xs={12} sm={8} md={6} lg={4} xl={2}>
                  <Collection collection={e} />
                </Grid>
              );
            default:
              console.log(`${props.type} not supported by gallery component`);
          }
        })}
        <Grid item xs={12}>
          <Box sx={styles.navigationContainer}>
            <Button
              sx={styles.navigationButton}
              variant="outlined"
              onClick={() => {
                dispatch({ type: "decrement" });
              }}
              disabled={state.count == 0}
            >
              back
            </Button>
            <Box sx={styles.pagesDisplay}>
              <Typography>{state.count + 1}</Typography>
              <Typography>&nbsp;&nbsp; / &nbsp;&nbsp;</Typography>
              <Typography>{state.pages.length}</Typography>
            </Box>
            <Button
              sx={styles.navigationButton}
              variant="outlined"
              onClick={() => {
                dispatch({ type: "increment" });
              }}
              disabled={state.count == state.pages.length - 1}
            >
              forward
            </Button>
          </Box>
        </Grid>
      </Grid>
    )
  );
}

export default Gallery;
