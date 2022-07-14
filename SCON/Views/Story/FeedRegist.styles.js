import {StyleSheet} from 'react-native';

import {colors, listElementStyle} from '../../Styles';

const styles = StyleSheet.create({
  feedRegistWrapper: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  feedInnerWrapper: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 30,
  },
  textInputWrapper: {},
  feedRegistLabel: {
    fontWeight: '700',
    marginBottom: 16,
  },
  feedRegistTextInput: {
    width: '100%',
    height: 150,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.GRAYE6,
    borderRadius: 5,
  },
  feedRegistPlaceholder: {},
});

export default styles;
