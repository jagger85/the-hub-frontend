import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import { colors } from '../../../theme'
export function WelcomeBack(props) {
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Grid item style={{ marginBottom: 10 }}>
                <Box
                    sx={{
                        backgroundColor: colors.background[700],
                        padding: 2,
                        borderRadius: '50%',
                        border: 1,
                        borderColor: colors.background[600],
                    }}
                >
                    <LoginIcon
                        style={{
                            color: colors.background[400],
                            fontSize: '5rem',
                        }}
                    />
                </Box>
            </Grid>
            <Grid item>
                <Typography variant="h5medium" fontWeight="bold" color="white">
                    Welcome back
                </Typography>
            </Grid>
            <Typography variant="h6light">{props.message}</Typography>
        </Grid>
    )
}

export default WelcomeBack
