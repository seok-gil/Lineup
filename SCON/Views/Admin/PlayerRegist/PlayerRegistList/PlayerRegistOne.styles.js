import {StyleSheet} from 'react-native'
import {colors, globalTextStyle, listElementStyle} from '../../../../Styles'

const styles = StyleSheet.create({
  playerRegistOneWrapper: {
    ...listElementStyle,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  playerRegistOneTop: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  playerRegistInfo: {
    fontSize: 15,
    color: colors.TEXT_DARK,
    fontWeight: '600',
  },

  playerRegistTime: {
    color: colors.TEXT_LIGHT,
  },
})

export default styles
