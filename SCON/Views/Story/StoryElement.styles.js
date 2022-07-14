import {StyleSheet} from 'react-native';

import {colors, listElementStyle} from '../../Styles';

const styles = StyleSheet.create({
  storyElementWrapper: {
    ...listElementStyle,
  },
  storyIcon: {
    marginRight: 15,
  },
  storyTextWrapper: {
    flex: 1,
  },
  storytext: {
    flex: 1,
  },
  rightIcon: {
    width: 11,
    height: 6,
    transform: [{rotateZ: '270deg'}],
  },
});

export default styles;
