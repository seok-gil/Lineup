import {StyleSheet} from 'react-native'

import {
    colors,
    globalButtonStyle,
    globalButtonTextStyle,
    globalInputStyle,
    globalLargeInputStyle,
} from '../../Styles'

const styles = StyleSheet.create({
    inquiryScreenWrapper: {
        backgroundColor: colors.WHITE,
        width: '100%',
        height: '100%',
        padding: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    inquiryScreenInner: {
        width: '100%',
    },

    inquiryScreenLabel: {
        fontWeight: '700',
        marginBottom: 16,
        color: colors.TEXT_DARK,
    },

    titleInput: {...globalInputStyle, marginBottom: 16},

    contentInput: globalLargeInputStyle,

    inquiryTextWrapper: {
        width: '100%',
    },

    inquiryButton: globalButtonStyle,

    inquiryButtonText: globalButtonTextStyle,
})

export default styles
