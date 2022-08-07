import {StyleSheet} from 'react-native'

import {colors, globalButtonTextStyle, listElementStyle} from '../../../Styles'

const styles = StyleSheet.create({
  feedWrapper: {
    ...listElementStyle,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  feedContent: {
    color: colors.TEXT_DARK,
    marginBottom: 20,
  },

  feedLikedBox: {flexDirection: 'row'},

  likeIcon: {
    width: 20,
    height: 15,
    resizeMode: 'contain',
    marginRight: 5,
  },

  likeText: {
    marginRight: 10,
    color: colors.TEXT_LIGHT,
  },
})

export default styles
