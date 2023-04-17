import React from 'react'
import { styles } from './UniqOwnedStyle'
import { Paper, Typography } from '@mui/material'
/**
 * @param {*} props - The data to be displayed
 * @returns A Paper MUI component that displays the uniq data
 */
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