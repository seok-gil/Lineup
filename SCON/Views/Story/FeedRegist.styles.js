import {StyleSheet} from 'react-native';

import {
  colors,
  globalButtonStyle,
  globalButtonTextStyle,
  globalLargeInputStyle,
} from '../../Styles';

const styles = StyleSheet.create({
  feedRegistWrapper: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },

  feedInnerWrapper: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
  },

  feedRegistTextWrapper: {
    width: '100%',
  },

  feedRegistLabel: {
    fontWeight: '700',
    marginBottom: 16,
    color: colors.TEXT_DARK,
  },

  feedRegistTextInput: globalLargeInputStyle,

  feedRegistButton: globalButtonStyle,

  feedRegistButtonText: globalButtonTextStyle,
});

export default styles;
