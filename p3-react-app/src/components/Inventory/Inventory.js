import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import UniqOwned from "./UniqOwned";

function Inventory() {
  const { wallet, network, endpoint } = useContext(AppContext);
  const [inventory , setInventory] = useState(null)

  function getInventory() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      code: "eosio.nft.ft",
      table: "token.a",
      json: true,
      scope: `${wallet}`,
      limit: 10000,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${endpoint}/v1/chain/get_table_rows`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>{
        setInventory(result)
      })
      
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getInventory()
  }, []);

  return (
    <div>
    { inventory != null &&
      inventory.rows.map((e)=>{
        return <UniqOwned uniq={e}/>
      })
    }
    </div>
  );
}

export default Inventory;
