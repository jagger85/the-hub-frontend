import React from 'react'
import { useEffect, useState } from 'react'
import { apiCalls } from '../../../utils/apicalls'
import { Paper, Typography, Grid, Divider } from '@mui/material'
import { styles } from './WalletInfoStyle'
import NoData from '../../Atoms/NoData'
import { v4 as uuid } from 'uuid'
import PieBalance from '../../Atoms/PieBalance'
import { colors } from '../../../theme'

/**
 * @returns - A MUI Paper with a grid inside that shows info related to the wallet
 */
function WalletInfo(props) {
    const [info, setInfo] = useState([])
    const [pieInfo, setPieInfo] = useState([])

    useEffect(() => {
        const getInfo = async () => {
            let wallets = []
            let pieInfo = []
            if (props.portfolio.wallets != undefined) {
                for (let wallet of props.portfolio.wallets) {
                    const data = await apiCalls.getWalletInfo(wallet.address)
                    wallets = [...wallets, data]
                    pieInfo = [
                        ...pieInfo,
                        {
                            value: parseInt(data.core_liquid_balance),
                            name: wallet.alias,
                        },
                    ]
                }
                setInfo(wallets)
                setPieInfo(pieInfo)
            }
        }
        console.count('info')
        getInfo()
    }, [props])

    return info.length != 0 ? (
        <Grid container sx={styles.container}>
            <Paper sx={styles.paper}>
                <Grid item xs={12}>
                    <Typography
                        variant="h5medium"
                        color={colors.background[200]}
                    >
                        Net worth
                    </Typography>
                    <Divider />
                </Grid>
                <Grid item sx={styles.balances} key={uuid()} xs={5}>
                    {info.map((wallet) => {
                        return (
                            <Typography
                                variant="h7light"
                                color={colors.background[200]}
                                key={uuid()}
                            >
                                Balance:{' '}
                                {parseInt(wallet.core_liquid_balance).toFixed()}
                            </Typography>
                        )
                    })}
                </Grid>
                <Grid item xs={12}>
                    <PieBalance balances={pieInfo} />
                </Grid>
            </Paper>
        </Grid>
    ) : (
        <NoData text="No data" />
    )
}

export default WalletInfo
