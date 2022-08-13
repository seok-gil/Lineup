import {StyleSheet} from 'react-native'

import {colors} from '../../../Styles'

const styles = StyleSheet.create({
    indicatorWrapper: {
        flex: 1,
        flexDirection: 'row',
    },

    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: colors.GRAYC9,
    },

    activeDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: colors.THEME_SKYBLUE,
    },
})

export default styles
