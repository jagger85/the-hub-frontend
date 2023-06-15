import React from 'react'
import { Typography } from '@mui/material'
import Frame from '../Atoms/Frame'
import UniqImage from '../Atoms/UniqImage'
import { Box } from '@mui/material'
/**
 * @param {*} props - The data to be displayed
 * @returns A Paper MUI component that displays the uniq data
 */
function UniqOwned(props) {
    return (
        <Frame>
            <Box sx={{ width: 8, heigth: 8 }}>
                <UniqImage id={props.uniq.token_factory_id} />
            </Box>
            <Typography>Token id: {props.uniq.id} </Typography>
            <Typography>Factory id: {props.uniq.token_factory_id}</Typography>
            <Typography>Mint date: {props.uniq.mint_date}</Typography>
            <Typography>Serial number: {props.uniq.serial_number}</Typography>
        </Frame>
    )
}

export default UniqOwned
