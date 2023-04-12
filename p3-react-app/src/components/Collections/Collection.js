import React from 'react'
import { Paper, Typography } from '@mui/material'
import { useEffect } from 'react'
function Collection(props) {

    useEffect(()=>{

    },[])


  return (
    <Paper sx={{margin: 1, padding: 1}}>
    <Typography>Id: {props.collection.id} </Typography>
    <Typography>Minimum resell price: {props.collection.minimum_resell_price} </Typography>
    <Typography>Max units: {props.collection.max_mintable_tokens}</Typography>
    <Typography>Minted: {props.collection.minted_tokens_no}</Typography>
    <Typography>Meta uris: {props.collection.meta_uris.map(e => e)}</Typography>
    </Paper>
  )
}

export default Collection