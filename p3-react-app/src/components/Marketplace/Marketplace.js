import React from "react";
import { useEffect, useState } from "react";
import UniqOnSale from "./UniqOnSale";
import { Paper, Typography } from "@mui/material";
import { apiCalls } from "../../scripts/apicalls";
import { styles } from './MarketplaceStyle'
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
      <Typography variant="h3">Marketplace</Typography>
      
      <Paper sx={styles.marketContainer}>
      {uniqsOnSale != null &&
        uniqsOnSale.transactions.map((e) => {
          return <UniqOnSale uniq={e} />;
        })}
        </Paper>
    </div>
  );
}

export default Marketplace;
