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
        variant="h5"
        fontWeight="bold"
        color="white"
        p={3}>
        Welcome back
      </Typography>
      <Typography color='white'>{props.message}</Typography>
    </Box>
  );
}

export default WelcomeBack