import React from "react";
import { useEffect } from "react";
import { AppContext } from "../App";
import { useContext, useState } from "react";
import Collection from "./Collection";
import { Typography } from "@mui/material";

function Collections() {
  const { wallet, network, endpoint } = useContext(AppContext);
  const [collections, setCollections] = useState(null);
  const [page, setPage] = useState(null);

  function unzip(url) {
    return;
  }

  useEffect(() => {
    fetch(`${endpoint}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: '{"scope":"eosio.nft.ft", "code":"eosio.nft.ft", "table":"factory.a", "json": true}',
    })
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
      });
  }, []);

  return (
    <div>
      <Typography>Collections</Typography>

      {collections != null && 
     
        collections.rows.map(e => <Collection collection={e}/>)
        
      }
    </div>
  );
}

export default Collections;
