import {colors, boxShadow} from '../../theme'

export const styles = {
    uniqContainer:{
        width: 250,
        height:300,
        margin: 1,
        padding: 1,
        backgroundColor: colors.background[900],
        boxShadow: boxShadow

    },
    uniqImage: {
        height: 200,
        width: 200,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
    }
}