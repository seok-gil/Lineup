import {StyleSheet} from 'react-native';

import {colors} from '../../../Styles';

const styles = StyleSheet.create({
  cardWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 223,
    height: 307,
    borderRadius: 10,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },

  playerMyCardWrapper: {
    backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
  },

  playerCardWrapper: {
    backgroundColor: colors.WHITE,
  },

  playerCardImage: {
    width: 157,
    height: 157,
    justifyContent: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },

  emptyCardWrapper: {
    backgroundColor: colors.WHITE,
  },

  emptyCardImage: {
    width: 112,
    height: 112,
    justifyContent: 'center',
    resizeMode: 'contain',
  },

  nameText: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default styles;
