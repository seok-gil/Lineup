import {StyleSheet} from 'react-native';

import {colors, listElementStyle} from '../../Styles';

const styles = StyleSheet.create({
  feedRegistWrapper: {
    flexDirection: 'column',
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  feedInnerWrapper: {
    padding: 30,
  },
  feedRegistLabel: {
    fontWeight: '700',
    marginBottom: 16,
  },
  feedRegistTextInput: {
    width: 300,
    height: 150,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.GRAYE6,
    borderRadius: 5,
  },
  feedRegistPlaceholder: {},
});

export default styles;
