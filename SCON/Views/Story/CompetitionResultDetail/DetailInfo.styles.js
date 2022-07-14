import {StyleSheet} from 'react-native';
import {colors} from '../../../Styles/constants';

const styles = StyleSheet.create({
  detailWrapper: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leagueTypeText: {
    fontWeight: '700',
  },

  inputButtonWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
  },

  addIcon: {
    width: 12,
    height: 12,
    marginRight: 6,
  },

  buttonInnerText: {
    fontWeight: '700',
  },
});

export default styles;
