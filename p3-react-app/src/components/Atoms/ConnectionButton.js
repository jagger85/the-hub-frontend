import React from "react";
import { Button } from "@mui/material";
import { useState, useCallback } from "react";
import ConnectionDialog from "../Molecules/ConnectionDialog";

function ConnectionButton() {
  
  const [open, setOpen] = useState(false);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const disconnect = () => {
    localStorage.removeItem('wallet')
    forceUpdate()
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
