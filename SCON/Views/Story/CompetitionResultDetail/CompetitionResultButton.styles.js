import {StyleSheet} from 'react-native'

import {colors, globalButtonStyle, globalButtonTextStyle} from '../../../Styles'

const styles = StyleSheet.create({
  filledButton: {
    ...globalButtonStyle,
  },

  notfillButton: {
    ...globalButtonStyle,
    backgroundColor: colors.WHITE,
    borderColor: colors.THEME_SKYBLUE,
    borderWidth: 3,
  },

  filledText: {
    ...globalButtonTextStyle,
  },

  notfillText: {
    ...globalButtonTextStyle,
    color: colors.THEME_SKYBLUE,
  },
})

export default styles
