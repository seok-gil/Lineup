import {StyleSheet} from 'react-native'

import {colors} from '../../../Styles'

const styles = StyleSheet.create({
    profileInnerWrapper: {
        position: 'relative',
        width: '100%',
        height: 300,
    },

    backgroundImage: {
        width: '100%',
        resizeMode: 'cover',
        zIndex: 2,
    },

    profileImage: {
        position: 'absolute',
        top: 75,
        left: 30,
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderColor: colors.WHITE,
        borderWidth: 4,
        borderRadius: 40,
        zIndex: 4,
    },

    profileBottom: {
        zIndex: 3,
        position: 'absolute',
        justifyContent: 'space-between',
        width: '100%',
        bottom: 0,
        height: '55%',
        flexDirection: 'column',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: colors.WHITE,
        paddingTop: 30,
        paddingHorizontal: 30,
        paddingBottom: 15,
    },

    playerInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    playerInfoLeft: {
        flexDirection: 'column',
    },

    playerMajor: {
        color: colors.TEXT_DARK,
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 8,
    },

    playerSchool: {
        color: colors.TEXT_LIGHT,
    },
})

export default styles
