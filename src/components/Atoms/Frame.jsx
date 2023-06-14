import React from 'react'
import { Box } from '@mui/material'
import { colors, doubleBorder } from '../../theme'

const stl = {
    background: colors.background[800],         //'#3C3846',
    borderRadius: 0.5,
    boxShadow: doubleBorder
  }

function Frame({children}) {
  return (
    <Box sx={stl}> 
    {children}
    </Box>
  )
}

export default Frame