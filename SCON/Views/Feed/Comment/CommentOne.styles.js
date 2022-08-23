import {StyleSheet} from 'react-native'
import {colors, listElementStyle} from '../../../Styles'

const styles = StyleSheet.create({
  commentWrapper: {
    ...listElementStyle,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  commentTop: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  commentTopLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.GRAYE6,
    resizeMode: 'cover',
    marginRight: 10,
  },

  ellipsis: {
    transform: [{rotateZ: '90deg'}],
  },

  commentInfo: {
    color: colors.TEXT_DARK,
  },

  commentContent: {
    marginTop: 8,
    marginBottom: 13,
    color: colors.TEXT_DARK,
    marginLeft: 40,
  },

  commentBottom: {
    marginLeft: 40,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  likeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 5,
  },

  commentInfoLight: {
    color: colors.TEXT_LIGHT,
  },
})

export default styles
