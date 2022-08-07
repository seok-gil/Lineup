import {StyleSheet} from 'react-native';

import {colors, globalTextStyle, listElementStyle} from '../../Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.WHITE,
  },

  switchWrapper: {
    ...listElementStyle,
    justifyContent: 'space-between',
  },

  labelText: {
    ...globalTextStyle,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default styles;
