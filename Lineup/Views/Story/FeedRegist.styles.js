import {StyleSheet} from 'react-native'

import {
    colors,
    globalButtonStyle,
    globalButtonTextStyle,
    globalLargeInputStyle,
} from '../../Styles'

const styles = StyleSheet.create({
    feedRegistWrapper: {
        backgroundColor: colors.WHITE,
        flex: 1,
        width: '100%',
        // alignItems: 'center',
    },

    feedInnerWrapper: {
        height: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
    },

    feedRegistTextWrapper: {
        width: '100%',
    },

    feedRegistLabel: {
        fontWeight: '700',
        marginBottom: 16,
        color: colors.TEXT_DARK,
    },

    feedRegistTextInput: globalLargeInputStyle,

    feedRegistButtonWrapper: {
        alignItems: 'center',
    },
    feedRegistButton: {
        width: 300,
        height: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.THEME_SKYBLUE,
    },

    feedRegistButtonText: globalButtonTextStyle,
})

export default styles
