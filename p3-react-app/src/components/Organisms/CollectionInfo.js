import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CollectionUniq from "../Molecules/CollectionUniq";
import { apiCalls } from "../../scripts/apicalls";
import { Grid, Typography } from "@mui/material";
import { styles as stl } from "./PagesStyle";

function CollectionInfo() {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const getCollection = async () => {
      const data = await apiCalls.getCollectionById(id);
      setCollection(data.rows[0]);
    };
    getCollection();
  }, []);

  return (
    <Grid container xs={12} sx={stl.container}>
      <Grid item xs={12} sx={stl.titleContainer}>
        <Typography>Collection</Typography>
      </Grid>
      <Grid item xs={12} sx={stl.section}>
        {collection != null && <CollectionUniq collection={collection} />}
      </Grid>
    </Grid>
  );
}

export default CollectionInfo;
