import {StyleSheet} from 'react-native';
import {colors} from '../../../Styles';

const styles = StyleSheet.create({
  profileWrapper: {
    flexDirection: 'column',
    height: 250,
    backgroundColor: colors.WHITE,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  nickname: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.TEXT_DARK,
    marginBottom: 5,
  },
  email: {
    fontSize: 13,
    color: colors.TEXT_LIGHT,
  },
});

export default styles;
