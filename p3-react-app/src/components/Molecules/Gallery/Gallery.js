import React from "react";
import { useReducer, useEffect, useState } from "react";
import { Grid, Typography, Button, Paper } from "@mui/material";
import UniqOnSale from "../../Marketplace/UniqOnSale";
import Transaction from "../../Transactions/Transaction";
import UniqOwned from "../../Inventory/UniqOwned";
import Collection from "../../Organisms/Collection";
import { styles } from "./GalleryStyle";
const pages = [];

const reducer = (page, action) => {
  switch (action.type) {
    case "increment":
      return { count: page.count + 1 };
    case "decrement":
      return { count: page.count - 1 };
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
  const [page, dispatch] = useReducer(reducer, { count: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    for (let i = 0; i < props.array.length / props.amount; i++) {
      pages[i] = props.array.slice(
        i * props.amount,
        i * props.amount + props.amount
      );
    }
    setLoading(false);
  }, []);
  return (
    !loading && (
      <Paper sx={styles.galleryContainer}>
        <Grid container spacing={2} sx={styles.uniqContainer}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={styles.galleryTitle}>
              {props.title}
            </Typography>
          </Grid>
          {pages[page.count].map((e, i) => {
            switch (props.type) {
              case "transactions":
                return (
                  <Grid item xs={12}>
                    <Transaction transaction={e} />
                  </Grid>
                );
              case "uniqsOnSale":
                return (
                  <Grid item xs={12} sm={8}  md={6} lg={4} xl={2}>
                    <UniqOnSale uniq={e} />
                  </Grid>
                );
              case "uniqsOwned":
                return (
                  <Grid item xs={12} sm={8}  md={6} lg={4} xl={2}>
                    <UniqOwned uniq={e} />
                  </Grid>
                );
              case "collections":
                return (
                  <Grid item xs={12} sm={8}  md={6} lg={4} xl={2}>
                    <Collection collection={e} />
                  </Grid>
                );
              default:
                console.log(`${props.type} not supported by gallery component`);
            }
          })}
          <Grid item xs={12} sx={styles.galleryButtonContainer}>
            <Button
              sx={styles.galleryButton}
              variant="outlined"
              onClick={() => {
                dispatch({ type: "decrement" });
              }}
              disabled={page.count == 0}
            >
              back
            </Button>
            <Button
              sx={styles.galleryButton}
              variant="outlined"
              onClick={() => {
                dispatch({ type: "increment" });
              }}
              disabled={page.count == pages.length - 1}
            >
              forward
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  );
}

export default Gallery;
