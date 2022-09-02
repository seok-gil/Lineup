import {StyleSheet} from 'react-native'
import {
    colors,
    globalAsteriskStyle,
    globalInputStyle,
    globalTextStyle,
} from '../../../Styles'

const styles = StyleSheet.create({
    centeredView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.BLACK_FADED,
    },

    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '60%',
        justifyContent: 'space-between',
    },

    modalTop: {
        padding: 30,
        alignItems: 'center',
    },

    modalText: {
        ...globalTextStyle,
        fontSize: 15,
        fontWeight: '700',
    },

    modalBottom: {
        height: 45,
        backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: colors.TEXT_DARK,
        fontWeight: '700',
    },
})

export default styles
