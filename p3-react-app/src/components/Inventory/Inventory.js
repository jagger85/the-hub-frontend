import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import UniqOwned from "./UniqOwned";
import { apiCalls } from "../../scripts/apicalls";
function Inventory() {
  const { wallet } = useContext(AppContext);
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
    { inventory != null &&
      inventory.rows.map((e)=>{
        return <UniqOwned uniq={e}/>
      })
    }
    </div>
  );
}

export default Inventory;
