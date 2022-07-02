import {StyleSheet} from 'react-native';
import {colors} from '../../Styles';

const styles = StyleSheet.create({
  playerCardWrapper: {
    flexDirection: 'column',
    borderBottomColor: colors.GRAYE6,
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },

  playerCardInfo: {
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 3,
    color: colors.TEXT_DARK,
  },

  playerCardDate: {
    fontSize: 11,
    color: colors.TEXT_LIGHT,
  },
});

export default styles;
