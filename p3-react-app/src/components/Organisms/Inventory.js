import React, { useEffect, useState } from "react";
import UniqOwned from "../Inventory/UniqOwned";
import { apiCalls } from "../../scripts/apicalls";
import { Typography, Box, Grid } from "@mui/material";
import Gallery from "../Molecules/Gallery/Gallery";
import { styles as stl } from "./PagesStyle";

function Inventory() {
  const wallet = localStorage.getItem("wallet");
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    const getInventory = async () => {
      const data = await apiCalls.getWalletUniqs(wallet);
      setInventory(data);
    };
    getInventory();
  }, []);

  return (
      <Grid container xs={12} sx={stl.container}>
        <Grid item xs={12} sx={stl.titleContainer}>
          <Typography variant="h3">
            Inventory
          </Typography>
        </Grid>
        <Grid item xs={12} sx={stl.section}>
          {inventory != null && (
            <Gallery
              title="Your uniqs"
              amount={10}
              array={inventory}
              type={"uniqsOwned"}
            />
          )}
        </Grid>
      </Grid>
  );
}

export default Inventory;
