import {StyleSheet} from 'react-native'

import {colors} from '../../../../Styles'

const styles = StyleSheet.create({
    searchBodyWrapper: {
        flexDirection: 'column',
        height: '100%',
        backgroundColor: colors.WHITE,
    },
    searchExpand: {
        paddingVertical: 20,
        alignItems: 'center',
    },

    expandText: {
        fontSize: 13,
        fontWeight: '500',
        color: colors.TEXT_DARK,
    },
})

export default styles
