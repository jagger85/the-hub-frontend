import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { sectionStyle as stl } from "./SectionStyle";
import { Grid, Typography, Box } from "@mui/material";
import { apiCalls } from "../../scripts/apicalls";
import Gallery from "../Molecules/Gallery/Gallery";
function Collections() {
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    const getCollections = async () => {
      const data = await apiCalls.getCollections();
      setCollections(data);
    };
    getCollections();
  }, []);

  return (
    collections != null && (
      <Box>
        <Grid container sx={12}>
          <Grid item sx={12}>
            <Typography variant="h3" sx={stl.sectionTitle}>Collections</Typography>
          </Grid>
          <Grid item sx={12}>
            <Gallery
              title="fas"
              amount={5}
              array={collections}
              type="collections"
            />
          </Grid>
        </Grid>
      </Box>
    )
  );
}

export default Collections;
