import {StyleSheet} from 'react-native'

import {colors, globalInputStyle} from '../../../Styles'

const styles = StyleSheet.create({
  detailEventWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  textInputWrapper: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInputStyle: {
    ...globalInputStyle,
    width: '100%',
  },

  xIconWrapper: {
    marginLeft: -20,
  },

  addIconWrapper: {
    marginLeft: 10,
  },

  addIcon: {
    width: 20,
    resizeMode: 'contain',
  },
})

export default styles
