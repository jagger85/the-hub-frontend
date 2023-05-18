import React from 'react'
import { Box } from '@mui/material'
import { colors, doubleBorder } from '../../theme'

const stl = {
    position: 'absolute',
    right:1300,
    top:400,
    background: colors.background[800],         //'#3C3846',
    borderRadius: 0.5,
    width: 200,
    height: 200,
    boxShadow: doubleBorder
  }

function MyBox() {
  return (
    <Box sx={stl}/>
  )
}

export default MyBox