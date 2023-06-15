import React from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import { Button } from '@mui/material'
import CustomInput from '../../Atoms/CustomInput'
import { useState } from 'react'
import { rules } from '../../../utils/validationRules'

/**
 * @component - A dialog for setting the wallet to track
 * @param {boolean} props.close - To close the dialog
 * @param {boolean} props.open - To open the dialog
 * @returns
 */
function ConnectionDialog(props) {
    const [wallet, setWallet] = useState('')

    /**
     * @function isValid - Checks if user inputs applies a set of rules @see rules
     * @returns {boolean} - if the address is correct
     */
    function isValid() {
        return rules.every((element) => element.rule.test(wallet))
    }

    const walletChanged = (e) => {
        setWallet(e.target.value)
    }

    const setAddress = () => {
        localStorage.setItem('wallet', wallet)
        window.location.reload(false)
    }

    return (
        <Dialog onClose={props.close} open={props.open}>
            <DialogTitle>Connect to ultra</DialogTitle>
            <CustomInput
                text="true"
                placeholder="Enter a wallet address"
                getValue={walletChanged}
            />
            <Button onClick={setAddress} disabled={!isValid()}>
                Connect
            </Button>
        </Dialog>
    )
}

export default ConnectionDialog
