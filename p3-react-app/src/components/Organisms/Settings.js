import { Grid, Typography } from '@mui/material'
import React from 'react'
import NetworkSettings from '../Molecules/NetworkSettings'
import {styles as stl} from './PagesStyle'
function Settings() {
  return (
    <Grid container sx={stl.container}>
    <Grid item xs={12} sx={stl.titleContainer}>
    <Typography variant='h3'>Settings</Typography>
    </Grid>
    <Grid item sx={stl.section}>
    <NetworkSettings/>
    </Grid>
    
    </Grid>
  )
}

export default Settings