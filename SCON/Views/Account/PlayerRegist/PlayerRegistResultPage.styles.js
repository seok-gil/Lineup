import {StyleSheet} from 'react-native'

import {colors, globalButtonStyle, globalButtonTextStyle} from '../../../Styles'

const styles = StyleSheet.create({
  playerRegistResultWrapper: {
    flexDirection: 'column',
    backgroundColor: colors.WHITE,
    height: '100%',
  },

  playerRegistInner: {
    padding: 30,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  playerRegistTop: {
    width: '100%',
    flex: 1,
  },

  title: {
    fontWeight: '700',
    color: colors.TEXT_DARK,
    fontSize: 23,
    marginBottom: 20,
  },

  subtitle: {
    color: colors.TEXT_DARK,
    marginBottom: 10,
    fontWeight: '700',
  },

  content: {
    color: colors.TEXT_LIGHT,
    fontSize: 13,
  },

  button: globalButtonStyle,

  buttonText: globalButtonTextStyle,
})

export default styles
