import {StyleSheet} from 'react-native'
import {colors, listElementStyle} from '../../../Styles'

const styles = StyleSheet.create({
  notiElementWrapper: {
    ...listElementStyle,
  },

  notiElementLeft: {
    flex: 1,
  },

  notiTitle: {
    marginBottom: 5,
    color: colors.TEXT_DARK,
    fontWeight: '700',
  },

  notiCreated: {
    fontSize: 12,
    color: colors.TEXT_LIGHT,
  },

  notiElementRight: {
    flexDirection: 'row',
  },

  notiButton: {
    marginRight: 10,
  },

  notiButtonText: {
    color: colors.THEME_SKYBLUE,
  },
})

export default styles
