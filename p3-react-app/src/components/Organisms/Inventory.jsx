import React, { useEffect, useState } from "react";
import { apiCalls } from "../../scripts/apicalls";
import { Typography, Grid } from "@mui/material";
import Gallery from "../Molecules/Gallery/Gallery";
import { styles as stl } from "./PagesStyle";
import NoData from "../Atoms/NoData";


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
      <Grid container sx={stl.container}>
        <Grid item xs={12} sx={stl.titleContainer}>
          <Typography variant="h3">
            Inventory
          </Typography>
        </Grid>
        
        { inventory != null & inventory?.length ?  (
          
          <Grid item xs={12} sx={stl.section}>
            <Gallery
              title="Your uniqs"
              amount={10}
              array={inventory}
              type={"uniqsOwned"}
            />
            </Grid>
          ): 
          <Grid item xs={12} sx={stl.section}>
          <NoData text={inventory == null ? 'No wallet connected' : 'No Uniqs holded' }/>
          </Grid>
          
        }
        </Grid>
  );
}

export default Inventory;
