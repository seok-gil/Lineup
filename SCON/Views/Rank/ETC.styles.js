import {StyleSheet} from 'react-native'
import {colors, globalTextStyle, listElementStyle} from '../../Styles'

const styles = StyleSheet.create({
  etcWrapper: {
    ...listElementStyle,
    flexDirection: 'row',
  },

  index: {
    color: colors.TEXT_DARK,
    fontSize: 17,
    fontWeight: '700',
    marginRight: 20,
  },

  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 28,
    resizeMode: 'contain',
    marginRight: 20,
  },

  profileWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileInnerWrapper: {
    flexDirection: 'row',
  },

  name: {
    color: colors.TEXT_DARK,
    fontSize: 17,
    fontWeight: '700',
    marginRight: 3,
  },

  from: {
    marginTop: 3,
    color: colors.TEXT_LIGHT,
  },

  likeCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  heart: {
    width: 10,
    resizeMode: 'contain',
    marginRight: 5,
  },
  likes: {
    color: colors.TEXT_DARK,
    fontSize: 17,
    fontWeight: '700',
  },
})

export default styles
