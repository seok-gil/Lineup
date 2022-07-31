import {StyleSheet} from 'react-native';
import {
  colors,
  globalButtonTextStyle,
  globalInputStyle,
  globalButtonStyle,
  globalLargeInputStyle,
} from '../../../Styles';

const styles = StyleSheet.create({
  notiRegistWrapper: {
    backgroundColor: colors.WHITE,
    width: '100%',
    height: '100%',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  notiRegistInner: {
    width: '100%',
  },

  notiRegistLabel: {
    fontWeight: '700',
    marginBottom: 16,
    color: colors.TEXT_DARK,
  },

  titleInput: {...globalInputStyle, marginBottom: 16},

  contentInput: globalLargeInputStyle,

  registTextWrapper: {
    width: '100%',
  },

  registButton: globalButtonStyle,

  registButtonText: globalButtonTextStyle,
});

export default styles;
