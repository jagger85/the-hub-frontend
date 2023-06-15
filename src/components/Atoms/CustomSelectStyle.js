import { boxShadow, colors } from '../../theme'

export const styles = {
    select: {
        backgroundColor: colors.background[800],

        'label + & .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            boxShadow: boxShadow,
        },
        '& .MuiSvgIcon-root': {
            color: colors.background[400],
        },
    },
    menuItem: {
        '& .MuiInputBase-input': {
            boxShadow: boxShadow,
        },
        '&:focus': {
            //maybe I need it in the future
        },
    },
}
