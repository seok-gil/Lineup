import {StyleSheet, Dimensions} from 'react-native';

import {colors} from '../../../Styles/constants';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  element: {
    width: '100%',
    borderBottomColor: colors.GRAYE6,
    borderBottomWidth: 2,
    marginBottom: 20,
  },

  label: {
    fontWeight: '700',
    color: colors.TEXT_DARK,
    fontSize: 14,
  },

  text: {
    color: colors.TEXT_DARK,
    fontSize: 16,
    marginVertical: 10,
  },
});

export default styles;
