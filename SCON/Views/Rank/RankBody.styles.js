import {StyleSheet} from 'react-native';
import {colors} from '../../Styles';

const styles = StyleSheet.create({
  rankBodyWrapper: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: colors.WHITE,
  },
  rankMedalWrapper: {
    flexDirection: 'row',
    height: '40%',
    padding: 30,
    borderBottomColor: colors.GRAYE6,
    borderBottomWidth: 1,
  },
});

export default styles;
