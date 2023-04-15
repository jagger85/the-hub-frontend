import React from 'react'
import { styles } from './UniqOwnedStyle'
import { Paper, Typography } from '@mui/material'
function UniqOwned(props) {
  return (
    <Paper sx={styles.uniqContainer}>
    <Typography>Token id: {props.uniq.id} </Typography>
    <Typography>Factory id: {props.uniq.token_factory_id}</Typography>
    <Typography>Mint date: {props.uniq.mint_date}</Typography>
    <Typography>Serial number: {props.uniq.serial_number}</Typography>
    </Paper>
  )
}

export default UniqOwned