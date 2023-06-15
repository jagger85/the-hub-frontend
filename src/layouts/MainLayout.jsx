import React from 'react'
import { Box, Grid } from '@mui/material'
import SideBar from '../components/Molecules/SideBar'
import { styles } from './MainLayoutStyle'

function MainLayout({ children }) {
    return (
        <Box sx={styles.root}>
            <SideBar style={styles.sidebar} />
            <Grid container sx={styles.content}>
                <Grid item></Grid>
                {children}
            </Grid>
        </Box>
    )
}

export default MainLayout
