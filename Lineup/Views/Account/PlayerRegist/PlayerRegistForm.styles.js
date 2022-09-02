import {StyleSheet} from 'react-native'

import {colors, globalButtonStyle, globalButtonTextStyle} from '../../../Styles'

const styles = StyleSheet.create({
  registWrapper: {
    flexDirection: 'column',
    backgroundColor: colors.WHITE,
    height: '100%',
  },

  registInner: {
    padding: 30,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  registTop: {
    width: '100%',
    flex: 1,
  },

  title: {
    fontWeight: '700',
    color: colors.TEXT_DARK,
    fontSize: 23,
    marginBottom: 20,
  },

  desc: {
    color: colors.TEXT_DARK,
    fontSize: 13,
    marginBottom: 10,
  },

  captureWrapper: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },

  captureImage: {
    width: 180,
    height: 120,
    borderRadius: 10,
    borderColor: colors.THEME_SKYBLUE,
    borderWidth: 2,
    resizeMode: 'cover',
  },

  inputWrapper: {
    position: 'relative',
  },

  input: {
    width: '100%',
    paddingVertical: 10,
    marginBottom: 20,
    borderBottomColor: colors.GRAYE6,
    borderBottomWidth: 2,
  },

  label: {
    color: colors.TEXT_DARK,
    fontSize: 14,
    fontWeight: '700',
  },

  loginButton: globalButtonStyle,

  loginButtonNotAvailable: {
    ...globalButtonStyle,
    backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
  },

  loginButtonText: globalButtonTextStyle,
})

export default styles
