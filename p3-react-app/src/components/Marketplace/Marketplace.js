import React from "react";
import { useEffect, useState } from "react";
import UniqOnSale from "./UniqOnSale";
import { Typography } from "@mui/material";
import { apiCalls } from "../../scripts/apicalls";
function Marketplace() {
  const [uniqsOnSale, setUniqsOnSale] = useState(null);

  useEffect(() => {
    const getUniqsOnSale = async () => {
      const data = await apiCalls.getUniqsOnSale();
      setUniqsOnSale(data);
    };
    getUniqsOnSale();
  }, []);

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
