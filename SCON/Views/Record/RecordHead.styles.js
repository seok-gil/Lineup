import {StyleSheet} from 'react-native';
import {colors} from '../../Styles';

const styles = StyleSheet.create({
  recordHeadWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomColor: colors.GRAYE6,
    borderBottomWidth: 1,
  },

  recordHeadTitle: {
    fontWeight: '700',
    fontSize: 18,
  },

  recordHeadMedals: {
    flexDirection: 'row',
  },

  medalImage: {
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },

  medalNum: {
    fontWeight: '500',
    marginRight: 5,
  },
});

export default styles;
