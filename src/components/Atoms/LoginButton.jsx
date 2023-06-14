import React from 'react'
import { Button } from '@mui/material'
function LoginButton() {

    const handleClick = () => {
        console.log('cl')
      };

  return (
    <Button
    variant="contained"
    onClick={handleClick}>
    Login
  </Button>
  )
}

export default LoginButton