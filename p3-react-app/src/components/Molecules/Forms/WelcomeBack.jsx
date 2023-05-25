import React from 'react';
import { Box, Typography } from '@mui/material';

export function WelcomeBack(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography
        variant="h5medium"
        fontWeight="bold"
        color="white"
        >
        Welcome back
      </Typography>
      <Typography variant='h6light' >{props.message}</Typography>
    </Box>
  );
}

export default WelcomeBack