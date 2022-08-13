import {StyleSheet} from 'react-native'

import {colors} from '../../../Styles'

const styles = StyleSheet.create({
    cardWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 223,
        height: 307,
        borderRadius: 10,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        marginHorizontal: 37.5 / 2,
    },

    playerMyCardWrapper: {
        backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
        position: 'relative',
    },

    playerCardWrapper: {
        backgroundColor: colors.WHITE,
    },

    myBadgeIcon: {
        width: 40,
        resizeMode: 'contain',
        position: 'absolute',
        top: -20,
        left: 30,
        zIndex: 30,
    },

    playerCardImage: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        resizeMode: 'contain',
        marginBottom: 20,
        borderRadius: 75,
    },

    emptyCardWrapper: {
        backgroundColor: colors.WHITE,
    },

    emptyCardImage: {
        width: 112,
        height: 112,
        justifyContent: 'center',
        resizeMode: 'contain',
    },

    nameText: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 5,
    },

    subText: {
        marginBottom: 3,
    },
})

export default styles
