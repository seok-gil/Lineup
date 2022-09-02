import {StyleSheet} from 'react-native'

import {colors, globalButtonStyle} from '../../../Styles'

const styles = StyleSheet.create({
  photoPickWrapper: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },

  photoPickTouchable: {
    width: 200,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.THEME_SKYBLUE,
  },

  photoPickText: {
    color: colors.THEME_SKYBLUE,
  },
})

export default styles
