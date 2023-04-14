import React from 'react'
import { Paper, Typography } from '@mui/material'
function UniqOwned(props) {
  return (
    <Paper sx={{margin:1,padding:1}}>
    <Typography>Token id: {props.uniq.id} </Typography>
    <Typography>Factory id: {props.uniq.token_factory_id}</Typography>
    <Typography>Mint date: {props.uniq.mint_date}</Typography>
    <Typography>Serial number: {props.uniq.serial_number}</Typography>
    </Paper>
  )
}

export default UniqOwned