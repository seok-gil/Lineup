import {StyleSheet} from 'react-native'

import {colors, listElementStyle} from '../../../Styles'

const styles = StyleSheet.create({
  followPageWrapper: {
    height: '100%',
    backgroundColor: colors.WHITE,
  },

  titleWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAYE6,
    padding: 20,
  },

  title: {
    fontWeight: '600',
    color: colors.TEXT_DARK,
  },
})

export default styles
