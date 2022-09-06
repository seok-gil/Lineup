import {StyleSheet} from 'react-native'

import {colors} from '../../Styles'

const styles = StyleSheet.create({
    searchInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        borderRadius: 100,
        height: 50,
        borderColor: colors.THEME_SKYBLUE,
        borderWidth: 2,
        zIndex : -1,
    },

    searchInputIcon: {
        width: 22,
        marginRight: 12,
        resizeMode: 'contain',
    },

    input: {
        height: 50,
        width: 230,
        margin: 12,
        padding: 10,
        zIndex : 10
    },
})

export default styles
