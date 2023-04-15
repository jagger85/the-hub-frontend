import React, { useContext, useState } from "react";
import Transaction from "./Transaction";
import Button from "@mui/material/Button";
import { useReducer, useEffect } from "react";
import { apiCalls } from "../../scripts/apicalls";
import { AppContext } from "../App";

const pages = []

const reducer = (page, action) => {
  switch (action.type) {

    case 'increment':
      return {count: page.count +1}
    case "decrement":
      return {count: page.count -1}
    default:
      console.log(action.type + " this action is not supported");
  }
};

function TransactionsTable() {

  const { wallet } = useContext(AppContext);
  const [page, dispatch] = useReducer(reducer, { count : 0 });
  const [loading , setLoading] = useState(true)
  
  useEffect(()=>{
    const getTransactions = async() =>{
      const data = await apiCalls.getWalletTransactions(wallet)
      for(let i=0; i < data.transactions.length /5; i++){
        pages[i] = data.transactions.slice(i * 5, i * 5 + 5 )
      }
      console.log(pages[0])
      setLoading(false)
    }
    getTransactions()
  },[])
  return (

    
    !loading && (
      <div>
        {pages[page.count].map((e, i) => {
          return <Transaction transaction={e} />;
        })}
        <Button 
        variant="outlined" 
        onClick={() =>{dispatch({ type: "decrement"})}}
        disabled={page.count == 0}
        >
          back
        </Button>
        <Button 
        variant="outlined" 
        onClick={() => {dispatch({ type: "increment" })}}
        disabled={page.count == pages.length -1}>
          forward
        </Button>
      </div>
    )
  );
}

export default TransactionsTable;
