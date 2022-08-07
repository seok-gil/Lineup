import {StyleSheet} from 'react-native'
import {colors, listElementStyle} from '../../../Styles'

const styles = StyleSheet.create({
  mypageTabWrapper: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  mypageElement: {
    ...listElementStyle,
  },

  elementLeft: {
    flexDirection: 'row',
    flex: 1,
  },

  elementText: {
    marginLeft: 20,
    fontWeight: '700',
  },

  elementIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  arrowIcon: {
    width: 11,
    height: 6,
    resizeMode: 'contain',
    transform: [{rotateZ: '270deg'}],
  },
})

export default styles
