import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SuccessDialog from '../Molecules/Dialogs/SuccessDialog';

/**
 * @component A simple register button that triggers a dialog when clicked
 * @param {boolean} props.enabled - Enables this button
 */
function RegisterButton(props) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        disabled={props.enabled}
        onClick={handleClickOpen}>
        Register
      </Button>
      <SuccessDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default RegisterButton;
