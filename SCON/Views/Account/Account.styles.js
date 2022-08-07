import {StyleSheet} from 'react-native';

import {colors, globalTextStyle, listElementStyle} from '../../Styles';

const styles = StyleSheet.create({
  accountScreenWrapper: {
    flexDirection: 'column',
    backgroundColor: colors.WHITE,
    height: '100%',
  },

  menuElement: {
    ...listElementStyle,
    justifyContent: 'space-between',
  },

  icon: {
    transform: [{rotateZ: '270deg'}],
    width: 12,
    resizeMode: 'contain',
  },

  elementText: {
    ...globalTextStyle,
    fontWeight: '600',
  },

  emailText: {
    ...globalTextStyle,
    color: colors.TEXT_LIGHT,
    marginTop: 5,
  },
});

export default styles;
