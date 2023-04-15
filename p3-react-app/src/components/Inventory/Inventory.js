import React, { useEffect, useState } from "react";
import UniqOwned from "./UniqOwned";
import { apiCalls } from "../../scripts/apicalls";
import { Typography } from "@mui/material";
import Gallery from "../Molecules/Gallery";
function Inventory() {
  const  wallet  = localStorage.getItem('wallet');
  const [inventory , setInventory] = useState(null)


  useEffect(() => {
    const getInventory = async  () =>{
      const data = await apiCalls.getWalletUniqs(wallet)
      setInventory(data)
    }
    getInventory()
  }, []);

  return (
    <div>
    <Typography variant="h3">Inventory</Typography>
    { inventory != null &&
      
       <Gallery title='Your uniqs' amount={7} array={inventory} type={'uniqsOwned'}/>
      
    }
    </div>
  );
}

export default Inventory;
