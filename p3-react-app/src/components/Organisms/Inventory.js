import React, { useEffect, useState } from "react";
import UniqOwned from "../Inventory/UniqOwned";
import { apiCalls } from "../../scripts/apicalls";
import { Typography, Box, Grid } from "@mui/material";
import Gallery from "../Molecules/Gallery/Gallery";
import { sectionStyle as stl } from "./SectionStyle";

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
    <Box>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={stl.sectionTitle}>
            Inventory
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
    </Box>
  );
}

export default Inventory;
