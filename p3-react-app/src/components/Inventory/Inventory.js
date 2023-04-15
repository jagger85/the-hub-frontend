import React, { useEffect, useState } from "react";
import UniqOwned from "./UniqOwned";
import { apiCalls } from "../../scripts/apicalls";
import { Typography } from "@mui/material";
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
      inventory.rows.map((e)=>{
        return <UniqOwned uniq={e}/>
      })
    }
    </div>
  );
}

export default Inventory;
