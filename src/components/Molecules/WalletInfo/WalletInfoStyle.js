import { colors, boxShadow } from '../../../theme'

export const styles = {
    container: {
        height: '100%',
    },
    paper: {
        padding: 2,
        backgroundColor: colors.background[1000],
        boxShadow: boxShadow,
        width: '100%',
    },
    balances: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 1,
        marginTop: 1,
    },
}
