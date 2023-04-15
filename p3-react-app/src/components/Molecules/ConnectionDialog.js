import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Typography, Button } from "@mui/material";
import CustomInput from "../Atoms/CustomInput";
import { useState } from "react";
import { rules } from "../../scripts/validationRules";

function ConnectionDialog(props) {
  const [wallet, setWallet] = useState("");

  /**
   * @function isValid - Checks if user inputs applies a set of rules, also checks that user field is not blank @see rules
   * @returns {boolean}
   */

  function isValid() {
    return rules.every((element) => element.rule.test(wallet));
  }

  const walletChanged = (e) => {
    setWallet(e.target.value);
  };

  const validate = () => {
    console.log(wallet);
  };

  return (
    <Dialog onClose={props.close} open={props.open}>
      <DialogTitle>Connect to ultra</DialogTitle>
      <CustomInput
        text="true"
        placeholder="Enter a wallet address"
        getValue={walletChanged}
      />
      <Button onClick={validate} disabled={!isValid()}>
        Connect
      </Button>
    </Dialog>
  );
}

export default ConnectionDialog;
