import {StyleSheet} from 'react-native';

import {colors, listElementStyle} from '../../Styles';

const styles = StyleSheet.create({
  followScreenWrapper: {
    flexDirection: 'column',
    backgroundColor: colors.WHITE,
    height: '100%',
  },

  followScreenInner: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
});

export default styles;
