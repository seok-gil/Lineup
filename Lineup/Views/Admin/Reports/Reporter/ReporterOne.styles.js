import {StyleSheet} from 'react-native'
import {colors, listElementStyle} from '../../../../Styles'

const styles = StyleSheet.create({
  reporterOneWrapper: {...listElementStyle},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    marginRight: 10,
  },

  name: {
    color: colors.TEXT_DARK,
    fontWeight: '700',
    marginRight: 10,
  },

  email: {
    color: colors.TEXT_DARK,
    fontSize: 12,
  },
})

export default styles
