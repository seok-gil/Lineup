import {StyleSheet} from 'react-native'

import {colors, globalButtonStyle, globalButtonTextStyle} from '../../Styles'

const styles = StyleSheet.create({
  loginWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    height: '100%',
  },

  bottomSection: {
    width: '100%',
    height: '60%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  loginSection: {
    padding: 30,
    width: '100%',
    alignItems: 'center',
  },

  logoArea: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoImage: {
    width: 160,
    height: 55,
    resizeMode: 'cover',
  },

  loginInput: {
    width: '100%',
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomColor: colors.GRAYE6,
    borderBottomWidth: 2,
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

  loginButton: {...globalButtonStyle, marginTop: 10},

  loginButtonText: globalButtonTextStyle,

  loginBottom: {
    paddingVertical: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 100,
  },

  signup: {
    color: colors.THEME_SKYBLUE,
  },

  password: {
    color: colors.TEXT_DARK,
  },
})

export default styles
