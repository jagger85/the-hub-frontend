import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import ConnectionDialog from '../Molecules/ConnectionDialog'

const style = {
    position: 'absolute',
    right: 40,
    top: 20
}


function ConnectionButton() {
  
  const [open, setOpen] = useState(false);
  const disconnect = () => {
    localStorage.removeItem('wallet')
    window.location.reload(false);
  };

  const connect = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log('close')
    setOpen(false);
  };

  return localStorage.getItem('wallet') ? (
    <Button sx={style} onClick={disconnect}>Disconnect</Button>
  ) : (
    <div>
      <Button sx={style} onClick={connect}>Connect</Button>
      <ConnectionDialog open={open} close={handleClose} />
    </div>
  );
}

export default ConnectionButton;
