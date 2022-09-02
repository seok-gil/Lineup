import {StyleSheet} from 'react-native'

import {colors, listElementStyle} from '../../../Styles'

const styles = StyleSheet.create({
  headWrapper: {
    position: 'relative',

    width: '100%',
    height: 200,
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.THEME_SKYBLUE,
  },

  profileWrapper: {
    position: 'absolute',
    zIndex: 1,
    left: 20,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.WHITE,
    marginRight: 10,
  },

  text: {
    fontSize: 20,
    color: colors.WHITE,
    fontWeight: '700',
  },
})

export default styles
