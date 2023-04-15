import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Collection from "./Collection";
import { Typography } from "@mui/material";
import { apiCalls } from "../../scripts/apicalls";

function Collections() {
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    const getCollections = async () => {
      const data = await apiCalls.getCollections();
      console.log(data)
      setCollections(data);
    };
    getCollections();
  }, []);

  return (
    <div>
      <Typography>Collections</Typography>

      {collections != null &&
        collections.rows.map((e) => <Collection collection={e} />)}
    </div>
  );
}

export default Collections;
