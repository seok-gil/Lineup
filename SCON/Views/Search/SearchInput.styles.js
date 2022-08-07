import {StyleSheet} from 'react-native'

import {colors} from '../../Styles'

const styles = StyleSheet.create({
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 100,
    height: 50,
    borderColor: colors.THEME_SKYBLUE,
    borderWidth: 2,
  },

  searchInputIcon: {
    width: 22,
    marginRight: 12,
    resizeMode: 'contain',
  },

  input: {
    height: 50,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default styles
