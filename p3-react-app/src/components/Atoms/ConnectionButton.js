import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import ConnectionDialog from "../Molecules/ConnectionDialog";

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
    <Button onClick={disconnect}>Disconnect</Button>
  ) : (
    <div>
      <Button onClick={connect}>Connect</Button>
      <ConnectionDialog open={open} close={handleClose} />
    </div>
  );
}

export default ConnectionButton;
