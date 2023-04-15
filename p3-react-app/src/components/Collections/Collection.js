import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { unzip } from "../../scripts/unzipper";
import { styles } from './CollectionStyle'
import { Link } from "react-router-dom";

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
    <Paper sx={styles.paper} >
    <Link to={`/collection/${props.collection.id}`}>
    <Typography>Id: {props.collection.id} </Typography>
    </Link>
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
