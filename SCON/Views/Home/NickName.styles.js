import {StyleSheet} from 'react-native';
import {colors} from '../../Styles';

const styles = StyleSheet.create({
  viewWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
  },

  image: {
    width: 64,
    height: 64,
    marginRight: 15,
    resizeMode: 'contain',
  },

  viewProfileInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  nameText: {
    width: 150,
    fontSize: 20,
    fontWeight: '700',
  },

  emailText: {
    width: 150,
    color: colors.TEXT_LIGHT,
  },
});

export default styles;
