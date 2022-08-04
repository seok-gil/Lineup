import {StyleSheet} from 'react-native';

import {
  colors,
  globalButtonStyle,
  globalButtonTextStyle,
} from '../../../Styles';

const styles = StyleSheet.create({
  forgetWrapper: {
    flexDirection: 'column',
    backgroundColor: colors.WHITE,
    height: '100%',
  },

  forgetInner: {
    padding: 30,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  forgetTop: {
    width: '100%',
  },

  title: {
    fontWeight: '700',
    color: colors.TEXT_DARK,
    fontSize: 23,
    marginBottom: 30,
  },

  input: {
    width: '100%',
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomColor: colors.GRAYE6,
    borderBottomWidth: 2,
  },

  label: {
    fontWeight: '700',
    color: colors.TEXT_DARK,
    fontSize: 14,
  },

  errorMessageWrapper: {
    height: 30,
  },

  errorMessage: {
    position: 'absolute',
    top: 2,
    color: colors.RED,
    fontSize: 12,
  },

  email: {
    position: 'relative',
  },

  sendButton: {
    position: 'absolute',
    top: 11,
    right: 5,
    height: 16,
  },

  sendButtonText: {
    color: colors.THEME_SKYBLUE,
  },
  sendButtonOffText: {
    color: colors.TEXT_LIGHT,
  },

  loginButton: globalButtonStyle,

  loginButtonNotAvailable: {
    ...globalButtonStyle,
    backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
  },

  loginButtonText: globalButtonTextStyle,
});

export default styles;
