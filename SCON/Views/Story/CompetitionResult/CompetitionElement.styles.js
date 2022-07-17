import {StyleSheet} from 'react-native';

import {colors, listElementStyle} from '../../../Styles';

const styles = StyleSheet.create({
  competitionElementWrapper: {
    ...listElementStyle,
    justifyContent: 'space-between',
  },

  competitionElementTexts: {
    flexDirection: 'column',
  },

  dataName: {
    fontWeight: '700',
    color: colors.TEXT_DARK,
    marginBottom: 4,
  },

  dataDate: {
    color: colors.TEXT_LIGHT,
  },

  modifyText: {
    fontSize: 13,
    color: colors.THEME_SKYBLUE,
  },
});

export default styles;
