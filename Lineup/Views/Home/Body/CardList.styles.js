import {StyleSheet} from 'react-native'

import {colors} from '../../../Styles'

const styles = StyleSheet.create({
  cardListWrapper: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  indicatorWrapper: {
    width: '100%',
    height: 8,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    width: 6,
    height: 6,
    marginHorizontal: 5,
    borderRadius: 3,
    backgroundColor: colors.GRAYC9,
  },

  activeDot: {
    width: 6,
    marginHorizontal: 5,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.THEME_SKYBLUE,
  },
})

export default styles
