import React from 'react'
import Dialog from '@mui/material/Dialog'
import { DialogTitle } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { Typography } from '@mui/material'

/**
 * @component JSX functional component that returns a simple dialog
 * @param {boolean} props.open - Opens this dialog
 * @param {()=>void} props.onClose - Callback function for the close
 * @returns A simple dialog with a success message @see msg
 */
function SuccessDialog(props) {
    const msg =
        'Thank you for registering with us! Ups!!! This is just a demo... sooooo come back later'
    return (
        <Dialog open={props.open}>
            <DialogTitle>
                Success!!!
                <Typography gutterBottom>{msg}</Typography>
                <Typography variant="h4">😅</Typography>
                {props.onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={props.onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
        </Dialog>
    )
}

export default SuccessDialog
