import {StyleSheet} from 'react-native'
import {colors, listElementStyle} from '../../Styles'

const styles = StyleSheet.create({
  playerCardWrapper: {
    ...listElementStyle,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  playerCardInfo: {
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 3,
    color: colors.TEXT_DARK,
  },

  playerCardDate: {
    fontSize: 11,
    color: colors.TEXT_LIGHT,
  },
})

export default styles
