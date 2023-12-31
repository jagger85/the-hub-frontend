import {
    colors,
    boxShadow,
    boxShadowIn,
    boxShadowDown,
    boxShadowUp,
} from '../../../theme'

export const styles = {
    portfolioManagerContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    wrapper: {
        boxShadow: boxShadow,
        marginTop: 2,
        borderRadius: '4px 4px 0px 0px',
    },

    accordionContainer: {
        backgroundColor: colors.background[1000],
        border: 0,
        boxShadow: boxShadowUp,
        borderRadius: '4px 4px 0px 0px',
    },
    accordionDetails: {},

    expandIcon: {
        color: colors.background[400],
        '&:hover': {
            color: colors.purple[400],
        },
    },

    addIcon: {
        color: colors.background[400],
        '&:hover': {
            color: colors.purple[400],
        },
    },

    addIconBad: {
        color: colors.background[400],
        '&:hover': {
            color: '#f23d64',
            transform: 'rotate(45deg)',
        },
    },

    paper: {
        backgroundColor: colors.background[1000],
        boxShadow: boxShadow,
        borderRadius: 0,
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    addWallet: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    walletsContainer: {
        padding: 2,
        backgroundColor: colors.background[1000],
        borderRadius: '0px 0px 4px 4px',
    },

    wallet: {
        display: 'flex',
        borderRadius: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: colors.background[900],
        overflow: 'hidden',
        boxShadow: boxShadowIn,
        height: '2rem',
        marginBottom: 0.7,
    },

    icon: {
        marginTop: 0,
        color: colors.background[400],
        '&:hover': {
            color: colors.purple[500],
        },
    },

    starSelected: {
        marginTop: 0,
        color: colors.yellow[100],
    },

    deleteIconBox: {
        backgroundColor: colors.background[1000],
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0.5,
        width: 40,
        '&:hover .MuiSvgIcon-root ': {
            color: colors.purple[500],
        },
    },
}
