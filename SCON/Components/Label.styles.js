import {StyleSheet} from 'react-native'
import {colors} from '../Styles'

const styles = StyleSheet.create({
  labelWrapper: {
    position: 'relative',
    width: 34,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  labelIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },

  labelText: {
    zIndex: 2,
    color: colors.WHITE,
    marginBottom: 10,
    fontWeight: '700',
  },
})

export default styles
