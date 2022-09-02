import {StyleSheet} from 'react-native'

import {colors, globalButtonStyle, globalButtonTextStyle} from '../../../../Styles'

const styles = StyleSheet.create({
    registWrapper: {
        flexDirection: 'column',
        backgroundColor: colors.WHITE,
        height: '100%',
    },

    registTop: {
        backgroundColor: colors.GRAYE6,
        paddingHorizontal: 25,
        width: '100%',
        paddingVertical: 18,
    },

    registTopText: {
        fontWeight: '500',
    },

    registMiddle: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },

    registMiddleTop: {
        width: '100%',
    },

    checkWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 18,
    },

    checkbox: {
        transform: [{scale: 0.6}],
        marginRight: 10,
    },

    checkAllText: {
        fontSize: 16,
        color: colors.TEXT_DARK,
        fontWeight: '700',
    },

    checkText: {
        color: colors.TEXT_DARK,
    },

    checkWrapperSmall: {
        flexDirection: 'row',
        // alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
    },

    loginButton: {
        ...globalButtonStyle,
        marginBottom: 30,
    },

    loginButtonNotAvailable: {
        ...globalButtonStyle,
        marginBottom: 30,
        backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
    },

    loginButtonText: globalButtonTextStyle,
})

export default styles
