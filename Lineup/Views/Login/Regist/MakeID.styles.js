import {StyleSheet} from 'react-native'

import {colors, globalButtonStyle, globalButtonTextStyle} from '../../../Styles'

const styles = StyleSheet.create({
    makeIDwrapper: {
        flexDirection: 'column',
        backgroundColor: colors.WHITE,
        height: '100%',
    },

    makeIDInner: {
        padding: 30,
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    makeIDTop: {
        width: '100%',
    },

    input: {
        width: '100%',
        paddingVertical: 10,
        marginBottom: 10,
        borderBottomColor: colors.GRAYE6,
        borderBottomWidth: 2,
    },

    label: {
        fontWeight: '700',
        color: colors.TEXT_DARK,
        fontSize: 14,
    },

    labelBottom: {
        fontWeight: '700',
        color: colors.TEXT_DARK,
        fontSize: 14,
        marginTop: 10,
    },

    email: {
        position: 'relative',
    },

    sendButton: {
        position: 'absolute',
        top: 11,
        right: 5,
        height: 16,
        color: colors.GRAYE6,
    },

    sendButtonText: {
        color: colors.THEME_SKYBLUE,
    },

    sendButtonOffText: {
        color: colors.TEXT_LIGHT,
    },

    errorMessageWrapper: {
        height: 20,
    },

    errorMessage: {
        position: 'absolute',
        top: 2,
        color: colors.RED,
        fontSize: 12,
    },

    loginButton: globalButtonStyle,

    loginButtonNotAvailable: {
        ...globalButtonStyle,
        backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
    },

    loginButtonText: globalButtonTextStyle,
})

export default styles
