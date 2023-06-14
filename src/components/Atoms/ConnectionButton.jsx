import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import ConnectionDialog from "../Molecules/Dialogs/ConnectionDialog";

const style = {
  position: "absolute",
  right: 40,
  top: 20,
}

/**
 * @component - A custom button with a hard coded position 
 * that opens a dialog for the user to introduce a wallet 
 * address, it checks if there is a wallet
 * on local storage to display connect or disconnect acordingly
 * @returns - A MUI button
 */
function ConnectionButton() {
  const [open, setOpen] = useState(false);
  const disconnect = () => {
    localStorage.removeItem("wallet");
    window.location.reload(false);
  };

  const connect = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return localStorage.getItem("wallet") ? (
    <Button sx={style} onClick={disconnect}>
      Disconnect
    </Button>
  ) : (
    <div>
      <Button sx={style} onClick={connect}>
        Connect
      </Button>
      <ConnectionDialog open={open} close={handleClose} />
    </div>
  );
}

export default ConnectionButton;
