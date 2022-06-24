import {StyleSheet} from 'react-native';
import {colors} from '../../Styles';

const styles = StyleSheet.create({
  goPlayerWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
    paddingVertical: 6,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: colors.BLACK,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  touchableLeft: {
    flex: 0.9,
  },

  touchableRight: {
    flex: 0.1,
    justifyContent: 'flex-start',
  },

  alertImage: {
    marginRight: 6,
  },

  alertText: {
    color: colors.TEXT_DARK,
  },
});

export default styles;
