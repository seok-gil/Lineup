import {StyleSheet} from 'react-native';

import {colors} from '../../Styles';

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

  feedRegistTextInput: {
    width: '100%',
    height: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.GRAYE6,
    borderRadius: 5,
  },
});

export default styles;
