import {StyleSheet} from 'react-native'

import {colors} from '../../../Styles'

const styles = StyleSheet.create({
  birthWrapper: {
    flexDirection: 'column',
    width: '100%',
  },

  label: {
    color: colors.TEXT_DARK,
    fontSize: 14,
    fontWeight: '700',
  },

  inputWrapper: {
    position: 'relative',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.GRAYE6,
  },

  input: {
    width: '100%',
    paddingVertical: 10,
    color: colors.TEXT_LIGHT,
  },

  downIcon: {
    position: 'absolute',
    top: 15,
    right: 10,
    resizeMode: 'contain',
    width: 15,
  },
})

export default styles
