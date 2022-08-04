import {StyleSheet} from 'react-native';
import {
  colors,
  globalButtonTextStyle,
  globalInputStyle,
  globalButtonStyle,
  globalLargeInputStyle,
  listElementStyle,
} from '../../../Styles';

const styles = StyleSheet.create({
  reportOneWrapper: {
    ...listElementStyle,
  },

  imageWrapper: {
    alignItems: 'flex-start',
    height: '100%',
    marginRight: 10,
  },

  profileImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },

  elementLeft: {
    flex: 1,
  },

  title: {
    color: colors.TEXT_DARK,
    fontWeight: '600',
    marginBottom: 5,
    fontSize: 13,
  },

  comment: {
    color: colors.TEXT_DARK,
    fontWeight: '600',
    fontSize: 13,
  },

  elementRight: {
    flexDirection: 'row',
  },

  button: {
    marginRight: 5,
  },

  buttonText: {
    color: colors.THEME_SKYBLUE,
  },
});

export default styles;
