import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Collection from "./Collection";
import { Typography } from "@mui/material";
import { apiCalls } from "../../scripts/apicalls";
import Gallery from "../Molecules/Gallery";
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
      <div>
      <Typography variant="h3">Collections</Typography>
      <Gallery
      title='fas'
      amount={5}
      array={collections}
      type='collections'
      />
      </div>
      )
      );
}

export default Collections;
