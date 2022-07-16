import {StyleSheet} from 'react-native';

import {colors} from '../../../Styles';

const styles = StyleSheet.create({
  competitionResultWrapper: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  competitionResultInner: {
    height: '100%',
    padding: 30,
  },

  competitionLabels: {
    color: colors.TEXT_DARK,
    marginBottom: 8,
  },

  leagueTitle: {
    color: colors.TEXT_DARK,
    fontWeight: '700',
    marginBottom: 20,
  },
});

export default styles;
