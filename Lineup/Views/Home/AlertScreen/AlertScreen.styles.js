import {StyleSheet} from 'react-native'

import {colors} from '../../../Styles'

const styles = StyleSheet.create({
    alertWrapper: {
        backgroundColor: colors.WHITE,
        height: '100%',
    },

    alertTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.GRAYE6,
    },

    alertTitle: {
        width: 134,
        fontSize: 20,
        fontWeight: '700',
    },

    alertDeleteAll: {
        fontSize: 11,
        color: colors.THEME_SKYBLUE,
    },
})

export default styles
