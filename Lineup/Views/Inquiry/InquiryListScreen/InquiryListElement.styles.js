import {StyleSheet} from 'react-native'
import {colors, listElementStyle} from '../../../Styles'

const styles = StyleSheet.create({
  inquiryListElementWrapper: {
    ...listElementStyle,
    backgroundColor: colors.WHITE,
  },

  inquiryLeft: {
    flex: 1,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  titleArrow: {
    marginHorizontal: 5,
    transform: [{rotateZ: '270deg'}],
  },

  qnaInfo: {
    color: colors.TEXT_DARK,
    fontSize: 15,
  },

  qnaCreated: {
    fontSize: 12,
    color: colors.TEXT_LIGHT,
  },

  downIcon: {
    width: 11,
    height: 6,
  },

  upIcon: {
    width: 11,
    height: 6,
    // transform: [{rotateZ: '180deg'}],
  },
})

export default styles
