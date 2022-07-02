import {StyleSheet} from 'react-native';

import {colors} from '../../../Styles';

const styles = StyleSheet.create({
  viewPlayerWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderBottomColor: colors.GRAYE6,
    borderBottomWidth: 1,
  },

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
  },

  playerDescription: {
    fontSize: 11,
    maxWidth: 200,
    opacity: 0.5,
  },

  input: {
    height: 50,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default styles;
