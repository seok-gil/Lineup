import {StyleSheet} from 'react-native'
import {colors} from '../../../Styles/constants'

const styles = StyleSheet.create({
    inquiryQnAWrapper: {
        backgroundColor: colors.GRAYF6,
    },

    inquiryQuestion: {
        padding: 30,
    },

    letter: {
        color: colors.TEXT_DARK,
        fontWeight: '700',
        fontSize: 17,
        marginBottom: 8,
    },

    content: {
        color: colors.TEXT_DARK,
        fontWeight: '500',
    },
})

export default styles
