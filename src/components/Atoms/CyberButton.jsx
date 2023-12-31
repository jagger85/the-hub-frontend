import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { colors, boxShadow } from '../../theme'
function CyberButton(props) {
    const style = {
        button: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        container: {
            margin: 1,
            paddingTop: 0.5,
            paddingBottom: 0.1,
            paddingLeft: 2,
            paddingRight: 2,
            borderRadius: 0.5,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
        },
        enabled: {
            backgroundColor: colors.purple[800],
        },
        disabled: {
            backgroundColor: colors.background[700],
        },
        right: {
            clipPath: 'polygon(90% 0, 100% 15%, 100% 100%, 0 100%, 0 0)',
        },
        left: {
            clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 15%)',
        },
    }

    return (
        <Button
            sx={style.button}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            <Box
                sx={[
                    style.container,
                    props.disabled ? style.disabled : style.enabled,
                    props.right ? style.right : style.left,
                ]}
            >
                <Typography
                    variant={props.textVariant}
                    color={colors.background[400]}
                >
                    {props.text}
                </Typography>
            </Box>
        </Button>
    )
}

export default CyberButton
//
