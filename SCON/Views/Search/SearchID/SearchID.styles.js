import {StyleSheet} from 'react-native'

import {colors} from '../../../Styles'

const styles = StyleSheet.create({
    searchExpand: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    searchBodyWrapper: {
        flexDirection: 'column',
        height: '95%',
        backgroundColor: colors.WHITE,
    },
    expandText: {
        fontSize: 13,
        fontWeight: '500',
        color: colors.TEXT_DARK,
    },
})

export default styles
