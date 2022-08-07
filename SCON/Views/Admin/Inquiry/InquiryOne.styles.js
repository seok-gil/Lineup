import {StyleSheet} from 'react-native'
import {
  colors,
  globalButtonStyle,
  globalButtonTextStyle,
  globalLargeInputStyle,
  listElementStyle,
} from '../../../Styles'

const styles = StyleSheet.create({
  inquiryListElementWrapper: {
    ...listElementStyle,
    backgroundColor: colors.WHITE,
  },

  inquiryLeft: {
    flex: 1,
  },

  qnaInfo: {
    marginBottom: 5,
    color: colors.TEXT_DARK,
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
    transform: [{rotateZ: '180deg'}],
  },

  inquiryQnAWrapper: {
    backgroundColor: colors.GRAYF6,
  },

  inquiryQuestion: {
    padding: 30,
  },

  letter: {
    color: colors.TEXT_DARK,
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 8,
  },

  content: {
    color: colors.TEXT_DARK,
    fontWeight: '500',
  },

  inquiryInput: {
    ...globalLargeInputStyle,
    backgroundColor: colors.WHITE,
    marginBottom: 10,
  },

  buttonWrapper: {
    width: '100%',
    alignItems: 'flex-end',
  },

  button: {
    ...globalButtonStyle,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },

  buttonText: globalButtonTextStyle,
})

export default styles
