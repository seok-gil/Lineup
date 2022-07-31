import {StyleSheet} from 'react-native';

import {colors} from '../../../Styles';

const styles = StyleSheet.create({
  bodyWrapper: {
    padding: 30,
  },

  insightText: {
    color: colors.TEXT_DARK,
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 5,
  },

  dateText: {
    color: colors.TEXT_LIGHT,
    marginBottom: 5,
  },

  bodyCard: {
    backgroundColor: colors.WHITE,
    borderRadius: 20,
  },

  bodyCardTop: {
    padding: 20,
    borderBottomColor: colors.GRAYE6,
    borderBottomWidth: 2,
  },

  bodyCardBottom: {
    padding: 20,
  },

  cardTitle: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.TEXT_DARK,
    marginBottom: 20,
  },

  textBox: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 8,
    justifyContent: 'space-between',
  },

  textLeft: {
    fontSize: 15,
    color: colors.TEXT_DARK,
  },

  textRight: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.TEXT_DARK,
  },
});

export default styles;
