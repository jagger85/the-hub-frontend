import React from "react";
import { useEffect, useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { sectionStyle as stl } from "./SectionStyle";
import { apiCalls } from "../../scripts/apicalls";
import Gallery from "../Molecules/Gallery/Gallery";
import GalleryDrop from "../Molecules/Gallery/GalleryDrop";
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
    <Box>
      <Grid container xs={12}>
        <Grid item>
          <Typography variant="h3" sx={stl.sectionTitle}>
            Marketplace
          </Typography>
        </Grid>
        <Grid item xs={12}>
        {uniqsOnSale != null &&(
          <Box>
          <GalleryDrop title='On sale'>
          <Gallery array={uniqsOnSale} amount={10} type='uniqsOnSale'/>
          </GalleryDrop>
          </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Marketplace;
