import {StyleSheet} from 'react-native';

import {colors, listElementStyle} from '../../Styles';

const styles = StyleSheet.create({
  storyElementWrapper: {
    ...listElementStyle,
  },

  storyIcon: {
    marginRight: 15,
    width: 16,
    resizeMode: 'contain',
  },

  storyTextWrapper: {
    flex: 1,
    color: colors.TEXT_DARK,
  },

  storyText: {
    fontWeight: '700',
  },

  rightIcon: {
    width: 11,
    height: 6,
    transform: [{rotateZ: '270deg'}],
  },
});

export default styles;
