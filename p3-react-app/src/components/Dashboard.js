import React, { useContext } from 'react'
import { AppContext } from './App'
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'



function Dashboard() {

  const {wallet,network,endpoint} = useContext(AppContext)
  const [info, setInfo] = useState(null)

  useEffect(() =>{
    fetch(`${endpoint}/v1/chain/get_account`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `{ "account_name": "${wallet}" }`
  })
      .then(res => res.json())
      .then(data => {
        setInfo(data)
      })   
  },[])


  return (
    info != null &&
    <div>
    <h1>Dashboard</h1>
    
    <Typography>Wallet : {info.account_name}</Typography>
    <Typography>Balance : {info.core_liquid_balance}</Typography>
    <Typography>Account created : {info.created}</Typography>
    </div>
    )
  }

export default Dashboard