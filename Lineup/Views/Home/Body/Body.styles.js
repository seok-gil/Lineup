import {StyleSheet} from 'react-native'

import {colors} from '../../../Styles'

const styles = StyleSheet.create({
  bodyWrapper: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: colors.GRAYF6,
  },

  bodyTextWrapper: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 26,
  },

  bodyTextLarge: {
    width: 134,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: colors.TEXT_DARK,
    marginBottom: 4,
  },

  bodyTextPlayer: {
    width: 159,
  },

  bodyTextSmall: {
    fontSize: 12,
    alignItems: 'center',
    color: colors.TEXT_LIGHT,
  },

  textImportant: {
    color: colors.THEME_SKYBLUE,
  },

  swiperWrapper: {},

  swiperCardWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
})

export default styles
