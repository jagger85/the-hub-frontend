import React from "react";
import { useEffect, useState } from "react";
import UniqOnSale from "./UniqOnSale";
import { Typography } from "@mui/material";
function Marketplace() {
  const [uniqsOnSale, setUniqsOnSale] = useState(null);

  useEffect(() => {
    getUniqsOnSale();
  }, []);

  function getUniqsOnSale() {
    var raw = "";

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.mainnet.ultra.io/v0/search/transactions?q=action%3Aresell&start_block=0&sort=desc&block_count=5000000&limit=25&cursor=&with_reversible=true",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setUniqsOnSale(result);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <Typography>Uniqs on sale</Typography>
      {uniqsOnSale != null &&
        uniqsOnSale.transactions.map((e) => {
          return <UniqOnSale uniq={e} />;
        })}
    </div>
  );
}

export default Marketplace;
