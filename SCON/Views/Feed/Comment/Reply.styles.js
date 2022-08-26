import {StyleSheet} from 'react-native'
import {colors, globalTextStyle} from '../../../Styles'

const styles = StyleSheet.create({
  replyWrapper: {
    flexDirection: 'column',
    position: 'relative',
    paddingVertical: 10,
    paddingLeft: 20,
  },

  replyWrapperFirst: {
    flexDirection: 'column',
    position: 'relative',
    paddingVertical: 10,
    paddingLeft: 20,
    marginTop: 10,
  },

  replyIcon: {
    position: 'absolute',
    top: 10,
    left: 0,
  },

  replyInfo: {
    color: colors.TEXT_DARK,
    fontWeight: '600',
  },

  replyTop: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  replyTopLeft: {
    flexDirection: 'row',
  },

  viewMoreIcon: {
    transform: [{rotateZ: '90deg'}],
  },

  replyBottom: {
    paddingVertical: 5,
    marginLeft: 50,
  },

  content: {
    color: colors.TEXT_DARK,
  },

  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.GRAYE6,
    resizeMode: 'cover',
    marginHorizontal: 10,
  },
})

export default styles
