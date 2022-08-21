import {StyleSheet} from 'react-native'
import {colors} from '../../Styles'

const styles = StyleSheet.create({
  feedBodyWrapper: {
    flexDirection: 'column',
    backgroundColor: colors.WHITE,
  },

  contentWrapper: {
    padding: 20,
  },

  content: {
    color: colors.TEXT_DARK,
    height: 160,
    overflow: 'scroll',
  },

  time: {
    alignItems: 'flex-end',
  },

  timeText: {
    color: colors.TEXT_LIGHT,
  },

  commentButtons: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderColor: colors.GRAYE6,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },

  icons: {
    flexDirection: 'row',
  },

  iconWrapper: {
    flexDirection: 'row',
    marginRight: 20,
  },

  modify: {
    flexDirection: 'row',
  },

  modifyButton: {
    marginRight: 10,
  },

  text: {
    color: colors.TEXT_DARK,
  },
})

export default styles
