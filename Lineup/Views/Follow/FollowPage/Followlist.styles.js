import {StyleSheet} from 'react-native'

import {colors, globalTextStyle, listElementStyle} from '../../../Styles'

const styles = StyleSheet.create({
  followListWrapper: {
    ...listElementStyle,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  followListLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },

  namespace: {
    flexDirection: 'column',
  },

  name: {
    ...globalTextStyle,
    fontSize: 15,
    fontWeight: '700',
  },

  belong: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 13,
  },

  followListRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  recordWrapper: {
    width: 50,
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },

  count: {
    ...globalTextStyle,
    fontSize: 14,
    fontWeight: '600',
  },

  tag: {
    ...globalTextStyle,
    fontSize: 10,
    alignItems: 'center',
  },
})

export default styles
