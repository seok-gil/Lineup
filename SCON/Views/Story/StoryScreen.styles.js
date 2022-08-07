import {StyleSheet} from 'react-native'

import {colors, listElementStyle} from '../../Styles'

const styles = StyleSheet.create({
  storyScreenWrapper: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },

  storyElementWrapper: {
    ...listElementStyle,
  },
})

export default styles
