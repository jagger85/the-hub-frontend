import React from 'react'
import { Box, Typography, Slide } from '@mui/material'
import { useState, useRef } from 'react'
import { styles as stl } from './PortfolioManagerStyle'
import DeleteIcon from '@mui/icons-material/Delete'
import { colors } from '../../../theme'

/**
 * @param {String} props.alias - The wallet alias
 * @param {String} props.wallet - The wallet address
 * @param {Boolean} props.editable - Sets the component to editable
 * @returns A MUI Box container for a user wallet
 */
function PortfolioWallet(props) {
    const [checked, setChecked] = useState(false)
    const containerRef = useRef(null)

    return (
        <Box
            sx={stl.wallet}
            ref={containerRef}
            onMouseEnter={() => {
                if (props.editable) setChecked(true)
            }}
            onMouseLeave={() => setChecked(false)}
        >
            <Box sx={{ padding: 1, width: '20%' }}>
                <Typography variant="h7medium" color={colors.background[400]}>
                    {props.alias}
                </Typography>
            </Box>
            <Box sx={{ padding: 1 }}>
                <Typography
                    variant="h7medium"
                    color={colors.background[400]}
                    sx={{ padding: 1 }}
                >
                    {props.wallet}
                </Typography>
            </Box>
            <Slide direction="left" in={checked}>
                <Box
                    sx={stl.deleteIconBox}
                    onClick={() => props.onClick(props.alias)}
                >
                    <DeleteIcon sx={stl.deleteIcon} />
                </Box>
            </Slide>
        </Box>
    )
}

export default PortfolioWallet
