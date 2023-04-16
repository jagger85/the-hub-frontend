import React from "react";
import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import { styles as stl } from "./PagesStyle";
import { apiCalls } from "../../scripts/apicalls";
import Gallery from "../Molecules/Gallery/Gallery";

function Marketplace() {
  const [uniqsOnSale, setUniqsOnSale] = useState(null);

  useEffect(() => {
    const getUniqsOnSale = async () => {
      const data = await apiCalls.getUniqsOnSale();
      setUniqsOnSale(data);
    };
    getUniqsOnSale();
  }, []);

  return (
    <Grid container xs={12} sx={stl.container}>
      <Grid item xs={12} sx={stl.titleContainer}>
        <Typography variant="h3">Marketplace</Typography>
      </Grid>
      <Grid item xs={12} sx={stl.section}>
        {uniqsOnSale != null && (
          <Gallery
            title="On sale"
            array={uniqsOnSale}
            amount={10}
            type="uniqsOnSale"
          />
        )}
      </Grid>
    </Grid>
  );
}

export default Marketplace;
