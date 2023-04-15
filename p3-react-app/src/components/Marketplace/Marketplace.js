import React from "react";
import { useEffect, useState } from "react";
import UniqOnSale from "./UniqOnSale";
import { Typography } from "@mui/material";
import { apiCalls } from "../../scripts/apicalls";
import Gallery from "../Molecules/Gallery";
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
       
           <Gallery title='On sale' amount={5} array={uniqsOnSale} type={'uniqsOnSale'} />
      }
    </div>
  );
}

export default Marketplace;
