import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { styles as stl } from "./PagesStyle";
import { Grid, Typography } from "@mui/material";
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
        <Grid container xs={12} sx={stl.container}>
          <Grid item xs={12} sx={stl.titleContainer}>
            <Typography variant="h3">
              Collections
            </Typography>
          </Grid>
          <Grid item xs={12} sx={stl.section}>
            <Gallery
              title="fas"
              amount={5}
              array={collections}
              type="collections"
            />
          </Grid>
        </Grid>
    )
  );
}

export default Collections;
