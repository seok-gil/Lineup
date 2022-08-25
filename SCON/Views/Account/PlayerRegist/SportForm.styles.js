import {StyleSheet} from 'react-native'

import {colors} from '../../../Styles'

const styles = StyleSheet.create({
  sportWrapper: {
    flexDirection: 'column',
    width: '100%',
    zIndex: 9,
  },

  label: {
    color: colors.TEXT_DARK,
    fontSize: 14,
    fontWeight: '700',
  },

  inputWrapper: {
    position: 'relative',
    paddingVertical: 10,
    marginBottom: 20,
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

  dropdownStyle: {
    borderColor: colors.GRAYE6,
    zIndex: 9,
  },

  dropdownContainerStyle: {
    borderColor: colors.GRAYE6,
    backgroundColor: colors.WHITE,
  },

  textStyle: {
    color: colors.TEXT_DARK,
  },
})

export default styles
