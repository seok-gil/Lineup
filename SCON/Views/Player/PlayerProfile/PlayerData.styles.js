import {StyleSheet} from 'react-native'

import {colors} from '../../../Styles'

const styles = StyleSheet.create({
  playerDataWrapper: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  playerDataElement: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  playerDataTitle: {
    color: colors.THEME_SKYBLUE,
    fontWeight: '700',
    marginBottom: 3,
  },

  playerDataText: {fontSize: 16, fontWeight: '500', color: colors.TEXT_DARK},
})

export default styles
