import {colors, boxShadow} from '../../theme'

export const styles = {
    uniqContainer:{
        width: 250,
        padding: 1,
        backgroundColor: colors.background[900],
        boxShadow: boxShadow,
        padding: 1
    },
    uniqContainerIn:{
        padding: 1,
        backgroundColor: colors.background[900],
    },
    uniqImage: {
        height: 200,
        width: 200,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
        borderRadius: 1,
    },
    imgContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 1,
    },
    infoContainer: {
        margin: 2
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin:2
    }
}