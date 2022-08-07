import {StyleSheet} from 'react-native'
import {
  colors,
  globalButtonStyle,
  globalButtonTextStyle,
  globalTextStyle,
} from '../../../Styles'

const styles = StyleSheet.create({
  withdrawWrapper: {
    padding: 30,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  withdrawInner: {
    flex: 1,
  },

  photo: {
    width: 72,
    resizeMode: 'contain',
    marginBottom: 30,
  },

  title: {
    ...globalTextStyle,
    fontSize: 23,
    fontWeight: '700',
    marginBottom: 50,
  },

  info: {
    marginBottom: 20,
  },

  infoBold: {
    ...globalTextStyle,
    fontWeight: '700',
    marginBottom: 10,
  },

  infoDim: {
    color: colors.TEXT_LIGHT,
    fontSize: 12,
  },

  checkIcon: {
    position: 'absolute',
    top: 8,
    right: 10,
    resizeMode: 'contain',
    width: 15,
  },

  inputWrapper: {
    position: 'relative',
  },

  checkIconNotShown: {
    display: 'none',
    position: 'absolute',
    resizeMode: 'contain',
    width: 5,
    right: 10,
  },

  input: {
    width: '100%',
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomColor: colors.GRAYE6,
    borderBottomWidth: 2,
  },

  label: {
    ...globalTextStyle,
    fontWeight: '700',
  },

  errorMessageWrapper: {
    height: 20,
  },

  errorMessage: {
    position: 'absolute',
    top: 2,
    color: colors.RED,
    fontSize: 12,
  },
  loginButton: globalButtonStyle,

  loginButtonNotAvailable: {
    ...globalButtonStyle,
    backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
  },

  loginButtonText: globalButtonTextStyle,
})

export default styles
