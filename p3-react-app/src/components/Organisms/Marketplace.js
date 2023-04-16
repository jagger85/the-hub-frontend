import React from "react";
import { useEffect, useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { sectionStyle as stl } from "./SectionStyle";
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
    <Box>
      <Grid container xs={12}>
        <Grid item>
          <Typography variant="h3" sx={stl.sectionTitle}>
            Marketplace
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {uniqsOnSale != null && (
            <Gallery
              title="On sale"
              amount={12}
              array={uniqsOnSale}
              type={"uniqsOnSale"}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Marketplace;
