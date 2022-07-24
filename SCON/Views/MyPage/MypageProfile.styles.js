import {StyleSheet} from 'react-native';
import {colors} from '../../Styles';

const styles = StyleSheet.create({
  profileWrapper: {
    position: 'relative',
    flexDirection: 'column',
    height: 250,
    backgroundColor: colors.WHITE,
    marginBottom: 10,
  },
  profileInnerWrapper: {
    width: '100%',
    height: '100%',
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
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingHorizontal: 15,
    width: '100%',
    height: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  modifyButton: {},
  modifyButtonText: {
    color: colors.THEME_SKYBLUE,
  },
});

export default styles;
