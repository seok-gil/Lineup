import {StyleSheet} from 'react-native'

import {colors, globalButtonTextStyle, listElementStyle} from '../../../Styles'

const styles = StyleSheet.create({
  playerFeedsWrapper: {
    backgroundColor: colors.WHITE,
  },

  emptyArea: {
    backgroundColor: colors.WHITE,
    flexDirection: 'column',
    width: '100%',
    paddingTop: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyText: {
    marginTop: 20,
    color: colors.TEXT_DARK,
    opacity: 0.5,
    fontSize: 20,
    fontWeight: '600',
  },
})

export default styles
