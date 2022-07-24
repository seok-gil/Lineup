import {StyleSheet} from 'react-native';

import {
  colors,
  globalButtonStyle,
  globalButtonTextStyle,
} from '../../../Styles';

const styles = StyleSheet.create({
  passwordWrapper: {
    flexDirection: 'column',
    backgroundColor: colors.WHITE,
    height: '100%',
  },

  passwordInner: {
    padding: 30,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  passwordTop: {
    width: '100%',
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

  errorMessage: {
    color: colors.RED,
    fontSize: 12,
    marginBottom: 10,
  },

  loginButton: {
    ...globalButtonStyle,
    marginBottom: 30,
  },

  loginButtonNotAvailable: {
    ...globalButtonStyle,
    marginBottom: 30,
    backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
  },

  loginButtonText: globalButtonTextStyle,
});

export default styles;
