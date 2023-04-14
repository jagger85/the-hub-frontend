import React from "react";
import { Paper, Typography } from "@mui/material";
import { useEffect, useState,useCallback } from "react";
import { unzip } from "../../scripts/unzipper";

function Collection(props) {
 const [metadata, setMetadata] = useState(null)

useEffect(()=>{
  const getMetadata = async () =>{
    const data = await unzip(props.collection.meta_uris)
    setMetadata(data)
  }
  getMetadata()
  .catch(console.error)
},[])

  return (

    <Paper sx={{ margin: 1, padding: 1 }}>
      <Typography>Id: {props.collection.id} </Typography>
      <Typography>
        Minimum resell price: {props.collection.minimum_resell_price}{" "}
      </Typography>
      <Typography>Max units: {props.collection.max_mintable_tokens}</Typography>
      <Typography>Minted: {props.collection.minted_tokens_no}</Typography>
      {metadata != null &&
        <div>
        <Typography>Description: {metadata.description}</Typography>
        </div>
      }
    </Paper>
  );
}

export default Collection;
