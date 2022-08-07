import {StyleSheet} from 'react-native'

import {colors, listElementStyle} from '../../Styles'

const styles = StyleSheet.create({
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 100,
    height: 50,
    borderColor: colors.THEME_SKYBLUE,
    borderWidth: 2,
  },

  searchInputIcon: {
    width: 22,
    marginRight: 12,
    resizeMode: 'contain',
  },

  input: {
    height: 50,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  viewPlayerWrapper: {...listElementStyle},

  viewPlayerImage: {
    width: 50,
    height: 50,
    marginRight: 25,
    resizeMode: 'contain',
  },

  viewPlayerInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  playerName: {
    fontSize: 14,
    maxWidth: 200,
    fontWeight: '700',
    marginBottom: 5,
    color: colors.TEXT_DARK,
  },

  playerDescription: {
    fontSize: 11,
    maxWidth: 200,
    color: colors.TEXT_LIGHT,
  },
})

export default styles

// searchScreenWrapper: {
//     flexDirection: 'column',
//     backgroundColor: colors.WHITE,
//     height: '100%',
//   },
//   searchScreenTop: {
//     paddingHorizontal: 25,
//     paddingVertical: 20,
//   },
