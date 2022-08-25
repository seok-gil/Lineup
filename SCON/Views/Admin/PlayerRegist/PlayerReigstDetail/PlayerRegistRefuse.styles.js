import {StyleSheet} from 'react-native'
import {
  colors,
  globalLargeInputStyle,
  globalTextStyle,
} from '../../../../Styles'

const styles = StyleSheet.create({
  refuseWrapper: {
    width: '100%',
    height: '30%',
    justifyContent: 'space-between',
    backgroundColor: colors.GRAYF6,
    padding: 30,
    paddingBottom: 20,
  },

  refuseTop: {
    flexDirection: 'column',
    flex: 1,
  },

  checkbox: {
    transform: [{scale: 0.7}, {translateY: 3}],
  },

  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInput: {
    ...globalLargeInputStyle,
    width: '100%',
    height: '60%',
    backgroundColor: colors.WHITE,
  },

  textInputNotShown: {
    display: 'none',
  },

  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: colors.GRAYC9,
    width: '40%',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 20,
  },

  acceptButton: {
    backgroundColor: colors.THEME_SKYBLUE,
  },

  buttonText: {
    color: colors.WHITE,
    fontWeight: '600',
    fontSize: 15,
  },
})

export default styles
