import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import ConnectionDialog from "../Molecules/ConnectionDialog";

function ConnectionButton() {
  const [connected, set] = useState(false);
  const [open, setOpen] = useState(false);

  const disconnect = () => {
    console.log("disconnect");
  };

  const connect = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return connected ? (
    <Button onClick={disconnect}>Disconnect</Button>
  ) : (
    <div>
      <Button onClick={connect}>Connect</Button>
      <ConnectionDialog open={open} close={handleClose} />
    </div>
  );
}

export default ConnectionButton;
