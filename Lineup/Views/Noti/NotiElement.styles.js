import {StyleSheet} from 'react-native'
import {colors, listElementStyle} from '../../Styles'

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
  },

  notiCreated: {
    fontSize: 12,
    color: colors.TEXT_LIGHT,
  },

  expanded: {
    ...listElementStyle,
    backgroundColor: colors.GRAYF6,
  },

  expandedContent: {
    fontSize: 13,
    color: colors.TEXT_DARK,
  },
})

export default styles
