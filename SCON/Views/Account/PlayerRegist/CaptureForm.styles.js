import {StyleSheet} from 'react-native'

import {colors} from '../../../Styles'

const styles = StyleSheet.create({
  captureWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },

  label: {
    color: colors.TEXT_DARK,
    fontSize: 14,
    fontWeight: '700',
  },

  inputWrapper: {
    position: 'relative',
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.GRAYE6,
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
