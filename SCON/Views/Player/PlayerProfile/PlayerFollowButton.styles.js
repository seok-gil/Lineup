import {StyleSheet} from 'react-native';

import {
  colors,
  globalButtonStyle,
  globalButtonTextStyle,
} from '../../../Styles';

const styles = StyleSheet.create({
  followButton: {
    ...globalButtonStyle,
  },

  followedButton: {
    ...globalButtonStyle,
    backgroundColor: colors.WHITE,
    borderColor: colors.THEME_SKYBLUE,
    borderWidth: 3,
  },

  followText: {
    ...globalButtonTextStyle,
  },

  followedText: {
    ...globalButtonTextStyle,
    color: colors.THEME_SKYBLUE,
  },
});

export default styles;
