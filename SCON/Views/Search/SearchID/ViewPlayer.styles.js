import {StyleSheet} from 'react-native';

import {colors, listElementStyle} from '../../../Styles';

const styles = StyleSheet.create({
  viewPlayerWrapper: {...listElementStyle},

  viewPlayerImage: {
    width: 50,
    height: 50,
    marginRight: 25,
    resizeMode: 'contain',
  },

  viewPlayerInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  playerName: {
    fontSize: 14,
    maxWidth: 200,
    fontWeight: '700',
    marginBottom: 5,
    color: colors.TEXT_DARK,
  },

  playerDescription: {
    fontSize: 11,
    maxWidth: 200,
    color: colors.TEXT_LIGHT,
  },
});

export default styles;
