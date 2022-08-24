import {StyleSheet} from 'react-native'
import {colors} from '../../../Styles'

const styles = StyleSheet.create({
  replyRegistWrapper: {
    position: 'absolute',
    zIndex: 15,
    bottom: 0,
    left: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: colors.GRAYE6,
    backgroundColor: colors.WHITE,
  },

  replyRegistInner: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'flex-end',
  },

  textInputWrapper: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },

  replyInputWrapper: {
    borderWidth: 2,
    borderColor: colors.GRAYE6,
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 50,
    borderRadius: 50,
  },

  replySubmit: {
    position: 'absolute',
    right: 40,
  },

  replySubmitText: {
    color: colors.THEME_SKYBLUE,
  },

  replyClose: {
    marginLeft: 10,
  },
})

export default styles
